---
title: "Delete a reusable block"
url: "https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/reusable-block-settings/delete-a-reusable-block"
product: "zuora-platform"
scraped_at: "2025-12-24T05:07:54.564Z"
---

# Delete a reusable block

Learn how to delete a reusable block by the Settings API.

To delete a specific reusable block via the Settings API, the block ID or number is required as a path parameter. After a reusable block is deleted successfully, you will receive a 200 response with an empty response body.

HTTP request:

`DELETE https://rest.zuora.com/settings/reusable-blocks/{block-key}`

Success response code: 200 Success
