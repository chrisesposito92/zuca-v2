---
title: "Manually review subscriptions through Subscription Renewal and create another invoice schedule"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/manually-review-subscriptions-through-subscription-renewal-and-create-another-invoice-schedule"
product: "zuora-billing"
scraped_at: "2025-12-24T18:37:02.451Z"
---

# Manually review subscriptions through Subscription Renewal and create another invoice schedule

Learn how to manually renew subscriptions and create an invoice schedule for subscription renewals.

The Billing Schedule feature is generally available. You can enable this feature in Sandbox and Production environments with the self-serve interface. For more information, see Enable billing features by yourself.

After an invoice schedule created on an order is partially processed, you can manually renew all the subscriptions for another year, and create another invoice schedule to generate invoices for the subscription renewal.

This use case is based on the precondition documented in Create single-year invoice schedules on new subscriptions with the same term :

-   An order with four subscriptions is created, with the same charge start date and end date ranging from 1 January 2023 to 31 December 2023.

-   An invoice schedule with three schedule items is created on the order with the total amount of $70,200.00.

-   Two invoices are automatically generated on 4 February 2023 and 1 May 2023.


The following table lists the subscriptions contained in the first order.

| Subscription number | Term start date | Term (Months) | Charge number | Term end date | Selling price | List price base | Billing period | Auto renew |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| S1 | 01/01/2023 | 12 | C1 | 12/31/2023 | $36,900.00 | Per Year | Annual | False |
| S2 | 01/01/2023 | 12 | C2 | 12/31/2023 | $21,500.00 | Per Year | Annual | False |
| S3 | 01/01/2023 | 12 | C3 | 12/31/2023 | $11,000.00 | Per Year | Annual | False |
| S4 | 01/01/2023 | 12 | C4 | 12/31/2023 | $800.00 | Per Year | Annual | False |

The following table lists the detailed information of the invoice schedule in Partially Processed status.

| Invoice schedule item | Date | Amount | Billed amount | Schedule item status | Billing document |
| --- | --- | --- | --- | --- | --- |
| 1 | 02/04/2023 | $50,000.00 | $50,000.00 | Processed | INV001 |
| 2 | 05/01/2023 | $14,000.00 | $14,000.00 | Processed | INV002 |
| 3 | 09/16/2023 | $6,200.00 | - | Pending | - |

After the first two invoices are automatically generated and posted, your customer signs another agreement to subscribe to all the charges C1, C2, C3, and C4 for another year ranging from 1 January 2024 to 31 December 2024, and wants to bill the new subscriptions in three invoices on specific dates in the service year. Therefore, you create another order to renew the subscriptions and activate the order, and then create another invoice schedule with three schedule items.

To manually renew all the subscriptions for another year and create another invoice schedule to generate invoices for the subscription renewal, perform the following steps:

1.  Create an order to renew all subscriptions S1, S2, S3, and S4 for another year ranging from 1 January 2024 to 31 December 2024, and activate the order. Order O-0002 is created and activated.
2.  On the order details page of order O-0002, click Create Invoice Schedule in the upper right.
3.  On the displayed Create Invoice Schedule page, configure schedule item information in the Schedule Items section:

    -   Invoice schedule item 1: Set the invoice date to 01/04/2024 in the On field and the billing amount to 50000 in the Bill field.

    -   Invoice schedule item 2: Set the invoice date to 06/01/2024 in the On field and the billing amount to 14000 in the Bill field.

    -   Invoice schedule item 3: Set the invoice date to 12/14/2024 in the On field and the billing amount to 6200 in the Bill field.


4.  Click Create Invoice Schedule to start invoice schedule creation.
5.  In the displayed Confirmation dialog, click Yes to confirm invoice schedule creation.

Invoice schedule IS-00000002 is created with three invoice schedule items.

The following table lists the detailed information of the invoice schedule in Partially Processed status.

| Invoice schedule item | Date | Amount | Billed amount | Schedule item status | Billing document |
| --- | --- | --- | --- | --- | --- |
| 1 | 01/04/2024 | $50,000.00 | - | Pending | - |
| 2 | 06/01/2024 | $14,000.00 | - | Pending | - |
| 3 | 12/14/2024 | $6,200.00 | - | Pending | - |

After the subscription renewal and creation of invoice schedule IS-00000002, the remaining four invoices are automatically generated with the corresponding amount on the scheduled dates.

If your customer wants to bill the renewed subscriptions by creating ad hoc or scheduled bill runs, you do not need to create another invoice schedule.
