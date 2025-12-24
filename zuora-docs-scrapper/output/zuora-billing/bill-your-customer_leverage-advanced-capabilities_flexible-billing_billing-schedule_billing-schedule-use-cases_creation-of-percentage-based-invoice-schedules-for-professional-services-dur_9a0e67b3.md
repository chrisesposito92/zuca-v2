---
title: "Create percentage-based invoice schedules during milestone billing through the REST API"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/creation-of-percentage-based-invoice-schedules-for-professional-services-during-project-milestone-billing/create-percentage-based-invoice-schedules-during-milestone-billing-through-the-rest-api"
product: "zuora-billing"
scraped_at: "2025-12-24T18:35:07.901Z"
---

# Create percentage-based invoice schedules during milestone billing through the REST API

Learn how to create percentage-based invoice schedules for professional services during milestone billing using the REST API.

You can use the Create an invoice schedule operation to create percentage-based invoice schedules for professional services during milestone billing.

To create a percentage-based invoice schedule during milestone milling through the REST API, perform the following steps:

1.  Determine the number of each charge that you want to bill in the invoice schedule.
2.  Determine the information that you want to create for each invoice schedule item.
3.  Use the Create an invoice schedule operation to send a a creation request.

    In this use case, specific milestone dates are unclear initially, so you do not need to specify the `scheduleItems` > `runDate` field in the API request.

    A $0 schedule item is not allowed, so you can create an invoice schedule containing only two schedule items for charge C-00000003, each covering 50% of the total amount.

    The following table lists a sample API request that creates an invoice schedule for charge C-00000003, and the corresponding response that is returned.

    | Request sample | Response sample |
    | --- | --- |
    | { "accountKey": "A00000861", "orders": [ "O-00000001" ], "specificSubscriptions": [ { "orderKey": "O-00000001", "subscriptionKey": "S-00000001", "chargeNumbers": [ "C-00000003" ] } ], "scheduleItems": [ { "name": "HTD", "percentage": 50 }, { "name": "GLD", "percentage": 50 } ], "notes": "Milestone Billing for Software A Integration - Professional Service" } | { "id":"fd700c81eb85411cb156c23cd5880389", "accountId":"8a90f13b8bf9b15c018bfa08d0eb1587", "number":"IS-00000001", "notes":"Milestone Billing for Professional Service", "status":"Pending", "nextRunDate":null, "totalAmount":33000.000000000, "actualAmount":33000.000000000, "billedAmount":0.000000000, "unbilledAmount":33000.000000000, "scheduleItems":[ { "id":"8a90a04d8c158740018c164f27fe0836", "amount":16500.000000000, "actualAmount":16500.000000000, "percentage":50.000000000, "status":"Pending", "invoiceId":null, "creditMemoId":null, "runDate":null, "name":"HTD", "targetDateForAdditionalSubscriptions":null }, { "id":"8a90a04d8c158740018c164f28030837", "amount":16500.000000000, "actualAmount":16500.000000000, "percentage":50.000000000, "status":"Pending", "invoiceId":null, "creditMemoId":null, "runDate":null, "name":"GLD", "targetDateForAdditionalSubscriptions":null } ], "orders":[ "O-00000001" ], "specificSubscriptions":[ { "orderKey":"O-00000001", "subscriptionKey":"S00000001", "chargeNumbers":[ "C-00000001" ] } ], "invoiceSeparately":true, "additionalSubscriptionsToBill":[ ], "currency":"USD", "success":true } |

    For charge C-00000004, you can create an invoice schedule containing three invoice schedule items, covering 20%, 30%, and 50% of the total amount, respectively.

    The following table lists a sample API request that creates an invoice schedule for charge C-00000004, and the corresponding response that is returned.

    | Request sample | Response sample |
    | --- | --- |
    | { "accountKey": "A00000861", "orders": [ "O-00000001" ], "specificSubscriptions": [ { "orderKey": "O-00000001", "subscriptionKey": "S-00000001", "chargeNumbers": [ "C-00000004" ] } ], "scheduleItems": [ { "name": "HTD", "percentage": 20 }, { "name": "RFU", "percentage": 30 }, { "name": "GLD", "percentage": 50 } ], "notes": "Milestone Billing for Software B Implementation - Professional Service" } | { "id":"fd700c81eb85411cb156c23cd5880389", "accountId":"8a90f13b8bf9b15c018bfa08d0eb1587", "number":"IS-00000002", "notes":"Milestone Billing for Professional Service", "status":"Pending", "nextRunDate":null, "totalAmount":27000.000000000, "actualAmount":27000.000000000, "billedAmount":0.000000000, "unbilledAmount":27000.000000000, "scheduleItems":[ { "id":"8a90a04d8c158740018c164f27fe0836", "amount":5400.000000000, "actualAmount":5400.000000000, "percentage":20.000000000, "status":"Pending", "invoiceId":null, "creditMemoId":null, "runDate":null, "name":"HTD", "targetDateForAdditionalSubscriptions":null }, { "id":"8a90a04d8c158740018c164f28030837", "amount":8100.000000000, "actualAmount":8100.000000000, "percentage":30.000000000, "status":"Pending", "invoiceId":null, "creditMemoId":null, "runDate":null, "name":"RFU", "targetDateForAdditionalSubscriptions":null }, { "id":"8a90a04d8c158740018c164f28030837", "amount":13500.000000000, "actualAmount":13500.000000000, "percentage":50.000000000, "status":"Pending", "invoiceId":null, "creditMemoId":null, "runDate":null, "name":"GLD", "targetDateForAdditionalSubscriptions":null } ], "orders":[ "O-00000001" ], "specificSubscriptions":[ { "orderKey":"O-00000001", "subscriptionKey":"S00000001", "chargeNumbers":[ "C-00000001" ] } ], "invoiceSeparately":true, "additionalSubscriptionsToBill":[ ], "currency":"USD", "success":true } |
