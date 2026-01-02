---
title: "CreateAdminUser"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/createAdminUser/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:22:03.602Z"
---

## Create an admin user

Creates a new admin user.

Security**ZephrHmacHttp**

Request

##### Request Body schema: application/json

| identifiersrequired | object |
| --- | --- |
| validators | object |

Responses

201

Created

400

Bad Request

post/v3/admin/users

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

-   201

application/json

responseresponse

Copy

`{

-   "user_id": "b859f5dd-8184-4d01-8bf9-e3e771f68a62",

-   "message": "Admin user created successfully",

-   "uri": "[http://company.com/v3/admin/users/b859f5dd-8184-4d01-8bf9-e3e771f68a62](http://company.com/v3/admin/users/b859f5dd-8184-4d01-8bf9-e3e771f68a62)"


}`
