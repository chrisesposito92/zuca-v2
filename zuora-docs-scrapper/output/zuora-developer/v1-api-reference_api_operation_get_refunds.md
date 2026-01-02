---
title: "GET Refunds"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_Refunds/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:03:24.976Z"
---

## List refunds

**Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.

Retrieves the information about all refunds. Two types of refunds are available, electronic refunds and external refunds.

### Filtering

You can use query parameters to restrict the data returned in the response. Each query parameter corresponds to one field in the response body.

If the value of a filterable field is string, you can set the corresponding query parameter to `null` when filtering. Then, you can get the response data with this field value being `null`.

Examples:

-   /v1/refunds?status=Processed

-   /v1/refunds?amount=4&status=Processed

-   /v1/refunds?status=Processed&type=External&sort=+number


Security**bearerAuth**

Request

##### query Parameters

| page | integer >= 1Default: 1The index number of the page that you want to retrieve. This parameter is dependent on pageSize. You must set pageSize before specifying page. For example, if you set pageSize to 20 and page to 2, the 21st to 40th records are returned in the response. |
| --- | --- |
| pageSize | integer <= 40Default: 20The number of records returned per page in the response. |
| accountId | stringThis parameter filters the response based on the accountId field. |
| amount | number <double>This parameter filters the response based on the amount field. |
| createdById | stringThis parameter filters the response based on the createdById field. |
| createdDate | string <date-time>This parameter filters the response based on the createdDate field. |
| methodType | stringThis parameter filters the response based on the methodType field.Enum: "ACH" "Cash" "Check" "CreditCard" "PayPal" "WireTransfer" "DebitCard" "CreditCardReferenceTransaction" "BankTransfer" "Other" |
| number | stringThis parameter filters the response based on the number field. |
| paymentId | stringThis parameter filters the response based on the paymentId field. |
| refundDate | string <date>This parameter filters the response based on the refundDate field. |
| status | stringThis parameter filters the response based on the status field.Enum: "Processed" "Canceled" "Error" "Processing" |
| type | stringThis parameter filters the response based on the type field.Enum: "External" "Electronic" |
| updatedById | stringThis parameter filters the response based on the updatedById field. |
| updatedDate | string <date-time>This parameter filters the response based on the updatedDate field. |
| sort | stringThis parameter restricts the order of the data returned in the response. You can use this parameter to supply a dimension you want to sort on.A sortable field uses the following form:operator field_nameYou can use at most two sortable fields in one URL path. Use a comma to separate sortable fields. For example: operator field_name, operator field_nameoperator is used to mark the order of sequencing. The operator is optional. If you only specify the sortable field without any operator, the response data is sorted in descending order by this field.The - operator indicates an ascending order.The + operator indicates a descending order.By default, the response data is displayed in descending order by refund number.field_name indicates the name of a sortable field. The supported sortable fields of this operation are as below:numberaccountIdamountrefundDatepaymentIdcreatedDatecreatedByIdupdatedDateupdatedByIdExamples:/v1/refunds?sort=+number/v1/refunds?status=Processed&sort=-number,+amount |

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

get/v1/refunds

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/refunds?page=1&pageSize=20&accountId=string&amount=0.1&createdById=string&createdDate=2019-08-24T14%3A15%3A22Z&methodType=ACH&number=string&paymentId=string&refundDate=2019-08-24&status=Processed&type=External&updatedById=string&updatedDate=2019-08-24T14%3A15%3A22Z&sort=string' \\
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

-   "refunds": [

    -   {

        -   "accountId": "4028905f5a87c0ff015a87d25ae90025",

        -   "amount": 4,

        -   "cancelledOn": null,

        -   "comment": "update comment",

        -   "createdById": "402881e522cf4f9b0122cf5d82860002",

        -   "createdDate": "2017-03-01 14:46:03",

        -   "creditMemoId": null,

        -   "financeInformation": {

            -   "bankAccountAccountingCode": null,

            -   "bankAccountAccountingCodeType": null,

            -   "transferredToAccounting": "No",

            -   "unappliedPaymentAccountingCode": null,

            -   "unappliedPaymentAccountingCodeType": null


            },

        -   "gatewayId": null,

        -   "gatewayReconciliationReason": null,

        -   "gatewayReconciliationStatus": null,

        -   "gatewayResponse": null,

        -   "gatewayResponseCode": null,

        -   "gatewayState": "NotSubmitted",

        -   "id": "4028905f5a87c0ff015a889e590e00c9",

        -   "markedForSubmissionOn": null,

        -   "methodType": "CreditCard",

        -   "number": "R-00000001",

        -   "paymentId": "4028905f5a87c0ff015a889ddfb800c0",

        -   "paymentMethodId": null,

        -   "paymentMethodSnapshotId": null,

        -   "payoutId": null,

        -   "reasonCode": "Standard Refund",

        -   "referenceId": null,

        -   "refundDate": "2017-03-01",

        -   "refundTransactionTime": null,

        -   "secondRefundReferenceId": null,

        -   "settledOn": null,

        -   "softDescriptor": null,

        -   "softDescriptorPhone": null,

        -   "status": "Processed",

        -   "submittedOn": null,

        -   "type": "External",

        -   "updatedById": "402881e522cf4f9b0122cf5d82860002",

        -   "updatedDate": "2017-03-01 16:56:41"


        }


    ],

-   "success": true


}`
