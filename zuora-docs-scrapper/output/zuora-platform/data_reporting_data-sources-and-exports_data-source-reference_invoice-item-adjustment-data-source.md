---
title: "Invoice Item Adjustment data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/invoice-item-adjustment-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:44:11.073Z"
---

# Invoice Item Adjustment data source

Data source to export data related to invoice item adjustments

Use this data source to export data related to invoice item adjustments. Each row represents an adjustment of one line item on an invoice.

## Objects available in the data source

![Invoice Item Adjustment Data Source Diagram](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/b978dff2-1a80-4663-9c05-567c2ab065d4?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImI5NzhkZmYyLTFhODAtNDY2My05YzA1LTU2N2MyYWIwNjVkNCIsImV4cCI6MTc2NjY4ODI0OSwianRpIjoiZDIxOTE3OGZiNThjNGY0MjkzYzg1YjBjMGU2MzI0N2EiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.8wpCY81UKOpTmAdJmh5Mk7r2h25KytP7N6McY4nPNww)

## Base object description

| Object | Description |
| --- | --- |
| Invoice Item Adjustment | Contains the following fields:Account IDAccounting CodeAdjustment DateAdjustment NumberAmountCancelled By IDCancelled DateCommentCreated By IDCreated DateExclude Item Billing From Revenue AccountingIDInvoice IDInvoice Item NameInvoice NumberReason CodeReference IDService End DateService Start DateSource IDSource TypeStatusTransferred to AccountingTypeUpdated By IDUpdated Date |

## Related Zuora objects

| Object | Description |
| --- | --- |
| Account | Customer account |
| Accounting Period | Periods of time that represents the financial calendar of your company. Used to assist with accounting close activities and financial reporting. Contains the following fields:Created By IDCreated DateEnd DateFiscal QuarterFiscal YearIDNameNotesStart DateStatusUpdated By IDUpdated Date |
| Accounts Receivable Accounting Code | Accounting code for accounts receivable. Contains the following fields:CategoryCreated By IDCreated DateGL Account NameGL Account NumberIDNameNotesStatusTypeUpdated By IDUpdated Date |
| Amendment | Amendment tied to the invoice item, if applicable |
| Bill-to Contact | Contact of the entity/person whom you bill for your product or service |
| Bill To Contact Snapshot | A copy of the bill to contact information used to generate invoices.This object has values only if you set the Preserve snapshot of bill-to and sold-to contacts when billing documents are posted? billing rule to Yes. |
| Entity | The entity that the data relates to. Part of the Multi-entity feature. Contains the following fields:Address 1Address 2CityCountryCreated By IDCreated DateDisplay NameEmailIDNamePostal CodeStateUpdated By IDUpdated Date |
| Default Payment Method | Default payment method for the Customer Account |
| Deferred Revenue Accounting Code | Accounting code for deferred revenue. Contains the following fields:CategoryCreated By IDCreated DateGL Account NameGL Account NumberIDNameNotesStatusTypeUpdated By IDUpdated Date |
| Invoice | Invoice the payment was applied to |
| Invoice Item Adjustment FX Data | Contains Home Currency and Reporting Currency information.To enable this option, submit a request at Zuora Global Support. |
| Journal Entry | Represents a Zuora transaction recorded as a debit and credit. Includes the following fields:Created By IDCreated DateCurrencyIDJournal Entry DateNotesNumber[Segment Name]: One or more fields representing the name of each segment created. These fields become available for export on this data source only if they are used by the GL segmentation rule.StatusTransaction CountTransaction TypeTransfer DateTransferred ByTransferred To AccountingUpdate By IDUpdated DateThis object is available on this data source only when Zuora Finance is enabled on your tenant. |
| Journal Run | Automated process for creating journal entries from Zuora transactions. Includes the following fields:Created By IDCreated DateIDNumberProcess End Date TimeProcess Start Date TimeStatusTarget Date TypeTarget End DateTarget Start DateTotal Journal Entry CountUpdated By IDUpdated DateThis object is available on this data source only when Zuora Finance is enabled on your tenant. |
| Parent Account | Parent of the customer account, if applicable |
| Product | Product the invoice line item belongs to |
| Product Rate Plan | Product rate plan the invoice item belongs to |
| Product Rate Plan Charge | Product rate plan charge the invoice item belongs to |
| Rate Plan | Rate plan the invoice item belongs to |
| Rate Plan Charge | Rate plan charge the invoice item belongs to |
| Recognized Revenue Accounting Code | Accounting code for recognized revenue. Contains the following fields:CategoryCreated By IDCreated DateGL Account NameGL Account NumberIDNameNotesStatusTypeUpdated By IDUpdated Date |
| Sales Tax Payable Accounting Code | Accounting code for sales tax payable. Contains the following fields:CategoryCreated By IDCreated DateGL Account NameGL Account NumberIDNameNotesStatusTypeUpdated By IDUpdated Date |
| Sold-to Contact | Contact of the entity/person to whom your product or service is sold |
| Sold-to Contact Snapshot | A copy of the sold to contact information used to generate invoices.This object has values only if you set the Preserve snapshot of bill-to and sold-to contacts when billing documents are posted? billing rule to Yes. |
| Subscription | Subscription the invoice item belongs to |
| Taxation Item | Related taxation record |
| Taxable Item Snapshot | Tax information when creating taxes.This feature is in the Early Availability phase. If you want to have access to the feature, submit a request at Zuora Global Support.Contains the following fields:Company CodeCreated by IDCreated DateDestination Address CityDestination Address CountryDestination Address CountyDestination Address Line 1Destination Address Line 2Destination Address Postal CodeDestination Address RegionDestination Address StateEntity/Use CodeIDItem TypeTax Code NameTax DateTax Exempt Certificate IDTax Exempt Certificate TypeTax Exempt DescriptionTax Exempt Effective DateTax Exempt Expiration DateTax Exempt Issuing JurisdictionTax Exempt StatusTax ModeTaxable Item IDVAT ID |
