---
title: "Billing document generation details"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/creation-of-multiple-invoice-schedules-for-a-single-order-within-a-multiyear-contract/billing-document-generation-details"
product: "zuora-billing"
scraped_at: "2025-12-24T18:35:17.718Z"
---

# Billing document generation details

Explore the automatic processing of invoice schedules by Zuora Scheduler, including the generation of invoices and status updates for each schedule item.

On the specific dates that are specified during invoice schedule creation, the following operations automatically occur:

-   On 1 January 2023, Zuora Scheduler automatically processes invoice schedule item 1 of invoice schedule IS-00000001 to generate an invoice with an amount of $1,000.00. The status of invoice schedule item 1 changes to Processed from Pending. The status of invoice schedule IS-00000001 becomes Partially Processed, and its next run date is 11/01/2023 .

-   On 1 November 2023, Zuora Scheduler automatically processed invoice schedule item 2 of invoice schedule IS-00000001 to generate an invoice with an amount of $1,400.00. The status of invoice schedule item 2 changes to Processed from Pending. The status of invoice schedule IS-00000001 becomes Fully Processed, and its next run date is null.

-   On 1 January 2024, Zuora Scheduler automatically processes invoice schedule item 1 of invoice schedule IS-00000002 to generate an invoice with an amount of $500.00. The status of invoice schedule item 1 changes to Processed from Pending. The status of invoice schedule IS-00000002 becomes Partially Processed, and its next run date is 10/01/2024 .

-   On 1 October 2024, Zuora Scheduler automatically processed invoice schedule item 2 of invoice schedule IS-00000002 to generate an invoice with an amount of $1,300.00. The status of invoice schedule item 2 changes to Processed from Pending. The status of invoice schedule IS-00000002 becomes Fully Processed, and its next run date is null.


The following table lists the information on the invoice schedules that are fully processed:

| Invoice schedule | Invoice schedule item | Run date | Amount | Billed amount | Schedule item status | Billing document |
| --- | --- | --- | --- | --- | --- | --- |
| IS-00000001 | 1 | 01/01/2023 | $1,000.00 | $1,000.00 | Processed | INV00000001 |
| 2 | 11/01/2023 | $14,000.00 | $14,000.00 | Processed | INV00000002 |  |
| IS-00000002 | 1 | 01/01/2024 | $5,000.00 | $5,000.00 | Processed | INV00000003 |
| 2 | 10/01/2024 | $13,000.00 | $13,000.00 | Processed | INV00000004 |  |
