---
title: "Create single-year invoice schedules for charges with different start dates and end dates within one term"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/create-single-year-invoice-schedules-for-charges-with-different-start-dates-and-end-dates-within-one-term"
product: "zuora-billing"
scraped_at: "2025-12-24T18:35:40.786Z"
---

# Create single-year invoice schedules for charges with different start dates and end dates within one term

Create single-year invoice schedules for subscriptions with varying start and end dates, generating invoices on custom dates within the first year.

The Billing Schedule feature is generally available. You can enable this feature in Sandbox and Production environments with the self-serve interface. For more information, see Enable billing features by yourself.

With the Billing Schedule feature, you can create invoice schedules with one single year on new subscriptions with different start dates and end dates, and how invoices are generated for the subscriptions.

In this use case, four subscriptions are created with different terms, and a single-year invoice schedule is created on this subscription. Invoices are generated on self-defined dates through the processing of three invoice schedule items contained in the invoice schedule.

As shown in the following table, four subscriptions are created by creating an order , with the total amount of $69,150.00 and different terms. You expect to create a custom invoice schedule to generate three invoices on different dates in the first year for the four subscriptions. The first invoice is expected to be generated on 4 February 2021 with the amount of $50,000.00, the second invoice on 1 May 2021 with the amount of $10,000.00, and the third invoice on 16 September 2021 with the amount of $9,150.00.

| Subscription number | Charge start date | Term (Month) | Charge number | Charge end date | Selling price | List price base | Billing period |
| --- | --- | --- | --- | --- | --- | --- | --- |
| S1 | 01/01/2021 | 12 | C1 | 12/31/2021 | $36,900.00 | Per Year | Annual |
| S2 | 01/01/2021 | 12 | C2 | 12/31/2021 | $21,500.00 | Per Year | Annual |
| S3 | 02/01/2021 | 11 | C3 | 12/31/2021 | $11,000.00 | Per Year | Annual |
| S4 | 03/01/2021 | 10 | C4 | 12/31/2021 | $800.00 | Per Year | Annual |

To create such a custom invoice schedule and generate invoices as expected, perform the following steps:

1.  Activate the Annual List Price settings .
2.  Create four recurring product rate plan charges with the Flat Fee Pricing charge model.
3.  Create and activate an order with four subscriptions to the four charges, with the total amount of $70,200.00 and the same term of 12 months.

    | Subscription number | Charge number | Amount | List price base | Billing period |
    | --- | --- | --- | --- | --- |
    | S1 | C1 | $36,900.00 | Per Year | Annual |
    | S2 | C2 | $21,500.00 | Per Year | Annual |
    | S3 | C3 | $11,000.00 | Per Year | Annual |
    | S4 | C4 | $800.00 | Per Year | Annual |

4.  On the order details page, create an invoice schedule with three invoice schedule items,

    1.  Invoice schedule item 1: Set the invoice date to 02/04/2021 in the On field and billing amount to 50000 in the Bill field.
    2.  Invoice schedule item 2: Set the invoice date to 05/01/2021 in the On field and billing amount to 10000 in the Bill field.
    3.  Invoice schedule item 3: Set the invoice date to 09/16/2021 in the On field and billing amount to 9150 in the Bill field.

    After the invoice schedule is created, three invoices in Draft status are automatically generated on the scheduled dates with the specified billed amount.

    The first invoice with invoice number INV001 is automatically generated on 4 February 2021 with the total amount of $50,000.00. The following table lists the amount that is proportionally distributed to each subscription, and the service period of each invoice item.

    | Invoice item | Subscription number | Charge number | Service start date | Service end date | Amount | Total Amount |
    | --- | --- | --- | --- | --- | --- | --- |
    | Invoice item 1 | S1 | C1 | 01/01/2021 | 11/09/2021 | $31,592.47 | $50,000.00 |
    | Invoice item 2 | S2 | C2 | 01/01/2021 | 11/09/2021 | $18,407.53 |  |

    The amount displayed in the Amount column for each invoice item is calculated based on the following formula:

    (Billed invoice amount ÷ Total price) × Selling price

    For example, the amount for the first charge line item in the first generated invoice is $26,282.05, which is calculated based on the formula of (50000÷(36900+21500))×36900 and rounded based on the default rounding rule specified for the corresponding account.

    The service period of each invoice item is determined by the charge amount that is billed in the invoice, calculated based on the following formula:

    (Invoice item amount ÷ Selling price) × 12 months

    For example, the proportion of months for the first charge line item in the first generated invoice is calculated based on the formula of (31,592.47÷36900)×12 months. The calculation result is 10.274 months, indicating that the service period of 10 months plus 8.22 days. A portion of the day 9 November 2021 is consumed by the first invoice. Therefore, the service end date is 9 November 2021 for the first charge line item and other items in the same invoice.

    On 1 May 2021, the second invoice with invoice number INV002 is generated with the total amount of $10,000.00. The following table lists the amount that is proportionally distributed to each subscription, and the service period of each invoice item.

    | Invoice item | Subscription number | Charge number | Service start date | Service end date | Amount | Total Amount |
    | --- | --- | --- | --- | --- | --- | --- |
    | Invoice item 1 | S1 | C1 | 11/09/2021 | 12/31/2021 | $5,307.53 | $10,000.00 |
    | Invoice item 2 | S2 | C2 | 11/09/2021 | 12/31/2021 | $3,092.47 |  |
    | Invoice item 3 | S3 | C3 | 02/01/2021 | 03/04/2021 | $1600.00 |  |

    On 16 September 2021, the third invoice with invoice number INV003 is generated with the total amount of $9,150.00. The following table lists the amount that is proportionally distributed to each subscription, and the service period of each invoice item.

    | Invoice item | Subscription number | Charge number | Service start date | Service end date | Amount | Total Amount |
    | --- | --- | --- | --- | --- | --- | --- |
    | Invoice item 1 | S3 | C3 | 03/04/2021 | 12/31/2021 | $8,483.33 | $9,150.00 |
    | Invoice item 2 | S4 | C4 | 03/01/2021 | 12/31/2021 | $666.67 |  |
