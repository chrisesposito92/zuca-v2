---
title: "Execute invoice schedules through the REST API"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-tutorials/execute-invoice-schedules/execute-invoice-schedules-through-the-rest-api"
product: "zuora-billing"
scraped_at: "2025-12-24T18:34:14.195Z"
---

# Execute invoice schedules through the REST API

Learn how to execute invoice schedules using the REST API, with options to specify or omit the item ID.

When you use the Execute an invoice schedule operation to execute an invoice schedule item, you have the flexibility to decide whether to specify a specific item ID.

-   If you specify the unique ID of an invoice schedule item to be executed in the request, the corresponding invoice schedule item is executed.

-   If you do not specify the ID of any invoice schedule item in the request, the subscription end date is used as the target date to determine the next pending schedule item to be executed.


To execute an invoice schedule through the REST API, perform the following steps:

1.  Determine the unique ID or number of the invoice schedule where you want to execute an invoice schedule item, and enter the ID or number as the value of the `scheduleKey` path parameter.
2.  Optional: Determine the ID of the invoice schedule item that you want to execute.
3.  Use the Execute an invoice schedule operation to send a request to execute an invoice schedule item.

    The following table lists the request and response samples for executing an invoice schedule item.

    | Condition | Request sample | Response sample |
    | --- | --- | --- |
    | Specifying item ID | { "scheduleItemId": "8a90f5088459f34f01845a62a33b1787" } | { "id": "8a90876c8459e39601845a6c789e191b", "autoEmail": false, "autoPost": false, "autoRenewal": false, "billCycleDay": null, "billRunNumber": "BR-00170238", "invoiceDate": "2022-12-03", "noEmailForZeroAmountInvoice": false, "status": "Pending", "targetDate": "2022-12-03", "targetDateOffset": null, "invoiceDateOffset": null, "scheduledExecutionTime": null, "createdById": "2c92c8fb7d6be66a017d6ecf94614438", "createdDate": "2022-11-08 17:26:09", "updatedById": "2c92c8fb7d6be66a017d6ecf94614438", "updatedDate": "2022-11-08 17:26:09", "batches": null, "chargeTypeToExclude": [ "Usage" ], "billRunFilters": [ { "filterType": "InvoiceSchedule", "accountId": "8a90c1d47f07e24b017f0811c06a0b8b", "subscriptionId": null, "invoiceScheduleId": "e717da75dae645bdb63723d364e8547d", "invoiceScheduleItemId": "8a90f5088459f34f01845a62a33b1787" } ], "schedule": null, "success": true } |
    | Not specifying item ID | { } | { "id": "8a90f5088459f34f01845a6e352f1983", "autoEmail": false, "autoPost": false, "autoRenewal": false, "billCycleDay": null, "billRunNumber": "BR-00170241", "invoiceDate": "2022-12-08", "noEmailForZeroAmountInvoice": false, "status": "Pending", "targetDate": "2022-12-08", "targetDateOffset": null, "invoiceDateOffset": null, "scheduledExecutionTime": null, "createdById": "2c92c8fb7d6be66a017d6ecf94614438", "createdDate": "2022-11-08 17:28:02", "updatedById": "2c92c8fb7d6be66a017d6ecf94614438", "updatedDate": "2022-11-08 17:28:02", "batches": null, "chargeTypeToExclude": [ "Usage" ], "billRunFilters": [ { "filterType": "InvoiceSchedule", "accountId": "8a90c1d47f07e24b017f0811c06a0b8b", "subscriptionId": null, "invoiceScheduleId": "e717da75dae645bdb63723d364e8547d", "invoiceScheduleItemId": null } ], "schedule": null, "success": true } |
