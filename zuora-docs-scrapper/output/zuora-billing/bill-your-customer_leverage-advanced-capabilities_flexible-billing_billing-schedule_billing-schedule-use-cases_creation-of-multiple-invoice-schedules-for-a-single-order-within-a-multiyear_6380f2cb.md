---
title: "Create multiple invoice schedules for a single order within a multiyear contract through the REST API"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/creation-of-multiple-invoice-schedules-for-a-single-order-within-a-multiyear-contract/create-multiple-invoice-schedules-for-a-single-order-within-a-multiyear-contract-through-the-rest-api"
product: "zuora-billing"
scraped_at: "2025-12-24T18:35:14.618Z"
---

# Create multiple invoice schedules for a single order within a multiyear contract through the REST API

Create invoice schedules for multiyear orders using the REST API by determining subscription quantities and schedule item details.

You can use the Create an invoice schedule operation to create invoice schedules based on subscription-level billing attributes for multiyear orders.

To create an invoice schedule based on subscription-level billing attributes for multiyear orders through the REST API, perform the following steps:

1.  Determine the number of each subscription that you want to bill in the invoice schedule.
2.  Determine the information that you want to create for each invoice schedule item.
3.  Use the Create an invoice schedule operation to send a creation request.

    For subscriptions S-00000001 and S-00000002 sharing the same payment term, you can create an invoice schedule containing two invoice schedule items, covering different billed amounts on separate dates, respectively.

    The following table lists a sample API request that creates an invoice schedule for subscriptions S-00000001 and S-00000002, and the corresponding response that is returned.

    | Request sample | Response sample |
    | --- | --- |
    | { "accountKey": "A00000966", "orders": [ "O-00000001" ], "specificSubscriptions": [ { "orderKey": "O-00000001", "subscriptionKey": "S-00000001" }, { "orderKey": "O-00000001", "subscriptionKey": "S-00000002" } ], "scheduleItems": [ { "runDate": "2023-01-01", "amount": 1000 }, { "runDate": "2023-11-01", "amount": 1400 } ], "notes": "2023 Billing Schedule" } | { "id":"79680706e0a747c789dc8b164465a27d", "accountId":"8a90d6128bf9b142018bf9e7795b00a3", "number":"IS-00000412", "notes":"2023 Billing Schedule", "status":"Pending", "nextRunDate":"2023-01-01", "totalAmount":2400.000000000, "actualAmount":2400.000000000, "billedAmount":0.000000000, "unbilledAmount":2400.000000000, "scheduleItems":[ { "id":"8a90f13b8bf9b15c018bf9ee70ae14b4", "amount":1000.00, "actualAmount":1000.00, "percentage":null, "status":"Pending", "invoiceId":null, "creditMemoId":null, "runDate":"2023-01-01", "name":null, "targetDateForAdditionalSubscriptions":null }, { "id":"8a90f13b8bf9b15c018bf9ee70b214b5", "amount":1400.00, "actualAmount":1400.00, "percentage":null, "status":"Pending", "invoiceId":null, "creditMemoId":null, "runDate":"2023-11-01", "name":null, "targetDateForAdditionalSubscriptions":null } ], "orders":[ "O-00000001" ], "specificSubscriptions":[ { "orderKey":"O-00000001", "subscriptionKey":"S-00000001", "chargeNumbers":[ ] }, { "orderKey":"O-00000001", "subscriptionKey":"S-00000002", "chargeNumbers":[ ] } ], "invoiceSeparately":true, "additionalSubscriptionsToBill":[ ], "currency":"USD", "success":true } |

    For subscriptions S-00000003 and S-00000004 sharing the same payment term, you can create an invoice schedule containing two invoice schedule items, covering different billed amounts on separate dates, respectively.

    The following table lists a sample API request that creates an invoice schedule for subscriptions S-00000003 and S-00000004, and the corresponding response that is returned.

    | Request sample | Response sample |
    | --- | --- |
    | { "accountKey": "A00000966", "orders": [ "O-00000001" ], "specificSubscriptions": [ { "orderKey": "O-00000001", "subscriptionKey": "S-00000003" }, { "orderKey": "O-00000001", "subscriptionKey": "S-00000004" } ], "scheduleItems": [ { "runDate": "2024-01-01", "amount": 500 }, { "runDate": "2024-10-01", "amount": 1300 } ], "notes": "2024 Billing Schedules" } | { "id": "79680706e0a747c789dc8b164465a27d", "accountId": "8a90d6128bf9b142018bf9e7795b00a3", "number": "IS-00000412", "notes": "2024 Billing Schedule", "status": "Pending", "nextRunDate": "2024-01-01", "totalAmount": 1800, "actualAmount": 1800, "billedAmount": 0, "unbilledAmount": 1800, "scheduleItems": [ { "id": "8a90f13b8bf9b15c018bf9ee70ae14b4", "amount": 500, "actualAmount": 500, "percentage": null, "status": "Pending", "invoiceId": null, "creditMemoId": null, "runDate": "2024-01-01", "name": null, "targetDateForAdditionalSubscriptions": null }, { "id": "8a90f13b8bf9b15c018bf9ee70b214b5", "amount": 1300, "actualAmount": 1300, "percentage": null, "status": "Pending", "invoiceId": null, "creditMemoId": null, "runDate": "2024-10-01", "name": null, "targetDateForAdditionalSubscriptions": null } ], "orders": [ "O-00000001" ], "specificSubscriptions": [ { "orderKey": "O-00000001", "subscriptionKey": "S-00000003", "chargeNumbers": [] }, { "orderKey": "O-00000001", "subscriptionKey": "S-00000004", "chargeNumbers": [] } ], "invoiceSeparately": true, "additionalSubscriptionsToBill": [], "currency": "USD", "success": true } |
