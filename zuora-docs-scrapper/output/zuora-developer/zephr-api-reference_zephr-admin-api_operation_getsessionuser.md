---
title: "GetSessionUser"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/getSessionUser/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:22:23.733Z"
---

## Retrieve an admin user by session ID

Retrieves an admin user by session ID.

Security**ZephrHmacHttp**

Request

##### path Parameters

| blaize_admin_session_idrequired | stringAdmin User Session identifier |
| --- | --- |

Responses

200

OK

404

Not Found

get/v3/admin/sessions/{blaize\_admin\_session\_id}

Response samples

-   200

application/json

responseresponse

Copy

`{

-   "user_id": "123456789ABCD"


}`
