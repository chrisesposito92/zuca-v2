---
title: "Detach charges C5 and C6 from IS1"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/detachment-of-partial-early-renewed-subscriptions-in-batches-and-generation-of-credit-memos-across-multiple-invoice-schedules/detach-charges-c5-and-c6-from-is1"
product: "zuora-billing"
scraped_at: "2025-12-24T18:36:29.236Z"
---

# Detach charges C5 and C6 from IS1

Detaching charges C5 and C6 from IS1 allows for the generation of invoices and credit memos in a new invoice schedule.

Detaching C5 and C6 from IS1 allows you to generate invoices and credit memos for the changes on S5 and S6 in a new invoice schedule.

To detach C5 and C6 from IS1, perform the following steps:

1.  In the left navigation section, navigate to Customers > Orders .
2.  On the Orders page, click the number of the order associated with IS1.
3.  On the order detail page, click the number of IS1.
4.  On the invoice schedule detail page, click the more options icon in the upper right and then click Detach Charges . The Detach Charges dialogue is displayed.
5.  Select only C5 and C6 in the subscription rate plan charge list.
6.  Click Detach .

After detaching C5 and C6 from IS1, the billing schedule of IS1 is as follows:

-   Total Amount: $72,000.00

-   Actual Amount: $64,000.00

-   Billed Amount: $48,000.00

-   Unbilled Amount: $16,000.00

-   Invoice schedule item 1:

    -   Amount: $48,000.00

    -   Actual Amount To Bill: $48,000.00

    -   Billed Amount: $48,000.00

-   Invoice schedule item 2:

    -   Amount: $24,000.00

    -   Actual Amount To Bill: $16,000.00

    -   Billed Amount: -


The Actual Amount of IS1 is different from the Total Amount because the invoice schedule will not bill the remaining amounts of detached C5 and C6.

Actual Amount = $12,000.00×4+($12,000.00-($12,000.00÷12)×4)×2 = $64,000.00

In the equation above:

-   `$12,000.00×4` represents the total amounts of C1, C2, C3, and C4.

-   `($12,000.00÷12)×4` represents the unbilled amounts for C5 or C6 for the service period from 1 September 2025 to 31 December 2025.

-   `$12,000.00-($12,000.00÷12)×4` represents the billed amounts for C5 or C6 for the service period from 1 January 2025 to 31 August 2025.
