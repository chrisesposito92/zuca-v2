---
title: "Application Group data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/application-group-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:42:49.218Z"
---

# Application Group data source

Data source to export the application group data, such as key dates

Note:

This feature is only available if you have Invoice Settlement enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memos, and Invoice Item Settlement. If you want to have access to the feature, see [Invoice Settlement Enablement and Checklist Guide](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-migration-checklist-and-guide) for more information.

Use this data source to export the application group data, such as key dates. Each row represents a single application group. The applications that are performed in a single operation are in an application group. For example, you apply a payment to more than one invoice and debit memo in a single apply payment operation. The payment applied to an invoice or debit memo is a payment application. An application group is a group of all the payment applications for this single apply payment operation.

## Data Source

Navigation: ​ Reporting > Data Sources and select Application Group as the data source.

## Data Source detail

The following sections provide data source details.

## Basic object description

Descriptions for the base Zuora object.

| Zuora Object | Description |
| --- | --- |
| Application Group | Groups of payment, refund, and credit memo applications. It includes the following fields:Created By IDCreated DateIDOperation DateUpdated By IDUpdated Date |

## Related object descriptions

| Zuora Object | Description |
| --- | --- |
| Entity | The entity that the data relates to. Part of the Multi-entity feature. Contains the following fields:Address 1Address 2CityCountryCreated By IDCreated DateDisplay NameEmailIDNamePostal CodeStateUpdated By IDUpdated Date |
| Payment | The money sent by a customer to pay for charges related to their subscriptions. Contains the following fields:Accounting CodeAmountApplied Amount (Only applicable if you have Invoice Settlement enabled)Applied Credit Balance AmountAuthorized Transaction IDBank Identification NumberCancelled OnCommentCreated By IDCreated DateCurrencyEffective DateGatewayGateway Order IDGateway Reconciliation StatusGateway Reconciliation ReasonGateway ResponseGateway Response CodeGateway StateIDMarked For Submission OnPayment NumberPayout IdPrepaymentReference IDReferenced Payment IDRefund AmountSecond Payment Reference IDSettled OnSoft DescriptorSoft Descriptor PhoneSourceSource NameStandalone (Only applicable if support for standalone payments is enabled)StatusSubmitted OnTransferred to AccountingTypeUnapplied AmountUpdated By IDUpdated Date |
| Payment Method | Stores information about payment method, such as a credit card, ACH or PayPal. |
| Payment Method Snapshot | A copy of the particular Payment Method used in a transaction. |
| Refund | Represents money that is returned to a customer, or a reversed transaction. |
