---
title: "Credit Balance Adjustment data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/credit-balance-adjustment-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:43:09.724Z"
---

# Credit Balance Adjustment data source

Data source to export data associated with credit balance adjustments

Use this data source to export data associated with credit balance adjustments. One row in the export represents one credit balance adjustment. Note that the Order to Revenue feature or the [Billing - Revenue Integration](/zuora-revenue/advanced-revenue-operations/billing---revenue-integration) feature does not support the Credit Balance Adjustment object.

Note:

If you have the Invoice Settlement feature enabled, this data source is deprecated and only available for backward compatibility.

## Accessing the data source

Navigation: Reporting > Data Sources and select Credit Balance Adjustment as the Data Source.

## Data source diagram

This diagram illustrates the hierarchical association between the base Credit Balance Adjustment object and related (joined) Zuora objects.

![Credit Balance Adjustment Data Source Diagram](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/c5a7e702-a622-46c2-9304-15b91b44fbd3?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImM1YTdlNzAyLWE2MjItNDZjMi05MzA0LTE1YjkxYjQ0ZmJkMyIsImV4cCI6MTc2NjY4ODE4NywianRpIjoiNTBhZWI5YTNkNDMwNDA4NzgxZGFiZDNhOTAxYWJkMWQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.u9FkDIwgNEaqssf2XeCdOy5_-Se41H_Lavs-pM4BwiA)

## Data source details

The following sections provide data source details.

## Base object description

| Zuora Object | Description |
| --- | --- |
| Credit Balance Adjustment | Represents one adjustment to the credit balance.This is the base Zuora object for the Credit Balance Adjustment data source export and includes the following fields:Account IdAccounting CodeAdjustment DateAmountCommentCreated By IDCreated DateIDNumberReason CodeReferenceIdSource Transaction IDSource Transaction NumberSource Transaction TypeStatusTransferred To AccountingTypeUpdated By IDUpdated Date |

## Related Zuora objects

Descriptions for related Zuora objects are listed in alphabetical order.

| Zuora Object | Description |
| --- | --- |
| Account | The customer account information. Note this is the Subscription Owner account. |
| Accounting Period | Periods of time that represents the financial calendar of your company. Used to assist with accounting close activities and financial reporting. Contains the following fields:Created By IDCreated DateEnd DateFiscal QuarterFiscal YearIDNameNotesStart DateStatusUpdated By IDUpdated Date |
| Accounts Receivable Accounting Code | Accounting code for accounts receivable. Contains the following fields:CategoryCreated By IDCreated DateGL Account NameGL Account NumberIDNameNotesStatusTypeUpdated By IDUpdated Date |
| Bank Account Accounting Code | Accounting code for your bank account. Contains the following fields:CategoryCreated By IDCreated DateGL Account NameGL Account NumberIDNameNotesStatusTypeUpdated By IDUpdated Date |
| Cash on Account Accounting Code | Accounting code for customer cash on account. Contains the following fields:CategoryCreated By IDCreated DateGL Account NameGL Account NumberIDNameNotesStatusTypeUpdated By IDUpdated Date |
| Credit Balance Adjustment FX Data | Contains Home Currency and Reporting Currency information.To enable this option, submit a request at Zuora Global Support. |
| Entity | The entity that the data relates to. Part of the Multi-entity feature. Contains the following fields:Address 1Address 2CityCountryCreated By IDCreated DateDisplay NameEmailIDNamePostal CodeStateUpdated By IDUpdated Date |
| Invoice | The invoice to which the payment is applied. |
| Journal Entry | Represents a Zuora transaction recorded as a debit and credit. Includes the following fields:Created By IDCreated DateCurrencyIDJournal Entry DateNotesNumber[Segment Name]: One or more fields representing the name of each segment created. These fields become available for export on this data source only if they are used by the GL segmentation rule.StatusTransaction CountTransaction TypeTransfer DateTransferred ByTransferred To AccountingUpdate By IDUpdated DateThis object is available on this data source only when Zuora Finance is enabled on your tenant. |
| Journal Run | Automated process for creating journal entries from Zuora transactions. Includes the following fields:Created By IDCreated DateIDNumberProcess End Date TimeProcess Start Date TimeStatusTarget Date TypeTarget End DateTarget Start DateTotal Journal Entry CountUpdated By IDUpdated DateThis object is available on this data source only when Zuora Finance is enabled on your tenant. |
| Payment | The money sent by a customer to pay for charges related to their subscriptions. Contains the following fields:Accounting CodeAmountApplied Amount (Only applicable if you have Invoice Settlement enabled)Applied Credit Balance AmountAuthorized Transaction IDBank Identification NumberCancelled OnCommentCreated By IDCreated DateCurrencyEffective DateGatewayGateway Order IDGateway Reconciliation StatusGateway Reconciliation ReasonGateway ResponseGateway Response CodeGateway StateIDMarked For Submission OnPayment NumberPayout IdPrepaymentReference IDReferenced Payment IDRefund AmountSecond Payment Reference IDSettled OnSoft DescriptorSoft Descriptor PhoneSourceSource NameStandalone (Only applicable if support for standalone payments is enabled)StatusSubmitted OnTransferred to AccountingTypeUnapplied AmountUpdated By IDUpdated Date |
| Refund | Represents money that is returned to a customer, or a reversed transaction. |
