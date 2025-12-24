---
title: "Fixed amount model and percentage model"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/discount-pricing/discount-charge-models/fixed-amount-model-and-percentage-model"
product: "zuora-billing"
scraped_at: "2025-12-24T04:49:16.349Z"
---

# Fixed amount model and percentage model

Explains the Discount - Fixed Amount and Discount - Percentage charge models used in product rate plans, detailing their application and behavior.

The following table explains more about Discount - Fixed Amount charge model and Discount - Percentage charge model, which you can use on your product rate plan charges. For step-by-step instructions, see How do I handle discounts in Zuora.

| Model | Description | Example | Note |
| --- | --- | --- | --- |
| Discount - Fixed Amount | Allows you to give your customer a fixed amount of discount. Fixed amount discount behaves like a coupon. | You have a promotion that gives your customers a $100 discount if they sign up in January. To do that, you can set up a fixed amount discount charge of $100 only effective in January. | Fixed-amount discount is applied per line item on an invoice. If the invoice amount is greater than the discount amount, Zuora uses the rule described in this article to distribute the discount among various charges.The following billing rules are not applied to the Discount - Fixed Amount charge model, as Discount - Fixed Amount always prorates.Prorate recurring charges for partial period?Bill recurring charges for partial month (with monthly based billing periods)?Bill recurring charges for partial week (with weekly based billing periods)?Bill usage charges for partial month (with monthly based billing periods)?Bill usage charges for partial week (with weekly based billing periods)?Invoice Past End-of-Term when Auto-Renew is ONInvoice Past End-of-Term when Auto-Renew is OFFFor fixed-amount discounts, the Billing - Revenue Integration feature only supports the billing-based revenue recognition.For fixed-amount discounts, the Order to Revenue feature supports several configuration options. See Configure interface settings . |
| Discount - Percentage | Allows you to give your customer a percentage of the charge amount as a discount. | You set up a 10% discount for a customer on a charge of 100$. The customer is then charged $90 (100 -100*10%). | Percentage discount does not prorate. |
