---
title: "Create an order and add a sales order line item"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/sales-order-line-items-creation/create-an-order-and-add-a-sales-order-line-item"
product: "zuora-billing"
scraped_at: "2025-12-24T05:37:30.011Z"
---

# Create an order and add a sales order line item

This task guides you through creating an order and adding a sales order line item, with options for including fulfillments.

Depending on whether you want to create fulfillments to track the shipment of the sales order line item, select one of the following options:

-   To create a sales order line item without fulfillments from the UI, only perform Task 1: Create an order and add a sales order line item.
-   To create a sales order line item with fulfillments from the UI, perform the following tasks:
    -   Task 1: Create an order and add a sales order line item
    -   Task 2: Add fulfillments to the sales order line item

To create a sales order line item from the UI, complete the following steps:

1.  Log in to the Zuora application and then navigate to Customers > Orders . The Orders page opens.
2.  Click Create New Order at the top right. The Create New Order page opens.
3.  Note: You can enter the account by clicking either Account Name or Account Number , as follows:

    -   If you click Account Name , enter part of the account name in the Account field, and the filtered accounts can be dynamically listed for your selection.

    -   If you click Account Number , type the complete account number.


    In the Order Overview area, enter the name of the account that owns the order in the Account field. By default, the account that owns the order will also own the order line item.
4.  In the Order Date field, enter the order date you are to assign to the order.
5.  The Order Category dropdown list has the New Sales option selected by default. The New Sales option indicates that this order is to contain sales order line items.
6.  Add the sales order line item in one of the following ways:

    -   To enter the information about the order line item directly, in the Sale Order Line Items area, click Create Order Line Item on the right. The Add Order Line Item window is displayed. The Create Order Line Item button is available only if you have the Create Order Line Items Without Product Catalog billing permission. For more information, see Billing Roles .

    -   To add an order line item from the product catalog, in the Sale Order Line Items area, click Choose Products on the right. The Search Product window is displayed. Identify a one-time charge you are to add as an order line item and click Add . The Add Order Line Item window is displayed.


