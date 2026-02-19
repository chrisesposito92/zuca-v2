---
title: "Create a subscription through an order"
url: "https://docs.zuora.com/en/zuora-platform/user-management/multi-org/multi-org-in-zuora-billing-setup/create-a-subscription-through-an-order"
product: "zuora-platform"
scraped_at: "2026-02-19T03:25:23.980Z"
---

# Create a subscription through an order

Learn to create a subscription by ordering products visible to the customer's organizational unit.

For order/subscription creation, the products users can select are the ones the selected account can buy. That is, a user can create an order for the products that are visible to the org unit the customer account belongs to.

1.  Create a subscription by creating an order uusing the steps mentioned in [Create a subscription using the Zuora UI](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/orders-tutorials---create-subscriptions/create-a-subscription-using-the-zuora-ui).
2.  Review the order and activate the subscription.

    Note: The list of products visible are the ones that belong to the customer org unit.


Create a subscription through order for the products associated with an organization's customer account using API Create a subscription via the Create an Order API

You can use the [Create an order](https://developer.zuora.com/v1-api-reference/api/operation/POST_Order/) operation to create a subscription.

Include the following header information to specify the Org Unit for which you are trying to create an order:

Zuora-Org-Ids - Specify the org unit to create an order

-   If you specify an Org that the user does not have access to, order creation will fail.

-   If you do not set this header, the order creation will happen for the user’s default org unit.
