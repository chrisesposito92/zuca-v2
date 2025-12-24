---
title: "Get all reusable blocks"
url: "https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/reusable-block-settings/get-all-reusable-blocks"
product: "zuora-platform"
scraped_at: "2025-12-24T05:07:46.918Z"
---

# Get all reusable blocks

Learn how to retrieve all reusable blocks by the Settings API.

To get all reusable blocks via the Settings API, see the following request and a sample of the 200 response body.

HTTP request:

`GET https://rest.zuora.com/settings/reusable-blocks`

Response body:

{ "next": null, "data": \[ { "id": "ae4c22d09186407baa198612146f11eb", "createdBy": "8ad08c0f7f9c7144017fab88cd2e27d7", "createdOn": "2025-04-21T06:35:51.000 UTC", "updatedBy": "8ad08c0f7f9c7144017fab88cd2e27d7", "updatedOn": "2025-04-21T06:35:51.000 UTC", "active": true, "name": "Footer Block", "number": "RB-00000002", "category": "Footers", "tags": \[ "company" \], "content": "(The content of the footer block)" }, { "id": "2ec38a106f02494bbf1cd06d5164d9c2", "createdBy": "8ad08c0f7f9c7144017fab88cd2e27d7", "createdOn": "2025-04-21T03:51:39.000 UTC", "updatedBy": "8ad08c0f7f9c7144017fab88cd2e27d7", "updatedOn": "2025-04-21T06:36:33.000 UTC", "active": true, "name": "Header Block", "number": "RB-00000001", "category": "Headers", "tags": \[ "logo" \], "content": "(The content of the header block)" } \] }
