---
title: "RetrieveAccountUser"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/retrieveAccountUser/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:22:02.604Z"
---

## Retrieve an account user

Retrieves an account user.

Security**ZephrHmacHttp**

Request

##### path Parameters

| account_idrequired | stringUnique Account identifier |
| --- | --- |
| user_idrequired | stringUnique User identifier |

Responses

200

OK

get/v3/accounts/{account\_id}/users/{user\_id}

Response samples

-   200

application/json

responseresponse

Copy

`{

-   "user_id": "0123456789ABCD",

-   "account_id": "0123456789ABCD"


}`
