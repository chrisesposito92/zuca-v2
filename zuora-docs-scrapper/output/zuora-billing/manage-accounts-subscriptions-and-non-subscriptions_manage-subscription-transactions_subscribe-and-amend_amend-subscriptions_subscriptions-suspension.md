---
title: "Subscriptions suspension"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/subscribe-and-amend/amend-subscriptions/subscriptions-suspension"
product: "zuora-billing"
scraped_at: "2025-12-24T05:35:29.676Z"
---

# Subscriptions suspension

This topic explains how to temporarily suspend customer subscriptions due to payment issues or service pauses, and understand the implications on billing and invoicing.

Suspending a subscription allows you to pause an active subscription temporarily and bring it back to active status later. You may want to suspend your customer subscriptions due to customer payment issues or your customers want to pause their services for a certain period.

After you suspended a subscription, the status of the subscription changes to Suspended. All the charges within the subscription are also suspended. The suspended subscription is only included in the Contracted MRR calculation. Zuora does not charge the suspended subscription and does not generate invoices for the suspended subscription. For example:

1.  A customer subscribes to your product for one year starting on January 1.
2.  You suspend the subscription from April 1 to June 1 for two months.
3.  You generate an invoice for the subscription for the whole year.

In the invoice, no charges are generated for the suspension period from April 1 to June 1.

The partial period fees are prorated to align your charges to a certain bill cycle day. For example, a customer subscribes to your product for one year starts from Jan 1. The bill cycle day of the account is set as 10th of the month. On March 1, the customer requests to suspend the subscription on May 15th and resume the subscription on June 13th. If you set the Prorate recurring charges for partial period? billing rule to Yes , a proration amount is calculated for partial billing periods: 05/10/2017 to 05/14/2017 and 06/13/2017 to 06/30/2017. For more information on how to calculate the proration amount, see Proration .

You can cancel a suspended subscription by deleting the Suspend Subscription amendment. If you generate an invoice, which covers the suspension period, you are not allowed to delete the Suspend Subscription amendment. In the above example, the invoice covers the suspension period (April 1 to June 1). So, you cannot delete the suspend amendment. If the invoice is not posted, you can cancel the invoice and then delete the amendment. If the invoice is posted, you cannot delete the amendment. The solutions are as follows:

-   You can resume the subscription, but the resume date must be after the suspension date.
-   You can create a new subscription, which interrupts billing and risks a negative invoice, potentially transferring to a credit balance or causing a refund.

You can configure an email or callout to send the following notifications:

-   Key Dates | Subscription Suspend Date : When a subscription suspension takes effect.

-   AmendmentProcessed | Suspend Subscription : When a Suspend Subscription amendment has been submitted and processed.


See Supported Event Types for more information.

Note that whenever there is a subscription status change, it will be reflected in the Revenue.
