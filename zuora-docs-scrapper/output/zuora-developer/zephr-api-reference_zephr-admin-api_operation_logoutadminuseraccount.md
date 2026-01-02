---
title: "LogOutAdminUserAccount"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/logOutAdminUserAccount/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:22:03.813Z"
---

## Log out of the admin user account

Logs out of the admin user account.

Security**ZephrHmacHttp**

Request

##### header Parameters

| blaize-admin-session | stringe.g. (string)Example: (string) |
| --- | --- |

Responses

200

OK

post/v3/admin/logout

Response samples

-   200

application/json

responseresponse

Copy

`{

-   "message": "Session deleted"


}`
