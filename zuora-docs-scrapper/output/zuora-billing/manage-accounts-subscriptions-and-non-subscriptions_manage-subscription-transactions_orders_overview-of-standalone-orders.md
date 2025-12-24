---
title: "Overview of Standalone Orders"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/overview-of-standalone-orders"
product: "zuora-billing"
scraped_at: "2025-12-24T05:29:08.999Z"
---

# Overview of Standalone Orders

The Standalone Orders feature allows for the creation and management of subscriptions and one-time orders using external product catalogs, facilitating integration with upstream systems and reducing catalog maintenance complexity.

This topic introduces the Standalone Orders feature. With the Standalone Orders feature, you can create and manage subscriptions and one-time orders using external product catalogs. The Standalone Orders feature enables rapid integration and order capture from upstream systems, such as configure, price, quote (CPQ) software, and deal desk tools, as well as reduces the complexity and cost of maintaining a copy of the product catalog in Zuora.

## Availability

The Standalone Order feature is available through the Orders API operations. Currently, the Orders UI does not support standalone orders.

## Use cases

See the following for common use cases for standalone orders:

-   Create a subscription using a standalone order

-   Preview billing for a standalone order

-   View details of a standalone order


## Considerations

The Standalone Orders feature has the following limitations:

-   The Standalone Orders feature is currently available only through API. Zuora will introduce a UI in future releases.

-   Integration with Zuora Revenue is currently not supported. Zuora will introduce it in future releases.

-   If you are still using the Order ELP metric, a deprecated Order metric, you cannot make the Preview an order call and preview billing for a standalone order.

-   The Standalone Orders feature currently supports the following charge models only:

    -   Flat Fee, Per Unit, Volume, Tiered Pricing, Discount-Fixed Amount, and Discount-Percentage charge models for the recurring charge type

    -   Flat Fee, Per Unit, Volume, and Tiered Pricing charge models for the one-time charge type

    -   Flat Fee, Per Unit, and Tiered Pricing charge models for the usage charge type

-   When creating a discount charge using a standalone order, the discount must be applied to a valid product rate plan charge that has already existed. Applying a discount to a charge created in the same standalone order is currently not supported.
