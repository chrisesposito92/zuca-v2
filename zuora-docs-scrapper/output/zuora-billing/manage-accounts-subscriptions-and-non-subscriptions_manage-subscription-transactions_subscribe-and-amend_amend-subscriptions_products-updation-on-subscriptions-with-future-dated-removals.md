---
title: "Products updation on subscriptions with future-dated removals"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/subscribe-and-amend/amend-subscriptions/products-updation-on-subscriptions-with-future-dated-removals"
product: "zuora-billing"
scraped_at: "2025-12-24T05:34:47.350Z"
---

# Products updation on subscriptions with future-dated removals

This topic explains about managing product updates on subscriptions with future-dated removals, including creating amendments in Zuora UI, SOAP API, and REST API.

You can create an Update Product amendment even if there is already a future-dated Remove Product amendment on the subscription.

For example:

-   A customer subscribes to your Basic Service for one year starting on January 1, 2018.

-   In July, the customer wants to remove the service on a future date, January 1, 2019 to avoid the subscription is renewed automatically. So you create a future-dated Remove Product amendment by setting the effective date to January 1, 2019.

-   In August, the customer wants to upgrade to your Premium Service starting on October 1, 2018. So you create an Update Product amendment by setting update date on October 1, 2018.


The following table lists the services your customer has subscribed to:

| Service Name | Effective Date and End Date |
| --- | --- |
| Basic Service | January 1, 2018 - September 30, 2018 |
| Premium Service | October 1, 2018 - January 1, 2019 |

You can create an Update Product amendment before a future-dated Remove Product amendment on the subscription in Zuora UI, SOAP API, and REST API.
