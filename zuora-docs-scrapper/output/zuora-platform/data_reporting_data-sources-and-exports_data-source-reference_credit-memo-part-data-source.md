---
title: "Credit Memo Part data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/credit-memo-part-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:43:22.549Z"
---

# Credit Memo Part data source

Data source to export the applied and unapplied portions of credit memos

Note:

This feature is only available if you have Invoice Settlement enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memos, and Invoice Item Settlement. If you want to have access to the feature, see [Invoice Settlement Enablement and Checklist Guide](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-migration-checklist-and-guide) for more information.

Use this data source to export the applied and unapplied portions of credit memos. Each row represents a single portion of a credit memo. A credit memo can be applied to more than invoices and debit memos. You can export this data source to see how much of the credit memo is applied to invoices and debit memos, and how much is unapplied.

## Accessing the data source

​Navigation: Reporting > Data Sources and select Credit Memo Part as the data source.

## Data source detail

The following sections provide data source details.

## Base object description

Descriptions for the base Zuora object.

| Zuora Object | Description |
| --- | --- |
| Credit Memo Part | The applied and unapplied portions of the credit memo. It includes the following fields:AmountCreated By IDCreated DateIDUpdated By IDUpdated Date |

## Related object descriptions

Descriptions for related Zuora objects are listed in alphabetical order.

| Zuora Object | Description |
| --- | --- |
| Account | The account that made the payment. |
| Bill To | The Bill-To Contact of the Account. |
| Credit Memo | Credit memos that you issued to your customers to reduce invoice and account balances. It includes the following fields:Amount Applied ByAmount Applied ToBalanceCancelled By IdCancelled OnCommentsCreated By IDCreated DateCredit Memo DateMemo NumberDiscount AmountIDPosted By IDPosted OnReason CodeSourceStatusTarget DateTax AmountTotal AmountTotal Amount Without TaxTotal Tax Exempt AmountTransferred To AccountingUpdated By IDUpdated Date |
| Credit Memo Part FX Data | Contains Home Currency and Reporting Currency information.To enable this option, submit a request at Zuora Global Support. |
| Debit Memo | Debit memos that you issued to your customers to increase the amount your customers owed you. It includes the following fields:Amount Applied ByAmount Applied ToBalanceCancelled By IdCancelled OnCommentsCreated By IDCreated DateDebit Memo DateMemo NumberDiscount AmountDue DateIDPosted By IDPosted OnReason CodeSourceStatusTarget DateTax AmountTotal AmountTotal Amount Without TaxTotal Tax Exempt AmountTransferred To AccountingUpdated By IDUpdated Date |
| Default Payment Method | The default payment method used to make payments. |
| Entity | The entity that the data relates to. Part of the Multi-entity feature. Contains the following fields:Address 1Address 2CityCountryCreated By IDCreated DateDisplay NameEmailIDNamePostal CodeStateUpdated By IDUpdated Date |
| Invoice | The invoice to which the credit memo is applied. |
| Parent Account | Refers to the parent account associated with the customer account, if applicable. |
| Sold To | The Sold-To Contact of the Account. |
