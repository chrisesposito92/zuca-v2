---
title: "PUT UpdateAccountingPeriod"
url: "https://developer.zuora.com/v1-api-reference/api/operation/PUT_UpdateAccountingPeriod/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:12:24.385Z"
---

## Update an accounting period

Updates an accounting period.

## Prerequisites

-   You must have Zuora Finance enabled on your tenant.

-   You must have the Create Accounting Period user permission. See [Finance Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/f_Finance_Roles).


## Limitations

-   You can update the start date of only the earliest accounting period on your tenant. You cannot update the start date of later periods.

-   If you update the earliest accounting period, the start date must be equal to or earlier than the date of the earliest transaction on the tenant.

-   Start and end dates of accounting periods must be contiguous. For example, if one accounting period ends on January 31, the next period must start on February 1.

-   If you have the Revenue Recognition Package and have enabled the "Monthly recognition over time" revenue recognition model, the accounting period start date and end date must be on the first day and last day of the month, respectively. Note that the start and end dates do not necessarily have to be in the same month.

-   You cannot update the start date or end date of an accounting period if:

    -   Any revenue has been distributed into the period.
    -   The period has any active journal entries.

Security**bearerAuth**

Request

##### path Parameters

| ap-idrequired | stringID of the accounting period you want to update. |
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

| endDate | string <date>The end date of the accounting period in yyyy-mm-dd format, for example, "2016-02-19". |
| --- | --- |
| fiscalYear | integerFiscal year of the accounting period in yyyy format, for example, "2016". |
| fiscalQuarter | integer [ 1 .. 4 ]Fiscal quarter of the accounting period. One number between 1 and 4. |
| name | stringName of the accounting period.Accounting period name must be unique. Maximum of 100 characters. |
| notes | stringNotes about the accounting period.Maximum of 255 characters. |
| startDate | string <date>The start date of the accounting period in yyyy-mm-dd format, for example, "2016-02-19". |
| property name*additional property | anyCustom fields of the Accounting Period object. The name of each custom field has the form customField__c. Custom field names are case sensitive. See Custom Fields for more information. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

put/v1/accounting-periods/{ap-id}

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "notes": "Details of the accounting period"


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
