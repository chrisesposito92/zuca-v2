---
title: "Fields required for creating an order line item"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/associate-order-line-items-with-subscriptions/associate-order-line-item-using-the-zuora-ui/fields-required-for-creating-an-order-line-item"
product: "zuora-billing"
scraped_at: "2025-12-24T05:37:51.013Z"
---

# Fields required for creating an order line item

This topic outlines the necessary fields for creating an order line item.

The following table lists the descriptions of all fields for creating a new order line item:

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
