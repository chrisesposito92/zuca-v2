---
title: "DeleteAllOtherSessions"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/deleteAllOtherSessions/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:20:09.744Z"
---

## Delete all other sessions

Deletes all sessions for the current user and site apart from the session used to make the request.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### query Parameters

| except-currentrequired | boolean |
| --- | --- |

Responses

200

OK

delete/zephr/public/sessions/v1/sessions
