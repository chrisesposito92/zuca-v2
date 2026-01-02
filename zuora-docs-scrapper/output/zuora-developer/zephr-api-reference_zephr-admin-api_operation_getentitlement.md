---
title: "GetEntitlement"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/getEntitlement/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:24:01.353Z"
---

## Retrieve an entitlement

Retrieves a single entitlement.

Security**ZephrHmacHttp**

Request

##### path Parameters

| idrequired | stringUnique Entitlement identifier |
| --- | --- |

Responses

200

OK

404

Not Found

get/v3/entitlements/{id}

Response samples

-   200

application/json

responseresponse

Copy

`{

-   "label": "Test entitlement",

-   "description": "This is an entitlement",

-   "auto_assign": "none"


}`
