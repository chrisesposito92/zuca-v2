---
title: "GetUser"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/getUser/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:26:16.779Z"
---

## Retrieve a user

Retrieves a user.

Security**ZephrHmacHttp**

Request

##### path Parameters

| user_idrequired | stringUnique User identifier |
| --- | --- |

Responses

200

OK

get/v3/users/{user\_id}

Response samples

-   200

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "user_id": "123456789ABCD",

-   "identifiers": {

    -   "email_address": "joe.blow@company.com"


    },

-   "attributes": {

    -   "first_name": "Joe",

    -   "surname": "Blow"


    },

-   "email_verified": true


}`
