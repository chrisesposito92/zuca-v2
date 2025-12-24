---
title: "Associate order line item using the Zuora UI"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/associate-order-line-items-with-subscriptions/associate-order-line-item-using-the-zuora-ui"
product: "zuora-billing"
scraped_at: "2025-12-24T05:37:45.030Z"
---

# Associate order line item using the Zuora UI

This topic explains how to associate order line items using the Zuora UI, including creating new subscriptions and order line items, and previewing billing information.

1.  Log in to the Zuora application and then navigate to Customers > Orders . The Orders page opens.
2.  Click Create New Order at the top right. The Create New Order page opens.
3.  In the Order Overview area, enter the name of the account that owns the order in the Account field. By default, the account that owns the order will also own the order line item. You can enter the account by clicking either Account Name or Account Number .

    -   If you click Account Name , type part of the account name in the Account field and the filtered accounts can be dynamically listed for your selection.

    -   If you click Account Number , type the complete account number.


4.  In the Order Date field, enter the order date you want to assign to the order.
5.  Create a new subscription.
    1.  In the Associated subscriptions area, click CREATE SUBSCRIPTION on the right. The Create Subscription page is displayed.
    2.  Provide detailed information about the new subscription. Enter a value in the Unique Key field to associate this subscription with a new order line item to be created in Step 6. For field explanations, see the Fields for creating new subscriptions section.
    3.  Click Continue .
    4.  In the Products and charges area, search and locate the product to be added. You can choose to search by product name or by product SKU by using the drop-down list. The displayed products will dynamically change as you type in the Search field.
    5.  To add a rate plan, click the right arrow ( > ) next to the product name to expand its rate plans, and then select the rate plan you want to add to the subscription.

        Note: You can select more than one rate plan in multiple products. To remove a rate plan from your selection, clear the checkbox in front of the rate plan. The number of the selected rate plan is also indicated in the UI.

    6.  Click Add Product .
    7.  (Optional): Update the charges for the selected rate plan if necessary.
    8.  Click Review Order . Then you can preview the following information from the Associated Subscriptions area:

        -   Included Products

        -   Order Actions

        -   Terms

        -   Ramp Metrics


    9.  (Optional): If you want to update the subscription, you can:

        -   Click Add Product to add more products and rate plans to the subscription.

        -   Click Update Terms and Conditions to update the terms and conditions of the subscription.

        -   Click More Order Actions and select the corresponding action from the menu to do further updates such as transferring the owner and suspending the subscription.

            -   If you do not specify the Unique Key field in step 5.b, you can also select More Order Actions > Edit Subscription Name , click Preview Subscription 1 on the top left to enter a subscription name, and then use this name to associate this subscription with the order line item to be created in Step 6.


6.  Create Order Line Items.
    1.  Add the order line item. You have two options.

        -   Create an order line item from scratch, in the Order Line Items area, click ADD ORDER LINE ITEM on the right. The Add Order Line Item window is displayed.

        -   Add an order line item from the product catalog. In the Order Line Items area, click PRODUCTS on the right. The Search Product window is displayed. Identify a one-time charge you tend to add as an order line item and click the Add button. The Add Order Line Item window is displayed.


    2.  If you create an order line item from scratch, provide detailed information for the order line item; if create an order line item from the product catalog, change the detailed information when necessary. For field explanations, see the Fields for creating order line items section.

        -   To associate this order line item with the subscription defined in Step 5, enter the same unique key value or subscription name you specified for the Unique Key or Subscription Number field on the subscription in the same field on the order line item.

        -   To associate this order line item with an existing subscription, enter the subscription name or number in the Subscription Number field.

        -   The sold-to contact of an order line item will be set automatically to the sold-to contact under the invoice owner account of the order line item.


    3.  After you are finished, click Save . The Add Order Line Item window is closed.
    4.  (Optional): Repeat Step a - c to create more order line items as you need in the current order. The maximum number of order line items allowable in an order is 100. Use the Actions link to either edit or delete an order line item after creation.
