---
title: "CreateAuthorizationChallenge"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/createAuthorizationChallenge/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:21:04.608Z"
---

## Create an authorization challenge

Authorization Challenge against array of entitlement IDs.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### header Parameters

| cookie | stringThe session cookie.Example: blaize_session=5562c0cf-b07a-42d0-ac1a-c0e29735e73a;... |
| --- | --- |

##### Request Body schema: application/json

| contentIdentifier | string |
| --- | --- |
| endUserIPAddress | string |
| entitlementIds | Array of strings |
| giftToken | string |
| referrer | string |
| trustedReferrerToken | string |

Responses

200

OK

401

Unauthorized

post/blaize/authorization/challenge

Request samples

-   Payload

application/json

Copy

Expand allCollapse all

`{

-   "contentIdentifier": "string",

-   "endUserIPAddress": "string",

-   "entitlementIds": [

    -   "string"


    ],

-   "giftToken": "string",

-   "referrer": "string",

-   "trustedReferrerToken": "string"


}`

Response samples

-   200

application/json

responseresponse

Copy

`{

-   "68cc48be-e47e-4707-8958-1249d87fca86": false


}`
