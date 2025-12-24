---
title: "Get a reusable block"
url: "https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/reusable-block-settings/get-a-reusable-block"
product: "zuora-platform"
scraped_at: "2025-12-24T05:07:49.564Z"
---

# Get a reusable block

Learn how to retrieve a reusable block by the Settings API.

To get a specific reusable block via the Settings API, the block ID or number is required as a path parameter. See the following request and a sample of the 200 response body.

HTTP request:

`GET https://rest.zuora.com/settings/reusable-blocks/{block-key}`

Response body:

{ "id": "ae4c22d09186407baa198612146f11eb", "createdBy": "8ad08c0f7f9c7144017fab88cd2e27d7", "createdOn": "2025-04-21T06:35:51.000 UTC", "updatedBy": "8ad08c0f7f9c7144017fab88cd2e27d7", "updatedOn": "2025-04-21T06:35:51.000 UTC", "active": true, "name": "Footer Block", "number": "RB-00000002", "category": "Footers", "tags": \[ "company" \], "content": "(The content of the footer block)" }
