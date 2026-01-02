---
title: "SyncDeploymentTemplate"
url: "https://developer.zuora.com/v1-api-reference/api/operation/syncDeploymentTemplate/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:19:44.620Z"
---

## Sync a deployment template with latest changes

Synchronizes an existing deployment template with the latest changes in the source tenant.

Security**bearerAuth**

Request

##### header Parameters

| Content-Typerequired | stringSpecify the content type of the request. Use multipart/form-data.Example: multipart/form-data |
| --- | --- |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |

##### Request Body schema: multipart/form-data
required

| templateIdrequired | stringThe ID of the deployment template to be synced. |
| --- | --- |
| targetTenantIdrequired | stringThe ID of the target tenant to which the template should be synced. |

Responses

200

Successfully synced the template.

400

Bad Request

401

Unauthorized

403

Forbidden

404

Not Found

post/deployment-manager/deployment\_templates/sync

Request samples

-   cURL

Copy

curl \-i \-X POST \\
  https://rest.test.zuora.com/deployment-manager/deployment\_templates/sync \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
  \-H 'Content-Type: multipart/form-data' \\
  \-H 'Zuora-Entity-Ids: string' \\
  \-H 'Zuora-Org-Ids: string' \\
  \-H 'Zuora-Track-Id: string' \\
  \-F templateId\=f7849a41-8a3b-4cd2-8ec0-c9d225d7720b \\
  \-F targetTenantId\=4d6ab8fc-4faa-4ef2-a9ec-3b90bf3f3ddf

Response samples

-   200
-   400
-   401
-   403
-   404

application/json

Copy

Expand allCollapse all

`{

-   "active": true,

-   "content": {

    -   "customFields": [

        -   {

            -   "errors": [

                -   "string"


                ],

            -   "originalPayload": { },

            -   "response": [

                -   {

                    -   "componentType": "string",

                    -   "error": "string",

                    -   "id": "string",

                    -   "key": "string",

                    -   "method": "string",

                    -   "payload": { },

                    -   "result": "string",

                    -   "segregationKey": "string",

                    -   "templateId": "string",

                    -   "url": "string"


                    }


                ],

            -   "segregationKeys": [

                -   "string"


                ]


            }


        ],

    -   "customObjects": [

        -   {

            -   "errors": [

                -   "string"


                ],

            -   "originalPayload": { },

            -   "response": [

                -   {

                    -   "componentType": "string",

                    -   "error": "string",

                    -   "id": "string",

                    -   "key": "string",

                    -   "method": "string",

                    -   "payload": { },

                    -   "result": "string",

                    -   "segregationKey": "string",

                    -   "templateId": "string",

                    -   "url": "string"


                    }


                ],

            -   "segregationKeys": [

                -   "string"


                ]


            }


        ],

    -   "dataAccessControl": [

        -   {

            -   "errors": [

                -   "string"


                ],

            -   "originalPayload": { },

            -   "response": [

                -   {

                    -   "componentType": "string",

                    -   "error": "string",

                    -   "id": "string",

                    -   "key": "string",

                    -   "method": "string",

                    -   "payload": { },

                    -   "result": "string",

                    -   "segregationKey": "string",

                    -   "templateId": "string",

                    -   "url": "string"


                    }


                ],

            -   "segregationKeys": [

                -   "string"


                ]


            }


        ],

    -   "dataQuery": [

        -   {

            -   "errors": [

                -   "string"


                ],

            -   "originalPayload": { },

            -   "response": [

                -   {

                    -   "componentType": "string",

                    -   "error": "string",

                    -   "id": "string",

                    -   "key": "string",

                    -   "method": "string",

                    -   "payload": { },

                    -   "result": "string",

                    -   "segregationKey": "string",

                    -   "templateId": "string",

                    -   "url": "string"


                    }


                ],

            -   "segregationKeys": [

                -   "string"


                ]


            }


        ],

    -   "multiOrg": [

        -   {

            -   "errors": [

                -   "string"


                ],

            -   "originalPayload": { },

            -   "response": [

                -   {

                    -   "componentType": "string",

                    -   "error": "string",

                    -   "id": "string",

                    -   "key": "string",

                    -   "method": "string",

                    -   "payload": { },

                    -   "result": "string",

                    -   "segregationKey": "string",

                    -   "templateId": "string",

                    -   "url": "string"


                    }


                ],

            -   "segregationKeys": [

                -   "string"


                ]


            }


        ],

    -   "notifications": [

        -   {

            -   "errors": [

                -   "string"


                ],

            -   "originalPayload": { },

            -   "response": [

                -   {

                    -   "componentType": "string",

                    -   "error": "string",

                    -   "id": "string",

                    -   "key": "string",

                    -   "method": "string",

                    -   "payload": { },

                    -   "result": "string",

                    -   "segregationKey": "string",

                    -   "templateId": "string",

                    -   "url": "string"


                    }


                ],

            -   "segregationKeys": [

                -   "string"


                ]


            }


        ],

    -   "organizationHierarchy": [

        -   {

            -   "errors": [

                -   "string"


                ],

            -   "originalPayload": { },

            -   "response": [

                -   {

                    -   "componentType": "string",

                    -   "error": "string",

                    -   "id": "string",

                    -   "key": "string",

                    -   "method": "string",

                    -   "payload": { },

                    -   "result": "string",

                    -   "segregationKey": "string",

                    -   "templateId": "string",

                    -   "url": "string"


                    }


                ],

            -   "segregationKeys": [

                -   "string"


                ]


            }


        ],

    -   "productCatalog": [

        -   {

            -   "errors": [

                -   "string"


                ],

            -   "originalPayload": { },

            -   "response": [

                -   {

                    -   "componentType": "string",

                    -   "error": "string",

                    -   "id": "string",

                    -   "key": "string",

                    -   "method": "string",

                    -   "payload": { },

                    -   "result": "string",

                    -   "segregationKey": "string",

                    -   "templateId": "string",

                    -   "url": "string"


                    }


                ],

            -   "segregationKeys": [

                -   "string"


                ]


            }


        ],

    -   "settings": [

        -   {

            -   "errors": [

                -   "string"


                ],

            -   "originalPayload": { },

            -   "response": [

                -   {

                    -   "componentType": "string",

                    -   "error": "string",

                    -   "id": "string",

                    -   "key": "string",

                    -   "method": "string",

                    -   "payload": { },

                    -   "result": "string",

                    -   "segregationKey": "string",

                    -   "templateId": "string",

                    -   "url": "string"


                    }


                ],

            -   "segregationKeys": [

                -   "string"


                ]


            }


        ],

    -   "workflows": [

        -   {

            -   "errors": [

                -   "string"


                ],

            -   "originalPayload": { },

            -   "response": [

                -   {

                    -   "componentType": "string",

                    -   "error": "string",

                    -   "id": "string",

                    -   "key": "string",

                    -   "method": "string",

                    -   "payload": { },

                    -   "result": "string",

                    -   "segregationKey": "string",

                    -   "templateId": "string",

                    -   "url": "string"


                    }


                ],

            -   "segregationKeys": [

                -   "string"


                ]


            }


        ]


    },

-   "createdBy": "string",

-   "createdOn": "string",

-   "description": "string",

-   "entityName": "string",

-   "environment": "string",

-   "errors": "string",

-   "id": "string",

-   "name": "string",

-   "status": "string",

-   "tenantName": "string"


}`
