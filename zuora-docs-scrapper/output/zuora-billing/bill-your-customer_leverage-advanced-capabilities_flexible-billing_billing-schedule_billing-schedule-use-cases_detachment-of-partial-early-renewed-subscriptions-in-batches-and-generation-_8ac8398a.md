---
title: "Detach charges C3 and C4 from IS1"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/detachment-of-partial-early-renewed-subscriptions-in-batches-and-generation-of-credit-memos-across-multiple-invoice-schedules/detach-charges-c3-and-c4-from-is1"
product: "zuora-billing"
scraped_at: "2025-12-24T18:36:39.458Z"
---

# Detach charges C3 and C4 from IS1

Learn how to detach charges C3 and C4 from IS1 to manage invoice schedules effectively.

Detaching C3 and C4 from IS1 allows you to generate invoices and credit memos for the changes on S3 and S4 in a new invoice schedule.

To detach C3 and C4 from IS1, perform the following steps:

1.  In the left navigation section, navigate to Customers > Orders .
2.  On the Orders page, click the number of the order associated with IS1.
3.  On the order detail page, click the number of IS1.
4.  On the invoice schedule detail page, click the more options icon in the upper right and then click Detach Charges . The Detach Charges dialogue is displayed.
5.  Select only C3 and C4 in the subscription rate plan charge list.
6.  Click Detach .

After detaching C3 and C4 from IS1, the billing schedule of IS1 is as follows:

-   Total Amount: $72,000.00

-   Actual Amount: $56,000.00

-   Billed Amount: $48,000.00

-   Unbilled Amount: $8,000.00

-   Invoice schedule item 1:

    -   Amount: $48,000.00

    -   Actual Amount To Bill: $48,000.00

    -   Billed Amount: $48,000.00

-   Invoice schedule item 2:

    -   Amount: $24,000.00

    -   Actual Amount To Bill: $8,000.00

    -   Billed Amount: -


The Actual Amount of IS1 is different from the Total Amount because the invoice schedule will not bill the remaining amounts of detached C3, C4, C5, and C6.

Actual Amount = $12,000.00×2+($12,000.00-($12,000.00÷12)×4)×4 = $56,000.00

In the equation above:

-   `$12,000.00×2` represents the total amounts of C1 and C2.

-   `($12,000.00÷12)×4` represents the unbilled amounts for any of C3, C4, C5, or C6 for the service period from 1 September 2025 to 31 December 2025.

-   `$12,000.00-($12,000.00÷12)×4` represents the billed amounts for any of C3, C4, C5, or C6 for the service period from 1 January 2025 to 31 August 2025.
