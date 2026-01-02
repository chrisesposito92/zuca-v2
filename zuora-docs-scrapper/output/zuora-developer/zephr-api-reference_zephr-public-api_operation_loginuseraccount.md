---
title: "LoginUserAccount"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/loginUserAccount/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:18:37.085Z"
---

## Log in to the user account

This endpoint is utilized for user authentication, granting access to secured endpoints that mandate authentication. Following successful authentication, a `blaize_session` is generated for the user, enabling them to access the secure endpoints.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### header Parameters

| cookie | stringThe session cookie is employed to ascertain whether a user is already authenticated or has an active session.Example: blaize_session=... (optional) |
| --- | --- |

##### Request Body schema: application/json

| identifiersrequired | object |
| --- | --- |
| validatorsrequired | object |

Responses

200

OK. The user has logged in successfully.

400

Bad Request. The server could not understand the request due to invalid syntax or missing required parameters.

401

Unauthorized. The user is unable to authenticate due to invalid login credentials, resulting in a lack of authentication.

post/blaize/login

Request samples

-   Payload

application/json

Copy

Expand allCollapse all

`{

-   "identifiers": {

    -   "email_address": "abc@company.com"


    },

-   "validators": {

    -   "password": "securepassword@123"


    }


}`

Response samples

-   200

application/json

Copy

`{

-   "cookie": "blaize_session=443ed68f-0b44-4f32-8443-553d584cb0dd; Expires=Fri, 16 Nov 2018 12:35:56 GMT; Path=/;",

-   "message": "Login successful",

-   "tracking_id": "4fac49a6-e423-4ac1-b0ad-d678979344422"


}`
