---
title: "ListUserRoles"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/listUserRoles/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:22:21.785Z"
---

## List user roles

Retrieves the user roles an admin user is assigned.

Security**ZephrHmacHttp**

Request

##### path Parameters

| user_idrequired | stringUnique User identifier |
| --- | --- |

Responses

200

OK

404

Not Found

get/v3/admin/users/{user\_id}/roles

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
