---
title: "DeleteSession"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/deleteSession/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:20:08.724Z"
---

## Delete the session by ID

Deletes a session by ID. Returns a 404 if the specified session does not exist or does not belong to the current user.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### path Parameters

| sessionIdrequired | stringThe ID of the session to delete.Example: 0nasdj-aso25-6454 |
| --- | --- |

Responses

200

OK

404

Not Found

delete/zephr/public/sessions/v1/sessions/{sessionId}
