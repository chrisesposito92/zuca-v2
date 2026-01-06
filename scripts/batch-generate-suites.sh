#!/bin/bash
#
# Batch UC Generator → Test Suite Builder
#
# Generates use cases for multiple companies and appends them to test suite YAML files.
# Uses the --to-suite (-t) option to append rather than overwrite.
#
# Usage:
#   ./scripts/batch-generate-suites.sh                    # Run all categories
#   ./scripts/batch-generate-suites.sh saas               # Run only SaaS companies
#   ./scripts/batch-generate-suites.sh fintech telco      # Run specific categories
#
# Environment:
#   UC_COUNT      - Use cases per company (default: 3)
#   UC_MODEL      - LLM model to use (default: gemini-3-flash-preview)
#   UC_LOCAL      - Set to "false" to disable local mode (default: true)
#

set -e

# Configuration
UC_COUNT="${UC_COUNT:-3}"
UC_MODEL="${UC_MODEL:-gemini-3-flash-preview}"
UC_LOCAL="${UC_LOCAL:-true}"
SUITE_DIR="data/test-suites"

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Progress tracking
TOTAL=0
SUCCESS=0
FAILED=0

log_info() { echo -e "${BLUE}[INFO]${NC} $1"; }
log_success() { echo -e "${GREEN}[OK]${NC} $1"; }
log_warn() { echo -e "${YELLOW}[WARN]${NC} $1"; }
log_error() { echo -e "${RED}[ERROR]${NC} $1"; }

# Generate for a single company
generate_company() {
  local name="$1"
  local url="$2"
  local suite_file="$3"

  TOTAL=$((TOTAL + 1))

  log_info "Generating UCs for: $name (https://www.$url)"

  local cmd="npm run cli -- generate \"$name\" -w \"https://www.$url\" -c $UC_COUNT -t \"$suite_file\" -m $UC_MODEL"

  if [[ "$UC_LOCAL" == "true" ]]; then
    cmd="$cmd -l"
  fi

  if eval "$cmd" 2>&1; then
    log_success "$name: Added to $suite_file"
    SUCCESS=$((SUCCESS + 1))
  else
    log_error "$name: Generation failed"
    FAILED=$((FAILED + 1))
  fi

  # Small delay to avoid rate limiting
  sleep 2
}

# Category: SaaS
run_saas() {
  local suite_file="$SUITE_DIR/saas-companies-5.yaml"
  log_info "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  log_info "Category: saas → $suite_file"
  log_info "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

  generate_company "Loom" "loom.com" "$suite_file"
  generate_company "ClickUp" "clickup.com" "$suite_file"
  generate_company "Amplitude" "amplitude.com" "$suite_file"
  generate_company "Mixpanel" "mixpanel.com" "$suite_file"
  generate_company "LaunchDarkly" "launchdarkly.com" "$suite_file"
  generate_company "Postman" "postman.com" "$suite_file"
  generate_company "GitLab" "gitlab.com" "$suite_file"
  generate_company "Contentful" "contentful.com" "$suite_file"
  generate_company "Calendly" "calendly.com" "$suite_file"
  generate_company "Zapier" "zapier.com" "$suite_file"
  generate_company "Grammarly" "grammarly.com" "$suite_file"
  generate_company "1Password" "1password.com" "$suite_file"
  generate_company "Coda" "coda.io" "$suite_file"
  generate_company "Typeform" "typeform.com" "$suite_file"
  generate_company "Airtable" "airtable.com" "$suite_file"
}

# Category: FinTech
run_fintech() {
  local suite_file="$SUITE_DIR/fintech-companies-5.yaml"
  log_info "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  log_info "Category: fintech → $suite_file"
  log_info "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

  generate_company "Mercury" "mercury.com" "$suite_file"
  generate_company "Deel" "deel.com" "$suite_file"
  generate_company "Remote" "remote.com" "$suite_file"
  generate_company "Ramp" "ramp.com" "$suite_file"
  generate_company "Melio" "meliopayments.com" "$suite_file"
  generate_company "Payoneer" "payoneer.com" "$suite_file"
  generate_company "Razorpay" "razorpay.com" "$suite_file"
  generate_company "Wealthfront" "wealthfront.com" "$suite_file"
  generate_company "Betterment" "betterment.com" "$suite_file"
  generate_company "Acorns" "acorns.com" "$suite_file"
}

# Category: Telco/CPaaS
run_telco() {
  local suite_file="$SUITE_DIR/telco-companies-5.yaml"
  log_info "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  log_info "Category: telco → $suite_file"
  log_info "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

  generate_company "Aircall" "aircall.io" "$suite_file"
  generate_company "Five9" "five9.com" "$suite_file"
  generate_company "Genesys Cloud" "genesys.com" "$suite_file"
  generate_company "Talkdesk" "talkdesk.com" "$suite_file"
  generate_company "Nextiva" "nextiva.com" "$suite_file"
  generate_company "GoTo Connect" "goto.com" "$suite_file"
}

