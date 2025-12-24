---
title: "Invoice Schedule data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/invoice-schedule-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:44:18.887Z"
---

# Invoice Schedule data source

Data source to export data about invoice schedules

Use this data source to export data about invoice schedules, such as total amount, billed amount, and next run date.

Navigate to Reporting > Data Sources and select Invoice Schedule from the Data Source list in the Basic Information section. To export data about invoice schedules, see Generate a data source export .

This data source is available only if you have the Billing Schedule feature enabled.

## Base object

The following table lists the fields available in the Invoice Schedule base object.

| Object | Description |
| --- | --- |
| Invoice Schedule | The invoice schedule that you create to bill subscriptions on customized schedules. This object contains the following fields:Actual AmountAdditional Subscriptions To BillBilled AmountCreated By IDCreated DateIDInvoice SeparatelyNext Run DateNotesNumberStatusTotal AmountUnbilled AmountUpdated By IDUpdated Date |

## Related objects

The following table lists the related objects of the Invoice Schedule object in alphabetical order.

| Object | Description |
| --- | --- |
| Account | The customer account that the invoice schedule is created for. For a list of available fields on this object, see Account data source. |
| Bill To | The contact of the entity or person to whom you bill for your product or service. For a list of available fields on this object, see Contact data source. |
| Default Payment Method | The default payment method to be used for making payments. For a list of available fields on this object, see Payment Method data source. |
| Parent Account | The parent account associated with the customer account, if applicable. For a list of available fields on this object, see Account data source. |
| Sold To | The contact of the entity or person to whom your product or service is sold. For a list of available fields on this object, see Contact data source. |
