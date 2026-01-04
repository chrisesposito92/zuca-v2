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
  local suite_file="$SUITE_DIR/saas-companies.yaml"
  log_info "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  log_info "Category: saas → $suite_file"
  log_info "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

  generate_company "Salesforce" "salesforce.com" "$suite_file"
  generate_company "HubSpot" "hubspot.com" "$suite_file"
  generate_company "Zendesk" "zendesk.com" "$suite_file"
  generate_company "Slack" "slack.com" "$suite_file"
  generate_company "Dropbox" "dropbox.com" "$suite_file"
  generate_company "Zoom" "zoom.us" "$suite_file"
  generate_company "Atlassian" "atlassian.com" "$suite_file"
  generate_company "ServiceNow" "servicenow.com" "$suite_file"
  generate_company "Workday" "workday.com" "$suite_file"
  generate_company "DocuSign" "docusign.com" "$suite_file"
  generate_company "Okta" "okta.com" "$suite_file"
  generate_company "Twilio" "twilio.com" "$suite_file"
  generate_company "Datadog" "datadoghq.com" "$suite_file"
  generate_company "Snowflake" "snowflake.com" "$suite_file"
  generate_company "MongoDB" "mongodb.com" "$suite_file"
}

# Category: FinTech
run_fintech() {
  local suite_file="$SUITE_DIR/fintech-companies.yaml"
  log_info "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  log_info "Category: fintech → $suite_file"
  log_info "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

  generate_company "Stripe" "stripe.com" "$suite_file"
  generate_company "Square" "squareup.com" "$suite_file"
  generate_company "Plaid" "plaid.com" "$suite_file"
  generate_company "Brex" "brex.com" "$suite_file"
  generate_company "Rippling" "rippling.com" "$suite_file"
  generate_company "Gusto" "gusto.com" "$suite_file"
  generate_company "Bill.com" "bill.com" "$suite_file"
  generate_company "Affirm" "affirm.com" "$suite_file"
  generate_company "Klarna" "klarna.com" "$suite_file"
  generate_company "Adyen" "adyen.com" "$suite_file"
}

# Category: Telco/CPaaS
run_telco() {
  local suite_file="$SUITE_DIR/telco-companies.yaml"
  log_info "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  log_info "Category: telco → $suite_file"
  log_info "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

  generate_company "Twilio" "twilio.com" "$suite_file"
  generate_company "Vonage" "vonage.com" "$suite_file"
  generate_company "Bandwidth" "bandwidth.com" "$suite_file"
  generate_company "Sinch" "sinch.com" "$suite_file"
  generate_company "MessageBird" "messagebird.com" "$suite_file"
  generate_company "Plivo" "plivo.com" "$suite_file"
}

# Category: Infrastructure/Cloud
run_infrastructure() {
  local suite_file="$SUITE_DIR/infrastructure-companies.yaml"
  log_info "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  log_info "Category: infrastructure → $suite_file"
  log_info "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

  generate_company "AWS" "aws.amazon.com" "$suite_file"
  generate_company "Google Cloud" "cloud.google.com" "$suite_file"
  generate_company "Azure" "azure.microsoft.com" "$suite_file"
  generate_company "DigitalOcean" "digitalocean.com" "$suite_file"
  generate_company "Cloudflare" "cloudflare.com" "$suite_file"
  generate_company "Fastly" "fastly.com" "$suite_file"
  generate_company "Akamai" "akamai.com" "$suite_file"
  generate_company "Vercel" "vercel.com" "$suite_file"
  generate_company "Netlify" "netlify.com" "$suite_file"
  generate_company "Heroku" "heroku.com" "$suite_file"
}

# Category: Media/Streaming
run_media() {
  local suite_file="$SUITE_DIR/media-companies.yaml"
  log_info "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  log_info "Category: media → $suite_file"
  log_info "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

  generate_company "Netflix" "netflix.com" "$suite_file"
  generate_company "Spotify" "spotify.com" "$suite_file"
  generate_company "Disney+" "disneyplus.com" "$suite_file"
  generate_company "Hulu" "hulu.com" "$suite_file"
  generate_company "HBO Max" "hbomax.com" "$suite_file"
  generate_company "Paramount+" "paramountplus.com" "$suite_file"
  generate_company "Peacock" "peacocktv.com" "$suite_file"
  generate_company "YouTube Premium" "youtube.com" "$suite_file"
}

# Category: E-commerce
run_ecommerce() {
  local suite_file="$SUITE_DIR/ecommerce-companies.yaml"
  log_info "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  log_info "Category: ecommerce → $suite_file"
  log_info "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

  generate_company "Shopify" "shopify.com" "$suite_file"
  generate_company "BigCommerce" "bigcommerce.com" "$suite_file"
  generate_company "Squarespace" "squarespace.com" "$suite_file"
  generate_company "Wix" "wix.com" "$suite_file"
}

# Category: Healthcare
run_healthcare() {
  local suite_file="$SUITE_DIR/healthcare-companies.yaml"
  log_info "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  log_info "Category: healthcare → $suite_file"
  log_info "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

  generate_company "Epic" "epic.com" "$suite_file"
  generate_company "Cerner" "cerner.com" "$suite_file"
  generate_company "Teladoc" "teladoc.com" "$suite_file"
  generate_company "Veeva" "veeva.com" "$suite_file"
  generate_company "Health Catalyst" "healthcatalyst.com" "$suite_file"
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
