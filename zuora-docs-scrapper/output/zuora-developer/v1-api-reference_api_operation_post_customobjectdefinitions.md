---
title: "POST CustomObjectDefinitions"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_CustomObjectDefinitions/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:15:42.050Z"
---

## Create custom object definitions

You can post custom object definitions with the request body schema described below.

This operation also allows you to use the [List custom object definitions](https://developer.zuora.com/api-references/api/operation/GET_AllCustomObjectDefinitionsInNamespace) response schema as its request schema. If you want to copy all the existing custom objects from an old tenant to a new tenant, you can make a [List custom object definitions](https://developer.zuora.com/api-references/api/operation/GET_AllCustomObjectDefinitionsInNamespace) call in your old tenant and then use its response directly as the request of this operation in the new tenant to import all the custom objects from the old tenant.

The `label` field is the UI label of the custom object. The `object` field contains the API Name of the custom object.

### Limitations

This custom object definition has the following limitations:

-   The maximum number of characters for the Custom Object API Name (`object`) is 64.
-   The maximum number of characters for the Custom Object Label (`label`) is 64.
-   The maximum number of characters for the Custom Object Description 250.
-   The maximum number of custom fields in an custom object is 50.
-   The maximum number of characters for the custom field API name is 64.
-   The maximum number of characters for the custom field label (`label`) is 64.
-   The maximum number of characters for the custom field Description is 250.
-   The maximum number of picklist or multiselect options is 250.
-   The maximum length of characters for the Text field is 255.
-   The maximum length of characters for the Long Text field is from 256 to 8,192.
-   The maximum number of digits to the left of the decimal point for the Number field is 13, and to the right is 9.

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

The custom object definitions to be created

| definitions | object (customObjectDefinitions)The custom object definitions. This object maps types to custom object definitions. |
| --- | --- |

Responses

200

OK

400

Bad request

post/objects/definitions/default

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "definitions": {

    -   "Vehicle": {

        -   "label": "Vehicle",

        -   "object": "Vehicle",

        -   "properties": {

            -   "DeviceId__c": {

                -   "label": "Device ID",

                -   "type": "string",

                -   "maxLength": 20


                },

            -   "OrderId__c": {

                -   "label": "Order ID",

                -   "type": "string",

                -   "format": "uuid"


                }


            },

        -   "relationships": [

            -   {

                -   "namespace": "com_zuora",

                -   "object": "orders",

                -   "fields": {

                    -   "OrderId__c": "Id"


                    }


                }


            ]


        }


    }


}`

Response samples

-   200
-   400

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
