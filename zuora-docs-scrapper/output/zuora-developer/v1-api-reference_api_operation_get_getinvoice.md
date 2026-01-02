---
title: "Get GetInvoice"
url: "https://developer.zuora.com/v1-api-reference/api/operation/Get_GetInvoice/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:54:17.785Z"
---

## Retrieve an invoice

Retrieves a specific invoice.

Security**bearerAuth**

Request

##### path Parameters

| invoiceKeyrequired | stringThe ID or number of the invoice. For example, 2c92c8955bd63cc1015bd7c151af02ab or INV-0000001. |
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

get/v1/invoices/{invoiceKey}

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/invoices/{invoiceKey}' \\
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

`{

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

-   "billToContactSnapshotId": "402881e522cf4f9b0122cf5d82860010",

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

-   "sequenceSetId": "402881e522cf4f9b0122cf5d82860009",

-   "soldToContactSnapshotId": "402881e522cf4f9b0122cf5d82860011",

-   "source": "BillRun",

-   "sourceId": "BR-00000001",

-   "sourceType": "Subscription",

-   "status": "Posted",

-   "success": true,

-   "targetDate": "2022-10-31",

-   "transferredToAccounting": "string",

-   "updatedById": "402881e522cf4f9b0122cf5d82860002",

-   "updatedDate": "2022-12-08 19:51:23"


}`
