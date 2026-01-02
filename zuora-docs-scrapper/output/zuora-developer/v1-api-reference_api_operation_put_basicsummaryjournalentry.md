---
title: "PUT BasicSummaryJournalEntry"
url: "https://developer.zuora.com/v1-api-reference/api/operation/PUT_BasicSummaryJournalEntry/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:13:09.485Z"
---

## Update a summary journal entry

This REST API reference describes how to update the basic information of a summary journal entry. Request and response field descriptions and sample code are provided.

Security**bearerAuth**

Request

##### path Parameters

| je-numberrequired | stringJournal entry number in the format JE-00000001. |
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

| journalEntryItems | Array of objects (journalEntryItems)Key name that represents the list of journal entry items. |
| --- | --- |
| notes | stringAdditional information about this record.Character limit: 2,000 |
| transferredToAccounting | stringStatus shows whether the journal entry has been transferred to an accounting system.This field cannot be changed after the summary journal entry has been canceled.Note: The Zuora Finance Override Transferred to Accounting permission is required to change transferredToAccounting from Yes to any other value.Enum: "No" "Processing" "Yes" "Error" "Ignore" |
| property name*additional property | anyCustom fields of the Journal Entry object. The name of each custom field has the form customField__c. Custom field names are case sensitive. See Custom Fields for more information. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

put/v1/journal-entries/{je-number}/basic-information

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "transferredToAccounting": "Yes"


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
