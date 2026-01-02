---
title: "UpdateAccount"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/updateAccount/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:27:31.712Z"
---

## Update an account

Updates an account.

Security**ZephrHmacHttp**

Request

##### path Parameters

| idrequired | stringUnique Account identifier |
| --- | --- |

##### Request Body schema: application/json
required

Description

| company_id | string |
| --- | --- |
| name | string |
| number_of_seats | number |
| allow_oversubscription | boolean |
| notify_when_account_oversubscribed | boolean |
| notify_on_each_registration_when_account_is_oversubscribed | boolean |
| registration_code | string |
| on_premises_ips | stringA list of newline-separated IP addresses or CIDR blocks that identify the premises associated with this account. |
| premises_tags | string(string) A JSON array of strings of 'tags'. Tags can be used to identify and group accounts to drive behaviour in the Zephr decision engine. |
| session_limit | numberThe maximum number of concurrent sessions that users of this account can have. If unspecified, the system default value is used. If a user belongs to multiple accounts, the highest limit is used. |
| session_limit_behaviour | stringOne of "PREVENT_LOGIN" or "DELETE_OLDEST_SESSIONS". Specifies the behaviour when a user of this account exceeds the configured limit of concurrent sessions. |

Responses

201

Created

400

Bad Request

put/v3/accounts/{id}

Request samples

-   Payload

application/json

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
