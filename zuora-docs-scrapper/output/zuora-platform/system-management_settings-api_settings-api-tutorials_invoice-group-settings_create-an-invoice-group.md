---
title: "Create an invoice group"
url: "https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/invoice-group-settings/create-an-invoice-group"
product: "zuora-platform"
scraped_at: "2026-02-20T17:36:07.881Z"
---

# Create an invoice group

Learn how to create a new invoice group configuration by using the Settings API.

Use this operation as part of Configurable Invoice Grouping to define how subscription charges and order line items (OLIs) are grouped into invoices and credit memos.

To create a new invoice group, see the following request and a sample of a 200 response.

HTTP request:

`POST https://rest.zuora.com/settings/invoice-groups`

Request body:

{ "name": "My Global Group", "meta": { "subscriptionGroup": \[ { "objectType": "Subscription", "field": "Name" }, { "objectType": "RatePlanCharge", "field": "TransactionType\_\_c" } \], "orderLineItemGroup": \[ { "objectType": "OrderLineItem", "field": "ItemNumber" }, { "objectType": "OrderLineItem", "field": "TransactionType\_\_c" } \] } }

The following fields are required in the request body:

-   name

-   meta (with at least one of `subscriptionGroup` or `orderLineItemGroup` defined)


The name field must be fewer than 255 characters and can contain letters, numbers, spaces, and the following special characters: `- _ ( ) . &`.

Each entry in `subscriptionGroup` or `orderLineItemGroup` must include:

-   objectType – a supported standard object, such as `Subscription`, `RatePlanCharge`, or `OrderLineItem`

-   field – a supported standard or custom field on that object used for grouping


Response body:

A successful call returns 200 OK with the created invoice group configuration, including system-generated identifiers:

{ "id": "2c92c0f977123456017712f9e6a00001", "number": "IG-00000001", "name": "My Global Group", "meta": { "subscriptionGroup": \[ { "objectType": "Subscription", "field": "Name" }, { "objectType": "RatePlanCharge", "field": "TransactionType\_\_c" } \], "orderLineItemGroup": \[ { "objectType": "OrderLineItem", "field": "ItemNumber" }, { "objectType": "OrderLineItem", "field": "TransactionType\_\_c" } \] } }
