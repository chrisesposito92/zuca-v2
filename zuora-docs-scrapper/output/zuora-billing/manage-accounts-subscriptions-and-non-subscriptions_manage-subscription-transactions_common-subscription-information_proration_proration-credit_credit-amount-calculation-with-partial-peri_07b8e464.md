---
title: "Credit amount calculation with partial period proration"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/proration/proration-credit/credit-amount-calculation-with-partial-period-proration"
product: "zuora-billing"
scraped_at: "2026-02-20T17:30:38.614Z"
---

# Credit amount calculation with partial period proration

This topic explains how to calculate credit amounts for recurring charges with partial period proration, considering various billing rules and methods.

The calculation of credit amount for partial period depends on one of the following rules which is applied:

-   [Bill recurring charges for partial month (with monthly based billing periods)?](https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/billing-settings-configuration/general-billing-settings/define-billing-rules)

-   When prorating a month, assume 30 days in a month or use actual days?

-   Bill recurring charges for partial week (with weekly based billing periods)?

-   Prorate recurring charges for partial period?

-   When prorating periods greater than a month, prorate by month first, or by day?

-   When prorating a month, assume 30 days in a month or use actual days?


If Bill recurring charges for partial week (with weekly based billing periods)? is set to Yes, the credit amount is calculated with partial week proration.

If Prorate recurring charges for partial period? is set to Yes, the credit amount is calculated for partial billing period. The results of the proration depend on the combination of the When prorating periods greater than a month, prorate by month first, or by day? and When prorating a month, assume 30 days in a month or use actual days? billing rules.

Note that the following billing rule determines the calculation method that is applied for credit amount:

-   When bill credit for recurring charges, based on billed period or credit period?


All the new tenants have the Based on the total billing period amount and charged amount option selected by default. The previous calculation method is From effective end date to end of the current billing period .

This method calculates the credit amount based on the total billing period amount and the amount that would have been charged for the charged portion of the subscription.

-   Charged amount = Price per billing period × (Prorated days ÷ Actual number of days of prorated period)

-   Credit amount = Total billing period amount − Charged amount


Imagine you run a subscription service with a subscription plan billed quarterly at $100 per quarter. A customer subscribes and pays for three months, from January 1, 2023 to April 1, 2023, totaling $100. After enjoying the service for 51 days, the customer decides to cancel their subscription from February 21, 2023. Here's how the credit amount would be calculated using the new method:

| Subscription details | Calculation | Result |
| --- | --- | --- |
| Price per billing period: $100Total number of days of the partial period: 51 days (January 1 - February 21)Actual number of days of the full period: 90 days | Calculate the amount that would have been charged for the charged portion of the subscription: 100 × (51 ÷ 90) = 56.66666667 round up to 57Calculate the credit amount by subtracting the charged portion amount from the total amount: 100 − 57 = 43 | The credit amount is $43The total invoice amount is: 100 − 43 = 57, and it aligns with the CCV calculation. |

This is the previous unrecommended method calculates the credit amount by multiplying the remaining portion of the subscription by the price per billing period. However, this method may result in rounding errors, leading to discrepancies in the calculated credit amount.

Credit amount = Price per billing period × (Days from effective end date to end of the current billing period ÷ Actual number of days of prorated period)

Imagine you run a subscription service with a subscription plan billed quarterly at $100 per quarter. A customer subscribes and pays for three months, from January 1, 2023 to April 1, 2023, totaling $100. After enjoying the service for 51 days, the customer decides to cancel their subscription from February 21, 2023. Here's how the credit amount would be calculated using the previous method:

| Subscription details | Calculation | Result |
| --- | --- | --- |
| Price per billing period: $100Days from effective end date to end of the current billing period: 39 days (February 21 - April 1)Actual number of days of the full period: 90 days | Calculate the credit amount by multiplying the remaining portion of the subscription by the price per billing period: 100 × (39 ÷ 90) = 43.33333333 round up to 44 | The credit amount is $44The total invoice amount is: 100 − 44 = 56, which means the charge amount is $56, and it does not align with the CCV calculation ($57). |
