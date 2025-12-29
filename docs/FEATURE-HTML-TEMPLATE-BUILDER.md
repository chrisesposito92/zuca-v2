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

#### 3. Template Validator & Debugger
**Status**: ✅ Complete

Validate template code for errors, warnings, and suggestions:
- Syntax error detection (unclosed braces, malformed merge fields)
- Section validation (unclosed/mismatched sections)
- Object path validation (unknown fields, context errors)
- Function validation (unknown functions, missing parameters)
- Expression validation (Wp_Eval JEXL syntax)
- Best practice suggestions (missing formatting, null handling)

**Technical Approach**: Hybrid validation combining:
1. **Code-based parsing** - Fast, deterministic checks for structural issues with exact line numbers
2. **LLM semantic validation** - Intelligent checks for object paths, function usage, and best practices

#### 4. GroupBy Wizard for Subtotals
**Status**: ✅ Complete

Interactive wizard to generate GroupBy template code with nested loops and subtotals.

**Capabilities**:
- Select source list (InvoiceItems, TaxationItems, InvoicePayments, PaymentParts)
- Add multiple grouping levels (up to 6 levels supported)
- Define columns to display with formatting options
- Add aggregations (Sum, Count, Average, Min, Max) for subtotals
- Configure subtotals per group and grand totals

**Technical Approach**: Form-based wizard that collects structured configuration and generates production-ready GroupBy code with:
- Proper `Cmd_Assign` variable naming for nested group access
- `FlatMap(_Group)` for parent-level aggregations
- `Sum`, `Count`, and other aggregation functions
- Proper formatting with `Round` and `Localise`

---

### Backlog (Prioritized)

#### 🥈 2. Sample Data Generator
**Status**: Backlog
**Impact**: High | **Complexity**: Medium

Generate realistic sample invoice data:
- Parse merge fields from template
- Generate matching JSON
- Export for preview testing

**Why prioritize**: Without sample data, users can't test their templates. This unlocks the value of the code generators.

#### 🥉 3. Data Table Configuration Builder
**Status**: Backlog
**Impact**: Medium | **Complexity**: Low

Interactive wizard to build Data Table configurations:
- Select table object (InvoiceItems, PaymentParts, TaxationItems)
- Add columns with field picker
- Configure sorting, filtering, grouping
- Generate complete merge field code

**Why here**: Code generator already handles much of this. A wizard adds polish but isn't essential.

#### 4. Industry-Specific Template Library
**Status**: Backlog
**Impact**: Medium | **Complexity**: Low

Pre-built templates for verticals:
- **SaaS**: Usage-based, tiered pricing, subscription summary
- **Telecom**: Data usage, per-minute charges, bundled plans
- **Utilities**: Meter readings, tiered consumption
- **Professional Services**: Time & materials, expenses

**Why here**: Good for demos but users typically need customization. Better as curated examples than turnkey solutions.

#### 5. AI-Powered Template Design from Description
**Status**: Backlog
**Impact**: High | **Complexity**: High

Full template generation from requirements:
"I need an invoice for a telecom company with grouped charges, usage breakdown, tax summary..."
→ Complete template HTML

**Why here**: Natural evolution of code generator. High impact but requires combining multiple capabilities.

#### 6. Interactive Template Preview
**Status**: Future
**Impact**: High | **Complexity**: High

Live playground:
- Edit template code
- Real-time preview with sample data
- Test conditional branches

**Why here**: Depends on Sample Data Generator. Would be transformative but significant engineering effort.

#### 7. Barcode/QR Code Generator
**Status**: Future
**Impact**: Low-Medium | **Complexity**: Medium

Generate barcode syntax:
- `Wp_Barcode` for standard barcodes
- JavaScript for Swiss QR codes
- Preview rendering

**Why here**: Important for specific regions/use cases but not universally needed.

#### 8. Template Diff & Migration Tool
**Status**: Future
**Impact**: Medium | **Complexity**: High

Word → HTML template migration:
- Parse Word template merge fields
- Map to HTML syntax
- Generate migration guide

**Why here**: Useful for migrations but lower frequency. Complex to parse Word docs reliably.

#### 9. Custom Object Schema Helper
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

### Template Validator ✅

**Implementation**: Complete - hybrid validation with API endpoint.

**Architecture**:
```
User Input → API Route → Code Parser → LLM Validator → Merged Results → UI Display
                              ↓                ↓
                     Structural Issues    Semantic Issues
                     (fast, precise)     (intelligent, contextual)
```

**Key Files**:
| File | Purpose |
|------|---------|
| `src/types/html-template.ts` | Validation types, schemas, JSON schema for LLM |
| `src/llm/prompts/html-template-validator.md` | LLM prompt with validation rules |
| `src/pipeline/steps/html-template-validator.ts` | Hybrid validation logic |
| `apps/web/app/api/html-template/validate/route.ts` | API endpoint |
| `apps/web/hooks/useHTMLBuilder.ts` | `useTemplateValidator` hook |
| `apps/web/components/html-template-view.tsx` | `TemplateValidationResultView` component |

**Validation Categories**:
1. **syntax** - Malformed merge fields, unclosed braces
2. **section** - Unclosed/mismatched section tags
3. **object_path** - Invalid field paths, context errors
4. **function** - Unknown functions, incorrect usage
5. **expression** - Wp_Eval JEXL syntax issues
6. **best_practice** - Missing formatting, null handling

**Severity Levels**:
- **error** - Template will fail to render (must fix)
- **warning** - May cause issues in some cases (should review)
- **suggestion** - Improvements for reliability/maintainability (optional)

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
