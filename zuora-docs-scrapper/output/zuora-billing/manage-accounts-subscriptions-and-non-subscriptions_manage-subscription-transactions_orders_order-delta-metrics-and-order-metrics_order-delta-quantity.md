---
title: "Order Delta Quantity"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-delta-metrics-and-order-metrics/order-delta-quantity"
product: "zuora-billing"
scraped_at: "2025-12-24T05:26:40.814Z"
---

# Order Delta Quantity

The order delta quantity is the difference between the total product quantity after the order and the quantity before the order for various order actions, including Renewal, Add Product, Remove Product, and Update Product.

This topic lists examples of calculating Order Delta Quantity metrics for different order actions.

In the following example, the order delta quantity for charge segment PRC-2 between 2025-01-01 and 2026-01-01 for the Renewal order action is 20.

![order delta quantity-renew subscription](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/752c4032-e404-4385-b09a-6e83b3d8fb48?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijc1MmM0MDMyLWU0MDQtNDM4NS1iMDlhLTZlODNiM2Q4ZmI0OCIsImV4cCI6MTc2NjY0MDM5OSwianRpIjoiNDdiZGJmZGRkMjMzNDA1YjlkOTE5ZGNmOGZlMGRkMDgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.6Fd-KSFyKFEj79WKvcOZe-yM-nauCfni4Mk13-NJ7gM)

In the following example, the order delta quantity for charge segment PRC 2-1 between 2025-07-01 and 2026-01-01 for the Add Product order action is 15.

![order delta quantity-add product](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/ade5938b-f4e4-42f0-aedc-c6049a74cf36?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImFkZTU5MzhiLWY0ZTQtNDJmMC1hZWRjLWM2MDQ5YTc0Y2YzNiIsImV4cCI6MTc2NjY0MDM5OSwianRpIjoiYTAzMGM4NWVhZmZmNGZhZTljMTI0NTJhNTJjYzMxZjAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.3gDVwE48QbzCufMwcH4Iv71L6WEuuB0wDXUpmqcv8M8)

In the following example, the order delta quantity for charge segment PRC-2 between 2025-07-01 and 2026-01-01 for the Remove Product order action is -20.

![order delta quantity-remove product](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/0847edd5-d985-47f1-b53e-621d78742c53?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjA4NDdlZGQ1LWQ5ODUtNDdmMS1iNTNlLTYyMWQ3ODc0MmM1MyIsImV4cCI6MTc2NjY0MDM5OSwianRpIjoiNjA3NDVkZmJjYTM4NDczMDkyMDVjYTVhYjJjNzVhNzIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.zTm5IJVjsujznws9tHbG2n7Y9rjJmwmcg5_Qr7yVktQ)

In the following example, for the Update Product order action, the order delta quantity for charge segment PRC-2 between 2025–07-01 and 2026-01-01 is -20 due to the shrinking of the rate plan, and the order delta quantity for charge segment PRC-3 between 2025–07-01 and 2026-01-01 is 15 due to the updated quantity.

![order delta quantity-decrease quantity](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/65405873-3033-4dd4-b6f6-75dade24d9bc?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjY1NDA1ODczLTMwMzMtNGRkNC1iNmY2LTc1ZGFkZTI0ZDliYyIsImV4cCI6MTc2NjY0MDM5OSwianRpIjoiNjkxMGI2YjZhOTEyNDkzYzgyMzFhODRhNzU4ZjcwMWEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.7vmPrLp87cuQRv1BTUvIbDHcLLs1S_LKnLD3UFRE1sw)

The Order Delta Quantity object can be accessed through Data Query with the following fields.

| Field Name | Description |
| --- | --- |
| Id | The internal ID of the order delta metrics. |
| OrderNumber | The Order number for the associated Order. |
| StartDate | The Start Date of the metric. This is also the start date of the period where there is an impact on the metrics caused by the order. |
| EndDate | The End Date of the metric. This is also the end date of the period where there is an impact on the metrics caused by the order. The End Date is exclusive. |
| Quantity | The delta quantity for each charge segment for each order action. |
| ChargeNumber | The charge number of rate plan charge object that the metrics is associated with. |
| RatePlanChargeId | The id of the rate plan charge object that the metrics is associated with. |
| ProductRatePlanChargeId | The id of the product plan charge object of the rate plan charge object. |
| OrderActionId | The Id of the associated Order Action that creates the metric |
| OrderLineItemId | The ID of the order line item. |
| CreatedDate | The date time when the metric is created. |
| UpdatedDate | The date time when the metric is last updated. |
| deleted | Indicates whether the metric is deleted. |
