---
title: "Fulfillment updation or cancelation using the REST API (Part 1)"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/manage-fulfillments/update-or-cancel-fulfillments/fulfillment-updation-or-cancelation-using-the-rest-api-part-1"
product: "zuora-billing"
scraped_at: "2025-12-24T05:39:02.129Z"
---

# Fulfillment updation or cancelation using the REST API (Part 1)

Use the Update a fulfillment operation to update a fulfillment.

The following API request updates a fulfillment from the `Executing` state to the `Booked` state, and updates the `quantity` and `trackingNumber` fields.

| Request | PUT {{host}}/apps/v1/fulfillments/{key} |
| --- | --- |
| Request Body | { "state": "Booked", "quantity": 2, "description": "return fulfillment", "trackingNumber": "T-0009874" } |
