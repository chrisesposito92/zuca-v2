---
title: "Change terms and conditions of prepayment subscription"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/prepaid-with-drawdown/change-terms-and-conditions-of-prepayment-subscription"
product: "zuora-billing"
scraped_at: "2025-12-24T08:30:03.889Z"
---

# Change terms and conditions of prepayment subscription

Learn how to modify the terms and conditions of prepayment subscriptions, including extending or shortening the subscription term, and updating trigger dates.

After you have created a prepayment subscription through Orders, you can change the terms and conditions of this subscription for your customer. You can extend or shorten the term of a prepayment subscription at any time during its term.

## Example

Suppose your customer has subscribed to the following charges for 12 months from 2022-01-01 to 2022-12-31:

| Product: API Calls Prepayment Service |  |
| --- | --- |
| Product rate plan: API Calls Monthly Prepayment Plan |  |
| Prepayment charge | Drawdown charge |
| Charge name: Monthly PlanCharge type: RecurringCharge model: Flat FeeList price: $20/Billing periodBilling period: MonthPrepaid UOM: Million callsPrepaid units: 10Validity period: Month | Charge name: DrawdownCharge type: UsageCharge model: Per unitList price: $5UOM: Million calls |

After a while, your customer wants to shorten the term by 3 months to 2022-09-30. You can do this through the Zuora UI, or by using a REST API.

## Configuration

When you extend a prepayment subscription, the number of periods must be one or multiple times of the validity period. You cannot extend the prepayment subscription to the middle of a validity period.

Shrinking the term is allowed anytime during a validity period. To shrink the term of a subscription in the middle of a validity period, the billing periods within the validity period must all be billed.

After the term is shrunk, a credit item will be generated in the next bill run to refund the subscriber based on the Credit Option you choose for the prepayment charge. If you want to reverse the change, you can delete the order (the term-shrinking order), and the prepaid units will be recovered.

However, one exception is that if a validity period of the prepayment subscription contains multiple billing periods and the credit option of the recurring prepayment charge is set to 'Consumption Based', when no drawdown usage is uploaded to the validity period, the subscription term cannot be shrunk.

You can update the subscription trigger dates (`ContractEffective`, `ServiceActivation`, `CustomerAcceptance`) in the UI and with the subscription API, after which you can update the term start date.

-   Term start date cannot be updated before the trigger dates are updated.

-   Term start date and the three trigger dates must be updated to the same date.

-   It is necessary to update the term start date once trigger dates are updated to update the funds.

-   Term start date cannot be updated when there is a drawdown (in case of undo action also).

-   If the updated term start date lies after the existing date, ensure the trigger dates specified in T&C orders API are also updated.
