---
title: "POST AccountingPeriod"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_AccountingPeriod/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:12:24.512Z"
---

## Create an accounting period

## Creates an accounting period. Prerequisites

-   You must have Zuora Finance enabled on your tenant.
-   You must have the Create Accounting Period user permission.

## Limitations

-   When creating the first accounting period on your tenant, the start date must be equal to or earlier than the date of the earliest transaction on the tenant.
-   Start and end dates of accounting periods must be contiguous. For example, if one accounting period ends on January 31, the next period must start on February 1.
-   If you have the Revenue Recognition Package and have enabled the "Monthly recognition over time" revenue recognition model, the accounting period start date and end date must be on the first day and last day of the month, respectively. Note that the start and end dates do not necessarily have to be in the same month.

Security**bearerAuth**

Request

##### header Parameters

| Idempotency-Key | string <= 255 charactersSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types.With this header specified, the Zuora server can identify subsequent retries of the same request using this value, which prevents the same operation from being performed multiple times by accident. |
| --- | --- |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

##### Request Body schema: application/json
required

| endDaterequired | string <date>The end date of the accounting period in yyyy-mm-dd format, for example, "2016-02-19". |
| --- | --- |
| fiscalYearrequired | integerFiscal year of the accounting period in yyyy format, for example, "2016". |
| fiscalQuarter | integer [ 1 .. 4 ]Fiscal quarter of the accounting period. One number between 1 and 4. |
| namerequired | stringName of the accounting period.Accounting period name must be unique. Maximum of 100 characters. |
| notes | stringNotes about the accounting period.Maximum of 255 characters. |
| organizationLabels | Array of objectsThe organization that the accounting period belongs to.For each item in the array, either the organizationId or the organizationName field is required.This field is only required when you have already turned on Multi-Org feature. |
| startDaterequired | string <date>The start date of the accounting period in yyyy-mm-dd format, for example, "2016-02-19". |
| property name*additional property | anyCustom fields of the Accounting Period object. The name of each custom field has the form customField__c. Custom field names are case sensitive. See Custom Fields for more information. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/accounting-periods

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "name": "Jun 2016",

-   "fiscalYear": 2016,

-   "startDate": "2016-06-01",

-   "endDate": "2016-06-30"


}`

Response samples

-   200
-   500
-   4XX

application/json

responseresponse

Copy

`{

-   "id": "7b7181ae547aac1e01547efb61f20162",

-   "success": true


}`
