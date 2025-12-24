---
title: "Query Billing Schedule objects through Data Query"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/query-billing-schedule-objects-through-data-query"
product: "zuora-billing"
scraped_at: "2025-12-24T18:37:48.379Z"
---

# Query Billing Schedule objects through Data Query

Covers information on how to query Billing Schedule objects, such as Invoice Schedule and Subscription, through Data Query when the Billing Schedule feature is enabled.

Note:

The Billing Schedule feature is generally available. You can enable this feature in Sandbox and Production environments with the self-serve interface. For more information, see Enable billing features by yourself.

With the Billing Schedule feature, you can perform queries on the objects related to this feature through Data Query , including the Invoice Schedule, Invoice Schedule Item, Orders, and Subscription objects. For information about the basic usage of Data Query, see Constructing SQL Queries in Data Query .

## Orders fields

If you have the Billing Schedule feature enabled, the `InvoiceScheduleId` field becomes available on the Orders object. You can access the Orders object and all its fields through Data Query and the Orders API operations.

## Subscription fields

If you have the Billing Schedule feature enabled, the `InvoiceScheduleId` field becomes available on the Subscription object. You can access the Subscription object and all its fields through Data Query and the Subscriptions API operations.
