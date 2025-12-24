---
title: "Sales order data mapping"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/billing---revenue-integration_1/sales-order-data-mapping"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:39:57.709Z"
---

# Sales order data mapping

Zuora provides predefined field mappings between Billing and Revenue Staging sales order lines, which should not be modified.

Some standard fields of subscriptions or amendments in Zuora Billing are mapped to Zuora Revenue Staging fields for sales order lines. The following table describes the pre-defined sales order field mappings between Zuora Billing and Zuora Revenue Staging tables. Zuora recommends not to change the field mapping values and order.

For information on Standard field mapping, see [here](/zuora-revenue/advanced-revenue-operations/billing---revenue-integration/sales-order-data-mapping/standard-field-mapping).

To know about defining your own field mappings, see [here](/zuora-revenue/advanced-revenue-operations/billing---revenue-integration/sales-order-data-mapping/define-your-own-field-mappings).

## Sales order date mapping

The sales order date for each SO line is used to determine in which accounting period an SO line is collected or processed in Zuora Revenue.

The SO date for a booking transaction is equals to the RatePlanCharge.OriginalOrderDate. You must ensure the same is mapped to the booking transaction template. RatePlanCharge.OriginalOrderDate is the same as the initial booking date in the subscribed environment or the order date in the Orders environment when the charge is created or modified.

-   SUBSCRP\_LAST\_BOOK\_DATE: The last change date of a subscription. Zuora Revenue takes `Subscription.lastBookingDate` as the value.

    -   For a new subscription created by the Subscribe and Amend APIs , this field has the value of the subscription creation date.

    -   For a subscription changed by an amendment, this field has the value of the amendment booking date ( `Amendment.CreatedDate` ).

    -   For a subscription created or changed by an order, this field has the value of the order date ( `Order.orderDate`).

-   Any other standard or custom Zuora date in the format of Object.Field.


For more information, see Order, subscription and amendment dates .

The following fields are currently deprecated:

-   ORIG\_TERM\_START\_DATE (default)

-   ORIG\_CHG\_CRT\_DATE

-   ORIG\_CHG\_SEG\_CRT\_DATE

-   AMENDMENT\_CRT\_DATE

-   Any other standard or custom Zuora date in the format of Object.Field
