---
title: "GET BillingDocuments"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_BillingDocuments/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:53:22.130Z"
---

## List billing documents for an account

Retrieves the information about all billing documents associated with a specified account. The billing documents contain invoices, credit memos, and debit memos.

To retrieve information about credit memos and debit memos, you must have the Invoice Settlement feature enabled.

You can use query parameters to restrict the data returned in the response.

Examples:

-   /billing-documents?accountId=4028905f5e4feb38015e50af9aa002d1&sort=+documentDate
-   /billing-documents?accountId=4028905f5e4feb38015e50af9aa002d1&status=Posted
-   /billing-documents?accountNumber=A00000001&sort=+documentDate
-   /billing-documents?accountNumber=A00000001&status=Posted

Security**bearerAuth**

Request

##### query Parameters

| page | integer >= 1Default: 1The index number of the page that you want to retrieve. This parameter is dependent on pageSize. You must set pageSize before specifying page. For example, if you set pageSize to 20 and page to 2, the 21st to 40th records are returned in the response. |
| --- | --- |
| pageSize | integer <= 40Default: 20The number of records returned per page in the response. |
| accountId | string <uuid>The ID of the customer account that the billing documents are associated with.Note: When retrieving information about all billing documents associated with an account, you must specify either accountId or accountNumber in the query parameters. |
| accountNumber | string <uuid>The number of the customer account that the billing documents are associated with.Note: When retrieving information about all billing documents associated with an account, you must specify either accountId or accountNumber in the query parameters. |
| documentDate | string <date>The date of the billing document. It represents the invoice date for invoices, credit memo date for credit memos, and debit memo date for debit memos. |
| status | stringThe status of the billing document.Enum: "Draft" "Posted" "Canceled" "Error" |
| sort | stringThis parameter restricts the order of the data returned in the response. You can use this parameter to supply a dimension you want to sort on.If you do not specify any sortable field, the response data is sorted by the documentDate field in descending order.A sortable field uses the following form:operator field_nameYou can use at most two sortable fields in one URL path. Use a comma to separate sortable fields. For example: operator field_name, operator field_nameoperator is used to mark the order of sequencing. The operator is optional. If you only specify the sortable field without any operator, the response data is sorted in descending order by this field.The - operator indicates an ascending order.The + operator indicates a descending order.field_name indicates the name of a sortable field. The supported sortable fields of this operation are as below:documentDatedocumentTypeExamples:/billing-documents?accountId=4028905f5e4feb38015e50af9aa002d1 &sort=+documentDate,-documentType/billing-documents?accountId=4028905f5e4feb38015e50af9aa002d1 &status=Posted&sort=+documentDate&page=2&pageSize=15 |

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

get/v1/billing-documents

Request samples

-   Curl

Copy

curl \-X GET \-H "Authorization: Bearer 6d151216ef504f65b8ff6e9e9e8356d3" \-H "Content-Type: application/json" "https://rest.sandbox.eu.zuora.com/v1/billing-documents?accountId=402892c74c9193cd014c91d35b0a0132"

Response samples

-   200
-   500
-   4XX

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "documents": [

    -   {

        -   "accountId": "4028905f5e4feb38bbb50af9aa002d1",

        -   "accountNumber": "A00000001",

        -   "amount": 100,

        -   "balance": 90,

        -   "documentDate": "2017-10-01",

        -   "documentNumber": "INV-0000001",

        -   "documentType": "Invoice",

        -   "id": "4028905f5e4jjj015e50af9aa002d1",

        -   "status": "Posted",

        -   "currency": "USD"


        },

    -   {

        -   "accountId": "4028905f5e4feb38b111b50af9aa002d1",

        -   "accountNumber": "A00000001",

        -   "amount": 100,

        -   "balance": 90,

        -   "documentDate": "2017-09-01",

        -   "documentNumber": "CM-0000001",

        -   "documentType": "CreditMemo",

        -   "id": "4028905f5e4jbbb015e50af9aa002d1",

        -   "status": "Posted",

        -   "currency": "USD"


        },

    -   {

        -   "accountId": "4028905f5e4feb3833b50af9aa002d1",

        -   "accountNumber": "A00000001",

        -   "amount": 100,

        -   "balance": 90,

        -   "documentDate": "2017-07-01",

        -   "documentNumber": "DM-0000001",

        -   "documentType": "DebitMemo",

        -   "id": "4028905f5e4jccc015e50af9aa002d1",

        -   "status": "Posted",

        -   "currency": "USD"


        }


    ],

-   "success": true


}`
