---
title: "POST UpdateCustomObjectDefinition"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_UpdateCustomObjectDefinition/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:16:01.321Z"
---

## Update a custom object definition

Updates a custom object definition by posting migration resource to initiate the migration of definitions.

### Limitations

Updating custom field definition has the following limitations:

-   You can only have one action per update request.
-   You cannot delete fields from custom objects that contain records.
-   You can only add required fields to custom objects with no records.
-   You can change optional fields to required only on the custom objects with no records.

### Note

The bulk deletion of custom fields on standard and custom objects is temporarily unavailable as we refine the Custom Field feature.

You can still delete custom fields individually during this refinement process. If you want to delete multiple custom fields, ensure that you send each deletion request only after receiving the response for the previous request.

The bulk deletion capability will be restored once the refinement is complete.

Security**bearerAuth**

Request

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Version | string <date>API version that determines the response schema. The default version is used if this parameter is not included. Specify Zuora-Version in the request header if you expect a specific response schema. |

##### Request Body schema: application/json
required

Migration resource for object and namespace changes.

| actionsrequired | Array of objects (CustomObjectDefinitionUpdateActionRequest) = 1 itemsThe actions of updating custom object definitions, to be performed as parts of the migration. Currently only one action per migration is supported. |
| --- | --- |

Responses

200

OK

post/objects/migrations

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "actions": [

    -   {

        -   "field": {

            -   "definition": {

                -   "description": "Address zip code",

                -   "label": "Zip code",

                -   "maxLength": 10,

                -   "type": "string"


                },

            -   "name": "zip__c"


            },

        -   "namespace": "default",

        -   "object": "address",

        -   "type": "addField"


        }


    ]


}`

Response samples

-   200

application/json

Copy

Expand allCollapse all

`{

-   "actions": [

    -   {

        -   "field": {

            -   "definition": {

                -   "description": "Address zip code",

                -   "label": "Zip code",

                -   "maxLength": 10,

                -   "type": "string"


                },

            -   "name": "zip__c"


            },

        -   "namespace": "default",

        -   "object": "address",

        -   "type": "addField"


        }


    ]


}`
