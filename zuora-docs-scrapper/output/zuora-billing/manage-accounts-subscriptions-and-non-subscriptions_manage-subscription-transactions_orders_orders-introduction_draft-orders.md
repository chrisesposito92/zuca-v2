---
title: "Draft orders"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-introduction/draft-orders"
product: "zuora-billing"
scraped_at: "2025-12-24T05:21:15.606Z"
---

# Draft orders

Draft orders allow you to save and edit order configurations before finalizing them. They can be identified by their Draft status and are accessible if the Orders feature is enabled.

While creating an order, you can save your order and its configurations as a draft order for further editing. During the order creation, you can save your order as a draft order, at least after specifying an account that owns the order.

Note:

You can access this feature only if the Orders feature is enabled. If you are an existing Zuora Subscribe and Amend customer, we recommend you enable Orders Harmonization to access the Orders feature. With Orders, you can access both existing functions for subscription and billing management and the new features on Zuora Billing.

## Identifying draft orders

You can identify a draft order from its Draft status on the Orders page. You can also identify the draft order from the order number's suffix "Draft Order" on the order details page, for example, O-00000948: Draft Order.

## Use cases for draft orders

You can perform the following tasks after draft order creation:

-   Preview the draft order

-   Update the draft order and save it as an updated draft order

-   Activate the draft order to a pending order or a completed order You can activate a draft order to change it from Draft status to Pending or Completed status under the following conditions:
    Note: A subscription is not created until the draft order is activated and changed to a pending or completed order. Therefore, if you query the draft order before it is activated, subscription information is not returned.

    -   If an order is saved as a draft order with some dates unfilled like the dates unfilled for a pending order, once you activate the order, the order will change from Draft status to Pending status. For information about the dates unfilled for a pending order, see Activate a pending subscription or order.

    -   If an order has other configurations not finished rather than the preceding unfilled dates, once you activate the order, the order will change from Draft status to Completed status.

-   Cancel the draft order Canceling draft orders archives the draft orders in Cancelled status but does not delete them. You can still view the orders in Cancelled status on the Orders page and decide whether to delete them later.

-   Delete the draft order


You can also retrieve information about draft orders by Draft status in the following methods:

-   Filter draft orders on the Orders page

-   Export draft orders through the Order data source

-   Report on draft orders through the Order data source

-   Query the Order object through Data Query


## Considerations on draft orders

Draft orders cannot be imported and exported through the Orders API Loader .

Limitations when saving orders as draft orders are listed in Save an order as a draft order .
