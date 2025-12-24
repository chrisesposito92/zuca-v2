---
title: "Create multiyear invoice schedules to bill second-year charges in the first year"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/create-multiyear-invoice-schedules-to-bill-second-year-charges-in-the-first-year"
product: "zuora-billing"
scraped_at: "2025-12-24T18:35:46.110Z"
---

# Create multiyear invoice schedules to bill second-year charges in the first year

Create multiyear invoice schedules to bill second-year charges in the first year using the Billing Schedule feature.

The Billing Schedule feature is generally available. You can enable this feature in Sandbox and Production environments with the self-serve interface. For more information, see Enable billing features by yourself.

With the Billing Schedule feature, you can create invoice schedules spanning multiple years on new subscriptions created by one order, and generate invoices for the second-year subscriptions in the first year.

In this use case, your customer inks a two-year agreement covering two subscriptions to different product rate plan charges, and expects three invoices to be generated for the subscriptions on self-defined dates in different years. Therefore, one invoice is generated in the first year and two invoices are generated in the second year.

As shown in the following table, two subscriptions are created by creating an order , with the total amount of $2,000.00, and the term of each subscription is 12 months in different years. You expect to create a custom invoice schedule to generate three invoices for the two subscriptions. The first invoice is expected to be generated on 4 February 2022 with the amount of $1,200.00, the second invoice on 5 January 2023 with the amount of $500.00, and the third invoice on 15 July 2023 with the amount of $300.00.

| Subscription number | Charge start date | Term (Month) | Charge number | Charge end date | Selling price | List price base | Billing period |
| --- | --- | --- | --- | --- | --- | --- | --- |
| S1 | 01/01/2022 | 12 | C1 | 12/31/2022 | $1,000.00 | Per Year | Annual |
| S2 | 01/01/2023 | 12 | C2 | 12/31/2023 | $1,000.00 | Per Year | Annual |

To create such a custom invoice schedule and generate invoices as expected, perform the following steps:

1.  Activate the Annual List Price settings .
2.  Create two recurring product rate plan charges with the Flat Fee Pricing charge model.
3.  Create and activate an order with two subscriptions to the two product rate plan charges, with the total amount of $2,000.00.

    | Subscription number | Charge number | Amount | List price base | Billing period |
    | --- | --- | --- | --- | --- |
    | S1 | C1 | $1,000.00 | Per Year | Annual |
    | S2 | C2 | $1,000.00 | Per Year | Annual |

4.  On the order details page, create an invoice schedule with three invoice schedule items,
    1.  Invoice schedule item 1: Set the invoice date to 02/04/2022 in the On field and the billing amount to 1200 in the Bill field.
    2.  Invoice schedule item 2: Set the invoice date to 01/05/2023 in the On field and the billing amount to 500 in the Bill field.
    3.  Invoice schedule item 3: Set the invoice date to 07/15/2023 in the On field and the billing amount to 300 in the Bill field.

After the invoice schedule is created, three invoices in Draft status are automatically generated on the scheduled dates with the specified billed amount.

The first invoice with invoice number INV001 is automatically generated on 4 February 2022 with the total amount of $1,200.00. The following table lists the amount that is distributed to each subscription, and the service period of each invoice item.

| Invoice item | Subscription number | Charge number | Service start date | Service end date | Amount | Total Amount |
| --- | --- | --- | --- | --- | --- | --- |
| S1 | INV001 | C1 | 01/01/2022 | 12/31/2022 | $1,000.00 | $1,200 |
| S2 | C2 | 01/01/2023 | 03/13/2023 | $200.00 |  |  |
| S2 | INV002 | C2 | 03/13/2023 | 09/12/2023 | $500.00 | $500 |
| S2 | INV003 | C2 | 09/13/2023 | 12/31/2023 | $300.00 | $300 |

Invoice INV001 covers the billed amount of $1200.00, greater than the total amount of subscription S1, so invoice INV001 bills $1000.00 from subscription S1 and $200.00 from subscription S2. Therefore, invoice INV001 has two items: C1 and C2. Invoice item C1 has the service period from 1 January 2022 to 31 December 2022, and the service period of invoice item C2 is calculated by the following formula:

(Invoice item amount ÷ Selling price) × 12 months

In this use case, the calculation formula is (200÷1000)×12 months. The calculation result is 2.4 months, indicating that the service period is 2 months plus 12.4 days. The service start date is 1 January 2023, so a portion of the day 13 March 2023 is consumed by the first invoice. Therefore, the service end date is 13 March 2023 for invoice item C2 in invoice INV001.

The service period calculation for invoices INV002 and INV003 is similar to that for invoice item C2. The service period for invoice INV002 is 6 months, the calculation result of (500÷1000)×12 months, starting from 13 March 2023 and ending on 12 September 2023. By analogy, the service period of the third invoice is the remaining period of the same year, starting from 13 September 2023 and ending on 31 December 2023.
