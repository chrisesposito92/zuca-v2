---
title: "Create or update reusable blocks"
url: "https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/reusable-block-settings/create-or-update-reusable-blocks"
product: "zuora-platform"
scraped_at: "2025-12-24T05:07:44.644Z"
---

# Create or update reusable blocks

Learn how to create or update reusable blocks by the Settings API.

Reusable blocks allow you to define reusable email components, such as headers and footers.

To create or update reusable blocks via the Settings API, see the following request and response samples.

HTTP request:

`POST https://rest.zuora.com/settings/reusable-blocks`

Request parameters:

-   `allowPartialSuccess`: A boolean value that indicates whether to return a success response of 200 if only part of the instances in the `reusableBlocks` field are successfully processed.

-   `reusableBlocks`: The container of reusable blocks.

    -   `id`: The ID of the reusable block to be updated. You must provide all fields when updating reusable blocks. If `id` is not specified, a new reusable block will be created.

    -   `name`: The name of the reusable block. The value must be unique across all blocks.

    -   `number`: The number of the reusable block. The value must be unique across all blocks. If not specified, a unique number will be assigned.

    -   `category`: The category of the reusable block. Supported values are `Headers`, `Footers`, and `Other`.

    -   `tags`: An array of tag values. Tags help you quickly locate blocks when editing email templates in the UI by using the tag filter.

    -   `active`: A boolean value that indicates whether the reusable block is activated. Only active blocks can be embedded into email templates.

    -   `content`: The content of the reusable block.


Request body:

{ "allowPartialSuccess": true, "reusableBlocks": \[ { "name": "Header Block", "category": "Headers", "tags": \[ "logo" \], "active": true, "content": "(The content of the header block)" }, { "id": "ae4c22d09186407baa198612146f11eb" "name": "Footer Block", "number": "RB-00000002", "category": "Footers", "tags": \[ "company" \], "active": true, "content": "(The content of the footer block)" }, \] }

Response body:

{ "reasons": \[\] }
