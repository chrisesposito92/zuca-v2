---
title: "Cancel a prepayment subscription"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/prepaid-with-drawdown/cancel-a-prepayment-subscription"
product: "zuora-billing"
scraped_at: "2025-12-24T08:30:11.408Z"
---

# Cancel a prepayment subscription

Learn how to cancel a prepayment subscription for a customer using the Zuora UI or REST API, including considerations for billing and credit options.

After you have created a prepayment subscription through Orders, you can cancel this subscription for your customer.

## Example

Suppose your customer has subscribed to the following charges for 12 months from 2022-01-01 to 2022-12-31:

| Product: API Calls Prepayment Service |  |
| --- | --- |
| Product rate plan: API Calls Monthly Prepayment Plan |  |
| Prepayment charge | Drawdown charge |
| Charge name: Monthly PlanCharge type: RecurringCharge model: Flat FeeList price: $20/Billing periodBilling period: MonthPrepaid UOM: Million callsPrepaid units: 10Validity period: Month | Charge name: DrawdownCharge type: UsageCharge model: Per unitList price: $5UOM: Million calls |

On 2022-03-15, the customer wants to cancel this subscription on 2022-05-01. You can do this for your customer through the Zuora UI or the REST API.

## Zuora UI

Follow the steps described in [Cancel a subscription](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/subscriptions-cancelation/use-the-zuora-ui---cancel-a-subscription).

## Additional considerations

-   Cancellation is allowed anytime during a validity period. To cancel a subscription in the middle of a validity period, the billing periods within the validity period must all be billed. After the cancellation, a credit item will be generated in the next bill run to refund the subscriber based on the Credit Option you choose for the prepayment charge. However, one exception is that if a validity period of the prepayment subscription contains multiple billing periods and the credit option of the recurring prepayment charge is set to "Consumption Based", you can cancel the subscription in the middle of the validity period if no drawdown usage records is uploaded before the cancellation effective date.

-   If you want to reverse the cancellation, you can delete the order (the cancellation order), and the prepaid units will be recovered.
