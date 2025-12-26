# Roadmap: Zuora Billing API Integration

## Overview

This document outlines the plan for enabling ZUCA to directly create objects in a Zuora Billing tenant via the API. Currently, ZUCA generates **design-only** output (JSON/Markdown describing what to create). This roadmap describes the schemas and pipeline steps needed to actually create these objects.

---

## Current State (Design-Only)

### What ZUCA Produces Today
| Output | Description | Format |
|--------|-------------|--------|
| Subscription Spec | Subscription + rate plans + charges | JSON (design) |
| POB Mapping | Charge → POB template assignments | JSON (design) |
| Contracts/Orders Table | ZR contracts/orders view | JSON table |
| Billings Table | Billing schedule | JSON table |
| Rev Rec Waterfall | Revenue recognition schedule | JSON table |

### Current Schemas (`src/types/output.ts`)
- `SubscriptionSchema` - Basic subscription definition
- `RatePlanSchema` - Rate plan with charges
- `ChargeSchema` - Charge definition
- `BillingsRowSchema` - Basic billing row
- `ContractsOrdersRowSchema` - ZR table row

These schemas capture **what** to build but lack the full field set required by Zuora APIs.

---

## Revenue Snapshot (Read-Only, In Progress)

This feature connects to a Zuora Billing tenant, retrieves **actual** billing data, and generates a Zuora Revenue-style snapshot (Contracts/Orders, Billings, Rev Rec Waterfall) without creating any records in Zuora. It is intentionally read-only and does **not** project future invoices or usage.

Key components:
- OAuth-based tenant connection with encrypted credential storage
- Subscription selection and local filtering
- OTR detection (BookingTransaction presence)
- Data Query for OTR objects (BookingTransaction, BillingTransaction, RevenueRecognitionEventsTransaction)
- ZOQL/REST for non-OTR objects (Subscription, Order, Invoice, Credit Memo, Usage, Rate Plan Charge)
- POB template assignment via custom field `POBCRITERIA__c` on ProductRatePlanCharge

This work is a prerequisite for future **write** operations, but does not modify tenant data.

See `docs/FEATURE-REVENUE-SNAPSHOT.md` for implementation notes.

---

## New ZB API-Ready Schemas (Added, Not Wired)

The following schemas have been added to `src/types/output.ts` but are **not yet connected to any pipeline steps**. They are dormant type definitions awaiting future implementation.

### Product Catalog Schemas
| Schema | Purpose | Key Fields |
|--------|---------|------------|
| `ProductSchema` | Product definition | name, sku, effectiveStartDate, category |
| `ProductRatePlanSchema` | Rate plan in catalog | name, productId, charges, effectiveDates |
| `ProductRatePlanChargeSchema` | Charge template | Full pricing (tiers, overage), tax, PPDD, discounts |

### Account Schemas
| Schema | Purpose | Key Fields |
|--------|---------|------------|
| `ContactSchema` | BillTo/SoldTo contact | name, address, email, phone |
| `PaymentMethodSchema` | Payment method | Credit card, ACH fields |
| `AccountSchema` | Full account | name, currency, contacts, billing settings, tax |

### Subscription/Orders Schemas
| Schema | Purpose | Key Fields |
|--------|---------|------------|
| `ChargeOverrideSchema` | Override catalog pricing | pricing, quantity, dates at subscription level |
| `SubscriptionRatePlanSchema` | Rate plan with overrides | productRatePlanId, chargeOverrides |
| `EnhancedSubscriptionSchema` | Full subscription | accountId, version, all term/date settings |
| `OrderActionSchema` | Order action | CreateSubscription, AddProduct, UpdateProduct, etc. |
| `OrderSchema` | Full order | orderDate, subscriptions, processingOptions |

### Enhanced Billings Schema
| Schema | Purpose | Key Fields |
|--------|---------|------------|
| `EnhancedBillingsRowSchema` | Full invoice item | Invoice #, tax, accounting codes, balance |
| `EnhancedBillingsOutputSchema` | With invoice summary | invoice_summary aggregation |

### Master Container
| Schema | Purpose |
|--------|---------|
| `ZuoraBillingObjectsSchema` | Combines all ZB objects for API creation |

---

## Why Schemas Are Separate from LLM

Each pipeline step uses its own **hardcoded JSON schema** passed to the LLM:

```typescript
// In generate-subscription.ts
const result = await complete<SubscriptionSpec>({
  responseSchema: subscriptionSpecJsonSchema,  // Hardcoded, NOT from Zod
});
```

The Zod schemas in `output.ts` are used for:
1. **TypeScript types** - Compile-time type checking
2. **Validation** - Post-LLM response validation via `.safeParse()`

**The LLM never sees the Zod schemas.** This means the new dormant schemas won't accidentally be populated.

---

## Implementation Plan

### Phase 1: New Pipeline Steps (Future)

| Step | Description | Input | Output |
|------|-------------|-------|--------|
| `build-product-catalog.ts` | Generate product catalog objects | Subscription spec | `ProductCatalogEntry[]` |
| `build-account.ts` | Generate account with contacts | Customer info, billing settings | `Account` |
| `build-order.ts` | Generate Orders API payload | Subscription spec, account | `Order` |
| `transform-billings.ts` | Enhance billings with invoice details | Basic billings | `EnhancedBillingsOutput` |

