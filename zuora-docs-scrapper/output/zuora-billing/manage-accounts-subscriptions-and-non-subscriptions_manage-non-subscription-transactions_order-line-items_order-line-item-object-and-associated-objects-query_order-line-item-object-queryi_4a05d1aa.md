---
title: "Order Line Item fields"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/order-line-item-object-and-associated-objects-query/order-line-item-object-querying-through-data-query/order-line-item-fields"
product: "zuora-billing"
scraped_at: "2025-12-24T05:39:30.579Z"
---

# Order Line Item fields

This reference lists the fields available in the order line item object, accessible via Data Query and the Orders API.

The following table lists all the fields that are defined on the order line item object. You can access the Orders Line Item object and all its fields through Data Query and the Orders API.

| Field name | Format | Description |
| --- | --- | --- |
| accountingCode | String | The accounting code of the order line item. |
| amount | BigDecimal | The gross amount of the order line item. |
| amountPerUnit | BigDecimal | The amount that is charged per unit excluding discounts. This value can be tax inclusive or tax exclusive. This is a required field. |
| amountWithoutTax | BigDecimal | The calculated gross amount for an order line item excluding tax. If the tax mode is tax exclusive, the value of this field equals that of the amount field.If the tax mode of an order line item is not set, the system treats it as tax exclusive by default. The value of the amountWithoutTax field equals that of the amount field.If you create an order line item from the product catalog, the tax mode and tax code of the product rate plan charge are used for the order line item by default. You can still overwrite this default set-up by setting the tax mode and tax code of the order line item. |
| billingRule | Enum | The value can be TriggerWithoutFulfillment or TriggerAsFulfillmentOccurs . The value indicates the condition to trigger invoice generation for an order line item, that is, triggering invoice generation for an order line item without setting the fulfillment or with setting the fulfillment. |
| billTargetDate | Date | Indicates when the order line item will be invoiced. |
| createdById | String | The ID of the Zuora user who created this order line item. |
| createdDate | DateTime | The date and time when the order line item is created. |
| deferredRevenueAccountingCode | String | The accounting code for deferred revenue. |
| deleted | Boolean | Indicates whether this record has been removed. |
| description | String | The description of the order line item for reference purposes. |
| discount | BigDecimal | This field shows the total discount amount that is applied to an order line item after the inlineDiscountType and inlineDiscountPerUnit fields are set. |
| excludeItemBillingFromRevenue | Boolean | Specifies whether to exclude non-revenue related invoice items, invoice item adjustments, credit memo items, and debit memo items from syncing to Zuora Revenue. This field is only available if you have enabled Zuora Billing - Revenue Integration . |
| excludeItemBookingFromRevenue | Boolean | Specifies whether to exclude non-revenue related rate plan charges and order line items from syncing to Zuora Revenue. This field is only available if you have enabled Zuora Billing - Revenue Integration . |
| id | String | The ID of the order line item. |
| itemCategory | Enum | The value can be sale or return , which indicates the sale or return of an order line item. |
| itemName | String | The order line item name that is displayed in the UI, invoices, and reports. This is a required field. |
| itemNumber | String | The number of the order line item. |
| itemState | String | The state of the order line item. This is a required field. Valid values are Executing, SentToBilling, Complete, and Canceled. |
| itemType | String | The category of the order line item. Valid values are Fee, Product, and Services. This is a required field. |
| inlineDiscountType | String | Use this field to specify the inline discount type, which can be Percentage , FixedAmount , or None . |
| inlineDiscountPerUnit | BigDecimal | Use this field in accordance with the inlineDiscountType field, in the following manner:If the inlineDiscountType field is set as Percentage , this field specifies the discount percentage for each unit of the order line item.If the inlineDiscountType field is set as FixedAmount , this field specifies the discount amount on each unit of the order line item. |
| isAllocationEligible | Boolean | Indicates whether the charge segment is allocation eligible in revenue recognition. |
| isUnbilled | Boolean | Indicates how to perform the accounting during revenue recognition. |
| listPrice | BigDecimal | The extended list price for an order line item, calculated by the formula: listPrice = listPricePerUnit * quantity |
| listPricePerUnit | BigDecimal | The list price per unit at the time of the transaction. This field is used for reporting purposes. |
| originalOrderLineItemNumber | String | The field is only available if the value of the itemCategory field is return . The field indicates the order line item number of the order line item that is returned. |
| originalOrderNumber | String | The field is only available if the value of the itemCategory field is return . The field indicates the order number of the order in which the order line item is returned. |
| productCode | String | The product code that is associated with the order line item. This field is used as an identifier for the downstream system. |
| productRatePlanChargeId | String | The ID of the product rate plan charge. An order line item can refer to a one-time product rate plan charge. |
| purchaseOrderNumber | String | The associated purchase order number. |
| quantity | BigDecimal | The total number of the order line items to be purchased. When this field is used, each unit must be identical and you cannot modify a unit individually. To have a different unit, create another order line item. |
| quantityAvailableForReturn | BigDecimal | The quantity is available for return. |
| quantityFulfilled | BigDecimal | The quantity of fulfillment items that are delivered or returned. |
| quantityPendingFulfillment | BigDecimal | The quantity of fulfillment items that are to be delivered or returned. |
| recognizedRevenueAccountingCode | String | The accounting code for recognized revenue. |
| requiresFulfillment | Boolean | Indicates whether the order line item requires a fulfillment. |
| revenueRecognitionRule | String | The name of the applicable revenue recognition rule. |
| soldTo | String | The ID of a contact that belongs to the billing account of the order line item. |
| soldToOrderContactId | String | The ID of the Sold To contact. |
| SoldToSnapshotId | String | A snapshot of the ID for an account used as the sold-to contact of an order line item. |
| taxCode | String | The tax code that is used to identify the appropriate tax rules and rates to apply to this order. |
| taxMode | String | Indicates whether the charge amount is tax inclusive or tax exclusive. |
| transactionDate | Date | The date of the transaction. If this field is not specified, the order date will be used as the transaction date. |
| UOM | String | The unit of measure. The UOM is defined in the Billing settings. |
| updatedById | String | The ID of the Zuora user who updated the order line item. |
| updatedDate | DateTime | The date and time when the order line item is updated. |
