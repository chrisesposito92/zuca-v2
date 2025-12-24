---
title: "Add a product rate plan using the Zuora UI"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/add-products-to-subscriptions/add-a-product-rate-plan-using-the-zuora-ui"
product: "zuora-billing"
scraped_at: "2025-12-24T05:23:00.830Z"
---

# Add a product rate plan using the Zuora UI

This topic explains how to add a product rate plan to a subscription using the Zuora UI by creating an order.

To add a product to a subscription by creating an order in the Zuora application:

1.  Navigate to Customers > Orders . The Orders page opens.
2.  Click Create New Order at the top right. The Create New Order page opens.
3.  In the Account field, enter the name of the account that owns the subscription. By default, the account that owns the order will also own the subscription.

    Note: You can enter the account by clicking either Account Name or Account Number .

    -   If you click Account Name , type part of the account name in the Account field and the filtered accounts can be dynamically listed for your selection.

    -   If you click Account Number , type the complete account number.


4.  In the Order Date field, enter the order date you are to assign to the order.
5.  Choose what you want to do by clicking Amend Subscription .
6.  Select either the Subscription Invoiced or Subscription Owned option from the field to list the respective subscriptions.
7.  In the Select an existing subscription area, locate the target subscription to which you are to add products by using the Search field.
8.  On the target subscription line, click Select in the ACTION column.

    ![SubscriptionorInvoiced](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/5d35ff96-652f-4c79-a318-751333493abf?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjVkMzVmZjk2LTY1MmYtNGM3OS1hMzE4LTc1MTMzMzQ5M2FiZiIsImV4cCI6MTc2NjY0MDE3OCwianRpIjoiZjE0ZjVmYjdhMmNkNGY5Mzg5M2EzZDk4MWYxZjJlNzAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.a-KuLONTtg79ZTrpss0FK7MT5vu5G-xZzPvMCUh5XNQ)

9.  In the Associated subscriptions area, click Add Product .

    ![add-product-2020](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/ca287e8b-6d6f-46d4-af56-faca8936d292?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImNhMjg3ZThiLTZkNmYtNDZkNC1hZjU2LWZhY2E4OTM2ZDI5MiIsImV4cCI6MTc2NjY0MDE3OCwianRpIjoiNTIyNzEzMWIzNGE2NGJmNWEwMmVmMzJmNDgxYjYzYjQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.4JKLCews22IwjF-VuyBJITf6KZhmxo4WI12eYwWCOGI)

    Note: The operations that you can perform on the selected subscription are listed to the right of the subscription number. To see other available operations, click More Order Actions .

10.  On the Trigger dates line, specify appropriate dates for the following fields. For more information, see Billing Trigger Dates .

     -   Contract effective

     -   Service activation

     -   Customer acceptance


11.  (Optional): Enter the reason for adding a product in the Change Reason field.
12.  In the Products and charges area, search and locate the product to be added by performing one of the following steps:

     -   You can choose one of your recently added products by placing your cursor in the search field. If the recently added products are displayed in a drop-down list (maximum eight), choose one from the list. Note that the recently added products mean the products you selected and then clicked Add Product in the bottom right corner in your previous order actions, no matter whether your previous order actions are completed. ![Recently added products](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/413233ba-f1f2-4d36-9986-e67ec4f17e23?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQxMzIzM2JhLWYxZjItNGQzNi05OTg2LWU2N2VjNGYxN2UyMyIsImV4cCI6MTc2NjY0MDE3OCwianRpIjoiZjQyYTg2ZTU5MWRkNDc5M2JhZDUyNWI4ZDUzOGRjNmQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.RVo8BFvD60Y_Uvscy5JbEpIbIqRQ1B0DYzabJG86uLY)

     -   You can choose to search by product name or by product SKU by using the drop-down list. The displayed products will dynamically change as you type in the Search field. Note that the default product and charge list displays a maximum of 30 products in the UI. After a search, a maximum of 20 products are displayed on each page of your search result.

         ![SearchProduct](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/1818895a-d4bb-4951-a2dd-79049ed4b976?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjE4MTg4OTVhLWQ0YmItNDk1MS1hMmRkLTc5MDQ5ZWQ0Yjk3NiIsImV4cCI6MTc2NjY0MDE3OCwianRpIjoiN2Y4MDQxYWVmZjM5NDBmYWI3ZjAyMGRjODA0YTdkZTciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.5IglOSeTdj-CMsGekAaZjdx5EYOUj7HZX4DPDhVJJ2U)


13.  To add a rate plan, click the right arrow ( > ) next to the product name to expand all its rate plans, and then select the checkbox in front of the rate plan.

     ![SelectRatePlan](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/dd0f4906-08df-46e6-b63d-e1b0a33efd03?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImRkMGY0OTA2LTA4ZGYtNDZlNi1iNjNkLWUxYjBhMzNlZmQwMyIsImV4cCI6MTc2NjY0MDE3OCwianRpIjoiZmMyOThlNjFkZDk0NDIwM2IyOTdlM2ZiZTE5MjU2NTIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.jH30dtN89I0qIL9aZMZSNfcJKtQU3nuQN5j9HAErVAQ)

     Note: You can select more than one rate plan in multiple products. To remove a rate plan from your selection, clear the checkbox in front of the rate plan. The number of the selected rate plan is also indicated in the UI.

14.  Click Add Product in the bottom right corner to continue. For charges with charge definitions, if you want your subscription to look up the charge definitions or you encountered an error page with a Re-Lookup option, see additional steps in Apply charge definition lookup to subscriptions .
15.  (Optional): Update the charges for the selected rate plan if necessary. For taxation configuration, see Use tax code and set tax mode .
16.  Click Review Order to continue. The included products are all displayed for the selected subscription.

     Note: At this point, you can still click Add Product to add more rate plans to this subscription.

17.  (Optional): To preview billing information for the subscription, click Preview Billing . Specify the preview settings and click Update Preview to see the preview invoices. After you are finished, click Done to return to the previous page.
18.  For the new order to take effect, click Activate .
