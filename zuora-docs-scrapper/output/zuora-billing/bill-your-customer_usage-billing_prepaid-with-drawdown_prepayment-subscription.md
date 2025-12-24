---
title: "Prepayment subscription"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/prepaid-with-drawdown/prepayment-subscription"
product: "zuora-billing"
scraped_at: "2025-12-24T08:29:25.624Z"
---

# Prepayment subscription

A prepayment subscription allows customers to pay upfront for a set period of service or a bundle of products, with options for discounts and flexible subscription terms.

A prepayment subscription is a type of subscription model where the customer pays upfront for a set period of service or a bundle of products. You can create a prepayment subscription using the Zuora UI or through an API.

## Example

Suppose you run a software company and have configured the following prepayment charge and drawdown charge in your product catalog:

-   Product: API Calls Prepayment Service

-   Product rate plan: API Calls Monthly Prepayment Plan


| Prepayment charge | Drawdown charge |
| --- | --- |
| Charge name: Monthly PlanCharge type: RecurringCharge model: Flat FeeList price: $20/Billing periodBilling period: MonthPrepaid UOM: Million callsPrepaid units: 10Validity period: Month | Charge name: DrawdownCharge type: UsageCharge model: Per unitList price: $5UOM: Million calls |

Your customer is interested in subscribing to your monthly plan for 12 months. You can create this 12-month subscription for the customer. Suppose you want to offer your customers discounts, you can apply percentage discounts to the prepayment charge, drawdown charge, or both in the subscription.

## Additional Considerations

-   The evergreen term type is supported. To enable the support of evergreen subscriptions in the Prepaid with Drawdown feature, submit a request at [Zuora Global Support](https://www.zuora.com/support-center/).

-   The subscription term should be one or multiple times of the validity period. See Create subscription with partial period for an exception.

-   When the validity period of the prepayment charge is Subscription Term , the subscription term type cannot be Day or Week.

-   When both the validity period and billing period of the prepayment charge are set as Subscription Term and the list price base is a month-based value (not a week-based value), you must ensure the subscription term is one or multiple times the list price base.

-   If the Contract Effective Date and the Term Start Date are different, the difference must be one or multiple times of the validity period.

-   Discount limitation: when you apply percentage discounts to a prepayment subscription, keep the following things in mind:

    -   Do not select the Allow apply to billing period partially option.

    -   Do not select the Tax Inclusive mode.
