---
title: "Generation of the credit memo within IS2"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/detachment-of-partial-early-renewed-subscriptions-in-batches-and-generation-of-credit-memos-across-multiple-invoice-schedules/generation-of-the-credit-memo-within-is2"
product: "zuora-billing"
scraped_at: "2025-12-24T18:36:36.776Z"
---

# Generation of the credit memo within IS2

Zuora Scheduler generates invoices and credit memos within IS2 to manage billing and eliminate duplicate charges.

When Zuora Scheduler processes the first invoice schedule item in IS2, it generates an invoice (INV2) for $16,000.00, along with a credit memo (CM1) for the previously billed service period of C5 and C6, from 1 June 2025 to 31 August 2025.

The following table lists the information on IS2:

| Invoice schedule | Invoice schedule item | Run date | Amount | Actual Amount To Bill | Billed amount | Schedule item status | Billing document | Service period start date | Service period end date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| IS2 | 1 | 05-17-2025 | $16,000.00 | $16,000.00 | $16,000.00 | Processed | INV2 | 06-01-2025 | 01-31-2026 |
| CM1 ($6,000.00) | 06-01-2025 | 08-31-2025 |  |  |  |  |  |  |  |
| 2 | 12-05-2025 | $8,000.00 | $8,000.00 | - | Pending | - | - | - |  |

You can apply CM1 to INV2 to eliminate duplicate charges from your customer.
