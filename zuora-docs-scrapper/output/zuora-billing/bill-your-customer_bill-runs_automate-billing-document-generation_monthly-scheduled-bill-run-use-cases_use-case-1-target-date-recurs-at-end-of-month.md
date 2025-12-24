---
title: "Use case 1: target date recurs at end of month"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/bill-runs/automate-billing-document-generation/monthly-scheduled-bill-run-use-cases/use-case-1-target-date-recurs-at-end-of-month"
product: "zuora-billing"
scraped_at: "2025-12-24T08:26:25.292Z"
---

# Use case 1: target date recurs at end of month

This use case describes scheduling a bill run on the 25th of each month, with the invoice date on the same day and the target date at the end of the month.

Suppose you want to schedule a bill run to execute on the 25th of each month, the invoice date recurs on the 25th of the same month, and the target date recurs on the end day of the same month, as follows.

| Execution # | Bill Run Date | Invoice Date | Target Date |
| --- | --- | --- | --- |
| 1 | 04/25/2024 | 04/25/2024 | 04/30/2024 |
| 2 | 05/25/2024 | 05/25/2024 | 05/31/2024 |
| 3 | 06/25/2024 | 06/25/2024 | 06/30/2024 |
| ... |  |  |  |
