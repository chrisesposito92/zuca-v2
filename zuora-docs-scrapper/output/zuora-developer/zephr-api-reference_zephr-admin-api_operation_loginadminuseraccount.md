---
title: "LogInAdminUserAccount"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/logInAdminUserAccount/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:22:03.028Z"
---

## Log in to an admin user account

Logs in to an admin user account.

Security**ZephrHmacHttp**

Request

##### Request Body schema: application/json

| identifiersrequired | object |
| --- | --- |
| validatorsrequired | object |

Responses

200

OK

400

Bad Request

401

Unauthorized

post/v3/admin/login

Request samples

-   Payload

application/json

Copy

Expand allCollapse all

`{

-   "identifiers": {

    -   "email_address": "joe.blow@company.com"


    },

-   "validators": {

    -   "password": "mysecurepassword123"


    }


}`

Response samples

-   200

application/json

responseresponse

Copy

`{

-   "cookie": "blaize_admin_session=...",

-   "message": "Login successful"


}`
