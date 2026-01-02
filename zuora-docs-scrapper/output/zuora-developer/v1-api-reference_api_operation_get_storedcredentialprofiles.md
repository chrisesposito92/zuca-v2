---
title: "GET StoredCredentialProfiles"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_StoredCredentialProfiles/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:00:04.009Z"
---

## List stored credential profiles of a payment method

Retrieves the stored credential profiles within a payment method.

Security**bearerAuth**

Request

##### path Parameters

| payment-method-idrequired | stringID of a payment method. |
| --- | --- |

##### query Parameters

| includeAll | booleanDefault: falseSpecifies whether to retrieve all the stored credential profiles within the payment method.By default, Zuora returns only the stored credential profiles with Agreed or Active status. If you set this parameter to true, Zuora returns all the stored credential profiles. |
| --- | --- |

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

get/v1/payment-methods/{payment-method-id}/profiles

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/payment-methods/{payment-method-id}/profiles?includeAll=false' \\
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

-   "profiles": [

    -   {

        -   "activatedOn": "2019-03-06 07:45:55",

        -   "agreedOn": "2019-03-06 07:45:55",

        -   "brand": "Visa",

        -   "cancelledOn": "2019-03-13 07:52:16",

        -   "consentAgreementRef": "ACCT1338AgreementV1.pdf",

        -   "consentAgreementSrc": "External",

        -   "expiredOn": null,

        -   "number": 1,

        -   "paymentMethodId": "402881836953a3c7016953aec290000d",

        -   "status": "Cancelled",

        -   "type": "Recurring"


        },

    -   {

        -   "activatedOn": "2019-03-13 07:55:08",

        -   "agreedOn": "2019-03-13 07:55:08",

        -   "brand": "Visa",

        -   "cancelledOn": null,

        -   "consentAgreementRef": "ACCT1338AgreementV2.pdf",

        -   "consentAgreementSrc": "External",

        -   "expiredOn": null,

        -   "number": 2,

        -   "paymentMethodId": "402881836953a3c7016953aec290000d",

        -   "status": "Active",

        -   "type": "Recurring"


        }


    ],

-   "success": true


}`
