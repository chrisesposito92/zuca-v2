---
title: "Guided Usage data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/guided-usage-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:43:58.533Z"
---

# Guided Usage data source

Know how the Guided Usage data source is used

## Data source

After you enable Prepaid with Drawdown and Unbilled Usage, charge-level guided usage objects will be automatically generated upon usage upload. The guided usage object is used in the following ways:

-   Prepaid with Drawdown subscriptions will be drawn down based on guided usage.

-   Unbilled usage will be calculated based on guided usage.


​ Navigation: Reporting > Data Sources and select Guided Usage as the data source.

## Objects available in the data source

The following sections provide the lists of objects available in the data source.

## Base object description

| Zuora object | Description |
| --- | --- |
| Guided Usage | The guided usage object. It includes the following fields:Created By IDCreated DateDrawdown Remaining QuantityDrawdown Request IDIDImport IDInvoice Owner IDQuantityStatusUnit Of MeasureUpdated By IDUpdated DateUsage File IDUsage Start Date |

## Related objects

| Object | Description |
| --- | --- |
| Account | The customer account that generates the guided usage. |
| Bill To | The Bill-To contact of the account. |
| Default Payment Method | The default payment method used to make payments for the guided usage. |
| Entity | The entity that the data relates to.Part of the Multi-entity feature. |
| Parent Account | The parent account that owns the guided usage. |
| Product | The product associated with the guided usage. |
| Product Rate Plan | The product rate plan associated with the guided usage. |
| Product Rate Plan Charge | The product rate plan charge associated with the guided usage. |
| Rate Plan | The rate plan associated with the guided usage. |
| Rate Plan Charge | The rate plan charge associated with the guided usage. |
| Sold To | The Sold-To contact of the account. |
| Subscription | The subscription the guided usage is generated from. |
| Usage | The usage entry associated with the guided usage. |
