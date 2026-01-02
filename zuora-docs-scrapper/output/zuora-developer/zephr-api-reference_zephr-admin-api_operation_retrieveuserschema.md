---
title: "RetrieveUserSchema"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/retrieveUserSchema/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:25:57.904Z"
---

## Retrieve a user schema

Retrieves a user Schema.

Security**ZephrHmacHttp**

Responses

200

OK

get/v3/schema/users

Response samples

-   200

application/json

responseresponse

Copy

Expand allCollapse all

`[

-   {

    -   "slug": "slug1",

    -   "label": "Test",

    -   "internal-description": "This is for testing",

    -   "public-description": "Please provide some info",

    -   "required": false,

    -   "decision-point": false,

    -   "validation-expression": "test",

    -   "input-type": "text",

    -   "select-options": "null",

    -   "range-start": 0,

    -   "range-end": 100,

    -   "range-step": 5


    }


]`