7.  Provide detailed information about the order line item. If in the previous step, you choose to add the order line item from the product catalog, you can change detailed information about the order line item.

    | Section | Field name | Description |
    | --- | --- | --- |
    | Basic Information | Item Name | Required field. Name of the order line item. This name represents the name of the object that is sold and will typically be displayed on invoices, quotes, portals, and so on. |
    | Product Code | The product code that is used as an identifier for the downstream system. This code is used to map a product in external systems such as the SKU in an external product catalog or a provisioning system. |  |
    | Transaction Start Date | The date when an order line item transaction starts. If it is not specified, the Order date will be used as the transaction start date. |  |
    | Transaction End Date | The date when an order line item transaction is completed. If it is not specified, the transaction start date will be used as the transaction end date. Also, the transaction end date should always equal or be later than the transaction start date. |  |
    | Item Type | Required field. The category of the order line item. Valid values are Fee, Product, and Services. |  |
    | Item Category | The category of an order line item. This is a field for reference only. Valid values are Sales and Return . See the meaning of each option as follows:Sales indicates the order line item is a sales order line item.Return indicates the order line item is a return order line item.This field is automatically set to Sales if you select New Sales in Step 5 of Task 1: Create an order and add a sales order line item . |  |
    | Description | A brief description of the order line item for reference. |  |
    | Item State | State of the order line item. Valid values are Executing, Sent To Billing, Complete, Canceled, and Booked . By default, the starting state of an order line item is Executing . For more information, see State transitions for an order line item, fulfillment, and order .If you are to add fulfillments to an order line item, set the state of the order line item to Booked . |  |
    | Bill Target Date | The date when the order line item is invoiced.If you are to add fulfillments to an order line item, you do not need to set the bill target date on the order line item. Instead, you need to set the bill target date on the fulfillment. See Step 3 of Task 2: Add fulfillments to the sales order line item . |  |
    | Billing Trigger Rule | Required field. The billing trigger rule of the order line item. Valid values are Without Fulfillment and As Fulfillment Occurs . See the meaning of each option as follows:The Without Fulfillment option indicates the following:This order line item is without fulfillments.The billing documents for the order line item are generated based on the order line item.The As Fulfillment Occurs option indicates the following:This order line item is with fulfillments.The billing documents for the order line item are generated based on fulfillments.If you are to create fulfillments for the order line item, select As Fulfillment Occurs from the Billing Trigger Rule dropdown list. If you select Without Fulfillment , you cannot create fulfillments for the order line item. |  |
    | Subscription Link | The related subscription number. Use this field to link an order line item to a related subscription. For example, hardware items can be linked to their respective software subscriptions. |  |
    | Pricing | List Price Per Unit | The list price per unit at the time of transaction. This field is used for reporting purposes. The Amount Per Unit value is used to determine the charge amount for this order line item. If List Price Per Unit is not specified, Amount Per Unit will be used as the list price. |
    | UOM | Unit of measure. The UOM is defined in Billing settings |  |
    | Discount Type | Type of discount to apply to the price. Use this field to specify the inline discount type. Valid values are Fixed Amount , Percentage , or None . |  |
    | Discount Per Unit | The discount per unit at the time of transaction. Use this field in accordance with the Discount Type field, in the following manner:If the Discount Type field is set as Percentage , this field specifies the discount percentage for each unit of the order line item.If the Discount Type field is set as Fixed Amount , this field specifies the discount amount on each unit of the order line item. |  |
    | Amount Per Unit | Required field. The amount that is charged per unit excluding discounts. This field can contain tax for tax inclusive. |  |
    | Quantity | Quantity of the order line item to be purchased. The charge amount will be calculated based on the specified Quantity and Amount Per Unit values. When this field is specified, each unit must be identical and you cannot modify a unit individually. To have a different unit, create another order line item. |  |
    | Tax | Tax Mode | Tax mode for the order line item pricing. Indicates whether the charge amount is tax inclusive or tax exclusive. |
    | Tax Code | The tax code that is used to identify the appropriate tax rules and rates to apply to this order. |  |
    | Billing | Invoice Owner Account | The invoice owner of the order line item, which is the same as the Order account. |
    | Bill To Contact | Use this field to assign an existing contact under the invoice owner account as the bill-to contact of an order line item.The Bill To Contact dropdown list has the default bill-to contact under the invoice owner selected by default. See Overview of Flexible Billing Attributes . |  |
    | OLI Owner Account | Use this field to assign the owner of the order line item. The default value is the invoice owner of the order line item. |  |
    | Sold To Contact | Use this field to assign an existing contact under the OLI owner account as the sold-to contact of an order line item.The Sold To Contact dropdown list has the default sold-to contact under the invoice owner of the order line item selected by default. See Overview of Flexible Billing Attributes . |  |
    | Ship To Contact | Use this field to assign an existing contact under the OLI owner account as the ship-to contact of an order line item.The Ship To Contact dropdown list has the default ship-to contact under the OLI owner account of the order line item selected by default. See Overview of Flexible Billing Attributes .This field is available only if you have turned on the Ship To Contact feature. You can turn on the feature through the self-service interface for Feature Management . |  |
    | Payment Term | Use this field to specify the payment term associated with the order line item. For example, Net 30 indicates that payment is due 30 days from the invoice date. The payment term determines the due dates of invoices for the order line items. See Overview of Flexible Billing Attributes . |  |
    | Invoice Template | Use this field to specify the ID of the invoice template associated with the order line item. See Overview of Flexible Billing Attributes . |  |
    | Sequence Set | Use this field to specify the ID of the sequence set associated with the order line item. See Overview of Flexible Billing Attributes . |  |
    | Invoice Group Number | Use this field to specify the number of the invoice group associated with the order line item. See Invoice Grouping . |  |
    | FinanceNote:You must configure default values under the Manage Non-Subscription Items setting to generate revenue schedules and configure accounting codes for sales order line items. | Revenue Recognition Rule | Name of the applicable revenue recognition rule. |
    | Recognized Revenue Accounting Code | The accounting code for recognized revenue. |  |
    | Deferred Revenue Accounting Code | The accounting code for deferred revenue. |  |
    | Contract Asset Accounting Code | The accounting code for contract assets. |  |
    | Contract Liability Accounting Code | The accounting code for contract liability. |  |
    | Contract Recognized Revenue Accounting Code | The accounting code for contract recognized revenue. |  |
    | Adjustment Liability Accounting Code | The accounting code for adjustment liability. |  |
    | Adjustment Revenue Accounting Code | The accounting code for adjustment revenue. |  |
    | Unbilled Receivables Accounting Code | The accounting code for unbilled receivables. |  |
    | Exclude Item Booking from Revenue | Specifies whether to exclude non-revenue related rate plan charges and order line items from syncing to Zuora Revenue. This field is only available if you have enabled Zuora Billing - Revenue Integration . |  |
    | Exclude Item Billing from Revenue | Specifies whether to exclude non-revenue related invoice items, invoice item adjustments, credit memo items, and debit memo items from syncing to Zuora Revenue. This field is only available if you have enabled Zuora Billing - Revenue Integration . |  |
    | Revenue Recognition Timing | Specifies the Revenue Recognition Timing setting for your order line item. Options for this setting are predefined when your administrator configures revenue recognition policy . This field is only available if you have enabled Orders to Revenue . |  |
    | Revenue Amortization Method | Specifies the Revenue Amortization Method setting for your order line item. Options for this setting are predefined when your administrator configures revenue recognition policy . This field is only available if you have enabled Orders to Revenue. |  |
    | Additional Information | The custom fields that are defined on the Order Line Item object. |  |

8.  After you are finished, click Save . The Add Order Line Item window is closed.
9.  (Optional): Repeat steps 6 - 8 in Task 1: Create an order and add a sales order line item to create more sales order line items as you need in the current order. The maximum number of order line items allowable in an order is 100. Use the Actions link to either edit or delete an order line item after creation.
10.  Click Activate to activate the order. The orders details page opens. A sales order line item is successfully created and added to the order. You can decide whether to continue to perform Task 2 as follows to add fulfillments to the sales order line item.
