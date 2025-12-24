---
title: "State transitions for order line items without fulfillments"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/state-transitions-for-order-line-items-fulfillments-and-orders/state-transitions-for-order-line-items-without-fulfillments"
product: "zuora-billing"
scraped_at: "2025-12-24T05:36:43.379Z"
---

# State transitions for order line items without fulfillments

This topic explains the state transitions for order line items without fulfillments, including paths from Executing to Booked, SentToBilling, and Complete. Also, the state transition of a fulfillment attached to a sales order line item is the same as that of a fulfillment attached to a return order line item.

When the billing rule setting is configured as `Trigger Without Fulfillment` , an order line item is processed without fulfillments. The state transitions of an order line item without fulfillments are as shown in the following diagram:

![OliState_WithoutFulfillment](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/88eb7a75-3fe7-4c5a-9149-fd504d55f582?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijg4ZWI3YTc1LTNmZTctNGM1YS05MTQ5LWZkNTA0ZDU1ZjU4MiIsImV4cCI6MTc2NjY0MTAwMSwianRpIjoiMTM0YzRhMmYzZWE2NDlhNmIyZTBmMWY2NTRhMTU3MWUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.UDzAE1lgrvtnNUv3AFkYqL6igVuPMKX1N5z-378EpPE)

## Path 1: the default state Executing

As illustrated in Path 1 of the preceding diagram , when an order line item is created, its default state is Executing, unless you directly set the state of an order line item to another state through the Orders UI or API.

The Executing state is used to represent standard processing that an order line item may go through such as provisioning or manual tasks. These lower-level descriptions can be captured through custom fields or status.

When an order line item is in the Executing state, you can still update certain fields of this order line item, such as the price or quantity. Note that the fields you can update for a sales order line item are different than those for a return order line item. See the field descriptions of the Update an order line item operation to check the fields that you can update for an order line item of either category.

Your ERP system integrated with Zuora Billing can also update the fields on an order line item of the Executing state.

You cannot sync the information about an order line item of the Executing state to Zuora Revenue.

## Path 2: from Executing to Booked

As illustrated in Path 2 of the preceding diagram , you can set an order line item to the Booked state when it is in the Executing state.

When an order line item is ready for fulfillment and revenue integration, you can set it to the Booked state.

You can trigger the state transition from Executing to Booked through either of the following ways:

-   Create an order line item through the Create an order operation and set the `itemState` field to `Booked` .

-   Create an order line item through the Orders UI and set the Item State field to `Booked` .

-   Update an order line item through the Update an order line item or Update order line items operation, and set the `itemState` field set to `Booked` .

-   Update an order line item through the Orders UI and set the Item State field set to `Booked` .


If an order line item is in the `Booked` state, you can update the `paymentTerm` , `invoiceTemplateId` , `sequenceSetId` , `invoiceGroupNumber` , and `billTargetDate` fields.

## Path 3: from Booked to SentToBilling

As illustrated in Path 3 of the preceding diagram , you can set an order line item to the SentToBilling state when it is in the Booked state.

When an order line item is ready for invoicing, you can set it to the SentToBilling state. The SentToBilling state can be the terminal state and does not always move to the Complete state. You must set an order line item to the SentToBilling state if you want to generate billing docs for the order line item. Once an order line item is set to SentToBilling it cannot be canceled. For sales order line items, invoices are generated. For return order line items, negative invoices or credit memos are generated.

You can sync the information about an order line item of the SentToBilling state to Zuora Revenue.

You can trigger the state transition from Booked to SentToBilling through either of the following ways:

-   Update an order line item through the Update an order line item or Update order line items operation, and set the `itemState` field to `SentToBilling` .

-   Update an order line item through the Orders UI and set the Item State field set to `SentToBilling` .


If an order line item is in the `SentToBilling` state, you can update the `paymentTerm` , `invoiceTemplateId` , `sequenceSetId` , and `invoiceGroupNumber` fields.

Note:

The billTargetDate field must have a value before an order line item is set to the SentToBilling state.

See Generate invoice for order line items for a tutorial.

## Path 4: from SentToBilling to Complete

