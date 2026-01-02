---
title: "GetAccount"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/getAccount/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:27:29.791Z"
---

## Retrieve an account

Retrieves an account.

Security**ZephrHmacHttp**

Request

##### path Parameters

| idrequired | stringUnique Account identifier |
| --- | --- |

Responses

200

OK

404

Account id not found

get/v3/accounts/{id}

Response samples

-   200

application/json

responseresponse

Copy

`{

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


}`
