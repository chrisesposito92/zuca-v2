---
title: "Renew a prepayment subscription"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/prepaid-with-drawdown/renew-a-prepayment-subscription"
product: "zuora-billing"
scraped_at: "2025-12-24T08:30:16.729Z"
---

# Renew a prepayment subscription

Learn how to renew a prepayment subscription for a customer using the Zuora UI or REST API, including considerations for billing and credit options.

After you have created a prepayment subscription through Orders, you can renew the subscription for your customer.

## Example

Suppose your customer has subscribed to the following charges for 12 months from 2022-01-01 to 2022-12-31:

| Product: API Calls Prepayment Service |  |
| --- | --- |
| Product rate plan: API Calls Monthly Prepayment Plan |  |
| Prepayment charge | Drawdown charge |
| Charge name: Monthly PlanCharge type: RecurringCharge model: Flat FeeList price: $20/Billing periodBilling period: MonthPrepaid UOM: Million callsPrepaid units: 10Validity period: Month | Charge name: DrawdownCharge type: UsageCharge model: Per unitList price: $5UOM: Million calls |

After a while, your customer wants to renew the subscription for another 12 months from 2023-01-01 to 2023-12-31. You can do this for your customer through the Zuora UI or the REST API.

## Zuora UI

Follow the steps described in [Renew a subscription](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/subscriptions-and-upgrade-products-renewal/use-the-zuora-ui---renew-subscriptions-and-update-products).

## Additional considerations

-   Renewal term can be Evergreen. If you want to enable the support of evergreen subscriptions in the prepaid with drawdown feature, submit a request at [Zuora Global Support](https://www.zuora.com/support-center/).

-   The length of the renewal term must be one or multiple times of the existing validity period.
