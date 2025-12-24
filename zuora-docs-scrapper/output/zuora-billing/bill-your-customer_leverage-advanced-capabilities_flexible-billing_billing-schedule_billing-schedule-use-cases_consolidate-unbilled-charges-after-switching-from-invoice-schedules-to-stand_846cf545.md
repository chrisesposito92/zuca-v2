---
title: "Consolidate unbilled charges after switching from invoice schedules to standard billing process"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/consolidate-unbilled-charges-after-switching-from-invoice-schedules-to-standard-billing-process"
product: "zuora-billing"
scraped_at: "2025-12-24T18:37:40.522Z"
---

# Consolidate unbilled charges after switching from invoice schedules to standard billing process

Learn how to consolidate unbilled charges when transitioning from invoice schedules to a standard billing process, ensuring seamless billing for your customers.

Note: The Billing Schedule feature is generally available. You can enable this feature in Sandbox and Production environments with the self-serve interface. For more information, see Enable billing features by yourself.

With the Billing Schedule feature, you can control whether to display the invoice items created from the invoice schedule on a separate invoice after switching from a billing schedule to the standard billing process in the middle of a current term.

In this use case, your customer first inks a one-year contract covering one subscription to a product rate plan charge with a total amount of $12,000.00, effective from 1 January 2023 to 31 December 2023. You expect three invoices to be generated for the subscription through the processing of the associated invoice schedule.

-   The contract is billed based on a custom billing schedule with three items.

-   The first invoice is already generated on 1 January 2023, with an amount of $3580.


On April 19, 2023, your customer wants to switch from a custom billing schedule to a fixed-period billing schedule in the middle of the term, in order to bill the remaining charge amount monthly. To make this change, you have to remove the existing charges and add new charges with the updated billing period as Monthly. To meet the requirements, take the following actions:

-   To ensure that the previous charges with remaining unbilled amounts are billed together with the new charges on a single invoice, set the `invoiceSeparately` field to false for the invoice schedule.

-   Instead of using invoice schedules processed by Zuora Scheduler, use bill runs or API operations to bill the new charges. To do this, you have to pause the invoice schedule first.


By following these steps, you can successfully switch the billing schedule and handle the different scenarios effectively.

To not display the invoice items created from the invoice schedule on a separate invoice after switching a billing schedule to the standard billing process in the middle of a current term, perform the following steps:

1.  Activate the Annual List Price settings .
2.  Create one recurring product rate plan charge with the Flat Fee Pricing charge model. A product rate plan charge is created, with an annual list price of $12,000.00.
3.  Create an order with one subscription to the product rate plan charge. Order O-001 is created with subscription S1, with a total amount of $12,000.00.
4.  Create an invoice schedule with two invoice schedule items for subscription S1.
    1.  Set the `orders` field to `O-001` in the request.
    2.  Specify the following information for invoice schedule item 1:

        1.  Set the `scheduleItems` > `runDate` field to `2023-01-01` .

        2.  Set the `amount` field to `3580` .


    3.  Specify the following information for invoice schedule item 2:

        1.  Set the `scheduleItems` > `runDate` field to `2023-05-14` .

        2.  Set the `amount` field to `5640` .


    4.  Specify the following information for invoice schedule item 3:

        1.  Set the `scheduleItems` > `runDate` field to `2023-10-17` .

        2.  Set the `amount` field to `2780` . Invoice schedule IS-00000001 is created with three invoice schedule items in Pending status.


5.  Execute invoice schedule item 1 to generate an invoice for subscription S1. Invoice INV001 is generated with the amount of $3,580.00, and the status of invoice schedule item 1 changes to Processed from Pending. The status of invoice schedule item 2 is still Pending. The next run date of invoice schedule IS-00000001 is 14 May 2023. The service period of invoice INV001 is from 1 January 2023 to 18 April 2023. The day of 18 April 2023 is partially billed, and has an unbilled amount of $20.00 for the rest of the day. The following table lists the detailed information of the invoice schedule in Partially Processed status.

    | Invoice schedule item | Run date | Amount | Billed amount | Schedule item status | Billing document |
    | --- | --- | --- | --- | --- | --- |
    | 1 | 01/01/2023 | $3,580.00 | $3,580.00 | Processed | INV001 |
    | 2 | 05/14/2023 | $5,640.00 | - | Pending | - |
    | 3 | 10/17/2023 | $2,780.00 | - | Pending | - |

6.  Create an order to change the billing schedule covering the following information:
    1.  Specify the `removeProduct` and `addProduct` order actions in the request where the `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `billingPeriod` field is set to `Month` .
    2.  Set the `subscriptions` > `orderActions` > `triggerDates` > `name` field to `ContractEffective` .
    3.  Set the `subscriptions` > `orderActions` > `triggerDates` > `triggerDate` field to `2023-04-19` . Order O-002 is created and activated. Due to the update, the next run date of invoice schedule IS-00000001 is automatically changed to 19 April 2023.
7.  Update invoice schedule IS-00000001 to not display the invoice items created from the invoice schedule on a separate invoice.
    1.  Set the `invoiceSeparately` field to `false` .
    2.  Set the `nextRunDate` field to `2023-04-19` .
8.  Pause invoice schedule IS-00000001 to prevent Zuora Scheduler from picking it up automatically. The status of invoice schedule IS-00000001 changes to Paused from Processed. For the remaining billing amount, you can choose to use bill runs or API operations to generate invoices for the unbilled charges under the account based on a standard billing frequency.
9.  On 19 April 2023, use the Generate billing documents by account ID operation to generate the first invoice in the standard billing schedule for your customer.
    1.  Set the `subscriptionIds` field to a list of the IDs of subscriptions to be billed.
    2.  Set the `targetDate` field to `2023-04-19` .

Invoice INV002 is generated with a total amount of $2,420.00, containing two invoice items.

On 19 April 2023, the Generate billing documents by account ID operation generated invoice INV002, containing the following invoice items:

-   Invoice item 1 has an amount of $20, with the service period from 18 April 2023 to 18 April 2023. During the execution of invoice schedule item 1, the day of 18 April 2023 is partially billed, and has an unbilled amount of $20.00 for the rest of the day. Therefore, the unbilled amount is also billed during the billing document generation processed by the API operation.

-   Invoice item 2 has an amount of $2,400, with the service period from 19 April 2023 to 30 June 2023.


The status of invoice schedule IS-00000001 is Paused, and its next run date is null. The following table lists the information on the invoice schedule:

| Invoice schedule item | Run date | Amount | Billed amount | Schedule item status | Billing document |
| --- | --- | --- | --- | --- | --- |
| 1 | 01/01/2023 | $3,580.00 | $3,580.00 | Processed | INV001 |
| 2 | 05/14/2023 | $5,640.00 | $20.00 | Processed | INV002, actually generated by the Generate billing documents by account ID operation |
| 3 | 10/17/2023 | $2,780.00 | $0.00 | Processed | - |
