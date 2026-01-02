---
title: "ExportSpecificMeter"
url: "https://developer.zuora.com/v1-api-reference/api/operation/exportSpecificMeter/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:52:33.651Z"
---

## Export details of a specific meter

The Export Meter operation exports the full definition of a specific meter in Zuora Mediation, including metadata, all versions, event schemas, and operator configurations (source, processor, sink). It's useful for reviewing, backing up, or replicating meter setups across environments.

Security**bearerAuth**

Request

##### path Parameters

| meterIdrequired | stringID of the meter to export. |
| --- | --- |

##### header Parameters

| Content-Typerequired | stringDefault: application/jsonSpecify the content type of the request body. Use application/json. |
| --- | --- |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |

Responses

200

Successful response with meter export data

400

Bad Request

404

Meter not found

500

Internal Server Error

get/meters/export/{meterId}

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/meters/export/{meterId}' \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
  \-H 'Content-Type: application/json' \\
  \-H 'Zuora-Entity-Ids: string' \\
  \-H 'Zuora-Org-Ids: string' \\
  \-H 'Zuora-Track-Id: string'

Response samples

-   200
-   400
-   404
-   500

application/json

Copy

Expand allCollapse all

`{

-   "name": "string",

-   "description": "string",

-   "type": "string",

-   "typeDefinition": {

    -   "sourceType": "string",

    -   "schemaId": "string",

    -   "fieldMappings": [

        -   {

            -   "name": "string",

            -   "field": "string",

            -   "required": true,

            -   "dateFormat": "string"


            }


        ],

    -   "configs": { }


    },

-   "latestVersion": "string",

-   "versions": [

    -   {

        -   "version": "string",

        -   "versionDetail": "string",

        -   "metadata": "string",

        -   "tasks": [

            -   {

                -   "id": "string",

                -   "name": "string",

                -   "nodeType": "string",

                -   "operatorType": "string",

                -   "metadata": { },

                -   "predecessors": [

                    -   {

                        -   "id": "string"


                        }


                    ],

                -   "extraConfig": { },

                -   "setting": { }


                }


            ]


        }


    ],

-   "schemas": [

    -   {

        -   "name": "source(97)",

        -   "type": 1,

        -   "schema": {

            -   "description": "A description",

            -   "type": "object",

            -   "title": "source",

            -   "required": [

                -   "CustomerId",

                -   "UsageIdentifier",

                -   "UsageDate"


                ],

            -   "properties": {

                -   "Amount": {

                    -   "type": "number",

                    -   "description": "Amount"


                    },

                -   "Quantity": {

                    -   "type": "number",

                    -   "description": "Quantity"


                    },

                -   "UsageDate": {

                    -   "type": "string",

                    -   "description": "UsageDate"


                    },

                -   "CostCenter": {

                    -   "type": "string",

                    -   "description": "CostCenter"


                    },

                -   "CustomerId": {

                    -   "type": "string",

                    -   "description": "CustomerId"


                    },

                -   "UsageIdentifier": {

                    -   "type": "string",

                    -   "description": "UsageIdentifier"


                    }


                }


            }


        }


    ]


}`
