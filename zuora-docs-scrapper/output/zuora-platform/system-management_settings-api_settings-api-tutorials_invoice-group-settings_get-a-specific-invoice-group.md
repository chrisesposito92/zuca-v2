---
title: "Get a specific invoice group"
url: "https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/invoice-group-settings/get-a-specific-invoice-group"
product: "zuora-platform"
scraped_at: "2026-02-20T17:36:07.906Z"
---

# Get a specific invoice group

Learn how to retrieve a specific invoice group configuration by using the Settings API.

Use this operation to view how subscription charges and order line items (OLIs) are grouped into invoices and credit memos as part of Configurable Invoice Grouping.

To get a specific invoice group, the ID of the invoice group is required as a path parameter. See the following request and a sample of a 200 response.

HTTP request:

`GET https://rest.zuora.com/settings/invoice-groups/{id}`

Response body:

{ "id": "2c92c0f977123456017712f9e6a00001", "number": "IG-00000001", "name": "My Global Group", "meta": { "subscriptionGroup": \[ { "objectType": "Subscription", "field": "TransactionType\_\_c" }, { "objectType": "Subscription", "field": "SoldToContactId" }, { "objectType": "RatePlanCharge", "field": "TransactionType\_\_c" }, { "objectType": "RatePlanCharge", "field": "ChargeType" } \], "orderLineItemGroup": \[ { "objectType": "OrderLineItem", "field": "TransactionType\_\_c" }, { "objectType": "OrderLineItem", "field": "SoldTo" } \] } }
