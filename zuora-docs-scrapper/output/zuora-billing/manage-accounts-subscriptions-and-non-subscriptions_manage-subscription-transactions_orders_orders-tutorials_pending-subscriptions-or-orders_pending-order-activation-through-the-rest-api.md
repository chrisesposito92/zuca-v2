---
title: "Pending order activation through the REST API"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-tutorials/pending-subscriptions-or-orders/pending-order-activation-through-the-rest-api"
product: "zuora-billing"
scraped_at: "2025-12-24T05:22:24.633Z"
---

# Pending order activation through the REST API

This topic explains how to activate a pending order using the `Update order action trigger dates` operation through the REST API.

Use the Update order action trigger dates operation to activate a pending order:

| Request | PUT/v1/orders/{orderNumber}/triggerDates |
| --- | --- |
| Request Body | { "subscriptions": [ { "orderActions": [ { "charges": [ { "chargeNumber": "C-0000001", "specificTriggerDate": "2016-09-01" } ], "sequence": 0, "triggerDates": [ { "name": "CustomerAcceptance", "triggerDate": "2016-09-01" } ] } ], "subscriptionNumber": "A-S00000009" } ] } |
