---
title: "Invoice data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/invoice-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:44:08.558Z"
---

# Invoice data source

Data source to export invoice data, such as invoice amount, balance and dates

Use this data source to export invoice data, such as invoice amount, balance and dates. Each invoice represents one row in the export. This data source also includes associated data such as account, payment method, bill to and sold contacts on the account.

## Using Invoice to generate reports

With the Invoice data source, you can generate reports such as:

-   A list of Committed Monthly Recurring Revenue (By Product, By Pricing Plan, By Account)

-   TCV By Account

-   History of Monthly Recurring Revenue By Account


## Objects available in the data source

![Invoice_Data_Source.jpg](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/8377f0f9-1416-493c-b922-37555827dcc8?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjgzNzdmMGY5LTE0MTYtNDkzYy1iOTIyLTM3NTU1ODI3ZGNjOCIsImV4cCI6MTc2NjY4ODI0NiwianRpIjoiOWI4OTg1NTgwZDEzNGM1NGFlMTIzN2VlMjU2MGJhN2YiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.EeDZ-z1_YZ3xv00jNCRfAQf5LD4RWC92rhq4QmM8x7k)

## Data source details

The following sections provide the data source details.

## Base object description

Descriptions for the base Zuora object.

| Zuora object | Description |
| --- | --- |
| Invoice | Invoices that reflect the subscription rate plan charges that have not been billed. The object includes the following fields:Adjustment AmountAmountAmount Without TaxAuto PayBalanceCommentsCreated By IDCreated DateCredit Balance Adjustment AmountCredit Memo AmountCurrencyDue DateE-Invoice Error CodeE-Invoice Error MessageE-Invoice File IDE-Invoice StatusEntityIDIncludes One TimeIncludes RecurringIncludes UsageInvoice DateInvoice Group NumberInvoice NumberLast Email Sent DatePayment AmountPayment LinkPayment TermThe payment term that is used to calculate the due date on the invoices, which is generated from the corresponding subscription. The value of this field is the name of the payment term. If the payment term is not specified at the subscription level, the field value is null at the invoice level.Posted ByPosted DateRefund AmountRetry StatusReversedSequence Set IDSequential Invoice NumberSourceSource IDSource TypeStatusTarget DateTax AmountTax Exempt AmountTemplate IDThis field has a value only if you have the Flexible Billing Attributes feature enabled.Transferred To AccountingUpdated By IDUpdated Date |

## Related object descriptions

Descriptions for related Zuora objects are listed in alphabetical order.

| Object | Description |
| --- | --- |
| Account | The account to whom the invoice belongs. |
| Bill To Contact | The contact of the entity/person to whom you bill for your product or service. It contains the bill-to contact data associated with the account. |
| Bill To Contact Snapshot | A copy of the bill to contact information used to generate invoices. |
| Billing Document PDF Generation | This represents the current PDF generation status of the document and contains the following fields:Created By IDCreated DateError CategoryError MessageFile IDGeneration SourceGeneration StatusIDUpdated By IDUpdated DateAlternatively, you can select the Select All "Billing Document PDF Generation" Fields checkbox to include all fields at once. |
| Entity | The entity that the data relates to. Part of the Multi-entity feature. Contains the following fields:Address 1Address 2CityCountryCreated By IDCreated DateDisplay NameEmailIDNamePostal CodeStateUpdated By IDUpdated Date |
| Sold To Contact | The contact of the entity/person to whom your product or service is sold. It contains the sold-to contact data associated with the account. |
| Sold To Contact Snapshot | A copy of the sold to contact information used to generate invoices. |
| Invoice FX Data | Contains Home Currency and Reporting Currency information.To enable this option, submit a request at Zuora Global Support. |
| Default Payment Method | The default payment method of the customer account, to whom the invoice belongs. |
| Invoice Bill To Contact | The bill-to contact that is associated with the invoice. It's not null in 2 scenarios:Invoice is generated from the corresponding subscription and the bill-to contact is specified at the subscription level. The value is null at the invoice level if the bill-to contact is not specified at the subscription level.It is a standalone invoice and the bill-to contact is specified at the invoice level. For more information, see Create a standalone invoice.To specify a bill-to contact on the invoice or subscription level, you need to enable the Flexible Billing Attributes feature.Keep in mind that the fields for Invoice Bill To Contact are the bill-to contact data on the invoice, while the fields for Bill To Contact are the bill-to contact data on the account. |
| Invoice Sold To Contact | The sold-to contact that is associated with the invoice.Invoice Sold To Contact is not null in the following scenario:It is a standalone invoice and the sold-to contact is specified at the invoice level. For more information, see Create a standalone invoice.To specify a sold-to contact on the invoice, you'll need to enable the Flexible Billing Attributes feature.If the Invoice sold-to contact is not specified on the standalone invoice or the invoice is generated from a subscription or an order line item, Invoice Sold To Contact is always null.Note that the invoice-level sold-to contact is null even if the sold-to contact is specified at the subscription level and the invoice is generated from the corresponding subscription. It is because the subscription-level sold-to contact is stored at the Invoice Item level. For more information, see Invoice Item Data Source.Keep in mind that the fields for Invoice Sold To Contact are the sold-to contact data on the invoice, while the fields for Sold To Contact are the sold-to contact data on the account. |
