---
title: "Managing Negotiable Price table for usage charges"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/dynamic-pricing-support/managing-negotiable-price-table-for-usage-charges"
product: "zuora-billing"
scraped_at: "2025-12-24T05:31:59.003Z"
---

# Managing Negotiable Price table for usage charges

This topic explains how to manage dynamic pricing for usage charges by utilizing negotiated price tables and Zuora Mediation.

## Negotiated Price table

When a usage charge has enabled dynamic pricing and has some pricing attributes tied to fields in the usage record, the price will be determined when processing the usage records, not at the time of subscription. For such pricing attributes, map it to a field of the Usage object, subscribe to it via Orders API or UI and use Zuora Mediation to load the usage data.

When processing the records of such usage charges, Zuora Mediation retrieves the relevant pricing attribute values from each record and uses them to get the correct price dynamically.

In addition, you can also customize such usage charge's standard price table with a negotiated price table by updating rate card entries when subscribing to the rate plans. The negotiated price table is created via the `negotiatedPriceTable` tag in the following order actions through REST API:

-   addProduct
-   createSubscription
-   changePlan

Note:

-   To enable the Negotiated Price Table feature, submit a request at [Zuora Global Support](https://support.zuora.com/auth/v3/signin?brand_id=825826&locale=en-us&return_to=https%3A%2F%2Fsupport.zuora.com%2Fhc%2Fen-us&role=end_user).

-   Zuora only allows the user to create a Negotiated Price Table for such Usage charge that has defined pricing attributes mapped to Usage object fields.

-   The data in the `negotiatedPriceTable` tag within the Order API payload override the existing rate card entries in the standard price table. During pricing evaluation the unchanged rate card entries in the standard price table are still effective.

-   For the reserved pricing attribute, `CustomerReference`, its value is set by Zuora automatically when creating the negotiated price table. Do not include it in the `negotiatedPriceTable` tag and `pricingAttributes` tag in the payload.

-   The `effectiveDate` in the rate cards indicates when the new list price will be effective. We recommend the user to include effectiveDate in the payload. When `effectiveDate` does not present the order action's effective date will be used.
