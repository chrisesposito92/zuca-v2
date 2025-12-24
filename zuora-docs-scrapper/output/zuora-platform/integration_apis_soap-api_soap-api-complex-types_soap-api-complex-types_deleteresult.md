---
title: "DeleteResult"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-complex-types/soap-api-complex-types/deleteresult"
product: "zuora-platform"
scraped_at: "2025-12-24T05:45:11.212Z"
---

# DeleteResult

The DeleteResult object provides the result of the delete() call.

## Field descriptions

All field names are case sensitive.

| Field | Description |
| --- | --- |
| errors[] | If the delete failed, this contains an array of Error objects. |
| id | ID of the deleted object. |
| success | A boolean field indicating the success of the delete operation. If the delete was successful, it is true . Otherwise, false . |
