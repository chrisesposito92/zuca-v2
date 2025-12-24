---
title: "Update invoice schedules through the REST API"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-tutorials/edit-invoice-schedules/update-invoice-schedules-through-the-rest-api"
product: "zuora-billing"
scraped_at: "2025-12-24T18:34:06.647Z"
---

# Update invoice schedules through the REST API

Learn how to update invoice schedules using the REST API, including modifying notes, updating orders, and managing invoice schedule items.

You can use the Update an invoice schedule operation to update invoice schedules in the following aspects:

-   Update notes and pending invoice schedule items

-   Update orders associated with invoice schedules

-   Remove or add invoice schedule items


When updating invoice schedules through the REST API, keep the following restrictions and limitations in mind:

-   For the invoice schedule items that you want to update, you must include the new values for these items in the request.

-   For the invoice schedule items that you want to keep unchanged, you must include all the existing information about these items in the request. Otherwise, the existing invoice schedule items that you do not mention in the request are deleted.

-   For the orders that you want to keep unchanged for an invoice schedule, you must include all the existing order numbers associated with the invoice schedule in the request. Otherwise, the existing orders that you do not mention in the request are removed.


To update an invoice schedule through the REST API, perform the following steps:

1.  Determine the unique ID or number of the invoice schedule that you want to update, and enter the ID or number as the value of the `scheduleKey` path parameter.
2.  Determine the information that you want to update for the invoice schedule.
3.  Use the Update an invoice schedule operation to send a request to update the invoice schedule.

    You can use the Update an invoice schedule operation to update the notes and pending invoice schedule items of an invoice schedule

    For example, if an invoice schedule has three items, and the first invoice schedule item has been processed, so its run date and amount cannot be updated. In this case, you want to update the notes of the invoice schedule and the run date and amount of the other two pending invoice schedule items. In the request body, you have to include the original run date and amount of the processed invoice schedule item, and new run date and amount of the other two pending invoice schedule items.

    The following table lists a sample API request that updates the notes and pending invoice schedule items of an invoice schedule, and the corresponding response that is returned.

    | Request sample | Response sample |
    | --- | --- |
    | { "orders": [ "O-00001339" ], "scheduleItems": [ { "id": "8a90f508837f092c0183824e3aad3797", "runDate": "2022-10-03", "amount": 500 }, { "id": "8a90f508837f092c0183824e3aad3798", "runDate": "2022-10-08", "amount": 180 }, { "id": "8a90f508837f092c0183824e3aae3799", "runDate": "2022-11-03", "amount": 120 } ], "notes": "2020 Billing Schedules - Updated" } | { "id": "599f6794cd8544649eff444bac8be8a7", "number": "IS-00000143", "notes": "2020 Billing Schedules - Updated", "status": "PartiallyProcessed", "nextRunDate": "2022-10-08", "totalAmount": 800, "actualAmount": 800, "billedAmount": 500, "unbilledAmount": 300, "scheduleItems": [ { "id": "8a90f508837f092c0183824e3aad3797", "amount": 500, "actualAmount": 500, "status": "Processed", "invoiceId": "8a90994d837f085a0183829fda615f68", "creditMemoId": null, "runDate": "2022-10-03" }, { "id": "8a90f508837f092c0183824e3aad3798", "amount": 200, "actualAmount": 200, "status": "Pending", "invoiceId": null, "creditMemoId": null, "runDate": "2022-10-08" }, { "id": "8a90f508837f092c0183824e3aae3799", "amount": 100, "actualAmount": 100, "status": "Pending", "invoiceId": null, "creditMemoId": null, "runDate": "2022-11-03" } ], "orders": [ "O-00001339" ], "specificSubscriptions": [], "success": true } |

    With the Update an invoice schedule operation, you can update the orders associated with an invoice schedule. Note that if you want to add orders, you must include all the existing orders associated with the invoice schedule and the orders that you want to add in the request.

    For example, if an invoice schedule is associated with one order, you can use the Update an invoice schedule operation to associate another one or more orders with the invoice schedule. To achieve this goal, you must include both the existing order associated with the invoice schedule and the orders that you want to add in the request.

    The following table lists a sample API request that adds one more order to an invoice schedule associated with one order, and the corresponding response that is returned.

    | Request sample | Response sample |
    | --- | --- |
    | { "orders": [ "O-00001446", "O-00001447" ], "scheduleItems": [ { "runDate": "2022-12-03", "amount": 1000 }, { "runDate": "2022-12-08", "amount": 300 }, { "runDate": "2022-12-23", "amount": 300 } ], "notes": "2022 Billing Schedules - Update Orders" } | { "id": "e717da75dae645bdb63723d364e8547d", "accountId": "8a90c1d47f07e24b017f0811c06a0b8b", "number": "IS-00000177", "notes": "2022 Billing Schedules - Update Orders", "status": "Pending", "nextRunDate": "2022-12-03", "totalAmount": 1600, "actualAmount": 1600, "billedAmount": 0, "unbilledAmount": 1600, "scheduleItems": [ { "id": "8a90f5088459f34f01845a62a33b1787", "amount": 1000, "actualAmount": 1000, "status": "Pending", "invoiceId": null, "creditMemoId": null, "runDate": "2022-12-03" }, { "id": "8a90f5088459f34f01845a62a33c1788", "amount": 300, "actualAmount": 300, "status": "Pending", "invoiceId": null, "creditMemoId": null, "runDate": "2022-12-08" }, { "id": "8a90f5088459f34f01845a62a33c1789", "amount": 300, "actualAmount": 300, "status": "Pending", "invoiceId": null, "creditMemoId": null, "runDate": "2022-12-23" } ], "orders": [ "O-00001446", "O-00001447" ], "specificSubscriptions": [], "success": true } |

    You can also use the Update an invoice schedule operation to remove existing invoice schedule items from the invoice schedule, and add more invoice schedule items to the invoice schedule.

    -   If you want to remove an invoice schedule item from an invoice schedule, include the information of all the other invoice schedule items in the request.

    -   If you want to add an invoice schedule item to an invoice schedule, include the information of all the existing invoice schedule items and a new item in the request.


    The following table lists a sample API request that removes two existing invoice schedule items from an invoice schedule and adds another two invoice schedule items, and the corresponding response that is returned. Endpoint: PUT /v1/invoice-schedules/{scheduleKey}

    | Request sample | Response sample |
    | --- | --- |
    | { "orders": [ "O-00001446", "O-00001447" ], "scheduleItems": [ { "id": "8a90f5088459f34f01845a62a33b1787", "runDate": "2022-12-03", "amount": 1000 }, { "runDate": "2022-12-08", "amount": 400 }, { "runDate": "2022-12-23", "amount": 200 } ], "notes": "2022 Billing Schedules - Update Schedule Items" } | { "id": "e717da75dae645bdb63723d364e8547d", "accountId": "8a90c1d47f07e24b017f0811c06a0b8b", "number": "IS-00000177", "notes": "2022 Billing Schedules - Update Schedule Items", "status": "Pending", "nextRunDate": "2022-12-03", "totalAmount": 1600, "actualAmount": 1600, "billedAmount": 0, "unbilledAmount": 1600, "scheduleItems": [ { "id": "8a90f5088459f34f01845a62a33b1787", "amount": 1000, "actualAmount": 1000, "status": "Pending", "invoiceId": null, "creditMemoId": null, "runDate": "2022-12-03" }, { "id": "8a90876c8459e39601845a65e9121850", "amount": 400, "actualAmount": 400, "status": "Pending", "invoiceId": null, "creditMemoId": null, "runDate": "2022-12-08" }, { "id": "8a90876c8459e39601845a65e9121851", "amount": 200, "actualAmount": 200, "status": "Pending", "invoiceId": null, "creditMemoId": null, "runDate": "2022-12-23" } ], "orders": [ "O-00001446", "O-00001447" ], "specificSubscriptions": [], "success": true } |
