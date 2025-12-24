---
title: "Custom fields modification in orders"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-tutorials/custom-fields-modification-in-orders"
product: "zuora-billing"
scraped_at: "2025-12-24T05:21:38.384Z"
---

# Custom fields modification in orders

This topic explains how to modify custom fields in orders, including order actions, subscriptions, and rate plans using the UI and REST API.

The custom fields in Orders can be defined on the following types of objects:

-   Order

-   Order action

-   Subscription

-   Subscription rate plan

-   Subscription rate plan charge


To modify the custom fields on the Order object, use one of the following methods:

-   In the Orders UI, open the order details page by clicking the order number and then click the Edit Order icon ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/672dd867-f1c2-44dd-a787-410626201792?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjY3MmRkODY3LWYxYzItNDRkZC1hNzg3LTQxMDYyNjIwMTc5MiIsImV4cCI6MTc2NjY0MDA5NiwianRpIjoiMDc0NDg5YWU1Njk3NDBkNmFmMmU0N2FmMTk2NzkwMDgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.5lyMrpPCsoMbvs_vvZi2UUI1nC6YR0C60OSjcIM7FbA)at the top right. You cannot modify the custom fields if the order is in the Scheduled status. For more information, see Scheduled orders.

    ![view-order-detail-2020](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/cba235ee-47e5-44d7-9579-ec0759db23cb?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImNiYTIzNWVlLTQ3ZTUtNDRkNy05NTc5LWVjMDc1OWRiMjNjYiIsImV4cCI6MTc2NjY0MDA5NiwianRpIjoiOTkwOGIyZmViZDVkNGE4YmFhMGYzODM2NWM1YjM1YWIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.RWW6ozjfbpsnBuTga2cOMfN1UT87P7T9bUpiQnKokPg)

-   Use the Update order custom fields REST API operation.


To modify the custom fields on the Order Action object, use one of the following methods:

-   In the Orders UI, open the order details page and click the Order Action tab in the Associated subscriptions area. Click Edit at the bottom of the Additional Information section and then the custom fields become editable.

-   Use the Update order custom fields REST API operation.


In the Orders UI, you cannot modify the custom fields on the Subscription Rate Plan, Subscription Rate Plan Charge, and Subscription objects. To modify the custom fields on these objects, use the Subscriptions UI or the REST API.

-   To modify the custom fields for the subscription in the Subscriptions UI, click the edit button.

-   To modify the custom fields for the subscription rate plan in the Subscriptions UI, click the Edit link next to the rate plan name.

-   To modify the custom fields for the subscription rate plan charge in the Subscriptions UI, click the charge name and then click the Edit Custom Fields link.

-   Use the Update subscription custom fields of a specified subscription version REST API operation.


For more information about custom fields, see Objects that Support Custom Fields in Zuora and Manage Custom Fields .

The following diagram summarizes how to modify custom fields in Orders.

![OrderCF](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/730fc1e3-c945-4d78-b6cc-b3409202d68f?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjczMGZjMWUzLWM5NDUtNGQ3OC1iNmNjLWIzNDA5MjAyZDY4ZiIsImV4cCI6MTc2NjY0MDA5NiwianRpIjoiNjI3YmUwZGM5NDlmNGUwZjg3YWViMjk4MmE4NWIwMTQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.gKgQey1oTBOkuUGX3a7X5W4-sdbjWPwSSKO1B9-3m68)
