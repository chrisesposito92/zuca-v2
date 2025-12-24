---
title: "Map function"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-syntax-for-html-templates/functions-used-in-merge-fields/map-function"
product: "zuora-billing"
scraped_at: "2025-12-24T05:46:13.316Z"
---

# Map function

The Map function allows you to define an element as input and its attribute as output, using a specified syntax to return lists of field values or lists of lists.

You can apply a `Map` function to define an element as the input and the element's attribute as the output, in the format of item -> item.FieldName.

## Syntax

`Map(FieldName|QuotedValue(,FieldName|QuotedValue)*)`

-   The argument can be either a field name or a quoted value, either single or double quoted.

-   FieldName cannot be a dotted path.

-   The FieldName data type cannot be a list. For example, `InvoiceItems|Map(TaxationItems)` is invalid.

-   If you specify only one argument, the `Map` function returns a list of fieldName values.

-   If you specify multiple arguments, the `Map` function returns a list of lists.


## Examples

Assume that an `InvoiceItems` list is as follows:

\[ { "ChargeName": "C-000001", "ChargeAmount": 10, "ServiceStartDate": "2021-01-01" }, { "ChargeName": "C-000001", "ChargeAmount": 15, "ServiceStartDate": "2021-02-01" }, { "ChargeName": "C-000002", "ChargeAmount": 12, "ServiceStartDate": "2021-01-01" }, { "ChargeName": "C-000002", "ChargeAmount": 8, "ServiceStartDate": "2021-03-01" } \]

The `InvoiceItems|Map(ChargeName)` function returns the following value in the rendering result:

`["C-000001","C-000001","C-000002","C-000002"]`

The `InvoiceItems|Map(ChargeName,ChargeAmount)` function returns the following value in the rendering result:

`[["C-000001", 10],["C-000001",15],["C-000002",12],["C-000002",8]]`

You can also use quoted values as arguments. For example, the `InvoiceItems|Map(ChargeName,'Charge')` function returns the following value in the rendering result:

`[["C-000001","Charge"],["C-000001","Charge"],["C-000002","Charge"],["C-000002","Charge"]]`
