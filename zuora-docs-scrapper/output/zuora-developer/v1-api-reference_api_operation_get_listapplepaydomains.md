---
title: "GET ListApplePayDomains"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_ListApplePayDomains/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:00:24.877Z"
---

## List registered Apple Pay domains

Use this operation to retrieve details of your domains that are already registered with Apple for Apple Pay button integration implemented through Zuora's JavaScript SDK.

You can use `domainName` as the query parameter to restrict domains returned in the response. Specify a domain name and the registered domains containing the specified domain name will be returned.

For more information about Zuora's JavaScript SDK for Apple Pay integration, see [Set up Apple Pay through the JavaScript SDK approach](https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Methods/B_Define_Payment_Methods/Set_up_Apple_Pay_for_gateway_integrations_other_than_Adyen_Integration_v2.0).

Security**bearerAuth**

Request

##### query Parameters

| domainName | stringSpecifies a domain name such as zuora.com and the registered domains containing the specified domain name will be returned.For example, test1.zuora.com and test2.zuora.com are two registered domains, but zuora.com is not registered. If you specify zuora.com in this query field, the data of test1.zuora.com and test2.zuora.com will be returned. |
| --- | --- |

##### header Parameters

| Idempotency-Key | string <= 255 charactersSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types.With this header specified, the Zuora server can identify subsequent retries of the same request using this value, which prevents the same operation from being performed multiple times by accident. |
| --- | --- |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

get/payment-methods/apple-pay/domains

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/payment-methods/apple-pay/domains?domainName=string' \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
  \-H 'Idempotency-Key: string' \\
  \-H 'Zuora-Entity-Ids: string' \\
  \-H 'Zuora-Org-Ids: string' \\
  \-H 'Zuora-Track-Id: string'

Response samples

-   200
-   500
-   4XX

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "domains": [

    -   {

        -   "createdBy": "402881e522cf4f9b0122cf5d82860002",

        -   "createdOn": "2023-07-05 00:44:51",

        -   "domainName": "testapplepay.zuora.com",

        -   "domainVerified": true,

        -   "id": "402881a38924ff1001892502da090021",

        -   "updatedBy": "402881e522cf4f9b0122cf5d82860002",

        -   "updatedOn": "2023-07-05 00:44:51"


        },

    -   {

        -   "createdBy": "402881e522cf4f9b0122cf5d82860002",

        -   "createdOn": "2023-07-04 01:02:12",

        -   "domainName": "test1.zuora.com",

        -   "domainVerified": false,

        -   "id": "402881a3891fe7b401891fec61d40036",

        -   "updatedBy": "402881e522cf4f9b0122cf5d82860002",

        -   "updatedOn": "2023-07-04 01:02:12"


        }


    ],

-   "success": true


}`
