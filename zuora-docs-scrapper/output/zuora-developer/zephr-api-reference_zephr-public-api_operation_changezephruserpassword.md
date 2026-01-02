---
title: "ChangeZephrUserPassword"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/changeZephrUserPassword/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:18:55.549Z"
---

## Change the user's password

This endpoint starts the process of changing a user's password. An active user session is required for this endpoint. This process ends with an OTP (One-time password) being sent to the user's email address.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### Request Body schema: application/json

| current_validatorsrequired | object |
| --- | --- |
| new_validatorsrequired | object |

Responses

200

OK - The process of changing the user's password was started successfully

400

Bad Request - Wrong validators have been supplied with this request

404

Not Found - User was not found

post/zephr/users/change-password

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
