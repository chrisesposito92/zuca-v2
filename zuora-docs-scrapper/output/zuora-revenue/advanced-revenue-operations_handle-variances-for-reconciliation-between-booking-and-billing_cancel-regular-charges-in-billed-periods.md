---
title: "Cancel regular charges in billed periods"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/handle-variances-for-reconciliation-between-booking-and-billing/cancel-regular-charges-in-billed-periods"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:37:01.290Z"
---

# Cancel regular charges in billed periods

Learn how to handle rounding differences when canceling regular charges in billed periods by adjusting billing rules.

## Scenario

If you cancel a regular charge in a period that has already been billed, you might encounter a rounding difference between CCV and the total invoiced amount. It is because the CCV calculation is based on the charge effective start date and end date, whereas the invoice amount calculation has a dependency on the actual billing timing.

Note that this scenario happens only if you select From effective end date to end of the current billing period from When bill credit for recurring charges, based on billed period or credit period? when [defining billing rules](/zuora-billing/set-up-zuora-billing/billing-settings-configuration).

## Example

Suppose your customer creates a subscription to your storage service with a charge of $25 per month from Feb 11, 2020 to Mar 10, 2020. The bill cycle day is the 11th day of the month.

| Action | Charge type | CCV | Invoiced Amount | Term start date | Term end date | Bill run target date |
| --- | --- | --- | --- | --- | --- | --- |
| Create Subscription | Regular recurring charge | $25 | $25 | 2/11/2020 | 3/10/2020 | 2/11/2020 |

On Mar 1st, 2020, your customer cancels this subscription. The CCV data is then updated to $25 \* 19 (actual day in this service period) / 29 (days in this billing period) = $16.379310344827586, and it may round up to $17.

Since you have already billed the invoice, you have to credit back the invoice amount $25 \* 10/ 29 = $8.620689655172414, and it may round up to $9.

The following table describes the updated CCV and invoice data:

| Action | Charge type | CCV | Invoiced amount | Term start date | Term end date | Bill run target date |
| --- | --- | --- | --- | --- | --- | --- |
| Remove product | Regular recurring charge | $17 | $25 - $9 = $16 | 2/11/2020 | 2/29/2020 | 3/1/2020 |

From the preceding table, the CCV is $17 while the invoiced amount is $16, which introduces a $1 difference between the booking and billing amount.

## Solution

You can select Based on the total billing period amount and charged amount from When bill credit for recurring charges, based on billed period or credit period? when defining billing rules.
