---
title: "Use Zuora UI - view order details"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-tutorials/details-view-of-orders/use-zuora-ui---view-order-details"
product: "zuora-billing"
scraped_at: "2025-12-24T05:21:33.668Z"
---

# Use Zuora UI - view order details

This topic explains how to navigate the Zuora UI to view and manage order details, and filter orders effectively.

There are different ways to access order information in different depths. If the displayed basic order information is not enough, do one of the following:

-   View more order information by clicking the right arrow > next to the order number. Such information includes the invoice owner, order action, contract effective date, service activation date, and customer acceptance date.

-   If it is still not enough, click one of the following to access the order details, account details, subscription details, or order line items details:

    -   order number

    -   account name

    -   subscription

    -   order line items


You can view all details of an order on the order detail page.

View all details of the order - After being directed to the order details page, you can view all details of an order. This page includes the following areas:

-   Basic order information and order metrics

-   Associated Subscriptions

-   Order Line Items


Besides, you can perform management tasks through links in the preceding areas.

![Order details page 20.39.39](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/29e283dd-f69a-417e-9bdc-27b09e0037ef?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjI5ZTI4M2RkLWY2OWEtNDE3ZS05YmRjLTI3YjA5ZTAwMzdlZiIsImV4cCI6MTc2NjY0MDA5MSwianRpIjoiNDk1MzI3NTQzYjQxNDcyYzhjNjcyYmJmZjI3ZmJmNGMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.bP9ntrUEq_k-sWDbvuRanssmdMSZuWCQSgyMfFb4mFc)

View the basic order information and order metrics - In the area directly under the order number on the order details page, you can view the account name, order date, description, the user who created the order, created date for the order, and the order metrics, for example, the TCB value.

You can also click the account name to be directed to the account details page for account management.

View the associated subscriptions - You can view the order-associated subscriptions in the Associated Subscriptions area on the order details page. If you want to view removed products, you can switch the Display Removed Products toggle to the right.

You can click one of the following tabs to view product, order action, or basic subscription information:

-   Included Products — This tab displays the product name, charge name, price, discount, quantity (or number of deliveries dedicated to the Delivery Pricing charges), and total price of the order. You can perform one of the following steps to view more details:

    -   Click the product name to view product-specific information on a new open page.

    -   Click the charge name to expand the Rate plan charge details to view the details.


Note:

If there are a large number of records, you can use the Pagination and Search fields for easy access.

-   Order Actions — This tab displays order action type, rate plan name, contract effective date, service activation date, customer acceptance date, and TCB value of the subscription. In a row of this tab, you can click the left arrow > next to an order action type (for example, Create Subscription) to expand the Rate Plan and Charges table to view the details.

    Note:

    -   When you are viewing a Suspend or Resume order action, some fields are not applicable if the order action is auto-created by the Order Metrics migration, such as Resume Policy and Suspend Policy . For more information, see the suspend or resume order action in the "Get an order " operation.

    -   In one of the following situations, the charge segment details are not available, meaning that the down arrow icon will not appear next to the price, discount, or quantity of the charges in the Order:

        -   The order contains more than 50 order actions.

        -   The order associated subscriptions contain more than 100 rate plan charges.


-   Terms — This tab displays basic subscription information, including subscription overview, terms and conditions, custom fields, and quote fields. You can click the subscription owner to be directed to the account details page to manage the account.


View the order line items - You can view the order-associated order line items in the Order Line Items area on the order details page.

In this area, you can edit the order line items by performing one of the following steps:

-   Click the order line items name to be directed to the order line items details page. On this page, you can perform an edit.

-   Click the edit icon ![Image: icon-edit](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/672dd867-f1c2-44dd-a787-410626201792?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjY3MmRkODY3LWYxYzItNDRkZC1hNzg3LTQxMDYyNjIwMTc5MiIsImV4cCI6MTc2NjY0MDA5MSwianRpIjoiYmUxOWQ5OWVjZGIwNGZlZGE2Y2ZjZWZiYjdmYWE3YjAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.LUtrAeBr8J_r0rYaB6MJ5xh6YbOaTZSjUid0vssC4G0) to edit the order line items on a new open window.


You can also click the subscription name under the SUBSCRIPTION LINK column to be directed to the subscriptions list page.

To filter the order information by the status, type, order start date, and order end date, perform the following steps:

1.  Click the filter icon ![Image: icon-filter](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/9694165a-05fd-4a20-b868-8348039c350c?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijk2OTQxNjVhLTA1ZmQtNGEyMC1iODY4LTgzNDgwMzljMzUwYyIsImV4cCI6MTc2NjY0MDA5MSwianRpIjoiMjQ0N2Y4NTNiMDFmNGZlOTkzYjU3ZDNjM2U4NDExZTEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.QCJF26eg0iOJqYAZy4_8i9tKGFz7kc-xm98j4tcJyVA) at the top right.
2.  When a FILTER RESULTS window appears, do one of the following or both to narrow down your filtered results:

    -   Select the All , Completed , Pending , Draft , Executing , Scheduled , Failed , or Cancelled status to filter orders in that status.

    -   Select the New Sales , or Return type to filter a sales or return order. For more information, see New feature to support fulfillment and return of order line items .

    -   Specify a START DATE , an END DATE , or both by clicking the calendar icon ![Image: icon-open-calendar](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/57b63b6c-deb9-45f9-8a28-a88743a28cfc?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjU3YjYzYjZjLWRlYjktNDVmOS04YTI4LWE4ODc0M2EyOGNmYyIsImV4cCI6MTc2NjY0MDA5MSwianRpIjoiOWM3N2IwNDYyOTkyNDVlMmIxNzczNmQ4MjQ2YzE5YTQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.ZbFXzOszEyGBIgcY3LbCyxY35CtI69cqoeXKVwEVZYc) next to these fields to filter the last modified orders in the specified date range.


3.  Click Apply to show the filtered orders. Filtered orders and their basic information are displayed.
4.  View the expected order and its basic order information among the filtered orders.
