---
title: "RequestOauth2AccessToken"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/requestOauth2AccessToken/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:21:43.037Z"
---

## Request oauth2 access token

Facilitates the acquisition of an OAuth2 access token. It requires either a basic authorization header or a client\_id provided in the request body.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### query Parameters

| client_id | stringThe Zephr site's Oauth2 client ID.Example: client_id=client_id=1234567890 |
| --- | --- |

##### header Parameters

| authorization | stringEncoded basic authorisation header that includes Zephr Site Oauth2 Client ID.Example: Authorization: Basic ZGVtbzpwQDU1dzByZA== |
| --- | --- |

Responses

200

OK

400

Bad Request

post/zephr/oauth2/token

Response samples

-   200

application/json

Copy

`{

-   "access_token": "string",

-   "token_type": "string",

-   "expires_in": 0,

-   "refresh_token": "string",

-   "user_id": "string"


}`
