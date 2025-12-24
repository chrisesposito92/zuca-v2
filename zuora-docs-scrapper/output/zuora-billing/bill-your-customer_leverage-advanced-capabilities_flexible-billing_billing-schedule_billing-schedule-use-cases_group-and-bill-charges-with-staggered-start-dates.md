---
title: "Group and bill charges with staggered start dates"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/group-and-bill-charges-with-staggered-start-dates"
product: "zuora-billing"
scraped_at: "2025-12-24T18:35:51.115Z"
---

# Group and bill charges with staggered start dates

Learn how to create and manage invoice schedules for subscriptions with staggered start dates, ensuring accurate billing across multiple years.

With the Billing Schedule feature, you can create invoice schedules spanning multiple years on some subscriptions containing charges with staggered start dates and end dates, and generate invoices for the subscriptions.

In this use case, your customer inks a two-year agreement covering six subscriptions to different product rate plan charges with staggered start dates, and expects three invoices to be generated for the subscriptions in different years through the processing of an invoice schedule.

As shown in the following table, six subscriptions are created by creating an order , with the total amount of $67,000.00 and the billing period being Annual. The term of five subscriptions is 12 months in different years while the term of one subscription is seven months with a later start date. You expect to create a custom invoice schedule to generate three invoices for the six subscriptions with the Annual billing period. Two invoices are expected to be generated in 2023, and another one in 2024.

| Subscription number | Charge start date | Total length (Months) | Charge number | Charge end date | List price | List price base | Billing period |
| --- | --- | --- | --- | --- | --- | --- | --- |
| S1 | 01/01/2023 | 12 | C1 | 12/31/2023 | $12,000.00 | Per Year | Annual |
| S2 | 01/01/2023 | 12 | C2 | 12/31/2023 | $12,000.00 | Per Year | Annual |
| S3 | 06/01/2023 | 7 | C3 | 12/31/2023 | $12,000.00 | Per Year | Annual |
| S4 | 01/01/2024 | 12 | C4 | 12/31/2024 | $12,000.00 | Per Year | Annual |
| S5 | 01/01/2024 | 12 | C5 | 12/31/2024 | $12,000.00 | Per Year | Annual |
| S6 | 01/01/2024 | 12 | C6 | 12/31/2024 | $12,000.00 | Per Year | Annual |

To create such a custom invoice schedule and generate invoices as expected for the charges with staggered start dates, perform the following steps:

1.  Activate the Annual List Price settings .
2.  Create six recurring product rate plan charges with the Flat Fee Pricing charge model.
3.  Create and activate an order with six subscriptions to the six product rate plan charges, with the total amount of $67,000.00. Order O-001 is created with six subscriptions.

    | Subscription | Charge | Amount | List price base | Billing period |
    | --- | --- | --- | --- | --- |
    | S1 | C1 | $12,000.00 | Per Year | Annual |
    | S2 | C2 | $12,000.00 | Per Year | Annual |
    | S3 | C3 | $12,000.00 | Per Year | Annual |
    | S4 | C4 | $12,000.00 | Per Year | Annual |
    | S5 | C5 | $12,000.00 | Per Year | Annual |
    | S6 | C6 | $12,000.00 | Per Year | Annual |

4.  On the order details page, create an invoice schedule with three invoice schedule items for the six subscriptions.
    1.  Invoice schedule item 1: Set the invoice date to 01/01/2023 in the On field and the billing amount to 27000 in the Bill field.
    2.  Invoice schedule item 2: Set the invoice date to 05/01/2023 in the On field and the billing amount to 4000 in the Bill field.
    3.  Invoice schedule item 3: Set the invoice date to 01/01/2024 in the On field and the billing amount to 36000 in the Bill field. Invoice schedule IS-00000001
5.  Execute invoice schedule item 1.
    1.  On the invoice schedule details page, scroll down to the Schedule Items section.
    2.  In the corresponding row of invoice schedule item 1, click the "Generate" action link in the Billing Document column to manually generate a scheduled invoice by an ad hoc bill run. Invoice INV001 is generated with the amount of $27,000.00, and the status of invoice schedule item 1 changes to Processed from Pending.
6.  On the invoice details page of invoice INV001, click Post Invoice to post the invoice.
7.  Execute invoice schedule item 2.
    1.  On the invoice schedule details page, scroll down to the Schedule Items section.
    2.  In the corresponding row of invoice schedule item 2, click the "Generate" action link in the Billing Document column to manually generate a scheduled invoice by an ad hoc bill run. Invoice INV002 is generated with the amount of $4,000.00, and the status of invoice schedule item 2 changes to Processed from Pending.
8.  On the invoice details page of invoice INV002, click Post Invoice to post the invoice.

    Subsequently on 1 January 2024, the third invoice with invoice number INV003 is generated with the total amount of $36,000.00.
