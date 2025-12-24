---
title: "Create a prepayment charge - Zuora UI"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/prepaid-with-drawdown/prepayment-charge/create-a-prepayment-charge---zuora-ui"
product: "zuora-billing"
scraped_at: "2025-12-24T08:29:05.066Z"
---

# Create a prepayment charge - Zuora UI

Learn how to create prepayment charges using the Zuora UI for managing API call billing.

You can create a prepayment charge using the Zuora user interface. The procedure described in this section makes use of an example: Suppose you run a software company that charges customers by the number of calls to your API. You can create the following prepayment charges to sell your service:

-   Monthly Plan: $20, 10 million API calls per month

-   One-time Top-up: $3, 1 million API calls, valid for one month


To create the Monthly Plan charge:

1.  Create a product in the product catalog.
2.  Add two rate plans for the product.
3.  Create a recurring charge within one rate plan:
    1.  Under the Recurring charges/Period section, click +add new .
    2.  Specify the following fields for the charge:

        -   Charge name: Monthly Plan

        -   Charge model: Flat Fee Pricing

        -   List price: 20 USD/Month

        -   Charge function: Prepayment

        -   Commitment Type: Unit. To create a payment charge based on currency, select the Commitment Type as Currency .


4.  Select the Prepayment toggle and specify values for the following fields:

    -   Prepayment UOM: Million calls

    -   Prepayment Units: 10

    -   Validity Period: Month

    -   Credit Option: Time Based

    -   Prepayment Total Units: 10 Million calls/Month (automatically calculated)


5.  Specify values for the fields in the Timing and Frequency of Charge section. See product rate plan charge for more information.
6.  Click Save. This charge will have a Prepaid icon ![Prepaid charge icon](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/095eaaf8-9ad7-47b4-a7f2-9ccc967a9382?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjA5NWVhYWY4LTlhZDctNDdiNC1hN2YyLTljY2M5NjdhOTM4MiIsImV4cCI6MTc2NjY1MTM0MywianRpIjoiNGY2ZDA2ZDJkZGQ1NDUxZGI3YTg2NzNhNDRjZGJmMmUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.1KfCbCxvWGoAnmUXjCRUDc_URsQ4CJfMFh5Xa7o60nw) next to its name in the rate plan.
7.  Create a one-time top-up charge within the other rate plan.
    1.  Under the One-time Charges section, click +add new .
    2.  Specify the following fields for the charge:

        -   Charge name: One-time Top-up

        -   Charge model: Flat Fee Pricing

        -   List price: 3 USD


    3.  Select the Prepayment toggle and specify values for the following fields:

        -   Prepayment UOM: Million calls

        -   Prepayment Units: 1

        -   Validity Period: Month

        -   Credit Option: Time Based

        -   Prepayment Total Units: 1 Million calls /Month (automatically calculated)


    4.  Specify values for the fields in the Timing and Frequency of Charge section. See product rate plan charge for more information.
    5.  Click Save. This charge will have a Prepaid icon ![Prepaid charge icon](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/095eaaf8-9ad7-47b4-a7f2-9ccc967a9382?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjA5NWVhYWY4LTlhZDctNDdiNC1hN2YyLTljY2M5NjdhOTM4MiIsImV4cCI6MTc2NjY1MTM0MywianRpIjoiODk2N2RjODc0ZjZhNDE5Zjg1ZjM0YWYzMDc1YjA0OWEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.r7U782ht5hkN6aGpmZDYUhhlPHivnfTIlPbMnzzMZUI) next to its name in the rate plan

After creating the prepayment charges above, you will see them listed in your product.

![Create prepayment charge - result](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/163e328e-f665-41fb-95b4-1ddd598ba1a9?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjE2M2UzMjhlLWY2NjUtNDFmYi05NWI0LTFkZGQ1OThiYTFhOSIsImV4cCI6MTc2NjY1MTM0MywianRpIjoiZjVmYTIyZWQ1NmNkNDY0OGJkMGYzZDE2MjU5OTVkZTYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.JVDTRtqht4k2BEPOxtFUJcK4R_9QxMMENjT7pGDT5g4)

After creating the product and the prepayment charges, you can create drawdown charges in the rate plans to match the prepayment charges.
