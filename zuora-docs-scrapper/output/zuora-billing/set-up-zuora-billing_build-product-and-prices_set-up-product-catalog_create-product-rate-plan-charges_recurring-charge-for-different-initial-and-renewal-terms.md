---
title: "Recurring charge for different initial and renewal terms"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/set-up-product-catalog/create-product-rate-plan-charges/recurring-charge-for-different-initial-and-renewal-terms"
product: "zuora-billing"
scraped_at: "2025-12-24T04:48:25.203Z"
---

# Recurring charge for different initial and renewal terms

Explains how to set up a recurring charge using the subscription term as the billing period and a list price based on a month. This recurring charge setup allows you to create subscriptions with different initial and renewal terms.

This scenario explains how to set up a recurring charge to handle subscriptions with a different initial term and renewal term, and a list price based on a month. Suppose you have the following scenario:

-   Your customer subscribes to the service with an initial term of 6 months and a renewal term of 12 months.

-   You want to bill and collect payment for the entire initial term at the start of the term. For example, if the initial term is May 1 through October 31 (6 months), the customer receives an invoice that includes a charge of $600 upon the term start date of May 1.

-   You want to bill and collect payment for the renewal term at the start of the term. For example, if the renewal term is November 1 through October 31 (12 months), the customer receives an invoice that includes a charge of $1200 upon the term start date of November 1.


With full-term pricing options, you can create a recurring charge on your product rate plan with the following settings:

-   A billing period based on the subscription term

-   A list price based on a month
