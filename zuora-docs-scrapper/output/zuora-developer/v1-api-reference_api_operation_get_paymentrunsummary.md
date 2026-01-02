---
title: "GET PaymentRunSummary"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_PaymentRunSummary/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:03:09.264Z"
---

## Retrieve a payment run summary

Retrives the summary of a payment run.

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

get/v1/payment-runs/{paymentRunKey}/summary

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/payment-runs/{paymentRunKey}/summary' \\
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

-   "numberOfCreditBalanceAdjustments": 0,

-   "numberOfCreditMemos": 1,

-   "numberOfDebitMemos": 1,

-   "numberOfErrors": 0,

-   "numberOfInvoices": 0,

-   "numberOfPayments": 1,

-   "numberOfReceivables": 1,

-   "numberOfUnappliedPayments": 1,

-   "numberOfUnprocessedDebitMemos": 0,

-   "numberOfUnprocessedInvoices": 0,

-   "numberOfUnprocessedReceivables": 0,

-   "success": true,

-   "totalValues": [

    -   {

        -   "totalValueOfCreditBalance": "0 USD",

        -   "totalValueOfCreditMemos": "100 USD",

        -   "totalValueOfDebitMemos": "256 USD",

        -   "totalValueOfErrors": "0 USD",

        -   "totalValueOfInvoices": "0 USD",

        -   "totalValueOfPayments": "56 USD",

        -   "totalValueOfReceivables": "256 USD",

        -   "totalValueOfUnappliedPayments": "100 USD",

        -   "totalValueOfUnprocessedDebitMemos": "0 USD",

        -   "totalValueOfUnprocessedInvoices": "0 USD",

        -   "totalValueOfUnprocessedReceivables": "0 USD"


        }


    ]


}`
