---
title: "POST CompareTemplate"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_CompareTemplate/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:19:02.473Z"
---

## Compare settings between a source tenant and a target tenant

To Compare the configurations from the template downloaded and used in deployment manager for migration which is available in source and target tenant.

Security**bearerAuth**

Request

##### query Parameters

| tenantrequired | stringCustomers need to specify tenant ID. |
| --- | --- |

##### header Parameters

| Idempotency-Key | string <= 255 charactersSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types.With this header specified, the Zuora server can identify subsequent retries of the same request using this value, which prevents the same operation from being performed multiple times by accident. |
| --- | --- |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |

##### Request Body schema: multipart/form-data

| template | string <binary>Template contains the config metadata and target tenant information. |
| --- | --- |

Responses

200

OK

201

created. The request has been fulfilled and resulted in a new resource being created. The newly created resource can be referenced by the URL(s) returned in the entity of the response, with the most specific URL for the resource given by a Location header field.

401

Unauthorized

403

Forbidden

404

Not Found

post/deployment-manager/deployment\_artifacts/compare

Request samples

-   cURL

Copy

curl \-i \-X POST \\
  'https://rest.test.zuora.com/deployment-manager/deployment\_artifacts/compare?tenant=string' \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
  \-H 'Content-Type: multipart/form-data' \\
  \-H 'Idempotency-Key: string' \\
  \-H 'Zuora-Entity-Ids: string' \\
  \-H 'Zuora-Org-Ids: string' \\
  \-H 'Zuora-Track-Id: string' \\
  \-F template\=string

Response samples

-   200
-   401
-   403
-   404

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "customFields": [

    -   {

        -   "errors": [ ],

        -   "originalPayload": {

            -   "count": 2,

            -   "definitions": {

                -   "Account": {

                    -   "schema": {

                        -   "additionalProperties": false,

                        -   "indexed": [

                            -   "Last_Token_Transaction_Date__c",

                            -   "idx_date_1__c"


                            ],

                        -   "properties": {

                            -   "CollectionsAgent__c": {

                                -   "createdDate": "2022-08-22T18:16:38.000Z",

                                -   "default": "abc",

                                -   "description": "",

                                -   "label": "Collections Agent",

                                -   "maxLength": 255,

                                -   "type": "string",

                                -   "updatedDate": "2022-08-22T18:16:38.000Z"


                                },

                            -   "InCollections__c": {

                                -   "createdDate": "2022-08-18T12:38:04.000Z",

                                -   "description": "",

                                -   "label": "<details/open/ontoggle=confirm(cookie)>",

                                -   "maxLength": 25,

                                -   "type": "string",

                                -   "updatedDate": "2022-08-18T12:38:04.000Z"


                                },

                            -   "Last_Token_Transaction_Date__c": {

                                -   "createdDate": "2022-08-22T19:30:10.000Z",

                                -   "description": "",

                                -   "label": "Last_Token_Transaction_Date",

                                -   "maxLength": 255,

                                -   "type": "string",

                                -   "updatedDate": "2022-08-22T19:30:10.000Z"


                                },

                            -   "idx_date_1__c": {

                                -   "createdDate": "2022-08-18T12:38:13.000Z",

                                -   "description": "test",

                                -   "format": "date",

                                -   "label": "idx_date_1",

                                -   "type": "string",

                                -   "updatedDate": "2022-08-18T12:38:13.000Z"


                                },

                            -   "non_idx_text_1__c": {

                                -   "createdDate": "2022-08-18T12:38:14.000Z",

                                -   "default": "non_idx_text_1",

                                -   "description": "non_idx_text_1",

                                -   "label": "non_idx_text_1",

                                -   "maxLength": 50,

                                -   "type": "string",

                                -   "updatedDate": "2022-08-18T12:38:14.000Z"


                                }


                            },

                        -   "readOnlyOnUI": [

                            -   "idx_date_1__c",

                            -   "non_idx_text_1__c"


                            ],

                        -   "type": "object"


                        },

                    -   "type": "Account"


                    },

                -   "AccountingCode": {

                    -   "schema": {

                        -   "additionalProperties": false,

                        -   "properties": {

                            -   "AccountingCodeCustomDate__c": {

                                -   "createdDate": "2022-02-08T07:20:15.000Z",

                                -   "format": "date",

                                -   "label": "AccountingCodeCustomDate",

                                -   "type": "string",

                                -   "updatedDate": "2022-02-08T07:20:15.000Z"


                                },

                            -   "AccountingCodeCustomPickList__c": {

                                -   "createdDate": "2022-02-08T07:20:18.000Z",

                                -   "default": "Alpha",

                                -   "enum": [

                                    -   "Alpha",

                                    -   "Beta",

                                    -   "Omega"


                                    ],

                                -   "label": "AccountingCodeCustomPickList",

                                -   "type": "string",

                                -   "updatedDate": "2022-02-08T07:20:18.000Z"


                                },

                            -   "AccountingCodeCustomText__c": {

                                -   "createdDate": "2022-02-01T08:41:03.000Z",

                                -   "default": "custom text",

                                -   "label": "AccountingCodeCustomText",

                                -   "maxLength": 64,

                                -   "type": "string",

                                -   "updatedDate": "2022-02-01T08:41:03.000Z"


                                }


                            },

                        -   "type": "object"


                        },

                    -   "type": "AccountingCode"


                    }


                }


            },

        -   "response": [

            -   {

                -   "componentType": "CustomFields",

                -   "error": "-",

                -   "id": "a8a0ff9f-3297-45a5-a523-4f5d5f4f393a",

                -   "key": "idx_date_1",

                -   "method": "GET",

                -   "payload": {

                    -   "API_name": "idx_date_1__c",

                    -   "UIReadOnly": true,

                    -   "description": "test",

                    -   "format": "date",

                    -   "indexed": true,

                    -   "label": "idx_date_1"


                    },

                -   "result": "DONE",

                -   "segregationKey": "Account",

                -   "templateId": null,

                -   "url": "-"


                }


            ],

        -   "segregationKeys": [

            -   "Account",

            -   "Invoice",

            -   "InvoiceItem",

            -   "AccountingCode",

            -   "ProductRatePlanCharge",

            -   "ProductFeature",

            -   "Product",

            -   "JournalEntry",

            -   "RatePlan",

            -   "Amendment",

            -   "DebitTaxationItem",

            -   "Subscription",

            -   "Order",

            -   "Usage",

            -   "ProductRatePlan",

            -   "AccountingPeriod",

            -   "CreditMemoItem",

            -   "RevenueSchedule",

            -   "RatePlanCharge",

            -   "Contact",

            -   "OrderAction",

            -   "Payment",

            -   "CreditBalanceAdjustment",

            -   "Refund",

            -   "DebitMemo"


            ]


        }


    ],

