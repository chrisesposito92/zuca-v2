---
title: "ListAccountsV4"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/listAccountsV4/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:27:29.608Z"
---

## List accounts for v4

Retrieves a list of accounts for V4.

Security**ZephrHmacHttp**

Responses

200

OK

get/v4/accounts

Response samples

-   200

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "results": [

    -   {

        -   "company_id": "123456789ABCD",

        -   "name": "Account name",

        -   "number_of_seats": 5,

        -   "allow_oversubscription": true,

        -   "notify_when_account_oversubscribed": true,

        -   "notify_on_each_registration_when_account_is_oversubscribed": true,

        -   "registration_code": "Registration code",

        -   "on_premises_ips": "125.124.143.24",

        -   "premises_tags": "[\"gold-tier\", \"university\"]",

        -   "session_limit": 10,

        -   "session_limit_behaviour": "PREVENT_LOGIN"


        }


    ]


}`