As illustrated in Path 4 of the preceding diagram , you can set an order line item to the Complete state when it is in the SentToBilling state.

The state transition from SentToBilling to Complete is used when some post-billing installation is required before an order line item is complete.

The order line item of the Complete state is locked for any edits by any user.

You can sync the information about an order line item of the Complete state to Zuora Revenue.

You can trigger the state transition from SentToBilling to Complete through either of the following ways:

-   Update an order line item through the Update an order line item or Update order line items operation, and set the `itemState` field to `Complete` .

-   Update an order line item through the Orders UI and set the Item State field to `Complete` .


## Path 5: from Executing to SentToBilling

As illustrated in Path 5 of the preceding diagram , you can set an order line item to the SentToBilling state when it is in the Executing state.

The state transition from Executing to SentToBilling can be used for fees that do not require fulfillment.

When an order line item is ready for invoicing, you can set it to the SentToBilling state. The SentToBilling state can be the terminal state and does not always move to the Complete state. You must set an order line item to the SentToBilling state if you want to generate billing docs for the order line item. Once an order line item is set to SentToBilling it cannot be canceled. For sales order line items, invoices are generated. For return order line items, negative invoices or credit memos are generated.

The order line item of the SentToBilling state is locked for any edits by any user.

You can sync the information about an order line item of the SentToBilling state to Zuora Revenue.

You can trigger the state transition from Executing to SentToBilling through either of the following ways:

-   Create an order line item through the Create an order operation and set the `itemState` field to `SentToBilling` .

-   Create an order line item through the Orders UI and set the Item State field to `SentToBilling` .

-   Update an order line item through the Update an order line item or Update order line items operation, and set the `itemState` field to `SentToBilling` .

-   Update an order line item through the Orders UI and set the Item State field to `SentToBilling` .


See Generate invoice for order line items for a tutorial.

## Path 6: from Executing to Complete

As illustrated in Path 6 of the preceding diagram , you can set an order line item to the Complete state when it is in the Executing state.

The state transition from Executing to Complete is used when fulfillment is skipped and billing is also skipped.

The order line item of the Complete state is locked for any edits by any user.

You can sync the information about an order line item of the Complete state to Zuora Revenue.

You can trigger the state transition from Executing to Complete through either of the following ways:

-   Create an order line item through the Create an order operation and set the `itemState` field to `Complete` .

-   Create an order line item through the Orders UI and set the Item State field to `Complete` .

-   Update an order line item through the Update an order line item or Update order line items operation and set the `itemState` field to `Complete` .

-   Update an order line item through the Orders UI and set the Item State field to `Complete` .


## Path 7: from Executing to Canceled

As illustrated in Path 7 of the preceding diagram , you can set an order line item to the Canceled state when it is in the Executing state.

The state transition from Executing to Canceled is used when an order or order line item is canceled while the order is in progress.

The order line item of the Canceled state is locked for any edits by any user.

You cannot sync the information about an order line item of the Canceled state to Zuora Revenue.

You can trigger the state transition from Executing to Canceled through either of the following ways:

-   Create an order line item through the Create an order operation and set the `itemState` field to `Canceled` .

-   Create an order line item through the Orders UI and set the Item State field to `Canceled` .

-   Update an order line item through the Update an order line item or Update order line items operation, and set the `itemState` field to `Canceled` .

-   Update an order line item through the Orders UI and set the Item State field to `Canceled` .


## Path 8: from Booked to Complete

As illustrated in Path 8 of the preceding diagram , you can set an order line item to the Complete state when it is in the Booked state.

The state transition from Booked to Complete is used when billing is skipped but fulfillment is not skipped: for example, a welcome package or letter is fulfilled but no billing is required.

The order line item of the Complete state is locked for any edits by any user.

You can sync the information about an order line item of the Complete state to Zuora Revenue.

You can trigger the state transition from SentToBilling to Complete through either of the following ways:

-   Update an order line item through the Update an order line item or Update order line items operation, and set the `itemState` field to `Complete` .

-   Update an order line item through the Orders UI and set the Item State field to `Complete` .
