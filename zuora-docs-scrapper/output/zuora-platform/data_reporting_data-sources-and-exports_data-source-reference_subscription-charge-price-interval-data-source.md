---
title: "Subscription Charge Price Interval data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/subscription-charge-price-interval-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:48:37.970Z"
---

# Subscription Charge Price Interval data source

Data source to export the data about subscription charge price intervals

## Overview

Use this data source to export the data about subscription charge price intervals, such as the interval duration and price.

## Objects available in the data source

The following sections list the objects available in the data source.

## Base object

| Object | Description |
| --- | --- |
| Subscription Charge Price Interval | Fields on a subscription charge price interval. It includes the following fields:Created By IDCreated DateDurationIDPriceSequence - A system-generated number that indicates the sequence in which each interval price is billed.TypeUpdated By IDUpdated Date |

## Related objects

| Object | Description |
| --- | --- |
| Account | The customer account information. |
| Amendment | The amendment that is tied to the rate plan, if applicable. |
| Bill To | The bill-to contact information about the account. |
| Default Payment Method | The default payment method to be used for making payments. Required to be ACH, credit card or PayPal for customers paying electronically. |
| Entity | The entity that the data relates to. Part of the Multi-entity feature. Contains the following fields:Address 1Address 2CityCountryCreated By IDCreated DateDisplay NameEmailIDNamePostal CodeStateUpdated By IDUpdated Date |
| Parent Account | The parent account information. |
| Product | The product information. |
| Product Rate Plan | The pricing plan information from the product catalog. |
| Product Rate Plan Charge | The charge information from the product catalog. |
| Rate Plan | The rate plan or pricing plan information about the subscription. |
| Rate Plan Charge | The charge information about the subscription. |
| Sold To | The sold-to contact information about the account. |
| Subscription | Information about the subscription. |
| Subscription Offer | Information about the offer added to the subscription. |
