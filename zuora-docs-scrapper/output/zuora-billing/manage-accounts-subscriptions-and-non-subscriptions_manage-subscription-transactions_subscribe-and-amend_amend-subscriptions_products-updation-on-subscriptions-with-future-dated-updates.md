---
title: "Products updation on subscriptions with future-dated updates"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/subscribe-and-amend/amend-subscriptions/products-updation-on-subscriptions-with-future-dated-updates"
product: "zuora-billing"
scraped_at: "2025-12-24T05:34:55.324Z"
---

# Products updation on subscriptions with future-dated updates

This topic explains how to manage product updates on subscriptions with future-dated amendments, including creating multiple amendments in Zuora UI, SOAP API, and REST API.

You can create an Update Product amendment even if there is already a future-dated Update Product amendment on the subscription.

For example:

-   A customer subscribes to your Basic Service for one year starting on January 1, 2018.

-   In March, the customer wants to upgrade to your Premium Service on a future date, July 1, 2018. So you create a future-dated Update Product amendment by setting the effective date to July 1, 2018.

-   In April, the customer wants to upgrade to your Special Service starting on May 1, 2018. So you create an Update Product amendment by setting the update date to May 1, 2018.


The following table lists the services your customer has subscribed to:

| Service Name | Effective Date and End Date |
| --- | --- |
| Basic Service | January 1, 2018 - April 30, 2018 |
| Special Service | May 1, 2018 - June 30, 2018 |
| Premium Service | July 1, 2018 - December 31, 2018 |

You can create an Update Product amendment before a future-dated Update Product amendment on the subscription in Zuora UI, SOAP API, and REST API.
