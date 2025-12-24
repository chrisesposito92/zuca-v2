---
title: "Order line item updation using REST API (Part 2)"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/order-line-items-update/order-line-item-updation-using-rest-api-part-2"
product: "zuora-billing"
scraped_at: "2025-12-24T05:38:32.219Z"
---

# Order line item updation using REST API (Part 2)

This topic provides instructions for updating an order line item to enable the addition of fulfillments.

The following API request updates an existing order line item to allow adding fulfillments to an order line item.

| Request | PUT /v1/order-line-items/{itemId} |
| --- | --- |
| Request Body | { "itemName": "fulfillmentOLI", "billingRule": "TriggerAsFulfillmentOccurs" } |
