---
title: "Use cases of mapping order actions or amendments"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/use-cases-of-mapping-order-actions-or-amendments"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:38:05.027Z"
---

# Use cases of mapping order actions or amendments

The common use cases of how order actions or amendments in Zuora Billing are mapped to sales order actions in Zuora Revenue

Billing - Revenue Integration includes support for various use cases. The following table demonstrates how order actions or amendments are mapped to Zuora Revenue sales order actions:

| Zuora Order Action/amendment | Termed subscription: Segment/charge behavior | Evergreen subscription: Segment/charge behavior | Zuora Revenue SO action |
| --- | --- | --- | --- |
| New Subscription | New Charge IDNew Segment | New Charge IDNew Segment with no End Date | New SO Line |
| New Product | New Charge IDNew Segment | New Charge IDNew Segment with no End Date | New SO Line |
| Amendment/Order Action - Price Change | Original Charge IDExisting Charge Segment with an End Date | Original Charge IDExisting Charge Segment with an End Date | Update Existing SO Line |
| New Charge Segment with an End DateNew Charge Version | New Charge Segment with no End DateNew Charge Version | New SO Line |  |
| Amendment/Order Action - Quantity Change | Original Charge IDExisting Charge Segment with an End Date | Original Charge IDExisting Charge Segment with an End Date | Update Existing SO Line |
| New Charge Segment with an End DateNew Charge Version | New Charge Segment with no End DateNew Charge Version | New SO Line |  |
| Renewal | Original Charge IDNew Charge Segment with an End Date | Original Charge IDNew Charge Segment with no End Date | New SO Line |
| Remove Product | Original Charge IDBring forward Segment End Date | Original Charge IDCreate Segment End Date | Update SO Line |
| Cancel | Original Charge IDBring forward Segment End Date | Original Charge IDCreate Segment End Date | Update SO Line |
| Terms and Conditions | Original Charge IDExtend or bring forward Segment End Date | Original Charge IDExtend or bring forward Segment End Date | Update SO Line |
| Suspend | Original Charge IDBring forward Segment End Date | Original Charge IDBring forward Segment End Date | Update SO Line |
| Resume | Original Charge IDNew Segment | Original Charge IDNew Segment | New SO Line |
| Owner Transfer | None | None | None |

When creating a new subscription or amending an existing subscription in Zuora Billing, the number of the created SO lines depends on the discount type of rate plan charges:

-   For regular rate plan charges without discount, including one-time charges and recurring charges, each charge is mapped to one sales order (SO) line in Zuora Revenue.
-   For fixed amount discount charges, a charge is treated in Zuora Revenue as a new and stand-alone SO line that will not be allocated, regardless of how it is applied. This is done through extracting the Fixed Amount Discount amount from the Rate Plan Charge Tier data source from Zuora Billing.
-   For percentage discount charges, a charge can be mapped to multiple SO lines in Zuora Revenue depending on the number of transactions it is applied to. It ensures Zuora Revenue can correctly allocate the revenue against the charges that have been discounted.

See [Charge Models](/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing) for more information on rate plan charge models.

For more information on use cases of mapping order actions or amendments, refer to these articles:

-   [Segment changes with Billing - Revenue Integration enabled](/zuora-revenue/advanced-revenue-operations/use-cases-of-mapping-order-actions-or-amendments/segment-changes-with-billing---revenue-integration-enabled)

-   [Examples](/zuora-revenue/advanced-revenue-operations/use-cases-of-mapping-order-actions-or-amendments/examples)
