---
title: "Update products on subscriptions with future-dated updates"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/update-products-on-subscriptions-with-future-dated-updates"
product: "zuora-billing"
scraped_at: "2025-12-24T05:23:22.268Z"
---

# Update products on subscriptions with future-dated updates

This topic explains how to manage future-dated product updates on subscriptions, allowing multiple updates to be scheduled in advance.

You can create an Update Product order action even if there is already a future-dated Update Product order action on the subscription.

For example:

-   A customer subscribes to your Basic Service for one year starting on January 1, 2021.

-   In March, the customer wants to upgrade to your Premium Service on a future date, July 1, 2021. So you create a future-dated Update Product amendment by setting the effective date to July 1, 2021.

-   In April, the customer wants to upgrade to your Special Service starting on May 1, 2021. So you create an Update Product amendment by setting the update date to May 1, 2021.


The following table lists the services your customer has subscribed to:

| Service Name | Effective Date and End Date | Rate Plan Charge |
| --- | --- | --- |
| Basic Service | January 1, 2021 - April 30, 2021 | $10/seat/month * 10 seat |
| Special Service | May 1, 2021 - June 30, 2021 | $9/seat/month * 15 seat |
| Premium Service | July 1, 2021 - December 31, 2021 | $8/seat/month * 20 seat |

You can create an Update Product order action before a future-dated Update Product order action on the subscription in Zuora UI and REST API.
