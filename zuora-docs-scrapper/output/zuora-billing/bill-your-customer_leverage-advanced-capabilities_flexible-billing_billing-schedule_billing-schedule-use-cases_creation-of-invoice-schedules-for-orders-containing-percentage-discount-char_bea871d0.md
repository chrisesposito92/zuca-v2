---
title: "Create percentage-based invoice schedules for orders containing percentage discount charges through the REST API"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/creation-of-invoice-schedules-for-orders-containing-percentage-discount-charges/create-percentage-based-invoice-schedules-for-orders-containing-percentage-discount-charges-through-the-rest-api"
product: "zuora-billing"
scraped_at: "2025-12-24T18:34:57.813Z"
---

# Create percentage-based invoice schedules for orders containing percentage discount charges through the REST API

Create percentage-based invoice schedules for orders with discount charges using the REST API, ensuring automatic application of eligible discounts during milestone billing.

You can use the Create an invoice schedule operation to create percentage-based invoice schedules for professional services during milestone billing. When selecting specific professional service charges for creating an invoice schedule, you do not need to specify discount charges. The eligible discount charges are automatically applied to the regular charges in the same rate plan.

To create a percentage-based invoice schedule for orders containing percentage discount charges during milestone milling through the REST API, perform the following steps:

1.  Determine the number of each charge that you want to bill in the invoice schedule.
2.  Determine the information that you want to create for each invoice schedule item.
3.  Use the Create an invoice schedule operation to send a a creation request.

    In this use case, specific milestone dates are unclear initially, so you do not need to specify the `scheduleItems` > `runDate` field in the API request.

    For charge C-00000004, you can create an invoice schedule containing three invoice schedule items, covering 10%, 20%, and 70% of the total amount, respectively.

    The following table lists a sample API request that creates an invoice schedule for charge C-00000004, and the corresponding response that is returned.

    | Request sample | Response sample |
    | --- | --- |
    | { "accountKey":"A00000861", "orders":[ "O-00000001" ], "specificSubscriptions":[ { "orderKey":"O-00000001", "subscriptionKey":"S-00000001", "chargeNumbers":[ "C-00000004" ] } ], "scheduleItems":[ { "name":"HTD", "percentage":10 }, { "name":"RFU", "percentage":20 }, { "name":"GLD", "percentage":70 } ], "notes":"Milestone Billing for Professional Service" } | { "id": "d85e202400a644b886ec6836a99d0629", "accountId": "8a90d6128d1a167c018d1a69009600c8", "number": "IS-00000478", "notes": "2024 Billing Schedules with discount", "status": "Pending", "nextRunDate": "2023-01-01", "totalAmount": 216000.000000000, "actualAmount": 216000.000000000, "billedAmount": 0.000000000, "unbilledAmount": 216000.000000000, "scheduleItems": [ { "id": "8a90f13b8d540802018d54236ad82eb3", "amount": 2160.000000000, "actualAmount": 3200.000000000, "percentage": 10.000000000, "status": "Pending", "invoiceId": null, "creditMemoId": null, "runDate": null, "name": HTD, "targetDateForAdditionalSubscriptions": null }, { "id": "8a90f13b8d540802018d54236ad82eb4", "amount": 4320.000000000, "actualAmount": 4800.000000000, "percentage": 10.000000000, "status": "Pending", "invoiceId": null, "creditMemoId": null, "runDate": null, "name": RFU, "targetDateForAdditionalSubscriptions": null }, { "id": "8a90f13b8d540802018d54236ad82eb5", "amount": 15120.000000000, "actualAmount": 8000.000000000, "percentage": 80.000000000, "status": "Pending", "invoiceId": null, "creditMemoId": null, "runDate": null, "name": GLD, "targetDateForAdditionalSubscriptions": null } ], "orders": [ "O-00000001" ], "specificSubscriptions": [ { "orderKey": "O-00000001", "subscriptionKey": "A-S00002445", "chargeNumbers": [ "C-00000004" ] } ], "invoiceSeparately": true, "additionalSubscriptionsToBill": [], "currency": "USD", "success": true } |
