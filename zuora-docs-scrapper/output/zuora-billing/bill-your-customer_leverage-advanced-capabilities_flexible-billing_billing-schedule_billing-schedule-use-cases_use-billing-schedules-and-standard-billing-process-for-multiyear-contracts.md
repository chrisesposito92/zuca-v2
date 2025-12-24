---
title: "Use billing schedules and standard billing process for multiyear contracts"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/use-billing-schedules-and-standard-billing-process-for-multiyear-contracts"
product: "zuora-billing"
scraped_at: "2025-12-24T18:37:22.754Z"
---

# Use billing schedules and standard billing process for multiyear contracts

Learn how to use billing schedules and the standard billing process to manage multiyear contracts, including creating invoice schedules and generating invoices for subscriptions.

Note: The Billing Schedule feature is generally available. You can enable this feature in Sandbox and Production environments with the self-serve interface. For more information, see Enable billing features by yourself.

With the Billing Schedule feature, you can create invoice schedules spanning multiple years on some new subscriptions created by one order and create bill runs for the other subscriptions in the same order. You can generate invoices for subscriptions created through a standard billing process or billing schedules.

In this use case, your customer inks a three-year agreement covering three subscriptions to different product rate plan charges, and expects eight invoices to be generated for the subscriptions in different years.

As shown in the following table, three subscriptions are created by creating an order , with the total amount of $37,000.00, and the term of each subscription is 12 months in different years. You expect to create a custom invoice schedule to generate four invoices for two subscriptions with the Annual billing period, and create bill runs to generate invoices for another subscription with the Quarterly billing period. Two invoices are expected to be generated in 2022 for subscription S1, and another two in 2024 for subscription S3. Bill runs are expected to be created to generate four invoices for subscription S2.

| Subscription number | Charge start date | Term (Month) | Charge number | Charge end date | Selling price | List price base | Billing period |
| --- | --- | --- | --- | --- | --- | --- | --- |
| S1 | 01/01/2022 | 12 | C1 | 12/31/2022 | $12,000.00 | Per Year | Annual |
| S2 | 01/01/2023 | 12 | C2 | 12/31/2023 | $12,000.00 | Per Year | Quarterly |
| S3 | 01/01/2024 | 12 | C3 | 12/31/2024 | $13,000.00 | Per Year | Annual |

To create such a custom invoice schedule and generate invoices as expected, perform the following steps:

1.  Activate the Annual List Price settings .
2.  Create three recurring product rate plan charges with the Flat Fee Pricing charge model.
3.  Create and activate an order with three subscriptions to the three product rate plan charges, with the total amount of $37,000.00. Order O-001 is created with three subscriptions S1, S2, and S3 for account A1.

    | Subscription number | Charge number | Amount | List price base | Billing period |
    | --- | --- | --- | --- | --- |
    | S1 | C1 | $12,000.00 | Per Year | Annual |
    | S2 | C2 | $12,000.00 | Per Year | Quarterly |
    | S3 | C3 | $13,000.00 | Per Year | Annual |

4.  On the order details page, create an invoice schedule with four invoice schedule items for subscriptions S1 and S3.
    1.  Invoice schedule item 1: Set the invoice date to 01/01/2022 in the On field and the billing amount to 10000 in the Bill field.
    2.  Invoice schedule item 2: Set the invoice date to 11/01/2022 in the On field and the billing amount to 2000 in the Bill field.
    3.  Invoice schedule item 3: Set the invoice date to 01/01/2024 in the On field and the billing amount to 10000 in the Bill field.
    4.  Invoice schedule item 4: Set the invoice date to 11/01/2024 in the On field and the billing amount to 3000 in the Bill field.
5.  Execute invoice schedule item 1.
    1.  On the invoice schedule details page, scroll down to the Schedule Items section.
    2.  In the corresponding row of invoice schedule item 1, click the “Generate” action link in the Billing Document column to manually generate a scheduled invoice by an ad hoc bill run. Invoice INV001 is generated with the amount of $10,000.00 for account A1, and the status of invoice schedule item 1 changes to Processed from Pending.
6.  On the invoice details page of invoice INV001, click Post Invoice to post the invoice.
7.  Execute invoice schedule item 2.
    1.  On the invoice schedule details page, scroll down to the Schedule Items section.
    2.  In the corresponding row of invoice schedule item 2, click the “Generate” action link in the Billing Document column to manually generate a scheduled invoice by an ad hoc bill run. Invoice INV002 is generated with the amount of $2,000.00 for account A1, and the status of invoice schedule item 2 changes to Processed from Pending.
8.  On the invoice details page of invoice INV002, click Post Invoice to post the invoice.
9.  Create a bill run with the target date set to 1 January 2023.

Bill run BR-001 is created, and invoice INV003 is generated with the amount of $3,000.00.

Subsequently, three invoices are generated for subscription S2 in the remaining quarters of 2023, and invoice schedule items 3 and 4 are automatically processed for subscription S3.

-   Invoice INV004 is generated with the amount of $3,000.00 for account A1 in the second quarter of 2023.

-   Invoice INV005 is generated with the amount of $3,000.00 for account A1 in the third quarter of 2023.

-   Invoice INV006 is generated with the amount of $3,000.00 for account A1 in the fourth quarter of 2023.

-   Invoice INV007 is generated with the amount of $10,000.00 for account A1 on 1 January 2024, and the status of invoice schedule item 3 changes to Processed from Pending.

-   Invoice INV008 is generated with the amount of $3,000.00 for account A1 on 1 November 2024, and the status of invoice schedule item 4 changes to Processed from Pending.
