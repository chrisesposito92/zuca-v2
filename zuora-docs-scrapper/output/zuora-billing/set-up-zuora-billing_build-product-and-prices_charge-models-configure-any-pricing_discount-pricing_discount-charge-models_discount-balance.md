---
title: "Discount balance"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/discount-pricing/discount-charge-models/discount-balance"
product: "zuora-billing"
scraped_at: "2025-12-24T04:49:36.692Z"
---

# Discount balance

A discount balance allows invoices generated within an open period to utilize available discounts until the balance is depleted.

A discount charge, while being processed by the RBE, maintains an "open period" and a discount balance. This means that any invoice generated in the open period can use the discount before its balance runs out. Canceling an invoice will reverse the discount applied to the invoice and return the discount amount to the discount balance.

For example, if you have a $100 monthly discount at the account level, and for January, you have only applied $10 of that discount, any additional invoices created in January will be discounted until the remaining $90 of the $100 monthly discount is fully applied.
