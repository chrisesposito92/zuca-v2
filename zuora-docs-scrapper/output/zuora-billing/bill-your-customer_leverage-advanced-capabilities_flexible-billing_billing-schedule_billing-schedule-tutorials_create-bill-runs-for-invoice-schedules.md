---
title: "Create bill runs for invoice schedules"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-tutorials/create-bill-runs-for-invoice-schedules"
product: "zuora-billing"
scraped_at: "2025-12-24T18:34:16.940Z"
---

# Create bill runs for invoice schedules

Learn how to create bill runs for invoice schedules using the Zuora UI or REST API, and understand the implications of subscription changes on credit memos.

Note: The Billing Schedule feature is generally available. You can enable this feature in Sandbox and Production environments with the self-serve interface. For more information, see Enable billing features by yourself.

After an invoice schedule is fully processed, if you remove a product or cancel a subscription from the associated order, you can manually create a bill run through the Zuora UI to generate a credit memo with the corresponding credit amount for the subscription change.

Alternatively, you can also use the Execute an invoice schedule operation to manually execute an invoice schedule through the REST API.

If you do not remove any product or cancel any subscription from the associated order, you create a bill run for an invoice schedule in Fully Processed status, but no credit memo is generated during the execution of the bill run.

To manually create a bill run for an invoice schedule through the Zuora UI, perform the following steps:

1.  In the left navigation section, navigate to Customers > Orders .
2.  On the Orders page, click the number of the order associated with the invoice schedule that you want to edit.
3.  On the order details page, click the number of the invoice schedule that you want to edit in the basic information section.
4.  On the invoice schedule details page, click Create Bill Run in the upper right.
5.  In the displayed Confirmation dialog, click Yes to confirm bill run creation.

An ad hoc bill run is automatically created, and a credit memo is generated with the corresponding credit amount.