-   "customObjects": [

    -   {

        -   "errors": [ ],

        -   "originalPayload": { },

        -   "response": [

            -   {

                -   "componentType": "CustomObjects",

                -   "error": "-",

                -   "id": "456335f2-711d-4e73-b8ec-3309e78b403a",

                -   "key": "zzzzzzzzzz",

                -   "method": "GET",

                -   "payload": {

                    -   "api_name": "zzzzzzzzzz",

                    -   "customFields": [

                        -   {

                            -   "api_name": "isFilterable__c",

                            -   "description": " ",

                            -   "field_name": "isFilterable",

                            -   "filterable": "true",

                            -   "required": "false",

                            -   "type": "boolean"


                            },

                        -   {

                            -   "api_name": "picklist__c",

                            -   "description": " ",

                            -   "field_name": "picklist",

                            -   "filterable": "false",

                            -   "required": "false",

                            -   "type": "string"


                            },

                        -   {

                            -   "api_name": "zzz__c",

                            -   "description": " ",

                            -   "field_name": "zzz",

                            -   "filterable": "false",

                            -   "required": "false",

                            -   "type": "string"


                            }


                        ],

                    -   "description": " ",

                    -   "enableRecordMigration": "false",

                    -   "label": "zzzzzzzzzz"


                    },

                -   "result": "DONE",

                -   "segregationKey": "Available Custom Objects",

                -   "templateId": null,

                -   "url": "/zzzzzzzzzz"


                }


            ],

        -   "segregationKeys": [

            -   "Available Custom Objects"


            ]


        }


    ],

