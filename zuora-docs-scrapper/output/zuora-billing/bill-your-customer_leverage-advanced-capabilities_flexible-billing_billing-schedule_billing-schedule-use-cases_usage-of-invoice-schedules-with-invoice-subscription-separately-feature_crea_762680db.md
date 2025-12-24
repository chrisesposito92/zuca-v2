---
title: "Create invoice schedules for orders containing subscriptions configured to be invoiced separately"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/usage-of-invoice-schedules-with-invoice-subscription-separately-feature/create-invoice-schedules-for-orders-containing-subscriptions-configured-to-be-invoiced-separately"
product: "zuora-billing"
scraped_at: "2025-12-24T18:37:28.053Z"
---

# Create invoice schedules for orders containing subscriptions configured to be invoiced separately

Create invoice schedules for orders with subscriptions set to be invoiced separately, using custom billing schedules.

With the [Billing Schedule](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/overview-of-billing-schedule) feature, you can use invoice schedules to bill subscriptions with the Invoice the Subscription Separately setting. In general, invoice schedules ignore the "Invoice the Subscription Separately" setting on subscriptions, regardless of whether the setting is set to true or false.

If an order contains subscriptions configured to be invoiced separately, you can still create an invoice schedule to bill the subscriptions in the order according to a custom invoice schedule.

For example, your customer has two subscriptions, one configured to be invoiced separately and the other not. You can successfully create an invoice schedule with two items to bill the subscriptions.

To create invoice schedules for orders containing subscriptions configured to be invoiced separately, perform the following steps:

1.  Activate the Annual List Price settings .
2.  Create two recurring product rate plan charges with the Flat Fee Pricing charge model.
3.  Create and activate an order with two subscriptions to the two charges, with the total amount of $22,000.00 and the same term of 12 months.

    Order O-001 is created with subscriptions S1 and S2.

    | Subscription number | Charge number | Amount | List price base | Billing period | Invoice subscriptions separately |
    | --- | --- | --- | --- | --- | --- |
    | S1 | C1 | $12,000.00 | Per Year | Annual | false |
    | S2 | C2 | $10,000.00 | Per Year | Annual | true |

4.  On the order details page, create an invoice schedule with three invoice schedule items,
    1.  Invoice schedule item 1: Set the invoice date to 05/04/2023 in the On field and billing amount to 10000 in the Bill field.
    2.  Invoice schedule item 2: Set the invoice date to 09/01/2023 in the On field and billing amount to 12000 in the Bill field.

Invoice schedule IS-00000001 is created with two invoice schedule items both in Pending status. The following table lists the detailed information of the invoice schedule in Pending status.

| Subscription number | Charge number | Amount | List price base | Billing period | Invoice subscriptions separately |
| --- | --- | --- | --- | --- | --- |
| 1 | 05/04/2023 | $10,000.00 | - | Pending | - |
| 2 | 09/01/2023 | $12,000.00 | - | Pending | - |
