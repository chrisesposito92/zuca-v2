---
title: "GET InvoiceItems"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_InvoiceItems/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:54:19.033Z"
---

## List all items of an invoice

Retrieves the information about all items of a specified invoice.

Security**bearerAuth**

Request

##### path Parameters

| invoiceKeyrequired | stringThe unique ID or number of an invoice. For example, 2c92c8955bd63cc1015bd7c151af02ab or INV00000001. |
| --- | --- |

##### query Parameters

| pageSize | integer <= 40Default: 20The number of records returned per page in the response. |
| --- | --- |
| page | integer >= 1Default: 1The index number of the page that you want to retrieve. This parameter is dependent on pageSize. You must set pageSize before specifying page. For example, if you set pageSize to 20 and page to 2, the 21st to 40th records are returned in the response. |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

get/v1/invoices/{invoiceKey}/items

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/invoices/{invoiceKey}/items?pageSize=20&page=1' \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
  \-H 'Zuora-Entity-Ids: string' \\
  \-H 'Zuora-Org-Ids: string' \\
  \-H 'Zuora-Track-Id: string' \\
  \-H 'Zuora-Version: string'

Response samples

-   200
-   500
-   4XX

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "invoiceItems": [

    -   {

        -   "appliedToItemId": null,

        -   "balance": 21.1,

        -   "chargeAmount": 21.1,

        -   "chargeDate": "2015-11-20 19:53:00",

        -   "chargeDescription": "",

        -   "chargeId": "2c92c0f9511f56b2015126814af832d2",

        -   "chargeName": "Annual Fee",

        -   "chargeType": "Recurring",

        -   "description": "",

        -   "commitmentId": "4028819f9a4dfdf1019a4e04acfb7e63",

        -   "commitmentPeriodId": "4028819f9a4dfdf1019a4e06f04a402c",

        -   "excludeItemBillingFromRevenueAccounting": true,

        -   "id": "2c92c095511f5b4401512682dd017989",

        -   "invoiceScheduleId": "402881e522cf4f9b0122cf5d82860005",

        -   "invoiceScheduleItemId": "402881e522cf4f9b0122cf5d82860006",

        -   "numberOfDeliveries": 1,

        -   "processingType": "Charge",

        -   "productName": "TeamCollab Enterprise",

        -   "quantity": 1,

        -   "serviceEndDate": "2015-11-30",

        -   "serviceStartDate": "2015-11-20",

        -   "soldToContactId": "2c92c0f9511f56b2015126814ad532cd",

        -   "soldToContactSnapshotId": "2c92c0f9511f56b2015126814ad532cd",

        -   "sourceItemType": "SubscriptionComponent",

        -   "subscriptionId": "2c92c0f9511f56b2015126814ad532cc",

        -   "subscriptionName": "A-S00000004",

        -   "taxAmount": 0,

        -   "taxationItems": {

            -   "data": [

                -   {

                    -   "balance": 2.11,

                    -   "creditAmount": 0,

                    -   "exemptAmount": 0,

                    -   "id": "2c98901a68ff26800168ffce6eeb0ffe",

                    -   "jurisdiction": "County",

                    -   "locationCode": "000-1",

                    -   "name": "taxName",

                    -   "paymentAmount": 0,

                    -   "taxAmount": 2.11,

                    -   "taxCode": "TAXCODE-1",

                    -   "taxCodeDescription": null,

                    -   "taxDate": "2015-11-20",

                    -   "taxRate": 0.1,

                    -   "taxRateDescription": "",

                    -   "taxRateType": "Percentage"


                    }


                ]


            },

        -   "unitOfMeasure": "",

        -   "unitPrice": 21.1


        },

    -   {

        -   "appliedToItemId": "2c92c095511f5b4401512682dd017989",

        -   "chargeAmount": -2.1,

        -   "chargeDate": "2015-11-20 19:53:00",

        -   "chargeDescription": "",

        -   "chargeId": "1b3dede652fa47db833a83be55d850a5",

        -   "chargeName": "Discount",

        -   "chargeType": "OneTime",

        -   "description": "",

        -   "commitmentId": "4028819f9a4dfdf1019a4e04acfb7e63",

        -   "commitmentPeriodId": "4028819f9a4dfdf1019a4e06f04a402c",

        -   "excludeItemBillingFromRevenueAccounting": true,

        -   "id": "3e28d61d442f433797e268e2b7c11eeb",

        -   "invoiceScheduleId": "402881e522cf4f9b0122cf5d82860005",

        -   "invoiceScheduleItemId": "402881e522cf4f9b0122cf5d82860006",

        -   "numberOfDeliveries": 1,

        -   "processingType": "Discount",

        -   "productName": "TeamCollab Enterprise",

        -   "quantity": 0,

        -   "serviceEndDate": "2015-11-30",

        -   "serviceStartDate": "2015-11-20",

        -   "soldToContactId": "2c92c0f9511f56b2015126814ad532cd",

        -   "soldToContactSnapshotId": "2c92c0f9511f56b2015126814ad532cd",

        -   "sourceItemType": "SubscriptionComponent",

        -   "subscriptionId": "c2d9a5768db440cbbf2709a55c614bed",

        -   "subscriptionName": "A-S00000004",

        -   "taxAmount": 0,

        -   "taxationItems": {

            -   "data": [

                -   {

                    -   "balance": 0.21,

                    -   "creditAmount": 0,

                    -   "exemptAmount": 0,

                    -   "id": "2c98901a68ff26800168ffce6eeb0ffe",

                    -   "jurisdiction": "County",

                    -   "locationCode": "000-1",

                    -   "name": "taxName",

                    -   "paymentAmount": 0,

                    -   "taxAmount": 0.21,

                    -   "taxCode": "TAXCODE-1",

                    -   "taxCodeDescription": null,

                    -   "taxDate": "2015-11-20",

                    -   "taxRate": 0.1,

                    -   "taxRateDescription": "",

                    -   "taxRateType": "Percentage"


                    }


                ]


            },

        -   "unitOfMeasure": "",

        -   "unitPrice": 10


        }


    ],

-   "success": true


}`
