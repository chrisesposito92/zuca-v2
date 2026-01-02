---
title: "GET AllCustomObjectDefinitionsInNamespace"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_AllCustomObjectDefinitionsInNamespace/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:15:42.022Z"
---

## List custom object definitions

Get all custom objects definitions for a given tenant. If you want to copy all the existing custom objects from an old tenant to a new tenant, you can call this operation in your old tenant and then use its response directly as the request of the [Create custom object definitions](https://developer.zuora.com/api-references/api/operation/POST_CustomObjectDefinitions) call in the new tenant to import all the custom objects from the old tenant.

Security**bearerAuth**

Request

##### query Parameters

| select | stringIf you set select to type, the response will only contain the type of each custom object.Value: "type" |
| --- | --- |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Version | string <date>API version that determines the response schema. The default version is used if this parameter is not included. Specify Zuora-Version in the request header if you expect a specific response schema. |

Responses

200

OK

get/objects/definitions/default

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/objects/definitions/default?select=type' \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
  \-H 'Zuora-Entity-Ids: string' \\
  \-H 'Zuora-Org-Ids: string' \\
  \-H 'Zuora-Track-Id: string' \\
  \-H 'Zuora-Version: 2019-08-24'

Response samples

-   200

application/json

Copy

Expand allCollapse all

`{

-   "Id": "f67635c8-094e-4ffc-90be-5dba5c639494",

-   "type": "Vehicle",

-   "CreatedById": "8ad084a67f9c7138017fab8a8b511b5a",

-   "UpdatedById": "8ad084a67f9c7138017fab8a8b511b5a",

-   "CreatedDate": "2024-11-15T06:13:27.338Z",

-   "UpdatedDate": "2024-11-15T06:13:27.338Z",

-   "schema": {

    -   "object": "Vehicle",

    -   "label": "Vehicle",

    -   "enableCreateRecordAuditing": false,

    -   "enableDeleteRecordAuditing": false,

    -   "properties": {

        -   "DeviceId__c": {

            -   "maxLength": 20,

            -   "label": "Device ID",

            -   "origin": "custom",

            -   "type": "string"


            },

        -   "OrderId__c": {

            -   "format": "uuid",

            -   "label": "Order ID",

            -   "origin": "custom",

            -   "type": "string"


            },

        -   "Id": {

            -   "format": "uuid",

            -   "label": "Id",

            -   "origin": "system",

            -   "type": "string"


            },

        -   "CreatedById": {

            -   "label": "CreatedById",

            -   "origin": "system",

            -   "type": "string"


            },

        -   "UpdatedById": {

            -   "label": "UpdatedById",

            -   "origin": "system",

            -   "type": "string"


            },

        -   "CreatedDate": {

            -   "format": "date-time",

            -   "label": "CreatedDate",

            -   "origin": "system",

            -   "type": "string"


            },

        -   "UpdatedDate": {

            -   "format": "date-time",

            -   "label": "UpdatedDate",

            -   "origin": "system",

            -   "type": "string"


            }


        },

    -   "required": [

        -   "Id",

        -   "CreatedById",

        -   "UpdatedById",

        -   "CreatedDate",

        -   "UpdatedDate"


        ],

    -   "filterable": [

        -   "OrderId__c",

        -   "Id",

        -   "CreatedDate",

        -   "UpdatedDate"


        ],

    -   "relationships": [

        -   {

            -   "cardinality": "manyToOne",

            -   "namespace": "com_zuora",

            -   "object": "orders",

            -   "fields": {

                -   "OrderId__c": "Id"


                },

            -   "recordConstraints": {

                -   "create": {

                    -   "enforceValidMapping": true


                    }


                }


            },

        -   {

            -   "cardinality": "manyToOne",

            -   "namespace": "com_zuora",

            -   "object": "User",

            -   "fields": {

                -   "CreatedById": "Id"


                },

            -   "recordConstraints": {

                -   "create": {

                    -   "enforceValidMapping": true


                    }


                }


            },

        -   {

            -   "cardinality": "manyToOne",

            -   "namespace": "com_zuora",

            -   "object": "User",

            -   "fields": {

                -   "UpdatedById": "Id"


                },

            -   "recordConstraints": {

                -   "create": {

                    -   "enforceValidMapping": true


                    }


                }


            }


        ],

    -   "enableRecordMigration": false


    }


}`
