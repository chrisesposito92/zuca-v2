---
title: "Fulfillment updation or cancelation using the REST API (Part 1)"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/manage-fulfillments/update-or-cancel-fulfillments/fulfillment-updation-or-cancelation-using-the-rest-api-part-1"
product: "zuora-billing"
scraped_at: "2026-02-20T17:32:20.583Z"
---

# Fulfillment updation or cancelation using the REST API (Part 1)

This topic explains how to update or cancel a fulfillment using the REST API, including changing the state, quantity, and tracking number.

Use the Update a fulfillment operation to update a fulfillment.

The following API request updates a fulfillment from the `Executing` state to the `Booked` state, and updates the `quantity` and `trackingNumber` fields.

| Request | PUT {{host}}/apps/v1/fulfillments/{key} |
| --- | --- |
| Request Body | { "state": "Booked", "quantity": 2, "description": "return fulfillment", "trackingNumber": "T-0009874" } |
