---
title: "State transitions for order line item with fulfillments"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/state-transitions-for-order-line-items-fulfillments-and-orders/state-transitions-for-order-line-item-with-fulfillments"
product: "zuora-billing"
scraped_at: "2025-12-24T05:36:46.278Z"
---

# State transitions for order line item with fulfillments

This topic explains the state transitions for order line items with fulfillments, detailing the paths from Executing to Booked, Complete, and Canceled states, and the conditions under which these transitions occur.

When the billing rule of an order line item is configured as `Trigger As Fulfillment Occurs` , the order line item can be processed with fulfillments. The state transitions of an order line item with fulfillments are as shown in the following diagram:

![OliState_WithFulfillment](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/cc68bbaa-0df4-451e-b95a-dab4ba6d8991?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImNjNjhiYmFhLTBkZjQtNDUxZS1iOTVhLWRhYjRiYTZkODk5MSIsImV4cCI6MTc2NjY0MTAwNCwianRpIjoiMmYwMDM0MDVkZjEzNGI4MTg5OTJmNjQwN2MzZTg4YzkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.Yx2lte8W3TAZKNJWHzX7Boxic5aK8ZFvxPOCTXvGkSc)

## Path 1: the default state Executing

As illustrated in Path 1 of the preceding diagram , when an order line item is created, its default state is Executing, unless you directly set the state of an order line item to another state through the Orders UI or API.

The Executing state is used to represent standard processing that an order line item may go through such as provisioning or manual tasks. These lower-level descriptions can be captured through custom fields or status.

An order line item of the Executing state is not ready yet for being sent to fulfillment. When an order line item is in the Executing state, you can still update certain fields of this order line item, such as the price or quantity. Note that the fields you can update for a sales order line item are different than those for a return order line item. See the field descriptions of the Update an order line item operation to check the fields that you can update for an order line item of either category.

Your ERP system integrated with Zuora Billing can also update the fields on an order line item of the Executing state.

You cannot sync the information about an order line item of the Executing state to Zuora Revenue.

## Path 2: from Executing to Booked

As illustrated in Path 2 of the preceding diagram , you can set an order line item to the Booked state when it is in the Executing state.

When an order line item is ready for fulfillment and revenue integration, you can set it to the Booked state.

You can trigger the state transition from Executing to Booked through either of the following ways:

-   Create an order line item through the Create an order operation and set the `itemState` field to `Booked` .

-   Create an order line item through the Orders UI and set the Item State field to `Booked` .

-   Update an order line item through the Update an order line item or Update order line items operation, and set the `itemState` field set to `Booked` .

-   Update an order line item through the Orders UI and set the Item State field to `Booked` .


If an order line item is in the `Booked` state, you can update the `paymentTerm` , `invoiceTemplateId` , `sequenceSetId` , `invoiceGroupNumber` , and `billTargetDate` fields.

## Path 3: from Booked to Complete

As illustrated in Path 3 of the preceding diagram , when all fulfillments attached to an order line item are completed, the system will automatically move the Booked state of an order line item to the Complete state. This state transition cannot be performed by any user. Note that a fulfillment is treated as completed when it is in the SentToBilling or Complete state.

The order line item of the Complete state is locked for any edits by any user.

You can sync the information about an order line item of the Complete state to Zuora Revenue.

## Path 4: from Executing to Canceled

As illustrated in Path 5 of the preceding diagram , you can set an order line item to the Canceled state when it is in the Executing state.

The state transition from Executing to Canceled is used when an order or order line item is canceled while the order is in progress.

The order line item of the Canceled state is locked for any edits by any user.

You cannot sync the information about an order line item of the Canceled state to Zuora Revenue.

You can trigger the state transition from Executing to Canceled through either of the following ways:

-   Create an order line item through the Create an order operation and set the `itemState` field to `Canceled` .

-   Create an order line item through the Orders UI and set the Item State field to `Canceled` .

-   Update an order line item through the Update an order line item or Update order line items operation, and set the `itemState` field to `Canceled` .

-   Update an order line item through the Orders UI and set the Item State field to `Canceled` .
