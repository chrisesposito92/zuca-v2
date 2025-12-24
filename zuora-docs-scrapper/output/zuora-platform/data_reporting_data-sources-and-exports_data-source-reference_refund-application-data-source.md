---
title: "Refund Application data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/refund-application-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:47:43.808Z"
---

# Refund Application data source

Data source to export the refund application statistics, including amount, status, and key dates

Note:

This feature is only available if you have Invoice Settlement enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memos, and Invoice Item Settlement. If you want to have access to the feature, see [Invoice Settlement Enablement and Checklist Guide](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-migration-checklist-and-guide) for more information.

Use this data source to export the refund application statistics, including amount, status, and key dates. Each row represents a single refund application.

## Accessing data source

Navigation: ​ Reporting > Data Sources and select Refund Application as the data source.

## Data source detail

The Refund Application object represents a business event that happened to a refund.

## Base object description

Descriptions for the base Zuora object.

| Zuora Object | Description |
| --- | --- |
| Refund Application | Information about when and how refunds are applied to payments. It includes the following fields:Apply AmountCreated By IDCreated DateEffective DateIDUpdated By IDUpdated Date |

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
| Credit Memo | Credit memos that you issued to your customers to reduce invoice and account balances. It includes the following fields:Amount Applied ByAmount Applied ToBalanceCancelled By IdCancelled OnCommentsCreated By IDCreated DateCredit Memo DateMemo NumberDiscount AmountIDPosted By IDPosted OnReason CodeSourceStatusTarget DateTax AmountTotal AmountTotal Amount Without TaxTotal Tax Exempt AmountTransferred To AccountingUpdated By IDUpdated Date |
| Default Payment Method | The default payment method used to make payments. |
| Entity | The entity that the data relates to. Part of the Multi-entity feature. Contains the following fields:Address 1Address 2CityCountryCreated By IDCreated DateDisplay NameEmailIDNamePostal CodeStateUpdated By IDUpdated Date |
| Journal Entry | Represents a Zuora transaction recorded as a debit and credit. Includes the following fields:Created By IDCreated DateCurrencyIDJournal Entry DateNotesNumber[Segment Name]: One or more fields representing the name of each segment created. These fields become available for export on this data source only if they are used by the GL segmentation rule.StatusTransaction CountTransaction TypeTransfer DateTransferred ByTransferred To AccountingUpdate By IDUpdated Date |
| Journal Run | Automated process for creating journal entries from Zuora transactions. Includes the following fields:Created By IDCreated DateIDNumberProcess End Date TimeProcess Start Date TimeStatusTarget Date TypeTarget End DateTarget Start DateTotal Journal Entry CountUpdated By IDUpdated Date |
| On-Account Accounting Code | Accounting code for credit memos. It includes the following fields:CategoryCreated By IDCreated DateGL Account NameGL Account NumberIDNameNotesStatusTypeUpdated By IDUpdated Date |
| Parent Account | Refers to the parent account associated with the customer account, if applicable. |
| Payment | The money sent by a customer to pay for charges related to their subscriptions. Contains the following fields:Accounting CodeAmountApplied Amount (Only applicable if you have Invoice Settlement enabled)Applied Credit Balance AmountAuthorized Transaction IDBank Identification NumberCancelled OnCommentCreated By IDCreated DateCurrencyEffective DateGatewayGateway Order IDGateway Reconciliation StatusGateway Reconciliation ReasonGateway ResponseGateway Response CodeGateway StateIDMarked For Submission OnPayment NumberPayout IdPrepaymentReference IDReferenced Payment IDRefund AmountSecond Payment Reference IDSettled OnSoft DescriptorSoft Descriptor PhoneSourceSource NameStandalone (Only applicable if support for standalone payments is enabled)StatusSubmitted OnTransferred to AccountingTypeUnapplied AmountUpdated By IDUpdated Date |
| Payment Method | Stores information about payment method, such as a credit card, ACH or PayPal. |
| Payment Method Snapshot | A copy of the particular Payment Method used in a transaction. |
| Refund | Represents money that is returned to a customer, or a reversed transaction. |
| Sold To | The Sold-To Contact of the Account. |
| Refund Application FX Data | Contains Home Currency and Reporting Currency information.To enable this option, submit a request at Zuora Global Support. |
| Unapplied Payment Accounting Code | Accounting code for unapplied payments. Includes the following fields:CategoryCreated By IDCreated DateGL Account NameGL Account NumberIDNameNotesStatusTypeUpdated By IDUpdated Date |
