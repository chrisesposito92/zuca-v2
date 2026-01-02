---
title: "GetCommitmentByKey"
url: "https://developer.zuora.com/v1-api-reference/api/operation/getCommitmentByKey/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:51:43.715Z"
---

## Retrieve a commitment

Retrieves the details of a specific commitment using its ID or number.

Security**bearerAuth**

Request

##### path Parameters

| commitmentKeyrequired | stringThe unique identifier (ID or number) of the commitment. |
| --- | --- |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

get/v1/commitments/{commitmentKey}

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/commitments/{commitmentKey}' \\
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

Copy

Expand allCollapse all

`{

-   "id": "8ad08ca797ef6ca50197f3cce6267991",

-   "status": "Active",

-   "version": 1,

-   "currency": "USD",

-   "startDate": "2020-01-01",

-   "endDate": "2020-12-31",

-   "amount": 100,

-   "orderNumber": "O-0001",

-   "orderId": "00989e98483e00030a2733ee989e9815",

-   "accountId": "8a8aa0ac7f3b4c1d017f3b4c1d0a0001",

-   "accountNumber": "ACC-0001",

-   "commitmentNumber": "TW-0001",

-   "name": "Example Commitment",

-   "type": "MinCommitment",

-   "description": "This a example commitment.",

-   "priority": 1,

-   "eligibleAccountConditions": {

    -   "field": "Account.AccountNumber",

    -   "operator": "eq",

    -   "value": "ACC-0001",

    -   "conditions": [

        -   { }


        ],

    -   "relation": "and"


    },

-   "eligibleChargeConditions": {

    -   "field": "RatePlanCharge.ChargeNumber",

    -   "operator": "in",

    -   "value": "C-0001,C-0002",

    -   "conditions": [

        -   { }


        ],

    -   "relation": "and"


    },

-   "periodAlignmentOption": "SpecificDate",

-   "specificPeriodAlignmentDate": "2020-01-15",

-   "customFields": { },

-   "excludeItemBookingFromRevenueAccounting": true,

-   "adjustmentLiabilityAccountingCode": "Accounts Receivable",

-   "adjustmentRevenueAccountingCode": "Accounts Receivable",

-   "contractAssetAccountingCode": "Accounts Receivable",

-   "contractLiabilityAccountingCode": "Accounts Receivable",

-   "contractRecognizedRevenueAccountingCode": "Accounts Receivable",

-   "deferredRevenueAccountingCode": "Accounts Receivable",

-   "excludeItemBillingFromRevenueAccounting": false,

-   "isAllocationEligible": true,

-   "isUnbilled": false,

-   "recognizedRevenueAccountingCode": "Accounts Receivable",

-   "revenueRecognitionRule": "Recognize upon invoicing",

-   "unbilledReceivablesAccountingCode": "Accounts Receivable",

-   "revenueRecognitionTiming": "Upon Order Activation Date",

-   "revenueAmortizationMethod": "string",

-   "accountReceivableAccountingCode": "Accounts Receivable",

-   "taxable": true,

-   "taxCode": "SalesTax_US",

-   "taxMode": "TaxInclusive"


}`
