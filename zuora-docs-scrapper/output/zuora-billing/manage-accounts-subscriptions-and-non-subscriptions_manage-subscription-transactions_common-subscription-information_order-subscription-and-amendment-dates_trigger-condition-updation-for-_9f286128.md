---
title: "Use the Zuora application to update the trigger condition"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/order-subscription-and-amendment-dates/trigger-condition-updation-for-the-subscription-rate-plan-charges/use-the-zuora-application-to-update-the-trigger-condition"
product: "zuora-billing"
scraped_at: "2026-02-20T17:30:23.378Z"
---

# Use the Zuora application to update the trigger condition

This task topic explains how to update the trigger condition for a rate plan charge in a Zuora subscription without creating an Terms and Conditions amendment or order action for the subscription.

Set the Update rate plan charge trigger condition? setting to Yes in the Billing Settings > Default Subscription and Order Settings in the Zuora Billing UI.

Note: In the trigger condition, a date that exceeds the year 2100 is not supported.

1.  Go to the subscription details page of the target subscription for which you have to update the charge trigger condition.
2.  Identify the Product & Charges area of the Subscription detail page and click the charge name of the target charge for which you have to update the trigger condition. The charge detail view will display.

    ![ClickChargeName](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/fe878321-ba04-4a53-80aa-a556de5c48cb?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImZlODc4MzIxLWJhMDQtNGE1My04MGFhLWE1NTZkZTVjNDhjYiIsImV4cCI6MTc3MTY5NTAxNywianRpIjoiYjgwODJkODg0NzNjNDlmOGI0OTU1ZWMxMmZjOWZhMDUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.Y-q84lCxx-fDfxUcipIHQgRD8tZtVWsDWnNJgybxMQ4)

3.  In the charge detail view, identify the Trigger Condition field in the Timing and Frequency of Charge section, and click edit. The Trigger Condition drop-down list will display.

    ![update trigger condition](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/02a9905f-f44a-4a45-b910-0869e2836d2e?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjAyYTk5MDVmLWY0NGEtNGE0NS1iOTEwLTA4NjllMjgzNmQyZSIsImV4cCI6MTc3MTY5NTAxNywianRpIjoiNDFhMGMxZjMxM2Y5NDk2M2JlMGEyMzk1ODcxOGM3YjQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.h9pPNI3uoKUs6jOnX-7x1qKP6l9JrvsA5UUHF50tAr4)

4.  In the Trigger Condition drop-down list, select the trigger condition you want to set for your target charge. The trigger condition options include:

    -   Upon Contract Effective

    -   Upon Service Activation

    -   Upon Customer Acceptance

    -   Upon Specific Date - When selected, you must enter or select a date as the billing trigger date.

    -   ![UponSpecificDate](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/ac3307ac-f707-408f-9521-ebbc07d8cefb?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImFjMzMwN2FjLWY3MDctNDA4Zi05NTIxLWViYmMwN2Q4Y2VmYiIsImV4cCI6MTc3MTY5NTAxNywianRpIjoiM2QzOGZhZjVlM2IwNDYwZmJjZTFiYWVhMTBmZDdjMGEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.WarLf8-j2a9V3UZFEnUJr4RC2C7BMXcA4qxWoIsxFyE)


5.  Click save.
