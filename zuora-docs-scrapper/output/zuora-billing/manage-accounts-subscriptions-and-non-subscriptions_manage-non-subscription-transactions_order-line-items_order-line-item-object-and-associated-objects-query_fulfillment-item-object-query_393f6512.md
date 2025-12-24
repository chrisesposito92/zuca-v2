---
title: "SQL example for querying the Fulfillment Item object"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/order-line-item-object-and-associated-objects-query/fulfillment-item-object-querying-through-data-query/sql-example-for-querying-the-fulfillment-item-object"
product: "zuora-billing"
scraped_at: "2025-12-24T05:39:25.810Z"
---

# SQL example for querying the Fulfillment Item object

This example demonstrates how to query the Fulfillment Item object using SQL to retrieve fields such as Fulfillment Number, Quantity, State, Item Identifier, and Description.

The following query example demonstrates how to use Data Query to access the Fulfillment Item fields.

Join the Fulfillment Item to a Fulfillment.

select f.FulfillmentNumber, f.Quantity as FulfillmentQuantity, f.State as FulfillmentState, fi.ItemIdentifier, fi.Description as FulfillmentItemDescription from fulfillment f left join fulfillmentitem fi on fi.fulfillmentId = f.Id

The query result is as follows:

FulfillmentNumber, FulfillmentQuantity, FulfillmentState, ItemIdentifier, FulfillmentItemDescription "F-00001", 100.0, "SentToBilling", "12343456576876998", "Computor A"
