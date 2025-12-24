---
title: "Specify tax code and tax mode in a product rate plan"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/tax-code-and-set-tax-mode/specify-tax-code-and-tax-mode-in-a-product-rate-plan"
product: "zuora-billing"
scraped_at: "2025-12-24T05:05:55.312Z"
---

# Specify tax code and tax mode in a product rate plan

Learn how to specify tax code and tax mode for a product rate plan charge, including enabling taxable options and selecting tax modes and codes.

To specify tax code and tax mode for a product rate plan charge:

1.  View a product in the product catalog .
2.  Add a rate plan and rate plan charge . Enable Taxable on the rate plan charge, which causes the Tax Mode and Tax Code fields to appear.
3.  Select a Tax Mode , either `Tax Inclusive` or `Tax Exclusive` .
4.  Select an active Tax Code Name . To be taxable, the charge must be associated with an active tax code.
5.  Click save .

When adding a product rate plan to a subscription during the Create Subscription or Add Product order action, you can update the subscription rate plan charge. Being part of the subscription rate plan charge, you can also update the tax code and tax mode at the same time. If you do not update the tax code and tax mode of the subscription rate plan charge, they are inherited from the product rate plan charge by default.
