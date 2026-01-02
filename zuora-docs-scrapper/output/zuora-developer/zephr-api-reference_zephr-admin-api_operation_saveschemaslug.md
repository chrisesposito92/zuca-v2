---
title: "SaveSchemaSlug"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/saveSchemaSlug/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:26:16.706Z"
---

## Save a schema slug

Saves a schema slug.

Security**ZephrHmacHttp**

Request

##### path Parameters

| slugrequired | stringUnique identifier |
| --- | --- |

##### Request Body schema: application/json

| slug | string |
| --- | --- |
| visibility | stringValue: "PUBLIC" |
| context | string |
| label | string |
| internal-description | string |
| public-description | string |
| required | boolean |
| validation-expression | string |
| input-type | stringEnum: "text" "color" "number" "range" "time" "datetime" "date" "week" "month" "email" "tel" "url" "password" "select" "checkbox" "radio" "textarea" "hidden" |
| select-options | string |
| range-start | number |
| range-end | number |
| range-step | number |
| decision-point | boolean |
| publicly-writable | boolean |
| form-use | boolean |
| unit | string |
| unit-position | stringEnum: "leading" "trailing" |
| value-precision | number |
| stat-direction | stringEnum: "ascending" "descending" |

Responses

200

Updated

201

Created

400

Bad Request

put/v3/schema/users/{slug}

Request samples

-   Payload

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

Response samples

-   201

application/json

responseresponse

Copy

`{

-   "message": "Field added to user schema successfully",

-   "uri": "[http://host/v3/schema/users/slug](http://host/v3/schema/users/slug)"


}`
