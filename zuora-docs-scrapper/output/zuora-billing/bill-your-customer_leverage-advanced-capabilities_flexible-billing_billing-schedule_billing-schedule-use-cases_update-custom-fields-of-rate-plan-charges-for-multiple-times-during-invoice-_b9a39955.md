---
title: "Update custom fields of rate plan charges for multiple times during invoice schedule processing"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/update-custom-fields-of-rate-plan-charges-for-multiple-times-during-invoice-schedule-processing"
product: "zuora-billing"
scraped_at: "2025-12-24T18:37:20.199Z"
---

# Update custom fields of rate plan charges for multiple times during invoice schedule processing

Learn how to update custom fields of rate plan charges multiple times during invoice schedule processing to align with customer requirements.

Note:

The Billing Schedule feature is generally available. You can enable this feature in Sandbox and Production environments with the self-serve interface. For more information, see Enable billing features by yourself.

With the Billing Schedule feature, you can update custom fields of rate plan charges for multiple times through the Update Product order action during the processing of the associated invoice schedule.

In this use case, your customer inks a one-year agreement covering one subscription to a product rate plan charge with a total amount of $1,200, and expects three invoices to be generated for the subscription through the processing of the associated invoice schedule. A custom field called PO Number is added to the rate plan charge to store purchase order information.

After the first invoice is generated, your customer wants to update the PO number twice, so you have to update the PO Number field twice on the rate plan charge. Subsequently, you execute the corresponding invoice schedule items to generate invoices to align with the updates.

As shown in the following table, subscription S1 only contains one rate plan charge called C1.

| Subscription number | Charge start date | Total length (Months) | Charge number | Charge end date | List price | List price base | Billing period | PO number |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| S1 | 01/01/2023 | 12 | C1 | 12/31/2023 | $1,200.00 | Per Year | Annual | PO-001 |

To create such a custom invoice schedule, update custom fields of rate plan charges for multiple times, and generate invoices as expected, perform the following steps:

1.  Activate the Annual List Price settings .
2.  Create one recurring product rate plan charge with the Flat Fee Pricing charge model. A product rate plan charge is created with a list price of $1,200.00 per year.
3.  Create and activate an order with six subscriptions to the product rate plan charge, with the total amount of $1,200.00. Order O-001 is created with subscription S1, which contains rate plan charge C1 with PO number PO-001
4.  On the order details page, create an invoice schedule with two invoice schedule items for the six subscriptions.
    1.  Invoice schedule item 1: Set the invoice date to 01/01/2023 in the On field and the billing amount to 700 in the Bill field.
    2.  Invoice schedule item 2: Set the invoice date to 05/01/2023 in the On field and the billing amount to 300 in the Bill field.
    3.  Invoice schedule item 3: Set the invoice date to 11/01/2023 in the On field and the billing amount to 200 in the Bill field. Invoice schedule IS-00000001 is created with three invoice schedule items all in Pending status.
5.  Execute invoice schedule item 1 to generate an invoice for subscription S1.
    1.  On the invoice schedule details page, scroll down to the Schedule Items section.
    2.  In the corresponding row of invoice schedule item 1, click the "Generate" action link in the Billing Document column to manually generate a scheduled invoice by an ad hoc bill run. Invoice INV001 is generated with the amount of $700.00, and the status of invoice schedule item 1 changes to Processed from Pending.
    3.  On the invoice details page of invoice INV001, click Post Invoice to post the invoice. Invoice INV001 is posted. The status of invoice schedule IS-00000001 changes to Partially Processed from Pending.
    4.  Use the Update Product order action to update the effective date of rate plan charge C1 to 08/01/2023 and PO number to PO-002 .
6.  Use the Update Product order action to update the effective date of rate plan charge C1 to 10/01/2023 and PO number to PO-003 .
7.  Execute invoice schedule items 2 and 3 to generate invoices for subscription S1.
    1.  On the invoice schedule details page, scroll down to the Schedule Items section.
    2.  In the corresponding row of invoice schedule item 2, click the "Generate" action link in the Billing Document column to manually generate a scheduled invoice by an ad hoc bill run. Invoice INV002 is generated with the amount of $300.00, and the status of invoice schedule item 1 changes to Processed from Pending.
    3.  On the invoice details page of invoice INV002, click Post Invoice to post the invoice. Invoice INV002 is posted.
    4.  Repeat steps 8.a and 8.b to execute invoice schedule item 3. Invoice INV003 is generated with the amount of $200.00, and the status of invoice schedule item 3 changes to Processed from Pending. The status of invoice schedule IS-00000001 changes to Fully Processed from Partially Processed.
8.  On the invoice details page of invoice INV003, click Post Invoice to post the invoice. Invoice INV003 is posted.

All the invoices are posted. The status of invoice schedule IS-00000001 changes to Fully Processed from Partially Processed.

After invoice schedule item 1 is executed, the first invoice with invoice number INV001 is generated with the invoice date of 1 January 2023. The amount of invoice INV001 is $700.00, less than the total amount of subscription S1. Later, after the custom field is updated and invoice schedule items 2 and 3 are executed, invoices INV002 and INV003 are generated.

Only rate plan charge C1 is contained in subscription S1, so all the invoices generated for the subscription have only one item.

The following table lists the amount that is proportionally distributed to each invoice item, and the service period of each invoice item.

| Invoice | Subscription | Charge | Invoice item | >Charge PO number | Service start date | Service end date | Amount | Status | Total amount |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| INV001 | S1 | C1 | Invoice item 1 | PO-001 | 01/01/2023 | 07/31/2023 | $700.00 | Posted | $1,200.00 |
| INV002 | S1 | C1 | Invoice item 1 | PO-002 | 08/01/2023 | 10/31/2023 | $300.00 | Posted |  |
| INV003 | S1 | C1 | Invoice item 1 | PO-003 | 11/01/2023 | 12/31/2023 | $200.00 | Posted |  |
