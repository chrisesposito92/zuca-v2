---
title: "CreateAdminRole"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/createAdminRole/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:22:22.634Z"
---

## Create admin user roles

Creates admin user roles.

Security**ZephrHmacHttp**

Request

##### Request Body schema: application/json

| emailrequired | string |
| --- | --- |
| rolerequired | string |

Responses

201

Created

400

Bad Request

post/v3/admin/roles

Request samples

-   Payload

application/json

Copy

`{

-   "email": "admin@company.com",

-   "role": "role..."


}`

Response samples

-   201

application/json

responseresponse

Copy

`{

-   "message": "Admin role created successfully"


}`
