---
title: "FilterByValue function"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-syntax-for-html-templates/functions-used-in-merge-fields/filterbyvalue-function"
product: "zuora-billing"
scraped_at: "2026-02-19T03:13:32.676Z"
---

# FilterByValue function

This function filters input data using specified fields and operators, supporting various comparison operations.

This function filters input data based on the specified argument fields.

## Syntax

`FilterByValue(FieldName,Operator,Value)`

You can decorate the FieldName argument.

This function supports the following operators:

-   `LT` : less than

-   `LE` : less than or equal to

-   `GT` : greater than

-   `GE` : greater than or equal to

-   `EQ` : equal to

-   `NE` : not equal to

-   `IS_NULL` : for example, `InvoiceItems|FilterByValue(Description,IS_NULL)`

-   `NOT_NULL` : for example, `InvoiceItems|FilterByValue(Description,NOT_NULL)`

    Note: The `FilterByValue` function does not currently support the `IS_NULL` and `NOT_NULL` operators when querying custom object records.


## Remarks

You can specify the FieldName argument to be dotted paths, but the first part must be an attribute of the input object. For example, in the `InvoiceItems|FilterByValue(RatePlanCharge.ChargeType,EQ,OneTime)` function, `RatePlanCharge` is a valid field of the `InvoiceItems` object.

You can quote the Value argument, but the value cannot contain the dot character ".". If the value contains the following characters, you must escape them through URL encoding as follows:

-   Whitespace ' ': %20

-   Comma ',': %2C

-   Left curly brackets '{': %7B

-   Right curly brackets '}': %7D


## Examples

If you want to filter all invoice items by comparing the 0 - 7 substring of their service start date with 2021-01, use the following function:

`InvoiceItems|FilterByValue(ServiceStartDate|Substr(0,7),EQ,2021-01)`
