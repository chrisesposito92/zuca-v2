---
title: "Create single-year invoice schedules to bill subscriptions with zero-amount prices and staggered start dates"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/create-single-year-invoice-schedules-to-bill-subscriptions-with-zero-amount-prices-and-staggered-start-dates"
product: "zuora-billing"
scraped_at: "2025-12-24T18:37:33.058Z"
---

# Create single-year invoice schedules to bill subscriptions with zero-amount prices and staggered start dates

Create invoice schedules for subscriptions with zero-amount prices and staggered start dates using the Billing Schedule feature.

Note:

The Billing Schedule feature is generally available. You can enable this feature in Sandbox and Production environments with the self-serve interface. For more information, see Enable billing features by yourself.

With the Billing Schedule feature, you can create an invoice schedule to generate invoices for multiple subscriptions, one of which has a zero-amount price and a staggered start date.

In this use case, your customer inks a one-year agreement covering three subscriptions to different product rate plan charges with a total amount of $2,000.00, and expects three invoices to be generated for the subscriptions through the processing of the associated invoice schedule.

As shown in the following table, subscriptions S1 and S2 have the same subscription term of 12 months, while subscription S3 has a term of six months with a later start date.

| Subscription number | Charge start date | Total length (Months) | Charge number | Charge end date | List price | List price base | Billing period |
| --- | --- | --- | --- | --- | --- | --- | --- |
| S1 | 01/01/2023 | 12 | C1 | 12/31/2023 | $1,000.00 | Per Year | Annual |
| S2 | 01/01/2023 | 12 | C2 | 12/31/2023 | $1,000.00 | Per Year | Annual |
| S3 | 07/01/2023 | 6 | C3 | 12/31/2023 | $0.00 | Per Year | Annual |

To create such a custom invoice schedule to bill subscriptions containing rate plan charges with zero-amount prices, and generate invoices as expected, perform the following steps:

1.  Activate the Annual List Price settings .
2.  Create three recurring product rate plan charges with the Flat Fee Pricing charge model. Three product rate plan charges are created, including two product rate plan charges with a list price of $1,000.00 per year and another with a list price of $0.00 per year.
3.  Create and activate an order with three subscriptions to the product rate plan charges, with a total amount of $2,000.00. Order O-001 is created with subscriptions S1, S2, and S3, respectively containing rate plan charges C1, C2, and C3.
4.  On the order details page, create an invoice schedule with three invoice schedule items for the three subscriptions.
    1.  Invoice schedule item 1: Set the invoice date to 02/04/2023 in the On field and the billing amount to 600 in the Bill field.
    2.  Invoice schedule item 2: Set the invoice date to 07/01/2023 in the On field and the billing amount to 600 in the Bill field.
    3.  Invoice schedule item 3: Set the invoice date to 11/14/2023 in the On field and the billing amount to 800 in the Bill field. Invoice schedule IS-00000001 is created with three invoice schedule items all in Pending status.
5.  Execute invoice schedule items 1, 2, and 3 to generate invoices for subscriptions S1 and S2.
    1.  On the invoice schedule details page, scroll down to the Schedule Items section.
    2.  In the corresponding row of invoice schedule item 1, click the "Generate" action link in the Billing Document column to manually generate a scheduled invoice by an ad hoc bill run. Invoice INV001 is generated with the amount of $600.00, and the status of invoice schedule item 1 changes to Processed from Pending.
    3.  On the invoice details page of invoice INV001, click Post Invoice to post the invoice. Invoice INV001 is posted.
    4.  Repeat steps 5.a to 5.c to execute invoice schedule item 2. Invoice INV002 is generated with the amount of $600.00, and the status of invoice schedule item 2 changes to Processed from Pending.
    5.  Repeat steps 5.a to 5.c to execute invoice schedule item 3. Invoice INV003 is generated with the amount of $800.00, and the status of invoice schedule item 3 changes to Processed from Pending. Later, Invoice INV003 is posted.

The status of invoice schedule IS-00000001 changes to Fully Processed from Partially Processed.

After invoice schedule items are executed, three invoices are generated for subscriptions S1, S2, and S3.

-   After invoice schedule item 1 is executed, invoice INV001 is generated with the amount of $600.00.

-   After invoice schedule item 2 is executed, invoice INV002 is generated with the amount of $600.00.

-   After invoice schedule item 2 is executed, invoice INV003 is generated with the amount of $800.00.


Because subscription S3 has a zero-amount price, the amount of all generated invoices comes from subscriptions S1 and S2.

The following table lists the amount that is proportionally distributed to each invoice item, and the service period of each invoice item.

| Invoice | Subscription | Charge | Invoice item | Service start date | Service end date | Amount | Status | Total amount |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| INV001 | S1 | C1 | Invoice item 1 | 01/01/2023 | 04/18/2023 | $300.00 | Posted | $2,000.00 |
| INV001 | S2 | C2 | Invoice item 2 | 01/01/2023 | 04/18/2023 | $300.00 | Posted |  |
| INV002 | S1 | C1 | Invoice item 1 | 04/19/2023 | 08/06/2023 | $300.00 | Posted |  |
| INV002 | S2 | C2 | Invoice item 2 | 04/19/2023 | 08/06/2023 | $300.00 | Posted |  |
| INV002 | S3 | C3 | Invoice item 3 | 07/01/2023 | 08/06/2023 | $0.00 | Posted |  |
| INV003 | S1 | C1 | Invoice item 1 | 08/07/2023 | 12/31/2023 | $400.00 | Posted |  |
| INV003 | S2 | C2 | Invoice item 2 | 08/07/2023 | 12/31/2023 | $400.00 | Posted |  |
| INV003 | S3 | C3 | Invoice item 3 | 08/07/2023 | 12/31/2023 | $0.00 | Posted |  |

The amount displayed in the Amount column for each invoice item is calculated based on the following formula:

(Billed invoice amount ÷ Total invoice amount) × Selling price

For example, the amount calculation is as follows for the charge line items in the generated invoices:

-   Invoice INV001: The amount for each of the first and second charge line items is $300.00, which is calculated based on the formula of (600÷(1000+1000))×1000.

-   Invoices INV002 and INV003: The amount for each of the first and second charge line items is $6,096.77, which is calculated based on the formula of (800÷(1000+1000+0))×1000.

-   Invoices INV002 and INV003: The amount for the third charge line item is $0.00, because subscription S3 has a zero-amount price.


Meanwhile, the service period of each invoice item is determined by the charge amount that is billed in the invoice, calculated based on the following formula:

(Invoice item amount ÷ Selling price) × Number of months in term / Total subscription length in months

For example, the service period calculation is as follows for the first and third charge line items in the first generated invoice:

-   Invoice INV001: The proportion of months for each of the first and second charge line items is calculated based on the formula of (300÷1000)×12 months. The calculation result is 3.6 months, indicating three months plus 18 days. Therefore, the service end date is 18 April 2023 for the first and second charge line items in the same invoice. Meanwhile, the subscription term of subscription S3 does not fall into the service period of this invoice, so no invoice item is generated for subscription S3 in invoice INV001.

-   Invoice INV002: The proportion of months for each of the first and second charge line items is calculated based on the formula of (300÷1000)×12 months. The calculation result is 3.6 months, indicating three months plus 18 days. Therefore, the service end date is 6 August 2023 for the items. Because the start date of subscription S3 falls into the service period, the service period is from 1 July 2023 to 6 August 2023 for the third charge line item.

-   Invoice INV003: The service period of each charge line item is the remaining period of the subscription term, from 7 August 2023 to 31 December 2023.
