---
title: "Use: Section Blocks with SetToVar"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-syntax-for-html-templates/functions-used-in-merge-fields/filterbyref-function/filterbyref-function-examples/example-avoid-non-optimized-variable-assignment-when-optimization-is-enabled/use-section-blocks-with-settovar"
product: "zuora-billing"
scraped_at: "2026-02-20T17:33:08.097Z"
---

# Use: Section Blocks with SetToVar

Learn how to initialize global variables, use section blocks to extract and assign values, and apply filters using variables in FilterByRef.

1.  Initialize empty global variables. Create global variables with default populated values. This establishes them as simple scalar variables, not complex expression paths.

    {{Cmd\_Assign(Var\_BillingEntity,'',True)}} {{Cmd\_Assign(Var\_ContractType,'',True)}}

2.  Use section blocks to extract and assign values.

    {{#InvoiceItems |SortBy(ProductRatePlanCharge.ProductRatePlan.BillingEntity\_\_c,DESC) |Map(ProductRatePlanCharge) |Map(ProductRatePlan) |Nth(1)}} <!-- {{BillingEntity\_\_c|SetToVar(Var\_BillingEntity)}} --> {{/InvoiceItems}} {{#InvoiceItems|Map(Subscription)|Nth(1)}} <!-- {{ContractType\_\_c|SetToVar(Var\_ContractType)}} --> {{/InvoiceItems}}

    -   Section blocks navigate to the desired object

    -   SetToVar assigns the actual field value

    -   HTML comments prevent output rendering


3.  Use Variables in FilterByRef.

    {{#default\_\_invoicetemplates |FilterByRef(BillingEntity\_\_c,EQ,Var\_BillingEntity) |FilterByRef(ContractType\_\_c,EQ,Var\_ContractType) |First(1)}} <!-- Template content --> {{/default\_\_invoicetemplates}}

    With scalar values assigned, filters are applied correctly during query optimization.
