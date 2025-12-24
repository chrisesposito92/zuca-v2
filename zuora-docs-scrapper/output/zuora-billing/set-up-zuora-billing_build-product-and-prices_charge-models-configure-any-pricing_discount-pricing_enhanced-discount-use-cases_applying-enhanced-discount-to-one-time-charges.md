---
title: "Applying enhanced discount to one-time charges"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/discount-pricing/enhanced-discount-use-cases/applying-enhanced-discount-to-one-time-charges"
product: "zuora-billing"
scraped_at: "2025-12-24T04:57:42.015Z"
---

# Applying enhanced discount to one-time charges

Learn how to apply a fixed amount discount to a one-time charge by aligning the discount's duration with its billing period.

For a fixed amount discount charge applied to a one-time charge, to fully apply the discount amount, ensure the fixed amount discount's duration matches the fixed amount discount's billing period.

For example, a one-time charge of $100 starts from 01/14/2023, the fixed amount discount charge is $5 off, and the billing period of the fixed amount discount charge is set to month:

-   If the discount duration is set from 01/14/2023 to 02/14/2023, the discounted amount of the one-time charge is $95. This is because the discount amount applied on 01/14/2023 is -$5=-$5/month (Fixed Amount Discount Billing Period)\*1 month.

-   If the discount duration is set from 01/14/2023 to 01/15/2023, the discounted amount of the one-time charge is $99.84. This is because the discount amount applied on 01/14/2023 is -$0.16=-$5/month (Fixed Amount Discount Billing Period) \* 1/31\*1 month.
