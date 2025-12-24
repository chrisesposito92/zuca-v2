---
title: "Canceling a Subscription"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/subscribe-and-amend/amend-subscriptions/subscriptions-cancelation/canceling-a-subscription"
product: "zuora-billing"
scraped_at: "2025-12-24T05:35:57.381Z"
---

# Canceling a Subscription

This article explains how to cancel active subscriptions while preserving historical data and understanding the constraints related to invoicing and amendments.

You can cancel active subscriptions (subscriptions with the `Active` status).

Why cancel a subscription instead of deleting it? Canceling a subscription preserves the historical data. Additionally, Zuora allows you to delete a subscription only if the subscription does not already have a posted invoice associated with it. Once an invoice is posted, it is considered locked and the related subscription is also locked and cannot be deleted.

You cannot delete a subscription if it has amendments, and if an invoicing has occurred. Even if the invoice was a draft and it was deleted, you cannot delete the subscription or amendments.

To cancel a subscription that is currently active:

The Contract Effective Date is the date the customer provided notice of cancellation. For example, a customer can notify you of cancellation today by setting the Contract Effective Date as today but have cancellation take effect at a future date by setting the Cancellation Date as the future date. In other words, the Contract Effective Date will not affect the cancellation effective date.

1.  Within an active subscription, click Cancel .
2.  Specify the Contract Effective Date .
3.  Specify the Booking Date . The Booking Date field is set for the amendment contract and is only available when the new UI experience is enabled .
4.  Select the cancellation effective date from the list: End of Current Term , Enter a Date , or End of Last Invoice Period .
5.  Fill in the Cancellation Date . This date can be today's date or a future date, as long as it is after the last invoiced period. The Cancellation Date will be pre-populated by Zuora Billing if the cancellation effective date is either End of Current Term or End of Last Invoice Period . When a subscription is cancelled, Zuora Billing will create a cancellation amendment to track the cancellation.
6.  If you accidentally cancel a subscription using the wrong cancellation policy or wrong cancel effective date, you can delete the cancellation amendment created by Zuora Billing for the cancellation.

To manage and access features from the self-service interface, see Manage Features.
