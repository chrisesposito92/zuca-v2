---
title: "Specify blank invoicing dates for custom invoice schedules during milestone billing schedules"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/specify-blank-invoicing-dates-for-custom-invoice-schedules-during-milestone-billing-schedules"
product: "zuora-billing"
scraped_at: "2025-12-24T18:37:45.806Z"
---

# Specify blank invoicing dates for custom invoice schedules during milestone billing schedules

Learn how to specify blank invoicing dates for custom invoice schedules during milestone billing, allowing flexibility in project billing timelines.

Note: The Billing Schedule feature is generally available. You can enable this feature in Sandbox and Production environments with the self-serve interface. For more information, see Enable billing features by yourself.

With the Billing Schedule feature, you can specify blank run dates for some invoice schedule items of a custom invoice schedule during project milestone billing when you are not sure about the invoicing dates.

When specifying run dates for invoice schedule items, keep the following notes in mind:

-   An invoice schedule item with a blank run date will not be executed.

-   You can only update the run date for an invoice schedule item in Pending status.

-   If the run date of an invoice schedule item is left empty, the dates of all subsequent invoice schedule items must also be blank.

-   You must specify run dates in chronological order for invoice schedule items.


In this use case, you want to deliver a professional service of integrating with a third party to your customer with several major milestones, and bill your customer in three payments by achieving each of the following milestones:

-   Handover To Delivery (HTD), accounting for 10% of the total project amount Upon the receipt of a purchase order from your customer, you can bill your customer for the first milestone with a specific date.

-   Ready for Use (RFU), accounting for 20% of the total project amount When the user acceptance testing is approaching to the end, you can bill your customer for the second milestone with a specific date.

-   Go-Live Date (GLD), accounting for 70% of the total project amount Upon the signing of a handover document, you can bill your customer for the third milestone with a specific date.


To comply with the milestone billing plan, you create a one-time product rate plan charge for the professional service. The charge has a total amount of $40,000.00, and is effective from 1 January 2023 to 31 December 2023. Your customer first inks a contract covering one subscription to the professional service.

At the beginning, you only know the HTD date as 1 January 2023, but are not sure about the RFU and GLD dates that depend on the actual project progress. To bill your customer for this project, you create an invoice schedule containing three invoice schedule items, each of which corresponds to one project milestone in chronological order.

-   Invoice schedule item 1 has an amount of $4,000 and the run date of 1 January 2023.

-   Invoice schedule item 2 has an amount of $8,000 and the run date as blank.

-   Invoice schedule item 3 has an amount of $28,000 and the run date as blank.


Later when the user acceptance testing is approaching to the end, you know the service is ready for use on 16 June 2023. Then, you can update the run date of invoice schedule item 2 to 16 June 2023 from blank to collect the second payment from your customer. Subsequently, your customer feels satisfied with the service and plans to sign a handover document and go live on 18 October. Therefore, you can update the run date of invoice schedule item 2 to 18 October from blank to collect the final payment from your customer.

To specify blank dates for some invoice schedule items of an invoice schedule and later specify exact dates later during project milestone billing, perform the following steps:

1.  Activate the Annual List Price settings .
2.  Create a one-time product rate plan charge with the Flat Fee Pricing charge model. Two product rate plan charges are created, each with a list price of $40,000.00.
3.  Create an order with one subscription to the one-time product rate plan charge. Order O-001 is created with subscription S1, with a total amount of $40,000.00.
4.  Create an invoice schedule with three invoice schedule items for subscription S1.
    1.  Set the `orders` field to `O-001` in the request.
    2.  Specify the following information for invoice schedule item 1:

        1.  Set the `scheduleItems` > `runDate` field to `2023-01-01` .

        2.  Set the `amount` field to `4000` .


    3.  Specify the following information for invoice schedule item 2:

        1.  Leave the value of the `scheduleItems` > `runDate` field as blank.

        2.  Set the `amount` field to `8000` .


    4.  Specify the following information for invoice schedule item 3:

        1.  Leave the value of the `scheduleItems` > `runDate` field as blank.

        2.  Set the `amount` field to `28000` . Invoice schedule IS-00000001 is created with three invoice schedule items all in Pending status. The following table lists the detailed information of the invoice schedule in Partially Processed status. Invoice schedule item Run date Amount Billed amount Schedule item status Billing document 1 01/01/2023 $4,000.00 - Pending - 2 - $8,000.00 - Pending - 3 - $28,000.00 - Pending -


5.  Execute invoice schedule item 1 to collect the first payment.
    1.  Set the `scheduleKey` path parameter to `IS-00000001` .
    2.  Set the `scheduleItemId` field to the ID of invoice schedule item 1 in the request body. Invoice INV001 is generated with an amount of $4,000, and the status of invoice schedule item 1 changes to Processed from Pending. The status of invoice schedule items 2 and 3 is still Pending. The next run date of invoice schedule IS-00000001 is blank.
6.  When the user acceptance testing is approaching the end, update invoice schedule IS-00000001 to specify a run date for invoice schedule item 2.
    1.  Set the `scheduleItems` > `runDate` field to `2023-06-16` .
    2.  Keep the value of the `amount` field unchanged to `8000` . After the user acceptance testing is complete, you can bill your customer for the second milestone. Therefore, you have to update the next run date of invoice schedule IS-00000001 to meet the requirement. On 16 June 2023, invoice INV002 is generated with an amount of $8,000.00, and the status of invoice schedule item 2 changes to Processed from Pending. The status of invoice schedule item 3 is still Pending. The next run date of invoice schedule IS-00000001 is still blank.
7.  When the date to go live is determined, update invoice schedule IS-00000001 to specify a run date for invoice schedule item 3.
    1.  Set the `scheduleItems` > `runDate` field to `2023-10-18` .
    2.  Keep the value of the `amount` field unchanged as `28000` .

After the go-live date is determined, you can bill your customer for the third milestone to collect the final payment. Therefore, you have to update the next run date of invoice schedule IS-00000001 to meet the requirement. On 18 October 2023, invoice INV003 is generated with the amount of $10,000.00, and the status of invoice schedule item 3 changes to Processed from Pending.

According to the actual project progress, the following operations automatically occur:

-   On 16 June 2023, Zuora Scheduler automatically processed invoice schedule item 2 of invoice schedule IS-00000001 to generate an invoice with an amount of $8,000.00. The status of invoice schedule item 2 changes to Processed from Pending. The status of invoice schedule IS-00000001 is Partially Processed.

-   On 18 October 2023, Zuora Scheduler automatically processed invoice schedule item 3 of invoice schedule IS-00000001 to generate an invoice with an amount of $28,000.00 . The status of invoice schedule item 3 changes to Processed from Pending.

-   The status of invoice schedule IS-00000001 changes to Fully Processed, and its next run date is null.


The following table lists the information on the invoice schedule:

| Invoice schedule item | Run date | Amount | Billed amount | Schedule item status | Billing document |
| --- | --- | --- | --- | --- | --- |
| 1 | 01/01/2023 | $4,000.00 | $4,000.00 | Processed | INV001 |
| 2 | 06/16/2023 | $8,000.00 | $8,000.00 | Processed | INV002 |
| 3 | 10/18/2023 | $28,000.00 | $28,000.00 | Processed | INV003 |
