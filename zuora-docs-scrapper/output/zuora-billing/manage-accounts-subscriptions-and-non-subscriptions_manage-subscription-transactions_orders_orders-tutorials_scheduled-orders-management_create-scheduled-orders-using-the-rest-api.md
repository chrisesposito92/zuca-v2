---
title: "Create scheduled orders using the REST API"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-tutorials/scheduled-orders-management/create-scheduled-orders-using-the-rest-api"
product: "zuora-billing"
scraped_at: "2025-12-24T05:22:40.995Z"
---

# Create scheduled orders using the REST API

This topic explains how to create and manage scheduled orders using the REST API by setting specific fields and utilizing various operations.

You can use the Create an order operation to create an order and save the order as a scheduled order.

1.  Set the following fields dedicated to scheduled orders:

    | Field | Description |
    | --- | --- |
    | status | You must set the field to Scheduled to save the order as a scheduled order. |
    | scheduledDatePolicy | Date policy of the scheduled order. |
    | scheduledDate | The scheduled date when the order is executed and completed.The date must be a future date. If you’re a Zuora Revenue customer and are using Order Date as the booking date when recognizing revenue, it’s recommended to ensure Order Date and Scheduled Execution Date fall into the same accounting period. |

2.  Use the "Create an order" operation to create an order under an existing account:

    | Request | POST /v1/orders/ |
    | --- | --- |
    | Request Body | { "existingAccountNumber": "AN_1676367337210", "subscriptions": [ { "orderActions": [ { "addProduct": { "productRatePlanId": "40288186859a602601859aa873e219e3" }, "type": "AddProduct", "triggerDates": [ { "triggerDate": "2023-02-20", "name": "ContractEffective" }, { "triggerDate": "2023-02-20", "name": "ServiceActivation" }, { "triggerDate": "2023-02-20", "name": "CustomerAcceptance" } ] }, { "removeProduct": { "ratePlanId": "402880e88614f6850186153cb8330531" }, "type": "RemoveProduct", "triggerDates": [ { "triggerDate": "2023-02-21", "name": "ContractEffective" }, { "triggerDate": "2023-02-21", "name": "ServiceActivation" }, { "triggerDate": "2023-02-21", "name": "CustomerAcceptance" } ] } ], "subscriptionNumber": "A-S00000003" } ], "orderDate": "2023-02-09", "status": "Scheduled", "schedulingOptions": { "scheduledDatePolicy": "SpecificDate", "scheduledDate": "2023-02-21" } } |


You can also implement the following API operations for scheduled orders:

-   Update a scheduled order through Update an order .

-   Retrieve scheduled orders through the following operations:

    -   Retrieve an order

    -   List orders

    -   List orders by subscription number

    -   List orders of an invoice owner

-   Cancel a scheduled order through Cancel an order without specifying the `status` and `schedulingOptions` fields.

-   Delete a scheduled order through Delete an order without specifying the `status` and `schedulingOptions` fields.
