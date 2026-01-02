---
title: "POST ReconcileRefund"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_ReconcileRefund/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:01:37.938Z"
---

## Reconcile a refund

Reconciles a refund when receiving the gateway reconciliation request or event.

Security**bearerAuth**

Request

##### path Parameters

| refund-keyrequired | stringThe refund number starting with “R-” or the unique refund ID. |
| --- | --- |

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

| action | stringThe action of the refund reconciliation.settle: Sets Gateway State to "Settled" and returns the refund object as response.reject: Sets Gateway State to "FailedToSettle" and handle the event according to the settings configured in the Gateway Reconciliation Configuration in Payments Settings through Zuora UI. See Configure how to handle refund rejected events for details.Enum: "settle" "reject" |
| --- | --- |
| actionDate | string <datetime>The date and time of the refund reconciliation action, in yyyy-mm-dd hh:mm:ss format. |
| gatewayReconciliationReason | stringThe reason of gateway reconciliation. |
| gatewayReconciliationStatus | stringThe status of gateway reconciliation. |
| payoutId | stringThe payout ID of the refund from the gateway side. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/refunds/{refund-key}/reconcile

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "action": "settle",

-   "gatewayReconciliationStatus": "paid"


}`

Response samples

-   200
-   500
-   4XX

application/json

Copy

Expand allCollapse all

`{

-   "id": "8ad083f092d66ff90192dc309ec31b7e",

-   "number": "R-00000025",

-   "status": "Processed",

-   "type": "Electronic",

-   "methodType": "CreditCard",

-   "accountId": "8ad09bce83f1da020183f97e245c1c47",

-   "amount": 55,

-   "refundDate": "2024-10-30",

-   "comment": null,

-   "paymentMethodId": null,

-   "paymentMethodSnapshotId": "8ad083f092d66ff90192dc309e941b7d",

-   "paymentId": "8ad097b48f0b078f018f0df4a6cf2ff4",

-   "paymentNumber": "P-00001536",

-   "creditMemoId": null,

-   "reasonCode": "Other",

-   "gatewayId": "8ad095dd813e750f0181461a8e350ce7",

-   "paymentGatewayNumber": null,

-   "gatewayResponse": "This transaction has been approved by the gateway.",

-   "gatewayResponseCode": "approve",

-   "gatewayState": "Settled",

-   "markedForSubmissionOn": null,

-   "referenceId": 5066779.708498786,

-   "secondRefundReferenceId": null,

-   "softDescriptor": null,

-   "softDescriptorPhone": null,

-   "submittedOn": "2024-10-30 14:50:27",

-   "settledOn": "2024-11-13 16:07:24",

-   "cancelledOn": null,

-   "createdDate": "2024-10-30 14:50:26",

-   "createdById": "8ad084a67f9c7138017fab8a8b511b5a",

-   "updatedDate": "2024-11-13 16:07:24",

-   "updatedById": "8ad084a67f9c7138017fab8a8b511b5a",

-   "refundTransactionTime": "2024-10-30 14:50:27",

-   "financeInformation": {

    -   "bankAccountAccountingCode": null,

    -   "bankAccountAccountingCodeType": null,

    -   "unappliedPaymentAccountingCode": "Accounts Receivable",

    -   "unappliedPaymentAccountingCodeType": "AccountsReceivable",

    -   "transferredToAccounting": "No"


    },

-   "gatewayReconciliationStatus": "paid",

-   "gatewayReconciliationReason": null,

-   "payoutId": null,

-   "success": true


}`
