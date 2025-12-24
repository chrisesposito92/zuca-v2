---
title: "Create IS3 for the newly subscribed terms"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/detachment-of-partial-early-renewed-subscriptions-in-batches-and-generation-of-credit-memos-across-multiple-invoice-schedules/create-is3-for-the-newly-subscribed-terms"
product: "zuora-billing"
scraped_at: "2025-12-24T18:36:44.539Z"
---

# Create IS3 for the newly subscribed terms

Create a new invoice schedule (IS3) for new and renewal subscription terms, including billing and credit memo generation.

To create a new invoice schedule (IS3) for the new subscription S8 and renewal term of S4, perform the following steps:

1.  In the left navigation section, navigate to Customers > Orders .
2.  On the Orders page, click the number of the order created in step 6.
3.  In the upper right of the order detail page, click Create Invoice Schedule .
4.  In the Basic Information section on the Create Invoice Schedule page, click Select Subscriptions or Charges . The Change Subscriptions dialog opens.
5.  Select only C4-2 and C8 in the subscription rate plan charge list and then click Done . This is because you have already billed C3 and C4 in IS1.
6.  In the Additional Subscriptions section, add S3 and S4 to generate the credit memo for C3 and C4, which has already been detached from IS1.
7.  In the Schedule Items section, create two invoice schedule items with the following configuration. If you do not specify a target date for invoice schedule item 1, Zuora Schedule will use the run date as the target date when billing additional subscriptions. However, since the run date of item 1 (17 July 2025) is earlier than the service period start date of the credit (1 August 2025), no credit memo will be generated.

    | Invoice schedule item type | Invoice schedule item | Run date | Amount | Target Date |
    | --- | --- | --- | --- | --- |
    | Item With Amount | 1 | 07-17-2025 | $16,000.00 | 08-01-2025 |
    | Item With Amount | 2 | 12-05-2025 | $8,000.00 | - |

8.  In the upper right of the Create Invoice Schedule page, click Create Invoice Schedule .
9.  In the displayed Confirmation dialog, click Yes to confirm invoice schedule creation.

After IS3 is created, C4-2 and C8 will be billed according to the scheduled items. Since S3 and S4 are added as additional subscriptions to IS2, a credit memo for S3 and S4 will be generated when Zuora Scheduler runs the first item in IS3.
