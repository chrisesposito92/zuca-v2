---
title: "GetMeter"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/getMeter/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:25:17.494Z"
---

## Retrieve a meter

Retrieves a single meter with specified `id`.

Security**ZephrHmacHttp**

Request

##### path Parameters

| idrequired | stringUnique Meter identifier |
| --- | --- |

Responses

200

OK

404

Not Found

get/v3/meters/{id}

Response samples

-   200

application/json

responseresponse

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
