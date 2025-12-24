---
title: "Use the Zuora application - renew subscriptions"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/subscriptions-renewal/use-the-zuora-application---renew-subscriptions"
product: "zuora-billing"
scraped_at: "2025-12-24T05:24:29.793Z"
---

# Use the Zuora application - renew subscriptions

This article explains how to renew a subscription by creating an order in the Zuora application.

To renew a subscription by creating an order in the Zuora application:

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

    ![select-subscription](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/27d51686-8b9d-4a61-af52-dfcf85cf3d60?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjI3ZDUxNjg2LThiOWQtNGE2MS1hZjUyLWRmY2Y4NWNmM2Q2MCIsImV4cCI6MTc2NjY0MDI2OCwianRpIjoiODlhMGFiNDNkMjYxNGQzYzlkMjU3MzFkMDVkMDVkM2UiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.V5e7lD57X4OAICF97h_T8rIqaQLlrdzrZ_us37uATHg)

8.  In the Associated subscriptions area, click Renew Subscription , which is displayed to the right of the subscription number.

    ![renew-subscription](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/9f7349ae-d13a-4e5d-b50b-38d6da12ece1?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjlmNzM0OWFlLWQxM2EtNGU1ZC1iNTBiLTM4ZDZkYTEyZWNlMSIsImV4cCI6MTc2NjY0MDI2OCwianRpIjoiNTBhMzVmMDJkNzc0NDFkMGIxNzg4ZGQ1ZGMxNmIxNTMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.hf4G02PgrAg9wstj5AKoJNk9prbayODQH6j_Ajfky04)

    Note: The Renew Subscription option is not available for an evergreen subscription or if the renewal term is set to 0.

9.  In the Renew subscription window, specify appropriate dates in the Contract effective, Service activation , and Customer acceptance fields. For more information, see Billing Trigger Dates .

    Note: If the subscription has a ramp, the system automatically carries over the ramp definition to the renewal term. If you want to skip this behavior and manually manage the ramp in the renewal term, submit a request at Zuora Global Support .

10.  Click Continue to close the window and review the order.
11.  Click Activate to activate the order.
