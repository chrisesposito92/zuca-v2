---
title: "Use the Zuora UI - suspend subscriptions"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/subscriptions-suspension/use-the-zuora-ui---suspend-subscriptions"
product: "zuora-billing"
scraped_at: "2025-12-24T05:24:14.885Z"
---

# Use the Zuora UI - suspend subscriptions

This topic explains how to suspend subscriptions using the Zuora UI by following a series of steps, including navigating to the Orders page, creating a new order, and specifying suspension details.

To suspend a subscription, complete the following steps:

1.  Navigate to Customers > Orders . The Orders page opens.
2.  Click Create New Order at the top right. The Create New Order page opens.
3.  In the Account field, enter the name of the account that owns the subscription.

    Note: You can enter the account by clicking either Account Name or Account Number .

    -   If you click Account Name , type part of the account name in the Account field and the filtered accounts can be dynamically listed for your selection.

    -   If you click Account Number , type the complete account number.


4.  Choose what you want to do by clicking Amend Subscription .
5.  Select either the Subscription Invoiced or Subscription Owned option from the field to list the respective subscriptions.
6.  In the Select an existing subscription area, locate the target subscription to which you are to add products by using the Search field.
7.  On the target subscription line, click Select in the Action column.

    ![select-subscriptions](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/27d51686-8b9d-4a61-af52-dfcf85cf3d60?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjI3ZDUxNjg2LThiOWQtNGE2MS1hZjUyLWRmY2Y4NWNmM2Q2MCIsImV4cCI6MTc2NjY0MDI1MywianRpIjoiMmE3OWIxY2I3MmExNDljNGJkZTZlYTljZDkwZDI4ZDMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.28KRBUgxfHYVCMWaZTr9aisCuziRnQx1p7hkfo0-dkw)

8.  In the Associated subscriptions area, the operations that you can perform on the selected subscription are listed to the right of the subscription number. Click More Order Actions to expand the list and then click Suspend . The Suspend subscription window is displayed.

    Figure 1. ![suspend-subscription-2020](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/78a12595-d5bf-4244-8c9c-07374a3ad9a1?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijc4YTEyNTk1LWQ1YmYtNDI0NC04YzljLTA3Mzc0YTNhZDlhMSIsImV4cCI6MTc2NjY0MDI1MywianRpIjoiZGViNWE0YTc5ZWI5NGZkMGFiNjcxOTFiMzY3MjI3YzMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9._jSshxEfh8pk70rVR-81V91xjpypctTE452hDr3GSy4)

9.  In the Trigger Dates section, specify trigger dates for the suspend operation. For more information, see Billing Trigger Dates .
10.  In the Suspend On section, specify when the subscription is to be suspended. For more information, see Suspend Date .
11.  (Optional): In the Additional Information section, specify the order field values as necessary. For example, enter the reason for suspending the subscription in the Change Reason field.
12.  For the suspended subscription to be automatically resumed later, toggle the Auto Resume Enabled switch to display the area for you to specify the resume information.

     -   In the Resume On section, specify when the subscription is to be resumed. For more information, see Resume Date .

     -   To extend the subscription term by the length of time the suspension is in effect, select the Extend the current term by the number of days suspended checkbox in the Additional Information section. Optionally, enter the reason for resuming the subscription in the Change Reason field.


13.  Click Continue . The Suspend subscription window is closed.
14.  Click Activate to activate the order.
