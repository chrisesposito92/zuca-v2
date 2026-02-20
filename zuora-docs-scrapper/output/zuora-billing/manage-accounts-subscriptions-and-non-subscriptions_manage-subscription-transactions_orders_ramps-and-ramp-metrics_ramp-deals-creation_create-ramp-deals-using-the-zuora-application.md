---
title: "Create Ramp Deals using the Zuora application"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/ramps-and-ramp-metrics/ramp-deals-creation/create-ramp-deals-using-the-zuora-application"
product: "zuora-billing"
scraped_at: "2026-02-20T17:31:28.066Z"
---

# Create Ramp Deals using the Zuora application

This topic explains how to create ramp deals in the Zuora application by configuring settings, creating orders, and managing subscription intervals.

To create a ramp deal by creating an order in the Zuora application:

1.  Go to Billing Settings > Default Subscription and Order Settings in the Zuora Billing UI. Make sure the Enable Ramp for Orders? setting is set to Yes . Skip this step if the setting has already been set to Yes .
2.  Navigate to Customers > Orders . The Orders page opens.
3.  Click Create New Order at the top right. The Create New Order page opens.
4.  Enter the name of the account that owns the subscription. By default, the account that owns the order will also own the subscription in the Account field.

    Note: You can enter the account by clicking either Account Name or Account Number .

    -   If you click Account Name , type part of the account name in the Account field and the filtered accounts can be dynamically listed for your selection.

    -   If you click Account Number , type the complete account number.


5.  Enter the order date you are to assign to the order in the Order date field.
6.  Click Create a New Subscription at the bottom of the page. The Create Subscription page opens.
7.  In the Create a New Subscription area, fill in the information for the following sections:

    -   Select Termed in the Subscription Overview section, in the Type field.

    -   Enter`36` for the three-year subscription in the Terms and Conditions section, in the Initial Term field.

    -   Select the Ramp enabled option in the Ramp section.

        -   Enter or select the number of intervals you want to set in the ramp in the Number of intervals field.

        -   Enter a description for the ramp in the Description field.
        -   The Interval 1 start date and Interval 3 end date fields are by default set to the term start date and term end date of the subscription.

        -   In the Interval 2 start date field, you can enter or select the date you want to set as the start date for Interval 2. In the Interval 3 start date field, you can enter or select the date you want to set as the start date for Interval 3. Note the length of each Interval does not have to be equal. In this sample, we will set the start date of Interval 2 as `2021/07/01` and the start date of Interval 3 as `2022/07/01` , so that the length of each Interval is one year.

    -   In the Trigger Dates section, specify `2020/07/01` in the Contract effective , Service activation , and Customer acceptance fields. For more information, see Billing Trigger Dates .


8.  Click Continue .
9.  Search and locate the product to be added in the Products and charges area. You can choose to search by product name or by product SKU through the drop-down list next to the Product Name field. The displayed products will dynamically change as you type in the Search field.

    ![SelectProduct](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/fbd92aeb-7dea-4547-9ce3-36865083f6b8?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImZiZDkyYWViLTdkZWEtNDU0Ny05Y2UzLTM2ODY1MDgzZjZiOCIsImV4cCI6MTc3MTY5NTA4MiwianRpIjoiN2U4ZGYyMTdmYTAzNDE1MWE2N2FkMjkxNTkxNTM0YzgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.lowffVvq0DgJZhLMUZNNxanIx6cLhmNoJUX9lm63Pmo)

