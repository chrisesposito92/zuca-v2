---
title: "Taxation Item data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/taxation-item-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:48:48.295Z"
---

# Taxation Item data source

Data source to export taxation information

Use this data source to export taxation information. This data source includes information on [Account](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/account), [Product](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/product), [Subscription](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/subscription), Charges, and [RatePlans](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/rateplan). Each row represents one line of taxation record on invoice item.

## Objects available in the data source

![Taxation Item Data Source](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/ba30430d-1c89-4484-9981-3a594a5032eb?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImJhMzA0MzBkLTFjODktNDQ4NC05OTgxLTNhNTk0YTUwMzJlYiIsImV4cCI6MTc2NjY4ODUyNiwianRpIjoiZmI1OWExYjg4YzYyNGJjMjhmNDc4ZGU4OTQ4NGZjMmMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.HsWFHbZc1QMyMrZyqM_w3YIKCJzVTCVVVH2IWl1EzTk)

## Base object description

| Taxation Item | This is the base object for the Taxation Item Data Source Export. Contains the following fields:Accounting CodeBalanceCountryCreated By IDCreated DateCredit AmountCustomer CodeExempt AmountExempt CertificateIDJurisdictionLocation CodeNamePayment AmountSeller RegistrationTax AmountTax Amount UnroundedTax CodeTax Code DescriptionTax DateTax DescriptionTax ModeTax RateTax Rate DescriptionTax Rate TypeUpdated By IDUpdated Date |
| --- | --- |

## Related Zuora objects

| Object | Description |
| --- | --- |
| Account | The customer account and corresponding details. |
| Accounting Period | Periods of time that represents the financial calendar of your company. Used to assist with accounting close activities and financial reporting. Contains the following fields:Created By IDCreated DateEnd DateFiscal QuarterFiscal YearIDNameNotesStart DateStatusUpdated By IDUpdated Date |
| Accounts Receivable Accounting Code | Accounting code for accounts receivable. Contains the following fields:CategoryCreated By IDCreated DateGL Account NameGL Account NumberIDNameNotesStatusTypeUpdated By IDUpdated Date |
| Amendment | The amendment that is tied to the invoice item, if applicable. |
| Bill To Contact | The contact of the entity/person to whom you bill for your product or service. |
| Entity | The entity that the data relates to. Part of the Multi-entity feature. Contains the following fields:Address 1Address 2CityCountryCreated By IDCreated DateDisplay NameEmailIDNamePostal CodeStateUpdated By IDUpdated Date |
| Invoice | Invoice that contains the invoice item. |
| Invoice | Invoice that taxation was applied to. |
| Invoice Item | Invoice item that the taxation item was applied to. |
| Journal Entry | Represents a Zuora transaction recorded as a debit and credit. Includes the following fields:Created By IDCreated DateCurrencyIDJournal Entry DateNotesNumber[Segment Name]: One or more fields representing the name of each segment created. These fields become available for export on this data source only if they are used by the GL segmentation rule.StatusTransaction CountTransaction TypeTransfer DateTransferred ByTransferred To AccountingUpdate By IDUpdated DateThis object is available on this data source only when Zuora Finance is enabled on your tenant. |
| Journal Run | Automated process for creating journal entries from Zuora transactions. Includes the following fields:Created By IDCreated DateIDNumberProcess End Date TimeProcess Start Date TimeStatusTarget Date TypeTarget End DateTarget Start DateTotal Journal Entry CountUpdated By IDUpdated DateThis object is available on this data source only when Zuora Finance is enabled on your tenant. |
| Product | The product related to the taxation. |
| Product Rate Plan | The pricing plan (in the Product Catalog) related to the taxation. |
| Product Rate Plan Charge | The charge (in the Product Catalog) that is related to the taxation. |
| Rate Plan | The pricing plan (for the subscription) that is related to the taxation. |
| Rate Plan Charge | The charge (for the subscription) that is related to the taxation. |
| Sales Tax Payable Accounting Code | Accounting code for sales tax payable. Contains the following fields:CategoryCreated By IDCreated DateGL Account NameGL Account NumberIDNameNotesStatusTypeUpdated By IDUpdated Date |
| Sold To Contact | The contact of the entity/person to whom your product or service is sold. |
| Taxation Item FX Data | Contains Home Currency and Reporting Currency information.To enable this option, submit a request at Zuora Global Support. |
| Subscription | The subscription the invoice item belongs to. |
| Taxable Item Snapshot | Tax information when creating taxes.This feature is in the Early Availability phase. If you want to have access to the feature, submit a request at Zuora Global Support.Contains the following fields:Company CodeCreated by IDCreated DateDestination Address CityDestination Address CountryDestination Address CountyDestination Address Line 1Destination Address Line 2Destination Address Postal CodeDestination Address RegionDestination Address StateEntity/Use CodeIDItem TypeTax Code NameTax DateTax Exempt Certificate IDTax Exempt Certificate TypeTax Exempt DescriptionTax Exempt Effective DateTax Exempt Expiration DateTax Exempt Issuing JurisdictionTax Exempt StatusTax ModeTaxable Item IDVAT ID |
