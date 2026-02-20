---
title: "Total Amount calculation with Partial Month Proration"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/proration/total-amount-calculation-with-partial-period-proration/total-amount-calculation-with-partial-month-proration"
product: "zuora-billing"
scraped_at: "2026-02-20T17:30:39.393Z"
---

# Total Amount calculation with Partial Month Proration

This topic explains how to calculate the total amount for recurring charges with partial month proration, considering different billing rules and scenarios.

With recurring charges for any periods less than a month, the total amount is equal to the sum of prorated amount for partial months plus charge amount for full months.

The calculation of prorated amount for partial months depends on the setting of the following billing rules:

-   Bill recurring charges for partial month (with monthly based billing periods)?

-   When prorating a month, assume 30 days in a month or use actual days?


If Bill recurring charges for partial month (with monthly based billing periods)? is set to Yes, prorated amount is calculated. You can choose to calculate prorated amount either using 30 days in a month or using actual days in a month by setting the When prorating a month, assume 30 days in a month or use actual days? billing rule.

The following table describes formulas and examples of total amount calculation with different billing rules.

| When prorating a month, use the "Assume 30 days - actual/360" option | When prorating a month, use the "Use actual number of days" option | When prorating a month, use the "Assume 30 days - strict/360" option |
| --- | --- | --- |
| Total_amount = Price_per_month * [ Number_of_full_months + (Prorated_days/ 30) ]Example 1 | Total_amount = Price_per_month * [ Number_of_full_months + (Prorated_days/Actual_number_of_days_of_the_prorated_month) ]Example 2 | Total_amount = Price_per_month * [ Number_of_full_months + (Prorated_days_assuming_strict_30_days/ 30) ]Example 3 |

## Example 1

Example Scenario:

-   Charge Model: Per Unit Pricing

-   List Price: $100 with the list price base option of Month

-   Unit: 1

-   Billing Period: Quarter

-   Subscription Term Start Date: 01/01/2018

-   Charge Effective Date: 01/16/2018

-   Subscription Term: 12 months

-   Trigger Condition: Upon Contract Effective

-   End Date: Align to Subscription End Date

-   Billing Day: Specific Day of Month, 1st of the month

-   Billing Period Alignment: Align to Subscription

-   Target Date for the Bill Run: 02/01/2018


Billing Period in the Preceding Example:

-   Full billing period: 01/01/2018 - 03/31/2018

-   Actual billing period: 01/16/2018 - 03/31/2018

-   Full months: two full months, 02/01/2018 - 03/31/2018

-   Partial month: 01/16/2018 - 01/31/2018


With the example scenario above and the billing rule of Assume 30 days - actual/360, the total amount is calculated based on the formula:

-   Prorated days: 16 days, 01/16/2018 - 01/31/2018

-   Number of days in the prorated month: 30 days


Total amount on the invoice: $253.33 = $100 \* (2 + 16/30)

otal amount on the invoice: $250 = $100 \* (2 + 15/30)

## Example 2

With the example scenario above and the billing rule of Use actual number of days, the total amount is calculated based on the formula:

-   Prorated days: 01/16/2018 - 01/31/2018 = 16 days
-   Number of days in the prorated month: 31 days

Total amount on the invoice: $251.62 = $100 \* (2 + 16/31)

## Example 3

With the example scenario above and the billing rule of Assume 30 days - strict/360, the total amount is calculated based on the formula:

-   Prorated days: 01/16/2018 - 01/31/2018 = 15 days
-   Number of days in the prorated month: 30 days

Total amount on the invoice: $250 = $100 \* (2 + 15/30)
