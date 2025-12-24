---
title: "Perform bill subscriptions early from standard billing process to billing schedules"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/perform-bill-subscriptions-early-from-standard-billing-process-to-billing-schedules"
product: "zuora-billing"
scraped_at: "2025-12-24T18:37:38.101Z"
---

# Perform bill subscriptions early from standard billing process to billing schedules

Learn how to perform early billing for subscriptions using billing schedules, including creating custom invoice schedules and handling early renewals.

With the Billing Schedule feature, you can bill a customer through the standard billing process first, and then create an invoice schedule to generate invoices after a subscription renewal.

In this use case, your customer first inks a one-year contract covering one subscription to a product rate plan charge with a total amount of $24,000.00, effective from 1 January 2023 to 31 December 2023. The contract is billed based on a standard billing process:

-   The contract is billed quarterly with a total amount of $24,000.00. Every invoice has an amount of $6,000.

-   The invoice for the fourth quarter is already billed on 1 October 2023.


Later on 5 October 2023, your customer wants to make an early renewal effective from 1 November 2023. The new contract has a total amount of $26,000, and a term of 12 months ranging from 1 November 2023 to 31 October 2024. Another invoice schedule is required to bill the new subscription in two invoices. For the new contract, your customer expects to bill the new subscriptions based on a custom billing schedule. Therefore, an invoice schedule is required to bill the new subscription in two invoices.

As shown in the following table, subscriptions S1 and S2 in the first contract have an initial subscription term of 12 months, respectively containing rate plan charges C1 and C2.

| Subscription number | Charge start date | Total length (Months) | Charge number | Charge end date | List price | List price base | Billing period |
| --- | --- | --- | --- | --- | --- | --- | --- |
| S1 | 01/01/2023 | 12 | C1 | 12/31/2023 | $12,000.00 | Per Year | Annual |
| S2 | 01/01/2023 | 12 | C2 | 12/31/2023 | $12,000.00 | Per Year | Annual |

To create such a custom invoice schedule to bill subscriptions early and generate invoices as expected, perform the following steps:

1.  Activate the Annual List Price settings .
2.  Create two recurring product rate plan charge with the Flat Fee Pricing charge model. Two product rate plan charges are created, each with a list price of $12,000.00 per year.
3.  Create an order with two subscriptions to the product rate plan charges. Order O-001 is created with subscriptions S1 and S2, with a total amount of $24,000.00.
4.  Create a scheduled bill run to generate invoices quarterly. Four invoices INV001, INV002, INV003, and INV004 are generated, one for each quarter.
5.  Create an order to make an early renewal covering the following information:
    1.  Specify the removeProduct, termsAndConditions, and addProduct order actions in the request.
    2.  Set the `subscriptions` > `orderActions` > `triggerDates` > `name` field to `ContractEffective` .
    3.  Set the `subscriptions` > `orderActions` > `triggerDates` > `triggerDate` field to `2023-11-01` . Order O-002 is created and activated. Due to the product removal, the next run date of invoice schedule IS-00000001 is automatically changed to 1 November 2023.
6.  Create an invoice schedule with two invoice schedule items for subscription S2.
    1.  Set the orders field to O-002 in the request.
    2.  Set the `additionalSubscriptionsToBill` field to `[S1, S2]` .
    3.  Specify the following information for invoice schedule item 1:

        1.  Set the `scheduleItems` > `runDate` field to `2023-10-15` .

        2.  Set the `amount` field to `16000` .

        3.  Set the `targetDateForAdditionalSubscriptions` field to `2023-11-01` .


    4.  Specify the following information for invoice schedule item 2:

        1.  Set the `scheduleItems` > `runDate` field to 2024-06-01.

        2.  Set the `amount` field to `10000` .

        3.  Set the `targetDateForAdditionalSubscriptions` field to `2023-11-01` .



Invoice schedule IS-00000001 is created with two invoice schedule items both in Pending status. The next run date of invoice schedule IS-00000001 is 15 October 2023.

Because subscriptions S1 and S2 in the previous contract are already billed in invoice INV004 for the fourth quarter, credit is required for the product removal. In this case, you must specify the following fields when creating the invoice schedule:

-   Specify the `additionalSubscriptionsToBill` field to an array containing the number of each subscription that needs to be billed together with the invoice schedule.

-   Set the `targetDateForAdditionalSubscriptions` field to the subscription renewal date.


On 15 October 2023, the following operations automatically occur:

-   Zuora Scheduler automatically processes invoice schedule item 1 of invoice schedule IS-00000001 to generate an invoice with an amount of $16,000.00. The status of invoice schedule item 1 changes to Processed from Pending.

-   Meanwhile, a credit memo is generated with an amount of $4,000.00, prorating the credit for the two-month product removal ranging from 1 November 2023 to 31 December 2023.


The following table lists the information on the invoice schedule:

| Invoice schedule otem | Date | Target date for additional subscriptions | Next run date | Amount | Billed amount | Schedule item status | Billing pocument |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 10/15/2023 | 11/01/2023 | 06/01/2024 | $160,000.00 | $16,000.00 | Processed | INV005CM001 |
| 2 | 06/01/2024 | 11/01/2023 | $10,000.00 | $10,000.00 | Pending | - |  |
