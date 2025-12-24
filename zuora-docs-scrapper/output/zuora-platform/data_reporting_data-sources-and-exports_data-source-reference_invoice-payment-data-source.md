---
title: "Invoice Payment data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/invoice-payment-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:44:16.216Z"
---

# Invoice Payment data source

Data source to export invoice payment data

Use this data source to export invoice payment data. Each row represents a payment or partial payment that has been applied to an invoice (a payment applied across several invoices will have several rows). Use this export when trying to reconcile partial payments applied across one or multiple invoices. This data source also includes data on Invoice the payment is applied to, and account information.

Note:

If you have the Invoice Settlement feature enabled, this data source is deprecated and is only available for backward compatibility. Use the Payment Part data source instead to export invoice payment information.

## Objects available in the data source

![Invoice Payment Data Source Diagram](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/91ee5b0c-84c1-485f-9687-387ac6752cec?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjkxZWU1YjBjLTg0YzEtNDg1Zi05Njg3LTM4N2FjNjc1MmNlYyIsImV4cCI6MTc2NjY4ODI1NCwianRpIjoiZWI4OTgyY2I1MmE5NGQ5NzhiMWNhZWE5ODFmNDdjNTQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.bzVfSgS-oO24h89UjUXz0DOhHsQNotz_FqiqY9eA69w)

## Base object description

| Object | Description |
| --- | --- |
| Invoice Payment | Contains the following fields:AmountCreated By IDCreated DateIDRefund AmountUpdated By IDUpdated Date |

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
| Invoice Payment | The base object for this export, it links a payment to an invoice.. |
| Invoice Payment FX Data | Contains Home Currency and Reporting Currency information.To enable this option, submit a request at Zuora Global Support. |
| Journal Entry | Represents a Zuora transaction recorded as a debit and credit. Includes the following fields:Created By IDCreated DateCurrencyIDJournal Entry DateNotesNumber[Segment Name]: One or more fields representing the name of each segment created. These fields become available for export on this data source only if they are used by the GL segmentation rule.StatusTransaction CountTransaction TypeTransfer DateTransferred ByTransferred To AccountingUpdate By IDUpdated DateThis object is available on this data source only when Zuora Finance is enabled on your tenant. |
| Journal Run | Automated process for creating journal entries from Zuora transactions. Includes the following fields:Created By IDCreated DateIDNumberProcess End Date TimeProcess Start Date TimeStatusTarget Date TypeTarget End DateTarget Start DateTotal Journal Entry CountUpdated By IDUpdated DateThis object is available on this data source only when Zuora Finance is enabled on your tenant. |
| Payment | The payment that used to apply against the invoice.While most payments are a applied to a single invoice, a payment can be split among multiple invoices, resulting in multiple Invoice Payment objects. |
| Payment Method | Details of the payment method, such as credit card or PayPal used to make the payment against the invoice. |
| Sold To Contact | The Sold To Contact of the account that made the payment. |
