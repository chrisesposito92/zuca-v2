---
title: "EvictOrigin"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/evictOrigin/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:23:03.666Z"
---

## Evict cached origin requests

Evicts all cached origin requests with path matching the supplied regular expression.

Security**ZephrHmacHttp**

Request

##### Request Body schema: application/json

object

Responses

200

OK

400

Bad Request

500

Internal Server Error

post/v3/cache-management/evict-origin

Request samples

-   Payload

application/json

Copy

`"1 line containing valid Java Regular Expression."`
