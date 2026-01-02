---
title: "ChangeCompletePasswordFlow"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/changeCompletePasswordFlow/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:21:22.787Z"
---

## Complete the change password flow

Complete the change password flow. This endpoint changes the password to the one submitted previously in another request. The otp in this request is used to match this request with the previous one that started the flow and submitted the new password.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### path Parameters

| otprequired | string |
| --- | --- |

Responses

200

OK

404

User not found

get/zephr/users/change-password/{otp}
