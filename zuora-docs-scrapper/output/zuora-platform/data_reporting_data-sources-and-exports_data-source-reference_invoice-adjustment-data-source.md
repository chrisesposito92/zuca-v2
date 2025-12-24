---
title: "Invoice Adjustment data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/invoice-adjustment-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:44:05.894Z"
---

# Invoice Adjustment data source

Data source to export data for adjustments applied to an invoice

Note:

Invoice Adjustment is deprecated on Production. Zuora recommends that you use the Invoice Item Adjustment to adjust invoices. If you have the Advanced AR Settlement feature enabled, this data source is deprecated and only available for backward compatibility.

Use this data source to export data for adjustments applied to an invoice.

## Objects available in the data source

![Invoice Adjustment Data Source](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/be41196c-2f51-4562-9203-a4f48335533e?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImJlNDExOTZjLTJmNTEtNDU2Mi05MjAzLWE0ZjQ4MzM1NTMzZSIsImV4cCI6MTc2NjY4ODI0NCwianRpIjoiNzY3YjZiMmM1N2RmNDMzZWE1MjEyMGIzNGFhYjJmOTciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.-9lAaHu8iZdwopVohFfnxHnsQrarqSPFQ6sURBqqhSo)

## Base object description

| Object | Description |
| --- | --- |
| Invoice Adjustment | Contains the following fields:Accounting CodeAdjustment DateAdjustment NumberAmountCancelled By IDCancelled OnCommentsCreated By IDCreated DateIDImpact AmountInvoice NumberReason CodeReferenceIdStatusTransferred to AccountingTypeUpdated By IDUpdated Date |

## Related Zuora objects

| Object | Description |
| --- | --- |
| Account | The account number to whom the invoice belongs. |
| Accounting Period | Periods of time that represents the financial calendar of your company. Used to assist with accounting close activities and financial reporting. Contains the following fields:Created By IDCreated DateEnd DateFiscal QuarterFiscal YearIDNameNotesStart DateStatusUpdated By IDUpdated Date |
| Accounts Receivable Accounting Code | Accounting code for accounts receivable. Contains the following fields:CategoryCreated By IDCreated DateGL Account NameGL Account NumberIDNameNotesStatusTypeUpdated By IDUpdated Date |
| Bill To Contact | The contact of the entity/person to whom you bill for your product or service. |
| Default Payment Method | The default payment method of the customer account, to whom the invoice belongs. |
| Deferred Revenue Accounting Code | Accounting code for deferred revenue. Contains the following fields:CategoryCreated By IDCreated DateGL Account NameGL Account NumberIDNameNotesStatusTypeUpdated By IDUpdated Date |
| Entity | The entity that the data relates to. Part of the Multi-entity feature. Contains the following fields:Address 1Address 2CityCountryCreated By IDCreated DateDisplay NameEmailIDNamePostal CodeStateUpdated By IDUpdated Date |
| Invoice | The invoice, the base object for this Data Source Export. |
| Invoice Adjustment FX Data | Contains Home Currency and Reporting Currency information.To enable this option, submit a request at Zuora Global Support. |
| Journal Entry | Represents a Zuora transaction recorded as a debit and credit. Includes the following fields:Created By IDCreated DateCurrencyIDJournal Entry DateNotesNumber[Segment Name]: One or more fields representing the name of each segment created. These fields become available for export on this data source only if they are used by the GL segmentation rule.StatusTransaction CountTransaction TypeTransfer DateTransferred ByTransferred To AccountingUpdate By IDUpdated DateThis object is available on this data source only when Zuora Finance is enabled on your tenant. |
| Journal Run | Automated process for creating journal entries from Zuora transactions. Includes the following fields:Created By IDCreated DateIDNumberProcess End Date TimeProcess Start Date TimeStatusTarget Date TypeTarget End DateTarget Start DateTotal Journal Entry CountUpdated By IDUpdated DateThis object is available on this data source only when Zuora Finance is enabled on your tenant. |
| Sold To Contact | The contact of the entity/person to whom your product or service is sold. |
