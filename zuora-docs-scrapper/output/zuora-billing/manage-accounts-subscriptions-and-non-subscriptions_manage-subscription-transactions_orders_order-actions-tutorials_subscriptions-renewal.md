---
title: "Subscriptions renewal"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/subscriptions-renewal"
product: "zuora-billing"
scraped_at: "2025-12-24T05:24:27.621Z"
---

# Subscriptions renewal

This topic explains how to extend a subscription term by creating a new term and setting key renewal dates.

When you renew a subscription, the current subscription term is extended by creating a new term. If any charge in your subscription has the billing period set as `SubscriptionTerm`, a new charge segment is generated for the new term. For more information, see Define Billing Periods and Segmented rate plan charges (charge segments) .

This tutorial demonstrates how to renew a subscription.

In this tutorial, you will set the following dates to today's date:

-   The date when the order is signed

-   The contract effective date of the renewal

-   The service activation date of the renewal

-   The customer acceptance date of the renewal


## SOAP Migration Guidance

When the Orders feature is enabled in your Zuora tenant, the SOAP API is not available. You must migrate any SOAP integrations to use the REST API instead. See Migrating From the SOAP API for the SOAP equivalent of this tutorial.
