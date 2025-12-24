---
title: "FilterByRef function"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-syntax-for-html-templates/functions-used-in-merge-fields/filterbyref-function"
product: "zuora-billing"
scraped_at: "2025-12-24T05:45:49.746Z"
---

# FilterByRef function

The FilterByRef function filters input data using the RefAttributeName argument and supports various operators for comparison.

This function filters input data based on the specified RefAttributeName argument.

## Syntax

`FilterByRef(FieldName,Operator,RefAttributeName)`

You can decorate the FieldName argument.

This function supports the following operators:

-   `LT` : less than

-   `LE` : less than or equal to

-   `GT` : greater than

-   `GE` : greater than or equal to

-   `EQ` : equal to

-   `NE` : not equal to


## Remarks

If the current object does not have any RefAttributeName property, its outer object in the stack context is used for searching until the property is found.

## Examples

`InvoiceItem` can be the regular charges and the discount charges. As a discount charge, it has an `AppliedToInvoiceItemId` pointing to a regular invoice item. This linkage enables you to show the inline discount by using `FilterByRef` function together with `Cmd_Assign` , see the following example:

`{{#InvoiceItems|FilterByValue(ProcessingType,EQ,0)}}`

`{{Cmd_Assign(RegularItemId,Id)}}`

`{{ChargeName}} - {{ChargeAmount}}`

`{{#InvoiceItems|FilterByRef(AppliedToInvoiceItemId,EQ,RegularItemId)}}`

`* {{ChargeName}} - {{ChargeAmount}}`

`{{/InvoiceItems|FilterByRef(AppliedToInvoiceItemId,EQ,RegularItemId)}}`

`{{/InvoiceItems|FilterByValue(ProcessingType,EQ,0)}}`

This example has two list sections. The first one `InvoiceItems|FilterByValue(ProcessingType,EQ,0)` returns all the regular invoice items.

For each regular invoice item, use `Cmd_Assign(RegularItemId,Id)` to give `Id` an alias `RegularItemId` .

The second list section `InvoiceItems|FilterByRef(AppliedToInvoiceItemId,EQ,RegularItemId)` basically is to filter all the invoice items by the condition `AppliedToInvoiceItemId = RegularItemId` . `AppliedToInvoiceItemId` is an attribute of its input data `InvoiceItems` , and `RegularItemId` is defined in the outer object, also known as the object in the first list section.

Note:

When working with a large number of custom objects, we recommend enabling filterable fields on standalone custom objects. The FilterByRef function is optimized for performance in these scenarios, significantly improving template rendering speed and efficiency. For more information, see [Best practices for using the FilterByRef function](/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-syntax-for-html-templates/functions-used-in-merge-fields/filterbyref-function/best-practices-for-using-the-filterbyref-function).
