---
title: "RetrieveAccount"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/retrieveAccount/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:21:03.668Z"
---

## Retrieve the account

Retrieves the user's core account details.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### header Parameters

| cookie | stringThe session cookie.Example: `blaize_session=...` (string) |
| --- | --- |

Responses

200

OK

401

Unauthorized

get/blaize/account

Response samples

-   200

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "identifiers": {

    -   "email_address": "joe.blow@company.com"


    },

-   "tracking_id": "123"


}`
