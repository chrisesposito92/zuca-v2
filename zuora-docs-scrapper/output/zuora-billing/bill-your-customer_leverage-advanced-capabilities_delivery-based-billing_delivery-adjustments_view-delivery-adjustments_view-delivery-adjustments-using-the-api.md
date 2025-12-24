---
title: "View delivery adjustments using the API"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/delivery-based-billing/delivery-adjustments/view-delivery-adjustments/view-delivery-adjustments-using-the-api"
product: "zuora-billing"
scraped_at: "2025-12-24T08:39:45.633Z"
---

# View delivery adjustments using the API

Learn how to view delivery adjustments for a subscription using the API.

To view delivery adjustments for a subscription:

1.  Determine the value of the following variable:

    | Variable | Description |
    | --- | --- |
    | $subscription-number | The subscription number for which the delivery adjustments you want to view |

2.  Use the List all delivery adjustments of a subscription operation to view delivery adjustments for the specified subscription:

    | Request | GET /v1/adjustments/ |
    | --- | --- |
