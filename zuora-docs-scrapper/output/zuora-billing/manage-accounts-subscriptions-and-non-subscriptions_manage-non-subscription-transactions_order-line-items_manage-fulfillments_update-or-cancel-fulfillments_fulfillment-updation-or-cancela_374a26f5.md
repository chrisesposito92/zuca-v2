---
title: "Fulfillment updation or cancelation using the REST API (Part 2)"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/manage-fulfillments/update-or-cancel-fulfillments/fulfillment-updation-or-cancelation-using-the-rest-api-part-2"
product: "zuora-billing"
scraped_at: "2025-12-24T05:39:05.167Z"
---

# Fulfillment updation or cancelation using the REST API (Part 2)

This topic explains how to update a fulfillment from the Executing state to the Cancelled state using the REST API.

Use the Update a fulfillment operation to cancel a fulfillment.

The following API request updates a fulfillment from the `Executing` state to the `Cancelled` state.

| Request | PUT {{host}}/apps/v1/fulfillments/{key} |
| --- | --- |
| Request Body | { "state": "Cancelled" }Use the Update a fulfillment operation to cancel a fulfillment.The following API request updates a fulfillment from the Executing state to the Cancelled state. |