### Phase 2: Prompt Creation

Each new step needs:
1. **System prompt** (`src/llm/prompts/build-product-catalog.md`, etc.)
2. **JSON schema** for structured output (hardcoded in step file)
3. **Validation** using the Zod schemas

### Phase 3: Orchestrator Updates

Update `src/pipeline/orchestrator.ts` to:
1. Add optional `generateZbApiObjects` flag to input
2. Call new steps when flag is true
3. Populate `zb_api_objects` field in output

### Phase 4: API Execution (Optional)

| Component | Description |
|-----------|-------------|
| `src/tools/zuora-api.ts` | Zuora REST API client |
| `execute-product-catalog.ts` | Create products/rate plans/charges |
| `execute-account.ts` | Create account with contacts |
| `execute-order.ts` | Submit order via Orders API |

---

## Mapping: Existing Steps → New Steps

### From `generate-subscription.ts`
Current output → Feed into:
- `build-product-catalog.ts` - Extract product/rate plan/charge definitions
- `build-order.ts` - Transform into Orders API format with charge overrides

### From `build-billings.ts`
Current output → Feed into:
- `transform-billings.ts` - Enhance with invoice numbers, tax, accounting codes

### New Standalone
- `build-account.ts` - New step, uses customer_name and billing settings from input

---

## Schema Field Coverage

### Product Catalog (`ProductRatePlanChargeSchema`)
Covers all charge configurations:
- [x] All charge types (Recurring, OneTime, Usage)
- [x] All charge models (FlatFee, PerUnit, Volume, Tiered, Overage)
- [x] Tiered/Volume pricing with tier details
- [x] Discount fields (applyDiscountTo, discountLevel)
- [x] Tax fields (taxCode, taxMode)
- [x] Usage-specific (ratingGroup, smoothingModel, usageRecordRatingOption)
- [x] PPDD fields (prepaidOperationType, creditOption, validityPeriodType)
- [x] Commitment fields (isCommitted, commitmentType)
- [x] Price change options
- [x] Revenue recognition fields
- [x] Custom fields placeholder

### Account (`AccountSchema`)
Covers full account setup:
- [x] BillTo/SoldTo contacts with full address
- [x] Payment method (Credit Card, ACH)
- [x] Billing settings (autoPay, paymentTerm, batch)
- [x] Tax exemption fields
- [x] CRM integration (crmId, salesRep, parentId)
- [x] Invoice settings
- [x] Custom fields placeholder

### Orders API (`OrderSchema`)
Covers all order actions:
- [x] CreateSubscription
- [x] AddProduct with charge overrides
- [x] UpdateProduct
- [x] RemoveProduct
- [x] RenewSubscription
- [x] CancelSubscription
- [x] SuspendSubscription / ResumeSubscription
- [x] OwnerTransfer
- [x] Processing options (runBilling, collectPayment)

### Charge Overrides (`ChargeOverrideSchema`)
Covers subscription-level pricing:
- [x] List price override
- [x] Tiered pricing override
- [x] Usage pricing override
- [x] Discount percentage/amount
- [x] Quantity override
- [x] Date overrides
- [x] Billing overrides
- [x] Revenue schedule overrides

---

## Testing Strategy

### Unit Tests
- Schema validation tests for each new schema
- Transformation tests (existing output → API-ready format)

### Integration Tests
- End-to-end with mock Zuora API
- Verify payload structure matches API requirements

### Sandbox Tests
- Create objects in Zuora sandbox tenant
- Verify successful creation and data integrity

---

## Dependencies

### Zuora MCP Enhancements
Current `ask_zuora` is read-only. For write operations, need:
- [ ] `zuora_create_product` - Create product
- [ ] `zuora_create_rate_plan` - Create product rate plan
- [ ] `zuora_create_charge` - Create product rate plan charge
- [ ] `zuora_create_account` - Create account
- [ ] `zuora_create_order` - Submit order

Or alternatively, a generic `zuora_api` tool that accepts method, endpoint, and payload.

---

## Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| LLM generates invalid API payloads | Strict JSON schemas + Zod validation |
| API field requirements change | Schema versioning, regular updates |
| Rate limits on Zuora API | Batch operations, retry logic |
| Partial failures (some objects created, others fail) | Transaction-like rollback or idempotent creates |

---

## Timeline

| Phase | Status | Notes |
|-------|--------|-------|
| Schema definitions | **Complete** | Added to `output.ts` |
| Documentation | **Complete** | This document |
| New pipeline steps | Not started | Requires prompts + schemas |
| Orchestrator updates | Not started | Add flag + wiring |
| Zuora MCP write tools | Not started | Depends on MCP enhancement |
| Testing | Not started | After implementation |

---

## References

- Zuora Products API: https://docs.zuora.com/en/zuora-billing/product-catalog
- Zuora Orders API: https://docs.zuora.com/en/zuora-billing/manage-subscriptions/orders
- Zuora Accounts API: https://docs.zuora.com/en/zuora-billing/manage-customer-accounts
- Current output schemas: `src/types/output.ts`
