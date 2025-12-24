---
title: "Perform bill subscriptions early after early renewal through custom invoice schedules"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/perform-bill-subscriptions-early-after-early-renewal-through-custom-invoice-schedules"
product: "zuora-billing"
scraped_at: "2025-12-24T18:37:35.510Z"
---

# Perform bill subscriptions early after early renewal through custom invoice schedules

Learn how to bill subscriptions early after an early renewal using custom invoice schedules, ensuring timely invoicing and credit processing.

With the Billing Schedule feature, you can create another invoice schedule to generate invoices for a subscription renewal, and bill the new subscription early.

In this use case, your customer first inks a one-year contract covering one subscription to a product rate plan charge with a total amount of $12,000.00, and expects two invoices to be generated for the subscription through the processing of the associated invoice schedule.

Later on 1 September 2023, your customer wants to make an early renewal effective from 1 October 2023. The new contract has a total amount of $13,000, and a term of 12 months ranging from 1 October 2023 to 30 September 2024. Another invoice schedule is required to bill the new subscription in two invoices. Your customer expects to bill the new subscription early on 15 September 2023 before the contract effective date and receive credit for the previous subscription on the same day.

As shown in the following table, subscriptions S1 and S2 have an initial subscription term of 12 months, respectively containing rate plan charges C1 and C2.

| Subscription number | Charge start date | Total length (Months) | Charge number | Charge end date | List price | List price base | Billing period |
| --- | --- | --- | --- | --- | --- | --- | --- |
| S1 | 01/01/2023 | 12 | C1 | 12/31/2023 | $12,000.00 | Per Year | Annual |
| S2 | 10/01/2023 | 12 | C2 | 09/30/2024 | $13,000.00 | Per Year | Annual |

The following table lists the detailed information of the first invoice schedule in Partially Processed status.

| Invoice Schedule Item | Date | Amount | Billed Amount | Schedule Item Status | Billing Document |
| --- | --- | --- | --- | --- | --- |
| 1 | 01/01/2023 | $100,000.00 | $10,000.00 | Processed | INV001 |
| 2 | 11/01/2023 | $2,000.00 | - | Pending | - |

To bill subscriptions early after an early renewal through invoice schedules and generate invoices as expected, perform the following steps:

1.  Activate the Annual List Price settings .
2.  Create one recurring product rate plan charge with the Flat Fee Pricing charge model. A product rate plan charge is created with a list price of $12,000.00 per year.
3.  Create an order with one subscription to the product rate plan charge. Order O-001 is created with subscription S1, with a total amount of $12,000.00.
4.  Create an invoice schedule with two invoice schedule items for subscription S1.
    1.  Set the orders field to O-001 in the request.
    2.  Specify the following information for invoice schedule item 1:

        1.  Set the `scheduleItems` > `runDate` field to `2023-01-01` .

        2.  Set the `amount` field to `10000` .


    3.  Specify the following information for invoice schedule item 2:

        1.  Set the `scheduleItems` > `runDate` field to `2023-11-01` .

        2.  Set the `amount` field to `2000` . Invoice schedule IS-00000001 is created with two invoice schedule items both in Pending status.


5.  Execute invoice schedule item 1 to generate an invoice for subscription S1. Invoice INV001 is generated with the amount of $10,000.00, and the status of invoice schedule item 1 changes to Processed from Pending. The status of invoice schedule item 2 is still Pending. The next run date of invoice schedule IS-00000001 is 1 November 2023.
6.  Create an order to make an early renewal covering the following information:
    1.  Specify the `removeProduct` , `termsAndConditions` , and `addProduct` order actions in the request.
    2.  Set the `subscriptions` > `orderActions` > `triggerDates` > `name` field to `ContractEffective` .
    3.  Set the `subscriptions` > `orderActions` > `triggerDates` > `triggerDate` field to `2023-10-01` . Order O-002 is created and activated. Due to the product removal, the next run date of invoice schedule IS-00000001 is automatically changed to 1 October 2023.
7.  Create another invoice schedule with two invoice schedule items for subscription S2.
    1.  Set the orders field to O-002 in the request.
    2.  Invoice schedule item 1: Set the `scheduleItems` > `runDate` field to `2023-09-15` and the `amount` field to `8000` .
    3.  Invoice schedule item 2: Set the `scheduleItems` > `runDate` field to `2024-06-01` and the `amount` field to `5000` . Invoice schedule IS-00000002 is created with two invoice schedule items both in Pending status. The next run date of invoice schedule IS-00000002 is 15 September 2023.
8.  Use the Update an invoice schedule operation to update the next run date of invoice schedule IS-00000001 to 15 September 2023. Your customer expects to bill the new subscription early on 15 September 2023 before the contract effective date and receive credit for the previous subscription on the same day. Therefore, you have to update the next run date of invoice schedule IS-00000001 to meet the requirement.

On 15 September 2023, the following operations automatically occur:

-   Zuora Scheduler automatically processes invoice schedule item 1 of invoice schedule IS-00000001 to generate a credit memo with an amount of $1,000.00, prorating the credit for one-month product removal ranging from 1 September 2023 to 30 September 2023. The status of invoice schedule item 1 changes to Processed from Pending. invoice schedule IS-00000001 is fully processed.

-   Zuora Scheduler automatically processes invoice schedule item 1 of Invoice schedule IS-00000002 to generate an invoice with an amount of $8,000.00.


The following table lists the information on the two invoice schedules:

| Invoice Schedule Number | Invoice Schedule Item | Date | Next Run Date | Amount | Billed Amount | Schedule Item Status | Billing Document |
| --- | --- | --- | --- | --- | --- | --- | --- |
| IS-00000001 | 1 | 01/01/2023 | null | $100,000.00 | $10,000.00 | Processed | INV001 |
| 2 | 11/01/2023 | $2,000.00 | $2,000.00 | Processed | CM001 |  |  |
| IS-00000002 | 1 | 09/15/2023 | 06/01/2024 | $80,000.00 | $8,000.00 | Processed | INV002 |
| 2 | 06/01/2024 | $5,000.00 | - | Pending | - |  |  |
