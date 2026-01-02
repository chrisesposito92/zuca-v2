---
title: "GET PaymentRunData"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_PaymentRunData/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:02:47.745Z"
---

## Retrieve payment run data

Retrieves payment run data and the processing result with details, if the `data` field was specified in the Create payment run operation.

Security**bearerAuth**

Request

##### path Parameters

| paymentRunKeyrequired | stringThe unique ID of a payment run or the payment run number. For example, 402890245f097f39015f0f074a2e0566. |
| --- | --- |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

Responses

200

OK

get/v1/payment-runs/{paymentRunKey}/data

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/payment-runs/{paymentRunKey}/data' \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
  \-H 'Zuora-Track-Id: string' \\
  \-H 'Zuora-Version: string'

Response samples

-   200

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "data": [

    -   {

        -   "accountId": "402881ed738ddf2001738def8db50058",

        -   "amount": 80,

        -   "amountCollected": 80,

        -   "amountToCollect": 80,

        -   "comment": "Comment1",

        -   "customField1__c": "cf_value1",

        -   "customField2__c": "cf_value2",

        -   "documentId": "402881ed738ddf2001738df388fd009e",

        -   "documentType": "Invoice",

        -   "paymentGatewayId": "402881ed738ddf2001738def8b630050",

        -   "paymentMethodId": "402881ed738ddf2001738def8e60005b",

        -   "result": "Processed",

        -   "transactions": [

            -   {

                -   "amount": 40,

                -   "appliedAmount": 40,

                -   "id": "402881ed738ddf2001738dfafad6012c",

                -   "status": "Processed",

                -   "type": "Payment"


                },

            -   {

                -   "appliedAmount": 10,

                -   "id": "402881ed738ddf2001738df7572400e6",

                -   "type": "CreditMemo"


                },

            -   {

                -   "appliedAmount": 30,

                -   "id": "402881ed738ddf2001738df715d800dd",

                -   "type": "UnappliedPayment"


                }


            ]


        },

    -   {

        -   "accountId": "402881ed738ddf2001738def8db50058",

        -   "amount": 70,

        -   "amountCollected": 70,

        -   "amountToCollect": 70,

        -   "comment": "Comment2",

        -   "customField1__c": "cf_value3",

        -   "customField2__c": "cf_value4",

        -   "documentId": "402881ed738ddf2001738df5b90a00c0",

        -   "documentType": "DebitMemo",

        -   "paymentGatewayId": "402881ed738ddf2001738def8b630050",

        -   "paymentMethodId": "402881ed738ddf2001738df97dbe00fe",

        -   "result": "Processed",

        -   "transactions": [

            -   {

                -   "amount": 70,

                -   "appliedAmount": 70,

                -   "id": "402881ed738ddf2001738dfafcbd013b",

                -   "status": "Processed",

                -   "type": "Payment"


                }


            ]


        },

    -   {

        -   "accountId": "c49b85cd8ba742edb5ab4b3da90fc4c0",

        -   "comment": "Comment3",

        -   "customField1__c": "cf_value5",

        -   "customField2__c": "cf_value6",

        -   "documentId": "7dab18d036dc4c94bbec853afb12affb",

        -   "documentType": "Invoice",

        -   "errorCode": "Invalid_Request_Data",

        -   "errorMessage": "Payment method is closed",

        -   "paymentGatewayId": "768929c2f51947e79e73703bfc9bca7d",

        -   "paymentMethodId": "1906df6f56f049c8b7457dc31f62d0ec",

        -   "result": "Error"


        }


    ],

-   "success": true


}`