10.  Click the right arrow ( > ) next to the product name to display the product rate plans and then select the rate plans you want to subscribe to by ticking the corresponding checkboxes.
11.  At the bottom of the page, click Add Product. The selected products and charges are displayed in a table on the Create Subscription page.
12.  At the bottom of the page, click Review Order . The Review Order page opens. In the Associated subscriptions section, the Included Products tab is displayed by default in the All Products view.
13.  Update the product to change the price for the second Ramp Interval.
     1.  In the product and charge table, identify to the charge for which you are to update the price, and click the Update link below the corresponding rate plan.

         ![UpdateProduct](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/c76a378e-96de-4d5d-aaef-5f65e2632e15?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImM3NmEzNzhlLTk2ZGUtNGQ1ZC1hYWVmLTVmNjVlMjYzMmUxNSIsImV4cCI6MTc3MTY5NTA4MiwianRpIjoiMjk4ZmI2NDkzYzBlNGZjYzg5M2RjMzI2YzliNjk0ZmIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.wla8bpVfrphtLqagcc_xQ1KYIRVSih6vp9hRMVF0FBk)

     2.  In the Trigger dates area, specify the beginning date of the second year in the Contract effective , Service activation , and Customer acceptance date fields. You can click the drop-down list icon next to the contract effective date to directly select the Interval 2 start date.

         ![QuickDatePicker](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/626bb8c2-a56e-465b-bcb4-2a42a0e795a8?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjYyNmJiOGMyLWE1NmUtNDY1Yi1iY2I0LTJhNDJhMGU3OTVhOCIsImV4cCI6MTc3MTY5NTA4MiwianRpIjoiNDk3ZDU2YmFmYjA5NGM2MDlkZWE3MjBiZWVhNWU0MGUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.G4VlzzhdIlOV09WRHN3jvJMcvdPw4LVSiEKIew0jHWw)

     3.  Change the price for the second year. In this tutorial, change the PRICE value to 1200.
     4.  Click Continue .
14.  Update the product again to change the price for the third Ramp Interval. This step is similar to the previous step.
     1.  In the product and charge table, identify to the charge for which you are to update the price, and click the Update link below the corresponding rate plan.
     2.  In the Trigger dates area, specify the beginning date of the third year in the Contract effective , Service activation , and Customer acceptance date fields. You can click the drop-down list icon next to the contract effective date to directly select the Interval 3 start date.
     3.  Change the price for the third year. In this tutorial, change the PRICE value to 1400.
     4.  Click Continue
15.  The price displayed in the product and charge table in the Included Products tab is now the price of the last charge segment in each charge. In this tutorial, the price of $1400 for Ramp Interval 3 is displayed in the PRICE column. Alternatively, you can view the charge price in each Interval by selecting the Interval you want to view in the drop-down menu at the top right of the product and charge table. ![ViewIntervalChargePrice](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/2ae779ab-4d5c-4b9d-942b-df1e054b61b0?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjJhZTc3OWFiLTRkNWMtNGI5ZC05NDJiLWRmMWUwNTRiNjFiMCIsImV4cCI6MTc3MTY5NTA4MiwianRpIjoiMTMyOTM2Njc3MDRhNDJiYWE4OWE4Y2Y1NWRmOWU1NjMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.o6f5rw0TOS2L_uhMzKQN5X4JxS84MqXsDLmGTeq-8IY) You can also view the price for each of the charge segments in a charge by clicking the down arrow next to the charge price value in the product and charge table ![PriceOfEachInterval](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/9d6174ea-c527-4762-8ffb-c5e2c3c7875b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjlkNjE3NGVhLWM1MjctNDc2Mi04ZmZiLWM1ZTJjM2M3ODc1YiIsImV4cCI6MTc3MTY5NTA4MiwianRpIjoiOWViMjg5YzFkMmRjNDk3YWIyNWEwYzc0MGZkMmE5YmQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.vrer-dp8mnuyOsc1MzCHTQpYCcNzb7IibSuBP46V7Ng)
16.  To view and confirm the Interval start and end dates for each Interval in the Ramp, go to the Terms tab and identify to the Ramp section.

     ![RampPeriod](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/820a6f29-f0bf-4ba0-961d-73000446dd32?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjgyMGE2ZjI5LWYwYmYtNGJhMC05NjFkLTczMDAwNDQ2ZGQzMiIsImV4cCI6MTc3MTY5NTA4MiwianRpIjoiZDA2MjA5ZWQ4OWZjNDU5OGJmOTQ5ZWM3ODBmZTViOTAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.FLydzm0SY8w2jVB9HK4bLwigeTjUpjNjkFSrD3GldjU)

17.  To view the Ramp Metrics for each Interval, go to the Ramp Metrics tab.

     ![RampMetricsTab](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/748ff629-f4d1-4199-8ed0-9bb1d00aa5d6?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijc0OGZmNjI5LWY0ZDEtNDE5OS04ZWQwLTliYjFkMDBhYTVkNiIsImV4cCI6MTc3MTY5NTA4MiwianRpIjoiNWEwOWIyOWYzYzZkNDdjMmExMDMyZjlhMjg0ZjBjYWUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.v1eOGmbdY8HZzkx3jVcNPGkglm5j8ZMjaoiNpsMNO1A)

18.  To activate the subscription, click Activate .
