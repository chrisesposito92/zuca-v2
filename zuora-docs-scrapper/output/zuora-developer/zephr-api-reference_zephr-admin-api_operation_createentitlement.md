---
title: "CreateEntitlement"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/createEntitlement/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:24:01.671Z"
---

## Create an entitlement

Creates an entitlement.

Security**ZephrHmacHttp**

Request

##### path Parameters

| idrequired | stringUnique Entitlement identifier |
| --- | --- |

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

post/v3/entitlements/{id}

Request samples

-   Payload

application/json

Copy

`{

-   "label": "Test entitlement",

-   "description": "This is an entitlement",

-   "auto_assign": "none"


}`
