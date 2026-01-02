---
title: "LogoutUserAccount"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/logoutUserAccount/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:18:37.027Z"
---

## Log out of the user account

Logs out of the user account.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### header Parameters

| cookie | stringThe session cookie.Example: `blaize_session=...` (string) |
| --- | --- |

##### Request Body schema: application/json

| where | stringAn enum of describing which sessions/devices to log out of.Options are JUST_HERE, THIS_DEVICE, OTHER_DEVICES, EVERYWHERE. These options are only valid when Single Sign-On is configured. When SSO is configured as autoLogin, then the default behaviour is THIS_DEVICE. When SSO is configured as optIn, then the default behaviour is JUST_HERE. JUST_HERE is not a valid option when SSO is configured as autoLogin. |
| --- | --- |

Responses

200

OK

400

Bad Request

post/blaize/logout

Request samples

-   Payload

application/json

Copy

`{

-   "where": "EVERYWHERE"


}`

Response samples

-   200

application/json

responseresponse

Copy

`{

-   "message": "Session deleted"


}`
