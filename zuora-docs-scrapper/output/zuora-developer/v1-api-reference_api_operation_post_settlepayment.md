---
title: "POST SettlePayment"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_SettlePayment/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:01:38.598Z"
---

## Settle a payment

If the [Asynchronous Payment Statuses](https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Operations/DA_Electronic_Payment_Processing#Asynchronous_payment_flow) feature is not enabled, this API operation sets the Gateway State field of the payment to `Settled` and returns the Payment object as response.

If the Asynchronous Payment Statuses feature is enabled, for ACH and Bank Transfer payments, this API operation sets the Payment Status field to `Processed` and the Gateway State field to `Settled`.

Security**bearerAuth**

Request

##### path Parameters

| payment-keyrequired | stringThe payment number starting with "P-" or the unique payment ID. |
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

| gatewayReconciliationReason | stringThe reason of gateway reconciliation. |
| --- | --- |
| gatewayReconciliationStatus | stringThe status of gateway reconciliation. |
| payoutId | stringThe payout ID from the gateway side. |
| settledOn | string <date-time>The date and time of the transaction settlement. The format is yyyy-mm-dd hh:mm:ss. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/gateway-settlement/payments/{payment-key}/settle

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "gatewayReconciliationReason": "paid"


}`

Response samples

-   200
-   500
-   4XX

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "id": "8ad097b490c4e5aa0190d937784723b5",

-   "number": "P-00000020",

-   "status": "Processed",

-   "type": "Electronic",

-   "accountId": "8ad09be48db5aba7018db604776d4854",

-   "accountNumber": "A00000097",

-   "amount": 110.5,

-   "appliedAmount": 110.5,

-   "unappliedAmount": 0,

-   "refundAmount": 0,

-   "creditBalanceAmount": 0,

-   "currency": "USD",

-   "effectiveDate": "2024-07-21",

-   "comment": "",

-   "paymentMethodId": "8ad084db90a5e73b0190c02783f552fa",

-   "paymentMethodSnapshotId": "8ad097b490c4e5aa0190d937783e23b4",

-   "authTransactionId": null,

-   "bankIdentificationNumber": "411111",

-   "gatewayId": "2c92c0f972bc6aa90172bc77ccaf379a",

-   "paymentGatewayNumber": null,

-   "gatewayOrderId": null,

-   "gatewayResponse": "This transaction has been approved by Test gateway.",

-   "gatewayResponseCode": "approve",

-   "gatewayState": "Settled",

-   "markedForSubmissionOn": null,

-   "referenceId": "7290220.496916332",

-   "secondPaymentReferenceId": null,

-   "softDescriptor": null,

-   "softDescriptorPhone": null,

-   "submittedOn": "2024-07-21 23:53:29",

-   "settledOn": "2024-07-21 23:54:38",

-   "cancelledOn": null,

-   "createdDate": "2024-07-21 23:53:29",

-   "createdById": "8ad09fc28193c189018194da28be74ba",

-   "updatedDate": "2024-07-21 23:54:38",

-   "updatedById": "b243314d594646d3b2651aeedd4be47e",

-   "financeInformation": {

    -   "bankAccountAccountingCode": null,

    -   "bankAccountAccountingCodeType": null,

    -   "unappliedPaymentAccountingCode": "Accounts Receivable",

    -   "unappliedPaymentAccountingCodeType": "AccountsReceivable",

    -   "transferredToAccounting": false


    },

-   "gatewayReconciliationStatus": null,

-   "gatewayReconciliationReason": "paid",

-   "payoutId": null,

-   "success": true


}`
