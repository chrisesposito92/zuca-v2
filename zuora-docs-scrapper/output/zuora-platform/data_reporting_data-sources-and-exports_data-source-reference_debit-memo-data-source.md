---
title: "Debit Memo data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/debit-memo-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:43:35.241Z"
---

# Debit Memo data source

Data source to export debit memo data, such as amount, balance, and key dates

Note:

This feature is only available if you have Invoice Settlement enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memos, and Invoice Item Settlement. If you want to have access to the feature, see [Invoice Settlement Enablement and Checklist Guide](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-migration-checklist-and-guide) for more information.

Use this data source to export debit memo data, such as amount, balance, and key dates. Each debit memo represents one row in the export.

## Accessing data source

​Navigation: Reporting > Data Sources and select Debit Memo as the data source.

## Data source details

The following sections provide data source details.

## Base object description

Descriptions for the base Zuora object.

| Zuora Object | Description |
| --- | --- |
| Debit Memo | Debit memos that you issued to your customers to increase the amount your customers owned you. It includes the following fields:BalanceCancelled By IdCancelled OnCommentsCreated By IDCreated DateDebit Memo DateDebit Memo NumberDiscount AmountDue DateExchange Rate Date (Only available if you have the currency conversion feature enabled.)IDInvoice Group NumberPayment TermThe payment term that is used to calculate the due date on the debit memo. The value of this field is the name of the payment term. If the debit memo is generated from an invoice, the field value is the same as the payment term on the invoice. Otherwise, the value is null.Posted By IDPosted OnReason CodeSequence Set IDSourceSource TypeStatusTarget DateTax AmountTax Auto CalculationTotal AmountTotal Amount Without TaxTotal Tax Exempt AmountTransferred To AccountingUpdated By IDUpdated DateFor more information, see View Information of Credit and Debit Memos. |

## Related object descriptions

Descriptions for related Zuora objects are listed in alphabetical order.

| Zuora object | Description |
| --- | --- |
| Account | The account that made the payment. |
| Bill To | The Bill-To Contact of the Account. |
| Billing Document PDF Generation | This represents the current PDF generation status of the document and contains the following fields:Created By IDCreated DateError CategoryError MessageFile IDGeneration SourceGeneration StatusIDUpdated By IDUpdated DateAlternatively, you can select the Select All "Billing Document PDF Generation" Fields checkbox to include all fields at once. |
| Debit Memo Bill To Contact | The bill-to contact that is associated with the debit memo. If the debit memo is generated from an invoice or a credit memo, its value is the same as the bill-to contact on the invoice or credit memo. Otherwise, the value is null. |
| Debit Memo Sold To Contact | The sold-to contact that is associated with the debit memo. If the debit memo is generated from an invoice or a credit memo, its value is the same as the sold-to contact on the invoice or credit memo. Otherwise, the value is the sold-to contact you specified for the debit memo, or the default value null. |
| Default Payment Method | The default payment method used to make payments. |
| Entity | The entity that the data relates to. Part of the Multi-entity feature. Contains the following fields:Address 1Address 2CityCountryCreated By IDCreated DateDisplay NameEmailIDNamePostal CodeStateUpdated By IDUpdated Date |
| Invoice | The invoice to which the payment is applied. |
| Parent Account | Refers to the parent account associated with the customer account, if applicable. |
| Sold To | The Sold-To Contact of the Account. |
| Debit Memo FX Data | Contains Home Currency and Reporting Currency information.To enable this option, submit a request at Zuora Global Support. |
