---
title: "Adding a product using Zuora Interface"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/subscribe-and-amend/amend-subscriptions/adding-a-product-using-zuora-interface"
product: "zuora-billing"
scraped_at: "2026-02-19T03:12:43.759Z"
---

# Adding a product using Zuora Interface

This task topic explains how to add a product to a subscription.

1.  Click on the subscription you want to change.
2.  Click Amendment.
    amendment

3.  Enter an Amendment Name. Optionally, add a Change Description.

    ![amendment2](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/4de30ba1-9cd6-4c40-b03b-db9733903d02?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjRkZTMwYmExLTljZDYtNGM0MC1iMDNiLWRiOTczMzkwM2QwMiIsImV4cCI6MTc3MTU1NzE2MSwianRpIjoiNjYxNWVkNzM0ZTAyNGY5NThmMTc4NWUzZTM0MDc5N2EiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.APbv3TC8cDmU8o4eB0DvGDehzcV96hqgFZ3mydzSrtc)

4.  Select New Product from Amendment Type list and click Save.
5.  Click Add New Product & Rate Plan. . Using the Select Product drop-down, select the product you want to add, then click Select to choose the rate plan.

    ![add-product](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/90a05eda-9404-4195-a6c8-b68e70eb578d?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjkwYTA1ZWRhLTk0MDQtNDE5NS1hNmM4LWI2OGU3MGViNTc4ZCIsImV4cCI6MTc3MTU1NzE2MSwianRpIjoiODA3ZWQ4ZWM1NWE3NDdmZWE5YmQyZmM5MWM2YTNiOGYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.tIv7NsRF4EOBIETM3Run6rNrLI42gk5uCLBgue3JhuI)

6.  Click Contract effective, then enter a Contract effective Date and click Save.

    -   The contract effective date should be set to the date you want the new product to take effect.
    -   Most companies make product additions effective immediately during an invoice period.
        -   If proration is enabled the next invoice will include a prorated charge for any recurring fees for the partial period and full charges for any usage and one time fees for the partial period. Recurring fees will be prorated based on the billing timing setting
        -   If proration is disabled, the next invoice will only include one time fees for the partial period and will not include and recurring or usage fees for the partial period.
    -   If you want to make product additions effective for the next invoice period or next term, set the contract effective date to the first day of the next invoice period or the first day of the next term.

7.  If you have Service Activation and Customer Acceptance dates enabled:

    1.  Click Service Activation and enter the Service Activation Date.
    2.  Click Save
    3.  Click Customer Acceptance and enter the Customer Acceptance Date.
    4.  Click Save.
