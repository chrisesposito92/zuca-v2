---
title: "Consolidation of invoices for invoice schedule items during subscription and order preview"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/consolidation-of-invoices-for-invoice-schedule-items-during-subscription-and-order-preview"
product: "zuora-billing"
scraped_at: "2025-12-24T18:37:43.384Z"
---

# Consolidation of invoices for invoice schedule items during subscription and order preview

This reference details the process of consolidating invoices and credit memos for invoice schedule items during subscription and order preview, including examples and settings for invoice generation rules.

This article explains how invoices or credit memos are consolidated for invoice schedule items during subscription and order preview.

The examples in this article all use the following billing rule setting: Invoice/Credit Memo generation rule is set to Create credit memos for net negative invoice totals without grouping charges (default).

## Example 1: Consolidate one invoice for one invoice schedule on one subscription

-   Create a subscription 1 with a recurring charge 1 from 2024-01-01 to 2025-01-01, with a monthly charge amount of $100.

-   Create an invoice schedule 1 on subscription 1 with the following settings:

    -   `invoiceSeparately` is set to `false`

    -   This schedule has two invoice schedule items that are added but not executed:


| Charge | Invoice schedule | Invoice schedule item | Run date | Amount | Schedule item status |
| --- | --- | --- | --- | --- | --- |
| 1 | 1 | 1 | 2024-01-01 | $400.00 | Pending |
| 2 | 2024-07-01 | $800.00 | Pending |  |  |

If you preview the subscription or the order on 2024-07-01, when `invoiceSeparately` is set to `false` on invoice schedule 1, one invoice is generated for invoice schedule 1 on subscription 1. This invoice includes two invoice items corresponding to the two invoice schedule items.

## Example 2: Consolidate one invoice for multiple invoice schedules on one subscription

-   Create a subscription 1 with recurring charges 1 and 2 from 2024-01-01 to 2025-01-01, each with the same monthly charge amount of $100.

-   Create invoice schedules 1 and 2 on subscription 1 , each schedule has the same following settings:

    -   `invoiceSeparately` is set to `false`

    -   Each schedule has two invoice schedule items that are added but not executed:


| Charge | Invoice schedule | Invoice schedule item | Run date | Amount | Schedule item status |
| --- | --- | --- | --- | --- | --- |
| 1 | 1 | 11 | 2024-01-01 | $400.00 | Pending |
| 12 | 2024-07-01 | $800.00 | Pending |  |  |
| 2 | 2 | 21 | 2024-01-01 | $400.00 | Pending |
| 22 | 2024-07-01 | $800.00 | Pending |  |  |

If you preview the subscription or the order on 2024-07-01, when `invoiceSeparately` is set to `false` on invoice schedules 1 and 2, one invoice is generated for invoice schedules 1 and 2 on subscription 1. This invoice includes four invoice items corresponding to the four invoice schedule items.

## Example 3: Consolidate invoices separately for multiple invoice schedules and one non-scheduled charge on one subscription

-   Create a subscription 1 with recurring charges 1, 2, and 3 from 2024-01-01 to 2025-01-01, each with the same monthly charge amount of $100.

-   Create invoice schedules 1 and 2 on subscription 1 , each schedule has the same following settings, and charge 3 is not scheduled:

    -   `invoiceSeparately` is set to `false`

    -   Each schedule has two invoice schedule items that are added but not executed:


| Charge | Invoice schedule | Invoice schedule item | Run date | Amount | Schedule item status |
| --- | --- | --- | --- | --- | --- |
| 1 | 1 | 11 | 2024-01-01 | $400.00 | Pending |
| 12 | 2024-07-01 | $800.00 | Pending |  |  |
| 2 | 2 | 21 | 2024-01-01 | $400.00 | Pending |
| 22 | 2024-07-01 | $800.00 | Pending |  |  |

If you preview the subscription or the order on 2024-07-01, two invoices are returned in the response:

-   The first invoice: When `invoiceSeparately` is set to `false` on invoice schedules 1 and 2, one invoice is generated for invoice schedules 1 and 2 on subscription 1. This invoice includes four invoice items corresponding to the four invoice schedule items.

-   The second invoice: The second invoice is generated for the non-scheduled charge 3. This invoice includes seven invoice items corresponding to the first seven-month charges.


## Example 4: Consolidate credit memos for multiple invoice schedules on one subscription

-   Create a subscription 1 with recurring charges 1 and 2 from 2024-01-01 to 2025-01-01, each with the same monthly charge amount of $100.

-   Create invoice schedules 1 and 2 on subscription 1 , having the following settings:

    -   `invoiceSeparately` is set to `false`

    -   Each schedule has two invoice schedule items:

        -   Invoice schedule items 11 and 21 are executed

        -   Invoice schedule items 12 and 22 are not executed


| Charge | Invoice schedule | Invoice schedule item | Run date | Amount | Schedule item status |
| --- | --- | --- | --- | --- | --- |
| 1 | 1 | 11 | 2024-01-01 | $800.00 | Processed |
| 12 | 2024-07-01 | -$400.00 | Pending |  |  |
| 2 | 2 | 21 | 2024-01-01 | $800.00 | Processed |
| 22 | 2024-07-01 | $100.00 | Pending |  |  |

If you preview the subscription or the order on 2024-10-01, the following result occurs:

-   With `invoiceSeparately` set to `false` on invoice schedules 1 and 2, one invoice is generated on subscription 1.

-   Additionally, because the Invoice/Credit Memo generation rule is set to Create credit memos for net negative invoice totals without grouping charges (default) , and the invoice total amount of the pending invoice schedule items 12 and 22 is negative, one credit memo instead of one invoice is generated. This credit memo includes two credit memo items corresponding to the two pending invoice schedule items 12 and 22, with the following details:

    -   CM1: 300

    -   Credit Memo Item 1 $400

    -   Credit Memo Item 2 -$100
