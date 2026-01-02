---
title: "CreateGift"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/createGift/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:24:40.538Z"
---

## Create a gift

Creates a gift.

Security**ZephrHmacHttp**

Request

##### Request Body schema: application/json

| id | stringGift Id (passed as ?gift parameter in claim link) |
| --- | --- |
| created | stringUTC timestamp when gift was created |
| claimed | stringUTC timestamp when gift was claimed |
| uri | string1823.html (string) - Path portion of URL gift will allow access to |
| cross_device_session | stringID of cross-device session of claiming user (if claimed) |

Responses

200

OK

post/v3/gift

Request samples

-   Payload

application/json

Copy

`{

-   "id": "58c3852bb23f3467",

-   "created": "2018-04-27T09:15:28Z",

-   "uri": "/news/local/story"


}`
