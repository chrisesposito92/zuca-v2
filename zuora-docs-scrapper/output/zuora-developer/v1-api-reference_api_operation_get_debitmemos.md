---
title: "GET DebitMemos"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_DebitMemos/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:56:05.336Z"
---

## List debit memos

**Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.

Retrieves the information about all debit memos associated with all customer accounts.

### Filtering

You can use query parameters to restrict the data returned in the response. Each query parameter corresponds to one field in the response body.

If the value of a filterable field is string, you can set the corresponding query parameter to `null` when filtering. Then, you can get the response data with this field value being `null`.

Examples:

-   /v1/debit-memos?status=Posted

-   /v1/debit-memos?referredInvoiceId=null&status=Draft

-   /v1/debit-memos?status=Posted&type=External&sort=+number


Security**bearerAuth**

Request

##### query Parameters

| page | integer >= 1Default: 1The index number of the page that you want to retrieve. This parameter is dependent on pageSize. You must set pageSize before specifying page. For example, if you set pageSize to 20 and page to 2, the 21st to 40th records are returned in the response. |
| --- | --- |
| pageSize | integer <= 40Default: 20The number of records returned per page in the response. |
| accountId | stringThis parameter filters the response based on the accountId field. |
| accountNumber | stringThis parameter filters the response based on the accountNumber field. |
| amount | number <double>This parameter filters the response based on the amount field. |
| balance | number <double>This parameter filters the response based on the balance field. |
| beAppliedAmount | number <double>This parameter filters the response based on the beAppliedAmount field. |
| createdById | stringThis parameter filters the response based on the createdById field. |
| createdDate | string <date-time>This parameter filters the response based on the createdDate field. |
| currency | stringThis parameter filters the response based on the currency field. |
| debitMemoDate | string <date>This parameter filters the response based on the debitMemoDate field. |
| dueDate | string <date>This parameter filters the response based on the dueDate field. |
| number | stringThis parameter filters the response based on the number field. |
| referredInvoiceId | stringThis parameter filters the response based on the referredInvoiceId field. |
| status | stringThis parameter filters the response based on the status field.Enum: "Draft" "Posted" "Canceled" "Error" "PendingForTax" "Generating" "CancelInProgress" |
| targetDate | string <date>This parameter filters the response based on the targetDate field. |
| taxAmount | number <double>This parameter filters the response based on the taxAmount field. |
| totalTaxExemptAmount | number <double>This parameter filters the response based on the totalTaxExemptAmount field. |
| updatedById | stringThis parameter filters the response based on the updatedById field. |
| updatedDate | string <date-time>This parameter filters the response based on the updatedDate field. |
| sort | stringThis parameter restricts the order of the data returned in the response. You can use this parameter to supply a dimension you want to sort on.A sortable field uses the following form:operator field_nameYou can use at most two sortable fields in one URL path. Use a comma to separate sortable fields. For example: operator field_name, operator field_nameoperator is used to mark the order of sequencing. The operator is optional. If you only specify the sortable field without any operator, the response data is sorted in descending order by this field.The - operator indicates an ascending order.The + operator indicates a descending order.By default, the response data is displayed in descending order by debit memo number.field_name indicates the name of a sortable field. The supported sortable fields of this operation are as below:numberaccountIddebitMemoDatetargetDatedueDateamounttaxAmounttotalTaxExemptAmountbalancebeAppliedAmountreferredInvoiceIdcreatedDatecreatedByIdupdatedDateupdatedByIdExamples:/v1/debit-memos?sort=+number/v1/debit-memos?status=Processed&sort=-number,+amount |

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

get/v1/debit-memos

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/debit-memos?page=1&pageSize=20&accountId=string&accountNumber=string&amount=0.1&balance=0.1&beAppliedAmount=0.1&createdById=string&createdDate=2019-08-24T14%3A15%3A22Z&currency=string&debitMemoDate=2019-08-24&dueDate=2019-08-24&number=string&referredInvoiceId=string&status=Draft&targetDate=2019-08-24&taxAmount=0.1&totalTaxExemptAmount=0.1&updatedById=string&updatedDate=2019-08-24T14%3A15%3A22Z&sort=string' \\
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

