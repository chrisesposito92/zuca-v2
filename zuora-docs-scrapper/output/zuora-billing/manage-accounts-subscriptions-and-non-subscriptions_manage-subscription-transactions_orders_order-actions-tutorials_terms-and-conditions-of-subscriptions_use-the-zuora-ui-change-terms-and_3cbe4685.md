---
title: "Use the Zuora UI - change terms and conditions"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/terms-and-conditions-of-subscriptions/use-the-zuora-ui---change-terms-and-conditions"
product: "zuora-billing"
scraped_at: "2025-12-24T05:23:54.239Z"
---

# Use the Zuora UI - change terms and conditions

This topic explains how to change the terms and conditions of a subscription using the Zuora UI, including navigating orders, creating new orders, and updating subscription details.

To change the terms and conditions of a subscription:

1.  Navigate to Customers > Orders . The Orders page opens.
2.  Click Create New Order at the top right. The Create New Order page opens.
3.  In the Account field, enter the name of the account that owns the subscription. By default, the account that owns the order will also own the subscription.

    Note: You can enter the account by clicking either Account Name or Account Number .

    -   If you click Account Name , type part of the account name in the Account field and the filtered accounts can be dynamically listed for your selection.

    -   If you click Account Number , type the complete account number.


4.  Choose what you want to do by clicking Amend Subscription .
5.  Select either the Subscription Invoiced or Subscription Owned option from the field to list the respective subscriptions.
6.  In the Select an existing subscription area, locate the target subscription to which you are to add products by using the Search field.
7.  On the target subscription line, click Select in the ACTION column.

    ![SelectExistingSubscription](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/27d51686-8b9d-4a61-af52-dfcf85cf3d60?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjI3ZDUxNjg2LThiOWQtNGE2MS1hZjUyLWRmY2Y4NWNmM2Q2MCIsImV4cCI6MTc2NjY0MDIzMywianRpIjoiMWJjNzIwMTg4ZjFjNDEwYTljM2UwNWM2MWNmNjE3NGUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.49amj4QPu5FL7EQwBc_WmO3eVgaRuiT7XY-iORsQGAY)

8.  In the Associated subscriptions area, click Update Terms and Conditions .
9.  If you have enabled Payment Profiles , enter the Payment Method and Payment Gateway information.
10.  In the Update terms and conditions window, complete the following steps:
     1.  On the Trigger Date s line, specify appropriate dates in the Contract Effective , Service Activation , and Customer Acceptance fields for the operation. For more information, see Billing Trigger Dates .
     2.  In the Initial term field, set the value to 20.
     3.  In the Renewal term field, set the value to 6.
     4.  Click Continue and close the window. An order overview is displayed.
11.  (Optional): In the Custom Fields area, enter the reason for updating terms and conditions in the Change Reason field.
12.  (Optional): To preview billing information for the subscription, click Preview Billing . Specify the preview settings and click Update Preview to see the preview invoices. After you are finished, click Done to return to the previous page.
13.  Click Activate to activate the order.
