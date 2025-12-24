---
title: "Credit Memo Application data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/credit-memo-application-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:43:12.493Z"
---

# Credit Memo Application data source

Data source to export credit memo application statistics, including amount and key dates

Note:

This feature is only available if you have Invoice Settlement enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memos, and Invoice Item Settlement. If you want to have access to the feature, see [Invoice Settlement Enablement and Checklist Guide](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-migration-checklist-and-guide) for more information.

Use this data source to export credit memo application statistics, including amount and key dates. Each row represents a single credit memo application.

## Accessing the data source

​Navigation: Reporting > Data Sources and select Credit Memo Application as the data source.

## Data source detail

The Credit Memo Application object represents a business event that happened to a credit memo.

## Base object description

Descriptions for the base Zuora object.

| Zuora Object | Description |
| --- | --- |
| Credit Memo Application | Information about when and how credit memos are applied to invoices and debit memos. It includes the following fields:AmountCreated By IDCreated DateEffective DateIDUpdated By IDUpdated Date |

## Related object descriptions

Descriptions for related Zuora objects are listed in alphabetical order.

| Zuora object | Description |
| --- | --- |
| Account | The account that made the payment. |
| Application Group | Groups of payment, refund, and credit memo applications. It includes the following fields:Created By IDCreated DateIDOperation DateUpdated By IDUpdated Date |
| Bill To | The Bill-To Contact of the Account. |
| Credit Memo | Credit memos that you issued to your customers to reduce invoice and account balances. It includes the following fields:Amount Applied ByAmount Applied ToBalanceCancelled By IdCancelled OnCommentsCreated By IDCreated DateCredit Memo DateMemo NumberDiscount AmountIDPosted By IDPosted OnReason CodeSourceStatusTarget DateTax AmountTotal AmountTotal Amount Without TaxTotal Tax Exempt AmountTransferred To AccountingUpdated By IDUpdated Date |
| Debit Memo | Debit memos that you issued to your customers to increase the amount your customers owed you. It includes the following fields:Amount Applied ByAmount Applied ToBalanceCancelled By IdCancelled OnCommentsCreated By IDCreated DateDebit Memo DateMemo NumberDiscount AmountDue DateIDPosted By IDPosted OnReason CodeSourceStatusTarget DateTax AmountTotal AmountTotal Amount Without TaxTotal Tax Exempt AmountTransferred To AccountingUpdated By IDUpdated Date |
| Default Payment Method | The default payment method used to make payments. |
| Entity | The entity that the data relates to. Part of the Multi-entity feature. Contains the following fields:Address 1Address 2CityCountryCreated By IDCreated DateDisplay NameEmailIDNamePostal CodeStateUpdated By IDUpdated Date |
| Invoice | The invoice to which the payment is applied. |
| Parent Account | Refers to the parent account associated with the customer account, if applicable. |
| Sold To | The Sold-To Contact of the Account. |
| Credit Memo Application FX Data | Contains Home Currency and Reporting Currency information.To enable this option, submit a request at Zuora Global Support. |
