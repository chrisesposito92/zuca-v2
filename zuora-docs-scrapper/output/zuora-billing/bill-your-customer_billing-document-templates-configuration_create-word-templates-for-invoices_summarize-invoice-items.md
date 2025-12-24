---
title: "Summarize invoice items"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/summarize-invoice-items"
product: "zuora-billing"
scraped_at: "2025-12-24T05:49:26.161Z"
---

# Summarize invoice items

The topic summarizes invoice items using the GroupBy table filter to consolidate similar items and sum their values for a clearer invoice presentation.

Invoices can become lengthy if they include multiple subscriptions over multiple invoice periods. Help your customers understand these charges by summarizing the information on your invoices. The table filter `TableFilter:` `GroupBy` can be used to:

-   Summarize similar invoice items into a single line

-   Sum the values for charge amount, tax, and total


Note: The GroupBy filtr cannot be used with the `Tablesort` filter.

## Example​: How the GroupBy Table Filter Works

This example shows how Charge Summary Table shown in the previous figure was summarized using the `GroupBy` table filter. The example assumes that the invoice (INV00000001) contains three invoice items and has a posted date of 01/31/2014.

In the example, the GroupBy table filter uses the following fields:

-   `InvoiceItem.PackageName__c` (where `PackageName` is a tenant-defined custom field for the RatePlanCharge object)

-   `InvoiceItem.ServicePeriod`

-   `InvoiceItem.ChargePeriod`

-   `InvoiceItem.ChargeType`


Note: In this example, the custom field from the RatePlanCharge object can be used only in the context of a GroupBy filter. This custom field cannot be accessed in this manner as a standalone attribute​.

To be summarized, invoice items must share identical values for all fields that are included. The four fields are specified in the order shown above. The field code is as follows:

`{ MERGEFIELD "TableFilter:GroupBy PackageName__c,ServicePeriod,ChargePeriod,ChargeType" \* MERGEFORMAT }`

Note that the table filter parameter is enclosed in quotation marks. When a parameter contains a space, you must enclose the parameter in quotation marks, otherwise it will not be processed correctly.

## Customize the template

The following table illustrates how to configure the Charge Summary table with the `GroupBy` filter:

| CHARGE SUMMARY TABLE |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| Package Name | Service Period | Charge Type | Billing Period | Charge Amount | Tax | TOTAL |
| <<TableStart:InvoiceItem>> <<TableFilter:GroupBy>> <<InvoiceItem. PackageName__c>> | <<InvoiceItem. ServicePeriod>> | <<InvoiceItem. ChargeType>> | <<InvoiceItem. ChargePeriod>> | <<InvoiceItem. AmountWithoutTax>> | <<InvoiceItem. TaxAmount>> | <<InvoiceItem. ExtendedPrice>> <<TableEnd:InvoiceItem>> |

## View the invoice

When INV00000001 is opened in PDF format, the three similar invoice items are summarized into a single line and their charge amount, tax, and total values are summed.

With `GroupBy` table filter:

| CHARGE SUMMARY TABLE |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| Package Name | Service Period | Charge Type | Billing Period | Charge Amount | Tax | TOTAL |
| Package A | 01/01/2014-01/31/2014 | Recurring | Month | $3,500.00 | $700.00 | $4,200.00 |

For comparison, the same table without the GroupBy table filter displays all three invoice items on separate lines. Notice that the custom field (Package Name), Service Period, Charge Type and Billing Period are the same for all three invoice items.

Without `GroupBy` table filter:

| CHARGE SUMMARY TABLE |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| Package Name | Service Period | Charge Type | Billing Period | Charge Amount | Tax | TOTAL |
| Package A | 01/01/2014-01/31/2014 | Recurring | Month | $500.00 | $100.00 | $600.00 |
| Package A | 01/01/2014-01/31/2014 | Recurring | Month | $1,000.00 | $200.00 | $1,200.00 |
| Package A | 01/01/2014-01/31/2014 | Recurring | Month | $2,000.00 | $400.00 | $2,400.00 |
