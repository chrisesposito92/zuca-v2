---
title: "GetItem"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/getItem/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:25:58.273Z"
---

## Retrieve a static item

Retrieves a static item.

Security**ZephrHmacHttp**

Request

##### path Parameters

| idrequired | stringUnique Static Item identifier |
| --- | --- |

Responses

200

OK

get/v3/static/{id}

Response samples

-   200

application/json

responseresponse

Copy

`{

-   "id": "123456789ABCD",

-   "item": "Lorem ipsum..."


}`
