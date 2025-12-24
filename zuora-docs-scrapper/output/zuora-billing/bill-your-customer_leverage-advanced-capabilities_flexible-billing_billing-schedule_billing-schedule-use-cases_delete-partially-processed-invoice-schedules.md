---
title: "Delete partially processed invoice schedules"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/delete-partially-processed-invoice-schedules"
product: "zuora-billing"
scraped_at: "2025-12-24T18:37:15.441Z"
---

# Delete partially processed invoice schedules

Learn the process of deleting invoice schedules in Partially Processed status by changing their status to Pending.

Note: The Billing Schedule feature is generally available. You can enable this feature in Sandbox and Production environments with the self-serve interface. For more information, see Enable billing features by yourself.

In normal circumstances, you cannot delete an invoice schedule in Partially Processed status. To delete such an invoice schedule, you have to first perform certain actions to change its status to Pending, and then delete the invoice schedule.

To delete an invoice schedule in Partially Processed status, perform the following steps:

1.  Activate the Annual List Price settings .
2.  Create two recurring product rate plan charges with the Flat Fee Pricing charge model.
3.  Create and activate an order with two subscriptions to the two charges for account A1, with the total amount of $2,500.00 and the same term of 24 months from 1 January 2022 to 31 December 2023. Order O-001 is created with subscriptions S1 and S2 for account A1.

    | Subscription number | Charge number | Owner | Amount | List price base | Billing period |
    | --- | --- | --- | --- | --- | --- |
    | S1 | C1 | A1 | $1,200.00 | Per Year | Annual |
    | S2 | C2 | A1 | $1,300.00 | Per Year | Annual |

4.  On the order details page, create an invoice schedule with two invoice schedule items.
    1.  Invoice schedule item 1: Set the invoice date to 01/01/2022 in the On field and the billing amount to 1200 in the Bill field.
    2.  Invoice schedule item 2: Set the invoice date to 12/01/2022 in the On field and the billing amount to 1300 in the Bill field.
5.  Execute invoice schedule item 1.
    1.  On the invoice schedule details page, scroll down to the Schedule Items section.
    2.  In the corresponding row of invoice schedule item 1, click the “Generate” action link in the Billing Document column to manually generate a scheduled invoice by an ad hoc bill run. Invoice INV001 is generated with the amount of $1,200.00 for account A1, and the status of invoice schedule item 1 changes to Processed from Pending.
6.  On the invoice details page of invoice INV001, click Post Invoice to post the invoice.
7.  Create a payment and apply it to invoice INV001.
8.  Revert invoice schedule item 1.
    1.  Unapply the payment from invoice INV001.
    2.  Reverse invoice INV001. Invoice INV001 is reversed, and the status of invoice schedule item 1 changes to Pending from Processed. Subsequently, the status of the invoice schedule changes to Pending from Partially Processed.
9.  On the invoice schedule details page, click Delete in the upper right to delete the pending invoice schedule.
10.  In the displayed Confirmation dialog, click Yes to confirm invoice schedule deletion.

The invoice schedule is deleted successfully.
