---
title: "GetListOfUsers"
url: "https://developer.zuora.com/v1-api-reference/api/operation/getListOfUsers/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:21:40.424Z"
---

## List users

Returns a paginated list of users, 100 users per page by default. When querying larger instances, reduce the count parameter to 1,000 or less, and use the startIndex parameter to paginate through users. It's possible to return a list of specific types of users with the filter parameter. Examples:

```
/list?filter=userName eq "testuser"
  /list??filter=status eq "PENDING_ACTIVATION"
  /list??filter=id eq "91f659cd-6ded-4d92-aa5c-144c3b5455c3" and status eq "PENDING_ACTIVATION"
```

Security**bearerAuth**

Request

##### header Parameters

| Idempotency-Key | string <= 255 charactersSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types.With this header specified, the Zuora server can identify subsequent retries of the same request using this value, which prevents the same operation from being performed multiple times by accident. |
| --- | --- |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |

Responses

200

OK

401

Unauthorized

403

Forbidden

404

Not Found

get/scim/v2/Users

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  https://one.zuora.com/scim/v2/Users \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
  \-H 'Idempotency-Key: string' \\
  \-H 'Zuora-Entity-Ids: string' \\
  \-H 'Zuora-Track-Id: string'

Response samples

-   200
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

-   "totalResults": 327,

-   "resources": [

    -   {

        -   "schemas": [

            -   "urn:zuora:scim:schemas:1.0:UserExtension",

            -   "urn:ietf:params:scim:schemas:core:2.0:User"


            ],

        -   "id": "91f659cd-6ded-4d92-bd5c-144c3b5455c4",

        -   "meta": {

            -   "created": "2023-07-04T10:12:03.721Z",

            -   "resourceType": "User",

            -   "location": "[http://localhost:9900/scim/v2/Users/91f659cd-6ded-4d92-bd5c-144c3b5455c4](http://localhost:9900/scim/v2/Users/91f659cd-6ded-4d92-bd5c-144c3b5455c4)"


            },

        -   "userName": "aghosh+123",

        -   "name": {

            -   "formatted": "aghosh g",

            -   "familyName": "g",

            -   "givenName": "aghosh"


            },

        -   "displayName": "aghosh g",

        -   "preferredLanguage": "en",

        -   "locale": "en-US",

        -   "active": false,

        -   "emails": [

            -   {

                -   "value": "aghosh+123@zuora.com",

                -   "display": "aghosh+123@zuora.com",

                -   "type": "work",

                -   "primary": true


                }


            ],

        -   "roles": [

            -   {

                -   "value": "ADMIN",

                -   "display": "ADMIN"


                }


            ],

        -   "urn:zuora:scim:schemas:1.0:UserExtension": {

            -   "schemas": [

                -   "urn:zuora:scim:schemas:1.0:UserExtension"


                ],

            -   "organizationId": "ec141dc2-901e-4813-a25d-ef480cff1e26",

            -   "status": "PENDING_ACTIVATION",

            -   "ssoEnabled": false,

            -   "region": "US"


            }


        },

    -   {

        -   "schemas": [

            -   "urn:zuora:scim:schemas:1.0:UserExtension",

            -   "urn:ietf:params:scim:schemas:core:2.0:User"


            ],

        -   "id": "eb48a32d-2fe6-48d1-8a18-797919f3810a",

        -   "meta": {

            -   "created": "2023-07-13T06:15:25.836Z",

            -   "resourceType": "User",

            -   "location": "[http://localhost:9900/scim/v2/Users/eb48a32d-2fe6-48d1-8a18-797919f3810a](http://localhost:9900/scim/v2/Users/eb48a32d-2fe6-48d1-8a18-797919f3810a)"


            },

        -   "userName": "Amy+555",

        -   "name": {

            -   "formatted": "Amy Lawrence",

            -   "familyName": "Amy",

            -   "givenName": "Lawrence"


            },

        -   "displayName": "Amy Lawrence",

        -   "preferredLanguage": "en",

        -   "locale": "en-US",

        -   "active": true,

        -   "emails": [

            -   {

                -   "value": "asmurugesan+555@zuora.com",

                -   "display": "asmurugesan+555@zuora.com",

                -   "type": "work",

                -   "primary": true


                }


            ],

        -   "groups": [

            -   {

                -   "value": "7f5c248e-44e8-48d3-bacc-b5bd1253c2e4",

                -   "display": ""


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

            -   "organizationId": "rc141dc2-901e-4813-a25d-ef480cff1e26",

            -   "status": "ACTIVE",

            -   "ssoEnabled": false,

            -   "region": "EU"


            }


        }


    ],

-   "startIndex": 1,

-   "itemsPerPage": 100


}`
