---
title: "Update a reusable block"
url: "https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/reusable-block-settings/update-a-reusable-block"
product: "zuora-platform"
scraped_at: "2025-12-24T05:07:51.439Z"
---

# Update a reusable block

Learn how to update a reusable block by the Settings API.

To update a reusable block via the Settings API, the block ID or number is required as a path parameter. See the following request and response samples.

HTTP request:

`PUT https://rest.zuora.com/settings/reusable-blocks/{block-key}`

Request parameters:

-   `name`: The name of the reusable block. The value must be unique across all blocks.

-   `number`: The number of the reusable block. The value must be unique across all blocks. If not specified, a unique number will be assigned.

-   `category`: The category of the reusable block. Supported values are `Headers`, `Footers`, and `Other`.

-   `tags`: An array of tag values. Tags help you quickly locate blocks when editing email templates in the UI by using the tag filter.

-   `active`: A boolean value that indicates whether the reusable block is activated. Only active blocks can be embedded into email templates.

-   `content`: The content of the reusable block.


Request body:

{ "tags": \[ "company", "zuora" \] }

Response body:

{ "id": "ae4c22d09186407baa198612146f11eb", "createdBy": "8ad08c0f7f9c7144017fab88cd2e27d7", "createdOn": "2025-04-21T06:35:51.000 UTC", "updatedBy": "8ad08c0f7f9c7144017fab88cd2e27d7", "updatedOn": "2025-04-21T06:35:51.000 UTC", "active": true, "name": "Footer Block", "number": "RB-00000002", "category": "Footers", "tags": \[ "company", "zuora" \], "content": "(The content of the footer block)" }
