---
title: "Orders migration guidance"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders-harmonization/orders-migration-guidance"
product: "zuora-billing"
scraped_at: "2025-12-24T05:32:34.632Z"
---

# Orders migration guidance

This topic provides processes, prerequisites, and guidance for migrating to Orders, including API migration and historical data considerations.

This article applies only to Zuora's existing Subscribe and Amend customers who choose to perform either or both of the following:

-   Migrate your integrations to Orders

-   Migrate your historical Amendment data to Orders


This article describes the processes, prerequisites, and workarounds for enabling and upgrading to Orders. Also, it provides guidance on API migration if you want to migrate your Subscribe and Amend API integrations to use the Orders APIs. For information on Orders Limitations, see Known Limitations in Orders and Order Metrics .

## Migrating Historical Amendment Data

When the Orders feature is enabled in your Zuora tenant, you can choose to migrate your historical amendment data to Orders.

Based on historical data, about 500K to 1M subscriptions can be migrated per day. However, the actual migration time depends on the subscription size: the number of products and charges in a subscription, and so on. If you have a large number of subscriptions, you should plan this migration during a low activity time, if possible. Note that when performing the data migration for a Production Copy Environment (services environment), the migration can take significantly longer.

If you have more questions about migrating historical amendment data to Orders, see Data migration FAQs .

## Orders API Migration Guidance

This section provides guidance on migrating your Subscribe and Amend API integrations to use the Orders APIs.

Note:

With Orders Harmonization , you can continue to use Subscribe and Amend APIs and also leverage Orders APIs and Orders UI to create and manage your subscriptions. You do not need to go through migration to leverage Orders related functionality. However, if you still want to refactor all of your existing Subscribe and Amend APIs to Orders APIs, you can still do that.

## Subscribe and Amend SOAP API Migration

If you want to migrate your integrations using the SOAP calls listed in Subscribe and Amend APIs to Migrate to use the Orders API instead, see the following tutorials to learn how to migrate SOAP calls.

During the migration, you must specify account numbers instead of account IDs and specify subscription numbers instead of subscription IDs.

-   Add a Product to a Subscription

-   Create a Subscription

-   Change the Owner of a Subscription

-   Change the Terms and Conditions of a Subscription

-   Renew a Subscription and Upgrade a Product

-   Replace a Product in a Subscription

-   Update a Product in a Subscription

-   Cancel a Subscription

-   Remove a Product from a Subscription
