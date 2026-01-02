---
title: "GetRole"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/getRole/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:22:23.378Z"
---

## Retrieve an admin user role

Retrieves an admin user role.

Security**ZephrHmacHttp**

Request

##### path Parameters

| role_idrequired | stringUnique Role identifier |
| --- | --- |

Responses

200

OK

404

Not Found

get/v3/admin/roles/{role\_id}

Response samples

-   200

application/json

responseresponse

Copy

`{

-   "role_id": "0123456789ABCD",

-   "email": "admin@company.com",

-   "role": "role..."


}`
