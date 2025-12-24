---
title: "Transfer owners of subscriptions associated with invoice schedules"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/transfer-owners-of-subscriptions-associated-with-invoice-schedules"
product: "zuora-billing"
scraped_at: "2025-12-24T18:37:12.785Z"
---

# Transfer owners of subscriptions associated with invoice schedules

Learn how to transfer ownership of subscriptions associated with invoice schedules, including conditions for partial and full transfers.

The Owner Transfer order action can work with the Billing Schedule feature.

If all charges within an invoice schedule have been fully billed, you can transfer a subset of subscriptions or all subscriptions associated with an invoice schedule to a new invoice owner account. However, if the charges haven't been fully billed, you must transfer all subscriptions to the new invoice owner account.

Note: The Billing Schedule feature is generally available. You can enable this feature in Sandbox and Production environments with the self-serve interface. For more information, see Enable billing features by yourself.

To transfer the invoice owner of the subscriptions associated with one invoice schedule, perform the following steps:

1.  Activate the Annual List Price settings .
2.  Create two recurring product rate plan charges with the Flat Fee Pricing charge model.
3.  Create and activate an order with two subscriptions for account A1, with the same term of 24 months from 1 January 2022 to 31 December 2023. The total amount of the subscription is $2,500.00. Order O-001 is created with subscriptions S1 and S2 for account A1.

    | Subscription number | Charge number | Owner | Amount | List price base | Billing period |
    | --- | --- | --- | --- | --- | --- |
    | S1 | C1 | A1 | $1,200.00 | Per Year | Annual |
    | S2 | C2 | A1 | $1,300.00 | Per Year | Annual |

4.  On the order details page, create an invoice schedule with two invoice schedule items. Each invoice schedule item corresponds to the charge of a subscription. The total amount of the invoice schedule items is also $2,500.00.
    1.  Invoice schedule item 1: Set the invoice date to 01/01/2022 in the Run Date field and the billing amount to 1200 in the Amount field.
    2.  Invoice schedule item 2: Set the invoice date to 12/01/2022 in the Run Date field and the billing amount to 1300 in the Amount field.
5.  Execute invoice schedule item 1.
    1.  On the invoice schedule details page, scroll down to the Schedule Items section.
    2.  In the corresponding row of invoice schedule item 1, click the “Generate” action link in the Billing Document column to manually generate a scheduled invoice by an ad hoc bill run. Invoice INV001 is generated with the amount of $1,200.00 for account A1, and the status of invoice schedule item 1 changes to Processed from Pending.
    3.  On the invoice details page of invoice INV001, click Post Invoice to post the invoice.
6.  Optional. Execute invoice schedule item 2 by repeating steps 5.b and 5.c. Invoice INV002 is generated and posted, with the amount of $1,300.00 for account A1.

    Note: If you want to transfer only a subset of subscriptions in the invoice schedule from an invoice owner account to a new invoice owner account, you must execute all invoice schedule items so that all subscription charges in the invoice schedule are billed. For example, if you want to transfer only S1 from account A1 to A2, you must also execute the invoice schedule item 2. If the charges in the invoice schedule haven't been fully billed, you must transfer all subscriptions to the new invoice owner account afterward.

7.  Create an order to change the invoice owner of subscription S1 from account A1 to account A2. Order O-002 is created with the successful owner transfer. The invoice owner account of the subscription S1 changes from account A1 to account A2.
8.  Optional. If you want to transfer all subscriptions to account A2, create another order to change the invoice owner of subscription S2 from account A1 to account A2. Order O-003 is created with the successful owner transfer. The invoice owner account of the subscription S2 changes from account A1 to account A2.

    Note: If the charges in the invoice schedule haven't been fully billed, you must transfer all subscriptions to the new invoice owner account afterward. In this case, you must perform this step.
