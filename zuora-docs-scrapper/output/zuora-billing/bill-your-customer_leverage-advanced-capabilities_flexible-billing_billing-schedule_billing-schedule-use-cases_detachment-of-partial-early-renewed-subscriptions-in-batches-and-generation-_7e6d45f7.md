---
title: "Detachment of partial early renewed subscriptions in batches and generation of credit memos across multiple invoice schedules"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/detachment-of-partial-early-renewed-subscriptions-in-batches-and-generation-of-credit-memos-across-multiple-invoice-schedules"
product: "zuora-billing"
scraped_at: "2025-12-24T18:36:26.886Z"
---

# Detachment of partial early renewed subscriptions in batches and generation of credit memos across multiple invoice schedules

Learn how to manage early renewals and product changes in subscriptions, generate credit memos, and handle invoice schedules effectively.

The ability to renew subscriptions associated with an invoice schedule at any time gives you greater flexibility in shaping your business strategy. By detaching subscription rate plan charges in batches, you can generate credit memos across multiple invoice schedules.

In this use case, six subscriptions with the same term of 12 months are created and a single invoice schedule with two invoice schedule items is created for these subscriptions.

As shown in the following table, six subscriptions are created by creating an order, respectively containing rate plan charges C1, C2, C3, C4, C5, and C6, with a total amount of $72,000.00. For more information, see Create subscriptions .

| Subscription number | Charge start date | Term (Month) | Charge number | Charge end date | Selling price | Lit price base | Billing period |
| --- | --- | --- | --- | --- | --- | --- | --- |
| S1 | 01-01-2025 | 12 | C1 | 12-31-2025 | $12,000.00 | Per Year | Annual |
| S2 | 01-01-2025 | 12 | C2 | 12-31-2025 | $12,000.00 | Per Year | Annual |
| S3 | 01-01-2025 | 12 | C3 | 12-31-2025 | $12,000.00 | Per Year | Annual |
| S4 | 01-01-2025 | 12 | C4 | 12-31-2025 | $12,000.00 | Per Year | Annual |
| S5 | 01-01-2025 | 12 | C5 | 12-31-2025 | $12,000.00 | Per Year | Annual |
| S6 | 01-01-2025 | 12 | C6 | 12-31-2025 | $12,000.00 | Per Year | Annual |

You have created an invoice schedule IS1 to bill S1, S2, S3, S4, S5, and S6. The invoice schedule contains two invoice schedule items. The first item was processed successfully and generated an invoice INV1 for $48,000.00. For more information, see Create invoice schedules .

The following table lists the information on this invoice schedule:

| Invoice schedule | Invoice schedule item | Run date | Amount | Actual Amount To Bill | Billed amount | Schedule item status | Billing document | Service period start date | Service period end date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| IS1 | 1 | 01-10-2025 | $48,000.00 | $48,000.00 | $48,000.00 | Processed | INV1 | 01-01-2025 | 08-31-2025 |
| 2 | 10-05-2025 | $24,000.00 | $24,000.00 | - | Pending | - | - | - |  |

Since the six subscriptions have the same term and selling price, they each contribute $8,000.00 to the total $48,000.00 invoiced in INV1 for the service period from 1 January 2025 to 31 August 2025.

Assume your customer wants to do the following:

-   Change S5 to another product and subscribe to a 12-month term (S7), from 1 June 2025 to 31 May 2026.

-   Renew S6 for another year, from 1 June 2025 to 31 May 2026.

-   Change S3 to another product and subscribe to a 12-month term (S8), from 1 August 2025 to 31 July 2026.

-   Renew S4 for another year, from 1 August 2025 to 31 July 2026.

-   Keep S1 and S2 unchanged.


You want to generate two new invoice schedules:

-   IS2 to bill changes on S5, S6, and S7.

-   IS3 to bill changes on S3, S4, and S8.


First, you must confirm whether these changes will result in credits. You can do this in one of the following ways:

-   Compare the billed service period with the effective date of these changes.

-   Use Order Preview to assess the billing outcome.


If the changes to subscriptions do not generate credits, you can proceed with the subscription updates directly. However, if they do, and you want the credit memos to be generated separately from IS1, you must detach the charges from IS1 before running the billing process. If you do not detach charges from IS1, the credit memos can only be generated when Zuora Scheduler processes the next invoice schedule item in IS1.

In the above example:

-   C5 and C6’s billed service period end date (31 August 2025) is later than the effective date (1 June 2025), so credits will be introduced.

-   C3 and C4’s billed service period end date (31 August 2025) is later than the effective date (1 August 2025), so credits will be introduced.


The following is a high-level procedure for detaching charges from IS1 and generating credit memos separately:

1.  Detach C5 and C6 from IS1 .
2.  Create an order to change the product for S5 and make an early renewal for S6 .
3.  Create IS2 for the newly subscribed terms in S6 and S7 .
4.  Run the first item of IS2 and generate a credit memo separately .
5.  Detach C3 and C4 from IS1 .
6.  Create an order to change the product for S3 and make an early renewal for S4 .
7.  Create IS3 for the newly subscribed terms in S4 and S8 .
8.  Run the first item of IS3 and generate a credit memo separately .
