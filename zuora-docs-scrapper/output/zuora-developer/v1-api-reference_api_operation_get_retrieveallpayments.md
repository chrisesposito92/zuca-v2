---
title: "GET RetrieveAllPayments"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_RetrieveAllPayments/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:01:37.762Z"
---

## List payments

**Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.

Retrieves the information about all payments from all your customer accounts.

### Filtering

You can use query parameters to restrict the data returned in the response. Each query parameter corresponds to one field in the response body.

The `unappliedAmount` or any other query parameter does not support the less than(<) and the greater than(>) operators.

If the value of a filterable field is string, you can set the corresponding query parameter to `null` when filtering. Then, you can get the response data with this field value being `null`.

Examples:

-   /v1/payments?status=Processed

-   /v1/payments?currency=USD&status=Processed

-   /v1/payments?status=Processed&type=External&sort=+number


Security**bearerAuth**

Request

##### query Parameters

| page | integer >= 1Default: 1The index number of the page that you want to retrieve. This parameter is dependent on pageSize. You must set pageSize before specifying page. For example, if you set pageSize to 20 and page to 2, the 21st to 40th records are returned in the response. |
| --- | --- |
| pageSize | integer <= 40Default: 20The number of records returned per page in the response. |
| accountId | stringThis parameter filters the response based on the accountId field. |
| amount | number <double>This parameter filters the response based on the amount field. |
| appliedAmount | number <double>This parameter filters the response based on the appliedAmount field. |
| createdById | stringThis parameter filters the response based on the createdById field. |
| createdDate | string <date-time>This parameter filters the response based on the createdDate field. |
| creditBalanceAmount | number <double>This parameter filters the response based on the creditBalanceAmount field. |
| currency | stringThis parameter filters the response based on the currency field. |
| effectiveDate | string <date-time>This parameter filters the response based on the effectiveDate field. |
| number | stringThis parameter filters the response based on the number field. |
| refundAmount | number <double>This parameter filters the response based on the refundAmount field. |
| status | stringThis parameter filters the response based on the status field.Enum: "Draft" "Processing" "Processed" "Error" "Canceled" "Posted" |
| type | stringThis parameter filters the response based on the type field.Enum: "External" "Electronic" |
| unappliedAmount | number <double>This parameter filters the response based on the unappliedAmount field. |
| updatedById | stringThis parameter filters the response based on the updatedById field. |
| updatedDate | string <date-time>This parameter filters the response based on the updatedDate field. |
| sort | stringThis parameter restricts the order of the data returned in the response. You can use this parameter to supply a dimension you want to sort on.A sortable field uses the following form:operator field_nameYou can use at most two sortable fields in one URL path. Use a comma to separate sortable fields. For example: operator field_name, operator field_nameoperator is used to mark the order of sequencing. The operator is optional. If you only specify the sortable field without any operator, the response data is sorted in descending order by this field.The - operator indicates an ascending order.The + operator indicates a descending order.By default, the response data is displayed in descending order by payment number.field_name indicates the name of a sortable field. The supported sortable fields of this operation are as below:numberaccountIdamountappliedAmountunappliedAmountrefundAmountcreditBalanceAmounteffectiveDatecreatedDatecreatedByIdupdatedDateupdatedByIdExamples:/v1/payments?sort=+number/v1/payments?status=Processed&sort=-number,+amount |

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

get/v1/payments

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/payments?page=1&pageSize=20&accountId=string&amount=0.1&appliedAmount=0.1&createdById=string&createdDate=2019-08-24T14%3A15%3A22Z&creditBalanceAmount=0.1&currency=string&effectiveDate=2019-08-24T14%3A15%3A22Z&number=string&refundAmount=0.1&status=Draft&type=External&unappliedAmount=0.1&updatedById=string&updatedDate=2019-08-24T14%3A15%3A22Z&sort=string' \\
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

-   "payments": [

    -   {

        -   "accountId": "4028905f5a87c0ff015a87d25ae90025",

        -   "accountNumber": "A00000001",

        -   "amount": 44.1,

        -   "appliedAmount": 44.1,

        -   "authTransactionId": null,

        -   "bankIdentificationNumber": null,

        -   "cancelledOn": null,

        -   "comment": "normal payment",

        -   "createdById": "402881e522cf4f9b0122cf5d82860002",

        -   "createdDate": "2017-03-01 11:30:37",

        -   "creditBalanceAmount": 0,

        -   "currency": "USD",

        -   "effectiveDate": "2017-03-01",

        -   "financeInformation": {

            -   "bankAccountAccountingCode": null,

            -   "bankAccountAccountingCodeType": null,

            -   "transferredToAccounting": "No",

            -   "unappliedPaymentAccountingCode": null,

            -   "unappliedPaymentAccountingCodeType": null


            },

        -   "gatewayId": null,

        -   "gatewayOrderId": null,

        -   "gatewayReconciliationReason": null,

        -   "gatewayReconciliationStatus": null,

        -   "gatewayResponse": null,

        -   "gatewayResponseCode": null,

        -   "gatewayState": "NotSubmitted",

        -   "id": "4028905f5a87c0ff015a87eb6b75007f",

        -   "markedForSubmissionOn": null,

        -   "number": "P-00000001",

        -   "paymentGatewayNumber": "PG-00000001",

        -   "paymentMethodId": "402881e522cf4f9b0122cf5dc4020045",

        -   "paymentMethodSnapshotId": null,

        -   "payoutId": null,

        -   "referenceId": null,

        -   "refundAmount": 0,

        -   "secondPaymentReferenceId": null,

        -   "settledOn": null,

        -   "softDescriptor": null,

        -   "softDescriptorPhone": null,

        -   "status": "Processed",

        -   "submittedOn": null,

        -   "type": "External",

        -   "unappliedAmount": 0,

        -   "updatedById": "402881e522cf4f9b0122cf5d82860002",

        -   "updatedDate": "2017-03-01 11:30:37"


        }


    ],

-   "success": true


}`
