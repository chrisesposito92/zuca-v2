---
title: "Sales Order transaction sync"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/sales-order-transaction-sync"
product: "zuora-platform"
scraped_at: "2025-12-24T05:50:47.792Z"
---

# Sales Order transaction sync

Integration that syncs NetSuite Sales Orders and automates the creation of Zuora Subscriptions

## Overview

This integration syncs NetSuite Sales Orders and automates the creation of Zuora Subscriptions. Only sales orders generated with Zuora Product Rate Plan Items will be synced. See [Using a Sales Order to Create a New Subscription](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/sales-order-transaction-sync/use-a-sales-order-to-create-a-new-subscription) for instructions.

## About the Sales Order transaction sync

-   The transaction sync will create one subscription per sales order.

-   On the sales order, you can select one or more items that correspond to Zuora product rate plans.

-   The Zuora product catalog is used to manage all subscription pricing.

-   Zuora products and rate plans and existing NetSuite items can coexist in the NetSuite item master.

-   Subscription management including invoice generation and subscription amendments and renewals will be performed in Zuora.

-   You can provide the Contract Effective, Service Activation, Customer Acceptance, and Term Start Date in NetSuite before the record is synced, or in Zuora after the subscription is created.

-   We do not currently support the ability to create amendments in NetSuite.


Net, refer to [Use a Sales Order to create a new subscription](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/sales-order-transaction-sync/use-a-sales-order-to-create-a-new-subscription).

## Why is not the Sales Order integration real time?

-   Typically, sales orders are integrated with other parts of NetSuite functionality (shipping/fulfillment) and external provisioning systems.
-   When a sales order is ready to be sent, it is a best practice for these processes to set the Send to Zuora flag automatically instead of requiring manual interaction to log in and click a button to sync the record.
-   A common customer profile is a high volume, high complexity subscription business. It is not practical to manually enter all sales orders with high-volume businesses.

Next, refer to [Sales Order transaction sync rules](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/sales-order-transaction-sync/sales-order-transaction-sync-rules).
