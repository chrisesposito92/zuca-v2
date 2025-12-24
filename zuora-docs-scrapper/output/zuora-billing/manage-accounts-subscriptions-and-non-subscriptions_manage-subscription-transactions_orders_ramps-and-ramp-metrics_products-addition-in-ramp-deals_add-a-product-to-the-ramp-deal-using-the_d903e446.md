---
title: "Add a product to the Ramp Deal using the Zuora application"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/ramps-and-ramp-metrics/products-addition-in-ramp-deals/add-a-product-to-the-ramp-deal-using-the-zuora-application"
product: "zuora-billing"
scraped_at: "2025-12-24T05:27:59.669Z"
---

# Add a product to the Ramp Deal using the Zuora application

This topic explains how to add a ramp deal by creating an order in the Zuora application.

To create a ramp deal by creating an order in the Zuora application:

1.  Navigate to Customers > Orders. The Orders page opens.
2.  Click Create New Order at the top right. The Create New Order page opens.
3.  In the Account field, enter the name of the account that owns the subscription. By default, the account that owns the order will also own the subscription.

    Note: You can enter the account by clicking either Account Name or Account Number .

    -   If you click Account Name , type part of the account name in the Account field and the filtered accounts can be dynamically listed for your selection.

    -   If you click Account Number , type the complete account number.


4.  In the Order date field, enter the order date you are to assign to the order.
5.  Click Amend an Existing Subscription at the bottom of the page. The Create Subscription page opens.
6.  On the target subscription line, click Select in the ACTION column.

    ![SelectExistingSubscription](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/a22d77f8-9e66-4a8d-86e8-05edc3c4a478?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImEyMmQ3N2Y4LTllNjYtNGE4ZC04NmU4LTA1ZWRjM2M0YTQ3OCIsImV4cCI6MTc2NjY0MDQ3OCwianRpIjoiNDg2NTYzMjI3YmNjNDhhNjkyYWZjMzlmOWI0YTJlZjIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.v1vvc7XSDLsBdsFuDN5y_fwTDZNS-S7f4HE8QxlAK1M)

7.  At the top right of the Associated subscriptions area, click Add Product .

    ![AddProduct](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/4823f818-9fa9-4477-9755-56f2696e1a58?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQ4MjNmODE4LTlmYTktNDQ3Ny05NzU1LTU2ZjI2OTZlMWE1OCIsImV4cCI6MTc2NjY0MDQ3OCwianRpIjoiNTg2ZmUyMTEwZjUzNGZiZWI5ZWJjNjNlNTgzYTM2ZjQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.28J0gyPL-LbhS5AxIFIbDsWkZonJye56qE97ck5723U)

8.  In the Products and charges area, locate the product to be added. You can choose to search by product name or by product SKU by using the drop-down list. The displayed products will dynamically change as you type in the Search field.

    ![AddProduct_ProductDropDownList](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/d8cff943-25a7-4b19-ac5f-6d7419ddba22?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImQ4Y2ZmOTQzLTI1YTctNGIxOS1hYzVmLTZkNzQxOWRkYmEyMiIsImV4cCI6MTc2NjY0MDQ3OCwianRpIjoiZjk4M2RkMWFlN2JhNDVjYzk2NzVkNWY2YjQ2ZThkMjciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.DOQoS-0NNQH-2OuP7Y6wkXcYweqLYaWrzzVcaKDaAnM)

9.  To add a rate plan, click the right arrow ( > ) next to the product name to expand all its rate plans, and then select the checkbox in front of the rate plan. In this tutorial, select Rate Plan 3.

    ![AddProduct_SelectRatePlan](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/f543b9b9-79ec-486a-964c-e7c19f19404f?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImY1NDNiOWI5LTc5ZWMtNDg2YS05NjRjLWU3YzE5ZjE5NDA0ZiIsImV4cCI6MTc2NjY0MDQ3OCwianRpIjoiZjY1OTA1ZTZhZmE0NGU0Yzg4ZjJmMDJjNjA4YTgzNzUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.0x65Ilju_Z-snuFReRd8qqi6G7PIyRbCii-RmTnciLI)

    Note: You can select more than one rate plans in multiple products. To remove a rate plan from your selection, clear the checkbox in front of the rate plan. The number of the selected rate plan is also indicated in the UI.

