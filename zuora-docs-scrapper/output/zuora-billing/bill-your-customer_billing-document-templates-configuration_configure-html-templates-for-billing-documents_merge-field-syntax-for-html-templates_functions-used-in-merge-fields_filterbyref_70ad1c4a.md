---
title: "How FilterByRef Optimization Works"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-syntax-for-html-templates/functions-used-in-merge-fields/filterbyref-function/filterbyref-function-examples/example-avoid-non-optimized-variable-assignment-when-optimization-is-enabled/how-filterbyref-optimization-works"
product: "zuora-billing"
scraped_at: "2026-02-20T17:33:08.431Z"
---

# How FilterByRef Optimization Works

FilterByRef optimization enhances query performance by ensuring fields in custom objects are filterable, comparison values are simple scalars, and the backend can evaluate filters during query planning.

FilterByRef is designed to work with filterable fields in custom objects. For the filter optimization to work:

-   The field being filtered (e.g., \`BillingEntity\_\_c\`) must be marked as Filterable in the custom object schema.

-   The comparison value must resolve to a simple scalar.

-   The backend must be able to evaluate the filter during query planning.


## Comparison

Complex Assignment

{{Cmd\_Assign(Var\_X,Invoice.InvoiceItems|Map(...)|Nth(1),True)}}

-   Variable path: Invoice.InvoiceItems

-   Data type: Collection

-   Filter optimization: Not applied


Section-Based Assignment

{{Cmd\_Assign(Var\_X,'',True)}} {{#InvoiceItems|Map(...)|Nth(1)}} <!-- {{FieldName|SetToVar(Var\_X)}} --> {{/InvoiceItems}}

-   Variable value: Scalar (string)

-   Filter optimization: Applied


## When to Use This Pattern

Use this pattern when:

-   Assigning variables from complex list expressions, such as, multiple \`Map\`, \`SortBy\`, \`Filter\`, and so on.

-   The variable will be used with \`FilterByRef\` on custom object collections

-   Extracting values from nested object relationships

-   Template Optimization is enabled

-   Working with filterable custom object fields


Some of the reasons you may need this pattern are:

-   Filters appear to be ignored

-   Incorrect custom object records are returned

-   Output is empty when results are expected


## Complete Example: Invoice Template Selection

The following example shows how to properly extract values and use them for filtering custom invoice template records:

{{#Invoice}} {{Cmd\_Assign(Var\_BillingEntity,'',True)}} {{Cmd\_Assign(Var\_ContractType,'',True)}} {{#InvoiceItems |SortBy(ProductRatePlanCharge.ProductRatePlan.BillingEntity\_\_c,DESC) |Map(ProductRatePlanCharge) |Map(ProductRatePlan) |Nth(1)}} <!-- {{BillingEntity\_\_c|SetToVar(Var\_BillingEntity)}} --> {{/InvoiceItems}} {{#InvoiceItems|Map(Subscription)|Nth(1)}} <!-- {{ContractType\_\_c|SetToVar(Var\_ContractType)}} --> {{/InvoiceItems}} {{#default\_\_invoicetemplates |FilterByRef(BillingEntity\_\_c,EQ,Var\_BillingEntity) |FilterByRef(ContractType\_\_c,EQ,Var\_ContractType) |First(1)}} {{#Var\_BillingEntity|EqualToVal(Tech Hackers LLC)}} <img src="{{ImageURL\_\_c}}" style="width:130px;height:75px;"\> {{/Var\_BillingEntity|EqualToVal(Tech Hackers LLC)}} {{^Var\_BillingEntity|EqualToVal(Tech Hackers LLC)}} <img src="{{ImageURL\_\_c}}" style="width:175px;height:60px;"\> {{/Var\_BillingEntity|EqualToVal(Tech Hackers LLC)}} {{/default\_\_invoicetemplates}} {{/Invoice}}

## Important notes

-   Global Variables Required: Variables used in \`FilterByRef\` must be declared as global (\`True\` parameter) to work with \`SetToVar\`.

-   Filterable Fields: Ensure that custom object fields used in \`FilterByRef\` are marked as \*\*Filterable\*\* in your custom object schema. While the pattern works without this setting, it's strongly recommended for optimal performance and future extensibility.

-   HTML Comments for Suppression: Always wrap \`SetToVar\` in HTML comments (\`<!-- -->\`) to prevent values from being printed to the output.

-   Documentation Comments: Add Mustache comments (\`{{! }}\`) to document what each variable represents.

-   Blueprint Pattern: If this pattern appears in multiple templates, update all templates consistently to avoid rendering issues.

-   Matching Decorators: The closing section tag must include the same decorators as the opening tag.
