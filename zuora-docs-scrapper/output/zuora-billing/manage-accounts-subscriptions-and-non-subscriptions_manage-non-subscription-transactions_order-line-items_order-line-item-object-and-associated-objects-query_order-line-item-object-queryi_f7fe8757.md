---
title: "SQL examples for querying the Order Line Item object"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/order-line-item-object-and-associated-objects-query/order-line-item-object-querying-through-data-query/sql-examples-for-querying-the-order-line-item-object"
product: "zuora-billing"
scraped_at: "2025-12-24T05:39:32.562Z"
---

# SQL examples for querying the Order Line Item object

Learn how to query the Order Line Item object using Data Query, including performing join queries with related objects like Order and Account.

The following query examples demonstrate how to use Data Query to access the Order Line Item fields.

-   Join the Order Line Item to an Order and then join the Order to another object such as Account. SELECT Account.Name, Orders.OrderNumber, OrderLineItem.ItemName, OrderLineItem.AmountPerUnit,Account.AccountNumber From Account Join Orders on Account.ID = Orders.AccountId Join OrderLineItem on Orders.Id = OrderLineItem.OrderID where Account.AccountNumber='A00000013'. The query result is as follows: Name orderNumber ItemName AmountPerUnit AccountNumber Test-Name O-00000089 Delivery Fee 15.99 A00000013

-   Query the Order Line Item by using the Order Number. SELECT oi.ItemName,oi.ItemNumber,oi.ItemState,oi.ItemType,oi.ListPricePerUnit, oi.Quantity,oi.AmountPerUnit,oi.Amount, oi.TransactionDate from OrderLineItem oi join Orders o on oi.OrderId=o.id where o.OrderNumber='O-00000091' The query result is as follows: ItemName ItemNumber ItemState ItemType ListPricePerUnit Quantity AmountPerUnit Amount TransactionDate Delivery Fee 2 Complete Fee 1 5.99 1 15.99 15.99 1/1/2021

-   Retrieve Order Line Item by using its own ID. SELECT oi.ItemName,oi.ItemNumber,oi.ItemState,oi.ItemType,oi.ListPricePerUnit, oi.Quantity,oi.AmountPerUnit,oi.Amount, oi.TransactionDate from OrderLineItem oi where oi.Id='2c92c8fb7a31c032017a32b66e554fc7' The query result is as follows: ItemName ItemNumber ItemState ItemType ListPricePerUnit Quantity AmountPerUnit Amount TransactionDate Delivery Fee 2 Complete Fee 1 5.99 1 15.99 15.99 1/1/2021
