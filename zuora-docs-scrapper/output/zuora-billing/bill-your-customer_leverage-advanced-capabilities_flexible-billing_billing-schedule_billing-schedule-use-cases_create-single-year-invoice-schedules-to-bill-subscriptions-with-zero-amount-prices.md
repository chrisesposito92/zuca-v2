---
title: "Create single-year invoice schedules to bill subscriptions with zero-amount prices"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/create-single-year-invoice-schedules-to-bill-subscriptions-with-zero-amount-prices"
product: "zuora-billing"
scraped_at: "2025-12-24T18:37:30.512Z"
---

# Create single-year invoice schedules to bill subscriptions with zero-amount prices

Create invoice schedules for subscriptions with zero-amount prices, enabling billing for multiple subscriptions under a single-year agreement.

Note:

The Billing Schedule feature is generally available. You can enable this feature in Sandbox and Production environments with the self-serve interface. For more information, see Enable billing features by yourself.

With the Billing Schedule feature, you can create an invoice schedule to generate invoices for multiple subscriptions, one of which has a zero-amount price.

In this use case, your customer inks a one-year agreement covering two subscriptions to different product rate plan charges with a total amount of $2,000.00, and expects three invoices to be generated for the subscriptions through the processing of the associated invoice schedule.

As shown in the following table, subscriptions S1 and S2 have the same subscription term of 12 months, respectively containing rate plan charges C1 and C2.

| Subscription number | Charge start date | Total length (Months) | Charge number | Charge end date | List price | List price base | Billing period |
| --- | --- | --- | --- | --- | --- | --- | --- |
| S1 | 01/01/2023 | 12 | C1 | 12/31/2023 | $2,000.00 | Per Year | Annual |
| S2 | 01/01/2023 | 12 | C2 | 12/31/2023 | $0.00 | Per Year | Annual |

To create such a custom invoice schedule to bill subscriptions containing rate plan charges with zero-amount prices, and generate invoices as expected, perform the following steps:

1.  Activate the Annual List Price settings .
2.  Create two recurring product rate plan charges with the Flat Fee Pricing charge model. A product rate plan charge is created with a list price of $2,000.00 per year, while the other has a list price of $0.00 per year.
3.  Create and activate an order with two subscriptions to the product rate plan charges, with a total amount of $2,000.00. Order O-001 is created with subscriptions S1 and S2, respectively containing rate plan charges C1 and C2.
4.  On the order details page, create an invoice schedule with three invoice schedule items for the two subscriptions.
    1.  Invoice schedule item 1: Set the invoice date to 02/04/2023 in the On field and the billing amount to 1000 in the Bill field.
    2.  Invoice schedule item 2: Set the invoice date to 05/01/2023 in the On field and the billing amount to 500 in the Bill field.
    3.  Invoice schedule item 3: Set the invoice date to 11/14/2023 in the On field and the billing amount to 500 in the Bill field. Invoice schedule IS-00000001 is created with three invoice schedule items all in Pending status.
5.  Execute invoice schedule items 1, 2, and 3 to generate invoices for subscriptions S1 and S2.
    1.  On the invoice schedule details page, scroll down to the Schedule Items section.
    2.  In the corresponding row of invoice schedule item 1, click the "Generate" action link in the Billing Document column to manually generate a scheduled invoice by an ad hoc bill run. Invoice INV001 is generated with the amount of $1,000.00, and the status of invoice schedule item 1 changes to Processed from Pending.
    3.  On the invoice details page of invoice INV001, click Post Invoice to post the invoice. Invoice INV001 is posted.
    4.  Repeat steps 5.a to 5.c to execute invoice schedule item 2. Invoice INV002 is generated with the amount of $500.00, and the status of invoice schedule item 2 changes to Processed from Pending.
    5.  Repeat steps 5.a to 5.c to execute invoice schedule item 3. Invoice INV003 is generated with the amount of $500.00, and the status of invoice schedule item 3 changes to Processed from Pending. The status of invoice schedule IS-00000001 changes to Fully Processed from Partially Processed. Later, Invoice INV003 is posted.
6.  Create an order to cancel subscriptions S1 and S2 as of 1 November 2023, and activate the order. Order O-002 is created and activated.
7.  On the order details page of order O-0001, click the number of the invoice schedule associated with the order.
8.  On the invoice schedule details page, click Create Bill Run in the upper right.
9.  In the displayed Confirmation dialog, click Yes to confirm bill run creation.

Bill run with number BR-00000001 is automatically generated. During the bill run execution, a credit memo with number CM001 is generated with the amount of $333.33, containing two credit memo items.

After invoice schedule items are executed, three invoices are generated for subscriptions S1 and S2.

-   After invoice schedule item 1 is executed, invoice INV001 is generated with the amount of $1,000.00.

-   After invoice schedule item 2 is executed, invoice INV002 is generated with the amount of $500.00.

-   After invoice schedule item 2 is executed, invoice INV003 is generated with the amount of $500.00.


Because subscription S2 has a zero-amount price, the amount of all generated invoices comes from subscription S1.

The following table lists the amount that is proportionally distributed to each invoice item, and the service period of each invoice item.

| Invoice | Subscription | Charge | Invoice item | Service start date | Service end date | Amount | Status | Total amount |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| INV001 | S1 | C1 | Invoice item 1 | 01/01/2023 | 06/30/2023 | $1000.00 | Posted | $2,000.00 |
| INV001 | S2 | C2 | Invoice item 2 | 01/01/2023 | 06/30/2023 | $0.00 | Posted |  |
| INV002 | S1 | C1 | Invoice item 1 | 07/01/2023 | 09/30/2023 | $500.00 | Posted |  |
| INV002 | S2 | C2 | Invoice item 2 | 07/01/2023 | 09/30/2023 | $0.00 | Posted |  |
| INV003 | S1 | C1 | Invoice item 1 | 10/01/2023 | 12/31/2023 | $500.00 | Posted |  |
| INV003 | S2 | C2 | Invoice item 2 | 10/01/2023 | 12/31/2023 | $0.00 | Posted |  |

After subscriptions S1 and S2 are canceled, bill run with number BR-00000001 is automatically generated. During the bill run execution, a credit memo with number CM001 is generated with the amount of $333.33, containing two credit memo items. The credit amount of $333.33 is the calculation result of 2000÷12×2 based on the following formula:

Total invoice amount ÷ Subscription term × Cancellation period

The following table lists the amount that is proportionally distributed to each subscription, and the service period of each credit memo item.

| Credit Memo Item | Credit From Item | Subscription | Charge | Service Start Date | Service End Date | Amount | Total Amount |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Credit memo item 1 | INV003: InvoiceItem1 | S1 | C1 | 11/01/2023 | 12/31/2023 | $333.33 | $333.33 |
| Credit memo item 2 | INV003: InvoiceItem2 | S2 | C2 | 11/01/2023 | 12/31/2023 | $0.00 |  |
