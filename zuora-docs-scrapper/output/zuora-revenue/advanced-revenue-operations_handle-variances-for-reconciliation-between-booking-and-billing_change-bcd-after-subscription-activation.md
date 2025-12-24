---
title: "Change BCD after subscription activation"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/handle-variances-for-reconciliation-between-booking-and-billing/change-bcd-after-subscription-activation"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:37:03.624Z"
---

# Change BCD after subscription activation

Learn how changing the bill cycle day (BCD) after subscription activation can affect billing amounts due to proration, leading to discrepancies between CCV and invoice amounts.

## Scenario

When you change the bill cycle day (BCD) for a customer account, the actual billing amount can change due to proration differences. However, CCV is not affected and remains the same in this case, which results in the discrepancy between CCV and the invoice amount.

## Example

Suppose your customer S makes a subscription to your basic storage service for the period from Jan 1, 2020 to December 31, 2020. The rate plan charge for the basic storage service is a recurring charge of $300 per quarter. The BCD for this customer account is the 1st day of the month.

The CCV and the invoice data for the whole period are:

| Action | Description | CCV | Total invoiced amount | Term start date | Term end date | Bill run target date |
| --- | --- | --- | --- | --- | --- | --- |
| Create subscription for the basic storage service | Recurring quarterly charge for the whole subscription term | $1,200 | $1,200 | 1/1/2020 | 12/31/2020 | 1/1/20204/1/20207/1/202010/1/2020 |

On Jun 30, 2020, you change the BCD to the 10th day of the month. The CCV and invoice data are now changed to:

| Action | Description | CCV | Total invoiced amount | Term start date | Term end date | Bill run target date |
| --- | --- | --- | --- | --- | --- | --- |
| Create subscription for the basic storage service | Recurring quarterly charge for Q1 and Q2 | $600 | $600 | 1/1/2020 | 6/30/2020 | 1/1/20204/1/2020 |
| Change BCD from 1st to 10th of the month | Recurring quarterly charge for Q3 and Q4 | $600 | $600.32 | 7/1/2020 | 12/31/2020 | 7/1/20207/10/202010/10/2020 |

The calculation for the invoiced amount after the BCD change is listed as below:

-   From 07/01 to 07/09: $300 \* 9 days / 91 days = $29.67
-   From 07/10 to 10/09: $300
-   From 10/10 to 12/31: $300 \* 83 days / 92 days = $270.65

The total invoiced amount for Q3 and Q4 is $29.67 + $300 + $270.65 = $600.32

Therefore, CCV mismatches the invoice amount between 07/01/2020 and 12/31/2020.

## Impact

This scenario is a rare case. The possibility of the occurrence is extremely low.

## Solution

You can create manual journal entries (MJE) in Zuora Revenue to write off the differences in bulk. See Manual journal entries for more information.
