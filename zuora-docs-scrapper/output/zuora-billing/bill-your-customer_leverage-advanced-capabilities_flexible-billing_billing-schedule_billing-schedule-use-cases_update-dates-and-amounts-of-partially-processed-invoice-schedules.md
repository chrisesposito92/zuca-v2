---
title: "Update dates and amounts of partially processed invoice schedules"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/update-dates-and-amounts-of-partially-processed-invoice-schedules"
product: "zuora-billing"
scraped_at: "2025-12-24T18:37:09.885Z"
---

# Update dates and amounts of partially processed invoice schedules

Learn how to update the dates and amounts of partially processed invoice schedules to meet customer requirements.

The Billing Schedule feature is generally available. You can enable this feature in Sandbox and Production environments with the self-serve interface. For more information, see Enable billing features by yourself.

With the Billing Schedule feature, you can update the dates and amounts of invoice schedules that are partially processed.

In this use case, after an invoice schedule is partially processed, you want to change the dates and amounts of the invoice schedule items that are still pending to meet customer requirements.

Your customer inks a two-year agreement covering two subscriptions to different product rate plan charges, and expects three invoices to be generated for the subscriptions on self-defined dates in different years based on the original budget. Therefore, you create an invoice schedule where one invoice is generated in the first year and two invoices are generated in the second year. Later, after the first invoice is generated and posted, your customer receives more budget for the first year, and therefore wants to generate the second invoice with more amount also in the first year. Subsequently, you have to update the date and amount for the second invoice schedule item, and update the amount of the third invoice item.

As shown in the following table, two subscriptions are created by creating an order , with the total amount of $2,000.00, and the term of each subscription is 12 months in different years. You expect to create a custom invoice schedule to generate three invoices for the two subscriptions. The first invoice is expected to be generated on 4 February 2022 with the amount of $1,200.00, the second invoice on 5 January 2023 with the amount of $500.00, and the third invoice on 15 July 2023 with the amount of $300.00.

| Subscription number | Charge start date | Term (Month) | Charge number | Charge end date | Selling price | List price base | Billing period |
| --- | --- | --- | --- | --- | --- | --- | --- |
| S1 | 01/01/2022 | 12 | C1 | 12/31/2022 | $1,000.00 | Per Year | Annual |
| S2 | 01/01/2023 | 12 | C2 | 12/31/2023 | $1,000.00 | Per Year | Annual |

The following table lists the detailed information of the invoice schedule in Partially Processed status.

| Invoice schedule item | Date | Amount | Billed amount | Schedule item status | Billing document |
| --- | --- | --- | --- | --- | --- |
| 1 | 02/04/2022 | $1,200.00 | $1,200.00 | Processed | INV001 |
| 2 | 05/01/2023 | $500.00 | - | Pending | - |
| 3 | 09/16/2023 | $300.00 | - | Pending | - |

After invoice INV001 is automatically generated and posted during the processing of invoice schedule item 1, you have to make the following updates to meet customer requirements:

-   Update the date of invoice schedule item 2 to $600.00 and the amount to 1 June 2022.

-   Correspondingly update the amount of invoice schedule item 3 to $200.00.


To update the dates and amounts of invoice schedule items in an existing invoice schedule, perform the following steps:

1.  In the left navigation section, navigate to Customers > Orders .
2.  On the Orders page, click the number of order O-001 associated with the invoice schedule that you want to edit.
3.  On the order details page of order O-0001, click the number of the invoice schedule associated with the order.
4.  On the invoice schedule details page, click Edit in the upper right. The Edit Invoice Schedule page is displayed.
5.  In the Schedule Items section, make the following updates:
    1.  In the corresponding row of invoice schedule item 2, enter 06/01/2022 as the new invoice date in the Date field and 600 as the new billing amount in the Bill field.
    2.  In the corresponding row of invoice schedule item 3, enter 200 as the new billing amount in the Bill field.
6.  Click Save Updates to save the changes.

The following table lists the detailed information of the updated invoice schedule.

| Invoice schedule item | Date | Amount | Billed amount | Schedule item status | Billing document |
| --- | --- | --- | --- | --- | --- |
| 1 | 02/04/2022 | $1,200.00 | $1,200.00 | Processed | INV001 |
| 2 | 06/01/2022 | $600.00 | - | Pending | - |
| 3 | 09/16/2023 | $200.00 | - | Pending | - |

After the invoice schedule update is complete, two invoices are automatically generated with the corresponding updated amount on the scheduled dates.
