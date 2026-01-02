---
title: "GET CreditMemos"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_CreditMemos/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:54:44.069Z"
---

## List credit memos

**Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.

Retrieves the information about all credit memos.

For a use case of this operation, see [Get credit memo](https://developer.zuora.com/rest-api/general-concepts/authentication//#Get-credit-memo).

### Filtering

You can use query parameters to restrict the data returned in the response. Each query parameter corresponds to one field in the response body.

If the value of a filterable field is string, you can set the corresponding query parameter to `null` when filtering. Then, you can get the response data with this field value being `null`.

Examples:

-   /v1/credit-memos?status=Posted

-   /v1/credit-memos?referredInvoiceId=null&status=Draft

-   /v1/credit-memos?status=Posted&type=External&sort=+number


Security**bearerAuth**

Request

##### query Parameters

| page | integer >= 1Default: 1The index number of the page that you want to retrieve. This parameter is dependent on pageSize. You must set pageSize before specifying page. For example, if you set pageSize to 20 and page to 2, the 21st to 40th records are returned in the response. |
| --- | --- |
| pageSize | integer <= 40Default: 20The number of records returned per page in the response. |
| accountId | stringThis parameter filters the response based on the accountId field. |
| accountNumber | stringThis parameter filters the response based on the accountNumber field. |
| amount | number <double>This parameter filters the response based on the amount field. |
| appliedAmount | number <double>This parameter filters the response based on the appliedAmount field. |
| autoApplyUponPosting | booleanThis parameter filters the response based on the autoApplyUponPosting field. |
| createdById | stringThis parameter filters the response based on the createdById field. |
| createdDate | string <date-time>This parameter filters the response based on the createdDate field. |
| creditMemoDate | string <date>This parameter filters the response based on the creditMemoDate field. |
| currency | stringThis parameter filters the response based on the currency field. |
| excludeFromAutoApplyRules | booleanThis parameter filters the response based on the excludeFromAutoApplyRules field. |
| number | stringThis parameter filters the response based on the number field. |
| referredInvoiceId | stringThis parameter filters the response based on the referredInvoiceId field. |
| refundAmount | number <double>This parameter filters the response based on the refundAmount field. |
| sourceId | stringThis parameter filters the response based on the sourceId field. |
| status | stringThis parameter filters the response based on the status field.Enum: "Draft" "Posted" "Canceled" "Error" "PendingForTax" "Generating" "CancelInProgress" |
| targetDate | string <date>This parameter filters the response based on the targetDate field. |
| taxAmount | number <double>This parameter filters the response based on the taxAmount field. |
| totalTaxExemptAmount | number <double>This parameter filters the response based on the totalTaxExemptAmount field. |
| transferredToAccounting | stringThis parameter filters the response based on the transferredToAccounting field.Enum: "Processing" "Yes" "No" "Error" "Ignore" |
| unappliedAmount | number <double>This parameter filters the response based on the unappliedAmount field. |
| updatedById | stringThis parameter filters the response based on the updatedById field. |
| updatedDate | string <date-time>This parameter filters the response based on the updatedDate field. |
| sort | stringThis parameter restricts the order of the data returned in the response. You can use this parameter to supply a dimension you want to sort on.A sortable field uses the following form:operator field_nameYou can use at most two sortable fields in one URL path. Use a comma to separate sortable fields. For example: operator field_name, operator field_nameoperator is used to mark the order of sequencing. The operator is optional. If you only specify the sortable field without any operator, the response data is sorted in descending order by this field.The - operator indicates an ascending order.The + operator indicates a descending order.By default, the response data is displayed in descending order by credit memo number.field_name indicates the name of a sortable field. The supported sortable fields of this operation are as below:accountIdamountappliedAmountcreatedByIdcreatedDatecreditMemoDatenumberreferredInvoiceIdrefundAmountstatustargetDatetaxAmounttotalTaxExemptAmounttransferredToAccountingunappliedAmountupdatedDateExamples:/v1/credit-memos?sort=+number/v1/credit-memos?status=Processed&sort=-number,+amount |

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

get/v1/credit-memos

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/credit-memos?page=1&pageSize=20&accountId=string&accountNumber=string&amount=0.1&appliedAmount=0.1&autoApplyUponPosting=true&createdById=string&createdDate=2019-08-24T14%3A15%3A22Z&creditMemoDate=2019-08-24&currency=string&excludeFromAutoApplyRules=true&number=string&referredInvoiceId=string&refundAmount=0.1&sourceId=string&status=Draft&targetDate=2019-08-24&taxAmount=0.1&totalTaxExemptAmount=0.1&transferredToAccounting=Processing&unappliedAmount=0.1&updatedById=string&updatedDate=2019-08-24T14%3A15%3A22Z&sort=string' \\
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

-   "creditmemos": [

    -   {

        -   "accountId": "2c92c8f95bd63b98015bd7ab09ef0926",

        -   "accountNumber": "A00000001",

        -   "amount": 23,

        -   "appliedAmount": 0,

        -   "autoApplyUponPosting": false,

        -   "billToContactId": null,

        -   "billToContactSnapshotId": null,

        -   "cancelledById": null,

        -   "cancelledOn": null,

        -   "comment": "",

        -   "createdById": "2c92c8f95b79c9ad015b80614273052c",

        -   "createdDate": "2017-05-05 01:39:30",

        -   "creditMemoDate": "2017-05-05",

        -   "currency": "USD",

        -   "einvoiceErrorCode": null,

        -   "einvoiceErrorMessage": null,

        -   "einvoiceFileId": null,

        -   "einvoiceStatus": "Processing",

        -   "excludeFromAutoApplyRules": false,

        -   "id": "2c92c8f95bd63b94015bd7c39289112e",

        -   "invoiceGroupNumber": "N-0001",

        -   "latestPDFFileId": "2c92c8955bd63b6c015bd7c395e90023",

        -   "number": "CM00000002",

        -   "postedById": null,

        -   "postedOn": null,

        -   "reasonCode": "Correcting invoice error",

        -   "referredInvoiceId": null,

        -   "refundAmount": 0,

        -   "reversed": false,

        -   "sequenceSetId": null,

        -   "source": "BillRun",

        -   "sourceId": "BR-00000024",

        -   "sourceType": "Standalone",

        -   "status": "Draft",

        -   "targetDate": null,

        -   "taxAmount": 0,

        -   "taxMessage": null,

        -   "taxStatus": "Complete",

        -   "totalTaxExemptAmount": 0,

        -   "transferredToAccounting": "No",

        -   "unappliedAmount": 23,

        -   "updatedById": "2c92c8f95b79c9ad015b80614273052c",

        -   "updatedDate": "2017-05-05 01:39:30"


        },

    -   {

        -   "accountId": "2c92c8f95bd63b98015bd7ab09ef0926",

        -   "accountNumber": "A00000001",

        -   "amount": 10,

        -   "appliedAmount": 0,

        -   "autoApplyUponPosting": false,

        -   "billToContactId": null,

        -   "billToContactSnapshotId": null,

        -   "cancelledById": null,

        -   "cancelledOn": null,

        -   "comment": "",

        -   "createdById": "2c92c8f95b79c9ad015b80614273052c",

        -   "createdDate": "2017-05-05 01:15:23",

        -   "creditMemoDate": "2017-05-01",

        -   "currency": "USD",

        -   "einvoiceErrorCode": null,

        -   "einvoiceErrorMessage": null,

        -   "einvoiceFileId": null,

        -   "einvoiceStatus": "Processing",

        -   "excludeFromAutoApplyRules": false,

        -   "id": "2c92c8f95bd63b9d015bd7ad7fe206f9",

        -   "invoiceGroupNumber": "N-0001",

        -   "latestPDFFileId": "2c92c8955bd63b6c015bd7ad8921001d",

        -   "number": "CM00000001",

        -   "postedById": null,

        -   "postedOn": null,

        -   "reasonCode": "Correcting invoice error",

        -   "referredInvoiceId": "2c92c8955bd63cc1015bd7c151af02ab",

        -   "refundAmount": 0,

        -   "reversed": false,

        -   "sequenceSetId": null,

        -   "source": "AdhocFromInvoice",

        -   "sourceId": null,

        -   "sourceType": "Standalone",

        -   "status": "Draft",

        -   "targetDate": null,

        -   "taxAmount": 0,

        -   "taxMessage": null,

        -   "taxStatus": "Complete",

        -   "totalTaxExemptAmount": 0,

        -   "transferredToAccounting": "No",

        -   "unappliedAmount": 10,

        -   "updatedById": "2c92c8f95b79c9ad015b80614273052c",

        -   "updatedDate": "2017-05-05 01:15:24"


        }


    ],

-   "success": true


}`
