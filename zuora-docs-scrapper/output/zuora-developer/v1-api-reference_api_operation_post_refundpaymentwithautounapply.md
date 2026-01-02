---
title: "POST RefundPaymentwithAutoUnapply"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_RefundPaymentwithAutoUnapply/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:02:05.066Z"
---

## Refund a payment with auto-unapplying

**Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.

Refunds a full or partial unapplied payment to your customers, without the need to unapply the payment first, followed by processing the refund. To refund applied payments, you can now leverage this API to unapply and refund the payment simultaneously. For more information on the payment refund use case, see [Payment schedules use cases](https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Schedules/Payment_schedules_use_cases) in the Knowledge Center.

For more information, see [Refund a payment with auto-unapplying](https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Adjust_invoice_amounts/Invoice_Settlement/Unapplied_Payments/Management_of_Unapplied_Payments/Refund_a_payment_with_auto-unapplying).

**Note**: This API operation is available only if you have enabled the enhanced write-off permission for your tenant. Contact [Zuora Global Support](http://support.zuora.com/) to enable this permission.

Security**bearerAuth**

Request

##### path Parameters

| paymentKeyrequired | stringThe unique ID or number of an unapplied payment. For example, 8a8082e65b27f6c3015b89e4344c16b1, or P-00000001. |
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

| comment | string [ 0 .. 255 ] charactersComments about the refund. |
| --- | --- |
| debitMemos | Array of objects (debitMemos)Container for debit memos. The maximum number of debit memos is 1,000. |
| financeInformation | objectContainer for the finance information related to the refund. |
| gatewayOptions | objectThe field used to pass gateway-specific parameters and parameter values. The fields supported by gateways vary. For more information, see the Overview topic of each gateway integration in Zuora Knowledge Center.Zuora sends all the information that you specified to the gateway. If you specify any unsupported gateway option parameters, they will be ignored without error prompts. |
| invoices | Array of objects (invoices)Container for invoices. The maximum number of invoices is 1,000. |
| methodType | stringHow an external refund was issued to a customer. This field is required for an external refund and must be left empty for an electronic refund. You can issue an external refund on an electronic payment.Enum: "ACH" "Cash" "Check" "CreditCard" "PayPal" "WireTransfer" "DebitCard" "CreditCardReferenceTransaction" "BankTransfer" "Other" |
| reasonCode | stringA code identifying the reason for the transaction. The value must be an existing reason code or empty. If you do not specify a value, Zuora uses the default reason code. |
| referenceId | string [ 0 .. 100 ] charactersThe transaction ID returned by the payment gateway for an electronic refund. Use this field to reconcile refunds between your gateway and Zuora Payments. |
| refundDate | string <date>The date when the refund takes effect, in yyyy-mm-dd format. The date of the refund cannot be before the payment date. Specify this field only for external refunds. Zuora automatically generates this field for electronic refunds. |
| secondRefundReferenceId | string [ 0 .. 100 ] charactersThe transaction ID returned by the payment gateway if there is an additional transaction for the refund. Use this field to reconcile payments between your gateway and Zuora Payments. |
| softDescriptor | string <= 35 charactersA payment gateway-specific field that maps to Zuora for the gateways, Orbital, Vantiv and Verifi. |
| softDescriptorPhone | string <= 20 charactersA payment gateway-specific field that maps to Zuora for the gateways, Orbital, Vantiv and Verifi. |
| totalAmount | number <double>The total amount of the refund. If you do not specify a value, Zuora initiates a full refund of the payment amount, which is the sum of the applied and unapplied payment amounts.Full Refund: If the refund amount and debit memo/ invoice are not specified, then the payment will be unapplied completely, followed by processing a full refund.Partial Refund:If the total amount is specified, and the debit memo/invoice is not specified, you can unapply the refund amount from the available debit memo/invoice and refund the unapplied payment to the customer.If the total amount is specified, along with the debit memo and the invoice, you can unapply the applied payments from the mentioned invoices and debit memos, and refund the unapplied payments to customers. |
| typerequired | stringThe type of the refund.Enum: "External" "Electronic" |
| refundTransactionType | stringThe transaction type of the refund.Enum: "Chargeback" "PaymentReversal" |
| writeOff | booleanDefault: falseIndicates whether to write off a document. |
| writeOffOptions | objectContainer for the write-off information to create credit memo. |
| IntegrationId__NS | string <= 255 charactersID of the corresponding object in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| IntegrationStatus__NS | string <= 255 charactersStatus of the refund's synchronization with NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| Origin__NS | string <= 255 charactersOrigin of the corresponding object in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| SyncDate__NS | string <= 255 charactersDate when the refund was synchronized with NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| SynctoNetSuite__NS | string <= 255 charactersSpecifies whether the refund should be synchronized with NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| property name*additional property | anyCustom fields of the Refund object. The name of each custom field has the form customField__c. Custom field names are case sensitive. See Custom Fields for more information. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/payments/{paymentKey}/refunds/unapply

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "type": "Electronic",

-   "totalAmount": 10


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

-   "id": "8a90e4a79310d4b00193196d987670fe",

-   "number": "R-00000289",

-   "status": "Processed",

-   "type": "Electronic",

-   "methodType": "CreditCard",

-   "accountId": "8a90b4488e7d5c0f018e7db3892400b2",

-   "amount": 10,

-   "refundDate": "2024-11-11",

-   "comment": null,

-   "paymentMethodId": "8a90b44890c9bb0d0190d960b9191eea",

-   "paymentMethodSnapshotId": "8a90e4a79310d4b00193196d981370fb",

-   "paymentId": "8a90f26f92f732c70192fb5323d227ad",

-   "paymentNumber": "P-00000394",

-   "creditMemoId": null,

-   "reasonCode": null,

-   "gatewayId": "8a90d6128ddbaf39018de2d9fe0d2660",

-   "paymentGatewayNumber": "PG-00000001",

-   "gatewayResponse": "Approved",

-   "gatewayResponseCode": "OK",

-   "gatewayState": "Submitted",

-   "markedForSubmissionOn": null,

-   "referenceId": "",

-   "secondRefundReferenceId": null,

-   "softDescriptor": null,

-   "softDescriptorPhone": null,

-   "submittedOn": "2024-11-11 12:13:53",

-   "settledOn": null,

-   "cancelledOn": null,

-   "createdDate": "2024-11-11 12:13:52",

-   "createdById": "2c92c8f95e2d6ebb015e325df48e02da",

-   "updatedDate": "2024-11-11 12:14:03",

-   "updatedById": "2c92c8f95e2d6ebb015e325df48e02da",

-   "refundTransactionTime": "2024-11-11 12:13:53",

-   "financeInformation": {

    -   "bankAccountAccountingCode": null,

    -   "bankAccountAccountingCodeType": null,

    -   "unappliedPaymentAccountingCode": null,

    -   "unappliedPaymentAccountingCodeType": null,

    -   "transferredToAccounting": false


    },

-   "gatewayReconciliationStatus": null,

-   "gatewayReconciliationReason": null,

-   "payoutId": null,

-   "writeOff": false,

-   "writeOffResults": null,

-   "success": true


}`
