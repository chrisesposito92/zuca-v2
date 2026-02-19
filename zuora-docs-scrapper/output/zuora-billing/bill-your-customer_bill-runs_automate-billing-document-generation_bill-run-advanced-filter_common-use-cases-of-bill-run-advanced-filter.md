---
title: "Common use cases of Bill Run Advanced Filter"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/bill-runs/automate-billing-document-generation/bill-run-advanced-filter/common-use-cases-of-bill-run-advanced-filter"
product: "zuora-billing"
scraped_at: "2026-02-19T03:14:04.512Z"
---

# Common use cases of Bill Run Advanced Filter

This topic provides detailed examples of using the Bill Run Advanced Filter for creating bill runs based on specific customer criteria, such as location, subscription type, and billing cycle day.

## Case 1: Create bill run for customers in United States using Apple Store

This case shows you how to create bill runs for customers in the United States using the Apple Store.

Use UI

![Advanced Filter Example](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/63d39dbf-87f3-40fd-b10b-346807ed8d97?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjYzZDM5ZGJmLTg3ZjMtNDBmZC1iMTBiLTM0NjgwN2VkOGQ5NyIsImV4cCI6MTc3MTU1NzIzOCwianRpIjoiMDQxYTQ2MjJjNzcyNDM5OTk2YzRmNmI1Y2E5MmI1MDUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.R2BxE9J1nrd14Q5wnE4Q1ElhHPtSE3G3SAtiHSYaR9c)

The Billing Batch field is a standard field of the Account object, and the Custom Channel field is a custom field of the Account object. Bath2 contains customer accounts in the United States, and Apple Store contains customer accounts who use the Apple Store. Because the AND operator is selected for the composite condition for the Account Filter , between the conditions or condition groups that form the composite condition, the AND logic exists. Therefore, the customer accounts that are in the United States ( Batch = Batch 2) and use the Apple Store ( Customer Channel \= Apple Store) are selected. You can then bill the customers selected by this custom filter.

Use API

Request Payload:

| Request | POST /v1/bill-runs |
| --- | --- |
| Request Body | { "batches": null, "billRunFilters": [ { "filterType": "FilterCondition", "objectType": "Account", "condition": { "relation": "and", "conditions": [ { "field": "Batch", "operator": "eq", "value": "Batch2" }, { "field": "CustomerChannel__c", "operator": "eq", "value": "Apple App Store" } ] } } ], "autoRenewal": false, "noEmailForZeroAmountInvoice": false, "autoPost": true, "autoEmail": false, "chargeTypeToExclude": [], "billCycleDay": null, "invoiceDate": "2024-11-01", "targetDate": "2024-11-01", "billRunType": "Regular", "name": "My Bill Run-1" } |

Response Payload:

| Response Body | { "id": "8ad0980c92f64cda019306c19d110c1d", "autoEmail": false, "autoPost": true, "autoRenewal": false, "billCycleDay": "AllBillCycleDays", "billRunNumber": "BR-00018084", "name": "My Bill Run-1", "invoiceDate": "2024-11-01", "noEmailForZeroAmountInvoice": false, "status": "Pending", "targetDate": "2024-11-01", "targetDateOffset": null, "invoiceDateOffset": null, "scheduledExecutionTime": null, "createdById": "2c92c0947a182890017a315d00de2c3e", "createdDate": "2024-11-07 05:12:52", "updatedById": "2c92c0947a182890017a315d00de2c3e", "updatedDate": "2024-11-07 05:12:52", "batches": [ "AllBatches" ], "chargeTypeToExclude": null, "billRunFilters": [ { "filterType": "FilterCondition", "accountId": null, "subscriptionId": null, "invoiceScheduleId": null, "invoiceScheduleItemId": null } ], "schedule": null, "invoiceDateMonthOffset": null, "invoiceDateDayOfMonth": null, "targetDateMonthOffset": null, "targetDateDayOfMonth": null, "success": true } |
| --- | --- |

Note:

The response returns the `filterType` field value as `FilterCondition` , but does not include the details of the filter.

## Case 2: Create bill run for customers in United States subscribing to professional services

The subscription type can be Professional Services or License. This case shows you how to create bill runs for customers in the United States subscribing to professional services. Therefore, professional service subscriptions and licensed subscriptions are billed separately.

Use UI

