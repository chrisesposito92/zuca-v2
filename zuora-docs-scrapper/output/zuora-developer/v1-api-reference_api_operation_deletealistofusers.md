---
title: "DeleteAListOfUsers"
url: "https://developer.zuora.com/v1-api-reference/api/operation/deleteAListOfUsers/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:22:13.379Z"
---

## Delete a list of users

Sets multiple users to deactivate. The value of the `id` should be the user's corresponding user ID.

Security**bearerAuth**

Request

##### header Parameters

| Idempotency-Key | string <= 255 charactersSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types.With this header specified, the Zuora server can identify subsequent retries of the same request using this value, which prevents the same operation from being performed multiple times by accident. |
| --- | --- |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |

##### Request Body schema: application/json
required

Array

string <uuid\>

Responses

200

OK

201

Created

401

Unauthorized

403

Forbidden

404

Not Found

post/scim/v2/Users/delete

Request samples

-   Payload
-   cURL

application/json

Copy

`[

-   "ebc229f7-aef2-44ad-8e5f-9d1cf0b4c724",

-   "bb5c5d37-0707-4aee-b4b2-c818f4b3503b"


]`

Response samples

-   200
-   201
-   401
-   403
-   404

application/json

Copy

Expand allCollapse all

`{

-   "schemas": [

    -   "urn:ietf:params:scim:api:messages:2.0:ListResponse"


    ],

-   "id": null,

-   "externalId": null,

-   "meta": null,

-   "totalResults": 2,

-   "resources": [

    -   {

        -   "schemas": [

            -   "urn:zuora:scim:schemas:1.0:UserExtension",

            -   "urn:ietf:params:scim:schemas:core:2.0:User"


            ],

        -   "id": "ebc229f7-aef2-44ad-8e5f-9d1cf0b4c724",

        -   "meta": {

            -   "created": "2024-02-19T08:23:08.488Z",

            -   "resourceType": "User",

            -   "location": "[http://localhost:9900/scim/v2/Users/delete/ebc229f7-aef2-44ad-8e5f-9d1cf0b4c724](http://localhost:9900/scim/v2/Users/delete/ebc229f7-aef2-44ad-8e5f-9d1cf0b4c724)"


            },

        -   "userName": "0392538e-caf3-4125-aa1d-82fe1f5132b3",

        -   "name": {

            -   "formatted": "Amy Lawrence",

            -   "familyName": "Amy",

            -   "givenName": "Lawrence"


            },

        -   "displayName": "Amy Lawrence",

        -   "preferredLanguage": "en",

        -   "locale": "en-US",

        -   "active": false,

        -   "emails": [

            -   {

                -   "value": "0392538e-caf3-4125-aa1d-82fe1f5132b3@zuora.com",

                -   "display": "0392538e-caf3-4125-aa1d-82fe1f5132b3@zuora.com",

                -   "type": "work",

                -   "primary": true


                }


            ],

        -   "roles": [

            -   {

                -   "value": "USER",

                -   "display": "USER"


                }


            ],

        -   "urn:zuora:scim:schemas:1.0:UserExtension": {

            -   "schemas": [

                -   "urn:zuora:scim:schemas:1.0:UserExtension"


                ],

            -   "organizationId": "5619df2e-fa8c-47fa-9c1e-16ab5af4936e",

            -   "status": "INACTIVE",

            -   "ssoEnabled": false,

            -   "region": "US"


            }


        }


    ],

-   "startIndex": 1,

-   "itemsPerPage": 2


}`
