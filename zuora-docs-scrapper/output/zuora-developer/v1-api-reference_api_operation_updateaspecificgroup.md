---
title: "UpdateASpecificGroup"
url: "https://developer.zuora.com/v1-api-reference/api/operation/updateASpecificGroup/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:21:09.786Z"
---

## Update a group

Updates an existing group resource, overwriting all values for a group even if an attribute is empty or not provided. PUT will replace all members of a group with those members provided via the members attribute. If an attribute that had been set previously is left blank during a PUT operation, the new value will be blank in accordance with the data type of the attribute and the storage provider.

Security**bearerAuth**

Request

##### path Parameters

| idrequired | stringThe ID of the group to update.Example: 78faa61b-4e3b-4799-9579-210fd4d80aca |
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

| schemas | Array of stringsList of schema URNs defining the structure of the request. |
| --- | --- |
| operations | Array of objects |

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

put/scim/v2/Groups/{id}

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

                -   "value": "6d1c8c54-64a4-4073-b505-d3508bd84e48"


                }


            ]


        }


    ]


}`

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

    -   "urn:ietf:params:scim:schemas:core:2.0:Group",

    -   "urn:zuora:scim:schemas:1.0:GroupExtension"


    ],

-   "id": "6cd663a3-39b6-49bf-9ec0-113381e40669",

-   "displayName": "Amy test scim",

-   "members": [

    -   {

        -   "value": "6d1c8c54-64a4-4073-b505-d3508bd84e48",

        -   "display": "assingh102@zuora.com"


        }


    ],

-   "urn:zuora:scim:schemas:1.0:GroupExtension": {

    -   "schemas": [

        -   "urn:zuora:scim:schemas:1.0:GroupExtension"


        ],

    -   "description": "",

    -   "organizationId": "ec141dc2-901e-4813-a25d-ef480cff1e26",

    -   "active": true


    },

-   "meta": {

    -   "resourceType": "Group",

    -   "location": "[http://localhost:9900/scim/v2/Groups/6cd663a3-39b6-49bf-9ec0-113381e40669/6cd663a3-39b6-49bf-9ec0-113381e40669](http://localhost:9900/scim/v2/Groups/6cd663a3-39b6-49bf-9ec0-113381e40669/6cd663a3-39b6-49bf-9ec0-113381e40669)"


    }


}`