![Advanced Filter Example](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/1c7cc63a-b7ba-4b44-99c9-b6480ba8443c?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjFjN2NjNjNhLWI3YmEtNGI0NC05OWM5LWI2NDgwYmE4NDQzYyIsImV4cCI6MTc3MTU1NzIzOCwianRpIjoiOTU1ZGVmNTY2MzI5NDkyNDk2NWUwMWY1ZGQ2Yjg2YjQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.Y88MbkAmEhzyPZbUDvS5fqcY9WXTwRg3FqZemWvERWc)

The Billing Batch field is a standard field of the Account object, and the Subscription Type field is a custom field of the Subscription object. Bath2 contains customer accounts in the United States, and Professional Service contains subscriptions that provide professional service. Adding the Subscription Filter in addition to the Account Filter forms the AND logic between the composite condition defined for the Subscription Filter and the composite condition defined for the Account Filter . Therefore, all customer accounts in the United States ( Batch = Batch 2) are selected first. Then, Zuora filters all subscriptions within these accounts to include only those that provide professional services ( Subscription Type = Professional Service).

The Total Account Processed value on the bill run detail page represents the number of customer accounts in the United States. However, only subscriptions that meet the composite condition are processed to generate billing documents.

Use API

Request Payload:

| Request | POST /v1/bill-runs |
| --- | --- |
| Request Body | { "batches": null, "billRunFilters": [ { "filterType": "FilterCondition", "objectType": "Account", "condition": { "relation": "and", "conditions": [ { "field": "Batch", "operator": "eq", "value": "Batch2" } ] } }, { "filterType": "FilterCondition", "objectType": "Subscription", "condition": { "relation": "and", "conditions": [ { "field": "SubscriptionType__c", "operator": "eq", "value": "Professional Service" } ] } } ], "autoRenewal": false, "noEmailForZeroAmountInvoice": false, "autoPost": true, "autoEmail": false, "chargeTypeToExclude": [], "billCycleDay": null, "invoiceDate": "2024-11-06", "targetDate": "2024-11-06", "billRunType": "Regular", "name": "" } |

Response Payload

| Response Body | { "id": "8ad087599325755201932616ed4f027c", "autoEmail": false, "autoPost": true, "autoRenewal": false, "billCycleDay": "AllBillCycleDays", "billRunNumber": "BR-00018095", "name": "", "invoiceDate": "2024-11-06", "noEmailForZeroAmountInvoice": false, "status": "Pending", "targetDate": "2024-11-06", "targetDateOffset": null, "invoiceDateOffset": null, "scheduledExecutionTime": null, "createdById": "2c92c0947a182890017a315d00de2c3e", "createdDate": "2024-11-13 07:14:17", "updatedById": "2c92c0947a182890017a315d00de2c3e", "updatedDate": "2024-11-13 07:14:17", "batches": [ "AllBatches" ], "chargeTypeToExclude": null, "billRunFilters": [ { "filterType": "FilterCondition", "accountId": null, "subscriptionId": null, "invoiceScheduleId": null, "invoiceScheduleItemId": null }, { "filterType": "FilterCondition", "accountId": null, "subscriptionId": null, "invoiceScheduleId": null, "invoiceScheduleItemId": null } ], "schedule": null, "invoiceDateMonthOffset": null, "invoiceDateDayOfMonth": null, "targetDateMonthOffset": null, "targetDateDayOfMonth": null, "success": true } |
| --- | --- |

## Case 3: Create bill runs for accounts with BCD matching bill run days

The example shows you how to create bill runs for customer accounts whose Bill Cycle Day matches bill run days. This feature allows you to schedule a recurring bill run to execute daily, automatically selecting accounts with a Bill Cycle Day that matches the execution day of the bill run.

Use UI

![Advanced Filter Example](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/efb68bc3-ffdd-4fb8-b5e3-68f595b0340f?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImVmYjY4YmMzLWZmZGQtNGZiOC1iNWUzLTY4ZjU5NWIwMzQwZiIsImV4cCI6MTc3MTU1NzIzOCwianRpIjoiNzBlY2JiZDFhMDM2NDEzZjgxZGE0Y2MwY2IxMGViNzUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.rUuWEgBDNtR5US2b7FLsIFqz5JmMDKj1CwJiU4VSaVM)

Note:

For this case, you must use the in operator after the BillCycleDay field. The Bill Cycle Day field is a standard field of the Account object. When you click in the search box, the value Matches the bill run day is automatically displayed for your selection.

