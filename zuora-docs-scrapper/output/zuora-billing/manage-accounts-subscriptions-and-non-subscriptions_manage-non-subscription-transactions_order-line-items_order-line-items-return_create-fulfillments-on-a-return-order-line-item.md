---
title: "Create fulfillments on a return order line item"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/order-line-items-return/create-fulfillments-on-a-return-order-line-item"
product: "zuora-billing"
scraped_at: "2026-02-19T03:13:04.625Z"
---

# Create fulfillments on a return order line item

This task explains how to create fulfillments on a return order line item by following a series of steps, including editing fields and generating billing documents.

After activating the return order line item, you can create fulfillments on the return order line item by performing the following steps:

1.  On the return orders details page, click the item name in blue in the ITEM NAME column in the Return Order Line Items area. The order line item details page opens.
2.  Click Create Fulfillment at the top right. The fulfillment details page opens.
3.  On the fulfillment details page, edit the following fields in the Overview and Fulfillment Integration areas:

    | Field name | Description |
    | --- | --- |
    | Fulfillment Quantity | Required field. The quantity of the fulfillment items to be returned. The value must be less than or equal to the value shown in the Quantity Remaining for Delivery field. |
    | Fulfillment Date | Required field. The date of the fulfillment. |
    | Carrier | The express company. |
    | Tracking Number | The express number from the express company. |
    | State | The state of the fulfillment. Valid values are Executing, Booked, Sent To Billing, Complete, and Canceled . The default value is Executing .If the fulfillment is in the Executing state, you can edit the fields in this table.If the fulfillment is specified to other states, you can add fulfillment items to the fulfillment. To generate billing documents, you need to specify the fulfillment to the Sent To Billing state and set the Billing Target Date field. |
    | Billing Target Date | Specify the date when the fulfillment will be invoiced.After setting this field to the Sent To Billing state and specifying a value for this field, you can create a bill run. For instructions, see Create Bill Runs . |
    | Description | The description of the fulfillment for reference purposes. |
    | Fulfillment System | The value that maps an external value from the ERP system, for example, the value can be NetSuite, SAP, or other specific fulfillment partners. |
    | Fulfillment Location | The occurring location of the fulfillment. |
    | External ID | Specify the ID of the fulfillment. The ID is generated based on the external system. |

4.  (Optional) Change the State to a state except Executing to add fulfillment items, click Add Item to add a fulfillment item, and then edit the following fields in the Fulfillment Items area. After editing, click the save icon ![Image: icon-save](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/fc48d836-4b9f-4fa1-bf03-52198dd7959f?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImZjNDhkODM2LTRiOWYtNGZhMS1iZjAzLTUyMTk4ZGQ3OTU5ZiIsImV4cCI6MTc3MTU1NzE4MSwianRpIjoiYTE1Y2RhM2QxZTM1NDhiZjgyZTE2NWEwNGU2NzQwMGUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.NzPf4BXxcq6zCZvXDR53gXUThCd8VYO9v4ncct1Ca1M) to finish adding the fulfillment item. You can create multiple fulfillment items, but the number of fulfillment items should not be greater than the value of the Fulfillment Quantity field.

    | Field name | Description |
    | --- | --- |
    | Item Identifier | Specify the ID of the fulfillment item. The ID is provided by customers. |
    | Description | The description of the fulfillment item for reference purposes. |

5.  Click Save at the top right on the fulfillment details page to finish the fulfillment creation. If you return to the order line item details page, you can view the created fulfillments in the Fulfillment Details section. For more information, see View the details of a fulfillment .
6.  (Optional) To generate billing documents for the fulfillment in the Sent To Billing state, create a bill run. For instructions, see Create Bill Runs .
