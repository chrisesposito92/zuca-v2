---
title: "View details of a fulfillment using the REST API"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/manage-fulfillments/details-view-of-fulfillments/view-details-of-a-fulfillment-using-the-rest-api"
product: "zuora-billing"
scraped_at: "2025-12-24T05:39:15.381Z"
---

# View details of a fulfillment using the REST API

This topic explains how to retrieve and view the details of a fulfillment using the REST API.

Use the Retrieve a fulfillment operation to get the details of a fulfillment.

To view a fulfillment:

1\. Determine the value of the following variable:

| Variable | Description |
| --- | --- |
| key | The id or fulfillment number of the fulfillment to retrieve.An example id looks like "4028828c82819b74018281a69d3f0d93", and a fulfillment number looks like "F-00000001". |

2\. Use the "Retrieve a fulfillment" operation to view the details of the fulfillment.

| Request | GET /v1/fulfillments/{key} |
| --- | --- |
