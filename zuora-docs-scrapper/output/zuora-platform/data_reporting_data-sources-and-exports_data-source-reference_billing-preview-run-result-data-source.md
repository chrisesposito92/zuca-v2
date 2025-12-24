---
title: "Billing Preview Run Result data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/billing-preview-run-result-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:42:54.383Z"
---

# Billing Preview Run Result data source

Data source to retrieve the result of a billing preview run

Use this data source to retrieve the result of a billing preview run.

Note:

You can use this data source only if you set the storage option of the billing preview run as database. See [Billing preview run](https://www.zuora.com/developer/api-references/api/tag/Billing-Preview-Run/) for more information.

## Data Source

Go to Reporting > Data Sources and select Billing Preview Run Result as the data source.

## Base object description

| Object | Description |
| --- | --- |
| Billing Preview Run Result | This is the base object for the Billing Preview Run Result data source. Contains the following fields:Account IDAppliedToInvoiceItemIdBilling Preview Run IdCreated By IDCreated DateCreditMemoItem AmountCreditMemoItem DescriptionCreditMemoItem IDCreditMemoItem QuantityCreditMemoItem SKUCreditMemoItem SKU NameCreditMemoItem Service EndDateCreditMemoItem Service StartDateCreditMemoItem UomIDInvoiceItem ChargeAmountInvoiceItem ChargeDateInvoiceItem ChargeTypeInvoiceItem IDInvoiceItem ProcessingTypeInvoiceItem QuantityInvoiceItem Service EndDate |

## Related Zuora objects

| Object | Description |
| --- | --- |
| Account | The Customer Account. |
| Accounting Period | Periods of time that represents the financial calendar of your company. Used to assist with accounting close activities and financial reporting. Contains the following fields:Created By IDCreated DateEnd DateFiscal QuarterFiscal YearIDNameNotesStart DateStatusUpdated By IDUpdated Date |
| Amendment | The amendment that is tied to the invoice item, if applicable. |
| Bill To Contact | The contact of the entity/person whom you bill for your product or service. |
| Bill To Contact Snapshot | A copy of the bill to contact information used to generate invoices. |
| Entity | The entity that the data relates to. Part of the Multi-entity feature. Contains the following fields:Address 1Address 2CityCountryCreated By IDCreated DateDisplay NameEmailIDNamePostal CodeStateUpdated By IDUpdated Date |
| Sold To Contact | The contact of the entity/person to whom your product or service is sold. |
| Sold To Contact Snapshot | A copy of the sold to contact information used to generate invoices. |
| Invoice Item FX Data | Contains Home Currency and Reporting Currency information.To enable this option, submit a request at Zuora Global Support. |
| Default Payment Method | The default payment method for the Customer Account. |
| Invoice | Invoice that the payment was applied to. |
| Journal Entry | Represents a Zuora transaction recorded as a debit and credit. Includes the following fields:Created By IDCreated DateCurrencyIDJournal Entry DateNotesNumber[Segment Name]: One or more fields representing the name of each segment created. These fields become available for export on this data source only if they are used by the GL segmentation rule.StatusTransaction CountTransaction TypeTransfer DateTransferred ByTransferred To AccountingUpdate By IDUpdated DateNote:This object is available on this data source only when Zuora Finance is enabled on your tenant. |
| Journal Run | Automated process for creating journal entries from Zuora transactions. Includes the following fields:Created By IDCreated DateIDNumberProcess End Date TimeProcess Start Date TimeStatusTarget Date TypeTarget End DateTarget Start DateTotal Journal Entry CountUpdated By IDUpdated DateNote:This object is available on this data source only when Zuora Finance is enabled on your tenant. |
| Product | The product the invoice line item belongs to. |
| Product Rate Plan | The product rate plan the invoice item belongs to. |
| Product Rate Plan Charge | The product rate plan charge the invoice item belongs to. |
| Rate Plan | The rate plan the invoice item belongs to. |
| Rate Plan Charge | The rate plan charge the invoice item belongs to. |
| Subscription | The subscription the invoice item belongs to. |
| Accounts Receivable Accounting Code | Accounting code for accounts receivable. |
| Recognized Revenue Accounting Code | Accounting code for recognized revenue. |
| Deferred Revenue Accounting Code | Accounting code for deferred revenue. |
