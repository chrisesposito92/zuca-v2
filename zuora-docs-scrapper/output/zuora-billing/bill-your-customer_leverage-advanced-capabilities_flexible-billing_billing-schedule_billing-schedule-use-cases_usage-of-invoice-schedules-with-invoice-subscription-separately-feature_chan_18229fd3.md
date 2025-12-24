---
title: "Change subscriptions to be invoiced separately after creating an invoice schedule"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/usage-of-invoice-schedules-with-invoice-subscription-separately-feature/change-subscriptions-to-be-invoiced-separately-after-creating-an-invoice-schedule"
product: "zuora-billing"
scraped_at: "2025-12-24T18:37:25.200Z"
---

# Change subscriptions to be invoiced separately after creating an invoice schedule

Learn how to change the Invoice the Subscription Separately setting after creating an invoice schedule for subscriptions.

With the [Billing Schedule](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/overview-of-billing-schedule) feature, you can use invoice schedules to bill subscriptions with the Invoice the Subscription Separately setting. In general, invoice schedules ignore the "Invoice the Subscription Separately" setting on subscriptions, regardless of whether the setting is set to true or false.

After creating an invoice schedule for subscriptions configured not to be invoiced separately, you can still change the Invoice the Subscription Separately setting to true from false.

Assume that your customer has two subscriptions both configured not to be invoiced separately, so you create an invoice schedule with two items to bill the subscriptions. Later, you change the Invoice the Subscription Separately setting to true from false for one subscription. After this operation, you execute the first invoice schedule item to generate the first invoice. An invoice is generated with the specified amount regardless of the value of the Invoice the Subscription Separately setting.

To change subscriptions to be invoiced separately after creating the corresponding invoice schedule, perform the following steps:

1.  Activate the Annual List Price settings .
2.  Create two recurring product rate plan charges with the Flat Fee Pricing charge model.
3.  Create and activate an order with two subscriptions to the two charges, with the total amount of $22,000.00 and the same term of 12 months. Order O-001 is created with subscriptions S1 and S2.

    | Subscription number | Charge number | Amount | List price base | Billing period | Invoice subscriptions separately |
    | --- | --- | --- | --- | --- | --- |
    | S1 | C1 | $12,000.00 | Per Year | Annual | false |
    | S2 | C2 | $10,000.00 | Per Year | Annual | false |

4.  On the order details page, create an invoice schedule with three invoice schedule items,
    1.  Invoice schedule item 1: Set the invoice date to 05/04/2023 in the On field and billing amount to 10000 in the Bill field.
    2.  Invoice schedule item 2: Set the invoice date to 09/01/2023 in the On field and billing amount to 12000 in the Bill field. Invoice schedule IS-00000001 is created with three invoice schedule items all in Pending status. The following table lists the detailed information of the invoice schedule in Partially Processed status.

        | Subscription number | Charge number | Amount | List price base | Billing period | Invoice subscriptions separately |
        | --- | --- | --- | --- | --- | --- |
        | 1 | 05/04/2023 | $10,000.00 | - | Pending | - |
        | 2 | 09/01/2023 | $12,000.00 | - | Pending | - |

5.  On the subscription S2 details page, select the Invoice Separately? checkbox in the Others subsection of the Basic section.
6.  Execute invoice schedule item 1 of invoice schedule IS-00000001 to generate the first invoice.

Invoice INV001 is generated with an amount of $10,000, and the status of invoice schedule item 1 changes to Processed from Pending. The status of invoice schedule item 2 is still Pending. The next run date of invoice schedule IS-00000001 is 1 September 2023.