7.  (Optional): To preview billing information for the order, click Preview Billing . Specify the preview settings and click Update Preview to see the preview invoices. After you are finished, click Back to return to the previous page. Click the edit icon ![Image: icon-edit](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/374bf840-9af0-4ad9-9c3a-51c8738fee3c?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjM3NGJmODQwLTlhZjAtNGFkOS05YzNhLTUxYzg3MzhmZWUzYyIsImV4cCI6MTc2NjY0MTA2MiwianRpIjoiZTk4ZjY0ZThmZjVlNDA2M2ExNDU3Njc0OTMxMWRhYmUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.81Gzw7mU01ljFvlijs88cfHI_TjqllulrLOJ1DoMggk) or the delete icon ![Image: icon-delete](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/1d7818ba-a7e9-4ab4-aede-a24255d67705?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjFkNzgxOGJhLWE3ZTktNGFiNC1hZWRlLWEyNDI1NWQ2NzcwNSIsImV4cCI6MTc2NjY0MTA2MiwianRpIjoiZTc4ZmRkMjQ1N2Y3NGQ2ZmJkZmE5YzA4ODFlNWRhYjMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.FQlMT5MySiOympsUX4eMMXefVGeXe5thv9HeCEB4LPY) in the Actions column to edit or delete an order line item after creation.
8.  Click Activate to activate the order. If you didn’t manually specify a subscription name, then a subscription number is created for the preceding subscription.

If you specify the same Unique Key value when creating the subscription and order line item, the subscription number is automatically synced to the Subscription Number field of the order line item after the order is activated.

If you do not associate a subscription with an order line item before activating the order, you still can edit an existing order line item from the order details page of the complete order and associate it with an existing subscription by specifying the subscription number or subscription name in the Subscription Number field on the order line item.

The following table lists the descriptions of all fields for creating a new subscription:

| Section | Field name | Description |
| --- | --- | --- |
| Subscription Overview | Subscription owner | Required field. The account owns the subscription. After selecting the Account Name or Account Number, type part of the name or number in the SUBSCRIPTION OWNER field. |
| Type | Required field. The subscription type. Specify the value as Termed or Evergreen . |  |
|  | Unique Key | A unique key to associate a new subscription with a new order line item in the same order during order creation. |
| Terms and Conditions | Term start date | Required field. Displayed for both termed and evergreen subscription. The term start date. |
| Initial term | Displayed for the termed subscription. The Initial term and Period type together indicate the length of the period for the initial subscription term. |  |
| Period type |  |  |
| Renewal setting | Displayed for the termed subscription. The value can be Renew with specific term or Renew to evergreen . |  |
| Renewal term | Displayed for the termed subscription. The Renewal term and Period type together indicate the length of the periods your subscription will renew after the initial term ends. |  |
| Period type |  |  |
| Auto renew | Displayed for the termed subscription. Specify whether enable auto-renewal of the subscription. |  |
| Invoice the subscription separately | Specify whether to create independent invoices per subscription . |  |
| Billing and Payment | Bill to contact | Select the account to be invoiced. You can click the View Detail link to view detailed information about the account. |
| Payment term | The payment term for the subscription. You can click the View Detail link to view detailed information about the payment term. |  |
| Ramp | Ramp enabled | Specify whether to have the Ramp settings. |
| Interval duration | Displayed if the Ramp enabled field is checked. Specify the Ramp intervals (charge segments). |  |
| Quote Fields | Quote Number | The unique identifier of the Quote. |
|  | Quote Type | The Quote type that represents the subscription lifecycle stage such as New, Amendment, Renew , or Cancel . |
|  | Quote Business Type | The specific identifier for the type of business transaction the Quote represents such as New, Upsell , Downsell, Renewal, or Churn . |
|  | Opportunity Name | The unique identifier of the Opportunity. |
|  | Opportunity Close Date | The closing date of the Opportunity. |
| Trigger Dates | Contract Effective | The contract effective date . |
| Service Activation | The service activation date . |  |
| Customer Acceptance | The customer acceptance date . |  |

The following table lists the descriptions of all fields for creating an order line item:

