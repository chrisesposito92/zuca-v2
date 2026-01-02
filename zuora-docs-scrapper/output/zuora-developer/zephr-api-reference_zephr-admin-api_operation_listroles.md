---
title: "ListRoles"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/listRoles/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:22:23.366Z"
---

## List admin user roles

Retrieves the admin user roles by tenant.

Security**ZephrHmacHttp**

Responses

200

OK

404

Not Found

get/v3/admin/roles

Response samples

-   200

application/json

responseresponse

Copy

Expand allCollapse all

`[

-   {

    -   "role_id": "0123456789ABCD",

    -   "email": "admin@company.com",

    -   "role": "role..."


    }


]`
