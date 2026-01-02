---
title: "POST StandaloneInvoices"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_StandaloneInvoices/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:53:22.755Z"
---

## Create standalone invoices

Creates multiple standalone invoices for selling physical goods, services or other items on a non-recurring basis to your subscription customers.

To use this operation, you must have the **Modify Invoice** and at least one of the **Create Standalone Invoice With Product Catalog** or **Create Standalone Invoice Without Product Catalog** user permissions. See [Billing Roles](https://knowledgecenter.zuora.com/Zuora_Platform/System_Management/Administrator_Settings/User_Roles/d_Billing_Roles) for more information.

### Limitations

This operation has the following limitations:

-   You can create a maximum of 50 invoices in one request.

-   You can create a maximum of 1,000 invoice items in one request.


Security**bearerAuth**

Request

##### header Parameters

| Idempotency-Key | string <= 255 charactersSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types.With this header specified, the Zuora server can identify subsequent retries of the same request using this value, which prevents the same operation from being performed multiple times by accident. |
| --- | --- |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

##### Request Body schema: application/json
required

| invoices | Array of objects (PostInvoiceType)Container for standalone invoices. |
| --- | --- |
| useSingleTransaction | booleanWhether a batch request is handled with a single transaction.true indicates that a batch request will be handled with a single transaction.false indicates that the standalone invoices to be created in a batch request will be handled with separated transactions.If the field is set to false, a failure in the batch request will not cause the whole request to fail, so you have to retry the whole batch request. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/invoices/batch

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "invoices": [

    -   {

        -   "accountId": "ff8080817cda56fa017cda87aaa2071e",

        -   "autoPay": false,

        -   "comments": "comments",

        -   "currency": "EUR",

        -   "invoiceDate": "2020-02-01",

        -   "invoiceItems": [

            -   {

                -   "amount": 100,

                -   "bookingReference": "bookingReference",

                -   "chargeDate": "2020-02-01 00:00:00",

                -   "description": "description",

                -   "discountItems": [

                    -   {

                        -   "amount": -10,

                        -   "bookingReference": "discountBookingReference",

                        -   "chargeDate": "2020-02-01 11:00:00",

                        -   "chargeName": "discount",

                        -   "description": "description",

                        -   "sku": "SKU-0002",

                        -   "taxItems": [

                            -   {

                                -   "exemptAmount": 0,

                                -   "jurisdiction": "jurisdiction",

                                -   "locationCode": "locationCode",

                                -   "name": "country tax",

                                -   "taxAmount": -1,

                                -   "taxCode": "country tax code",

                                -   "taxCodeDescription": "country tax code, tax rate 10%",

                                -   "taxDate": "2021-02-08",

                                -   "taxMode": "TaxExclusive",

                                -   "taxRate": 0.1,

                                -   "taxRateDescription": "country tax",

                                -   "taxRateType": "Percentage"


                                }


                            ]


                        }


                    ],

                -   "productRatePlanChargeId": "ff8080817cda56fa017cda87999d071b",

                -   "purchaseOrderNumber": "PO-000303",

                -   "quantity": 1,

                -   "serviceEndDate": "2020-02-10",

                -   "serviceStartDate": "2020-02-01",

                -   "taxItems": [

                    -   {

                        -   "exemptAmount": 0,

                        -   "jurisdiction": "juristiction",

                        -   "locationCode": "locationCode",

                        -   "name": "country tax",

                        -   "taxAmount": 10,

                        -   "taxCode": "tax code",

                        -   "taxCodeDescription": "tax code description",

                        -   "taxDate": "2020-02-01",

                        -   "taxMode": "TaxExclusive",

                        -   "taxRate": 0.01,

                        -   "taxRateDescription": "tax rate description",

                        -   "taxRateType": "Percentage"


                        }


                    ]


                },

            -   {

                -   "amount": 100,

                -   "bookingReference": "bookingReference",

                -   "chargeDate": "2020-02-01 00:00:00",

                -   "chargeName": "charge name",

                -   "description": "description",

                -   "purchaseOrderNumber": "PO-000303",

                -   "quantity": 1,

                -   "serviceEndDate": "2020-02-10",

                -   "serviceStartDate": "2020-02-01",

                -   "sku": "sku-001",

                -   "uom": "each"


                }


            ]


        },

    -   {

        -   "accountId": "ff8080817cda56fa017cda87aaa2071e",

        -   "autoPay": false,

        -   "comments": "comments",

        -   "currency": "EUR",

        -   "invoiceDate": "2020-02-01",

        -   "invoiceItems": [

            -   {

                -   "amount": 100,

                -   "bookingReference": "bookingReference",

                -   "chargeDate": "2020-02-01 00:00:00",

                -   "description": "description",

                -   "productRatePlanChargeId": "ff8080817cda56fa017cda87999d071b",

                -   "purchaseOrderNumber": "PO-000303",

                -   "quantity": 1,

                -   "serviceEndDate": "2020-02-10",

                -   "serviceStartDate": "2020-02-01",

                -   "taxItems": [

                    -   {

                        -   "exemptAmount": 0,

                        -   "jurisdiction": "juristiction",

                        -   "locationCode": "locationCode",

                        -   "name": "country tax",

                        -   "taxAmount": 10,

                        -   "taxCode": "tax code",

                        -   "taxCodeDescription": "tax code description",

                        -   "taxDate": "2020-02-01",

                        -   "taxMode": "TaxExclusive",

                        -   "taxRate": 0.01,

                        -   "taxRateDescription": "tax rate description",

                        -   "taxRateType": "Percentage"


                        }


                    ]


                },

            -   {

                -   "amount": 100,

                -   "bookingReference": "bookingReference",

                -   "chargeDate": "2020-02-01 00:00:00",

                -   "chargeName": "charge name",

                -   "description": "description",

                -   "purchaseOrderNumber": "PO-000303",

                -   "quantity": 1,

                -   "serviceEndDate": "2020-02-10",

                -   "serviceStartDate": "2020-02-01",

                -   "sku": "sku-001",

                -   "uom": "each"


                }


            ]


        }


    ],

-   "useSingleTransaction": false


}`

Response samples

-   200
-   500
-   4XX

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "invoices": [

    -   {

        -   "IntegrationId__NS": "string",

        -   "IntegrationStatus__NS": "string",

        -   "SyncDate__NS": "string",

        -   "accountId": "4028818484f483d20184f4f7efc40001",

        -   "adjustmentAmount": 0,

        -   "amount": 700,

        -   "amountWithoutTax": 700,

        -   "autoPay": true,

        -   "balance": 700,

        -   "billRunId": "4028818484f483d20184f50064950035",

        -   "billToContactSnapshotId": "402881e522cf4f9b0122cf5d82860004",

        -   "comments": "",

        -   "complexity__c": "Middle",

        -   "createdById": "402881e522cf4f9b0122cf5d82860002",

        -   "createdDate": "2022-12-08 19:49:16",

        -   "currency": "USD",

        -   "description__c": "description",

        -   "discount": 0,

        -   "dueDate": "2022-11-30",

        -   "id": "4028818484f483d20184f5006b97003f",

        -   "includesOneTime": true,

        -   "includesRecurring": true,

        -   "includesUsage": true,

        -   "invoiceDate": "2022-10-31",

        -   "invoiceGroupNumber": "N-0001",

        -   "invoiceNumber": "INV00000001",

        -   "lastEmailSentDate": "2022-12-08 19:51:16",

        -   "paymentAmount": 0,

        -   "postedBy": "402881e522cf4f9b0122cf5d82860002",

        -   "postedDate": "2022-12-09",

        -   "refundAmount": 0,

        -   "sequenceSetId": "402881e522cf4f9b0122cf5d82860003",

        -   "soldToContactSnapshotId": "402881e522cf4f9b0122cf5d82860005",

        -   "source": "BillRun",

        -   "sourceId": "BR-00000001",

        -   "sourceType": "Subscription",

        -   "status": "Posted",

        -   "success": true,

        -   "targetDate": "2022-10-31",

        -   "transferredToAccounting": "string",

        -   "updatedById": "402881e522cf4f9b0122cf5d82860002",

        -   "updatedDate": "2022-12-08 19:51:23"


        },

    -   {

        -   "objectIndex": 1,

        -   "processId": "CA037C0B8C5B0682",

        -   "reasons": [

            -   {

                -   "code": 58490020,

                -   "message": "No account is found with accountId ff8080817cda56fa017cda87aaa2071f."


                }


            ],

        -   "success": false


        }


    ],

-   "success": true


}`
