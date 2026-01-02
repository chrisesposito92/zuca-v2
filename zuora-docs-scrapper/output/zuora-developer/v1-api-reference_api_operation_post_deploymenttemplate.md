---
title: "POST DeploymentTemplate"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_DeploymentTemplate/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:19:44.680Z"
---

## Create a deployment template

Creates templates based on user preference. There are 2 ways to select components.

-   Selecting the whole component.
-   Advanced Options -> which helps user to select specific components to be migrated.

It takes the enviroment details from the logged in user automatically, while creating the template.

Security**bearerAuth**

Request

##### header Parameters

| Idempotency-Key | string <= 255 charactersSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types.With this header specified, the Zuora server can identify subsequent retries of the same request using this value, which prevents the same operation from being performed multiple times by accident. |
| --- | --- |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |

##### Request Body schema: application/json
required

CreateTemplateRequestContent JSON object which contains the details to create a template.

| content | object (SettingSourceComponentResponse)Provides details about the different components that need to be compared and deployed. |
| --- | --- |
| customFields | booleanSelected custom fields component or not. |
| customObjects | booleanSelected custom objects component or not. |
| descriptionrequired | stringCreates template description. |
| namerequired | stringName of the Template. |
| notifications | booleanSelected Notification component or not. |
| selectedComponents | Array of objects (ConfigurationTemplateContent)ConfigurationTemplateContent object contains the selected meta data information. |
| settings | booleanSelected Settings component or not. |
| templateTenantrequired | stringID of the template tenant. |
| workflows | booleanSelected Workflow component or not. |

Responses

200

Successfully created the template.

201

created. The request has been fulfilled and resulted in a new resource being created. The newly created resource can be referenced by the URL(s) returned in the entity of the response, with the most specific URL for the resource given by a Location header field.

400

Bad Request

401

Unauthorized

403

Forbidden

404

Not Found

post/deployment-manager/deployment\_templates

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

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

-   "customFields": true,

-   "customObjects": true,

-   "description": "string",

-   "name": "string",

-   "notifications": true,

-   "selectedComponents": [

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

-   "settings": true,

-   "templateTenant": "80b3f8cd-5801-4ed7-bee7-ad1569916c2f",

-   "workflows": true


}`

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

-   "reasons": [

    -   {

        -   "code": "ObjectNotFound",

        -   "message": "Configuration Templates does not exist."


        }


    ]


}`
