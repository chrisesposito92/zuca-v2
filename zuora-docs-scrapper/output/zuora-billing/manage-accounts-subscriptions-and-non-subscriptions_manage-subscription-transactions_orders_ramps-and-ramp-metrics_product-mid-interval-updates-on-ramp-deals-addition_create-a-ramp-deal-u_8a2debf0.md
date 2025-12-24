---
title: "Create a ramp deal using the Zuora application"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/ramps-and-ramp-metrics/product-mid-interval-updates-on-ramp-deals-addition/create-a-ramp-deal-using-the-zuora-application"
product: "zuora-billing"
scraped_at: "2025-12-24T05:28:15.050Z"
---

# Create a ramp deal using the Zuora application

This topic explains how to create a ramp deal by creating an order in the Zuora application, including navigating orders, creating new orders, and updating subscription details.

To create a ramp deal by creating an order in the Zuora application:

1.  Navigate to Customers > Orders . The Orders page opens.
2.  Click Create New Order at the top right. The Create New Order page opens.
3.  In the Account field, enter the name of the account that owns the subscription. By default, the account that owns the order will also own the subscription.

    Note: You can enter the account by clicking either Account Name or Account Number .

    -   If you click Account Name , type part of the account name in the Account field and the filtered accounts can be dynamically listed for your selection.

    -   If you click Account Number , type the complete account number.


4.  In the Order date field, enter the order date you are to assign to the order.
5.  Click Amend an Existing Subscription at the bottom of the page. The Create Subscription page opens.
6.  On the target subscription line, click Select in the ACTION column.

    ![SelectExistingSubscription](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/a22d77f8-9e66-4a8d-86e8-05edc3c4a478?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImEyMmQ3N2Y4LTllNjYtNGE4ZC04NmU4LTA1ZWRjM2M0YTQ3OCIsImV4cCI6MTc2NjY0MDQ5MywianRpIjoiNDNmMDEzODU5MjljNGE0Y2JiNDI3OTc5ZTQ3OTY1MzMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.svt2YZk9c_Up0vSQSAj2Ev9pnaF_jj5HfgOQ_W9uFU0)

7.  In the Included Products tab of the Associated subscriptions area, find the product to be updated, and then click Update below the rate plan name.

    ![SelectChargeToUpdate](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/69026b6e-b668-4ebb-b701-ca0ab88c6d76?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjY5MDI2YjZlLWI2NjgtNGViYi1iNzAxLWNhMGFiODhjNmQ3NiIsImV4cCI6MTc2NjY0MDQ5MywianRpIjoiMzY3MGQyYWM2ZTI4NDMxOTgwZjUzMWNjM2Y5NTJjNWIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.g6eBffPUwNCxGsdbpp-PmMQno6x6-kzNrKsHsY3iYm0)

8.  Scroll up to the top, and specify appropriate dates in the Contract Effective , Service Activation , and Customer Acceptance date fields for the operation. For more information, see Billing Trigger Dates .
9.  Select the Make this update before a future date change toggle button, as this is a price update for the second half-year in Interval 2, which is before Interval 3. In the displayed Specific update date field, enter or select the date of 2022/01/01.

    ![UpdateBeforeUpdate](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/943dde92-7cde-49cf-bc37-bac1dfc0a87a?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijk0M2RkZTkyLTdjZGUtNDljZi1iYzM3LWJhYzFkZmMwYTg3YSIsImV4cCI6MTc2NjY0MDQ5MywianRpIjoiMGE3M2M1OTAxZWU0NGJjZTg2MjJjYzdhOTFmZmM0NDMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.6xZS_CuhlfN8A9fP6pZd8wzNGuxQoDjy9AV6sLQpg3Q)

10.  In the Products and charges area, locate the charge to be updated, and then change the price to 1300.
11.  At the bottom of the page, click Continue .
12.  In the Included Products tab, the price displayed in the product and charge table is the price of the last charge segment in each charge. In this tutorial, the price of $1400 for the second half of Interval 3 is displayed in the PRICE column. You can view the price changes along the subscription term by clicking the down arrow next to the price value in the product and charge table. ![UpdateProduct_ViewChargePeriodPrice](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/0932ee63-4c46-453e-955a-92f32d5b8ed2?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjA5MzJlZTYzLTRjNDYtNDUzZS05NTVhLTkyZjMyZDViOGVkMiIsImV4cCI6MTc2NjY0MDQ5MywianRpIjoiMGI3Njk0NjJlYTMxNDQ0ZDkwNzQwMmI2M2JhMGQxZTEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.T9mlXyx6pmxmZ_4d2-RYx-HbZ1D16La9zHSc61szmtw)
13.  To view the Interval start and end dates for each Interval in the Ramp, go to the Terms tab and identify to the Ramp section.

     ![RampPeriod](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/820a6f29-f0bf-4ba0-961d-73000446dd32?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjgyMGE2ZjI5LWYwYmYtNGJhMC05NjFkLTczMDAwNDQ2ZGQzMiIsImV4cCI6MTc2NjY0MDQ5MywianRpIjoiYWY5N2QxZjVhMDExNDAyZDg3NThjMTkzOWM2NzBlNmYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.m4zmp9NuS4ynuRp5rcgd78cADei9yzcxtRq0hklXYCU)

14.  To view the Ramp Metrics for each Interval, go to the Ramp Metrics tab. ![UpdateProduct_RampMetrics](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/71734b10-0198-4eef-a523-443a6c227994?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjcxNzM0YjEwLTAxOTgtNGVlZi1hNTIzLTQ0M2E2YzIyNzk5NCIsImV4cCI6MTc2NjY0MDQ5MywianRpIjoiYTdiNWM0Y2U3NWNjNGQ3YWJlNWNlNGIyMmQ1MmEwOWEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.mqSs1vZk6-BwbqoeDZkeeglgDRlD1bLzgc4QTVujBjY)
15.  To activate the Order, click Activate .
