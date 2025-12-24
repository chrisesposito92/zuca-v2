---
title: "Considerations of suspend a subscription"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/subscribe-and-amend/amend-subscriptions/subscriptions-suspension/considerations-of-suspend-a-subscription"
product: "zuora-billing"
scraped_at: "2025-12-24T05:35:32.067Z"
---

# Considerations of suspend a subscription

This document outlines the limitations and conditions for suspending a subscription, including restrictions on amendments, trigger conditions, and key date notifications during the suspension period.

Currently, the limitations on suspending a subscription are as follows:

-   You cannot amend the subscription during the suspension period. You must resume the subscription before creating a subscription amendment. For example, to cancel a suspended subscription, you must resume the subscription first. You can resume and then cancel a subscription on the same day without being charged.
-   If a subscription has ever been suspended, you are not allowed to change the trigger condition of the charges in the subscription. You can change the trigger condition only if you delete all the Suspend Subscription amendments on the subscription.
-   When the subscription term ends during the suspension period, key dates notification for the charge end date are not supported.
-   You cannot suspend a subscription if the subscription contains prepayments .
-   For Zuora's Netsuite Connector, subscription suspension is currently not reported to NetSuite to pause revenue recognition for that period.

## Suspend Date

Suspend date is the date when subscription suspension takes effect. If the subscription term ends during the suspension period, the subscription ends.

When you set the suspend date, pay attention to the following restrictions:

-   The suspend date cannot be earlier than the subscription start date.
-   The suspend date must be earlier than the subscription term end date.
-   The suspend date cannot be earlier than the most recent resume date.
-   The suspend date cannot be earlier than the date when usage or discount charges have been processed.

You can specify the suspend date with one of the following options:

## Today

The subscription is suspended on today's date.

## End Of Last Invoice Period

The subscription is suspended at the end of the last invoice period. The suspend date defaults to a date that is one day after the last invoiced period. For example, if the last invoice period is from April 24, 2019 to May 23, 2019, the suspend date is on May 24, 2019. You can choose this option to avoid any undesired credits being issued back to the customer.

You may generate a negative invoice if the subscription suspends in the middle of a billing period that has been invoice. For example, you generate invoices from January 1 to December 31 and post them to customers. After posting the invoices, you need to suspend the subscription and set the suspend effective date to June 1. In such cases, you have to issue a credit back to your customers. Zuora reflects the changes in the new invoice. You do not need to unpost, cancel, and delete the first invoice. See Amend or Cancel a Subscription Before the Renewal Term and Amend or Cancel a Subscription Before the Last Invoice Date for more information.

## The Number of Periods from Today

The subscription is suspended after the specified period based on today's date. Specify the length of the period and select one of the following period types: Day(s), Week(s), Month(s), and Year(s).

## Specific Date

The subscription is suspended on a specific date.

## Suspending a Subscription from the Zuora APIs

You can suspend an active subscription from the Zuora REST API and SOAP API.

In the REST API, see Suspend Subscription . If you have enabled the Orders feature, see Create order .

In the SOAP API, see the Suspend a Subscription (Amendment) use case.
