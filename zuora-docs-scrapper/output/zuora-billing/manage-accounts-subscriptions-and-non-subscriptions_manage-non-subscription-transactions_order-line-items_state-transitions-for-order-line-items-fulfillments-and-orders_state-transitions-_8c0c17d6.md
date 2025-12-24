---
title: "State transitions for  fulfillments"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/state-transitions-for-order-line-items-fulfillments-and-orders/state-transitions-for-fulfillments"
product: "zuora-billing"
scraped_at: "2025-12-24T05:36:48.672Z"
---

# State transitions for fulfillments

This topic explains the states and transitions for order line items, fulfillments, and orders in Zuora, detailing their lifecycle and the actions permissible at each state.

## State transitions for fulfillment

When the billing rule setting for an order line item is configured as `Trigger As Fulfillment Occurs` , fulfillments can be created and attached to the order line item. The state transition of a fulfillment is shown in the following diagram. Note that you cannot skip the SentToBilling state when the fulfillment is in the Executing or Booked state. Skip of billing is not allowed due to the billing rule.

![FulfillmentState](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/f88fbbd4-9d1d-41d1-964f-b08674cac321?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImY4OGZiYmQ0LTlkMWQtNDFkMS05NjRmLWIwODY3NGNhYzMyMSIsImV4cCI6MTc2NjY0MTAwNywianRpIjoiMmE2NmNhNGY4NWM3NGFjZThjNDI1ODA4YTBkZmQyYmYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.e8iBd4CSbuN13vroZzq8npsAC6Sv_Illt-AoM7O1M9w)

## Path 1: the default state Executing

As illustrated in Path 1 of the preceding diagram , when a fulfillment is created, its default state is Executing, unless you directly set the state of a fulfillment to the SentToBilling state through the Fulfillment UI or API.

The Executing state is used when a fulfillment is in progress, for example, when a fulfillment record is created in Zuora as a placeholder. This is an optional step in the fulfillment processing procedure.

When a fulfillment is in the Executing state, you can still update certain fields of this fulfillment, such as the quantity. See the description of the `Update a fulfillment` operation to check the fields that you can update.

Your ERP system integrated with Zuora Billing can also update the fields on a fulfillment of the Executing state.

## Path 2: from Executing to Booked

As illustrated in Path 2 of the preceding diagram , you can set a fulfillment to the Booked state when it is in the Executing state.

When a fulfillment is ready for fulfillment and revenue integration, you can set it to the Booked state. The fulfillment is now locked for any edits. The Booked state is an optional step in the fulfillment processing procedure.

You can trigger the state transition from Executing to Booked through either of the following ways:

-   Create a fulfillment through the `Create fulfillments` operation and set the `state` field to `Booked` .

-   Create a fulfillment through the Fulfillment UI and set the State field to `Booked` .

-   Update a fulfillment through the `Update a fulfillment` operation, and set the `state` field set to `Booked` .

-   Update a fulfillment through the Fulfillment UI and set the State field to `Booked` .


## Path 3: from Booked to SentToBilling

As illustrated in Path 3 of the preceding diagram , you can set a fulfillment to the SentToBilling state when it is in the Booked state.

The SentToBilling state is used when a fulfillment is ready for invoicing, for example, when sales order line items have been shipped or when return order line items have been received and approved at the warehouse. The SentToBilling state can be the terminal state and does not always move to the Complete state.

You must set a fulfillment to the SentToBilling state if you want to generate billing docs for fulfillment. Once a fulfillment is set to SentToBilling it cannot be canceled. If the fulfillment is for a sales order line item, an invoice item is generated. If the fulfillment is for a return order line item, a negative invoice item or credit memo is generated.

The fulfillment of the SentToBilling state is locked for any edits by any user.

You can trigger the state transition from Booked to SentToBilling through either of the following ways:

-   Update a fulfillment through the “Update a fulfillment” operation, and set the `state` field to `SentToBilling` .

-   Update a fulfillment through the Fulfillment UI and set the State field to `SentToBilling` .


See Generate invoice for order line items for a tutorial.

## Path 4: from SentToBilling to Complete

As illustrated in Path 4 of the preceding diagram , you can set a fulfillment to the Complete state when it is in the SentToBilling state.

The state transition from SentToBilling to Complete is used when some post-billing installation is required before a fulfillment is complete, for example, when shipment notification is sent or when installation appointment is scheduled.

The fulfillment of the Complete state is locked for any edits by any user.

You can trigger the state transition from SentToBilling to Complete through either of the following ways:

-   Update a fulfillment through the `Update a fulfillment` operation, and set the `state` field to `Complete` .

-   Update a fulfillment through the Orders UI and set the State field to `Complete` .


## Path 5: from Executing to SentToBilling

As illustrated in Path 5 of the preceding diagram , you can set a fulfillment to the SentToBilling state when it is in the Executing state.

The SentToBilling state is used when a fulfillment is ready for invoicing, for example, when sales order line items have been shipped or when return order line items have been received and approved at warehouse. The SentToBilling state can be the terminal state and does not always move to the Complete state.

You must set a fulfillment to the SentToBilling state if you want to generate billing docs for a fulfillment. Once a fulfillment is set to SentToBilling it cannot be canceled. If the fulfillment is for a sales order line item, an invoice item is generated. If the fulfillment is for a return order line item, a negative invoice item or credit memo is generated.

The fulfillment of the SentToBilling state is locked for any edits by any user.

You can trigger the state transition from Executing to SentToBilling through either of the following ways:

-   Update a fulfillment through the `Update a fulfillment` operation, and set the `state` field to `SentToBilling` .

-   Update a fulfillment through the Fulfillment UI and set the `State` field to `SentToBilling` .


See Generate invoice for order line items for a tutorial.

## Path 6: from Executing to Canceled

As illustrated in Path 6 of the preceding diagram , you can set a fulfillment to the Canceled state when it is in the Executing state.

The state transition from Executing to Canceled for a fulfillment is used when the fulfillment is canceled while it is still in progress.

The fulfillment of the Canceled state is locked for any edits by any user.

You can trigger the state transition from Executing to Canceled through either of the following ways:

-   Update a fulfillment through the `Update a fulfillment` operation, and set the `state` field to `Canceled` .

-   Update a fulfillment through the Fulfillment UI and set the State field to `Canceled` .


## Path 7: started as SentToBilling

As illustrated in Path 7 of the preceding diagram , you can create a fulfillment of the SentToBilling state directly.

The SentToBilling state is used when a fulfillment is ready for invoicing, for example, when sales order line items have been shipped or when return order line items have been received and approved at warehouse. The SentToBilling state can be the terminal state and does not always move to the Complete state.

You must set a fulfillment to the SentToBilling state if you want to generate billing docs for a fulfillment. Once a fulfillment is set to SentToBilling it cannot be canceled. If the fulfillment is for a sales order line item, an invoice item is generated. If the fulfillment is for a return order line item, a negative invoice item or credit memo is generated.

The fulfillment of the SentToBilling state is locked for any edits by any user.

You can create a fulfillment of the SentToBilling state through either of the following ways:

-   Create a fulfillment through the `Create fulfillments` operation, and set the `state` field to `SentToBilling` .

-   Create a fulfillment through the Fulfillment UI and set the State field to `SentToBilling` .
