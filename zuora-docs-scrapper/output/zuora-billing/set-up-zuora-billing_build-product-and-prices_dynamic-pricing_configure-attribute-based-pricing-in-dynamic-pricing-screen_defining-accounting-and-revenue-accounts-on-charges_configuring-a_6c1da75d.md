---
title: "Tiered pricing"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/dynamic-pricing/configure-attribute-based-pricing-in-dynamic-pricing-screen/defining-accounting-and-revenue-accounts-on-charges/configuring-accounting-and-revenue-integration-options"
product: "zuora-billing"
scraped_at: "2025-12-24T05:02:03.114Z"
---

# Tiered pricing

Tiered pricing enables businesses to charge varying rates based on usage levels, commonly used in subscription and service models.

Tiered Pricing allows you to charge customers different rates for different quantities of usage or units. Prices are defined in tiers, and each tier applies to a range of units or consumption levels. The total charge is calculated by summing the cost for all applicable tiers.

Tiered pricing is often used in usage-based billing models like subscriptions, cloud services, telecom plans, and more.

An example of tiered pricing is as follows:

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/49110353-69ef-4fc0-b730-919e5141c94b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQ5MTEwMzUzLTY5ZWYtNGZjMC1iNzMwLTkxOWU1MTQxYzk0YiIsImV4cCI6MTc2NjYzODkyMSwianRpIjoiMjM0MDY0NDkyZTkxNDNkOTk0MDE1OWM1NmUyZDU4MTgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.iItjWeHPXBe_RHnjtTIu5fBZd9_-eMht3ZUufizrOhY)

## Configuring accounting and revenue integration options

1.  Optional: Enter an accounting code for the product.

2.  (Optional): Depending on the enabled features for integration with Zuora Revenue, configure the following options in the Revenue Accounting section.

    | Name | Description | Feature enabled |
    | --- | --- | --- |
    | Exclude Item Booking from Revenue | Select this checkbox to exclude non-revenue-related rate plan charges and order line items from syncing to Zuora Revenue. | Order to Revenue or Zuora Billing - Revenue Integration |
    | Exclude Item Billing from Revenue | Select this checkbox to exclude non-revenue-related invoice items, invoice item adjustments, credit memo items, and debit memo items from syncing to Zuora Revenue. |  |
    | Revenue Recognition Timing | Use this option to select the timing for revenue recognition. The available options depend on the revenue recognition policy configuration. | Order to Revenue |
    | Revenue Amortization Method | Use this option to select the revenue amortization method. The available options depend on the revenue recognition policy configuration. |  |
    | Allocation Eligible | Select this checkbox to include the charge segment for revenue allocation. | Additional Revenue Fields |
    | Right To Bill Flag | Use this checkbox to specify how to perform the accounting during revenue recognition. |  |
    | Product Category | Use this field to specify the product category for integration with Zuora Revenue. |  |
    | Product Class | Use this field to specify the product class for integration with Zuora Revenue. |  |
    | Product Family | Use this field to specify the product family for integration with Zuora Revenue. |  |
    | Product Line | Use this field to specify the product line for integration with Zuora Revenue. |  |
