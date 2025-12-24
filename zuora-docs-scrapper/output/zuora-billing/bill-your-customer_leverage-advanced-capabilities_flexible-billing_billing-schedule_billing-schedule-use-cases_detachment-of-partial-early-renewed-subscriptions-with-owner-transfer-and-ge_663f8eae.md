---
title: "Generation of a credit memo within the new invoice schedule"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/detachment-of-partial-early-renewed-subscriptions-with-owner-transfer-and-generation-of-credit-memos-in-a-new-invoice-schedule/generation-of-a-credit-memo-within-the-new-invoice-schedule"
product: "zuora-billing"
scraped_at: "2025-12-24T18:36:59.375Z"
---

# Generation of a credit memo within the new invoice schedule

Zuora Scheduler generates a credit memo during the invoice schedule process to manage previously billed service periods.

When Zuora Scheduler processes the first invoice schedule item in IS2, it generates an invoice (INV2) for $8,000.00, along with a credit memo (CM1) for the previously billed service period of C3, from 1 June 2025 to 31 August 2025.

The following table lists the information on IS2:

| Invoice schedule | Invoice schedule item | Run date | Amount | Actual Amount To Bill | Billed amount | Schedule item status | Billing document | Service period start date | Service period end date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| IS2 | 1 | 05-17-2025 | $8,000.00 | $8,000.00 | $8,000.00 | Processed | INV2 | 06-01-2025 | 01-31-2026 |
| CM1 ($3,000.00) | 06-01-2025 | 08-31-2025 |  |  |  |  |  |  |  |
| 2 | 12-05-2025 | $4,000.00 | $4,000.00 | - | Pending | - | - | - |  |

You can apply CM1 to INV2 to eliminate duplicate charges from your customer.

## Other use cases

For more use cases of detaching subscriptions from invoice schedules, see the following:

-   Detach partial early renewed subscriptions and generate credit memos in a new invoice schedule

-   Detach partial early renewed subscriptions and generate credit memos using standard billing process

-   Detach partial early renewed subscriptions in batches and generate credit memos across multiple invoice schedules
