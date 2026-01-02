---
title: "QuerySubscriptions"
url: "https://developer.zuora.com/v1-api-reference/api/operation/querySubscriptions/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:10:26.127Z"
---

## List subscriptions

Lists Subscription objects. You can use the query parameters to filter, expand, and sort the returned results.

Security**bearerAuth**

Request

##### query Parameters

| pageSize | integer [ 1 .. 99 ]Default: 10The maximum number of results to return in a single page. If the specified pageSize is less than 1 or greater than 99, Zuora will return a 400 error. |
| --- | --- |
| cursor | stringA cursor for use in pagination. A cursor defines the starting place in a list. For instance, if you make a list request and receive 100 objects, ending with next_page=W3sib3JkZXJ=, your subsequent call can include cursor=W3sib3JkZXJ= in order to fetch the next page of the list. |
| sort[] | Array of stringsA case-insensitive query parameter that specifies the sort order of the list, which can be either ascending (e.g. accountnumber.ASC) or descending (e.g. accountnumber.DESC). You cannot sort on properties in arrays. If the array-type properties are specified for the sort[] parameter, they are ignored. Supported sortable fields:idupdateddateaccountidcontracteffectivedatecreatoraccountidcreatorinvoiceowneridinvoiceowneridnameoriginalidprevioussubscriptionidrenewaltermstatusislatestversionsubscriptionversionamendmentidtermenddatetermstartdateversioncmrrexternallymanagedbyinvoicescheduleid |
| expand[] | Array of stringsAllows you to expand responses by including related object information in a single call.Items Enum: "account" "invoiceowner" "billtocontact" "invoiceitems" "rateplans" "rateplans.rateplancharges" "rateplans.rateplancharges.rateplanchargetiers" "account.billto" "account.soldto" "account.paymentmethods" "order" |
| filter[] | Array of stringsA case-insensitive filter on the list.Supported filterable fields:idupdateddateaccountidcontracteffectivedatecreatoraccountidcreatorinvoiceowneridinvoiceowneridnameoriginalidprevioussubscriptionidrenewaltermstatusislatestversionsubscriptionversionamendmentidtermenddatetermstartdateversioncmrrexternallymanagedbyinvoicescheduleidquotenumber__qt{indexedcustomfield}: Use the format like customField__c to filter on custom fields. |
| fields[] | Array of stringsA case-insensitive query parameter that allows you to specify which fields are returned in the response.Example: fields[]=id,createddate |
| includeNullFields | booleanDefault: falseSpecifies whether to include fields with the null value in the response.If set to true, all fields will be returned in the response, including those with the null value.If set to false, only fields with non-null values will be returned. |

##### header Parameters

| Idempotency-Key | string <= 255 charactersSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types.With this header specified, the Zuora server can identify subsequent retries of the same request using this value, which prevents the same operation from being performed multiple times by accident. |
| --- | --- |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

Responses

200

OK

500

Internal server error

4XX

Invalid input

get/object-query/subscriptions

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/object-query/subscriptions?pageSize=10&cursor=string&sort%5B%5D=string&expand%5B%5D=account&filter%5B%5D=string&fields%5B%5D=string&includeNullFields=false' \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
  \-H 'Idempotency-Key: string' \\
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

-   "nextPage": "W3sidmFsdWUiOiIyMDI1LTAyLTA2VDIzOjA5OjExLTA4OjAwIiwib3JkZXJCeSI6eyJmaWVsZCI6IlVwZGF0ZWREYXRlIiwib3JkZXIiOiJERVNDIn19LHsidmFsdWUiOiJmOTRmNmVhOWQ4Nzk0ZGE5Mzg2NGRmM2RiODk4MTcxYyIsIm9yZGVyQnkiOnsiZmllbGQiOiJJZCIsIm9yZGVyIjoiREVTQyJ9fV0=",

-   "data": [

    -   {

        -   "accountId": "2c92c0f87270a5970172747e289a5e66",

        -   "autoRenew": true,

        -   "cMRR": 2950,

        -   "contractAcceptanceDate": "2025-02-01",

        -   "contractEffectiveDate": "2025-02-01",

        -   "createdById": "2c92c0f972a852360172bbe22ac551b6",

        -   "createdDate": "2025-03-25T06:26:14-07:00",

        -   "creatorAccountId": "2c92c0f87270a5970172747e289a5e66",

        -   "creatorInvoiceOwnerId": "2c92c0f87270a5970172747e289a5e66",

        -   "currency": "USD",

        -   "currentTerm": 12,

        -   "currentTermPeriodType": "Month",

        -   "id": "f94fb52490e95cd65925cd7b737400bd",

        -   "initialTerm": 12,

        -   "initialTermPeriodType": "Month",

        -   "invoiceOwnerId": "2c92c0f87270a5970172747e289a5e66",

        -   "isInvoiceSeparate": true,

        -   "isLatestVersion": true,

        -   "isSingleVersioned": false,

        -   "lastBookingDate": "2025-02-01",

        -   "name": "A-S00000159",

        -   "orderId": "f94fb52490e95cd65925cd7b733100b6",

        -   "originalCreatedDate": "2025-03-25T06:26:14-07:00",

        -   "originalId": "f94fb52490e95cd65925cd7b737400bd",

        -   "prepayment": false,

        -   "renewalSetting": "RENEW_WITH_SPECIFIC_TERM",

        -   "renewalTerm": 12,

        -   "renewalTermPeriodType": "Month",

        -   "revision": "1.0",

        -   "serviceActivationDate": "2025-02-01",

        -   "status": "Active",

        -   "subscriptionEndDate": "2026-02-01",

        -   "subscriptionStartDate": "2025-02-01",

        -   "subscriptionVersionAmendmentId": "f94fb52490e95cd65925cd7b733100b7",

        -   "termEndDate": "2026-02-01",

        -   "termStartDate": "2025-02-01",

        -   "termType": "TERMED",

        -   "updatedById": "2c92c0f972a852360172bbe22ac551b6",

        -   "updatedDate": "2025-03-25T06:26:14-07:00",

        -   "version": 1


        }


    ]


}`
