---
title: "Create a subscription using the Zuora UI"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/orders-tutorials---create-subscriptions/create-a-subscription-using-the-zuora-ui"
product: "zuora-billing"
scraped_at: "2025-12-24T05:22:47.700Z"
---

# Create a subscription using the Zuora UI

This task guides you through creating a subscription using the Zuora UI.

To create a subscription by creating an order in the Zuora application:

1.  Navigate to Customers > Orders . The Orders page opens.
2.  Click Create New Order at the top right. The Create New Order page opens.
3.  In the Account field, enter the name of the account that owns the order. By default, the account that owns the order will also own the subscription. If you want to set a different account as the subscription owner, you can do it in Step 6.

    Note: You can enter the account by clicking either Account Name or Account Number .

    -   If you click Account Name , type part of the account name in the Account field and the filtered accounts can be dynamically listed for your selection.

    -   If you click Account Number , type the complete account number.


4.  In the Order Date field, enter the order date you are to assign to the order.
5.  Choose what you want to do by clicking Create a New Subscription .
6.  In the Create a New Subscription area, complete the following steps: For more information, see Basic information for subscriptions , Invoice subscriptions separately , and Renew subscriptions automatically .
    1.  In the Subscription Overview section, to set another account as the subscription owner, specify the account in the Subscription Owner field. Alternatively, to set an account as invoice owner, you can specify the account details in the Invoice Owner field.
    2.  In the Terms and Conditions section, enter `12` in the Initial term and Renewal term fields.
    3.  In the Billing and Payment section, enter the appropriate details.

        Note: You can set a Currency value that can be different from the currency value set while creating the customer account. You must have the multiple currencies feature enabled to change the currency value.

    4.  In the Trigger Dates section, specify the appropriate dates in the Contract effective , Service activation , and Customer acceptance fields for the subscription. For more information, see Billing Trigger Dates .
    5.  (Optional): In the Custom Fields section, enter the reason for creating the subscription in the Change Reason field.
    6.  If you have enabled Payment Profiles , enter the Payment Method and Payment Gateway information.
7.  Click Continue .
8.  In the Products and charges area, search and locate the product to be added by performing one of the following steps:

    -   You can choose one of your recently added products by placing your cursor in the search field. If the recently added products are displayed in a drop-down list (maximum eight), choose one from the list. Note that the recently added products mean the products you selected and then clicked Add Product in the bottom right corner in your previous order actions, no matter whether your previous order actions are completed.

        ![recently added products](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/b2563c47-002b-4257-91d8-3e67af0bba10?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImIyNTYzYzQ3LTAwMmItNDI1Ny05MWQ4LTNlNjdhZjBiYmExMCIsImV4cCI6MTc2NjY0MDE2NiwianRpIjoiNDljZmVkNGY3ZTY1NGZiNDgzYjdkYjA5MjUyZTllZWQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.01kkGmVy9oeVbycCf1vHGIjBUgtDyC2fcUmHR0ZEUeU)

    -   You can choose to search by product name or by product SKU by using the drop-down list. The displayed products will dynamically change as you type in the Search field. Note that the default product and charge list displays a maximum of 30 products in the UI. After a search, a maximum of 20 products are displayed on each page of your search result.

        ![search product](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/2a1660a0-51b1-4dbf-b34a-fe4c89ae44d8?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjJhMTY2MGEwLTUxYjEtNGRiZi1iMzRhLWZlNGM4OWFlNDRkOCIsImV4cCI6MTc2NjY0MDE2NiwianRpIjoiMjAzYTBlOThjODJkNGM2MGJlN2ZjMDQ1NmEzOTYzMmUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.DBX62q5fmBvn0F_MPeXU45EdGr3sKBuTPDh7iWF81DM)


9.  To add a rate plan, click the right arrow ( > ) next to the product name to expand all its rate plans, and then select the checkbox in front of the rate plan.

    Note: You can select more than one rate plan in multiple products. To remove a rate plan from your selection, clear the checkbox in front of the rate plan. The number of the selected rate plan is also indicated in the UI.

10.  Click Add Product in the bottom right corner to continue. For charges with charge definitions, if you want your subscription to look up the charge definitions or you encountered an error page with a Re-Lookup option, see additional steps in Apply charge definition lookup to subscriptions .
11.  (Optional): Update the charges for the selected rate plan if necessary. Click the name of a charge to expand the charge details and update it. For taxation configuration, see Use tax code and set tax mode .
12.  Click Review Order . The Review Order page opens. The operations that you can perform on the subscription are listed to the right of the new subscription name.

     ![previewsubscription2](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/bee8b673-03aa-4712-a42d-b034a745d44c?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImJlZThiNjczLTAzYWEtNDcxMi1hNDJkLWIwMzRhNzQ1ZDQ0YyIsImV4cCI6MTc2NjY0MDE2NiwianRpIjoiMDBhZTNhYmZmYzhmNDA1ZjllZTljNWY4MmU3YzQ3ZDciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.wCGPG2Knhz9aPsO3TLKUxKOOYe6DSWqcXYIr6B-RPwQ)

13.  To change the subscription name, complete the following steps:
     1.  In the Associated subscriptions area, click More Order Actions and then click Edit subscription name .

         Figure 1. ![EditSubscriptionName](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/c4698639-b7b0-486d-a378-449ec7e54f76?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImM0Njk4NjM5LWI3YjAtNDg2ZC1hMzc4LTQ0OWVjN2U1NGY3NiIsImV4cCI6MTc2NjY0MDE2NiwianRpIjoiYTNjYTliODBiMWViNDIxZGEyNDAxM2U0OWRmMDc4ZDQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.6WKIFNfsizPKAHHS_Q4ATAqPVR_Ms1elLPeLQIiecWo)

     2.  In the Subscription name field, enter the subscription name and then click Save .

         ![newsubscriptionname](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/b65208bb-a75a-46d7-9456-8f9225121004?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImI2NTIwOGJiLWE3NWEtNDZkNy05NDU2LThmOTIyNTEyMTAwNCIsImV4cCI6MTc2NjY0MDE2NiwianRpIjoiZTMzNGY0YWJhZGU5NDNiNWIwMDRlYTM3Nzg5ZTZkMTciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.cjXXy_MXtnyzJ5q8HveS-NnYL_HgWZ9xV7Dk-appcRs)

14.  (Optional): To preview billing information for the subscription, click Preview Billing . Specify the preview settings and click Update Preview to see the preview invoices. After you are finished, click Done to return to the previous page.
15.  Click Activate to activate the subscription.
