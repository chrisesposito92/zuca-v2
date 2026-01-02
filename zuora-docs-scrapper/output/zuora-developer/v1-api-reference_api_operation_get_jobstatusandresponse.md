---
title: "GET JobStatusAndResponse"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_JobStatusAndResponse/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:49:05.448Z"
---

## Retrieve the status and response of a job

**Note:** This operation is only available if you have the [Orders](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Orders) feature enabled. If you are an existing Zuora [Subscribe and Amend](https://knowledgecenter.zuora.com/Zuora_Billing/Subscriptions/Subscriptions/Subscribe_and_Amend) customer, we recommend you enable [Orders Harmonization](https://knowledgecenter.zuora.com/Zuora_Billing/Subscriptions/Subscriptions/Orders_Harmonization/A_Overview_of_Orders_Harmonization) to access the [Orders](https://knowledgecenter.zuora.com/Zuora_Billing/Subscriptions/Subscriptions/Orders/AA_Overview_of_Orders/A_Overview_of_Orders) feature. With Orders, you can access both existing functions for subscription and billing management and the [new features](https://knowledgecenter.zuora.com/Zuora_Billing/Subscriptions/Subscriptions/Orders_Harmonization/P_FAQ_about_Orders_Harmonization#New+features+through+Orders) on Zuora Billing.

**Note:** The [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AA_Overview_of_Order_Line_Items) feature is now generally available to all Zuora customers. You need to enable the [Orders](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Orders) feature to access the [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AA_Overview_of_Order_Line_Items) feature. As of Zuora Billing Release 313 (November 2021), new customers who onboard on [Orders](https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-introduction/overview-of-orders) will have the [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items) feature enabled by default.

Get the status and response of an asynchronous job. Currently, an asynchronous job created by "Create an order asynchronously" or "Preview an order asynchronously" is supported.

Security**bearerAuth**

Request

##### path Parameters

| jobIdrequired | string <UUID>UUID of the asynchronous job created by an asynchronous API operation. |
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

500

Internal Server Error

4XX

Request Errors

get/v1/async-jobs/{jobId}

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/async-jobs/{jobId}' \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
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

-   "errors": null,

-   "result": {

    -   "jobType": "AsyncCreateOrder",

    -   "accountNumber": "A00000001",

    -   "invoiceNumbers": [

        -   "INV00000001"


        ],

    -   "orderLineItems": [

        -   {

            -   "id": "bd78c0522adf42c2aa0fccacc997fa20",

            -   "itemNumber": "116"


            }


        ],

    -   "orderNumber": "OM-00002",

    -   "paidAmount": "300",

    -   "paymentNumber": "P-00000002",

    -   "status": "Pending",

    -   "subscriptions": [

        -   {

            -   "status": "Pending Activation",

            -   "subscriptionNumber": "SM-00001"


            },

        -   {

            -   "status": "Pending Acceptance",

            -   "subscriptionNumber": "SM-00002"


            },

        -   {

            -   "status": "Active",

            -   "subscriptionNumber": "SM-00003"


            },

        -   {

            -   "status": "Pending Acceptance",

            -   "subscriptionNumber": "SM-00004"


            }


        ],

    -   "success": true


    },

-   "status": "Completed",

-   "success": true


}`
