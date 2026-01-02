---
title: "GrantAccessRequest"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/grantAccessRequest/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:20:45.689Z"
---

## Grant the access request

The resource owner will consent or deny the third party application access request, and Zephr will return an authorization code upon user's consent.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### Request Body schema: application/json

| client_idrequired | stringZephr Site Oauth2 Client ID |
| --- | --- |
| response_typerequired | stringMust be set to code |
| redirect_urirequired | stringClient's redirection endpoint. Must be an absolute URI |
| scoperequired | stringThe scope of the access request. Supported scopes: user.account:read, user.profile:read and user.profile:update |
| staterequired | stringAn opaque value used by the client to maintain state between the request and callback |
| allowrequired | booleanResource owner consent |

Responses

200

OK. The template variable "BASICAUTH" is set as the authorization header of "$CLIENTID" and "$CLIENTSECRET". The template variable "AUTHCODE" is set to the response body "code" field.

401

Unauthorized

post/zephr/oauth2/grant

Request samples

-   Payload

application/json

Copy

`{

-   "client_id": "1234567890",

-   "response_type": "code",

-   "redirect_uri": "[https://someUrl.com/callback](https://someUrl.com/callback)",

-   "scope": "user.account:read user.profile:read",

-   "state": "abcdefghijklmnopqrstuvwsyz",

-   "allow": true


}`
