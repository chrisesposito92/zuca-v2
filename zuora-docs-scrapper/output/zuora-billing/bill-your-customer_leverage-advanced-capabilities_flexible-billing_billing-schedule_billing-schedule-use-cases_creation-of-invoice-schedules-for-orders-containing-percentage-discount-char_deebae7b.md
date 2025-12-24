---
title: "Invoice schedule and billing document generation details"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/creation-of-invoice-schedules-for-orders-containing-percentage-discount-charges/invoice-schedule-and-billing-document-generation-details"
product: "zuora-billing"
scraped_at: "2025-12-24T18:35:00.519Z"
---

# Invoice schedule and billing document generation details

Explore the details of the automatic processing of invoice schedules and billing document generation based on project progress, including status changes and invoice amounts.

The discount is automatically calculated during the creation of the corresponding invoice schedule.

According to the actual project progress, the following operations automatically occur:

-   On 16 June 2023, Zuora Scheduler automatically processes invoice schedule item 2 of invoice schedule IS-00000001 to generate an invoice with an amount of $8,000.00. The status of invoice schedule item 2 changes to Processed from Pending. The status of invoice schedule IS-00000001 is Partially Processed.

-   On 18 October 2023, Zuora Scheduler automatically processes invoice schedule item 3 of invoice schedule IS-00000001 to generate an invoice with an amount of $28,000.00 . The status of invoice schedule item 3 changes to Processed from Pending.

-   The status of invoice schedule IS-00000001 changes to Fully Processed, and its next run date is null.


The following table lists the information on the invoice schedule.

| Invoice schedule item | Name | Run date | Amount | Schedule item status | Billing document |
| --- | --- | --- | --- | --- | --- |
| 1 | HTD | - | $2,160.00 | Pending | INV001 |
| 2 | RFU | - | $4,320.00 | Pending | INV002 |
| 3 | GLD | - | $15,120.00 | Pending | INV003 |

The following table lists the information on invoice INV001 generated for the order on the HTD date.

| Invoice item | Charge name | Service period | Amount/Discount amount | Total amount |
| --- | --- | --- | --- | --- |
| 1 | Software Implementation - Professional Service | 2024/01/01 to 2024/01/01 | $2,700.00 | $2,160.00 |
| 2 | Percentage Discount 1 | 2024/01/01 to 2024/01/01 | $-270.00 |  |
| 3 | Percentage Discount 2 | 2024/01/01 to 2024/01/01 | $-270.00 |  |
