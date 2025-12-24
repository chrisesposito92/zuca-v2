---
title: "Create single-year invoice schedules on new subscriptions with the same term"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/create-single-year-invoice-schedules-on-new-subscriptions-with-the-same-term"
product: "zuora-billing"
scraped_at: "2025-12-24T18:34:47.528Z"
---

# Create single-year invoice schedules on new subscriptions with the same term

Create single-year invoice schedules for new subscriptions with a 12-month term, generating invoices on specified dates.

With the Billing Schedule feature, you can create invoice schedules with one year on new subscriptions created by one order, and how invoices are generated for the subscriptions.

In this use case, four subscriptions are created with the same term of 12 months, and a single-year invoice schedule is created on this subscription. Invoices are generated on self-defined dates through the processing of three invoice schedule items contained in the invoice schedule.

As shown in the following table, four subscriptions are created by creating an order , with the total amount of $70,200.00 and the same term of 12 months. You expect to create a custom invoice schedule to generate three invoices on different dates for the four subscriptions. The first invoice is expected to be generated on 4 February 2023 with the amount of $50,000.00, the second invoice on 1 May 2023 with the amount of $14,000.00, and the third invoice on 16 September 2023 with the amount of $6,200.00.

| Subscription number | Charge start date | Term (Months) | Charge number | Charge end date | Selling price | List price base | Billing period |
| --- | --- | --- | --- | --- | --- | --- | --- |
| S1 | 01/01/2023 | 12 | C1 | 12/31/2023 | $36,900.00 | Per Year | Annual |
| S2 | 01/01/2023 | 12 | C2 | 12/31/2023 | $21,500.00 | Per Year | Annual |
| S3 | 01/01/2023 | 12 | C3 | 12/31/2023 | $11,000.00 | Per Year | Annual |
| S4 | 01/01/2023 | 12 | C4 | 12/31/2023 | $800.00 | Per Year | Annual |

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

    1.  Invoice schedule item 1: Set the invoice date to 02/04/2023 in the On field and billing amount to 50000 in the Bill field.
    2.  Invoice schedule item 2: Set the invoice date to 05/01/2023 in the On field and billing amount to 14000 in the Bill field.
    3.  Invoice schedule item 3: Set the invoice date to 09/16/2023 in the On field and billing amount to 6200 in the Bill field.

    After the invoice schedule is created, the first invoice with invoice number INV001 is automatically generated on 4 February 2023 with the total amount of $50,000.00. The following table lists the amount that is proportionally distributed to each subscription, and the service period of each invoice item.

    | Invoice item | Subscription number | Charge number | Service start date | Service end date | Amount | Total Amount |
    | --- | --- | --- | --- | --- | --- | --- |
    | Invoice item 1 | S1 | C1 | 01/01/2023 | 09/17/2023 | $26,282.05 | $50,000.00 |
    | Invoice item 2 | S2 | C2 | 01/01/2023 | 09/17/2023 | $15,313.39 |  |
    | Invoice item 3 | S3 | C3 | 01/01/2023 | 09/17/2023 | $7,834.76 |  |
    | Invoice item 4 | S4 | C4 | 01/01/2023 | 09/17/2023 | $569.80 |  |

    The amount displayed in the Amount column for each invoice item is calculated based on the following formula:

    (Billed invoice amount ÷ Total invoice amount) × Selling price

    For example, the amount for the first charge line item in the first generated invoice is $26,282.05, which is calculated based on the formula of (50000÷70200)×36900 and rounded based on the default rounding rule specified for the corresponding account.

    The service period of each invoice item is determined by the charge amount that is billed in the invoice, calculated based on the following formula:

    (Invoice item amount ÷ Selling price) × 12 months

    For example, the proportion of months for the first charge line item in the first generated invoice is calculated based on the formula of (26282.05÷36900)×12 months. The calculation result is 8.547 months, indicating 8 months plus 16.41 days. A portion of the day 17 September 2023 is consumed by the first invoice. Therefore, the service end date is 17 September 2023 for the first charge line item and other items in the same invoice.

    On 1 May 2023, the second invoice with invoice number INV002 is generated with the total amount of $14,000.00. The following table lists the amount that is proportionally distributed to each subscription, and the service period of each invoice item.

    | Invoice item | Subscription number | Charge number | Service start date | Service end date | Amount | Total Amount |
    | --- | --- | --- | --- | --- | --- | --- |
    | Invoice item 1 | S1 | C1 | 09/17/2023 | 11/29/2023 | $7,358.98 | $14,000.00 |
    | Invoice item 2 | S2 | C2 | 09/17/2023 | 11/29/2023 | $4,287.75 |  |
    | Invoice item 3 | S3 | C3 | 09/17/2023 | 11/29/2023 | $2,193.73 |  |
    | Invoice item 4 | S4 | C4 | 09/17/2023 | 11/29/2023 | $159.54 |  |

    On 16 September 2023, the third invoice with invoice number INV003 is generated with the total amount of $6,200.00. The following table lists the amount that is proportionally distributed to each subscription, and the service period of each invoice item.

    | Invoice item | Subscription number | Charge number | Service start date | Service end date | Amount | Total Amount |
    | --- | --- | --- | --- | --- | --- | --- |
    | Invoice item 1 | S1 | C1 | 11/29/2023 | 12/31/2023 | $3,258.97 | $6,200.00 |
    | Invoice item 2 | S2 | C2 | 11/29/2023 | 12/31/2023 | $1,898.86 |  |
    | Invoice item 3 | S3 | C3 | 11/29/2023 | 12/31/2023 | $971.51 |  |
    | Invoice item 4 | S4 | C4 | 11/29/2023 | 12/31/2023 | $70.66 |  |
