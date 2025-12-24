---
title: "Detach the charge from the invoice schedule"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/detachment-of-partial-early-renewed-subscriptions-and-generation-of-credit-memos-in-a-new-invoice-schedule/detach-the-charge-from-the-invoice-schedule"
product: "zuora-billing"
scraped_at: "2025-12-24T18:36:08.935Z"
---

# Detach the charge from the invoice schedule

Learn how to detach charge C3 from invoice schedule IS1 to update billing details.

To detach C3 from IS1, perform the following steps:

1.  In the left navigation section, navigate to Customers > Orders .
2.  On the Orders page, click the number of the order associated with IS1.
3.  On the order detail page, click the number of IS1.
4.  On the invoice schedule detail page, click the more options icon in the upper right and then click Detach Charges . The Detach Charges dialogue is displayed.
5.  Select only C3 in the subscription rate plan charge list.
6.  Click Detach .

After detaching C3 from IS1, the billing schedule of IS1 is as follows:

-   Total Amount: $45,000.00

-   Actual Amount: $40,000.00

-   Billed Amount: $30,000.00

-   Unbilled Amount: $10,000.00

-   Invoice schedule item 1:

    -   Amount: $30,000.00

    -   Actual Amount To Bill: $30,000.00

    -   Billed Amount: $30,000.00

-   Invoice schedule item 2:

    -   Amount: $15,000.00

    -   Actual Amount To Bill: $10,000.00

    -   Billed Amount: -


The Actual Amount is even greater than the amount before detaching. This is because when charges are detached from their original invoice schedules, amounts that have already been billed are still counted toward the Actual Amount, whereas unissued credit memos and unbilled amounts are not. This behavior allows you to generate credit memos separately.

Actual Amount = $15,000.00+$15,000.00+$10,000.00 = $40,000.00

In the equation above, `$10,000.00` represents the billed amount for C3 covering the service period from 1 January 2025 to 31 August 2025.
