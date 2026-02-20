---
title: "Specify tax code and tax mode in a product rate plan"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/tax-code-and-set-tax-mode/specify-tax-code-and-tax-mode-in-a-product-rate-plan"
product: "zuora-billing"
scraped_at: "2026-02-20T17:28:49.755Z"
---

# Specify tax code and tax mode in a product rate plan

Learn how to specify tax code and tax mode for a product rate plan charge, including enabling taxable options and selecting tax modes and codes.

1.  View a product in the [product catalog](/zuora-billing/set-up-zuora-billing/build-product-and-prices/basic-concepts-and-terms) .
2.  [Add a rate plan](/zuora-billing/set-up-zuora-billing/build-product-and-prices/set-up-product-catalog/set-effective-start-dates-and-end-dates) and [rate plan charge](/zuora-billing/set-up-zuora-billing/build-product-and-prices/set-up-product-catalog/create-product-rate-plan-charges/create-a-product-rate-plan-charge) . Enable Taxable on the rate plan charge, which causes the Tax Mode and Tax Code fields to appear.
3.  Select a Tax Mode , either `Tax Inclusive` or `Tax Exclusive` .
4.  Select an active Tax Code Name . To be taxable, the charge must be associated with an active tax code.
5.  Click Save .

    When adding a product rate plan to a subscription during the [Create Subscription](/zuora-billing/set-up-zuora-billing/build-product-and-prices/set-up-product-catalog/create-product-rate-plan-charges/recurring-charge-for-different-initial-and-renewal-terms/create-a-subscription) or [Add Product](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/add-products-to-subscriptions) order action, you can update the subscription rate plan charge. Being part of the subscription rate plan charge, you can also update the tax code and tax mode at the same time. If you do not update the tax code and tax mode of the subscription rate plan charge, they are inherited from the product rate plan charge by default.
