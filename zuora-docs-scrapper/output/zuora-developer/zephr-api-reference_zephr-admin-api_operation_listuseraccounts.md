---
title: "ListUserAccounts"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/listUserAccounts/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:26:56.006Z"
---

## List user accounts

Retrieves a list of the user's accounts.

Security**ZephrHmacHttp**

Request

##### path Parameters

| user_idrequired | stringUnique User identifier |
| --- | --- |

Responses

200

OK

404

Not Found

get/v3/users/{user\_id}/accounts

Response samples

-   200

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "results": [

    -   {

        -   "user_id": "0123456789ABCD",

        -   "account_id": "0123456789ABCD"


        }


    ]


}`
