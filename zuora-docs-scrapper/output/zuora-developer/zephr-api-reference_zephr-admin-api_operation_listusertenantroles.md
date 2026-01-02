---
title: "ListUserTenantRoles"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/listUserTenantRoles/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:22:23.838Z"
---

## List user roles by tenant

Retrieves the admin user's roles by tenant.

Security**ZephrHmacHttp**

Request

##### path Parameters

| user_idrequired | stringUnique User identifier |
| --- | --- |
| tenantrequired | stringTenant identifier |

Responses

200

OK

404

Not Found

get/v3/admin/users/{user\_id}/roles/{tenant}

Response samples

-   200

application/json

responseresponse

Copy

Expand allCollapse all

`[

-   {

    -   "email": "admin@company.com",

    -   "role": "role..."


    }


]`
