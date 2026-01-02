---
title: "CreateMeter"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/createMeter/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:25:18.114Z"
---

## Create a meter

Creates or updates a meter for specified `id`.

Security**ZephrHmacHttp**

Request

##### path Parameters

| idrequired | stringUnique Meter identifier |
| --- | --- |

##### Request Body schema: application/json

| label | string |
| --- | --- |
| description | string |
| unit | string |
| limit | number |
| cycle | string |
| period | string |
| timezone | string |
| auto_assign | string |

Responses

200

Created successfully

201

Updated successfully

400

Bad Request

post/v3/meters/{id}

Request samples

-   Payload

application/json

Copy

`{

-   "label": "Test meter",

-   "description": "This is a meter",

-   "unit": "views",

-   "limit": 5,

-   "cycle": "calendar",

-   "period": "monthly",

-   "timezone": "+0:00",

-   "auto_assign": "none"


}`
