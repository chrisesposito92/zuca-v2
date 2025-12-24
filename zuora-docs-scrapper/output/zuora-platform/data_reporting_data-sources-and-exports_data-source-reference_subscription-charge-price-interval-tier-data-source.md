---
title: "Subscription Charge Price Interval Tier data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/subscription-charge-price-interval-tier-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:48:40.504Z"
---

# Subscription Charge Price Interval Tier data source

Data source to export Subscription Charge Price Interval Tier data

## Overview

Use this data source to export Subscription Charge Price Interval Tier data. The Subscription Charge Price Interval Tier object is a child of the [Subscription Charge Price Interval](/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/subscription-charge-price-interval-data-source) object.

## Objects available in the data source

The following sections list the objects available in the data source.

## Base object

| Object | Description |
| --- | --- |
| Subscription Charge Price Interval Tier | Fields on a subscription charge price interval tier. It includes the following fields:Created By IDCreated DateCurrencyEnding Unit - - A decimal value that indicates the end of the tier range.IDIs Overage Price - Indicates whether the price is an overage price, which is the price when usage surpasses the last defined tier.Price - The price of the tier if the price format is flat fee, or the price of each unit in the tier if the price format is per unit.Price Format - The price format. The value can be either flat fee or per unit.Starting Unit - A decimal value that indicates the start of the tier range.Tier - A unique number that identifies the tier that the price applies to.Updated By IDUpdated Date |

## Related objects

| Object | Description |
| --- | --- |
| Amendment | The amendment that is tied to the rate plan, if applicable. |
| Entity | The entity that the data relates to. Part of the Multi-entity feature. Contains the following fields:Address 1Address 2CityCountryCreated By IDCreated DateDisplay NameEmailIDNamePostal CodeStateUpdated By IDUpdated Date |
| Product | The product information. |
| Product Rate Plan | The pricing plan information from the product catalog. |
| Product Rate Plan Charge | The charge information from the product catalog. |
| Rate Plan | The rate plan or pricing plan information about the subscription. |
| Rate Plan Charge | The charge information about the subscription. |
| Subscription | Information about the subscription. |
| Subscription Charge Price Interval | Information about subscription charge price intervals. |
| Subscription Offer | Information about the offer added to the subscription. |
