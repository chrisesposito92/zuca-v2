---
title: "Change the terms and conditions of ramp deals using the Zuora application"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/ramps-and-ramp-metrics/terms-and-conditions-of-ramp-deals-changes/change-the-terms-and-conditions-of-ramp-deals-using-the-zuora-application"
product: "zuora-billing"
scraped_at: "2025-12-24T05:28:07.651Z"
---

# Change the terms and conditions of ramp deals using the Zuora application

This topic explains how to create and amend ramp deals in the Zuora application by updating terms and conditions, setting intervals, and activating orders.

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

    ![SelectExistingSubscription](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/a22d77f8-9e66-4a8d-86e8-05edc3c4a478?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImEyMmQ3N2Y4LTllNjYtNGE4ZC04NmU4LTA1ZWRjM2M0YTQ3OCIsImV4cCI6MTc2NjY0MDQ4NSwianRpIjoiNDJiZmJhMzc5Y2YxNDc0YzhiZjg5NDYzYThmMDc2ZjMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.S-rbB8dLx_H70dcZvOKL6Ix9oMh64SQEIuqg4KbpscM)

7.  In the Associated subscriptions area, click Update Terms and Conditions .

    ![UpdateRamp_TermsandConditions](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/943383ca-47bf-42da-b5f4-52b688d22dce?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijk0MzM4M2NhLTQ3YmYtNDJkYS1iNWY0LTUyYjY4OGQyMmRjZSIsImV4cCI6MTc2NjY0MDQ4NSwianRpIjoiYzFlZjNhYWUyZDViNGFkZGE2ZWIzYWVlZTAzMWYzOTkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.Rjn0boXX3b7RFAE5wM846p49X8Js7sHBjXgqfzxRfAk)

8.  In the Update Terms and Conditions window, complete the following steps:
    1.  In the Trigger Date s section, specify appropriate dates in the Contract effective , Service activation , and Customer acceptance fields for the operation. For more information, see Billing Trigger Dates . You can also use the drop-down list next to the Contract effective field to directly select an Interval start date as the contract effective date. The service activation and customer acceptance dates will be updated to the same date automatically.

        ![UpdateRamp_DatePicker](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/0c2f9f05-7706-4611-8745-d005c06a9dfb?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjBjMmY5ZjA1LTc3MDYtNDYxMS04NzQ1LWQwMDVjMDZhOWRmYiIsImV4cCI6MTc2NjY0MDQ4NSwianRpIjoiNTgxZGY4Njg0NmY3NDg1MWJjMTM4ODdhYTZlNDI2Y2YiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.80b9w8y3ffQuYv6SfJoKA-dyY0o3Z8MO3N3GgjA0BUU)

    2.  In the Terms and Conditions section, update the value of the Initial term field to 48.
    3.  In the Ramp section, perform the following steps, then click Apply .

        -   Set the Number of intervals field to 4.

        -   Set the Interval 4 start date field to 7/1/2023.

        -   Set the Interval 4 end date field to 6/30/2024.


9.  In the Included Products tab, the price displayed in the product and charge table is the price of the last charge segment in each charge. In this tutorial, the price of $1400 for Interval 4 is displayed in the PRICE column. You can view the price of each charge segment in a charge by clicking the down arrow next to the charge price value. Alternatively, you can view the charge information in each Interval by selecting the Interval you want to view in the drop-down menu at the top right of the product and charge table.

    ![UpdateRamp_AllProductView](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/c60f7e96-9346-444c-9a8b-8d1025976e78?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImM2MGY3ZTk2LTkzNDYtNDQ0Yy05YThiLThkMTAyNTk3NmU3OCIsImV4cCI6MTc2NjY0MDQ4NSwianRpIjoiN2I1NzkzMDdmYjg5NDQ1NGExY2UyYzY5MjA2NjE0MDgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.Umylosb8aBGf1s9bIUZJxBJgkxwZQrhZiWIZfQDyTXQ)

    ![UpdateRamp_IntervalView](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/8ba7a3a9-1b4f-40ba-9421-c0d6ceb3a370?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjhiYTdhM2E5LTFiNGYtNDBiYS05NDIxLWMwZDZjZWIzYTM3MCIsImV4cCI6MTc2NjY0MDQ4NSwianRpIjoiODEwOTAxZTAxZjUyNDczYWJmZjJhZTNjNGZlMzI1N2YiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.l5i5mqI5gLU_P78ts_5I2shG8EBv3cqtDRKQY9GcHWo)

10.  To view the Interval start and end dates for each Interval in the Ramp, go to the Terms tab and identify to the Ramp section.

     ![UdpateRamp_RampPeriod](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/2d243e18-0cc3-4112-8b72-9e07250bd447?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjJkMjQzZTE4LTBjYzMtNDExMi04YjcyLTllMDcyNTBiZDQ0NyIsImV4cCI6MTc2NjY0MDQ4NSwianRpIjoiNTZiMGY4YThiNjBhNGM1NDkzZjVjNjc3YTVkMDFkNmQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.pg3FDGQBR72tGNdJnChBmiPfGbzOjaXcdddzByFgXcE)

11.  To view the Ramp Metrics for each Interval, go to the Ramp Metrics tab.

     ![UpdateRamp_RampMetrics](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/1ebe31c1-d6d7-43e1-80b8-5782ea3b2b8a?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjFlYmUzMWMxLWQ2ZDctNDNlMS04MGI4LTU3ODJlYTNiMmI4YSIsImV4cCI6MTc2NjY0MDQ4NSwianRpIjoiMTRiODQ3NzkyM2RjNDMwMmI3M2NmMDExOWUwMzAxNzUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.DgrxRfAnOR-KaF1NUjW3S2Aa0yYE9IVuhF30krfSIrw)

12.  To activate the Order, click Activate .
