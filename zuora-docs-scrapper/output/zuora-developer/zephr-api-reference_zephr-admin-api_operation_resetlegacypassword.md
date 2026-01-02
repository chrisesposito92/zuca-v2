---
title: "ResetLegacyPassword"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/resetLegacyPassword/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:26:55.914Z"
---

## Reset a legacy password

Sets the current password to an empty string, also sets the legacy password to the provided string.

Security**ZephrHmacHttp**

Request

##### path Parameters

| user_Idrequired | stringUnique User identifier |
| --- | --- |

Responses

200

OK

404

Not Found

post/v3/users/{user\_Id}/legacyPassword

Response samples

-   200

application/json

responseresponse

Copy

`{

-   "message": "Legacy Password updated successfully to be used instead of password",

-   "user_id": "{userId}",

-   "uri": "[http://localhost:8080/v3/users/{userId}/legacyPassword](http://localhost:8080/v3/users/{userId}/legacyPassword)"


}`
