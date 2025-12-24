---
title: "Create prepayment charge with rollover"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/prepaid-with-drawdown/create-prepayment-charge-with-rollover"
product: "zuora-billing"
scraped_at: "2025-12-24T08:29:35.730Z"
---

# Create prepayment charge with rollover

Learn how to create a prepayment charge with rollover, allowing customers to transfer unused prepaid balance to the next validity period.

Prepaid with drawdown rollover enables you to transfer the accumulative carryover of your customers' prepaid balance funds to the following validity period when using prepaid with drawdown.

## Example

Suppose you run a software company and have configured the following prepayment charge and drawdown charge in your product catalog:

| Prepayment charge | Drawdown charge |
| --- | --- |
| Billing period: MonthPrepaid units: 1000Validity period: Month | Billing period: MonthList price: $1UOM: Each |

Your customer is interested in subscribing to your monthly plan for three months. You can create a quarter's subscription for the customer through the Zuora UI or REST API.

## Considerations

-   Rollback is not supported yet. In other words, when the balanced funds have been rolled over, you cannot withdraw the rollover funds.

-   Each validity period in which you get your rollover balance has to complete the bill run first. If a bill run has triggered multiple validity periods to be rolled over, only the latest validity period will be rolled over, not one after the other.

-   Rollover will only happen if a minimum of two validity periods exist.

-   The last validity period cannot be rolled over.
