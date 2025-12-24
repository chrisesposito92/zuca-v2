---
title: "Create multiyear invoice schedules to bill charges within the same year"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/create-multiyear-invoice-schedules-to-bill-charges-within-the-same-year"
product: "zuora-billing"
scraped_at: "2025-12-24T18:35:43.334Z"
---

# Create multiyear invoice schedules to bill charges within the same year

Create multiyear invoice schedules to manage billing for subscriptions with custom invoice dates and amounts.

Note: The Billing Schedule feature is generally available. You can enable this feature in Sandbox and Production environments with the self-serve interface. For more information, see Enable billing features by yourself.

With the Billing Schedule feature, you can create invoice schedules spanning multiple years on new subscriptions created by one order, and generate invoices for the subscriptions within the same year.

In this use case, your customer inks a three-year agreement covering three subscriptions to different product rate plan charges, and expects three invoices to be generated for each subscription on self-defined dates in different years. Therefore, a total of nine invoices are generated, including three invoices every year. This use case demonstrates that the billing schedule processes the different charges sequentially by charge start date.

As shown in the following table, three subscriptions are created by creating an order , with the total amount of $3,000.00, and the term of each subscription is 12 months in different years. You expect to create a custom invoice schedule to generate nine invoices for the three subscriptions. The first invoice for each subscription is expected to be generated on 1 January 2022 with the amount of $350.00, the second invoice for each subscription on 20 February 2022 with the amount of $350.00, and the third invoice for each subscription on 10 June 2022 with the amount of $300.00.

| Subscription number | Charge start date | Term (Month) | Charge number | Charge end date | Selling price | List price base | Billing period |
| --- | --- | --- | --- | --- | --- | --- | --- |
| S1 | 01/01/2022 | 12 | C1 | 12/31/2022 | $1,000.00 | Per Year | Annual |
| S2 | 01/01/2023 | 12 | C2 | 12/31/2023 | $1,000.00 | Per Year | Annual |
| S3 | 01/01/2024 | 12 | C3 | 12/31/2024 | $1,000.00 | Per Year | Annual |

You expect to create a custom invoice schedule to generate nine invoices for the three subscriptions as follows:

-   For subscription S1: The first invoice is expected to be generated on 1 January 2022 with the amount of $350.00, the second invoice on 20 February 2022 with the amount of $350.00, and the third invoice on 10 June 2022 with the amount of $300.00.

-   For subscription S2: The fourth invoice is expected to be generated on 1 January 2023 with the amount of $350.00, the fifth invoice on 20 February 2023 with the amount of $350.00, and the sixth invoice on 10 June 2023 with the amount of $300.00.

-   For subscription S3: The seventh invoice is expected to be generated on 1 January 2024 with the amount of $350.00, the eighth invoice on 20 February 2024 with the amount of $350.00, and the ninth invoice on 10 June 2024 with the amount of $300.00.


To create such a custom invoice schedule and generate invoices as expected, perform the following steps:

1.  Activate the Annual List Price settings .
2.  Create three recurring product rate plan charges with the Flat Fee Pricing charge model.
3.  Create and activate an order with three subscriptions to these product rate plan charges, with the total amount of $3,000.00.

    | Subscription number | Charge number | Amount | List price base | Billing period |
    | --- | --- | --- | --- | --- |
    | S1 | C1 | $1,000.00 | Per Year | Annual |
    | S2 | C2 | $1,000.00 | Per Year | Annual |
    | S3 | C3 | $1,000.00 | Per Year | Annual |

4.  On the order details page, create an invoice schedule with nine invoice schedule items,
    1.  Invoice schedule item 1: Set the invoice date to 01/01/2022 in the Run Date field and the billing amount to 350 in the Amount field.
    2.  Invoice schedule item 2: Set the invoice date to 02/20/2022 in the Run Date field and the billing amount to 350 in the Amount field.
    3.  Invoice schedule item 3: Set the invoice date to 06/10/2022 in the Run Date field and the billing amount to 300 in the Amount field.
    4.  Invoice schedule item 4: Set the invoice date to 01/01/2023 in the Run Date field and the billing amount to 350 in the Amount field.
    5.  Invoice schedule item 5: Set the invoice date to 02/20/2023 in the Run Date field and billing amount to 350 in the Amount field.
    6.  Invoice schedule item 6: Set the invoice date to 06/10/2023 in the Run Date field and billing amount to 300 in the Amount field.
    7.  Invoice schedule item 7: Set the invoice date to 01/01/2024 in the Run Date field and billing amount to 350 in the Amount field.
    8.  Invoice schedule item 8: Set the invoice date to 02/20/2024 in the Run Date field and billing amount to 350 in the Amount field.
    9.  Invoice schedule item 9: Set the invoice date to 06/10/2024 in the Run Date field and billing amount to 300 in the Amount field

After the invoice schedule is created, three invoices in Draft status are automatically generated on the scheduled dates with the specified billed amount for each subscription in different years.

The following table lists the amount that is distributed to each subscription, and the service period of each invoice item.

| Invoice item | Subscription number | Charge number | Service start date | Service end date | Amount | Total Amount |
| --- | --- | --- | --- | --- | --- | --- |
| S1 | INV001 | C1 | 01/01/2022 | 04/06/2023 | $350.00 | $1,000.00 |
| INV002 | C1 | 04/07/2022 | 08/12/2023 | $350.00 |  |  |
| INV003 | C1 | 08/13/2022 | 12/31/2023 | $300.00 |  |  |
| S2 | INV004 | C2 | 01/01/2023 | 04/06/2023 | $350.00 | $1,000.00 |
| INV005 | C2 | 04/07/2023 | 08/12/2023 | $350.00 |  |  |
| INV006 | C2 | 08/13/2023 | 12/31/2023 | $300.00 |  |  |
| S3 | INV007 | C3 | 01/01/2024 | 04/06/2023 | $350.00 | $1,000.00 |
| INV008 | C3 | 04/07/2024 | 08/12/2023 | $350.00 |  |  |
| INV009 | C3 | 08/13/2024 | 12/31/2023 | $300.00 |  |  |

For multiple charges contained in different subscriptions, charges are consumed in sequential order by charge start date. The charges with the same start date are consumed together and are billed proportionally into the scheduled invoices.

Because the first invoice INV001 only covers the billed amount of $350.00, less than the total amount of subscription S1, so the billed amount is all consumed from subscription S1. By analogy, the billed amount of invoices INV002 and INV003 is also all consumed from subscription S1.

The service period of each invoice item is determined by the charge amount that is billed in the invoice, calculated based on the following formula:

(Invoice item amount ÷ Selling price) × 12 months

For example, the proportion of months for the first charge line item in invoice INV001 is calculated based on the formula of (350÷1000)×12 months. The calculation result is 4.2 months, indicating that the service period is 4 months plus 6 days for invoice INV001. Therefore, the service end date is 6 April 2022 for the first charge line item. The second invoice INV002 has the same amount as the first invoice INV001, indicating that the length of the service period is also the same for these two invoices. Therefore, the service period of the second invoice INV002 starts from 7 April 2022 and ends on 12 August 2022. By analogy, the service period of the third invoice INV003 is the remaining period of the same year, starting from 13 August 2022 and ending on 31 December 2022.

Subscriptions S1, S2, and S3 have the same amount and similar invoice generation, so the invoices generated for them have the same length of service period, except for the specific year. By analogy, invoices INV001, INV004, and INV007 have the same service start date and end date, and the only difference is the specific year. Invoices INV002, INV005, and INV008 have the same start date and end date, with the difference in year. Invoices INV003, INV006, and INV009 have the same start date and end date, with the difference in year.