10.  Click Add Product in the bottom right corner to continue.
11.  In the Trigger Dates area, specify appropriate dates in the Contract Effective, Service Activation, and Customer Acceptance date fields for the operation. In this tutorial, you can click the drop-down list icon next to the contractive effective date and directly select the Interval 3 start date: 7/1/2022. The service activation and customer acceptance dates will be updated to the same date automatically.

     ![AddProduct_IntervalDatePicker](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/33f9799e-aaeb-4e46-afbc-d59fd134eaef?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjMzZjk3OTllLWFhZWItNGU0Ni1hZmJjLWQ1OWZkMTM0ZWFlZiIsImV4cCI6MTc2NjY0MDQ3OCwianRpIjoiNDM1YjU1N2EzZjc1NDYzMjk4YzcxNzRiOTg2ZTllNzkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.bjok9T9ZcdYQ2o6LuyEXukG5dTZxpvNIeT--2ASCtOk)

12.  (Optional): Update the charges for the selected rate plan if necessary. In this tutorial, we will use the default charge pricing in the annual per unit charge in Rate Plan 3: the price of $30/each and the quantity of 200.
13.  Click Review Order to continue. The included products are all displayed for the selected subscription.
14.  In the Included Products tab, you can view the price or quantity changes in all the Intervals by clicking the down arrow next to a value in the product and charge table.

     ![Allproductsallquantity](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/abad1ed8-8b64-47e0-bdb8-63bbfa7ba0b5?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImFiYWQxZWQ4LThiNjQtNDdlMC1iZGI4LTYzYmJmYTdiYTBiNSIsImV4cCI6MTc2NjY0MDQ3OCwianRpIjoiZGNhM2RhMTZhOGRmNDc4MDljNzA4YmJiODU4YjMyYjMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.BxHvQ03xdhCS1Ka7G11XpWt_W8boKPGLcwO5-2-OHTw)

     Alternatively, you can view the charge information in each Interval by selecting the Interval you want to view in the drop-down menu at the top right of the product and charge table.

     ![AddProduct_IntervalView](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/d685bafd-7707-4e75-8c1f-409b59cb5f81?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImQ2ODViYWZkLTc3MDctNGU3NS04YzFmLTQwOWI1OWNiNWY4MSIsImV4cCI6MTc2NjY0MDQ3OCwianRpIjoiMWViMDYxMjBlYmEzNGY1YWI1YzAzZjk3M2E4MTFlNTgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.UNHZY-ijXKM7SLLoZOxnjumqeAZHYvxEqdA25uFcky0)

15.  To view the Interval start and end dates for each Interval in the Ramp, go to the Terms tab and identify to the Ramp section.

     ![RampPeriod](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/820a6f29-f0bf-4ba0-961d-73000446dd32?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjgyMGE2ZjI5LWYwYmYtNGJhMC05NjFkLTczMDAwNDQ2ZGQzMiIsImV4cCI6MTc2NjY0MDQ3OCwianRpIjoiNGNlMWI4YmVjYTcwNDk5Y2JmMzQxZTkyOGI0MmRiNmQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.KxIUA0FVdPR_A_vUqAI1r7Al9TckHdmYjbV8XsVjLGc)

16.  To view the Ramp Metrics for each Interval, go to the Ramp Metrics tab.

     ![AddProduct_RampMetrics](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/8e2d2d2c-e2d6-46db-afc0-727c27ab90f4?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjhlMmQyZDJjLWUyZDYtNDZkYi1hZmMwLTcyN2MyN2FiOTBmNCIsImV4cCI6MTc2NjY0MDQ3OCwianRpIjoiMTJhZWUyMGMxYWJkNDdiMTljMDBhYjg4NWQ3MDE4YjIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.6q1b1IEND5Zrd4qAxZlsqcgYQ6L_qvt6jnamOV5uMm0)

17.  To activate the order, click Activate.
