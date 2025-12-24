---
title: "Invoice Item data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/invoice-item-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:44:13.881Z"
---

# Invoice Item data source

Data source to export invoice item data

Use this data source to export invoice item data. Each row represents one line item on an invoice. Data includes information on the products and subscriptions that correspond to the line item as well as the invoice, and the account associated with the invoice.

## Objects available in the data source

![Invoice Item Datasource Relationship Diagram](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/96a5cbc0-8b91-4c68-88ab-ef3d5e0ea244?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijk2YTVjYmMwLThiOTEtNGM2OC04OGFiLWVmM2Q1ZTBlYTI0NCIsImV4cCI6MTc2NjY4ODI1MSwianRpIjoiMWVmNjZlNjM1ZGNkNDc0YTk0ZTgyY2U1MGY1NTc4NTkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.YBBsnGl4m4iQNehrrgIgf0_KOR-QSZbKbVgQPPC4ZOY)

## Base object description

| Object | Description |
| --- | --- |
| Invoice Item | This is the base object for the Invoice Item Data Source Export. Contains the following fields:Accounting CodeApplied To Invoice Item IdBalanceNote: This field is only available if you have the Invoice Settlement feature enabled.Booking ReferenceCharge AmountCharge DateCharge NameCharge NumberCreated By IDCreated DateExclude Item Billing From Revenue AccountingIDNumber Of Deliveries - dedicated to the Delivery Pricing chargesProcessing TypePurchase Order NumberQuantity - The value is always 1 for the Delivery Pricing charges.Reflect Discount In Net Amount - indicates whether reflects the net amount of the Delivery Pricing charges after a percentage discountRevenue Recognition Start DateSKUService End DateService Start DateSource Item TypeSubscription IDSubscription NumberTax AmountTax CodeTax Exempt AmountTax ModeUOMUnit PriceUpdated by IDUpdated Date |

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
| Journal Entry | Represents a Zuora transaction recorded as a debit and credit. Includes the following fields:Created By IDCreated DateCurrencyIDJournal Entry DateNotesNumber[Segment Name]: One or more fields representing the name of each segment created. These fields become available for export on this data source only if they are used by the GL segmentation rule.StatusTransaction CountTransaction TypeTransfer DateTransferred ByTransferred To AccountingUpdate By IDUpdated DateThis object is available on this data source only when Zuora Finance is enabled on your tenant. |
| Journal Run | Automated process for creating journal entries from Zuora transactions. Includes the following fields:Created By IDCreated DateIDNumberProcess End Date TimeProcess Start Date TimeStatusTarget Date TypeTarget End DateTarget Start DateTotal Journal Entry CountUpdated By IDUpdated DateThis object is available on this data source only when Zuora Finance is enabled on your tenant. |
| Product | The product the invoice line item belongs to. |
| Product Rate Plan | The product rate plan the invoice item belongs to. |
| Product Rate Plan Charge | The product rate plan charge the invoice item belongs to. |
| Rate Plan | The rate plan the invoice item belongs to. |
| Rate Plan Charge | The rate plan charge the invoice item belongs to. |
| Subscription | The subscription the invoice item belongs to. |
| Accounts Receivable Accounting Code | Accounting code for accounts receivable. |
| Recognized Revenue Accounting Code | Accounting code for recognized revenue. |
| Deferred Revenue Accounting Code | Accounting code for deferred revenue. |

## Charge Amount field

The Charge Amount field of the Invoice Item data source is the same as the Extended Price column included in the invoice CSV export file.

## Charge Name field

Use the Charge Name field to include more information in the data source export. The Charge Name field in the Invoice Item data source is different from the Charge Number field on the Rate Plan Charge data source. Typically, the Charge Name on Invoice Item contains additional information such as "-- Proration." For example: `Monthly Fee -- Proration`

## Source Item Type field

The Source Item Type field indicates the source of creation of an invoice item, possible values are:

-   `SubscriptionComponent`: the invoice item is created from a subscription rate plan charge.

-   `Rounding`: the invoice item is created as a result of extra rounding .

-   `ProductRatePlanCharge`: the invoice item is created from a product rate plan charge directly.

-   `None`: the invoice item is created from an ad-hoc standalone invoice.

-   `OrderLineItem`: the invoice item is created from an order line item.


## Booking Reference field

If the invoice item is created from an order line item, its Booking Reference is the id of the order line item.

If the invoice item is created from other sources, its Booking Reference is the string value as specified during its creation or ‘null’ if not specified at all.
