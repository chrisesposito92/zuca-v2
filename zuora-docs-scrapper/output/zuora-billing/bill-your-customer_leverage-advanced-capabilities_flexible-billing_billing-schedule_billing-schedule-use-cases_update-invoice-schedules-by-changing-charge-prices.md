---
title: "Update invoice schedules by changing charge prices"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/update-invoice-schedules-by-changing-charge-prices"
product: "zuora-billing"
scraped_at: "2025-12-24T18:37:07.449Z"
---

# Update invoice schedules by changing charge prices

Learn how to update invoice schedules by changing charge prices in existing orders before processing.

The Billing Schedule feature is generally available. You can enable this feature in Sandbox and Production environments with the self-serve interface. For more information, see Enable billing features by yourself.

Before an invoice schedule created on an order is processed, you change the price of one existing rate plan charge to the subscriptions in the order, and then update the invoice schedule to align with the charge price change.

This use case is based on the precondition documented in Create single-year invoice schedules on new subscriptions with the same term :

-   An order with four subscriptions is created, with the same charge start date and end date ranging from 1 January 2023 to 31 December 2023.

-   An invoice schedule with three schedule items is created on the order with the total amount of $70,200.00.

-   No invoice is generated yet.


The following table lists the detailed information of the invoice schedule in Pending status.

| Invoice schedule item | Date | Amount | Billed amount | Schedule item status | Billing document |
| --- | --- | --- | --- | --- | --- |
| 1 | 02/04/2023 | $50,000.00 | - | Pending | - |
| 2 | 05/01/2023 | $14,000.00 | - | Pending | - |
| 3 | 09/16/2023 | $6,200.00 | - | Pending | - |

Before any invoice is automatically generated and posted, the product rate plan charge C4 is changed from $8,00.00 to $1,000.00. Therefore, you have to create another order to change the price of subscription rate charge C4 to an existing subscription, and update the existing invoice schedule with the amount change.

To change the price of a charge in the existing order and update the corresponding invoice schedule, perform the following steps:

1.  Create an order to update a product in subscriptions S4 to change the charge price from $8,00.00 to $1,000.00, and then activate the order. Order O-0002 is created and activated.
2.  On the order details page of order O-0001, click the number of the invoice schedule associated with the order.
3.  On the invoice schedule details page, click Edit in the upper right. The Edit Invoice Schedule page is displayed.
4.  In the basic information section of the Edit Invoice Schedule page, associate order O-0002 with the invoice schedule.

    -   Click the “Edit” action link next to the order number displayed in the Order Number field.

    -   In the Change Orders popup window, enter O-0001, O-0002 in the Order Numbers (separated with comma) text box.

    -   Click Done to save the order number changes. The value of the Total Amount field is refreshed to the total amount of orders O-0001 and O-0002.


5.  In the Schedule Items section, enter 6,400 as the new billing amount in the Bill field in the corresponding row of invoice schedule item 3.
6.  Click Save Updates to save the changes.

The following table lists the detailed information of the updated invoice schedule.

| Invoice schedule item | Date | Amount | Billed amount | Schedule item status | Billing document |
| --- | --- | --- | --- | --- | --- |
| 1 | 02/04/2023 | $50,000.00 | - | Pending | - |
| 2 | 05/01/2023 | $14,000.00 | - | Pending | - |
| 3 | 09/16/2023 | $6,400.00 | - | Pending | - |

After the invoice schedule update is complete, three invoices are automatically generated with the corresponding amount on the scheduled dates.

In this use case, alternatively, you can also have the flexibility to wait for Zuora to automate the charge price update during invoice generation instead of manually updating the corresponding invoice schedule. If you do not update the invoice schedule, Zuora automates the process and allocates the charge price change amount to the last invoice, and refreshes the amount automatically during the generation of the last invoice.

When updating pricing for an existing subscription, keep the following notes restrictions and limitations in mind:

-   If the invoice schedule has been partially processed, order activation is not allowed.

-   It is not supported that the effective date of updating a product is not the start date of the charge, for example, changing C4 price from 1 May 2022 in this use case.
