---
title: "GET Payment"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_Payment/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:02:02.787Z"
---

## Retrieve a payment

**Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.

Retrieves the information about one specific payment.

Security**bearerAuth**

Request

##### path Parameters

| paymentKeyrequired | stringThe unique ID or number of an unapplied payment. For example, 8a8082e65b27f6c3015b89e4344c16b1, or P-00000001. |
| --- | --- |

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

get/v1/payments/{paymentKey}

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/payments/{paymentKey}' \\
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

-   "success": true,

-   "type": "External",

-   "unappliedAmount": 0,

-   "updatedById": "402881e522cf4f9b0122cf5d82860002",

-   "updatedDate": "2017-03-01 11:30:37"


}`
