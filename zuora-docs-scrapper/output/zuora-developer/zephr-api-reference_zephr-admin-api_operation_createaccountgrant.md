---
title: "CreateAccountGrant"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/createAccountGrant/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:24:58.218Z"
---

## Create an account grant

Creates an account grant.

Security**ZephrHmacHttp**

Request

##### path Parameters

| accountIdrequired | stringUnique Account identifier |
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

post/v3/accounts/{accountId}/grants

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
