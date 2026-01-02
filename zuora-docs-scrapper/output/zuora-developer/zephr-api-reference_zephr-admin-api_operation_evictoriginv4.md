---
title: "EvictOriginV4"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/evictOriginV4/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:23:03.460Z"
---

## Evict cached origin requests for a given site in V4

Evicts all of the origin cache matching the path pattern provided in the request body for a given site, evicts all paths if .\* is provided as path pattern.

Security**ZephrHmacHttp**

Request

##### path Parameters

| siterequired | stringSite Slug |
| --- | --- |

##### Request Body schema: application/json

object

Responses

200

OK. The specified origin cache has successfully been evicted.

400

Bad Request. Path to delete must be a valid regex

403

Forbidden. Not permitted for V3 tenant.

post/v4/cache-management/evict-origin/{site}

Request samples

-   Payload

application/json

Copy

`"1 line containing valid Java Regular Expression."`
