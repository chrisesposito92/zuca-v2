---
title: "Credit Memo Application Item data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/credit-memo-application-item-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:43:14.912Z"
---

# Credit Memo Application Item data source

Data source to export credit memo application items

Note:

This feature is only available if you have Invoice Settlement enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memos, and Invoice Item Settlement. If you want to have access to the feature, see [Invoice Settlement Enablement and Checklist Guide](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-migration-checklist-and-guide) for more information.

Use this data source to export credit memo application items. Each row represents a single credit memo application on one line item of the invoice or debit memo.

## Accessing the data source

Navigation: ​ Reporting > Data Sources and select Credit Memo Application Item as the data source.

## Data source detail

The Credit Memo Application Item object represents a business event that happened to a credit memo at the item level.

## Base object description

Descriptions for the base Zuora object.

| Zuora Object | Description |
| --- | --- |
| Credit Memo Application Item | Credit Memo applications on invoice items and debit memo items. It includes the following fields:AmountCreated By IDCreated DateEffective DateIDUpdated By IDUpdated Date |

## Related object descriptions

Descriptions for related Zuora objects are listed in alphabetical order.

| Zuora Object | Description |
| --- | --- |
| Account | The account that made the payment. |
| AccountingPeriod | Periods of time that represents the financial calendar of your company. Used to assist with accounting close activities and financial reporting. Contains the following fields:Created By IDCreated DateEnd DateFiscal QuarterFiscal YearIDNameNotesStart DateStatusUpdated By IDUpdated Date |
| Application Group | Groups of payment, refund, and credit memo applications. It includes the following fields:Created By IDCreated DateIDOperation DateUpdated By IDUpdated Date |
| Bill To | The Bill-To Contact of the Account. |
| Credit Memo | Credit memos that you issued to your customers to reduce invoice and account balances. It includes the following fields:Amount Applied ByAmount Applied ToBalanceCancelled By IdCancelled OnCommentsCreated By IDCreated DateCredit Memo DateMemo NumberDiscount AmountIDPosted By IDPosted OnReason CodeSourceStatusTarget DateTax AmountTotal AmountTotal Amount Without TaxTotal Tax Exempt AmountTransferred To AccountingUpdated By IDUpdated Date |
| Credit Memo Application | Information about when and how credit memos are applied to invoices and debit memos. It includes the following fields:AmountCreated By IDCreated DateEffective DateIDUpdated By IDUpdated Date |
| Credit Memo Item | Line items on credit memos. It includes the following fields:Amount Without TaxApplied To Others AmountBe Applied By Others AmountCharge DateCreated By IDCreated DateDescriptionIDProcessing TypeQuantitySKUService End DateService Start DateTax AmountTax Code NameTax Exempt AmountTax ModeUnit Of MeasureUnit PriceUpdated By IDUpdated Date |
| Credit Taxation Item | Taxation records on credit memos. It includes the following fields:Accounting CodeCreated By IDCreated DateExemptAmountIDJurisdictionLocation CodeNameTax AmountTax CodeTax Code DescriptionTax DateTax ModeTax RateTax Rate DescriptionTax Rate TypeUpdated By IDUpdated Date |
| Debit Memo | Debit memos that you issued to your customers to increase the amount your customers owed you. It includes the following fields:Amount Applied ByAmount Applied ToBalanceCancelled By IdCancelled OnCommentsCreated By IDCreated DateDebit Memo DateMemo NumberDiscount AmountDue DateIDPosted By IDPosted OnReason CodeSourceStatusTarget DateTax AmountTotal AmountTotal Amount Without TaxTotal Tax Exempt AmountTransferred To AccountingUpdated By IDUpdated Date |
| Debit Memo Item | Line items on debit memos. It includes the following fields:Amount Without TaxApplied To Others AmountBe Applied By Others AmountCharge DateCreated By IDCreated DateDescriptionIDProcessing TypeQuantitySKUService End DateService Start DateTax AmountTax Code NameTax Exempt AmountTax ModeUnit Of MeasureUnit PriceUpdated By IDUpdated Date |
| Debit Taxation Item | Taxation records on debit memos. It includes the following fields:Accounting CodeCreated By IDCreated DateExemptAmountIDJurisdictionLocation CodeNameTax AmountTax CodeTax Code DescriptionTax DateTax ModeTax RateTax Rate DescriptionTax Rate TypeUpdated By IDUpdated Date |
| Default Payment Method | The default payment method used to make payments. |
| Entity | The entity that the data relates to. Part of the Multi-entity feature. Contains the following fields:Address 1Address 2CityCountryCreated By IDCreated DateDisplay NameEmailIDNamePostal CodeStateUpdated By IDUpdated Date |
| Invoice | The invoice to which the payment is applied. |
| Invoice Item | Represents one line item on the invoice. |
| Journal Entry | Represents a Zuora transaction recorded as a debit and credit. Includes the following fields:Created By IDCreated DateCurrencyIDJournal Entry DateNotesNumber[Segment Name]: One or more fields representing the name of each segment created. These fields become available for export on this data source only if they are used by the GL segmentation rule.StatusTransaction CountTransaction TypeTransfer DateTransferred ByTransferred To AccountingUpdate By IDUpdated Date |
| Journal Run | Automated process for creating journal entries from Zuora transactions. Includes the following fields:Created By IDCreated DateIDNumberProcess End Date TimeProcess Start Date TimeStatusTarget Date TypeTarget End DateTarget Start DateTotal Journal Entry CountUpdated By IDUpdated Date |
| Parent Account | Refers to the parent account associated with the customer account, if applicable. |
| Sold To | The Sold-To Contact of the Account. |
| Credit Memo Application Item FX Data | Contains Home Currency and Reporting Currency information.To enable this option, submit a request at Zuora Global Support. |
| Taxation Item | Related taxation record. |
