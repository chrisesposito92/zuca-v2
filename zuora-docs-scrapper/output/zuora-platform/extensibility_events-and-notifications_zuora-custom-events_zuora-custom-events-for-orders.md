---
title: "Zuora custom events for Orders"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/events-and-notifications/zuora-custom-events/zuora-custom-events-for-orders"
product: "zuora-platform"
scraped_at: "2025-12-24T05:24:59.495Z"
---

# Zuora custom events for Orders

Describes Zuora custom events for the Orders feature.

If you want to enable the [Orders](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders) feature and these events, submit a request at [Zuora Global Support](https://support.zuora.com/). Once the feature is enabled, Zuora will provide you with these Zuora custom events and corresponding notifications out of the box.

If the [Orders Harmonization](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders-harmonization) feature is enabled in your tenant, the Orders events and notifications are available for any order action created through the Orders API.

| Name | Related Event | Description |
| --- | --- | --- |
| Order Processed | Order Processed | An order has been processed. |
| Add Product | Order Action Processed | A product is added to an order. |
| Cancel Subscription | Order Action Processed | A subscription is canceled. |
| Change Plan | Order Action Processed | A rate plan in a subscription is replaced by another rate plan. |
| Create Subscription | Order Action Processed | A subscription is created. |
| Owner Transfer | Order Action Processed | The invoice owner or subscription owner is changed. |
| Remove Product | Order Action Processed | A product is removed. |
| Renew Subscription | Order Action Processed | A product is renewed. |
| Resume Subscription | Order Action Processed | A subscription is resumed. |
| Suspend Subscription | Order Action Processed | A subscription is suspended. |
| Terms and Conditions | Order Action Processed | Changes happened to the terms and conditions of a subscription. |
| Update Product | Order Action Processed | A product is updated. |
