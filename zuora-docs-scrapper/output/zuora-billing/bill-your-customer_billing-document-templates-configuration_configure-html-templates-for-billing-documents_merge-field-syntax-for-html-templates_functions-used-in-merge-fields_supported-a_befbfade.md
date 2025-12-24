---
title: "Supported aggregator functions"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-syntax-for-html-templates/functions-used-in-merge-fields/supported-aggregator-functions"
product: "zuora-billing"
scraped_at: "2025-12-24T05:46:31.021Z"
---

# Supported aggregator functions

Explore various aggregator functions used to process lists and return scalar values or objects, essential for customizing HTML templates in billing documents.

Use aggregator functions to take in a list and return a scalar value or an object.

The following sections list the aggregator functions used to decorate merge fields when customizing HTML templates for billing documents, including invoices, credit memos, and debit memos.

## Sum function

This function adds up the values of FieldName of the object list.

## Syntax

`Sum(FieldName)`

## Remarks

FieldName must be a numeric field.

## Examples

Use the following function to get the total charge amount of all invoice items in the rendering result:

`InvoiceItems|Sum(ChargeAmount)`

## Size function

This function returns the size of a list input.

## Remarks

If the input is null, 0 is returned.

## Examples

`InvoiceItems|Size`

## Min function

This function returns the minimum record of the input list, compared by FieldName.

This function is the opposite of the `Max(FieldName)` function.

## Syntax

`Min(FieldName)`

## Remarks

FieldName must be fields of comparable data types, for example:

-   Text

-   Number

-   Date/DateTime

-   Boolean


## Examples

Use the following function to get the oldest invoice item of the `InvoiceItems` object in terms of ServiceStartDate in the rendering result:

`InvoiceItems|Min(ServiceStartDate)`

## Max function

This function returns the maximum record of the input, compared by FieldName.

This function is the opposite of the `Min(FieldName)` function.

## Syntax

`Max(FieldName)`

## Examples

Use the following function to get the latest invoice item of the `InvoiceItem` object in terms of ServiceStartDate in the rendering result:

`InvoiceItems|Max(ServiceStartDate)`

## IsEmpty function

This function tells you whether a list is empty. It returns `True` for an empty list, `False` for a non-empty list.

## Examples

To check whether an account has any payment, use the following example:

`Account.Payments|IsEmpty`
