---
title: "UpdateRole"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/updateRole/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:22:23.950Z"
---

## Update an admin user role

Updates an admin user role by ID.

Security**ZephrHmacHttp**

Request

##### path Parameters

| role_idrequired | stringUnique Role identifier |
| --- | --- |

##### Request Body schema: application/json

| emailrequired | string |
| --- | --- |
| rolerequired | string |

Responses

200

OK

400

Bad Request

put/v3/admin/roles/{role\_id}

Request samples

-   Payload

application/json

Copy

`{

-   "email": "admin@company.com",

-   "role": "role..."


}`

Response samples

-   200

application/json

responseresponse

Copy

`{

-   "message": "Admin role updated successfully"


}`
