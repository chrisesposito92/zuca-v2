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
  local suite_file="$SUITE_DIR/saas-companies-3.yaml"
  log_info "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  log_info "Category: saas → $suite_file"
  log_info "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

  generate_company "Notion" "notion.so" "$suite_file"
  generate_company "Airtable" "airtable.com" "$suite_file"
  generate_company "Monday.com" "monday.com" "$suite_file"
  generate_company "Asana" "asana.com" "$suite_file"
  generate_company "Figma" "figma.com" "$suite_file"
  generate_company "Canva" "canva.com" "$suite_file"
  generate_company "Miro" "miro.com" "$suite_file"
  generate_company "Linear" "linear.app" "$suite_file"
  generate_company "Retool" "retool.com" "$suite_file"
  generate_company "Webflow" "webflow.com" "$suite_file"
  generate_company "Intercom" "intercom.com" "$suite_file"
  generate_company "Freshworks" "freshworks.com" "$suite_file"
  generate_company "PagerDuty" "pagerduty.com" "$suite_file"
  generate_company "Splunk" "splunk.com" "$suite_file"
  generate_company "Elastic" "elastic.co" "$suite_file"
}

# Category: FinTech
run_fintech() {
  local suite_file="$SUITE_DIR/fintech-companies-3.yaml"
  log_info "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  log_info "Category: fintech → $suite_file"
  log_info "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

  generate_company "Marqeta" "marqeta.com" "$suite_file"
  generate_company "Checkout.com" "checkout.com" "$suite_file"
  generate_company "Wise" "wise.com" "$suite_file"
  generate_company "Revolut" "revolut.com" "$suite_file"
  generate_company "Chime" "chime.com" "$suite_file"
  generate_company "N26" "n26.com" "$suite_file"
  generate_company "Robinhood" "robinhood.com" "$suite_file"
  generate_company "Coinbase" "coinbase.com" "$suite_file"
  generate_company "SoFi" "sofi.com" "$suite_file"
  generate_company "Navan" "navan.com" "$suite_file"
}

# Category: Telco/CPaaS
run_telco() {
  local suite_file="$SUITE_DIR/telco-companies-3.yaml"
  log_info "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  log_info "Category: telco → $suite_file"
  log_info "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

  generate_company "Telnyx" "telnyx.com" "$suite_file"
  generate_company "Infobip" "infobip.com" "$suite_file"
  generate_company "Telesign" "telesign.com" "$suite_file"
  generate_company "8x8" "8x8.com" "$suite_file"
  generate_company "RingCentral" "ringcentral.com" "$suite_file"
  generate_company "Dialpad" "dialpad.com" "$suite_file"
}

# Category: Infrastructure/Cloud
run_infrastructure() {
  local suite_file="$SUITE_DIR/infrastructure-companies-3.yaml"
  log_info "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  log_info "Category: infrastructure → $suite_file"
  log_info "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

  generate_company "Render" "render.com" "$suite_file"
  generate_company "Railway" "railway.app" "$suite_file"
  generate_company "Fly.io" "fly.io" "$suite_file"
  generate_company "Supabase" "supabase.com" "$suite_file"
  generate_company "PlanetScale" "planetscale.com" "$suite_file"
  generate_company "Neon" "neon.tech" "$suite_file"
  generate_company "Upstash" "upstash.com" "$suite_file"
  generate_company "Deno" "deno.com" "$suite_file"
  generate_company "Bun" "bun.sh" "$suite_file"
  generate_company "Turso" "turso.tech" "$suite_file"
}

# Category: Media/Streaming
run_media() {
  local suite_file="$SUITE_DIR/media-companies-3.yaml"
  log_info "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  log_info "Category: media → $suite_file"
  log_info "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

  generate_company "Apple TV+" "tv.apple.com" "$suite_file"
  generate_company "Amazon Prime Video" "primevideo.com" "$suite_file"
  generate_company "Tidal" "tidal.com" "$suite_file"
  generate_company "Deezer" "deezer.com" "$suite_file"
  generate_company "Crunchyroll" "crunchyroll.com" "$suite_file"
  generate_company "Funimation" "funimation.com" "$suite_file"
  generate_company "ESPN+" "espn.com" "$suite_file"
  generate_company "Discovery+" "discoveryplus.com" "$suite_file"
}

# Category: E-commerce
run_ecommerce() {
  local suite_file="$SUITE_DIR/ecommerce-companies-3.yaml"
  log_info "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  log_info "Category: ecommerce → $suite_file"
  log_info "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

  generate_company "WooCommerce" "woocommerce.com" "$suite_file"
  generate_company "Magento" "magento.com" "$suite_file"
  generate_company "PrestaShop" "prestashop.com" "$suite_file"
  generate_company "Ecwid" "ecwid.com" "$suite_file"
  generate_company "Sellfy" "sellfy.com" "$suite_file"
  generate_company "Gumroad" "gumroad.com" "$suite_file"
  generate_company "Lemonsqueezy" "lemonsqueezy.com" "$suite_file"
  generate_company "Paddle" "paddle.com" "$suite_file"
}

# Category: Healthcare
run_healthcare() {
  local suite_file="$SUITE_DIR/healthcare-companies-3.yaml"
  log_info "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  log_info "Category: healthcare → $suite_file"
  log_info "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

  generate_company "Athenahealth" "athenahealth.com" "$suite_file"
  generate_company "Medidata" "medidata.com" "$suite_file"
  generate_company "Flatiron Health" "flatiron.com" "$suite_file"
  generate_company "Oscar Health" "hioscar.com" "$suite_file"
  generate_company "Ro" "ro.co" "$suite_file"
  generate_company "Hims & Hers" "forhims.com" "$suite_file"
  generate_company "Zocdoc" "zocdoc.com" "$suite_file"
  generate_company "MDClone" "mdclone.com" "$suite_file"
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
