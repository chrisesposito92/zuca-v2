---
title: "Total amount calculation with partial period proration"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/proration/total-amount-calculation-with-partial-period-proration"
product: "zuora-billing"
scraped_at: "2026-02-20T17:30:39.250Z"
---

# Total amount calculation with partial period proration

This topic explains how to calculate the total amount for recurring charges with partial period proration, including formulas and examples for both total and prorated amounts.

## Calculating Total Amount with Partial Week Proration

With recurring charges for partial weekly billing periods, the total amount is equal to the sum of prorated amount for partial weeks plus charge amount for full weeks.

The calculation of prorated amount for partial weeks depends on the setting of the [Bill recurring charges for partial week (with weekly based billing periods)?](https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/billing-settings-configuration/general-billing-settings/define-billing-rules) billing rule. If this billing rule is set to Yes, the prorated amount is calculated.

You can use the following formula to calculate the total amount:

Charge\_amount = Price\_per\_week\* (Number\_of\_full\_weeks + (Prorated\_days/7 ) )

Example Scenario:

-   Charge Model: Per Unit Pricing

-   List Price: $100 with the list price base option of Week

-   Billing Period: Week

-   Subscription Term Start Date: 01/01/2018

-   Subscription Term: 5 weeks

-   Billing Day: Specific Day of Week, Wednesday

-   Billing Period Alignment: Align to Charge

-   Target Date for the Bill Run: 01/31/2018


In this example, the total amount is calculated based on the formula:

-   Price per week: $100

-   Number of full weeks: 5 weeks

-   Prorated days: 2 days (01/01/2018 - 01/02/2018)


Total amount on the invoice: $528.57 = $100 \* (5 + 2/7)

## When billing period is the subscription term

When the billing period is the subscription term, the system will calculate the proration amount according to the list price. Therefore, if the list price is monthly, the system will calculate the amount monthly. If the list price is weekly, the system will calculate the amount weekly.
