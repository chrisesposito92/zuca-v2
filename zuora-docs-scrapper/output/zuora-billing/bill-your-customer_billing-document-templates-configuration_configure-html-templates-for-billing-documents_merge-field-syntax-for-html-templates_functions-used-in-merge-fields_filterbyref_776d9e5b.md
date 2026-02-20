---
title: "Example: Avoid non-optimized variable assignment when optimization is enabled"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-syntax-for-html-templates/functions-used-in-merge-fields/filterbyref-function/filterbyref-function-examples/example-avoid-non-optimized-variable-assignment-when-optimization-is-enabled"
product: "zuora-billing"
scraped_at: "2026-02-20T17:33:07.649Z"
---

# Example: Avoid non-optimized variable assignment when optimization is enabled

This section explains the importance of using optimized variable assignments when Template Optimization is enabled, highlighting the issues with complex list expressions and providing recommended patterns for effective filter application.

When Template Optimization is enabled, variables used with FilterByRef must resolve to simple scalar values. Assigning variables using complex list expressions in Cmd\_Assign can prevent proper filter resolution, causing filters to be skipped and resulting in incorrect or empty output.

This article describes the recommended variable assignment pattern when variables are later used in FilterByRef operations on custom object collections.

If a variable is assigned using a complex list expression, such as:

{{Cmd\_Assign(Var\_BillingEntity,Invoice.InvoiceItems|SortBy(...)|Map(...)|Nth(1),True)}}

and then used in a FilterByRef operation:

{{#default\_\_invoicetemplates|FilterByRef(BillingEntity\_\_c,EQ,Var\_BillingEntity)}}

The filter may not be applied as expected.

This happens due to:

-   Path Resolution Issue - The backend resolves the merge field name to Invoice.InvoiceItems (the starting point of the expression), which represents a multi-valued collection.

-   Filter Not Applied - When FilterByRef attempts to use Var\_BillingEntity for filtering, the backend detects that the underlying path (Invoice.InvoiceItems) is multi-valued and therefore cannot be used for filter optimization. As a result, the filter condition is skipped.


## Recommended pattern

Avoid: Assigning Variables from Complex List Expressions

{{#Invoice}} {{Cmd\_Assign(Var\_BillingEntity,Invoice.InvoiceItems|SortBy(ProductRatePlanCharge.ProductRatePlan.BillingEntity\_\_c,DESC)|Map(ProductRatePlanCharge)|Map(ProductRatePlan)|Map(BillingEntity\_\_c)|Nth(1),True)}} {{Cmd\_Assign(Var\_ContractType,Invoice.InvoiceItems|Map(Subscription)|Map(ContractType\_\_c)|Nth(1),True)}} {{#default\_\_invoicetemplates |FilterByRef(BillingEntity\_\_c,EQ,Var\_BillingEntity) |FilterByRef(ContractType\_\_c,EQ,Var\_ContractType) |First(1)}} <!-- Template content --> {{/default\_\_invoicetemplates}} {{/Invoice}}

## Correct pattern

Initialize empty variables, then populate them using section blocks with \`SetToVar\`.

{{#Invoice}} {{Cmd\_Assign(Var\_BillingEntity,'',True)}} {{Cmd\_Assign(Var\_ContractType,'',True)}} {{#InvoiceItems|SortBy(ProductRatePlanCharge.ProductRatePlan.BillingEntity\_\_c,DESC)|Map(ProductRatePlanCharge)|Map(ProductRatePlan)|Nth(1)}} <!-- {{BillingEntity\_\_c|SetToVar(Var\_BillingEntity)}} --> {{/InvoiceItems|SortBy(ProductRatePlanCharge.ProductRatePlan.BillingEntity\_\_c,DESC)|Map(ProductRatePlanCharge)|Map(ProductRatePlan)|Nth(1)}} {{#InvoiceItems|Map(Subscription)|Nth(1)}} <!-- {{ContractType\_\_c|SetToVar(Var\_ContractType)}} --> {{/InvoiceItems|Map(Subscription)|Nth(1)}} {{#default\_\_invoicetemplates|FilterByRef(BillingEntity\_\_c,EQ,Var\_BillingEntity)|FilterByRef(ContractType\_\_c,EQ,Var\_ContractType)|First(1)}} <!-- Template content --> {{/default\_\_invoicetemplates|FilterByRef(BillingEntity\_\_c,EQ,Var\_BillingEntity)|FilterByRef(ContractType\_\_c,EQ,Var\_ContractType)|First(1)}} {{/Invoice}}
