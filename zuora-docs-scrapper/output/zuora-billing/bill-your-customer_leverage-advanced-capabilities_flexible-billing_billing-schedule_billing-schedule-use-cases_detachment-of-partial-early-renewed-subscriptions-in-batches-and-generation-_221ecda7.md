---
title: "Generation of the credit memo within IS3"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/detachment-of-partial-early-renewed-subscriptions-in-batches-and-generation-of-credit-memos-across-multiple-invoice-schedules/generation-of-the-credit-memo-within-is3"
product: "zuora-billing"
scraped_at: "2025-12-24T18:36:47.105Z"
---

# Generation of the credit memo within IS3

Zuora Scheduler generates invoices and credit memos within IS3, including the application of CM2 to INV3 to prevent duplicate charges.

When Zuora Scheduler processes the first invoice schedule item in IS3, it generates an invoice (INV3) for $16,000.00, along with a credit memo (CM2) for the previously billed service period of C3 and C4, from 1 August 2025 to 31 August 2025.

The following table lists the information on IS3:

| Invoice schedule | Invoice schedule item | Run date | Amount | Actual Amount To Bill | Billed amount | Schedule item status | Billing document | Service period start date | Service period end date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| IS3 | 1 | 07-17-2025 | $16,000.00 | $16,000.00 | $16,000.00 | Processed | INV3 | 08-01-2025 | 03-31-2026 |
| CM2 ($2,000.00) | 08-01-2025 | 08-31-2025 |  |  |  |  |  |  |  |
| 2 | 12-05-2025 | $8,000.00 | $8,000.00 | - | Pending | - | - | - |  |

You can apply CM2 to INV3 to eliminate duplicate charges from your customer.

## Other use cases

For more use cases of detaching subscriptions from invoice schedules, see the following:

-   Detach partial early renewed subscriptions and generate credit memos in a new invoice schedule

-   Detach partial early renewed subscriptions and generate credit memos using standard billing process

-   Detach partial early renewed subscriptions with owner transfer and generate credit memos in a new invoice schedule
