---
title: "SaveExtendedProfile"
url: "https://developer.zuora.com/zephr-api-reference/zephr-public-api/operation/saveExtendedProfile/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:21:04.128Z"
---

## Save Extended Profile

Extended Profile is used to store additional user information that is not part of the core profile. This endpoint will create an Extended Profile for the App ID if one did not exist already, or overwrite an existing Extended Profile for the App ID. The body can be any valid JSON.

Security**CookieBlaizeSession** or **JwtQuery** or **JwtHeaderXBlaizeJwt** or **JwtHeaderXZephrJwt** or **JwtBearer** or **JwtCookie**

Request

##### path Parameters

| appIdrequired | stringUnique, caller-provided path parameter that represents the context under which the end user's data is stored within a tenant. This cannot start with '_restricted'. |
| --- | --- |

##### header Parameters

| cookie | stringThe session cookie.Example: `blaize_session=...` (string) |
| --- | --- |

##### Request Body schema: application/json

One of:

objectArray of strings or numbers or integers or booleans or Array of any or objects

object

Responses

200

Extended Profile is used to store additional user information that is not part of the core profile. This endpoint is designed to be used for updating the user's Extended Profile.

400

Bad Request. Returned if the appID or the provided body content is invalid.

401

Unauthorized. Returned if no valid session was provided.

put/blaize/profile/{appId}

Request samples

-   Payload

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


        }


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


}`

Response samples

-   200

application/json

Copy

`{

-   "message": "User extended profile updated"


}`
