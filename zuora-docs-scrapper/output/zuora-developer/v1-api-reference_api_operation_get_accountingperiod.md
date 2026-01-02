---
title: "GET AccountingPeriod"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_AccountingPeriod/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:12:23.209Z"
---

## Retrieve an accounting period

Retrieves an accounting period.

**Prerequisites**: You must have Zuora Finance enabled on your tenant.

Security**bearerAuth**

Request

##### path Parameters

| ap-idrequired | stringID of the accounting period you want to get. |
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

get/v1/accounting-periods/{ap-id}

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/accounting-periods/{ap-id}' \\
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

-   "createdBy": "e20b074746ec48f40147140f51e30a1a",

-   "createdOn": "2014-11-25 22:21:22",

-   "endDate": "2014-10-31",

-   "fileIds": {

    -   "accountsReceivableAccountAgingDetailExportFileId": "8a8081ae5002967c015012f1230e0914",

    -   "accountsReceivableInvoiceAgingDetailExportFileId": "8a8081ae5002967c015012f122f10913",

    -   "accountsReceivableDebitMemoAgingDetailExportFileId": "8a8081ae5002967c015012f122f40913",

    -   "arRollForwardDetailExportFileId": "8a8081ae5002967c015012f15d7b09e2",

    -   "fxRealizedGainAndLossDetailExportFileId": "8a8081ae5002967c015012f151a609ba",

    -   "fxUnrealizedGainAndLossDetailExportFileId": "8a8081ae5002967c015012f150b509b8",

    -   "revenueDetailCsvFileId": "8a8081ae5002967c015012f129a10926",

    -   "revenueDetailExcelFileId": "8a8081ae5002967c015012f129870925",

    -   "unprocessedChargesFileId": null


    },

-   "fiscalYear": 2014,

-   "id": "e20b074749d2a38b0149eac2e9550aa9",

-   "name": "Oct 2014",

-   "notes": "",

-   "runTrialBalanceEnd": "2015-09-28 00:53:36",

-   "runTrialBalanceErrorMessage": null,

-   "runTrialBalanceStart": "2015-09-28 00:53:13",

-   "runTrialBalanceStatus": "Completed",

-   "startDate": "2014-10-01",

-   "status": "Closed",

-   "success": true,

-   "updatedBy": "e20b074746ec48f40147140f51e30a1a",

-   "updatedOn": "2015-09-28 00:53:13"


}`
