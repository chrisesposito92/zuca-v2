---
title: "High water mark pricing"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/high-water-mark-pricing"
product: "zuora-billing"
scraped_at: "2025-12-24T04:59:02.980Z"
---

# High water mark pricing

The High Water Mark Pricing model charges users based on the highest daily usage during a billing period, supporting tiered or volume pricing, but not on-demand usage rating.

The High Water Mark Pricing charge model applies only to usage-based charges. For product rate plan charges with the High Water Mark Pricing charge models, end users are charged only for the highest aggregated quantity of usage consumed on any day during a billing period. The pricing applied to this quantity can be either tiered or volume. High Water Mark Pricing charge models currently do not support on-demand usage rating.

-   High Water Mark Volume Pricing

-   High Water Mark Tiered Pricing


When defining price tiers with any High Water Mark Pricing charge model, values in either the Tier From or Tier To column for any tier must be 0 or greater, because usage records with a negative quantity cannot be uploaded to Zuora. Additionally, the value in the Tier To column for the last tier must be left blank, so that a valid price exists for all usage quantities.

This charge model is very similar to the Volume and Tiered charge models, except that instead of considering the aggregate total of all consumption during a period, only the highest day is picked instead.

For example, assume that an online data storage business wants to charge their users based on the maximum amount of data they stored during the month. The following table lists the hypothetical consumption for a user:

| Day | Consumption (GB) |
| --- | --- |
| 1 | 0.56 |
| 2 | 0.98 |
| 3 | 1.12 |
| 4 | 1.09 |
| ... | <1.00 |
| 31 | 0.89 |

## Considerations

The High Water Mark Pricing charge model would look at the data stored each day (see the preceding table), and pick the day with the highest amount of data stored (in this case, day 3), and then use that day's consumption (1.12 GB) in calculating the charge for the entire period, using either a Volume or Tiered pricing structure.

Keep the following things in mind when using the High Water Mark Pricing charge model:

-   Decimals need to be represented using the period notation, regardless of locale. For example, 1.99 will be accepted, but 1,99 will not.

-   The following features or integrations are not supported yet:

    -   On-demand usage rating

    -   Usage rating by group

    -   Multi-entity - support for product sharing

    -   Marketplace applications, specifically Salesforce CPQ Connector , Netsuite Connector , and Developer Tools

    -   The Bundling feature in Zuora Quotes. It indicates that charges of the High Water Mark Pricing charge model in the Salesforce product catalog cannot be synchronized to Zuora with the Bundling feature.

    -   Automated price change (uplift) for renewed subscriptions

    -   Previewing a subscription

-   No reporting or Data Source support for the charge model name and configuration on the productRatePlanCharge or RatePlanCharge object

-   No AQuA/ZOQL/SOAP Query support for the charge model name and configuration on the productRatePlanCharge or RatePlanCharge object

-   No reporting, Data Source, or Data Query support on the productRatePlanChargeTier or RatePlanChargeTier object

-   No AQuA/ZOQL/SOAP Query support on the productRatePlanChargeTier or RatePlanChargeTier object

-   No more than 200,000 usage records in a single RatePlanCharge object for a given billing period
