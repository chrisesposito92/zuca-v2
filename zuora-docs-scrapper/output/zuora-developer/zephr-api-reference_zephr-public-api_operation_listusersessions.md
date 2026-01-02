---
title: "ListUserSessions"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/listUserSessions/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:20:09.684Z"
---

## List all the user sessions

Lists of all sessions for the current user and site.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Responses

200

OK

401

Unauthorized

403

Forbidden

get/zephr/public/sessions/v1/sessions

Response samples

-   200

application/json

responseresponse

Copy

Expand allCollapse all

`[

-   {

    -   "id": "aba22-a5mfh-",

    -   "startDate": "2011-11-11T11:11:11.000",

    -   "deviceType": "pc",

    -   "deviceName": "Google Nexus 5",

    -   "browser": "Chrome",

    -   "os": "Android",

    -   "city": "Huston",

    -   "geoState": "Texas",

    -   "country": "USA",

    -   "isRequestingSession": true


    }


]`
