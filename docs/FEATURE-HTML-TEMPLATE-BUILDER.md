# HTML Invoice Template Builder

> Feature documentation for helping users build Zuora HTML Invoice Templates for demos.

## Overview

Zuora's HTML Invoice Templates use a Mustache-like templating syntax with JEXL expressions, enabling dynamic billing document generation. The syntax is powerful but complex - this feature set aims to make template creation accessible through AI-assisted code generation.

## Technical Background

### Template Syntax

```html
<!-- Merge Fields -->
{{Invoice.InvoiceNumber}}
{{Invoice.Account.BillTo.Address1}}

<!-- Function Chaining -->
{{Amount|Round(2)|Localise}}
{{ServiceStartDate|Localise}}

<!-- Sections/Loops -->
{{#InvoiceItems}}
  {{ChargeName}} - {{ChargeAmount}}
{{/InvoiceItems}}

<!-- Conditionals -->
{{^Invoice.InvoicePayments|IsEmpty}}
  <!-- Show only if payments exist -->
{{/Invoice.InvoicePayments|IsEmpty}}

<!-- Expressions (JEXL) -->
{{#Wp_Eval}} {{ChargeAmount}} + {{TaxAmount}}|Round(2)|Localise {{/Wp_Eval}}

<!-- Ternary Logic -->
{{#Wp_Eval}} "{{RatePlanCharge.ChargeModel}}" == "Flat Fee Pricing" ? "Flat" : "Other" {{/Wp_Eval}}
```

### Available Functions

| Function | Purpose | Example |
|----------|---------|---------|
| `Round(n)` | Round to n decimals | `{{Amount\|Round(2)}}` |
| `Localise` | Format by locale | `{{Amount\|Localise}}` |
| `SortBy(field,dir)` | Sort list | `{{#Items\|SortBy(Date,ASC)}}` |
| `GroupBy(f1,f2,...)` | Group for subtotals | `{{#Items\|GroupBy(ChargeType)}}` |
| `FilterByValue(f,op,v)` | Filter list | `{{#Items\|FilterByValue(Amount,GT,0)}}` |
| `FilterByRef(f,op,ref)` | Filter by reference | `{{#Items\|FilterByRef(Id,EQ,ParentId)}}` |
| `Sum(field)` | Aggregate sum | `{{Items\|Sum(Amount)}}` |
| `FlatMap(field)` | Flatten nested | `{{Groups\|FlatMap(_Group)}}` |
| `Default(value)` | Fallback value | `{{Field\|Default(N/A)}}` |
| `Symbol` | Currency symbol | `{{Currency\|Symbol}}` |
| `IsEmpty` | Check if empty | `{{^List\|IsEmpty}}` |
| `EqualToVal(v)` | Equality check | `{{#Status\|EqualToVal(Draft)}}` |

### Key Objects

- **Invoice**: InvoiceNumber, Amount, Balance, InvoiceDate, DueDate, Status
- **InvoiceItem**: ChargeName, ChargeAmount, TaxAmount, Quantity, UnitPrice, ServiceStartDate, ServiceEndDate
- **Account**: Name, Currency, AccountNumber
- **BillTo/SoldTo**: FirstName, LastName, Address1, Address2, City, State, PostalCode, Country
- **RatePlanCharge**: ChargeModel, ChargeType, ChargeNumber
- **Subscription**: Name, SubscriptionNumber
- **PaymentParts/InvoicePayments**: Payment details
- **TaxationItems**: Tax breakdown

---

## Feature Roadmap

### Tier 1: High-Value / Low Complexity

#### 1. Template Code Generator ⭐ PRIORITY
**Status**: Planning

Generate merge field code from natural language descriptions.

**Input**: "Show charge name, quantity, unit price, and subtotal for each invoice item"
**Output**: Ready-to-use HTML + merge field code

**Value**: The merge field syntax is complex. Users struggle with:
- Correct object paths
- Function chaining
- Conditional sections

#### 2. Data Table Configuration Builder
**Status**: Backlog

Interactive wizard to build Data Table configurations:
- Select table object (InvoiceItems, PaymentParts, TaxationItems)
- Add columns with field picker
- Configure sorting, filtering, grouping
- Generate complete merge field code

#### 3. Expression Builder ⭐ PRIORITY
**Status**: Planning

Help users construct `{{#Wp_Eval}}` expressions:
- Calculate derived values
- Conditional styling
- String transformations

---

### Tier 2: Medium Complexity / High Impact

#### 4. Industry-Specific Template Library
**Status**: Backlog

Pre-built templates for verticals:
- **SaaS**: Usage-based, tiered pricing, subscription summary
- **Telecom**: Data usage, per-minute charges, bundled plans
- **Utilities**: Meter readings, tiered consumption
- **Professional Services**: Time & materials, expenses

#### 5. Template Validator & Debugger
**Status**: Backlog

Upload template code and validate:
- Syntax error detection
- Undefined object path warnings
- Function improvement suggestions
- Unclosed section detection

#### 6. GroupBy Wizard for Subtotals
**Status**: Backlog

The `GroupBy` function is powerful but complex:
- "Group invoice items by Charge Type, show subtotals"
- Generate nested loop structure with `Cmd_Assign` and `Sum`

#### 7. Barcode/QR Code Generator
**Status**: Backlog

Generate barcode syntax:
- `Wp_Barcode` for standard barcodes
- JavaScript for Swiss QR codes
- Preview rendering

---

### Tier 3: Ambitious / Differentiated

#### 8. AI-Powered Template Design from Description
**Status**: Future

Full template generation from requirements:
"I need an invoice for a telecom company with grouped charges, usage breakdown, tax summary..."
→ Complete template HTML

#### 9. Sample Data Generator
**Status**: Future

Generate realistic sample invoice data:
- Parse merge fields from template
- Generate matching JSON
- Export for preview testing

#### 10. Template Diff & Migration Tool
**Status**: Future

Word → HTML template migration:
- Parse Word template merge fields
- Map to HTML syntax
- Generate migration guide

#### 11. Interactive Template Preview
**Status**: Future

Live playground:
- Edit template code
- Real-time preview with sample data
- Test conditional branches

#### 12. Custom Object Schema Helper
**Status**: Future

Design custom objects for templates:
- Generate schema
- Generate `FilterByRef` queries
- Handle plural naming (`ExchangeRate` → `default__exchangerates`)

---

## Implementation Details

### Feature 1: Template Code Generator

See detailed implementation plan in the codebase.

**Core Capabilities**:
1. Generate merge fields for displaying data
2. Generate data tables with columns
3. Generate conditional sections
4. Generate grouped/aggregated displays
5. Handle common patterns (currency formatting, date formatting, etc.)

### Feature 3: Expression Builder

See detailed implementation plan in the codebase.

**Core Capabilities**:
1. Arithmetic expressions (sum, difference, product, ratio)
2. Conditional expressions (ternary, null coalescing)
3. String operations (concatenation, substring, comparison)
4. Formatting (rounding, localization)

---

## Technical Dependencies

| Component | Purpose |
|-----------|---------|
| Zuora Docs RAG | Reference documentation for accurate syntax |
| Object Schema Reference | Field names, types, relationships |
| Function Reference | Function signatures, parameters, examples |
| LLM Integration | Natural language → code generation |

---

## Related Documentation

- Zuora Docs: Bill Your Customer > Billing Document Templates Configuration > Configure HTML Templates
- Scraped docs: `zuora-docs-scrapper/output/zuora-billing/bill-your-customer_billing-document-templates-configuration_configure-html-templates-for-billing-documents_*`
