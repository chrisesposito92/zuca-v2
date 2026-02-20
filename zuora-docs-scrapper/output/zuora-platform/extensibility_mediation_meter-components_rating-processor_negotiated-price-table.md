---
title: "Negotiated Price Table"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meter-components/rating-processor/negotiated-price-table"
product: "zuora-platform"
scraped_at: "2026-02-20T17:49:44.745Z"
---

# Negotiated Price Table

A Negotiated Price Table allows for custom pricing agreements, overriding standard catalog prices for specific customers based on their usage or charges.

A Negotiated Price Table allows you to define special or custom pricing agreements for specific customers or accounts, outside of your standard product catalog pricing. Instead of applying the default list prices, you can configure a negotiated table that overrides those prices when the customer’s usage or charges are rated.

Example

Suppose your catalog price is $0.10 per API call. For a strategic enterprise customer, you negotiate $0.06 per API call for up to 1 million calls. A Negotiated Price Table captures this custom rate. During rating, Zuora checks the table, applies the $0.06 price, and calculates the charge accordingly instead of using the default catalog price.

## Configure dynamic pricing using a negotiated price table

Mediation processes usage charge records by retrieving attribute values from multiple sources and enriching them in near real time. It pulls pricing attributes directly from usage records, external attributes from `RatePlanCharge.pricingAttributes`, and non-usage attributes from Zuora objects through the enrichment service.

1.  Set up the ingestion of usage events through Mediation.

2.  Add and configure an Enrichment Processor to enrich the Rate Plan Original Charge Id (not `RatePlanCharge.OriginalId`). The `OriginalChargeId` should be mapped to the `CustomerReference` field.

3.  Enrich the event `PricingAttributes` with `RatePlanCharge.pricingAttributes` and map those values to a field in the Enrichment processor.

4.  Add and configure an Advanced Transformer processor component to extract the necessary pricing attributes and append them to events. Pricing attributes can be delivered as a JSON object. Example: Consider the following pricing attribute values:

    "pricingAttributes": { "region": "US", "subscriptionType": "premium", "discountCode": "FALL25", "effectiveDate: "2020-11-11T23:00:00", "usageTier": "tier-2" },

    The following pricing attributes values must be attached to events:

    -   usageTier

    -   subscriptionType

    -   region

    -   discountCode

5.  Add and configure an Advanced Transformer processor component to the meter to extract these values and attach them to the event. The following sample Javascript code is applicable to the example defined above and can be used in the Advanced Transformer to extract pricing attribute values:exports.step = function (event) { // Parse pricingAttributes (handle string or object) let pa = event.pricingAttributes; if (typeof pa === "string") { try { pa = JSON.parse(pa); } catch { pa = {}; } } // Pick only the fields we care about const newEvent = { ...event, region: pa.region, subscriptionType: pa.subscriptionType, discountCode: pa.discountCode, usageTier: pa.usageTier }; return \[newEvent\]; // Return enriched event };
6.  Add and configure a Rating processor with subscription number, charge number, quantity, price quantity (for tiered and volume charge model), and the event date (if applicable). Configure the Rating processor to calculate usage amounts using the price received from the product catalog that includes the negotiated price table structure.


After all the details are retrieved, Mediation uses them to look up pricing against the customized pricing table in the Product Catalog. It performs record level rating based on the resolved price and usage quantity.

## Troubleshooting

-   Missing attributes: If a required usage attribute is not provided in the usage record or enriched in the process, Mediation cannot accurately identify the rate to price the events. For example, the region attribute is expected for pricing but is missing in the event payload.

-   Catalog lookup failures: If no matching row is found in the Product Catalog pricing table for the provided attributes, the pricing cannot be resolved. For example, the event has “Region = APAC” but the Product Catalog pricing table only has entries for “US” and “EU.” In such a case, the pricing cannot be resolved.

-   CustomerReference is null: The catalog will generate an error if the subscription object lacks a Rate Plan Charge ID, or if the CustomerReference is null due to technical issues. It is important to note that Negotiated Price table-based pricing is not compatible with dynamic usage charges, because Dynamic Usage charge is created after the usage events are processed by Mediation, the rate plan charge ID doesn't exist during enrichment.
