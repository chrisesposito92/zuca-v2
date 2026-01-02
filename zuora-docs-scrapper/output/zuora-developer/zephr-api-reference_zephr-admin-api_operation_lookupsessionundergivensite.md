---
title: "LookupSessionUnderGivenSite"
url: "https://developer.zuora.com/zephr-api-reference/zephr-admin-api/operation/lookupSessionUnderGivenSite/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:26:55.642Z"
---

## Look up a session under a given site

This endpoint allows you to access specific session details for a particular site. By providing the unique identifiers for the site and the session, you can retrieve detailed information about that session. This information can include the session's start time, end time, current status, and any associated user data. The exact content of the response will depend on the specific session and site identifiers provided in the request.

Security**ZephrHmacHttp**

Request

##### path Parameters

| siterequired | stringThe unique site identifier within the tenant. |
| --- | --- |
| sessionIdrequired | stringUnique session identifier assigned to each session, enabling precise identification and retrieval of session-related information within the API. |

Responses

200

OK. Returns the session details.

401

Unauthorized. No valid authentication was provided.

404

No session found. The site or the session ID is invalid.

get/v4/sessions/{site}/{sessionId}

Response samples

-   200

application/json

Copy

Expand allCollapse all

`{

-   "tenantId": "company",

-   "subTenantId": "company|demo",

-   "authenticated": true,

-   "v": 0,

-   "session_variables": { },

-   "user_id": "UU0123456789ABCD",

-   "sessions": [

    -   {

        -   "tenantId": "company",

        -   "subTenantId": "company|demo",

        -   "supplied": false,

        -   "expiryDate": "2025-02-08 14:29 PM UTC",

        -   "startDate": "2024-02-08 14:29 PM UTC",

        -   "authenticated": true,

        -   "state": "authenticated",

        -   "device": "pc",

        -   "browser": "Chrome",

        -   "os": "Mac OSX",

        -   "city": "London",

        -   "geoState": "London",

        -   "deviceName": "Apple Macintosh",

        -   "country": "GB",

        -   "session_id": "26a73b7a-f7d0-48d8-85dd-a04b07313895",

        -   "user_id": "UU0123456789ABCD"


        }


    ],

-   "access_model": {

    -   "meters": {

        -   "property1": {

            -   "refreshTime": "2024-06-01 00:00:00",

            -   "meterSize": 5,

            -   "remainingCredits": 5,

            -   "contentIds": [

                -   "123456789ABCD"


                ],

            -   "contentIdTransform": "NONE"


            },

        -   "property2": {

            -   "refreshTime": "2024-06-01 00:00:00",

            -   "meterSize": 5,

            -   "remainingCredits": 5,

            -   "contentIds": [

                -   "123456789ABCD"


                ],

            -   "contentIdTransform": "NONE"


            }


        },

    -   "credits": {

        -   "property1": {

            -   "remainingCredits": 5,

            -   "contentIds": [

                -   "123456789ABCD"


                ],

            -   "contentIdTransform": "NONE"


            },

        -   "property2": {

            -   "remainingCredits": 5,

            -   "contentIds": [

                -   "123456789ABCD"


                ],

            -   "contentIdTransform": "NONE"


            }


        },

    -   "delivered_entitlements": [

        -   {

            -   "id": "0123456789ABCD",

            -   "direct": true,

            -   "meteredBy": [ ],

            -   "creditedBy": [ ]


            }


        ],

    -   "granted_bundles": [

        -   "e10a5ff3-fc63-47fb-af04-75c2ec3fdf1c"


        ],

    -   "jwt_bundles": [ ],

    -   "user_state": "registered"


    },

-   "last_updated": 1707230240685,

-   "test_groups": {

    -   "property1": "string",

    -   "property2": "string"


    },

-   "second_party_data": {

    -   "property1": "string",

    -   "property2": "string"


    }


}`
