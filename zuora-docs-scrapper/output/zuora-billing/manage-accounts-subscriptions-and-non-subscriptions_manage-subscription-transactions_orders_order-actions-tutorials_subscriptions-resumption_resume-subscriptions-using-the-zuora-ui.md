---
title: "Resume subscriptions using the Zuora UI"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/subscriptions-resumption/resume-subscriptions-using-the-zuora-ui"
product: "zuora-billing"
scraped_at: "2025-12-24T05:24:22.992Z"
---

# Resume subscriptions using the Zuora UI

This topic explains how to suspend and resume subscriptions using the Zuora UI.

To suspend a subscription:

1.  Navigate to Customers > Orders . The Orders page opens.
2.  Click Create New Order at the top right. The Create New Order page opens.
3.  In the Account field, enter the name of the account that owns the subscription.

    Note: You can enter the account by clicking either Account Name or Account Number .

    -   If you click Account Name , type part of the account name in the Account field and the filtered accounts can be dynamically listed for your selection.

    -   If you click Account Number , type the complete account number.


4.  Choose what you want to do by clicking Amend Subscription .
5.  Select either the Subscription Invoiced or Subscription Owned option from the field to list the respective subscriptions.
6.  In the Select an existing subscription area, locate the target subscription to which you are to add products by using the Search field.
7.  On the target subscription line, click Select in the ACTION column. ![select-suspended-sub-2020](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/b5d00de0-a616-4c61-add6-09f205b0696b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImI1ZDAwZGUwLWE2MTYtNGM2MS1hZGQ2LTA5ZjIwNWIwNjk2YiIsImV4cCI6MTc2NjY0MDI2MCwianRpIjoiZTI3NTU0NjNiNjMwNDNiMThmMzNiMDgwMjgwZjg0MDYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.Q8D1gUPEz8sI8nQ-VrVdX85bX2ZUXzpTriRQYMc_7b0)
8.  In the Associated subscriptions area, the operations that you can perform on the selected subscription are listed to the right of the subscription number. Click More Order Actions to expand the list and then click Resume . The Resume Subscription window is displayed. ![resume-subscription-2020](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/686b0c5c-ca49-483a-9b6d-d747cf882005?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjY4NmIwYzVjLWNhNDktNDgzYS05YjZkLWQ3NDdjZjg4MjAwNSIsImV4cCI6MTc2NjY0MDI2MCwianRpIjoiNjNjMmRhMjNhZTRlNDkxODgwZGQ1MGRkN2ZjMjFmNTUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.1eQnoaYxUUxODqcm9Icfl3He0OSJ5_omLlvIpru2BSE)
9.  In the Trigger Dates section, specify the trigger dates for the operation. For more information, see Billing Trigger Dates .
10.  In the Resume Policy field, select the appropriate policy for the subscription to be resumed. For more information, see Resume Date .
11.  (Optional): To extend the subscription term by the length of time the suspension is in effect, select the Extend the current term by the number of days suspended checkbox.
12.  (Optional): Enter the reason for resuming the subscription in the Change Reason field.
13.  Click Continue . The Resume Subscription window is closed.
14.  Click Activate to activate the order.