# Category: Infrastructure/Cloud
run_infrastructure() {
  local suite_file="$SUITE_DIR/infrastructure-companies-5.yaml"
  log_info "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  log_info "Category: infrastructure → $suite_file"
  log_info "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

  generate_company "CockroachDB" "cockroachlabs.com" "$suite_file"
  generate_company "TimescaleDB" "timescale.com" "$suite_file"
  generate_company "SingleStore" "singlestore.com" "$suite_file"
  generate_company "Redis Enterprise" "redis.com" "$suite_file"
  generate_company "Confluent" "confluent.io" "$suite_file"
  generate_company "Grafana Labs" "grafana.com" "$suite_file"
  generate_company "Hasura" "hasura.io" "$suite_file"
  generate_company "Prisma" "prisma.io" "$suite_file"
  generate_company "Pulumi" "pulumi.com" "$suite_file"
  generate_company "Terraform Cloud" "hashicorp.com" "$suite_file"
}

# Category: Media/Streaming
run_media() {
  local suite_file="$SUITE_DIR/media-companies-5.yaml"
  log_info "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  log_info "Category: media → $suite_file"
  log_info "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

  generate_company "Vimeo" "vimeo.com" "$suite_file"
  generate_company "SoundCloud" "soundcloud.com" "$suite_file"
  generate_company "Audible" "audible.com" "$suite_file"
  generate_company "Starz" "starz.com" "$suite_file"
  generate_company "BritBox" "britbox.com" "$suite_file"
  generate_company "Shudder" "shudder.com" "$suite_file"
  generate_company "AMC+" "amcplus.com" "$suite_file"
  generate_company "Mubi" "mubi.com" "$suite_file"
}

# Category: E-commerce
run_ecommerce() {
  local suite_file="$SUITE_DIR/ecommerce-companies-5.yaml"
  log_info "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  log_info "Category: ecommerce → $suite_file"
  log_info "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

  generate_company "Chargebee" "chargebee.com" "$suite_file"
  generate_company "Recurly" "recurly.com" "$suite_file"
  generate_company "FastSpring" "fastspring.com" "$suite_file"
  generate_company "Podia" "podia.com" "$suite_file"
  generate_company "Teachable" "teachable.com" "$suite_file"
  generate_company "Thinkific" "thinkific.com" "$suite_file"
  generate_company "Kajabi" "kajabi.com" "$suite_file"
  generate_company "Webflow" "webflow.com" "$suite_file"
}

# Category: Healthcare
run_healthcare() {
  local suite_file="$SUITE_DIR/healthcare-companies-5.yaml"
  log_info "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  log_info "Category: healthcare → $suite_file"
  log_info "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

  generate_company "One Medical" "onemedical.com" "$suite_file"
  generate_company "Headspace" "headspace.com" "$suite_file"
  generate_company "Calm" "calm.com" "$suite_file"
  generate_company "Noom" "noom.com" "$suite_file"
  generate_company "Capsule" "capsule.com" "$suite_file"
  generate_company "Alto Pharmacy" "alto.com" "$suite_file"
  generate_company "Carbon Health" "carbonhealth.com" "$suite_file"
  generate_company "Talkspace" "talkspace.com" "$suite_file"
}

# Print summary
print_summary() {
  echo ""
  log_info "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  log_info "SUMMARY"
  log_info "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo -e "  Total:   $TOTAL"
  echo -e "  ${GREEN}Success: $SUCCESS${NC}"
  echo -e "  ${RED}Failed:  $FAILED${NC}"
  echo ""

  # Show training data stats
  log_info "Checking training data..."
  npm run cli -- training stats 2>/dev/null || true
}

# Main
main() {
  local categories=("$@")

  # If no categories specified, run all
  if [[ ${#categories[@]} -eq 0 ]]; then
    categories=(saas fintech telco infrastructure media ecommerce healthcare)
  fi

  log_info "Batch UC Generation"
  log_info "Model: $UC_MODEL | Count: $UC_COUNT per company | Local: $UC_LOCAL"
  echo ""

  for category in "${categories[@]}"; do
    case "$category" in
      saas) run_saas ;;
      fintech) run_fintech ;;
      telco) run_telco ;;
      infrastructure) run_infrastructure ;;
      media) run_media ;;
      ecommerce) run_ecommerce ;;
      healthcare) run_healthcare ;;
      *) log_warn "Unknown category: $category" ;;
    esac
  done

  print_summary
}

main "$@"
