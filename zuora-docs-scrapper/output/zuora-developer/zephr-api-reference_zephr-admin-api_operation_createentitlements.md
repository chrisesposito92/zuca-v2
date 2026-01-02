---
title: "CreateEntitlements"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/createEntitlements/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:24:00.961Z"
---

## Create entitlements

Creates entitlements.

Security**ZephrHmacHttp**

Request

##### Request Body schema: application/json

| label | string |
| --- | --- |
| description | string |
| auto_assign | string |

Responses

201

Created

400

Bad Request

post/v3/entitlements

Request samples

-   Payload

application/json

Copy

`{

-   "label": "Test entitlement",

-   "description": "This is an entitlement",

-   "auto_assign": "none"


}`
