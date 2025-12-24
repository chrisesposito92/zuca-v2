---
title: "Subscription statuses"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/subscriptions-view-through-the-zuora-ui/subscription-information/subscription-statuses"
product: "zuora-billing"
scraped_at: "2025-12-24T05:18:33.973Z"
---

# Subscription statuses

This article helps how to manage and take action on subscriptions by understanding different subscription statuses, such as Draft, Pending Activation, Active, and more.

The subscription view makes it easy for you to take action on a specific group of subscriptions by clicking the applicable status link, which will open a page that contains only the subscription with that status. For example, click the Expired Subscriptions link to view all expired subscriptions in order to extend the subscription term, renew the subscription, or cancel the subscription.

You can sort by the following subscription statuses.

| Status | Description |
| --- | --- |
| Draft | Subscriptions in draft status are in-process and have not been activated. |
| Pending Activation | Subscriptions pending activation require an activation date be set in order to activate the subscription. |
| Pending Acceptance | Subscriptions pending acceptance require a customer acceptance date be set in order to activate the subscription. |
| Active | Active subscriptions have all the required subscription dates set and will be billed when the triggering conditions are met. See Active Status Subtypes in the following section for more information. |
| Cancelled | Subscriptions that are cancelled may or may not continue to be billed based on the cancellation date. For example, if today is January 15th and a customer notifies you of his desire to cancel his service at the end of February, you can immediately set the subscription to cancelled status in Zuora Billing with a cancellation date of February 28th. The customer will continue to be billed for this subscription through February 28th. |
| Suspended | Subscriptions are put on hold until you bring them back to active status. |
