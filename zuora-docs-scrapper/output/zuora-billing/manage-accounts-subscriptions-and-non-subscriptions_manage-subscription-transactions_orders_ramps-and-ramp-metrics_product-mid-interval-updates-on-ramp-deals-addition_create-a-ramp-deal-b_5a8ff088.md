---
title: "Create a ramp deal by creating an order using the Zuora application"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/ramps-and-ramp-metrics/product-mid-interval-updates-on-ramp-deals-addition/create-a-ramp-deal-by-creating-an-order-using-the-zuora-application"
product: "zuora-billing"
scraped_at: "2026-02-19T03:12:13.306Z"
---

# Create a ramp deal by creating an order using the Zuora application

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

    ![SelectExistingSubscription](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/a22d77f8-9e66-4a8d-86e8-05edc3c4a478?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImEyMmQ3N2Y4LTllNjYtNGE4ZC04NmU4LTA1ZWRjM2M0YTQ3OCIsImV4cCI6MTc3MTU1NzEyOCwianRpIjoiMmJiNjI1OTE1ZGFmNGI4NWEwMzZmNjA2YjJmZDY3MjYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.6Ec4QFIyuSSJCAZvTLLYhTuDU9PotzbDRBjqPHZEj3M)

7.  In the Included Products tab of the Associated subscriptions area, find the product to be updated, and then click Update below the rate plan name.

    ![SelectChargeToUpdate](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/69026b6e-b668-4ebb-b701-ca0ab88c6d76?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjY5MDI2YjZlLWI2NjgtNGViYi1iNzAxLWNhMGFiODhjNmQ3NiIsImV4cCI6MTc3MTU1NzEyOCwianRpIjoiN2U3ZTNmYWUzNWExNGM3ZTgxZDFiN2I3ZDAzY2E3NTkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.y6-8O_ZWetJSw6oTkVLkbVTkehpaM-C5_c78qI-81lM)

8.  Scroll up to the top, and specify appropriate dates in the Contract Effective , Service Activation , and Customer Acceptance date fields for the operation. For more information, see Billing Trigger Dates .
9.  Select the Make this update before a future date change toggle button, as this is a price update for the second half-year in Interval 2, which is before Interval 3. In the displayed Specific update date field, enter or select the date of 2022/01/01.

    ![UpdateBeforeUpdate](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/943dde92-7cde-49cf-bc37-bac1dfc0a87a?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijk0M2RkZTkyLTdjZGUtNDljZi1iYzM3LWJhYzFkZmMwYTg3YSIsImV4cCI6MTc3MTU1NzEyOCwianRpIjoiYWVhNDA0MGQ1NTE0NGNkNzk2NGU0ZjZlMDM2YWVlMTYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.Ykqx71ePHTNTe1taszpx7RE3WS_5-umwTc-KradLxuE)

10.  In the Products and charges area, locate the charge to be updated, and then change the price to 1300.
11.  At the bottom of the page, click Continue .
12.  In the Included Products tab, the price displayed in the product and charge table is the price of the last charge segment in each charge. In this tutorial, the price of $1400 for the second half of Interval 3 is displayed in the PRICE column. You can view the price changes along the subscription term by clicking the down arrow next to the price value in the product and charge table. ![UpdateProduct_ViewChargePeriodPrice](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/0932ee63-4c46-453e-955a-92f32d5b8ed2?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjA5MzJlZTYzLTRjNDYtNDUzZS05NTVhLTkyZjMyZDViOGVkMiIsImV4cCI6MTc3MTU1NzEyOCwianRpIjoiMWIyNGM3OTA5MjVkNDQ4NjlhNTJlNDJhMGNkZjY2ODAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.8uhWeZo5EGKXXOTB5ytifjS58QAdCzrpJyt0f9tZjXQ)
13.  To view the Interval start and end dates for each Interval in the Ramp, go to the Terms tab and identify to the Ramp section.

     ![RampPeriod](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/820a6f29-f0bf-4ba0-961d-73000446dd32?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjgyMGE2ZjI5LWYwYmYtNGJhMC05NjFkLTczMDAwNDQ2ZGQzMiIsImV4cCI6MTc3MTU1NzEyOCwianRpIjoiMzZjMjg0NGQ2ZDcyNDVkZWFhOWQyOTM1MGNlMzMwYzQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.5ZRijBnM_zW42i4lv4EcIh8K3LLv215KkCEEzTb9Y2A)

14.  To view the Ramp Metrics for each Interval, go to the Ramp Metrics tab. ![UpdateProduct_RampMetrics](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/71734b10-0198-4eef-a523-443a6c227994?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjcxNzM0YjEwLTAxOTgtNGVlZi1hNTIzLTQ0M2E2YzIyNzk5NCIsImV4cCI6MTc3MTU1NzEyOCwianRpIjoiNDgwMjc4OTlkZmFhNGNlNjk2ODdlMTU0YTA4NmIyZDEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.0JGRiJqLyoXcU-xy84EkpLcuGyx7P7GC4xpNmStELAM)
15.  To activate the Order, click Activate .
