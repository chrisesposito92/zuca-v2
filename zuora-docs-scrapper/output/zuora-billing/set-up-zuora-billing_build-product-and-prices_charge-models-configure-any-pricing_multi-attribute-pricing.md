---
title: "Multi-attribute pricing"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/multi-attribute-pricing"
product: "zuora-billing"
scraped_at: "2025-12-24T04:59:08.211Z"
---

# Multi-attribute pricing

The Multi-Attribute Pricing charge model allows pricing based on multiple attributes for one-time, recurring, and usage-based charges, enabling custom object definitions and dynamic pricing adjustments.

The Multi-Attribute Pricing charge model for one-time and recurring charges is available to all customers.

For certain complex goods and services, pricing cannot be determined based on the aggregate quantity alone. The price instead might depend on multiple attributes, and these attributes may come from a variety of places, including the transaction itself. With the Multi-Attribute Pricing charge model, you can define custom objects with pricing data and then charge your end-users based on the additional data passed in. The Multi-Attribute Pricing charge model applies to one-time, recurring, and usage-based charge types.

The actual rating amount for each record is calculated based on a price formula that you specify in the Price Formula field when creating a product rate plan charge. For information about the allowed formula functions and associated examples, see Price formula reference .

Currently, for one-time and recurring charge types, the price formula for the Multi-Attribute Pricing charge model is evaluated only when the charge is added to a subscription (either when the subscription is created, or when the charge is added). Afterwards, to change the price, an Order or an Amendment has to be made.

For usage charge type, price impacting attributes may also be retrieved from the usage record. You can store values in usage custom fields, then you can charge the end-users based on the lookup into the custom objects using those values. For a step-by-step guide of configuring a Multi-Attribute Pricing usage charge, see Get started with the Multi-Attribute Pricing charge model for usage charges .

## Considerations

Keep the following things in mind when using the Multi-Attribute Pricing charge model:

-   Decimals need to be represented using the period notation, regardless of locale. For example, 1.99 will be accepted, but 1,99 will not.

-   The following features or integrations are not supported yet:

    -   For all charge types:

        -   Product sharing across multiple entities

        -   Marketplace applications (Specifically Salesforce CPQ Connector and Netsuite Connector )

        -   The Bundling feature in Zuora Quotes (It indicates that charges of the Multi-Attribute Pricing charge model in the Salesforce product catalog cannot be synchronized to Zuora with the Bundling feature)

        -   Automated price change (uplift) for renewed subscriptions

    -   For one-time and recurring charge types:

        -   Support for Amendments (Orders are fully supported)

    -   For usage charge type:

        -   On-demand usage rating

        -   Usage rating by group

        -   Previewing a subscription (only previewing a price formula is supported)

-   If you want to use custom object lookup values in the price formula for usage charges, be aware of the following limitations:

    -   No more than two custom object lookups are used within a price formula.

    -   No more than five fields are used in one object lookup.

    -   Nested object lookups are not supported.

    -   Each custom object used in a lookup must contain no more than 10,000 records.

    -   Each custom object used in a lookup must contain no more than 10 fields.

-   No reporting or Data Source support for the charge model name and configuration on the productRatePlanCharge or RatePlanCharge Object

-   No AQuA/ZOQL/SOAP Query support for the charge model name and configuration on the productRatePlanCharge or RatePlanCharge Object

-   No more than 200,000 usage records are allowed in a single rate plan charge for a given billing period.
