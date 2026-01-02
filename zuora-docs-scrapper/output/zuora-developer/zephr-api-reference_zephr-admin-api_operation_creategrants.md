---
title: "CreateGrants"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/createGrants/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:24:39.745Z"
---

## Create a grant

Creates a user grant.

Security**ZephrHmacHttp**

Request

##### path Parameters

| userIdrequired | stringUnique User identifier |
| --- | --- |

##### Request Body schema: application/json

| entitlement_typerequired | stringAn enum describing the type of the entitlement.Enum: "bundle" "entitlement" "meter" "credits" |
| --- | --- |
| entitlement_idrequired | string |
| startTime | string |
| endTime | string |
| product_idrequired | string |

Responses

201

Created

400

Bad Request

403

Forbidden. You need one of the following privileges to access this endpoint: Identity Module, Products Module, B2B Module or Journey Module

409

The user does not exist

post/v3/users/{userId}/grants

Request samples

-   Payload

application/json

Copy

`{

-   "entitlement_type": "bundle",

-   "entitlement_id": "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",

-   "startTime": "2022-06-01 00:00:00",

-   "endTime": "2022-12-31 23:59:59",

-   "product_id": "XXXXXXXXXXXXXX"


}`
