---
title: "GET PaymentItemParts"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_PaymentItemParts/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:02:02.756Z"
---

## List all payment part items

**Note:** This operation is only available if you have the [Invoice Item Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/C_Invoice_Item_Settlement) feature enabled. Invoice Item Settlement must be used together with other Invoice Settlement features (Unapplied Payments, and Credit and Debit memos). If you wish to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.

Retrieves the information about all items of a payment part. A payment part item is a single line item in a payment part. A payment part can consist of several different types of items.

Security**bearerAuth**

Request

##### path Parameters

| partidrequired | stringThe unique ID of a specific payment part. You can get the payment part ID from the response of List all parts of a payment. |
| --- | --- |
| paymentKeyrequired | stringThe unique ID or number of an unapplied payment. For example, 8a8082e65b27f6c3015b89e4344c16b1, or P-00000001. |

##### query Parameters

| page | integer >= 1Default: 1The index number of the page that you want to retrieve. This parameter is dependent on pageSize. You must set pageSize before specifying page. For example, if you set pageSize to 20 and page to 2, the 21st to 40th records are returned in the response. |
| --- | --- |
| pageSize | integer <= 40Default: 20The number of records returned per page in the response. |

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

get/v1/payments/{paymentKey}/parts/{partid}/item-parts

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/payments/{paymentKey}/parts/{partid}/item-parts?page=1&pageSize=20' \\
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

-   "itemParts": [

    -   {

        -   "amount": 4,

        -   "createdById": "402881e522cf4f9b0122cf5d82860002",

        -   "createdDate": "2017-03-01 11:30:37",

        -   "debitMemoItemId": "4028905f5a87c0ff015a87e49e7a0063",

        -   "id": "4028905f5a87c0ff015a87eb6bd8008a",

        -   "invoiceItemId": null,

        -   "taxItemId": null,

        -   "updatedById": "402881e522cf4f9b0122cf5d82860002",

        -   "updatedDate": "2017-03-01 11:30:37"


        },

    -   {

        -   "amount": 0.1,

        -   "createdById": "402881e522cf4f9b0122cf5d82860002",

        -   "createdDate": "2017-03-01 11:30:37",

        -   "debitMemoItemId": null,

        -   "id": "4028905f5a87c0ff015a87eb6bd8008b",

        -   "invoiceItemId": null,

        -   "taxItemId": "4028905f5a87c0ff015a87e49f5e0065",

        -   "updatedById": "402881e522cf4f9b0122cf5d82860002",

        -   "updatedDate": "2017-03-01 11:30:37"


        }


    ],

-   "success": true


}`
