---
title: "PartiallyUpdateAspecificGroup"
url: "https://developer.zuora.com/v1-api-reference/api/operation/partiallyUpdateAspecificGroup/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:21:39.427Z"
---

## Partially update a group

Updates an existing group resource, allowing individual (or groups of) users to be added or removed from the group with a single operation. Setting the operation attribute of a member object to delete will remove members from a group; add is the default operation for PATCH.

Security**bearerAuth**

Request

##### path Parameters

| idrequired | stringThe ID of the group to partially update.Example: 78faa61b-4e3b-4799-9579-210fd4d80aca |
| --- | --- |

##### header Parameters

| Idempotency-Key | string <= 255 charactersSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types.With this header specified, the Zuora server can identify subsequent retries of the same request using this value, which prevents the same operation from being performed multiple times by accident. |
| --- | --- |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |

##### Request Body schema: application/json
required

| schemasrequired | Array of strings |
| --- | --- |
| operationsrequired | Array of objects |

Responses

200

OK

204

No Content

401

Unauthorized

403

Forbidden

patch/scim/v2/Groups/{id}

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "schemas": [

    -   "urn:ietf:params:scim:api:messages:2.0:PatchOp"


    ],

-   "operations": [

    -   {

        -   "op": "add",

        -   "path": "members",

        -   "value": [

            -   {

                -   "value": "ea27634b-38ab-4592-86e4-2d4a140ae120"


                },

            -   {

                -   "value": "e1b624ac-e00f-422b-b4da-20070901b22f"


                }


            ]


        }


    ]


}`

Response samples

-   200
-   401
-   403

application/json

Copy

Expand allCollapse all

`{

-   "schemas": [

    -   "urn:ietf:params:scim:schemas:core:2.0:Group",

    -   "urn:zuora:scim:schemas:1.0:GroupExtension"


    ],

-   "id": "0fb99576-2154-4d96-a6cb-384dd430f45f",

-   "displayName": "Amy Test",

-   "members": [

    -   {

        -   "value": "e1b624ac-e00f-422b-b4da-20070901b22f",

        -   "display": "amy+Lawrence"


        },

    -   {

        -   "value": "ea27634b-38ab-4592-86e4-2d4a140ae120",

        -   "display": "test01@zuora.com"


        }


    ],

-   "urn:zuora:scim:schemas:1.0:GroupExtension": {

    -   "schemas": [

        -   "urn:zuora:scim:schemas:1.0:GroupExtension"


        ],

    -   "description": "Amy testing group",

    -   "organizationId": "5619df2e-fa8c-47fa-9c1e-16ab5af4936e",

    -   "active": true


    },

-   "meta": {

    -   "resourceType": "Group",

    -   "location": "[http://localhost:9900/scim/v2/Groups/0fb99576-2154-4d96-a6cb-384dd430f45f/0fb99576-2154-4d96-a6cb-384dd430f45f](http://localhost:9900/scim/v2/Groups/0fb99576-2154-4d96-a6cb-384dd430f45f/0fb99576-2154-4d96-a6cb-384dd430f45f)"


    }


}`
