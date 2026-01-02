---
title: "POST SummaryJournalEntry"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_SummaryJournalEntry/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:12:44.446Z"
---

## Create a summary journal entry

This REST API reference describes how to manually create a summary journal entry. Request and response field descriptions and sample code are provided.

### Requirements

1.The sum of debits must equal the sum of credits in the summary journal entry.

2.The following applies only if you use foreign currency conversion:

-   If you have configured Aggregate transactions with different currencies during a Journal Run to "Yes", the value of the **currency** field must be the same as your tenant's home currency. That is, you must create journal entries using your home currency.
-   All journal entries in an accounting period must either all be aggregated or all be unaggregated. You cannot have a mix of aggregated and unaggregated journal entries in the same accounting period.

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

| accountingPeriodNamerequired | stringName of the accounting period. The open-ended accounting period is named Open-Ended. |
| --- | --- |
| currencyrequired | stringThe type of currency used. Currency must be active. |
| journalEntryDaterequired | string <date>Date of the journal entry. |
| journalEntryItemsrequired | Array of objects (journalEntryItems)Key name that represents the list of journal entry items. |
| notes | stringThe number associated with the revenue event.Character limit: 2,000 |
| organizationLabel | stringName of the organization that the journal entry belongs to.This field is only required when you have already turned on Multi-Org feature. |
| segments | Array of objects (segments)List of segments that apply to the summary journal entry. |
| transferredToAccounting | stringStatus shows whether the journal entry has been transferred to an accounting system.Enum: "No" "Processing" "Yes" "Error" "Ignore" |
| property name*additional property | anyCustom fields of the Journal Entry object. The name of each custom field has the form customField__c. Custom field names are case sensitive. See Custom Fields for more information. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/journal-entries

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "accountingPeriodName": "2020/02",

-   "currency": "USD",

-   "journalEntryDate": "2020-01-20",

-   "journalEntryItems": [

    -   {

        -   "accountingCodeName": "Accounts Receivable",

        -   "amount": 400.9,

        -   "homeCurrencyAmount": 400.9,

        -   "type": "Credit"


        },

    -   {

        -   "accountingCodeName": "Subscription Revenue",

        -   "amount": 400.9,

        -   "homeCurrencyAmount": 400.9,

        -   "type": "Debit"


        }


    ]


}`

Response samples

-   200
-   500
-   4XX

application/json

responseresponse

Copy

`{

-   "journalEntryNumber": "JE-00000001",

-   "success": true


}`
