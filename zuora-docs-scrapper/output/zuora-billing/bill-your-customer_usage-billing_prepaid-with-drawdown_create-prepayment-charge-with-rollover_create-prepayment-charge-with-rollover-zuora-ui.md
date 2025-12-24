---
title: "Create prepayment charge with rollover - Zuora UI"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/prepaid-with-drawdown/create-prepayment-charge-with-rollover/create-prepayment-charge-with-rollover---zuora-ui"
product: "zuora-billing"
scraped_at: "2025-12-24T08:29:37.695Z"
---

# Create prepayment charge with rollover - Zuora UI

Create prepayment and drawdown charges to enable product sales through subscriptions in Zuora.

After creating the prepayment and drawdown charges, you can start selling your product to customers by creating subscriptions through Orders. For example, create a new subscription with three months (01/01/2022—04/01/2022).

1.  Create a prepayment charge to create the following prepayment charges to sell your service:

    -   Monthly Plan (Apply Rollover Fund First): $1, 1000 units per month.

    -   Monthly Plan (Apply Rollover Fund Last): $1, 1000 units per month


2.  When you create the Monthly Plan (Apply Rollover Fund First) charge, to enable Rollover, set the maximum rollover validity periods to 2, and apply the rollover fund first. Perform the following steps:
    1.  Enable the Rollover toggle and specify the following field values:

        -   Rollover Periods: 2

        -   Rollover Application Option: Apply First


    2.  Create a drawdown charge to create the drawdown charges in the same rate plan.
3.  When you create the Monthly Plan (Apply Rollover Fund Last) charge, to enable Rollover, set the maximum rollover validity periods to 2, and apply the rollover fund last. Perform the following steps:
    1.  Enable the Rollover toggle and specify the following field values:

        -   Rollover Periods: 2

        -   Rollover Application Option: Apply Last


    2.  Create a drawdown charge to create the drawdown charges in the same rate plan.

After reating the prepayment and drawdown charges, you can start selling your product to customers by creating subscriptions through Orders. For example, create a new subscription with three months (01/01/2022—04/01/2022).
