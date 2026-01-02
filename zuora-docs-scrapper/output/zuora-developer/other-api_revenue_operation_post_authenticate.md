---
title: "POST Authenticate"
url: "https://developer.zuora.com/other-api/revenue/operation/POST_Authenticate/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:17:19.729Z"
---

## Create authentication

Authenticates and gets the Json Web Token to push and pull data from your Zuora Revenue instance.

Request

##### header Parameters

| rolerequired | stringDefault: API Role |
| --- | --- |
| clientnamerequired | stringDefault: Default |

Responses

200

Authentication token is returned.

post/api/integration/v1/authenticate

Request samples

-   Curl

Copy

curl \-X POST \--header "role: API Role" \--header "clientname: Default" \--header "Authorization: Basic WklOR0FQSToxffN4JKaOPw==" "https://yourHost/api/integration/v1/authenticate"

Response samples

-   200

application/json; charset=utf-8

Copy

`{

-   "Message": "Token Generated",

-   "status": "success"


}`
