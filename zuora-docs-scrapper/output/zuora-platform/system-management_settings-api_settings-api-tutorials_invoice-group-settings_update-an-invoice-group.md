---
title: "Update an invoice group"
url: "https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/invoice-group-settings/update-an-invoice-group"
product: "zuora-platform"
scraped_at: "2026-02-19T03:16:01.386Z"
---

# Update an invoice group

Learn how to update an existing invoice group configuration by using the Settings API.

Use this operation to change how subscription charges and order line items (OLIs) are grouped into invoices and credit memos as part of Configurable Invoice Grouping.

To update an invoice group, the ID of the specific invoice group is required as a path parameter. See the following request and a sample of a 200 response.

HTTP request:

`PUT https://rest.zuora.com/settings/invoice-groups/{id}`

Request body:

{ "name": "My Global Group", "meta": { "subscriptionGroup": \[ { "objectType": "Subscription", "field": "TransactionType\_\_c" }, { "objectType": "Subscription", "field": "SoldToContactId" }, { "objectType": "RatePlanCharge", "field": "TransactionType\_\_c" }, { "objectType": "RatePlanCharge", "field": "ChargeType" } \], "orderLineItemGroup": \[ { "objectType": "OrderLineItem", "field": "TransactionType\_\_c" }, { "objectType": "OrderLineItem", "field": "SoldTo" } \] } }

The meta object is updated atomically as a whole.

Note: Partial updates are not supported; any fields omitted from the request are removed from the invoice group configuration.

Response body:

A successful call returns 200 OK with the updated invoice group configuration, including the system-generated identifiers:

{ "id": "2c92c0f977123456017712f9e6a00001", "number": "IG-00000001", "name": "My Global Group", "meta": { "subscriptionGroup": \[ { "objectType": "Subscription", "field": "TransactionType\_\_c" }, { "objectType": "Subscription", "field": "SoldToContactId" }, { "objectType": "RatePlanCharge", "field": "TransactionType\_\_c" }, { "objectType": "RatePlanCharge", "field": "ChargeType" } \], "orderLineItemGroup": \[ { "objectType": "OrderLineItem", "field": "TransactionType\_\_c" }, { "objectType": "OrderLineItem", "field": "SoldTo" } \] } }
