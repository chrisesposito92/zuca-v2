---
title: "RefreshOrExchangeToken"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/refreshOrExchangeToken/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:25:57.363Z"
---

## Token refresh or exchange

Exchanges the OAuth2 authorization code for an access token, or refreshes an existing access token using a refresh token.

Request

##### Request Body schema: application/json

One of:

objectobject

| grant_typerequired | stringValue: "refresh_token" |
| --- | --- |
| refresh token | string |

Responses

200

OK

post/zephr/oauth2/token

Request samples

-   Payload

application/json

Refresh token requestAuthorization code requestRefresh token request

Copy

`{

-   "grant_type": "refresh_token",

-   "refresh_token": "6kuabo4gug8t9h13x7gt43cm"


}`

Response samples

-   200

application/json

oauth2-token-exchange-responseoauth2-token-refresh-responseoauth2-token-exchange-response

Copy

`{

-   "scope": "user.account:read user.profile:read user.profile:update",

-   "access_token": "oa_nj1dfhecrs1jwxi0wd0xk49n",

-   "token_type": "bearer",

-   "expires_in": 3600,

-   "refresh_token": "6kuabo4gug8t9h13x7gt43cm",

-   "user_id": "1234567890"


}`
