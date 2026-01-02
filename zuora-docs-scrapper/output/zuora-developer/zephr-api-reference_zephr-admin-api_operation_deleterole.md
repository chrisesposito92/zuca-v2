---
title: "DeleteRole"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/deleteRole/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:22:23.796Z"
---

## Delete an admin user role

Deletes an admin user role.

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

delete/v3/admin/roles/{role\_id}

Response samples

-   200

application/json

responseresponse

Copy

`{

-   "message": "Admin role deleted successfully"


}`
