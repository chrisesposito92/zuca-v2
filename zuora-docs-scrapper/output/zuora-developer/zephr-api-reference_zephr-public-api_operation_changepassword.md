---
title: "ChangePassword"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/changePassword/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:18:55.557Z"
---

## Change the user password

Changes the user password.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### Request Body schema: application/json

| current_validatorsrequired | object |
| --- | --- |
| new_validatorsrequired | object |

Responses

200

OK

400

Bad Request

403

Forbidden

404

Not Found

post/blaize/users/change-password

Request samples

-   Payload

application/json

Copy

Expand allCollapse all

`{

-   "current_validators": {

    -   "password": "mysecurepassword123"


    },

-   "new_validators": {

    -   "password": "mysecurepassword123"


    }


}`