-   "dataAccessControl": [

    -   {

        -   "errors": [ ],

        -   "originalPayload": { },

        -   "response": [

            -   {

                -   "componentType": "dataAccessControl",

                -   "error": "-",

                -   "id": "456335f2-711d-4e73-b8ec-3309e78b403a",

                -   "key": "zzzzzzzzzz",

                -   "method": "GET",

                -   "payload": { },

                -   "result": "DONE",

                -   "segregationKey": "Available dataAccessControl",

                -   "templateId": null,

                -   "url": "/zzzzzzzzzz"


                }


            ],

        -   "segregationKeys": [

            -   "Available dataAccessControl"


            ]


        }


    ],

-   "notifications": [

    -   {

        -   "errors": [ ],

        -   "originalPayload": {

            -   "2c92c8fb7ddc795b017dde4350c949a0": [

                -   {

                    -   "active": false,

                    -   "calloutAuth": false,

                    -   "calloutOauth2": false,

                    -   "calloutOption": false,

                    -   "calloutPreemptiveAuth": false,

                    -   "calloutRetriable": false,

                    -   "contentType": "APPLICATION_JSON",

                    -   "description": "Trigger the notification when invoices are posted within a bill run and the bill run has auto-post. This is to support existing email notification behavior from within a bill run.",

                    -   "emailOption": true,

                    -   "emailTemplate": "2c92c8f9631ea3850163271f80152de2",

                    -   "emailTemplateName": "Invoice Posted Default Email Template",

                    -   "eventId": "2c92c8f9631ea3850163271f7fa02da0",

                    -   "eventName": "New Invoice Posted",

                    -   "hidden": false,

                    -   "id": "2c92c8fb7ddc795b017dde437a0949a6",

                    -   "name": "Invoice Posted within a Bill Run of Auto-Post",

                    -   "param1": "BILLRUN",

                    -   "param4": "Not include invoice PDF",

                    -   "profileId": "2c92c8fb7ddc795b017dde4350c949a0",

                    -   "useCustomRequestBody": false


                    }


                ]


            },

        -   "response": [

            -   {

                -   "componentType": "Notifications",

                -   "error": "-",

                -   "id": "f5ee9c26-8420-4f92-9463-1983d1268281",

                -   "key": "B2C Customers",

                -   "method": "GET",

                -   "payload": {

                    -   "description": "",

                    -   "id": "2c92c8fb7ddc795b017dde4350c949a0",

                    -   "isDefault": false,

                    -   "locale": "default",

                    -   "name": "B2C Customers"


                    },

                -   "result": "DONE",

                -   "segregationKey": "Communication profile",

                -   "templateId": null,

                -   "url": "settings/communication-profiles/2c92c8fb7ddc795b017dde4350c949a0"


                }


            ],

        -   "segregationKeys": [

            -   "Communication profile",

            -   "Email Templates"


            ]


        }


    ],

-   "productCatalog": [

    -   {

        -   "errors": [ ],

        -   "originalPayload": { },

        -   "response": [

            -   {

                -   "componentType": "productCatalog",

                -   "error": "-",

                -   "id": "456335f2-711d-4e73-b8ec-3309e78b403a",

                -   "key": "zzzzzzzzzz",

                -   "method": "GET",

                -   "payload": { },

                -   "result": "DONE",

                -   "segregationKey": "Available productCatalog",

                -   "templateId": null,

                -   "url": "/zzzzzzzzzz"


                }


            ],

        -   "segregationKeys": [

            -   "Available productCatalog"


            ]


        }


    ],

-   "settings": [

    -   {

        -   "errors": [ ],

        -   "originalPayload": { },

        -   "response": [

            -   {

                -   "componentType": "Settings",

                -   "error": "{\"success\":false,\"reasons\":[{\"message\":\"Failed to get user info\",\"code\":\"90000011\"}]}\n",

                -   "id": "bfcb76d9-3fb8-4a15-8d13-fe0b805b5ee6",

                -   "key": "AccountingPeriods",

                -   "method": "GET",

                -   "payload": { },

                -   "result": "FAILED",

                -   "segregationKey": "Finance",

                -   "templateId": null,

                -   "url": "v1/accounting-periods"


                },

            -   {

                -   "componentType": "Settings",

                -   "error": null,

                -   "id": "6a27d0d3-3c4c-408f-b160-04510014ebf1",

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

                -   "templateId": null,

                -   "url": "/accounting-rules"


                }


            ],

        -   "segregationKeys": [

            -   "Finance",

            -   "Billing",

            -   "Administration",

            -   "ManageMultiEntity",

            -   "Payments",

            -   "Taxation",

            -   "BillingDocumentConfiguration",

            -   "ManageDataAccessControl"


            ]


        }


    ],

