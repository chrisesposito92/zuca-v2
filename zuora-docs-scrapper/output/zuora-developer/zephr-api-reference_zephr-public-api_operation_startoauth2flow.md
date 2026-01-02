---
title: "StartOAuth2Flow"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/startOAuth2Flow/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:20:44.653Z"
---

## Start an authorization code flow

Starts OAuth2 Authorization Code Flow. The resource owner will be authenticated and be presented with the third-party application access request.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### query Parameters

| client_idrequired | stringZephr Site Oauth2 Client ID. |
| --- | --- |
| response_typerequired | stringMust be set to code. |
| redirect_urirequired | stringClient's redirection endpoint. Must be an absolute URI. |
| scoperequired | stringThe scope of the access request. |
| staterequired | stringAn opaque value used by the client to maintain state between the request and callback. |

Responses

302

Found

get/zephr/oauth2
