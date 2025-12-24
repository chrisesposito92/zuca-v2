---
title: "Pause invoice schedules"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-tutorials/pause-invoice-schedules"
product: "zuora-billing"
scraped_at: "2025-12-24T18:34:34.847Z"
---

# Pause invoice schedules

Learn how to pause invoice schedules to prevent automatic processing of invoice schedule items.

You can pause an invoice schedule even though it has been fully processed, to prevent its invoice schedule items from being automatically processed.

To pause an invoice schedule through the REST API, use the Pause an invoice schedule operation.

To pause an invoice schedule associated with an order through the Zuora UI, perform the following steps:

1.  In the left navigation section, navigate to Customers > Orders .
2.  On the Orders page, click the number of the order associated with the invoice schedule that you want to view information about.
3.  On the order details page, click the number of the invoice schedule that you want to delete in the basic information section.
4.  On the invoice schedule details page, click Pause in the upper right.

    You can see the Paused status next to the corresponding invoice schedule.

    Alternatively, you can also navigate to a subscription associated with an invoice schedule first, and find the invoice schedule that you want to pause.

    A paused invoice schedule and charges inside cannot be automatically executed by Zuora Scheduler or by the Execute invoice schedules operation. In this case, you can do one of the following:

    -   Use the Generate billing documents by account ID API operation

    -   Create a bill run with the target date greater than the next run date of the invoice schedule through UI or API
