---
title: "PUT UpdateCatalogGroup"
url: "https://developer.zuora.com/v1-api-reference/api/operation/PUT_UpdateCatalogGroup/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:29:30.909Z"
---

## Update a catalog group

**Note**: This operation is in the Early Adopter phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. If you want to join this early adopter program, submit a request at [Zuora Global Support](http://support.zuora.com/).

Updates a catalog group by its unique number or ID.

### Notes

-   It is best practice to only specify the fields that you want to change in the request body.
-   If you specify an empty value for a field in the request body, the corresponding field in the catalog group is emptied.
-   The catalog group type cannot be changed.

Security**bearerAuth**

Request

##### path Parameters

| catalog-group-keyrequired | stringThe unique number or ID of the catalog group to be updated. |
| --- | --- |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

##### Request Body schema: application/json
required

| add | Array of objects (add)The list of product rate plans to be added to the catalog group. |
| --- | --- |
| description | stringThe description of the catalog group. |
| name | stringThe unique name of the catalog group. |
| remove | Array of objects (remove)The list of product rate plans to be removed from the catalog group. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

put/v1/catalog-groups/{catalog-group-key}

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "add": [

    -   {

        -   "grade": 3,

        -   "id": "4028e5ab7f1b600c017f1b787d5d01cf"


        },

    -   {

        -   "grade": 2,

        -   "id": "4028e5ab7f1b600c017f1b787d5d01ac"


        }


    ],

-   "description": "description",

-   "name": "name",

-   "remove": [

    -   {

        -   "id": "4028e5ab7f1b600c017f1b787d5d01cf"


        },

    -   {

        -   "id": "4028e5ab7f1b600c017f1b787d5d01ac"


        }


    ]


}`

Response samples

-   200
-   500
-   4XX

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "catalogGroupNumber": "CG-00000001",

-   "description": "some description",

-   "id": "4028e5ab7f1b600c017f1b7a5e8901d2",

-   "name": "test",

-   "productRatePlans": [

    -   {

        -   "description": null,

        -   "effectiveEndDate": "2023-02-21",

        -   "effectiveStartDate": "2022-02-21",

        -   "grade": 1,

        -   "id": "4028e5ab7f1b600c017f1b787d5d01cf",

        -   "name": "222",

        -   "status": "Active"


        }


    ],

-   "type": "Grading"


}`