Use API

Request Payload:

| Request | POST /v1/bill-runs |
| --- | --- |
| Request Body | { "batches": null, "billRunFilters": [ { "filterType": "FilterCondition", "objectType": "Account", "condition": { "relation": "and", "conditions": [ { "field": "BillCycleDay", "operator": "in", "value": "{{ AsRunDay }}" } ] } } ], "autoRenewal": false, "noEmailForZeroAmountInvoice": false, "autoPost": true, "autoEmail": false, "chargeTypeToExclude": [], "billCycleDay": null, "invoiceDate": "2024-11-06", "targetDate": "2024-11-06", "billRunType": "Regular", "name": "" } |

Response Payload:

| Response Body | { "id": "8ad0980c93258a450193261aa8d310d2", "autoEmail": false, "autoPost": true, "autoRenewal": false, "billCycleDay": "AllBillCycleDays", "billRunNumber": "BR-00018096", "name": "", "invoiceDate": "2024-11-06", "noEmailForZeroAmountInvoice": false, "status": "Pending", "targetDate": "2024-11-06", "targetDateOffset": null, "invoiceDateOffset": null, "scheduledExecutionTime": null, "createdById": "2c92c0947a182890017a315d00de2c3e", "createdDate": "2024-11-13 07:18:21", "updatedById": "2c92c0947a182890017a315d00de2c3e", "updatedDate": "2024-11-13 07:18:21", "batches": [ "AllBatches" ], "chargeTypeToExclude": null, "billRunFilters": [ { "filterType": "FilterCondition", "accountId": null, "subscriptionId": null, "invoiceScheduleId": null, "invoiceScheduleItemId": null } ], "schedule": null, "invoiceDateMonthOffset": null, "invoiceDateDayOfMonth": null, "targetDateMonthOffset": null, "targetDateDayOfMonth": null, "success": true } |
| --- | --- |

## Case 4: Bill subscriptions matched the dynamic invoice date

The use case demos Bill subscriptions matched the dynamic invoice date.

Use API

Request Payload:

| Request | POST /v1/bill-runs |
| --- | --- |
| Request Body | { "batches": null, "billRunFilters": [ { "filterType": "FilterCondition", "objectType": "Subscription", "condition": { "relation": "and", "conditions": [ { "field": "billRunEffectiveDate__c", "operator": "lte", "value": "{{ InvoiceDate }}" } ] } } ], "autoRenewal": false, "noEmailForZeroAmountInvoice": false, "autoPost": false, "autoEmail": false, "chargeTypeToExclude": [], "billCycleDay": null, "invoiceDate": "2025-06-01", "targetDate": "2025-06-01", "name": "Bill subscriptions matched the dynamic invoice date 2025-06-01" } |

Response Payload:

| Response Body | { "id": "8a90ff929bb9d7c0019bbc7d34ec2c5f", "autoEmail": false, "autoPost": false, "autoRenewal": false, "billCycleDay": "AllBillCycleDays", "billRunNumber": "BR-00007954", "name": "Bill subscriptions matched the dynamic invoice date 2025-06-01", "invoiceDate": "2025-06-01", "noEmailForZeroAmountInvoice": false, "status": "Pending", "targetDate": "2025-06-01", "targetDateOffset": null, "invoiceDateOffset": null, "scheduledExecutionTime": null, "createdById": "e1187a1f28c8487ca6b40c40ffb10853", "createdDate": "2026-01-14 04:31:20", "updatedById": "e1187a1f28c8487ca6b40c40ffb10853", "updatedDate": "2026-01-14 04:31:20", "batches": [ "AllBatches" ], "chargeTypeToExclude": null, "billRunFilters": [ { "filterType": "FilterCondition", "accountId": null, "subscriptionId": null, "invoiceScheduleId": null, "invoiceScheduleItemId": null, "objectType": "Subscription", "condition": { "field": null, "operator": null, "value": null, "conditions": [ { "field": "billRunEffectiveDate__c", "operator": "lte", "value": "{{ InvoiceDate }}", "conditions": [], "relation": null } ], "relation": "and" } } ], "schedule": null, "invoiceDateMonthOffset": null, "invoiceDateDayOfMonth": null, "targetDateMonthOffset": null, "targetDateDayOfMonth": null, "includeSubscriptions": true, "includeOrderLineItems": true, "success": true } |
| --- | --- |
