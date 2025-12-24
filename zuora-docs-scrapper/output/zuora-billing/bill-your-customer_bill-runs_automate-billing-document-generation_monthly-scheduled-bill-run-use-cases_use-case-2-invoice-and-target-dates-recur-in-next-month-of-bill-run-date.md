---
title: "Use case 2: invoice and target dates recur in next month of bill run date"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/bill-runs/automate-billing-document-generation/monthly-scheduled-bill-run-use-cases/use-case-2-invoice-and-target-dates-recur-in-next-month-of-bill-run-date"
product: "zuora-billing"
scraped_at: "2025-12-24T08:26:32.556Z"
---

# Use case 2: invoice and target dates recur in next month of bill run date

This use case describes scheduling a bill run on the 16th of each month, with the invoice date recurring on the 1st day and the target date on the last day of the following month.

Suppose you want to schedule a bill run to execute on the 16th of each month, the invoice date recurs on the 1st day of each following month, and the target date on the end day of each following month, as follows.

| Execution # | Bill Run Date | Invoice Date | Target Date |
| --- | --- | --- | --- |
| 1 | 2024-05-16 | 2024-06-01 | 2024-06-30 |
| 2 | 2024-06-16 | 2024-07-01 | 2024-07-31 |
| 3 | 2024-07-16 | 2024-08-01 | 2024-08-31 |
| ... |  |  |  |
