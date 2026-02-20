---
title: "Detach the charge from the invoice schedule using the standard billing process"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/detachment-of-partial-early-renewed-subscriptions-and-generation-of-credit-memos-using-standard-billing-process/detach-the-charge-from-the-invoice-schedule-using-the-standard-billing-process"
product: "zuora-billing"
scraped_at: "2026-02-20T17:35:50.951Z"
---

# Detach the charge from the invoice schedule using the standard billing process

Learn how to detach a charge from an invoice schedule, specifically removing C2 from IS1, and understand the resulting billing schedule changes.

To detach C2 from IS1, perform the following steps:

1.  In the left navigation section, navigate to Customers > Orders .
2.  On the Orders page, click the number of the order associated with IS1.
3.  On the order detail page, click the number of IS1.
4.  On the invoice schedule detail page, click the more options icon in the upper right and then click Detach Charges . The Detach Charges dialogue is displayed.
5.  Select only C2 in the subscription rate plan charge list.
6.  Click Detach .

After detaching C2 from IS1, the billing schedule of IS1 is as follows:

-   Total Amount: $24,000.00

-   Actual Amount: $22,000.00

-   Billed Amount: $20,000.00

-   Unbilled Amount: $2,000.00

-   Invoice schedule item 1:

    -   Amount: $20,000.00

    -   Actual Amount To Bill: $20,000.00

    -   Billed Amount: $20,000.00

-   Invoice schedule item 2:

    -   Amount: $4,000.00

    -   Actual Amount To Bill: $2,000.00

    -   Billed Amount: -


The Actual Amount is even greater than the amount before detaching. This is because when charges are detached from their original invoice schedules, amounts that have already been billed are still counted toward the Actual Amount , whereas unissued credit memos and unbilled amounts are not. This behavior allows you to generate credit memos separately.

Actual Amount = $12,000.00+$10,000.00 = $22,000.00

In the equation above, `$10,000.00` represents the billed amount for C2 covering the service period from 1 January 2025 to 31 October 2025.
