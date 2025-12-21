import { GoldenUseCaseCapability } from '../types/golden-use-cases';
import { DetectedCapabilities, MatchedGoldenUseCase, MatchGoldenUseCasesOutput } from '../types/output';

/**
 * Canonicalize a label for comparison
 * - Lowercase
 * - Replace non-alphanumeric with spaces
 * - Collapse multiple spaces
 * - Trim
 */
function canonicalize(label: string): string {
  if (typeof label !== 'string') return '';
  return label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Create a canonical map from an array of labels
 * Maps canonical form -> original pretty form
 */
function createCanonicalMap(labels: string[]): Map<string, string> {
  const map = new Map<string, string>();
  for (const label of labels) {
    if (typeof label !== 'string') continue;
    const canonical = canonicalize(label);
    if (canonical && !map.has(canonical)) {
      map.set(canonical, label.trim());
    }
  }
  return map;
}

/**
 * Calculate Jaccard similarity between two sets
 * J(A,B) = |A ∩ B| / |A ∪ B|
 */
function jaccardSimilarity(setA: Set<string>, setB: Set<string>): number {
  const union = new Set([...setA, ...setB]);
  if (union.size === 0) return 0;

  let intersectionSize = 0;
  for (const item of setA) {
    if (setB.has(item)) {
      intersectionSize++;
    }
  }

  return intersectionSize / union.size;
}

/**
 * Get intersection of two canonical maps (returns pretty forms)
 */
function getIntersection(
  queryMap: Map<string, string>,
  goldenMap: Map<string, string>
): string[] {
  const result: string[] = [];
  for (const [canonical, pretty] of queryMap) {
    if (goldenMap.has(canonical)) {
      result.push(pretty);
    }
  }
  return result;
}

/**
 * Get items in queryMap that are NOT in goldenMap (returns pretty forms)
 */
function getMissing(
  queryMap: Map<string, string>,
  goldenMap: Map<string, string>
): string[] {
  const result: string[] = [];
  for (const [canonical, pretty] of queryMap) {
    if (!goldenMap.has(canonical)) {
      result.push(pretty);
    }
  }
  return result;
}

/**
 * Extract capability flags from a golden use case
 * Handles nested structures like {"RECURRING": "X", "USAGE": null}
 */
function extractCapabilityFlags(
  capabilities: Record<string, string | null> | undefined
): Map<string, string> {
  const map = new Map<string, string>();

  if (!capabilities || typeof capabilities !== 'object') {
    return map;
  }

  for (const [key, value] of Object.entries(capabilities)) {
    // Check if it's a "flag" value (X, Yes, true, 1, etc.)
    const isFlag =
      value === 'X' ||
      value === 'x' ||
      value === 'Yes' ||
      value === 'YES' ||
      value === 'true' ||
      value === '1';

    if (isFlag) {
      const canonical = canonicalize(key);
      if (canonical && !map.has(canonical)) {
        map.set(canonical, key);
      }
    }
  }

  return map;
}

/**
 * Match detected capabilities against golden use cases using Jaccard similarity
 */
export function matchToGoldenUseCases(
  detected: DetectedCapabilities,
  goldenUseCases: GoldenUseCaseCapability[],
  options: {
    topK?: number;
    minScore?: number;
    billingWeight?: number;
    revenueWeight?: number;
  } = {}
): MatchGoldenUseCasesOutput {
  const {
    topK = 3,
    minScore = 0.05,
    billingWeight = 1.0,
    revenueWeight = 1.0,
  } = options;

  // Create canonical maps from detected capabilities
  const billingQuery = createCanonicalMap(detected.billing_caps);
  const revenueQuery = createCanonicalMap(detected.revenue_caps);

  // Score each golden use case
  const results: MatchedGoldenUseCase[] = goldenUseCases.map((guc) => {
    const id = guc['Use Case Id'] || 'UNKNOWN';
    const title = guc['Use Case Name'] || guc.Description || String(id);

    // Extract capabilities from golden use case
    const billingGolden = extractCapabilityFlags(guc['Billing Capabilities']);
    const revenueGolden = extractCapabilityFlags(guc['Revenue Capabilities']);

    // Calculate Jaccard similarities
    const jaccardBilling = jaccardSimilarity(
      new Set(billingQuery.keys()),
      new Set(billingGolden.keys())
    );
    const jaccardRevenue = jaccardSimilarity(
      new Set(revenueQuery.keys()),
      new Set(revenueGolden.keys())
    );

    // Calculate weighted score
    const denominator = billingWeight + revenueWeight || 1;
    const scoreRaw =
      (billingWeight * jaccardBilling + revenueWeight * jaccardRevenue) / denominator;

    // Adjust score by confidence
    const confidence = Number.isFinite(detected.confidence) ? detected.confidence : 0.7;
    const score = scoreRaw * (0.5 + 0.5 * confidence);

    return {
      id: String(id),
      title: String(title),
      score: Number(score.toFixed(6)),
      score_raw: Number(scoreRaw.toFixed(6)),
      jaccard_billing: Number(jaccardBilling.toFixed(6)),
      jaccard_revenue: Number(jaccardRevenue.toFixed(6)),
      billing: {
        intersection: getIntersection(billingQuery, billingGolden),
        missing: getMissing(billingQuery, billingGolden),
        unmatched: getMissing(billingGolden, billingQuery),
      },
      revenue: {
        intersection: getIntersection(revenueQuery, revenueGolden),
        missing: getMissing(revenueQuery, revenueGolden),
        unmatched: getMissing(revenueGolden, revenueQuery),
      },
    };
  });

  // Sort by score descending
  results.sort((a, b) => b.score - a.score);

  // Get top matches above minimum score
  const matchedGuc = results
    .filter((r) => r.score >= minScore)
    .slice(0, Math.max(1, topK));

  return {
    matched_guc: matchedGuc,
    scores_all: results,
    normalized_inputs: {
      billing_caps: Array.from(billingQuery.values()),
      revenue_caps: Array.from(revenueQuery.values()),
    },
  };
}

/**
 * Format matched golden use cases for LLM context
 */
export function formatMatchedGucForContext(matched: MatchedGoldenUseCase[]): string {
  if (matched.length === 0) {
    return 'No matching golden use cases found.';
  }

  return matched
    .map((m, i) => {
      const parts = [
        `${i + 1}. ${m.title} (${m.id})`,
        `   Score: ${(m.score * 100).toFixed(1)}%`,
        `   Billing match: ${m.billing.intersection.join(', ') || 'none'}`,
        `   Revenue match: ${m.revenue.intersection.join(', ') || 'none'}`,
      ];
      if (m.billing.missing.length > 0) {
        parts.push(`   Missing billing: ${m.billing.missing.join(', ')}`);
      }
      if (m.revenue.missing.length > 0) {
        parts.push(`   Missing revenue: ${m.revenue.missing.join(', ')}`);
      }
      return parts.join('\n');
    })
    .join('\n\n');
}
