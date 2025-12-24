---
title: "Usage data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/usage-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:48:49.915Z"
---

# Usage data source

Data source to export usage data that is used to determine usage-based charges

## Overview

Use this data source to export usage data that is used to determine usage-based charges. Usage data can be tied to associated [Accounts](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/account), [Subscriptions](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/subscription) and Charges, and [Product Catalog](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/product) data.

## Objects available in the data source

The following sections list the objects available in the data source.

## Base object

| Object | Description |
| --- | --- |
| Usage | Fields on a usage. It includes the following fields. See the field description in the Usage object reference.Account NumberCreated By IDCreated DateDescriptionEnd DateIDImport IDQuantityRBS StatusSource TypeStart DateSubmission DateUnit of MeasureUpdated By IDUpdated DateThe following field is only available if you have the Prepaid with Drawdown feature enabled.Unique Key |

## Related objects

| Object | Description |
| --- | --- |
| Account | The Customer Account and corresponding details to which the usage belongs. |
| Amendment | The amendment that is tied to the usage, if applicable. |
| Bill To Contact | The contact of the entity or person who you bill for your product or service. |
| Entity | The entity that the data relates to. Part of the Multi-entity feature. Contains the following fields:Address 1Address 2CityCountryCreated By IDCreated DateDisplay NameEmailIDNamePostal CodeStateUpdated By IDUpdated Date |
| Sold To Contact | The contact of the entity/person to whom you sold your product or service. |
| Default Payment Method | Details and data of the default payment method of the customer account. |
| Product | The product related to the Usage. |
| Product Rate Plan | The pricing plan (in the Product Catalog) related to the Usage. |
| Product Rate Plan Charge | The charge (in the Product Catalog) that is related to the Usage. |
| Rate Plan | The pricing plan (for the subscription) that is related to the Usage. |
| Rate Plan Charge | The charge (for the subscription) that is related to the Usage. |
| Subscription | The subscription the usage belongs to. |
| Usage | This is the base object, which has information around the Usage record. |
