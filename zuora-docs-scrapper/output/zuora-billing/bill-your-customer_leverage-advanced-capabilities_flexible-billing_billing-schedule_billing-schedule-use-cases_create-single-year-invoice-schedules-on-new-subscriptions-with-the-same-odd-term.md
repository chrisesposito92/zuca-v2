---
title: "Create single-year invoice schedules on new subscriptions with the same odd term"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/create-single-year-invoice-schedules-on-new-subscriptions-with-the-same-odd-term"
product: "zuora-billing"
scraped_at: "2025-12-24T18:35:48.657Z"
---

# Create single-year invoice schedules on new subscriptions with the same odd term

Create single-year invoice schedules for new subscriptions with odd terms, such as 10 months, and generate invoices on self-defined dates.

With the Billing Schedule feature, you can create invoice schedules on new subscriptions with an odd term like 11 months or 13 months, and how invoices are generated for the subscriptions.

In this use case, four subscriptions are created with the same term of 10 months, and a single-year invoice schedule is created on this subscription. Invoices are generated on self-defined dates through the processing of three invoice schedule items contained in the invoice schedule.

As shown in the following table, four subscriptions are created by creating an order , with a total amount of $58,500.00 and the same term of 10 months.

| Subscription number | Charge start date | Term (Month) | Charge number | Charge end date | Selling price | List price base | Billing period |
| --- | --- | --- | --- | --- | --- | --- | --- |
| S1 | 01/01/2022 | 10 | C1 | 10/31/2022 | $30,750.00 | Per Year | Annual |
| S2 | 01/01/2022 | 10 | C2 | 10/31/2022 | $17,916.6666 | Per Year | Annual |
| S3 | 01/01/2022 | 10 | C3 | 10/31/2022 | $9,166.6666 | Per Year | Annual |
| S4 | 01/01/2022 | 10 | C4 | 10/31/2022 | $666.6666 | Per Year | Annual |

You expect to create a custom invoice schedule to generate three invoices on different dates for the four subscriptions.

The first invoice is expected to be generated on 5 February 2022 with the amount of $40,000.00, the second invoice on 30 August 2022 with the amount of $10,000.00, and the third invoice on 14 September 2022 with the amount of $8,500.00.

To create such a custom invoice schedule and generate invoices as expected, perform the following steps:

1.  Activate the Annual List Price settings .
2.  Create four recurring product rate plan charges with the Flat Fee Pricing charge model.
3.  Create and activate an order with four subscriptions to the four charges, with the total amount of $58,500.00 and the same term of 10 months.

    | Subscription number | Charge number | Amount | List price base | Billing period |
    | --- | --- | --- | --- | --- |
    | S1 | C1 | $30,750.00 | Per Year | Annual |
    | S2 | C2 | $17,916.6666 | Per Year | Annual |
    | S3 | C3 | $9,166.6666 | Per Year | Annual |
    | S4 | C4 | $666.6666 | Per Year | Annual |

4.  On the order details page, create an invoice schedule with three invoice schedule items,
    1.  Invoice schedule item 1: Set the invoice date to 02/05/2022 in the On field and billing amount to 40000 in the Bill field.
    2.  Invoice schedule item 2: Set the invoice date to 08/30/2022 in the On field and billing amount to 10000 in the Bill field.
    3.  Invoice schedule item 3: Set the invoice date to 09/14/2022 in the On field and billing amount to 8500 in the Bill field.

After the invoice schedule is created, the first invoice with invoice number INV001 is automatically generated on 5 February 2022 with a total amount of $40,000.00. The following table lists the amount that is proportionally distributed to each subscription, and the service period of each invoice item.

| Invoice item | Subscription number | Charge number | Service start date | Service end date | Amount | Total Amount |
| --- | --- | --- | --- | --- | --- | --- |
| Invoice item 1 | S1 | C1 | 01/01/2022 | 07/26/2022 | $21,025.64 | $40,000.00 |
| Invoice item 2 | S2 | C2 | 01/01/2022 | 07/26/2022 | $12,250.71 |  |
| Invoice item 3 | S3 | C3 | 01/01/2022 | 07/26/2022 | $6,267.81 |  |
| Invoice item 4 | S4 | C4 | 01/01/2022 | 07/26/2022 | $455.84 |  |

The amount displayed in the Amount column for each invoice item is calculated based on the following formula:

(Billed invoice amount ÷ Total invoice amount) × Selling price

For example, the amount for the first charge line item in the first generated invoice is $21,025.64, which is calculated based on the formula of (40000÷58500)×30750 and rounded based on the default rounding rule specified for the corresponding account.

The service period of each invoice item is determined by the charge amount that is billed in the invoice, calculated based on the following formula:

(Invoice item amount ÷ Selling price) × Billing period

For example, the proportion of months for the first charge line item in the first generated invoice is calculated based on the formula of (21025.64÷30750)×10 months. The calculation result is 6.838 months, indicating 6 months plus 25.98 days. A portion of the day 26 July 2022 is consumed by the first invoice. Therefore, the service end date is 26 July 2022 for the first charge line item and other items in the same invoice.

On 30 August 2022, the second invoice with invoice number INV002 is generated with the total amount of $10,000.00. The following table lists the amount that is proportionally distributed to each subscription, and the service period of each invoice item.

| Invoice item | Subscription number | Charge number | Service start date | Service end date | Amount | Total Amount |
| --- | --- | --- | --- | --- | --- | --- |
| Invoice item 1 | S1 | C1 | 07/27/2022 | 09/17/2022 | $5,256.41 | $10,000.00 |
| Invoice item 2 | S2 | C2 | 07/27/2022 | 09/17/2022 | $3,062.68 |  |
| Invoice item 3 | S3 | C3 | 07/27/2022 | 09/17/2022 | $1,566.95 |  |
| Invoice item 4 | S4 | C4 | 07/27/2022 | 09/17/2022 | $113.96 |  |

On 14 September 2022, the third invoice with invoice number INV003 is generated with the total amount of $8,500.00. The following table lists the amount that is proportionally distributed to each subscription, and the service period of each invoice item.

| Invoice item | Subscription number | Charge number | Service start date | Service end date | Amount | Total Amount |
| --- | --- | --- | --- | --- | --- | --- |
| Invoice item 1 | S1 | C1 | 09/18/2022 | 10/31/2022 | $4,467.95 | $8,500.00 |
| Invoice item 2 | S2 | C2 | 09/18/2022 | 10/31/2022 | $2,603.28 |  |
| Invoice item 3 | S3 | C3 | 09/18/2022 | 10/31/2022 | $1,331.91 |  |
| Invoice item 4 | S4 | C4 | 09/18/2022 | 10/31/2022 | $96.86 |  |
