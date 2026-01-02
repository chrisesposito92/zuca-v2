---
title: "PreviewExistingSubscription"
url: "https://developer.zuora.com/v1-api-reference/api/operation/PreviewExistingSubscription/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:50:09.384Z"
---

## Preview a subscription by subscription key

Describes how to preview an existing subscription to view information about existing and future invoices or credit memos.

**Note**: The `Zuora-Version` parameter must be `207.0` or later.

Security**bearerAuth**

Request

##### path Parameters

| subscription-keyrequired | stringSubscription number or ID |
| --- | --- |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Version | stringThe minor version of the Zuora REST API.You need to set this parameter if you use the following fields:targetDateincludeExistingDraftDocItemspreviewTypetaxationItemsIf you have the Invoice Settlement feature enabled, you need to specify this parameter. Otherwise, an error is returned. |

##### Request Body schema: application/json
required

| previewStartDate | object (PreviewStartDate)The start date of the preview. |
| --- | --- |
| previewThroughDate | object (PreviewThroughDate)The preview through date. |
| quantityForUsageCharges | Array of objects (QuantityForUsageCharges)Container for usage charges. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/subscriptions/{subscription-key}/preview

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "previewStartDate": {

    -   "previewStartDatePolicy": "specificDate",

    -   "specificDate": "2024-01-01"


    },

-   "previewThroughDate": {

    -   "previewThruDatePolicy": "nextBillingPeriods",

    -   "nextBillingPeriods": "2"


    },

-   "quantityForUsageCharges": [

    -   {

        -   "chargeId": "402880e78ccd1743018cce026efb002d",

        -   "quantity": 20


        }


    ]


}`

Response samples

-   200
-   500
-   4XX

application/json

Copy

Expand allCollapse all

`{

-   "invoices": [

    -   {

        -   "invoiceNumber": "Preview Invoice",

        -   "amount": 10,

        -   "amountWithoutTax": 10,

        -   "taxAmount": 0,

        -   "targetDate": "2024-02-01",

        -   "status": null,

        -   "isFromExistingInvoice": false,

        -   "invoiceItems": [

            -   {

                -   "serviceStartDate": "2024-01-01",

                -   "serviceEndDate": "2024-01-31",

                -   "amountWithoutTax": 10,

                -   "taxAmount": 0,

                -   "chargeDescription": "Recurring Flat Fee Pricing",

                -   "chargeName": "Recurring_Flat Fee Pricing1628472350306",

                -   "chargeNumber": "C-0000001",

                -   "productName": "P_1628472348863",

                -   "productRatePlanChargeId": "402881547b216168017b2884182f12e7",

                -   "processingType": "Charge",

                -   "unitPrice": 10,

                -   "quantity": 1,

                -   "unitOfMeasure": null


                }


            ]


        }


    ],

-   "creditMemos": [

    -   {

        -   "creditMemoNumber": "Preview Credit Memo",

        -   "amount": 10,

        -   "amountWithoutTax": 10,

        -   "taxAmount": 0,

        -   "targetDate": "2024-02-01",

        -   "status": null,

        -   "isFromExistingCreditMemo": false,

        -   "creditMemoItems": [

            -   {

                -   "serviceStartDate": "2024-01-01",

                -   "serviceEndDate": "2024-01-31",

                -   "amountWithoutTax": 10,

                -   "taxAmount": 0,

                -   "chargeDescription": "Recurring Flat Fee Pricing",

                -   "chargeName": "Recurring_Flat Fee Pricing1628472350306",

                -   "chargeNumber": "C-0000001",

                -   "productName": "P_1628472348863",

                -   "productRatePlanChargeId": "402881547b216168017b2884182f12e7",

                -   "processingType": "Charge",

                -   "unitPrice": 10,

                -   "quantity": 1,

                -   "unitOfMeasure": null


                }


            ]


        }


    ],

-   "success": true


}`
