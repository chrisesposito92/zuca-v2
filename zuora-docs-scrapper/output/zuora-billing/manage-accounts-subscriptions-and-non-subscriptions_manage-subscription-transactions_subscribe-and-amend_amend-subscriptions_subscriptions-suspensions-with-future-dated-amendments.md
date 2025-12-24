---
title: "Subscriptions suspensions with future-dated amendments"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/subscribe-and-amend/amend-subscriptions/subscriptions-suspensions-with-future-dated-amendments"
product: "zuora-billing"
scraped_at: "2025-12-24T05:35:37.057Z"
---

# Subscriptions suspensions with future-dated amendments

This topic explains about managing subscription suspensions with future-dated amendments, including scenarios where amendments are delayed until the subscription resumes.

You can suspend a subscription even if the following future-dated amendments already exist on the subscription:

-   Add Product amendment

-   Update Product amendment


If the effective date of the future-dated amendment is earlier than the subscription resume date, the amendment will not take effect until the subscription is resumed. You can suspend a subscription before a future-dated amendment on the subscription from the Zuora UI, SOAP API, and REST API.

For example:

-   A customer subscribes to your Basic Service for one year starting on January 1.

-   In February, the customer wants to upgrade to your Premium Service on a future date, June 1. So you create a future-dated Update Product amendment by setting the amendment effective date to June 1.

-   In March, the customer wants to suspend the service for one month starting from April 1. So you suspend the subscription by setting the suspend date to April 1 and setting the resume effective date to May 1.


The following table lists the services your customer has subscribed to:

| Service Name | Effective Date and End Date |
| --- | --- |
| Basic Service | January 1 - March 31 and May 1 - May 31 |
| Premium Service | June 1 - December 31 |

But instead of suspending the subscription for one month, the customer wants to suspend the subscription for three months starting from April 1. The suspend date is on April 1 and the resume date is on July 1.

The following table lists the services your customer has subscribed to:

| Service Name | Effective Date and End Date |
| --- | --- |
| Basic Service | January 1 - March 31 |
| Premium Service | July 1 - December 31 |

During the subscription suspension period, the amendment should take effect on June 1. But the amendment does not take effect until the subscription is resumed (July 1).