-   "workflows": [

    -   {

        -   "errors": [ ],

        -   "originalPayload": { },

        -   "response": [

            -   {

                -   "componentType": "WorkFlows",

                -   "error": "-",

                -   "id": "df74980b-ff25-4684-a950-7e0c25810a72",

                -   "key": "Resume Subscriptions for Accounts with Zero Balance Limit 1_0.0.13",

                -   "method": "GET",

                -   "payload": {

                    -   "active_version": {

                        -   "calloutTrigger": true,

                        -   "createdAt": "2022-08-21T10:51:22.613-07:00",

                        -   "created_by": {

                            -   "created_at": "2021-11-22T19:06:54.279-08:00",

                            -   "updated_at": "2022-09-06T05:16:20.455-07:00",

                            -   "work_email": "rkumar@zuora.com"


                            },

                        -   "definitionId": 1,

                        -   "description": "",

                        -   "id": 2483,

                        -   "interval": null,

                        -   "name": "Resume Subscriptions for Accounts with Zero Balance Limit 1",

                        -   "ondemandTrigger": true,

                        -   "priority": "Medium",

                        -   "scheduledTrigger": false,

                        -   "status": "Active",

                        -   "timezone": null,

                        -   "type": "Workflow::Setup",

                        -   "updatedAt": "2022-08-21T10:51:22.613-07:00",

                        -   "updated_by": {

                            -   "created_at": "N/A",

                            -   "updated_at": "N/A",

                            -   "work_email": "N/A"


                            },

                        -   "version": "0.0.13"


                        },

                    -   "calloutTrigger": true,

                    -   "createdAt": "2022-08-21T10:51:22.613-07:00",

                    -   "description": "",

                    -   "id": 1,

                    -   "interval": null,

                    -   "latest_inactive_versions": [

                        -   {

                            -   "calloutTrigger": true,

                            -   "createdAt": "2022-05-10T05:21:37.192-07:00",

                            -   "created_by": {

                                -   "created_at": "2021-11-22T19:06:54.279-08:00",

                                -   "updated_at": "2022-09-06T05:16:20.455-07:00",

                                -   "work_email": "rkumar@zuora.com"


                                },

                            -   "definitionId": 1,

                            -   "description": "",

                            -   "id": 689,

                            -   "interval": null,

                            -   "name": "Resume Subscriptions for Accounts with Zero Balance Limit 1",

                            -   "ondemandTrigger": true,

                            -   "priority": "Medium",

                            -   "scheduledTrigger": false,

                            -   "status": "Inactive",

                            -   "timezone": null,

                            -   "type": "Workflow::Setup",

                            -   "updatedAt": "2022-05-10T05:21:37.192-07:00",

                            -   "updated_by": {

                                -   "created_at": "N/A",

                                -   "updated_at": "N/A",

                                -   "work_email": "N/A"


                                },

                            -   "version": "0.0.10"


                            }


                        ],

                    -   "name": "Resume Subscriptions for Accounts with Zero Balance Limit 1",

                    -   "ondemandTrigger": true,

                    -   "priority": "Medium",

                    -   "scheduledTrigger": false,

                    -   "status": "Active",

                    -   "timezone": null,

                    -   "updatedAt": "2022-08-21T10:51:22.613-07:00"


                    },

                -   "result": "DONE",

                -   "segregationKey": "Resume Subscriptions for Accounts with Zero Balance Limit 1",

                -   "templateId": null,

                -   "url": "1"


                }


            ],

        -   "segregationKeys": [

            -   "Payment to Provision",

            -   "Negative Invoices to Positive Account Credit Balance Limit 1",

            -   "Automated Dunning | 2nd Attempt Failed",

            -   "Subscription Price Uplift -- JSON Transform"


            ]


        }


    ]


}`
