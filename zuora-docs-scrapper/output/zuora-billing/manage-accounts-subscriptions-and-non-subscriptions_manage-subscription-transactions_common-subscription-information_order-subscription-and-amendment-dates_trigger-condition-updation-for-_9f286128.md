---
title: "Use the Zuora application to update the trigger condition"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/order-subscription-and-amendment-dates/trigger-condition-updation-for-the-subscription-rate-plan-charges/use-the-zuora-application-to-update-the-trigger-condition"
product: "zuora-billing"
scraped_at: "2026-01-15T21:56:13.427Z"
---

# Use the Zuora application to update the trigger condition

This article explains how to update the trigger condition for a rate plan charge in a Zuora subscription without creating an amendment or order action.

Set the Update rate plan charge trigger condition? setting to Yes in the Billing Settings > Default Subscription and Order Settings in the Zuora Billing UI.

In the Zuora Billing UI and the Orders UI, you can directly update the trigger condition for a rate plan charge in a subscription without creating a Terms and Conditions amendment (or order action) for the subscription.
Note: In the trigger condition, a date that exceeds the year 2100 is not supported.

1.  Go to the subscription details page of the target subscription for which you are to update the charge trigger condition.
2.  Identify the Product & Charges area of the Subscription detail page and click the charge name of the target charge for which you are to update the trigger condition. The charge detail view will display.

    ![ClickChargeName](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/fe878321-ba04-4a53-80aa-a556de5c48cb?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImZlODc4MzIxLWJhMDQtNGE1My04MGFhLWE1NTZkZTVjNDhjYiIsImV4cCI6MTc2ODYwMDU2OCwianRpIjoiZWY1YTZjMWY4ZWJkNDk0ZDgxMGI2YTEzNmZjZWYwNGQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.puvsbMKneW56MKl7HHyFD24QcWzkZtk8Zr1ThxgAbQA)

3.  In the charge detail view, identify the Trigger Condition field in the Timing and Frequency of Charge section, and click edit. The Trigger Condition drop-down list will display.

    ![update trigger condition](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/02a9905f-f44a-4a45-b910-0869e2836d2e?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjAyYTk5MDVmLWY0NGEtNGE0NS1iOTEwLTA4NjllMjgzNmQyZSIsImV4cCI6MTc2ODYwMDU2OCwianRpIjoiOWYwOGZkNjhhOTViNDMzMGE3YTgwZTcxZWFhMWQzOTciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.vh0dZcoUhsx5RkxirhUZpgoKQTKqYQBn1K6PORU2i8c)

4.  In the Trigger Condition drop-down list, select the trigger condition you want to set for your target charge. The trigger condition options include:

    -   Upon Contract Effective

    -   Upon Service Activation

    -   Upon Customer Acceptance

    -   Upon Specific Date - When selected, you must enter or select a date as the billing trigger date.

    -   ![UponSpecificDate](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/ac3307ac-f707-408f-9521-ebbc07d8cefb?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImFjMzMwN2FjLWY3MDctNDA4Zi05NTIxLWViYmMwN2Q4Y2VmYiIsImV4cCI6MTc2ODYwMDU2OCwianRpIjoiNjQwNDZjZjExMDMyNDI5MGEwYjJhMTFmNDNjOTVjZWQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.4qyGeUeNMwFbaDep_r7PtBfzX9D2A7RFqkAn-TRTHGs)


5.  Click save.
