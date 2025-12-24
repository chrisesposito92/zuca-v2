---
title: "Create a product using full-term pricing options"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/set-up-product-catalog/create-product-rate-plan-charges/recurring-charge-for-different-initial-and-renewal-terms/create-a-product-using-full-term-pricing-options"
product: "zuora-billing"
scraped_at: "2025-12-24T04:48:30.333Z"
---

# Create a product using full-term pricing options

Learn how to set up a product rate plan charge with recurring charges using subscription term billing and monthly list pricing.

The following steps explain how to set up a product rate plan charge for recurring charges with subscription term as the billing period and a list price based on a month:

1.  Navigate to from the left-hand navigation.
2.  Create a new product in your catalog, then create a new rate plan.
3.  Add a new recurring charge to the rate plan that you created.
4.  Define the charge amount as follows:

    -   Charge Model: Flat Fee Pricing

    -   List Price: $100 with the list price base option of Month. For example, if your subscription term is six months, the charge for the full term is $600. If your subscription term is 12 months, the charge for the full term is $1200.


    ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/8727c35a-0e60-4962-986d-e162978688e6?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijg3MjdjMzVhLTBlNjAtNDk2Mi05ODZkLWUxNjI5Nzg2ODhlNiIsImV4cCI6MTc2NjYzODEwOCwianRpIjoiM2Q4ZjhkMGZhM2FjNGQ3OWEyNzFhYWU3ZTI0OGZmOWQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.Z2-XLdRyJLrqoQbKRYbX-hekFu226cvYXrkoYI61o9M)

5.  Specify the charge timing and frequency with the following key settings:

    -   Billing Period: Subscription Term

    -   Billing Period Alignment: Align to Charge

        ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/1e4f980a-8a8c-402f-86c8-aac9df34149b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjFlNGY5ODBhLThhOGMtNDAyZi04NmM4LWFhYzlkZjM0MTQ5YiIsImV4cCI6MTc2NjYzODEwOCwianRpIjoiMjBiNTdkNGFmOWI2NDM3Mzk4YTczZTBkMDkxNTY4NmUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.Sefwa_tzzZs_mTIku3hA0gWfNlXStBsQr1L64ETZKKs)


6.  Save the charge.
