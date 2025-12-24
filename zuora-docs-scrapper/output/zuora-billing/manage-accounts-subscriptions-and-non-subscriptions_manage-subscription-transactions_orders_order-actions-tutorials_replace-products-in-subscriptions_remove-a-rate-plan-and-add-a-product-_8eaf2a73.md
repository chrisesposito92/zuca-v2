---
title: "Remove a rate plan and add a product rate plan using the Zuora UI"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/replace-products-in-subscriptions/remove-a-rate-plan-and-add-a-product-rate-plan-using-the-zuora-ui"
product: "zuora-billing"
scraped_at: "2025-12-24T05:23:32.596Z"
---

# Remove a rate plan and add a product rate plan using the Zuora UI

This article guides you through removing a rate plan and adding a product rate plan in a subscription using the Zuora UI.

To replace a rate plan in a subscription:

1.  Navigate to Customers > Orders . The Orders page opens.
2.  Click Create New Order at the top right. The Create New Order page opens.
3.  In the Account field, enter the name of the account that owns the subscription.

    Note: You can enter the account by clicking either Account Name or Account Number .

    -   If you click Account Name , type part of the account name in the Account field and the filtered accounts can be dynamically listed for your selection.

    -   If you click Account Number , type the exact account number.


4.  Choose what you want to do by clicking Amend Subscription .
5.  Select either the Subscription Invoiced or Subscription Owned option from the field to list the respective subscriptions.
6.  In the Select an existing subscription area, locate the target subscription to which you are to add products by using the Search field.
7.  On the target subscription line, click Select in the Action column.

    ![select-subscriptions](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/27d51686-8b9d-4a61-af52-dfcf85cf3d60?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjI3ZDUxNjg2LThiOWQtNGE2MS1hZjUyLWRmY2Y4NWNmM2Q2MCIsImV4cCI6MTc2NjY0MDIxMCwianRpIjoiODBiZjFhYTNlMzlmNDc4NmIzMjgyYzBlOGQ0NDZhMjUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.59mwcOXqVyf28NF5eos4Bs8dJgAfKv7mEo446YpsPnY)

8.  To remove the product, complete the following steps:
    1.  In the Included Products tab of the Associated subscriptions area, find the target product, and click Remove below the rate plan name. The Remove rate plan charge window opens.

        ![remove-product](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/852721a8-ea06-45c8-acca-a592a14d81da?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijg1MjcyMWE4LWVhMDYtNDVjOC1hY2NhLWE1OTJhMTRkODFkYSIsImV4cCI6MTc2NjY0MDIxMCwianRpIjoiMTUyMWUwMzIyYzhlNDQwMzg5ZmVhYjRjM2E1MmNhNmEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.ukNf4vVAzoHFqqOwqPEsn8GTCSRCPUMXxUwtzTMP3ac)

    2.  Specify appropriate dates in the Contract effective , Service activation , and Customer acceptance fields.
    3.  Click Continue . The window is closed.
9.  To add another product, complete the following steps:
    1.  At the top of the Associated subscriptions area, click Add Product , which is displayed to the right of the subscription number.
    2.  Scroll up to the top of the page, and select appropriate dates in the Contract Effective , Service Activation , and Customer Acceptance fields.
    3.  In the Products and charges area, search and locate the product to be added. You can choose to search by product name or by product SKU by using the drop-down list. The displayed products will dynamically change as you type in the Search field.

        ![SearchProduct](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/2a1660a0-51b1-4dbf-b34a-fe4c89ae44d8?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjJhMTY2MGEwLTUxYjEtNGRiZi1iMzRhLWZlNGM4OWFlNDRkOCIsImV4cCI6MTc2NjY0MDIxMCwianRpIjoiMGQ3ZmFjYTY3OGM4NDIzZDhiNzEwYjM5M2Q4NjhhNDEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.RDiomVinrDyiHKipKe_OzXa90xuDtNJ93PDWC75d6iU)

    4.  Note: You can select more than one rate plan in multiple products. To remove a rate plan from your selection, clear the checkbox in front of the rate plan. The number of the selected rate plan is also indicated in the UI.
        To add a product rate plan, click the right arrow ( > ) next to the product name to expand all its rate plans, and then select the checkbox in front of the rate plan.

        ![SelectRatePlan](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/c4d7faff-1786-463a-ae0a-3b42e043c8f1?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImM0ZDdmYWZmLTE3ODYtNDYzYS1hZTBhLTNiNDJlMDQzYzhmMSIsImV4cCI6MTc2NjY0MDIxMCwianRpIjoiZjU4NzkxYWQ2NWM0NDYyZGFlODI0OTUzYWFmMjNmOWEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.RlZlzT3ecU27PI_ywjFGHc4gxFk514UL95b9La8WEqs)

    5.  Click Add Product in the bottom right corner to continue.
10.  (Optional): Update the charges for the selected rate plan if necessary.
11.  Click Review Order to continue. The included products are all displayed for the selected subscription.

     Note: At this point, you can still click Add Product to add more rate plans to this subscription.

12.  (Optional): To preview billing information for the subscription, click Preview Billing . Specify the preview settings and click Update Preview to see the preview invoices. After you are finished, click Done to return to the previous page.
13.  For the new order to take effect, click Activate .