-   "debitmemos": [

    -   {

        -   "accountId": "402890555a7e9791015a7f15fe44001c",

        -   "accountNumber": "AN_1679649466484",

        -   "amount": 50,

        -   "autoPay": true,

        -   "balance": 50,

        -   "beAppliedAmount": 0,

        -   "billToContactId": null,

        -   "billToContactSnapshotId": null,

        -   "cancelledById": null,

        -   "cancelledOn": null,

        -   "comment": "the comment",

        -   "createdById": "402881e522cf4f9b0122cf5d82860002",

        -   "createdDate": "2017-03-01 17:24:14",

        -   "currency": "USD",

        -   "debitMemoDate": "2017-10-17",

        -   "dueDate": "2017-11-16",

        -   "einvoiceErrorCode": null,

        -   "einvoiceErrorMessage": null,

        -   "einvoiceFileId": null,

        -   "einvoiceStatus": "Processing",

        -   "id": "402890555a87d7f5015a892f2ba10057",

        -   "invoiceGroupNumber": "N-0001",

        -   "latestPDFFileId": "402890555a87d7f5015a892f2c5c0060",

        -   "number": "DM00000006",

        -   "paymentTerm": null,

        -   "postedById": null,

        -   "postedOn": null,

        -   "reasonCode": "Correcting invoice error",

        -   "referredInvoiceId": null,

        -   "sequenceSetId": null,

        -   "sourceType": "Standalone",

        -   "status": "Draft",

        -   "targetDate": null,

        -   "taxAmount": 0,

        -   "taxMessage": null,

        -   "taxStatus": "Complete",

        -   "totalTaxExemptAmount": 0,

        -   "transferredToAccounting": "No",

        -   "updatedById": "402881e522cf4f9b0122cf5d82860002",

        -   "updatedDate": "2017-03-01 17:24:14"


        },

    -   {

        -   "accountId": "402890555a7d4022015a7dabf5f60088",

        -   "accountNumber": "AN_1679649466488",

        -   "amount": 0.01,

        -   "autoPay": true,

        -   "balance": 0.01,

        -   "beAppliedAmount": 0,

        -   "billToContactId": null,

        -   "billToContactSnapshotId": null,

        -   "cancelledById": null,

        -   "cancelledOn": null,

        -   "comment": "the comment",

        -   "createdById": "402881e522cf4f9b0122cf5d82860002",

        -   "createdDate": "2017-03-01 17:13:15",

        -   "currency": "USD",

        -   "debitMemoDate": "2017-11-30",

        -   "dueDate": "2017-12-30",

        -   "einvoiceErrorCode": null,

        -   "einvoiceErrorMessage": null,

        -   "einvoiceFileId": null,

        -   "einvoiceStatus": "Processing",

        -   "id": "402890555a87d7f5015a89251edc0045",

        -   "invoiceGroupNumber": "N-0001",

        -   "latestPDFFileId": "ac1ebc24569sd",

        -   "number": "DM00000003",

        -   "paymentTerm": null,

        -   "postedById": null,

        -   "postedOn": null,

        -   "reasonCode": "Charge Dispute",

        -   "referredInvoiceId": "402890555a7d4022015a7dadb3b300a4",

        -   "sequenceSetId": null,

        -   "sourceType": "Standalone",

        -   "status": "Draft",

        -   "targetDate": null,

        -   "taxAmount": 0.01,

        -   "taxMessage": null,

        -   "taxStatus": "Complete",

        -   "totalTaxExemptAmount": 0,

        -   "transferredToAccounting": "No",

        -   "updatedById": "402881e522cf4f9b0122cf5d82860002",

        -   "updatedDate": "2017-03-01 17:13:15"


        },

    -   {

        -   "accountId": "402890555a7d4022015a7dabf5f60088",

        -   "accountNumber": "AN_1679649466488",

        -   "amount": 9,

        -   "autoPay": true,

        -   "balance": 9,

        -   "beAppliedAmount": 0,

        -   "billToContactId": null,

        -   "billToContactSnapshotId": null,

        -   "cancelledById": null,

        -   "cancelledOn": null,

        -   "comment": "",

        -   "createdById": "402881e522cf4f9b0122cf5d82860002",

        -   "createdDate": "2017-03-01 17:01:00",

        -   "currency": "USD",

        -   "debitMemoDate": "2017-03-01",

        -   "dueDate": "2017-03-31",

        -   "einvoiceErrorCode": null,

        -   "einvoiceErrorMessage": null,

        -   "einvoiceFileId": null,

        -   "einvoiceStatus": "Processing",

        -   "id": "402890555a87d7f5015a8919e4fe002e",

        -   "invoiceGroupNumber": "N-0001",

        -   "latestPDFFileId": "402890555a87d7f5015a8919e95d003a",

        -   "number": "DM00000002",

        -   "paymentTerm": null,

        -   "postedById": null,

        -   "postedOn": null,

        -   "reasonCode": "Correcting invoice error",

        -   "referredCreditMemoId": "1a2b3c4d5e6f",

        -   "referredInvoiceId": "402890555a7d4022015a7dadb3b300a4",

        -   "sequenceSetId": null,

        -   "sourceType": "Standalone",

        -   "status": "Draft",

        -   "targetDate": null,

        -   "taxAmount": 8,

        -   "taxMessage": null,

        -   "taxStatus": "Complete",

        -   "totalTaxExemptAmount": 0,

        -   "transferredToAccounting": "No",

        -   "updatedById": "402881e522cf4f9b0122cf5d82860002",

        -   "updatedDate": "2017-03-01 17:01:00"


        },

    -   {

        -   "accountId": "402890555a7e9791015a7f15fe44001c",

        -   "accountNumber": "AN_1679649466684",

        -   "amount": 8.02,

        -   "autoPay": true,

        -   "balance": 8.02,

        -   "beAppliedAmount": 0,

        -   "billToContactId": null,

        -   "billToContactSnapshotId": null,

        -   "cancelledById": null,

        -   "cancelledOn": null,

        -   "comment": "",

        -   "createdById": "402881e522cf4f9b0122cf5d82860002",

        -   "createdDate": "2017-03-01 10:26:16",

        -   "currency": "USD",

        -   "debitMemoDate": "2017-03-01",

        -   "dueDate": "2017-03-31",

        -   "einvoiceErrorCode": null,

        -   "einvoiceErrorMessage": null,

        -   "einvoiceFileId": null,

        -   "einvoiceStatus": "Processing",

        -   "id": "402890555a7e9791015a87b082940067",

        -   "invoiceGroupNumber": "N-0001",

        -   "latestPDFFileId": "402890555a7e9791015a87b083f00072",

        -   "number": "DM00000001",

        -   "paymentTerm": null,

        -   "postedById": null,

        -   "postedOn": null,

        -   "reasonCode": "Correcting invoice error",

        -   "referredCreditMemoId": "1a2b3c4d5e6f",

        -   "referredInvoiceId": "402890555a7e9791015a7f1756aa0035",

        -   "sequenceSetId": null,

        -   "sourceType": "Standalone",

        -   "status": "Draft",

        -   "targetDate": null,

        -   "taxAmount": 0.02,

        -   "taxMessage": null,

        -   "taxStatus": "Complete",

        -   "totalTaxExemptAmount": 0,

        -   "transferredToAccounting": "No",

        -   "updatedById": "402881e522cf4f9b0122cf5d82860002",

        -   "updatedDate": "2017-03-01 10:45:03"


        }


    ],

-   "success": true


}`
