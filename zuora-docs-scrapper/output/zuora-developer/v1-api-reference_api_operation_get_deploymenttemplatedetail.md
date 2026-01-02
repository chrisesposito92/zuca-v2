---
title: "GET DeploymentTemplateDetail"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_DeploymentTemplateDetail/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:19:43.752Z"
---

## List all details of a template

Returns the detailed information of a specific template by passing its template ID.

Security**bearerAuth**

Request

##### path Parameters

| idrequired | stringThe ID of the template that needs to be retrieved. |
| --- | --- |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |

Responses

200

Successfully received the template.

400

Bad request

401

Unauthorized

403

Forbidden

404

Not Found

get/deployment-manager/deployment\_templates/{id}

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/deployment-manager/deployment\_templates/{id}' \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
  \-H 'Zuora-Entity-Ids: string' \\
  \-H 'Zuora-Org-Ids: string' \\
  \-H 'Zuora-Track-Id: string'

Response samples

-   200
-   400
-   401
-   403
-   404

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "active": true,

-   "content": {

    -   "customFields": [ ],

    -   "customObjects": [ ],

    -   "dataAccessControl": [ ],

    -   "notifications": [ ],

    -   "productCatalog": [ ],

    -   "settings": [

        -   {

            -   "errors": [ ],

            -   "originalPayload": null,

            -   "response": [

                -   {

                    -   "componentType": "Settings",

                    -   "error": null,

                    -   "id": "301e73b7-420c-4770-9c37-3d966c1e2690",

                    -   "key": "AccountingRules",

                    -   "method": "GET",

                    -   "payload": {

                        -   "allowBlankAccountingCodes": true,

                        -   "allowCreationInClosedPeriod": true,

                        -   "allowRevenueScheduleNegativeAmounts": false,

                        -   "allowUsageInClosedPeriod": false


                        },

                    -   "result": "DONE",

                    -   "segregationKey": "Finance",

                    -   "templateId": "e8ed70e9-5d31-41c3-8b20-981a5b3e9972",

                    -   "url": "/accounting-rules"


                    }


                ],

            -   "segregationKeys": [

                -   "Administration",

                -   "ManageDataAccessControl",

                -   "Finance",

                -   "Billing",

                -   "ManageMultiEntity",

                -   "Payments",

                -   "Taxation",

                -   "BillingDocumentConfiguration"


                ]


            }


        ],

    -   "workflows": [ ]


    },

-   "createdBy": "Daco user",

-   "createdOn": "2022-08-22T14:06:53.659Z",

-   "description": "",

-   "entityName": "Global",

-   "environment": "US-API-Sandbox-Staging",

-   "errors": "-",

-   "id": "e8ed70e9-5d31-41c3-8b20-981a5b3e9972",

-   "name": "Testing Tax",

-   "status": "DONE",

-   "tenantName": "Data Connect"


}`
