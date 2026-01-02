---
title: "ListAccessKeys"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/listAccessKeys/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:21:55.915Z"
---

## List access keys

Retrieves a list of access keys for the admin user.

Security**ZephrHmacHttp**

Request

##### path Parameters

| user_idrequired | stringUnique User Identifier |
| --- | --- |

Responses

200

OK

404

Not Found

get/v3/admin/users/{user\_id}/keypairs

Response samples

-   200

application/json

responseresponse

Copy

Expand allCollapse all

`[

-   {

    -   "access_key": "access key..."


    }


]`
