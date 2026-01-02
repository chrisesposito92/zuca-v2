---
title: "ListAccountUsers"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/listAccountUsers/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:21:35.418Z"
---

## List account users

Retrieves all the account users.

Security**ZephrHmacHttp**

Request

##### path Parameters

| account_idrequired | stringUnique Account identifier. |
| --- | --- |

Responses

200

OK

get/v3/accounts/{account\_id}/users

Response samples

-   200

application/json

responseresponse

Copy

Expand allCollapse all

`[

-   {

    -   "user_id": "0123456789ABCD",

    -   "account_id": "0123456789ABCD"


    }


]`
