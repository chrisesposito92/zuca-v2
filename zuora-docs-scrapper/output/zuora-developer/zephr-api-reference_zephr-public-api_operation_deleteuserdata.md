---
title: "DeleteUserData"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/deleteUserData/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:20:39.371Z"
---

## Delete the user data

Deletes user related data like sessions, elasticSearch data, O2Auth tokens according to the provided `user_id` in the session cookie.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### header Parameters

| Cookie | stringThe session cookie.Example: `blaize_session=...` (string) |
| --- | --- |

Responses

200

OK - User deleted successfully

500

Internal Server Error

post/blaize/forget-me

Response samples

-   200

application/json

responseresponse

Copy

`{

-   "message": "User deleted successfully"


}`
