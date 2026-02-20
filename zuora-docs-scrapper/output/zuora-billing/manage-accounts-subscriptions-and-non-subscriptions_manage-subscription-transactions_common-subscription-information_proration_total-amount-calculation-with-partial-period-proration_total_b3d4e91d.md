---
title: "Total Amount calculation with Partial Period (Quarter, Semi-annual, or Annual billing Periods)"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/proration/total-amount-calculation-with-partial-period-proration/total-amount-calculation-with-partial-period-quarter-semi-annual-or-annual-billing-periods"
product: "zuora-billing"
scraped_at: "2026-02-20T17:30:38.875Z"
---

# Total Amount calculation with Partial Period (Quarter, Semi-annual, or Annual billing Periods)

This topic details the calculation of total amounts for recurring charges with partial billing periods, incorporating various billing rules and proration methods, and provides examples and formulas for different scenarios.

Note:

This feature is in the Early Adopter phase. If you want to have access to the feature, submit a request at Zuora Global Support .

With recurring charges for partial quarter, semi-annual, or annual billing periods, the total amount is equal to the sum of the prorated amount for partial billing periods plus charge amount for full billing periods.

The calculation of prorated amount for partial billing periods depends on the setting of the following billing rules:

-   Prorate recurring charges for partial period?

-   When prorating periods greater than a month, prorate by month first, or by day?

-   When prorating a month, assume 30 days in a month or use actual days?


If Prorate recurring charges for partial period? is set to Yes , the prorated amount is calculated. The results of the proration depend on the combination of the When prorating periods greater than a month, prorate by month first, or by day? and When prorating a month, assume 30 days in a month or use actual days? billing rules.

The following table provides you the formulas and examples of the total amount calculation with different bill rules.

|  | When prorating a month, assume 30 days in a month | When prorating a month, use actual days |
| --- | --- | --- |
| When prorating periods greater than a month, prorate by month(If Bill recurring charges for partial month (with monthly based billing periods)? billing rule is set to Yes ) | Total_amount = Price_per_month * (Number_of_full_months + (Prorated_days/30) )Example 1 | Total_amount = Price_per_month * (Number_of_full_months + (Prorated_days/Actual_number_of_days_of_prorated_month) )Example 2 |
| When prorating periods greater than a month, prorate by day | Total_amount = Price_per_billing_period * (Number_of_full_billing_periods + Prorated_days/Number_of_days_of_prorated_period)Use 30 days to calculate Number_of_days_of_prorated_period. For example:Quarter: 90 days (= 30 *3)Semi-annual: 180 days (= 30 * 6)Annual: 360 days (= 30 * 12)Example 3 | Total_amount = Price_per_billing_period * (Number_of_full_billing_periods + Prorated_days/Actual_number_of_days_of_prorated_period)Example 4 |

## Example 1

Example Scenario:

-   Charge Model: Per Unit Pricing

-   List Price: $1200 with the list price base option of Billing Period

-   Unit: 1

-   Billing Period: Annual

-   Subscription Term Start Date: 01/01/2018

-   Subscription Term: 12 months

-   Trigger Condition: Upon a Specific Date 07/14/2018

-   End Date: Align to Subscription End Date

-   Billing Day: Subscription Start Day

-   Billing Period Alignment: Align to Term Start

-   Target Date for the Bill Run: 12/31/2018


With the above example scenario and the following billing rules:

-   Assuming 30 days in a month

-   Prorated by month when prorating periods greater than a month


The total amount is calculated based on the formula:

-   Price per month: $1200/12

-   Number of full months: 5 months (August, September, October, November, and December)

-   Prorated days: 18 days (July 14 - July 31)


Total amount on the invoice: $560.00 = $1200/12 \* (5 + 18/30)

## Example 2

With the above example scenario and the following billing rules:

-   Using actual days in a month

-   Prorated by month when prorating periods greater than a month


The total amount is calculated based on the formula:

-   Price per month: $1200/12

-   Number of full months: 5 months (August, September, October, November, and December)

-   Prorated days: 18 days (July 14 - July 31)

-   Actual number of days of the prorated month: 31 days


Total amount on the invoice: $558.06 = $1200/12 \* (5 + 18/31)

## Example 3

With the above example scenario and the following billing rules:

-   Assuming 30 days in a month

-   Prorated by day when prorating periods greater than a month


The total amount is calculated based on the formula:

-   Price per billing period: $1200

-   Number of full billing period: 0 year

-   Prorated days: 171 days (July 14 - December 31)

-   Number of days of the full period: 360 days


Total amount on the invoice: $570.00 = $1200 \* (171/360)

Note:

The actual prorated amount can only be less than or equal to the total amount of the original invoice.

## Example 4

With the above example scenario and the following billing rules:

-   Using actual days in a month

-   Prorated by day when prorating periods greater than a month


The total amount is calculated based on the formula:

-   Price per billing period: $1200

-   Number of full billing period: 0 year

-   Total number of days of the partial period: 171 days (July 14 - December 31)

-   Actual number of days of the full period: 365 days


Total amount on the invoice: $562.19 = $1200 \* (171/365)

See Billing Period Alignment for more information about charge calculation with different billing period alignments.
