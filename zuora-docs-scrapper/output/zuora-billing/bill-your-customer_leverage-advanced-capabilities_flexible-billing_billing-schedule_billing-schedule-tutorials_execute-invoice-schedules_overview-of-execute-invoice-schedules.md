---
title: "Overview of execute invoice schedules"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-tutorials/execute-invoice-schedules/overview-of-execute-invoice-schedules"
product: "zuora-billing"
scraped_at: "2025-12-24T18:34:09.202Z"
---

# Overview of execute invoice schedules

An overview of executing invoice schedules in Zuora, including automatic and manual execution options through the UI or REST API.

Note:

The Billing Schedule feature is generally available. You can enable this feature in Sandbox and Production environments with the self-serve interface. For more information, see Enable billing features by yourself.

After an invoice schedule is created, Zuora automatically generates invoices on predefined dates. However, you also have the flexibility to manually execute an invoice schedule and its schedule items to generate invoices through the Zuora UI or REST API.

You can manually execute an invoice schedule item under any of the following conditions:

-   The specified invoice date of an invoice schedule item is in the future and you want to generate an invoice in advance.

-   The specified invoice date of an invoice schedule item has passed but no invoice has been generated.


To manually execute an invoice schedule through the REST API, use the Execute an invoice schedule operation.

Note:

A paused invoice schedule and charges inside cannot be automatically executed by Zuora Scheduler or by this "Execute an invoice schedule" operation. In this case, you can do one of the following:

-   Use the Generate billing documents by account ID API operation

-   Create a bill run with the target date greater than the next run date of the invoice schedule through UI or API
