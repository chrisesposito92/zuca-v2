---
title: "Create an order and add a return order line item"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/order-line-items-return/create-an-order-and-add-a-return-order-line-item"
product: "zuora-billing"
scraped_at: "2025-12-24T05:37:59.948Z"
---

# Create an order and add a return order line item

This task guides you through creating an order and adding a return order line item in the Zuora application.

In the Zuora UI, you can create a return order line item through either of the following ways:

-   Create an order and add a return order line item to this order.
-   Create a return order line item from an existing order details page.

After creating the return order line item, you can decide whether to create fulfillments on the return order line item.

To create an order and add a return order line item to the order, perform the following steps:

1.  Log in to the Zuora application and then navigate to Customers > Orders . The Orders page opens.
2.  Click Create New Order at the top right. The Create New Order page opens.
3.  In the Order Overview area, enter the name of the account that owns the order in the Account field. This must be the order account that owns the sales order line item you are to return. You can enter the account by clicking either Account Name or Account Number , as follows:

    -   If you click Account Name , type part of the account name in the Account field, and the filtered accounts can be dynamically listed for your selection.

    -   If you click Account Number , type the complete account number.


4.  In the Order Date field, enter the order date you are to assign to the order.
5.  From the Order Category dropdown list, select Return . Then, you can see the following options are displayed for the return order line item:

    -   The Reason Code dropdown list

    -   The Return Order Line Items area


6.  (Optional): From the Reason Code dropdown list, select a reason code to indicate the reason for your product return. Options on the Reason Code dropdown list can be configured in Billing Settings > Configure Reason Codes . For more information, see Configure Reason Codes .
7.  (Optional): In the Description field, enter the description you are to describe the order.
8.  In the Return Order Line Items area, click Add Return Order Line Item on the right. The Search Orders and Order Line Items window is displayed. All the orders containing sales order line items that you can return for the account are listed for your selection.

    ![SearchOrdersandOrderLineItemsWindow](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/a41afb70-6848-4918-b246-5fffe729ee63?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImE0MWFmYjcwLTY4NDgtNDkxOC1iMjQ2LTVmZmZlNzI5ZWU2MyIsImV4cCI6MTc2NjY0MTA3NywianRpIjoiNzc3ZjE0OWJhYTEwNDE3ZmE5M2U3NmRiMmUwN2UyZmUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.N8g7-9Tngwu0aTEetTNXV9jDmHXCNNg45SEOm_qkzWc)

9.  Click the corresponding order in the Order column to display the order line item to return in the Order Line Items column, and then select the order line item to return by selecting the corresponding checkbox. If several orders are listed, you can search for the order containing the sales order line item you are to return by entering the order number in the Search By Order Number field.
10.  After you are finished, click Next . The sales order line item to return is added to the Return Order Line Items area.

     ![ReturnOrderLineItemsArea](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/947ce740-9a0d-4b6c-834d-203bf140826a?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijk0N2NlNzQwLTlhMGQtNGI2Yy04MzRkLTIwM2JmMTQwODI2YSIsImV4cCI6MTc2NjY0MTA3NywianRpIjoiMDcwY2M5MjE2NmE0NGM1NGJhZTljNzViNzBjYzFjNGQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.uE5p6ktwOlzY1KsqkJZYgsGzzSofPChBuRhC5Yp8lAQ)

11.  Edit the following fields if needed.

     | Field name | Description |
     | --- | --- |
     | Item Name | Required field. Name of the return order line item. This name represents the name of the object that is returned and is typically displayed on invoices, credit memos, and so on. |
     | Bill Target Date | Required field. The date when the return order line item is invoiced. Credit memos are generated for return order line items if you have enabled the Invoice Settlement feature; otherwise, negative invoices are generated. |
     | Billing Trigger Rule | The default value is Without Fulfillment， select it As FulfillmentOccurs for a return order line item with fulfillments. If As Fulfillment Occurs is selected, you are allowed to add fulfillments and the billing documents will be generated at the fulfillment level based on the Bill Target Date and Item State specified for the fulfillments rather than the Bill Target Date and Item State specified for your order line item. |
     | Item State | State of the return order line item. Valid values are Executing , Booked , Sent To Billing , Complete , and Canceled . By default, the starting state of an order line item is Executing .If you want to create fulfillments on the return order line item, set this field to Booked. If you want to generate billing documents for the return order line item, set the field to Sent To Billing .For more information, see State transitions for an order, order line item, and fulfillment . |
     | Quantity to Return / Availability | Quantity to Return: The quantity you are to return for the original sales order line item. The quantity to return must be less than or equal to the quantity available to return.Availability: This is a field for reference. Check this field for the quantity available to return. |
     | Actions | You can perform the following actions through this field:Click the edit icon  to display the Edit Order Line Items window and edit more fields of the return order line item. Click the delete icon  to delete the current return order line item. |

12.  (Optional): You can add more return order line items as you need in the current order by repeating steps 8 - 11. The maximum number of order line items allowable in an order is 100.
13.  Click Activate to activate the order.
