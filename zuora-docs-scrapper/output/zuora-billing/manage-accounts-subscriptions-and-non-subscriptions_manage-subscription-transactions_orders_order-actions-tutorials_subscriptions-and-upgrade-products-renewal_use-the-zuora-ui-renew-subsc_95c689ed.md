---
title: "Use the Zuora UI - renew subscriptions and update products"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/subscriptions-and-upgrade-products-renewal/use-the-zuora-ui---renew-subscriptions-and-update-products"
product: "zuora-billing"
scraped_at: "2025-12-24T05:24:37.772Z"
---

# Use the Zuora UI - renew subscriptions and update products

This topic explains how to renew subscriptions and update products using the Zuora UI by creating and managing orders.

To renew a subscription and upgrade a product by creating an order in the Zuora application:

1.  Navigate to Customers > Orders . The Orders page opens.
2.  Click Create New Order at the top right. The Create New Order page opens.
3.  In the Account field, enter the name of the account that owns the subscription.

    Note: You can enter the account by clicking either Account Name or Account Number .

    -   If you click Account Name , type part of the account name in the Account field and the filtered accounts can be dynamically listed for your selection.

    -   If you click Account Number , type the complete account number.


4.  Choose what you want to do by clicking Amend Subscription .
5.  In the Select an existing subscription area, locate the target subscription to which you are to add products by using the Search field.
6.  On the target subscription line, click Select in the ACTION column.
7.  To renew the subscription, complete the following steps:
    1.  Note: The Renew Subscription option is not available for an evergreen subscription or if the renewal term is set to 0.
        In the Associated subscriptions area, click Renew Subscription , which is displayed to the right of the subscription number.

        ![renew-subscription](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/d94c0f3f-a2ab-424d-8993-065445541609?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImQ5NGMwZjNmLWEyYWItNDI0ZC04OTkzLTA2NTQ0NTU0MTYwOSIsImV4cCI6MTc2NjY0MDI3NSwianRpIjoiNzdmNDMwOGE1YmJmNGE1NmIyMzY1ZTk1NGE3MmIyMGMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.5d28tk72jCbaW8yDgcWLt4D612gkvlAFvmOh0B7HmUY)

    2.  In the Renew subscription window, specify appropriate dates in the Contract effective , Service activation , and Customer acceptance fields. For more information, see Billing Trigger Dates .
    3.  (Optional): Enter the reason for renewing the subscription in the Change Reason field.
    4.  Click Continue to close the window.
8.  To remove the product, complete the following steps:
    1.  In the Included Products tab of the Associated subscriptions area, locate the product to be removed, click Remove below the rate plan name. The Remove rate plan charge window opens.

        Figure 1. ![remove-product](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/852721a8-ea06-45c8-acca-a592a14d81da?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijg1MjcyMWE4LWVhMDYtNDVjOC1hY2NhLWE1OTJhMTRkODFkYSIsImV4cCI6MTc2NjY0MDI3NSwianRpIjoiYzg5Mjc2YWQ0NTVlNDZmZmJjZDA0NDIzZTUwY2M5OTkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.4gHySfqlz4nSBXtDpyJyKQ8pcm5ZoJlHLe-Wvmn48Ew)

    2.  Specify appropriate dates in the Contract effective , Service activation , and Customer acceptance fields for the removal.
    3.  Click Continue to close the window.
9.  To add the replacement product, complete the following steps:
    1.  In the Associated subscriptions area, click Add Product , which is displayed to the right of the subscription number.
    2.  Scroll up to the top of the page, and specify appropriate dates in the Contract Effective , Service Activation , and Customer Acceptance fields for the operation.
    3.  In the Products and charges area, search and locate the product to be added. You can choose to search by product name or by product SKU by using the drop-down list. The displayed products will dynamically change as you type in the Search field. ![SearchProduct](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/2a1660a0-51b1-4dbf-b34a-fe4c89ae44d8?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjJhMTY2MGEwLTUxYjEtNGRiZi1iMzRhLWZlNGM4OWFlNDRkOCIsImV4cCI6MTc2NjY0MDI3NSwianRpIjoiNWMxOGFmZjkxODhiNDA1ZGI0MWVkYTRhMTc3ZGQ0ZWUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.PRFqq3RQ1cCZVCjkJLxFP416ro4ZKqBQS3xqGx7C7iw)
    4.  To add a rate plan, click the right arrow ( > ) next to the product name to expand all its rate plans, and then select the checkbox in front of the rate plan to be added. ![SelectRatePlan](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/c4d7faff-1786-463a-ae0a-3b42e043c8f1?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImM0ZDdmYWZmLTE3ODYtNDYzYS1hZTBhLTNiNDJlMDQzYzhmMSIsImV4cCI6MTc2NjY0MDI3NSwianRpIjoiNDI1MjA4NTc5YjE0NGU1NmIzMGE4NDM3Njc0NWRjOTQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.EryWhGkATaLq3lsnaio5pbTBqg785sa4-gnHk4SWmtw)

        Note: You can select more than one rate plan in multiple products. To remove a rate plan from your selection, clear the checkbox in front of the rate plan. The number of the selected rate plan is also indicated in the UI.

    5.  Click Add Product in the bottom right corner to continue.
    6.  (Optional): Update the charges for the selected rate plan if necessary.
    7.  Click Review Order to continue. The included products are all displayed for the selected subscription.
10.  (Optional): To preview billing information for the subscription, click Preview Billing . Specify the preview settings and click Update Preview to see the preview invoices. After you are finished, click Done to return to the previous page.
11.  Click Activate to activate the order.
