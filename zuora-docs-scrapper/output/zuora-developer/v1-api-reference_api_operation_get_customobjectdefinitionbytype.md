---
title: "GET CustomObjectDefinitionByType"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_CustomObjectDefinitionByType/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:16:16.396Z"
---

## Retrieve a custom object definition

Retrieves the custom object definition by type for the given tenant.

Security**bearerAuth**

Request

##### path Parameters

| objectrequired | stringSpecifies the custom object's API name as object. It is case-sensitive. |
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

404

Resource Request-URI not found.

get/objects/definitions/default/{object}

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/objects/definitions/default/{object}' \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
  \-H 'Zuora-Entity-Ids: string' \\
  \-H 'Zuora-Org-Ids: string' \\
  \-H 'Zuora-Track-Id: string' \\
  \-H 'Zuora-Version: 2019-08-24'

Response samples

-   200
-   404

application/json

Copy

Expand allCollapse all

`{

-   "CreatedById": "7b39d73f-22e6-404a-b8e7-894f7620e91c",

-   "CreatedDate": "2019-09-29T06:45:23.378Z",

-   "Id": "df7f10f9-4ec9-4389-a9eb-a6a3d549bb61",

-   "UpdatedById": "7b39d73f-22e6-404a-b8e7-894f7620e91c",

-   "UpdatedDate": "2019-09-29T06:45:23.378Z",

-   "schema": {

    -   "filterable": [

        -   "last_name__c",

        -   "email__c"


        ],

    -   "label": "Personal Profile",

    -   "object": "person",

    -   "properties": {

        -   "CreatedById": {

            -   "format": "uuid",

            -   "label": "CreatedById",

            -   "origin": "system",

            -   "type": "string"


            },

        -   "CreatedDate": {

            -   "format": "date-time",

            -   "label": "CreatedDate",

            -   "origin": "system",

            -   "type": "string"


            },

        -   "Id": {

            -   "format": "uuid",

            -   "label": "Id",

            -   "origin": "system",

            -   "type": "string"


            },

        -   "UpdatedById": {

            -   "format": "uuid",

            -   "label": "UpdatedById",

            -   "origin": "system",

            -   "type": "string"


            },

        -   "UpdatedDate": {

            -   "format": "date-time",

            -   "label": "UpdatedDate",

            -   "origin": "system",

            -   "type": "string"


            },

        -   "age__c": {

            -   "description": "Age in years",

            -   "minimum": 0,

            -   "origin": "custom",

            -   "type": "integer"


            },

        -   "email__c": {

            -   "format": "email",

            -   "maxLength": 128,

            -   "origin": "custom",

            -   "type": "string"


            },

        -   "home_address__c": {

            -   "format": "uuid",

            -   "origin": "custom",

            -   "type": "string"


            },

        -   "last_name__c": {

            -   "maxLength": 128,

            -   "origin": "custom",

            -   "type": "string"


            },

        -   "marital_status__c": {

            -   "default": "Unknown",

            -   "enum": [

                -   "Single",

                -   "Married",

                -   "Unknown"


                ],

            -   "origin": "custom",

            -   "type": "string"


            },

        -   "work_address__c": {

            -   "format": "uuid",

            -   "origin": "custom",

            -   "type": "string"


            }


        },

    -   "relationships": [

        -   {

            -   "cardinality": "manyToOne",

            -   "fields": {

                -   "home_address__c": "Id"


                },

            -   "namespace": "default",

            -   "object": "address",

            -   "recordConstraints": {

                -   "create": {

                    -   "enforceValidMapping": false


                    }


                }


            },

        -   {

            -   "cardinality": "manyToOne",

            -   "fields": {

                -   "work_address__c": "Id"


                },

            -   "namespace": "default",

            -   "object": "address",

            -   "recordConstraints": {

                -   "create": {

                    -   "enforceValidMapping": false


                    }


                }


            },

        -   {

            -   "cardinality": "oneToMany",

            -   "fields": {

                -   "Id": "person_id__c"


                },

            -   "namespace": "default",

            -   "object": "car",

            -   "recordConstraints": {

                -   "create": {

                    -   "enforceValidMapping": false


                    }


                }


            },

        -   {

            -   "cardinality": "oneToMany",

            -   "fields": {

                -   "Id": "person_id__c"


                },

            -   "namespace": "default",

            -   "object": "device",

            -   "recordConstraints": {

                -   "create": {

                    -   "enforceValidMapping": false


                    }


                }


            }


        ],

    -   "required": [

        -   "last_name__c",

        -   "marital_status__c"


        ],

    -   "type": "object"


    },

-   "type": "person"


}`
