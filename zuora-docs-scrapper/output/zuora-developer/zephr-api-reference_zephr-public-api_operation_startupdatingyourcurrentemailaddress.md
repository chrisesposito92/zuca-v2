---
title: "StartUpdatingYourCurrentEmailAddress"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/startUpdatingYourCurrentEmailAddress/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:18:55.367Z"
---

## Start updating the current email address

Starts updating user's current email address.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### Request Body schema: application/json

| new_identifiersrequired | object |
| --- | --- |

Responses

200

OK

400

Bad Request

404

Not Found

post/blaize/users/update-email

Request samples

-   Payload

application/json

Copy

Expand allCollapse all

`{

-   "new_identifiers": {

    -   "email_address": "joe.blow@company.com"


    }


}`
