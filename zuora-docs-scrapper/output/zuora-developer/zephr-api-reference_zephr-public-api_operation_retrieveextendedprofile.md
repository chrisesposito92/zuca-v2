---
title: "RetrieveExtendedProfile"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/retrieveExtendedProfile/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:21:03.695Z"
---

## Retrieve Extended Profile

Extended Profile is used to store additional user information that is not part of the core profile. This endpoint is designed to be used for retrieving the user's Extended Profile. The body can be any valid JSON.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### path Parameters

| appIdrequired | stringUnique, caller-provided path parameter that represents the context under which the end user's data is stored within a tenant. This cannot start with '_restricted'. |
| --- | --- |

##### header Parameters

| cookie | stringThe session cookie.Example: `blaize_session=...` (string) |
| --- | --- |

Responses

200

OK

400

Bad Request. Returned if the appId is invalid.

401

Unauthorized. Returned if no valid session was provided.

404

Not Found. Returned if the appId is not found.

get/blaize/profile/{appId}

Response samples

-   200

application/json

JSON ObjectJSON ArrayJSON Object

Copy

Expand allCollapse all

`{

-   "first_name": "John",

-   "last_name": "Doe",

-   "user_details": {

    -   "email_address": "john.doe@zuora.com",

    -   "employment": {

        -   "company": "Zuora",

        -   "job_title": "Software Engineer"


        },

    -   "consent_prefs": {

        -   "email": false,

        -   "sms": true


        },

    -   "interests": [

        -   "Reading",

        -   "Coding",

        -   "Hiking"


        ]


    }


}`
