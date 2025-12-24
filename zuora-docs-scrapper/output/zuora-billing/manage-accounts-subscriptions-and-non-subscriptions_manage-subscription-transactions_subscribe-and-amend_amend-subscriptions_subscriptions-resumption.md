---
title: "Subscriptions resumption"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/subscribe-and-amend/amend-subscriptions/subscriptions-resumption"
product: "zuora-billing"
scraped_at: "2025-12-24T05:35:39.630Z"
---

# Subscriptions resumption

This topic explains how to resume a suspended subscription, configure notifications, and understand limitations and options for setting the resume date.

Resuming a subscription allows you to return a suspended subscription to active status. Optionally, you can choose to extend the subscription term by the length of time the suspension is in effect. A suspended one-time charge will not be resumed if the resume date is after the one-time charge's start date.

You can configure an email or callout to send the following notifications:

-   Key Dates | Subscription Resume Date: When a subscription resumption takes effect.

-   AmendmentProcessed | Resume Subscription: When a Resume Subscription amendment has been submitted and processed.


See Supported Event Types for more information.

## Considerations

Currently, the limitations on resuming a subscription are as follows:

-   You cannot create Add Product or Update Product amendment with an amendment effective date earlier than the most recent resume date.

-   For Zuora's Netsuite Connector, subscription resumption is currently not reported to NetSuite to pause revenue recognition for that period.


## Resume Date

Resume date is the date when subscription resumption takes effect.

When you set the resume date, pay attention to the following restrictions:

-   The resume date must be on or after the suspend date.

-   The resume date must be earlier than the subscription term end date.

-   The resume date cannot be earlier than the date when usage or discount charges have been processed.


You can specify the resume date with one of the following options:

## Today

The subscription is resumed on today's date.

## The Number of Periods from the Date Suspended

The subscription is resumed after the specified period based on the suspension effective date. Specify the length of the period and select one of the following period types: Day(s), Week(s), Month(s), and Year(s).

## The Number of Periods from Today

The subscription is resumed after the specified period based on today's date. Specify the length of the period and select one of the following period types: Day(s), Week(s), Month(s), and Year(s).

## Specific Date

The subscription is resumed on a specific date.

## SuspendDate

Note:

This option is only available when the Orders feature is enabled.

The subscription is resumed on the same day when it is suspended.

## Resuming a Subscription from the Zuora APIs

You can resume a suspended subscription from the Zuora REST API and SOAP API.

In the REST API, see Resume Subscription . If you have enabled the Orders feature, see Create order .

In the SOAP API, see the Resume a Subscription (Amendment) use case.
