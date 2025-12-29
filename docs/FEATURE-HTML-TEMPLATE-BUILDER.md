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

### ✅ Completed

#### 1. Template Code Generator
**Status**: ✅ Complete

Generate merge field code from natural language descriptions.

**Input**: "Show charge name, quantity, unit price, and subtotal for each invoice item"
**Output**: Ready-to-use HTML + merge field code

**Value**: The merge field syntax is complex. Users struggle with:
- Correct object paths
- Function chaining
- Conditional sections

#### 2. Expression Builder
**Status**: ✅ Complete

Help users construct `{{#Wp_Eval}}` expressions:
- Calculate derived values
- Conditional styling
- String operations and transformations

---

### Backlog (Prioritized)

#### 🥇 1. Template Validator & Debugger
**Status**: Next Up
**Impact**: High | **Complexity**: Medium

Upload template code and validate:
- Syntax error detection
- Undefined object path warnings
- Function improvement suggestions
- Unclosed section detection

**Why prioritize**: Complements the generators by catching errors before deployment. Reduces frustration when templates don't render as expected.

#### 🥈 2. GroupBy Wizard for Subtotals
**Status**: Backlog
**Impact**: High | **Complexity**: Medium

The `GroupBy` function is powerful but complex:
- "Group invoice items by Charge Type, show subtotals"
- Generate nested loop structure with `Cmd_Assign` and `Sum`

**Why prioritize**: Explicitly identified pain point in docs. Subtotals are one of the most requested features in real invoice templates.

#### 🥉 3. Sample Data Generator
**Status**: Backlog
**Impact**: High | **Complexity**: Medium

Generate realistic sample invoice data:
- Parse merge fields from template
- Generate matching JSON
- Export for preview testing

**Why prioritize**: Without sample data, users can't test their templates. This unlocks the value of the code generators.

#### 4. Data Table Configuration Builder
**Status**: Backlog
**Impact**: Medium | **Complexity**: Low

Interactive wizard to build Data Table configurations:
- Select table object (InvoiceItems, PaymentParts, TaxationItems)
- Add columns with field picker
- Configure sorting, filtering, grouping
- Generate complete merge field code

**Why here**: Code generator already handles much of this. A wizard adds polish but isn't essential.

#### 5. Industry-Specific Template Library
**Status**: Backlog
**Impact**: Medium | **Complexity**: Low

Pre-built templates for verticals:
- **SaaS**: Usage-based, tiered pricing, subscription summary
- **Telecom**: Data usage, per-minute charges, bundled plans
- **Utilities**: Meter readings, tiered consumption
- **Professional Services**: Time & materials, expenses

**Why here**: Good for demos but users typically need customization. Better as curated examples than turnkey solutions.

#### 6. AI-Powered Template Design from Description
**Status**: Backlog
**Impact**: High | **Complexity**: High

Full template generation from requirements:
"I need an invoice for a telecom company with grouped charges, usage breakdown, tax summary..."
→ Complete template HTML

**Why here**: Natural evolution of code generator. High impact but requires combining multiple capabilities.

#### 7. Interactive Template Preview
**Status**: Future
**Impact**: High | **Complexity**: High

Live playground:
- Edit template code
- Real-time preview with sample data
- Test conditional branches

**Why here**: Depends on Sample Data Generator. Would be transformative but significant engineering effort.

#### 8. Barcode/QR Code Generator
**Status**: Future
**Impact**: Low-Medium | **Complexity**: Medium

Generate barcode syntax:
- `Wp_Barcode` for standard barcodes
- JavaScript for Swiss QR codes
- Preview rendering

**Why here**: Important for specific regions/use cases but not universally needed.

#### 9. Template Diff & Migration Tool
**Status**: Future
**Impact**: Medium | **Complexity**: High

Word → HTML template migration:
- Parse Word template merge fields
- Map to HTML syntax
- Generate migration guide

**Why here**: Useful for migrations but lower frequency. Complex to parse Word docs reliably.

#### 10. Custom Object Schema Helper
**Status**: Future
**Impact**: Low | **Complexity**: Medium

Design custom objects for templates:
- Generate schema
- Generate `FilterByRef` queries
- Handle plural naming (`ExchangeRate` → `default__exchangerates`)

**Why here**: Very specialized use case. Most users don't need custom objects.

---

## Implementation Details

### Template Code Generator ✅

**Implementation**: Complete - integrated into ZUCA chat interface.

**Core Capabilities**:
1. Generate merge fields for displaying data
2. Generate data tables with columns
3. Generate conditional sections
4. Generate grouped/aggregated displays
5. Handle common patterns (currency formatting, date formatting, etc.)

### Expression Builder ✅

**Implementation**: Complete - integrated into ZUCA chat interface.

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
