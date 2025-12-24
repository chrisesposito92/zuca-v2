---
title: "GroupBy function"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-syntax-for-html-templates/functions-used-in-merge-fields/groupby-function"
product: "zuora-billing"
scraped_at: "2025-12-24T05:46:00.073Z"
---

# GroupBy function

The GroupBy function organizes a list by specified fields, supporting up to six arguments, and allows for complex grouping using valid attribute paths.

This function takes in a list and groups the records by the argument fields.

## Syntax

`GroupBy(FieldName0,FieldName1,FieldName2,...){0..5})`

## Remarks

This function supports at most six arguments.

The FieldName argument must be a valid attribute of the input list object type. You can specify the FieldName argument to be dotted paths.

For example, the `InvoiceItems|GroupBy(RatePlanCharge.RatePlan.Name,ChargeName)` function groups the invoice items by rate plan name first, and then by charge name for the records with the same rate plan name.

## Examples

Assume that an input list is as follows:

`[ { "ChargeName": "C-000001", "ChargeAmount": 10, "ServiceStartDate": "2021-01-01" }, { "ChargeName": "C-000001", "ChargeAmount": 15, "ServiceStartDate": "2021-02-01" }, { "ChargeName": "C-000002", "ChargeAmount": 12, "ServiceStartDate": "2021-01-01" }, { "ChargeName": "C-000002", "ChargeAmount": 8, "ServiceStartDate": "2021-03-01" } ]`

If you apply the `GroupBy(ChargeName)` function to the input list, it returns the following output in the rendering result:

`[ { "ChargeName": "C-000001", "_Group": [ { "ChargeName": "C-000001", "ChargeAmount": 10, "ServiceStartDate": "2021-01-01" }, { "ChargeName": "C-000001", "ChargeAmount": 15, "ServiceStartDate": "2021-02-01" } ] }, { "ChargeName": "C-000002", "_Group": [ { "ChargeName": "C-000002", "ChargeAmount": 12, "ServiceStartDate": "2021-01-01" }, { "ChargeName": "C-000002", "ChargeAmount": 8, "ServiceStartDate": "2021-03-01" } ] } ]`

The preceding example shows how the input list is transformed. The object in the transformed list consists of two fields only:

-   `GroupBy` key field, for example, `ChargeName`

-   `_Group` that is a hard-coded key for `GroupBy` use cases


If you specify multiple `GroupBy` fields in the function, the records in `_Group` is transformed in the same way. For three levels of `GroupBy` fields, such as `Items|GroupBy(A,B,C)` , the final output example is as follows:

`[ { "A": "..", "_Group": [ { "B": "..", "_Group": [ { "C": "..", "_Group": [ { "A": "..", "B": "..", "C": "..", ... } ] } ] } ] } ]`
