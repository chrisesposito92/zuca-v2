---
title: "Refund Invoice Payment data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/refund-invoice-payment-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:47:51.647Z"
---

# Refund Invoice Payment data source

Data source to export information from Refund Invoice Payment and associated Invoices, Payments, and Accounts

Use this data source to export information from Refund Invoice Payment and associated Invoices, Payments, and Accounts. Each row represents one line of refund on an [InvoicePayment](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/invoicepayment).

Note:

If you have the Invoice Settlement feature enabled, this data source is deprecated and is only available for backward compatibility. Use the Refund Part data source instead to export refund information.

## Objects available in the data source

![Refund Invoice Payment Data Source Diagram](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/2f3a9eff-fd03-4da3-9e7d-5c09acaee05f?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjJmM2E5ZWZmLWZkMDMtNGRhMy05ZTdkLTVjMDlhY2FlZTA1ZiIsImV4cCI6MTc2NjY4ODQ2OSwianRpIjoiM2MxNGRlMGYyYzNiNGI1YjliZGNiM2M3Nzc0MjI0MGMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.qSgmdEcTabvWN3rSFYhdcZy8A_JubHSrvkZlgL-MpKQ)

## Base object description

| Object | Description |
| --- | --- |
| Refund Invoice Payment | Represents a refund to a customer for an Invoice Payment made by the customer.Contains the following fields:Created By IDCreated DateIDRefund AmountUpdated By IDUpdated Date |

## Related Zuora objects

| Object | Description |
| --- | --- |
| Account | The account of the invoice payment. |
| Accounting Period | Periods of time that represents the financial calendar of your company. Used to assist with accounting close activities and financial reporting. Contains the following fields:Created By IDCreated DateEnd DateFiscal QuarterFiscal YearIDNameNotesStart DateStatusUpdated By IDUpdated Date |
| Accounts Receivable Accounting Code | Accounting code for accounts receivable. Contains the following fields:CategoryCreated By IDCreated DateGL Account NameGL Account NumberIDNameNotesStatusTypeUpdated By IDUpdated Date |
| Bank Account Accounting Code | Accounting code for your bank account. Contains the following fields:CategoryCreated By IDCreated DateGL Account NameGL Account NumberIDNameNotesStatusTypeUpdated By IDUpdated Date |
| Bill To Contact | The Bill To Contact of the account that made the payment. |
| Entity | The entity that the data relates to. Part of the Multi-entity feature. Contains the following fields:Address 1Address 2CityCountryCreated By IDCreated DateDisplay NameEmailIDNamePostal CodeStateUpdated By IDUpdated Date |
| Invoice | Invoice that the payment was applied to. |
| Invoice Payment | Represents a payment made by a customer against an invoice. |
| Journal Entry | Represents a Zuora transaction recorded as a debit and credit. Includes the following fields:Created By IDCreated DateCurrencyIDJournal Entry DateNotesNumber[Segment Name]: One or more fields representing the name of each segment created. These fields become available for export on this data source only if they are used by the GL segmentation rule.StatusTransaction CountTransaction TypeTransfer DateTransferred ByTransferred To AccountingUpdate By IDUpdated DateThis object is available on this data source only when Zuora Finance is enabled on your tenant. |
| Journal Run | Automated process for creating journal entries from Zuora transactions. Includes the following fields:Created By IDCreated DateIDNumberProcess End Date TimeProcess Start Date TimeStatusTarget Date TypeTarget End DateTarget Start DateTotal Journal Entry CountUpdated By IDUpdated DateThis object is available on this data source only when Zuora Finance is enabled on your tenant. |
| Payment | The payment that used to apply against the invoice. |
| Payment Method | Details of the payment method, such as credit card or PayPal. |
| Refund | The refund given to the customer. |
| Refund Invoice Payment FX Data | Contains Home Currency and Reporting Currency information.To enable this option, submit a request at Zuora Global Support. |
| Sold To Contact | The Sold To Contact of the account that made the payment. |
