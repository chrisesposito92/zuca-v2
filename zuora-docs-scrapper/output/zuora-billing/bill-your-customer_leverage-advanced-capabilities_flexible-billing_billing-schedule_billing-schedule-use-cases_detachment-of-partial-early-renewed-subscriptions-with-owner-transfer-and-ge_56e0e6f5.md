---
title: "Detach the charge from the invoice schedule for a new invoice schedule"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/detachment-of-partial-early-renewed-subscriptions-with-owner-transfer-and-generation-of-credit-memos-in-a-new-invoice-schedule/detach-the-charge-from-the-invoice-schedule-for-a-new-invoice-schedule"
product: "zuora-billing"
scraped_at: "2026-02-19T03:15:48.186Z"
---

# Detach the charge from the invoice schedule for a new invoice schedule

Learn how to detach charge C3 from invoice schedule IS1 to enable owner transfer and generate new invoices and credit memos.

Detaching C3 from IS1 allows you to perform an owner transfer on S3 and generate invoices and credit memos in a new invoice schedule.

To detach C3 from IS1, perform the following steps:

1.  In the left navigation section, navigate to Customers > Orders .
2.  On the Orders page, click the number of the order associated with IS1.
3.  On the order detail page, click the number of IS1.
4.  On the invoice schedule detail page, click the more options icon in the upper right and then click Detach Charges . The Detach Charges dialogue is displayed.
5.  Select only C3 in the subscription rate plan charge list.
6.  Click Detach .

After detaching C3 from IS1, the billing schedule of IS1 is as follows:

-   Total Amount: $36,000.00

-   Actual Amount: $32,000.00

-   Billed Amount: $24,000.00

-   Unbilled Amount: $8,000.00

-   Invoice schedule item 1:

    -   Amount: $24,000.00

    -   Actual Amount To Bill: $24,000.00

    -   Billed Amount: $24,000.00

-   Invoice schedule item 2:

    -   Amount: $12,000.00

    -   Actual Amount To Bill: $8,000.00

    -   Billed Amount: -


The Actual Amount of IS1 differs from the Total Amount because the invoice schedule will not bill the remaining amounts of detached C3.

Actual Amount = $12,000.00+$12,000.00+($12,000.00-($12,000.00÷12)×4) = $32,000.00

In the equation above, `($12,000.00÷12)×4` represents the unbilled amounts for C3 for the service period from 1 September 2025 to 31 December 2025
