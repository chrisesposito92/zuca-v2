---
title: "PUT AccountingCode"
url: "https://developer.zuora.com/v1-api-reference/api/operation/PUT_AccountingCode/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:11:59.479Z"
---

## Update an accounting code

This reference describes how to update an existing accounting code through the REST API.

### Prerequisites

If you have Zuora Finance enabled on your tenant, you must have the Manage Accounting Code permission.

### Limitations

You can only update accounting codes that are not already associated with any transactions.

Security**bearerAuth**

Request

##### path Parameters

| ac-idrequired | stringID of the accounting code you want to update. |
| --- | --- |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

##### Request Body schema: application/json
required

| glAccountName | stringName of the account in your general ledger.Field only available if you have Zuora Finance enabled. Maximum of 255 characters. |
| --- | --- |
| glAccountNumber | stringAccount number in your general ledger.Field only available if you have Zuora Finance enabled. Maximum of 255 characters. |
| name | stringName of the accounting code.Accounting code name must be unique. Maximum of 100 characters. |
| notes | stringMaximum of 2,000 characters. |
| type | stringAccounting code type. You cannot change the type of an accounting code from AccountsReceivable to a different type.Note that On-Account Receivable is only available if you enable the Invoice Settlement feature.Enum: "AccountsReceivable" "On-Account Receivable" "Cash" "OtherAssets" "CustomerCashOnAccount" "DeferredRevenue" "SalesTaxPayable" "OtherLiabilities" "SalesRevenue" "SalesDiscounts" "OtherRevenue" "OtherEquity" "BadDebt" "OtherExpenses" |
| segmentConstantValues | object (segmentConstantValues)Segment constant values. The field is available only if you have GL Segmentation 2.0 enabled.This field is additional property. |
| property name*additional property | anyCustom fields of the Accounting Code object. The name of each custom field has the form customField__c. Custom field names are case sensitive. See Custom Fields for more information. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

put/v1/accounting-codes/{ac-id}

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "notes": "Details of the accounting code"


}`

Response samples

-   200
-   500
-   4XX

application/json

responseresponse

Copy

`{

-   "success": true


}`