| Section | Field name | Description |
| --- | --- | --- |
| Basic Information | Item Name | Required field. Name of the order line item. This name represents the name of the object that is sold and will typically be displayed on invoices, quotes, portals, and so on. |
| Product Code | The product code that is used as an identifier for the downstream system. This code is used to map the products in external systems such as the SKU in an external product catalog or a provisioning system. |  |
| Transaction Start Date | The date an order line item transaction starts. If it is not specified, the Order date will be used as the transaction start date. |  |
| Transaction End Date | The date an order line item transaction is completed. If it is not specified, the transaction start date will be used as the transaction end date. Also, the transaction end date should always equal or be later than the transaction start date. |  |
| Item Type | Required field. The category of the order line item. Valid values are Fee, Product , and Services. |  |
| Purchase Order Number | The purchase order number given to the quote line item transaction. Purchase order numbers can be found on the purchase order document. |  |
| Description | A brief description of the order line item for reference. |  |
| Item State | State of the order line item. Valid values are Executing, Booked, SentToBilling , Complete, and Canceled. By default, the starting state of an order line item is Executing. For more information, see Order Line Item States and Order States . |  |
| Bill Target Date | The date when the order line item will be invoiced. |  |
| Billing Trigger Rule | The rule is As Fulfillment Occurs or Without Fulfillment. If the rule is set to As Fulfillment Occurs, you are allowed to create fulfillments on the order line item. |  |
| Subscription Number | The subscription name of a new subscription or the subscription number or name of an existing subscription. |  |
|  | Unique Key | A unique key to associate a new subscription with a new order line item in the same order during order creation. |
| Pricing | List Price Per Unit | The list price per unit at the time of transaction. This field is used for reporting purposes. The Amount Per Unit value is used to determine the charge amount for this order line item. If List Price Per Unit is not specified, Amount Per Unit will be used as the list price. |
| UOM | Unit of measure. The UOM is defined in Billing settings |  |
| Discount Type | Use this field to specify the inline discount type, which can be Fixed Amount, Percentage, or None . |  |
| Discount Per Unit | Use this field in accordance with the Discount Type field, in the following manner:If the Discount Type field is set as Percentage , this field specifies the discount percentage for each unit of the order line item.If the Discount Type field is set as Fixed amount, this field specifies the discount amount on each unit of the order line item. |  |
| Amount Per Unit | Required field. The amount that is charged per unit excluding discounts. This field can contain tax for tax inclusive. |  |
| Quantity | Required field. Quantity of the order line item to be purchased. The charge amount will be calculated based on the specified Quantity and Amount Per Unit values. When this field is specified, each unit must be identical and you cannot modify a unit individually. To have a different unit, create another order line item. |  |
| Billing | Sold to Contact | The ID of a contact that belongs to the billing account of the order line item. Use this field to assign an existing account as the sold-to contact of an order line item.The Sold To Contact dropdown list has the Default Contact from Account option selected by default. The Default Contact from Account option indicates that the default sold-to account under the billing account of this order is set as the sold-to account of the order line item. |
| Tax | Tax Mode | Indicates whether the charge amount is tax inclusive or tax exclusive. |
| Tax Code | The tax code that is used to identify the appropriate tax rules and rates to apply to this order. |  |
| Finance | Revenue Recognition Rule | Name of the applicable revenue recognition rule. |
| Recognized Revenue Accounting Code | The accounting code for recognized revenue. |  |
| Deferred Revenue Accounting Code | The accounting code for deferred revenue. |  |
| Contract Asset Accounting Code | Zuora Internal: Available in all tenants, but only applicable if RevPro Integration is enabled.Accounting code for contract asset. |  |
| Contract Liability Accounting Code | Zuora Internal: Available in all tenants, but only applicable if RevPro Integration is enabled.Accounting code for contract liability. |  |
| Contract Recognized Revenue Accounting Code | Zuora Internal: Available in all tenants, but only applicable if RevPro Integration is enabled.Accounting code for contract recognized revenue. |  |
| Adjustment Liability Accounting Code | Zuora Internal: Available in all tenants, but only applicable if RevPro Integration is enabled.Accounting code for adjustment liability. |  |
| Adjustment Revenue Accounting Code | Zuora Internal: Available in all tenants, but only applicable if RevPro Integration is enabled.Accounting code for adjustment revenue. |  |
| Unbilled Receivables Accounting Code | Zuora Internal: Available in all tenants, but only applicable if RevPro Integration is enabled.Accounting code for unbilled receivables. |  |
| Exclude Item Booking from Revenue | Specifies whether to exclude non-revenue related rate plan charges and order line items from syncing to Zuora Revenue. This field is only available if you have enabled Zuora Billing - Revenue Integration . |  |
| Exclude Item Billing from Revenue | Specifies whether to exclude non-revenue related invoice items, invoice item adjustments, credit memo items, and debit memo items from syncing to Zuora Revenue. This field is only available if you have enabled Zuora Billing - Revenue Integration . |  |
| Additional Information | The custom fields that are defined on the Order Line Item object. |  |
