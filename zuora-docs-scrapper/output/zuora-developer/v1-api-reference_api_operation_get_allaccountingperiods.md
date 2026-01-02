---
title: "GET AllAccountingPeriods"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_AllAccountingPeriods/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:11:59.606Z"
---

## List all accounting periods

Retrieves all accounting periods on your tenant.

Security**bearerAuth**

Request

##### query Parameters

| page | integer >= 1Default: 1The index number of the page that you want to retrieve. This parameter is dependent on pageSize. You must set pageSize before specifying page. For example, if you set pageSize to 20 and page to 2, the 21st to 40th records are returned in the response. |
| --- | --- |
| pageSize | integer <= 300Default: 300The number of records returned per page in the response. |

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

get/v1/accounting-periods

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/accounting-periods?page=1&pageSize=300' \\
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

-   "accountingPeriods": [

    -   {

        -   "createdBy": "e20b074746ec48f40147140f51e30a1a",

        -   "createdOn": "2016-03-16 23:17:25",

        -   "endDate": "2016-03-31",

        -   "fileIds": {

            -   "accountsReceivableAccountAgingDetailExportFileId": "8a8081ae5374904f01538340274a13f4",

            -   "accountsReceivableInvoiceAgingDetailExportFileId": "8a8081ae5374904f01538340273013f3",

            -   "arRollForwardDetailExportFileId": null,

            -   "fxRealizedGainAndLossDetailExportFileId": null,

            -   "fxUnrealizedGainAndLossDetailExportFileId": null,

            -   "revenueDetailCsvFileId": "8a8081ae5374904f0153834033221418",

            -   "revenueDetailExcelFileId": "8a8081ae5374904f0153834032e41417",

            -   "unprocessedChargesFileId": null


            },

        -   "fiscalYear": 2016,

        -   "id": "8a8081ae5374904f01538338b66e1005",

        -   "name": "Mar 2016",

        -   "notes": "",

        -   "runTrialBalanceEnd": null,

        -   "runTrialBalanceErrorMessage": "Error creating the trial balance: exchange rate from USD to GBP on 08/03/2015 is not available. Please import the rate and run trial balance again.",

        -   "runTrialBalanceStart": "2016-03-16 23:25:22",

        -   "runTrialBalanceStatus": "Error",

        -   "startDate": "2016-03-01",

        -   "status": "Open",

        -   "updatedBy": "e20b074746ec48f40147140f51e30a1a",

        -   "updatedOn": "2016-03-16 23:25:22"


        },

    -   {

        -   "createdBy": "e20b074746ec48f40147140f51e30a1a",

        -   "createdOn": "2016-03-16 23:17:50",

        -   "endDate": "2016-04-30",

        -   "fileIds": {

            -   "accountsReceivableAccountAgingDetailExportFileId": "8a8081ae5374904f0153833e9a7a1364",

            -   "accountsReceivableInvoiceAgingDetailExportFileId": "8a8081ae5374904f0153833e9a651363",

            -   "arRollForwardDetailExportFileId": null,

            -   "fxRealizedGainAndLossDetailExportFileId": null,

            -   "fxUnrealizedGainAndLossDetailExportFileId": null,

            -   "revenueDetailCsvFileId": "8a8081ae5374904f0153833ea2d613af",

            -   "revenueDetailExcelFileId": "8a8081ae5374904f0153833ea2c813ae",

            -   "unprocessedChargesFileId": null


            },

        -   "fiscalYear": 2016,

        -   "id": "8a8081ae5374904f0153833918af1007",

        -   "name": "Apr 2016",

        -   "notes": "",

        -   "runTrialBalanceEnd": null,

        -   "runTrialBalanceErrorMessage": null,

        -   "runTrialBalanceStart": "2016-03-16 23:23:40",

        -   "runTrialBalanceStatus": "Error",

        -   "startDate": "2016-04-01",

        -   "status": "Open",

        -   "updatedBy": "e20b074746ec48f40147140f51e30a1a",

        -   "updatedOn": "2016-03-16 23:23:40"


        },

    -   {

        -   "createdBy": "e20b074746ec48f40147140f51e30a1a",

        -   "createdOn": "2016-03-16 23:23:29",

        -   "endDate": "2016-05-31",

        -   "fileIds": {

            -   "accountsReceivableAccountAgingDetailExportFileId": null,

            -   "accountsReceivableInvoiceAgingDetailExportFileId": null,

            -   "arRollForwardDetailExportFileId": null,

            -   "fxRealizedGainAndLossDetailExportFileId": null,

            -   "fxUnrealizedGainAndLossDetailExportFileId": null,

            -   "revenueDetailCsvFileId": "8a8081ae54c2eabb0154c307e2920034",

            -   "revenueDetailExcelFileId": "8a8081ae54c2eabb0154c307e27e0033",

            -   "unprocessedChargesFileId": null


            },

        -   "fiscalYear": 2016,

        -   "id": "8a8081ae5374904f0153833e4590132d",

        -   "name": "May 2016",

        -   "notes": "",

        -   "runTrialBalanceEnd": null,

        -   "runTrialBalanceErrorMessage": null,

        -   "runTrialBalanceStart": "2016-05-18 01:42:30",

        -   "runTrialBalanceStatus": "Error",

        -   "startDate": "2016-05-01",

        -   "status": "Open",

        -   "updatedBy": "e20b074746ec48f40147140f51e30a1a",

        -   "updatedOn": "2016-05-18 01:42:30"


        },

    -   {

        -   "createdBy": "402881e522cf4f9b0122cf5d82860002",

        -   "createdOn": "2014-07-28 23:52:46",

        -   "endDate": null,

        -   "fileIds": {

            -   "accountsReceivableAccountAgingDetailExportFileId": null,

            -   "accountsReceivableInvoiceAgingDetailExportFileId": null,

            -   "arRollForwardDetailExportFileId": null,

            -   "fxRealizedGainAndLossDetailExportFileId": null,

            -   "fxUnrealizedGainAndLossDetailExportFileId": null,

            -   "revenueDetailCsvFileId": null,

            -   "revenueDetailExcelFileId": null,

            -   "unprocessedChargesFileId": null


            },

        -   "fiscalYear": 0,

        -   "id": "e20b0747478025a1014780e489a60002",

        -   "name": "Open-Ended",

        -   "notes": null,

        -   "runTrialBalanceEnd": null,

        -   "runTrialBalanceErrorMessage": null,

        -   "runTrialBalanceStart": null,

        -   "runTrialBalanceStatus": "Pending",

        -   "startDate": "2016-06-01",

        -   "status": "Open",

        -   "updatedBy": "e20b074746ec48f40147140f51e30a1a",

        -   "updatedOn": "2016-03-16 23:23:29"


        }


    ],

-   "success": true


}`
