---
title: "GetSchemaSlug"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/getSchemaSlug/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:25:49.867Z"
---

## Retrieve a schema slug

Retrieves a schema slug.

Security**ZephrHmacHttp**

Request

##### path Parameters

| slugrequired | stringUnique identifier |
| --- | --- |

Responses

200

OK

404

Not Found

get/v3/schema/users/{slug}

Response samples

-   200

application/json

Copy

`{

-   "slug": "slug1",

-   "visibility": "PUBLIC",

-   "context": "slug1",

-   "label": "Test",

-   "internal-description": "This is for testing",

-   "public-description": "Please provide some info",

-   "required": true,

-   "validation-expression": "test",

-   "input-type": "text",

-   "select-options": "null",

-   "range-start": 0,

-   "range-end": 100,

-   "range-step": 5,

-   "decision-point": true,

-   "publicly-writable": true,

-   "form-use": true,

-   "unit": "unit",

-   "unit-position": "leading",

-   "value-precision": 0,

-   "stat-direction": "ascending"


}`
