---
title: "Summary of all fulfillments on the order line item"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/manage-fulfillments/details-view-of-fulfillments/summary-of-all-fulfillments-on-the-order-line-item"
product: "zuora-billing"
scraped_at: "2025-12-24T05:39:12.481Z"
---

# Summary of all fulfillments on the order line item

The sales order line item includes fulfillment and billing details, with sections displayed based on the Billing Trigger Rule. It provides comprehensive information on sales quantities, fulfillment details, and related return order line items.

The sales order line item provides the Fulfillment Details (or Billing Documents section depending on the Billing Trigger Rule value) and Related Return OLIs sections.

-   If the Billing Trigger Rule is Trigger As Fulfillment Occurs, the Fulfillment Details section displays.
-   If it is Trigger Without Fulfillment, the Billing Documents section displays instead. The Billing Documents section includes the Invoice Number, Invoice Date, invoice Due Date, Invoice Status, and Invoice Amount. For invoice information, see Invoice.

The Fulfillment Details section includes the following tables and fields:

| Table | Field | Description |
| --- | --- | --- |
| Sales Quantity Overview | Pending | The quantity of items pending to be sold for the sales order line item |
| Fulfilled/Sold | The quantity of the sold items for the sales order line item |  |
| Total | The total quantity of items for the sales order line item |  |
| Available to Return | The quantity of items available to be returned for the sales order line itemIf you create a return order line item, you need to make sure the quantity of the return order line item to be created is less or equal to this value. |  |
| Fulfillment and Billing Document Details | Number | The fulfillment number, for example, F-00000100. |
| Date | The date of the fulfillment. |  |
| Type | Type of a fulfillment, can be Delivery and Return. |  |
| Carrier | The express company |  |
| Tracking Number | The express number from the express company |  |
| State | The state of the fulfillment, can be Executing, Booked, Sent To Billing, Complete, and Canceled. |  |
| Quantity | The fulfillment quantity |  |
| Amount | The price amount for the fulfillment |  |
| Billing Document | The billing document linkClick the link to view the generated billing documents. For more information, see Generate billing documents for order line items and fulfillments |  |

## Related return OLIs

The Related Return OLIs section includes the following fields:

| Section | Field | Description |
| --- | --- | --- |
| Return Quantity Overview | Pending | The quantity of items pending to be returned for the return order line item |
| Fulfilled/Returned | The quantity of returned items for the return order line item |  |
| Total | The total quantity of items for the return order line item |  |
| Return OLI Details | Return Order Number | The order number of the return orders associated with the sales order line item in the sales order |
| Return OLI Name | The name of the return order line item associated with the sales order line item |  |
| Billing Trigger Rule | The billing trigger rule for the return order line item, the value is Trigger As Fulfillment Occurs for order line items carrying fulfillments. |  |
| Item State | The state of the order line item, can be Executing, Booked, Sent To Billing, Complete, and Canceled. |  |
| Quantity Returned | The quantity of items to be returned or have been returned for the fulfilment |  |
| Amount | The price amount for the fulfillment |  |

The return order line provides the Fulfillment Details (or Billing Documents section depending on the Billing Trigger Rule value) section, complying with the same rule as the sales order line item. The Billing Documents section includes the Credit Memo Number, CM Date, CM Status, and CM Amount (CM represents credit memo). For credit memo information, see Invoice Settlement.

## Fulfilment details

The Fulfillment Details section includes the following information:

| Section | Field | Description |
| --- | --- | --- |
| Return Quantity Overview | Pending | The quantity of items pending to be returned for the return order line item |
| Fulfilled/Returned | The quantity of returned items for the return order line item |  |
| Total | The total quantity of items for the return order line item |  |
| Fulfillment and Billing Document Details | Number | The fulfillment number, for example, F-00000100 |
| Date | The date of the fulfillment. |  |
| Type | Type of a fulfillment, can be Delivery and Return. |  |
| Carrier | The express company |  |
| Tracking Number | The express number from the express company |  |
| State | The state of the fulfillment, can be Executing, Booked, Sent To Billing, Complete, and Canceled |  |
| Quantity | The fulfillment quantity |  |
| Amount | The price amount for the fulfillment |  |
| Billing Document | The billing document linkClick the link to view the generated billing documents. For more information, see Generate billing documents for order line items and fulfillments |  |

## Details of a fulfillment

The following table lists the details of a fufillment.

| Section | Field name | Description |
| --- | --- | --- |
| Overview | Fulfillment Type | Type of a fulfillment, can be Delivery and Return. |
| Quantity Remaining for Delivery | The quantity that is remaining to deliver. |  |
| Fulfillment Quantity | The fulfillment quantity. |  |
| Fulfillment Date | The fulfillment date. |  |
| Carrier | The express company that is configured in Billing Settings > Fulfillment Settings. For more information, see Configure Fulfillment Settings. |  |
| Tracking Number | The tracking number from the express company. |  |
| State | State of a fulfillment, can be Executing, Booked, Sent To Billing, Complete, and Canceled. |  |
| Billing Target Date | The date when the fulfillment is billed. |  |
| Description | A brief description of the fulfillment for reference. |  |
| Fulfillment Integration | Fulfillment System | The fulfillment system that is configured in Billing Settings > Fulfillment Settings. For more information, see Configure Fulfillment Settings. |
| Fulfillment Location | The fulfillment location that is configured in Billing Settings > Fulfillment Settings. For more information, see Configure Fulfillment Settings. |  |
| External ID | The ID of the fulfillment in an external system. |  |
| Item Identifier | Item Identifier | The ID of the fulfillment item. The ID is provided by customers. |
| Description | The description of the fulfillment item for reference purposes. |  |
