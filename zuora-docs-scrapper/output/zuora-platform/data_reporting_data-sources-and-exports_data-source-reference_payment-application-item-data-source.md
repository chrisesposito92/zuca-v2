---
title: "Payment Application Item data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/payment-application-item-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:46:41.063Z"
---

# Payment Application Item data source

Data source to export data about payment application items

Note:

This feature is only available if you have Invoice Item Settlement enabled. Invoice Item Settlement must be used together with other Invoice Settlement features (Unapplied Payments, and Credit and Debit memos). If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-migration-checklist-and-guide) for more information.

Use this data source to export data about payment application items. Each row represents a payment application on one line item of the invoice or debit memo.

## Accessing the data source

​Navigation: Reporting > Data Sources and select Payment Application Item as the data source.

## Data source detail

The Payment Application Item object represents a business event that happened to a Payment at the item level.

## Base object description

Descriptions for the base Zuora object.

| Zuora Object | Description |
| --- | --- |
| Payment Application Item | Payment applications on invoice items and debit memo items. It includes the following fields:AmountCreated By IDCreated DateEffective DateIDUpdated By IDUpdated Date |

## Related object descriptions

Descriptions for related Zuora objects are listed in alphabetical order.

| Zuora Object | Description |
| --- | --- |
| Account | The account that made the payment. |
| AccountingPeriod | Periods of time that represents the financial calendar of your company. Used to assist with accounting close activities and financial reporting. Contains the following fields:Created By IDCreated DateEnd DateFiscal QuarterFiscal YearIDNameNotesStart DateStatusUpdated By IDUpdated Date |
| Accounts Receivable Accounting Code | Accounting code for accounts receivable. Contains the following fields:CategoryCreated By IDCreated DateGL Account NameGL Account NumberIDNameNotesStatusTypeUpdated By IDUpdated Date |
| Application Group | Groups of payment, refund, and credit memo applications. It includes the following fields:Created By IDCreated DateIDOperation DateUpdated By IDUpdated Date |
| Bill To | The Bill-To Contact of the Account. |
| Bank Account Accounting Code | Accounting code for your bank account. Contains the following fields:CategoryCreated By IDCreated DateGL Account NameGL Account NumberIDNameNotesStatusTypeUpdated By IDUpdated Date |
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
| Payment | The money sent by a customer to pay for charges related to their subscriptions. Contains the following fields:Accounting CodeAmountApplied Amount (Only applicable if you have Invoice Settlement enabled)Applied Credit Balance AmountAuthorized Transaction IDBank Identification NumberCancelled OnCommentCreated By IDCreated DateCurrencyEffective DateGatewayGateway Order IDGateway Reconciliation StatusGateway Reconciliation ReasonGateway ResponseGateway Response CodeGateway StateIDMarked For Submission OnPayment NumberPayout IdPrepaymentReference IDReferenced Payment IDRefund AmountSecond Payment Reference IDSettled OnSoft DescriptorSoft Descriptor PhoneSourceSource NameStandalone (Only applicable if support for standalone payments is enabled)StatusSubmitted OnTransferred to AccountingTypeUnapplied AmountUpdated By IDUpdated Date |
| Payment Application | Information about when and how payments are applied to invoices and debit memos. It includes the following fields:Apply AmountBilling Document Owner IDCreated By IDCreated DateEffective DateIDPayment Application StatusUpdated By IDUpdated Date |
| Payment Method | Stores information about payment method, such as a credit card, ACH or PayPal. |
| Payment Method Snapshot | A copy of the particular Payment Method used in a transaction. |
| Sold To | The Sold-To Contact of the Account. |
| Payment Application Item FX Data | Contains Home Currency and Reporting Currency information.To enable this option, submit a request at Zuora Global Support. |
| Taxation Item | Related taxation record. |
| Unapplied Payment Accounting Code | Accounting code for unapplied payments. Includes the following fields:CategoryCreated By IDCreated DateGL Account NameGL Account NumberIDNameNotesStatusTypeUpdated By IDUpdated Date |
