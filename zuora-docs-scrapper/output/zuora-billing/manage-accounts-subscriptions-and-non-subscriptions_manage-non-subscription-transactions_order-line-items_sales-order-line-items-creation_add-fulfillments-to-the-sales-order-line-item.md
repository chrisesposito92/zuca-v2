---
title: "Add fulfillments to the sales order line item"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/sales-order-line-items-creation/add-fulfillments-to-the-sales-order-line-item"
product: "zuora-billing"
scraped_at: "2026-02-19T03:13:04.582Z"
---

# Add fulfillments to the sales order line item

This task explains how to add fulfillments to a sales order line item, including creating fulfillments, providing detailed information, and generating billing documents.

To add fulfillments to a sales order line item from the UI, complete the following steps:

1.  In the Sales Order Line Item area of the order details page, click the item name of the sales order line item to which you are to add fulfillments. The order line item details page opens.

    ![sales-orderLineItems-area](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/d456fc07-814e-4d00-8862-85caa54bbcc1?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImQ0NTZmYzA3LTgxNGUtNGQwMC04ODYyLTg1Y2FhNTRiYmNjMSIsImV4cCI6MTc3MTU1NzE4MSwianRpIjoiNmJjMGI5YmI0NzJlNGIxNGEyZjhjMDBjMzYyZDVhOTUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.vebFERkRTg-qlUaH3LXklxcsQ0SzvbBFBYfSVqBDZCM)

2.  Click Create Fulfillments at the top right. The Create Fulfillment page opens.
3.  Provide detailed information about the fulfillment you are to add.

    | Section | Field name | Description |
    | --- | --- | --- |
    | Overview | Fulfillment Type | Type of a fulfillment. Valid values are Delivery and Return .This field is automatically set to Delivery if you select New Sales in Step 5 of Task 1: Create an order and add a sales order line item . |
    | Quantity Remaining for Delivery | The quantity that is remaining to deliver. This is a reference field that you cannot edit. This field indicates the quantity that you can still fulfill for the order line item. |  |
    | Fulfillment Quantity | Required field. The quantity you are to fulfill in this fulfillment. The quantity to fulfill cannot exceed the quantity that is remaining for delivery. |  |
    | Fulfillment Date | Required field. The date you are to assign to a fulfillment. |  |
    | Carrier | The carrier that you choose to fulfill the order line item. The options for the carrier can be configured in Billing Settings > Fulfillment Settings . See Configure Fulfillment Settings. |  |
    | Tracking Number | The tracking number of a fulfillment. |  |
    | State | State of a fulfillment. Valid values are Executing , Sent To Billing , Complete , Canceled , and Booked . By default, the starting state of a fulfillment is Executing . For more information, see State transitions for an order line item, fulfillment, and order .Set the Item State field to Sent To Billing to generate billing documents for the fulfillment.When a fulfillment is in a state other than Executing , you can create fulfillment items for the fulfillment. |  |
    | Billing Target Date | The date when the fulfillment is invoiced.Set the bill target date to generate billing documents for the fulfillment. |  |
    | Description | A brief description of the fulfillment for reference. |  |
    | Fulfillment Integration | Fulfillment System | The fulfillment system. The options for the fulfillment system can be configured in Billing Settings > Fulfillment Settings. See Configure Fulfillment Settings. |
    | Fulfillment Location | The fulfillment location. The options for the fulfillment location can be configured in Billing Settings > Fulfillment Settings . See Configure Fulfillment Settings . |  |
    | External ID | The ID of the fulfillment in an external system. |  |

4.  (Optional) To add fulfillment items to a fulfillment, perform the following steps:

    Note:

    You cannot add fulfillment items to a fulfillment if the fulfillment is still in the Executing state.

    1.  In the Fulfillment Items section, click Add Item to add a fulfillment item to the fulfillment.

    2.  In the Item Identifier field, enter the identifier information you are to add for the fulfillment item.

    3.  In the Description field, enter the description for the fulfillment item.

    4.  Click the save icon ![Image: icon-save](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/fc48d836-4b9f-4fa1-bf03-52198dd7959f?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImZjNDhkODM2LTRiOWYtNGZhMS1iZjAzLTUyMTk4ZGQ3OTU5ZiIsImV4cCI6MTc3MTU1NzE4MSwianRpIjoiNmE2NzZhZTBkNDUzNDU1YTg3MjcyYTY2YWNiZDM2YmQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.CDRwHtb_-wj2z_qUpCo3CHxhL8eB7RDaR7m4Os9ElC4) at the right end. A fulfillment item is now added to the fulfillment.

    5.  Repeat steps a - d to add more fulfillment items as you need in the current fulfillment. The maximum number of fulfillment items allowable in a fulfillment is 100.


5.  Click Save at the top right. The fulfillment details page opens. A fulfillment is now successfully created and added to the sales order line item.
6.  (Optional) To add more fulfillments to the sales order line item, click the left arrow icon at the top left to return to the order line item details page, and then repeat steps 2 - 5. The maximum number of fulfillments allowable for an order line item is 100. For more information about the limits, see Order Line Items limitations .
7.  (Optional) To generate billing documents for the fulfillment in the Sent To Billing state, create a bill run. For instructions, see Creating Bill Runs .
