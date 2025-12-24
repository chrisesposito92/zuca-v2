---
title: "Create prepayment charge with rollover - Zuora UI - Example 2"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/prepaid-with-drawdown/create-prepayment-charge-with-rollover/create-prepayment-charge-with-rollover---zuora-ui---example-2"
product: "zuora-billing"
scraped_at: "2025-12-24T08:29:43.509Z"
---

# Create prepayment charge with rollover - Zuora UI - Example 2

Create prepayment and drawdown charges to enable product sales through subscriptions in Zuora.

Suppose you run a software company and have configured the following prepayment charge and drawdown charge in your product catalog:
| Prepayment charge | Drawdown charge |
| --- | --- |
| Billing period: AnnualPrepaid units: 1000Validity period: Annual | Billing period: MonthList price: $1UOM: Each |

1.  Create a prepayment charge to create the following prepayment charges to sell your service.
2.  Enable the Rollover toggle and specify the following field values:

    -   Rollover Periods: 1

    -   Rollover Application Option: Apply First

    -   Rollover Period Length: 5 months


    Use the Rollover Period Length field when you want to set the rollover fund's period length shorter than the prepayment charge's validity period. In this case, you must set the Rollover Periods field to 1. The preceding example defines the rollover fund's period length as 5 months, shorter than the prepayment charge's validity period: a year.

3.  Create a new subscription containing the above two charges with the subscription term length of 24 Months, Term start date and Subscription start date as 01/01/2023. Create two funds:

    -   Fund 1: 1/1/2023-1/1/2024

    -   Fund 2: 1/1/2024-1/1/2025


4.  Upload usage records.
    Upload an 800-unit usage record in the first service period.

    For Fund 1:
    | Total Prepaid Units | Total Drawdown Units | Remaining Units |
    | --- | --- | --- |
    | 1,000.00 | 800.00 | 200.00 |

5.  Create bill runs.
    In this case, the bill run is triggered on Jan 1, 2024, so the remaining units from the first validity period(Fund 1) can be rolled over to the next validity period and create a new fund (Fund1). The Fund1's rollover fund period is Jan 1, 2024, to Jun 1, 2024, as the rollover period is 5 months.
