---
title: "Create an active subscription with a pending charge from the Zuora UI"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/pending-subscription-processing/active-subscription-creation-with-pending-charges/create-an-active-subscription-with-a-pending-charge-from-the-zuora-ui"
product: "zuora-billing"
scraped_at: "2025-12-24T05:30:25.976Z"
---

# Create an active subscription with a pending charge from the Zuora UI

This topic explains how to create an active subscription with a pending charge using the Zuora UI by following a series of detailed steps.

To create an active subscription with a pending charge, perform the following steps:

1.  Navigate to Customers > Orders in the left navigation menu.
2.  Click Create New Order . The Create New Order page opens.
3.  Specify the order details:

    -   In the Account field, specify the customer account that owns the order.

    -   In the Order Date field, specify the date when the order is signed.

    -   Select the Create "completed" order with pending charges checkbox.


4.  In the Associated Subscriptions section, click Create Subscription. The Create Subscription page opens.
5.  Specify the subscription details, such as subscription term and billing information.
6.  Click Continue .
7.  In the Products and Charges section, select the product rate plan you want to add to the subscription, and then click Add Product .
8.  Update the rate plan charge settings:
    1.  Click the charge name to expand the charge details.
    2.  Scroll to the Timing and frequency of charge section.
    3.  From the Trigger Condition list, select Upon a specific date .
    4.  In the Estimated Start Date field, enter the estimated date when the charge will start.
    5.  From the End Date list, select an option for calculating the charge end date. Zuora uses this value to calculate the estimated end date when the charge is in pending status.
    6.  Click Review Order . On the preview page, PENDING next to the charge name indicates the charge will be in pending status when the subscription is created.
9.  Click Activate .

When the order and subscription are created successfully, the order is in Completed status and the subscription is in Active status.
