---
title: "Order Line Items"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items"
product: "zuora-billing"
scraped_at: "2025-12-24T05:36:35.955Z"
---

# Order Line Items

This topic explains about order line items in Zuora, which include non-subscription based transactional charges like one-time fees and physical goods.

Order line items are non subscription based items created by an order, representing transactional charges such as one-time fees, physical goods, or professional service charges that are not sold as subscription services. With the Order Line Items feature enabled, customers now have the ability to launch non-subscription and unified monetization business models in Zuora, in addition to subscription business models.

Note:

The Order Line Items feature is now generally available. You need to enable the Orders or Orders Harmonization feature to access the Order Line Items feature.

## Considerations

-   The maximum number of order line items allowed in a Create an order operation is 100.
-   The maximum number of order line items allowed in a Create an order asynchronously operation is 100.
-   The maximum number of order line items allowed in an Update order line items operation is 100.
-   The maximum number of fulfillments allowed in an order line item is 100. If you need to increase the limit, contact Zuora Global Support to validate your business case.
-   The maximum number of fulfillment items allowed in a fulfillment is 100. If you need to increase the limit, contact Zuora Global Support to validate your business case.
-   Order line items support only Flat Fee and Per Unit charge models of the one-time charge type.
-   Negative values for quantity are not supported for order line items.

## What are Order Line Items?

Order Line Items are components of an Order object that represent traditional, non-subscription charges. Using the Orders API or UI, you can process charges for one-time fees, physical goods, or professional services without requiring a subscription. Once captured your Order Line Items are supported from quoting, through billing and revenue recognition.

## Benefits of using Order Line Items

Order line items provide the following benefits:

-   Create an ad-hoc one-time charge without pre-defining it in the product catalog
-   Manage non-subscription based charges directly instead of having to manage them through subscriptions
-   Apply discounts on non-subscription based charges immediately through inline discounts supported in order line items without depending on the discount charges in the product catalog
-   Set a sold-to contact for each individual non-subscription based charge to resolve the limitation that only one sold-to contact is supported under an invoice owner account
-   Manage the entire business lifecycle of a non-subscription based charge, including the sales, shipment, and possibly return of a professional service or a piece of physical goods
-   Mange the billing target dates based on the fulfillment status of physical goods or services to support near real-time billing for your business
-   Manage both your non-subscription based transactional charges and recurring charges within Zuora Billing

## Functions provided by Order Line Items

With order line items, you can use the Orders UI and API to create and use objects in the following ways to support your unified monetization business model:

-   One or more subscriptions
-   One or more order line items
-   Or a hybrid order containing both subscriptions and order line items

You can manage the entire order line item lifecycle for businesses through order line item categories and fulfillments, as follows:

-   You can create order line items of both sales and return categories to track product sales and return. Also, you can generate billing documents based on the order line items accordingly, including invoices, negative invoices, and credit memos.
-   You can create and attach fulfillments to an order line item to track the shipment or return status. You can trigger billing based on the fulfillment state and generate billing documents based on the fulfillments accordingly as well. In addition, you can create and attach fulfillment items to a fulfillment to keep track of all the assets in your system.

As shown in the diagram below, order line items are stored outside of a subscription, and therefore do not require an amendment or order action, and do not impact the subscription version.

Fulfillments are subordinate objects attached to their related order line item. Fulfillment items are subordinate objects attached to their related fulfillment.

![order-line-item-with-fulfillment](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/3c4ad968-b82a-4238-a770-4629722339bf?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjNjNGFkOTY4LWI4MmEtNDIzOC1hNzcwLTQ2Mjk3MjIzMzliZiIsImV4cCI6MTc2NjY0MDk5MywianRpIjoiYWExNDJjYjJiZGE5NGZjZWEwZDEyZWE4ZTBkOTM5YTkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.l8EMJggwwcLRqy3UO72uVPx03pPtbwc6U0-dSyAXNPw)

Even though order line items are stored outside of a subscription, order line item charges can be sent through the entire order to revenue process, including Invoicing, Payments, Collections, and Revenue.

To enable the ability to perform a series of business processes, states are introduced on Orders, Order Line Items, and Fulfillments. You can use the Order Line Items API, Fulfillments API, Orders API, and Orders UI to manage changes and state transitions. For more information, see State transitions for an order, order line item, and fulfillment .

Discounts are supported on order line items through inline discounts. See Inline discounts for order line items .

Order line items support Flexible Billing. For example, you can specify flexible billing attributes on order line items through API. If you do not specify the attribute values, they are inherited from the default or specified attribute values of the invoice owner account or billing account. The invoices are generated based on the same flexible billing attribute values of the subscriptions and order line items. Applicable billing attributes include bill-to contacts, sold-to contacts, payment terms, invoice template IDs, and sequence sets. Flexible Billing provides more billing methods. For more information, see Flexible Billing .

## Use cases supported by Order Line Items

You can create and manage order line items through the Zuora UI and API.

-   Create sales order line items
-   Add inline discounts to order line items
-   Associate order line items with new subscriptions
-   Return order line items
-   View details of an order line item
-   Update an order line item
-   Cancel an order line item
-   Add fulfillments to order line items
-   Update or cancel fulfillments
-   View details of fulfillments
-   Generate billing documents for order line items and fulfillments

## Query order line items

You can query order line items by the following ways:

-   Make the following API calls:
    -   Retrieve an order line item
    -   Retrieve an order
    -   List orders

    -   List orders of a subscription owner

    -   List orders by subscription number
    -   List orders of an invoice owner
-   Use Data Query. This is an asynchronous query and any field can be used in the WHERE clause to filter results. See Query the Order Line Item object through Data Query .
-   Use Data Source. See Order Line Item Data Source .

You can query fulfillments and fulfillment items in the following ways:

-   Make the following API calls:
    -   Retrieve a fulfillment
    -   Retrieve a fulfillment item

-   Use Data Query. This is an asynchronous query and any field can be used in the WHERE clause to filter results. See the following articles:
    -   Query the Fulfillment object through Data Query
    -   Query the Fulfillment Item object through Data Query

-   Use Data Source. See the following articles:
    -   Fulfillment Data Source
    -   Fulfillment Item Data Source

## How to get started

You need to make sure you have access to the Order Line Items feature. The Order Line Items feature is now generally available. You need to enable the Orders or Orders Harmonization feature to access the Order Line Items feature.
