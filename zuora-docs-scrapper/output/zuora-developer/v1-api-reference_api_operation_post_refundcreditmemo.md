---
title: "POST RefundCreditMemo"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_RefundCreditMemo/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:55:34.994Z"
---

## Refund a credit memo

**Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.

Refunds a full or partial posted credit memo to your customers. Only the amount of unapplied part could be refunded.

You can refund a credit memo only if you have the user permission. See [Billing Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/d_Billing_Roles) for more information.

When you refund a credit memo, the total number of credit memo items to be refunded must be less than or equal to 15,000.

For a use case of this operation, see [Refund processing](https://developer.zuora.com/rest-api/general-concepts/authentication//#Refund-processing).

Security**bearerAuth**

Request

##### path Parameters

| creditMemoKeyrequired | stringThe ID or number of the credit memo. For example, 2c92c8955bd63cc1015bd7c151af02ab or CM00000001. |
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
| customRates | Array of objects (customRates) <= 2 itemsIt contains Home currency and Reporting currency custom rates currencies. The maximum number of items is 2 (you can pass the Home currency item, Reporting currency item, or both).Note:This field is available only if you are on the latest Zuora API version, or you set the Zuora-Version request header to 224.0 or a later version.You cannot set the custom rates, if both the Automatically include additional Currency Conversion information in data source exports option and Fx data feature are enabled. |
| financeInformation | objectContainer for the finance information related to the refund. |
| gatewayId | stringThe ID of the gateway instance that processes the refund. This field can be specified only for electronic refunds. The ID must be a valid gateway instance ID, and this gateway must support the specific payment method.If no gateway ID is specified, the default gateway in the billing account configuration will be used. If no gateway is specified in the billing account, the default gateway of the corresponding tenant will be used. |
| gatewayOptions | objectThe field used to pass gateway-specific parameters and parameter values. |
| items | Array of objects (items)Container for credit memo items. The maximum number of items is 1,000.Note: This field is only available if you have the Invoice Item Settlement feature enabled. Invoice Item Settlement must be used together with other Invoice Settlement features (Unapplied Payments, and Credit and Debit memos). If you wish to enable Invoice Settlement, see Invoice Settlement Enablement and Checklist Guide for more information. |
| methodType | stringHow an external refund was issued to a customer. This field is required for an external refund and must be left empty for an electronic refund. You can issue an external refund on a credit memo.Enum: "ACH" "Cash" "Check" "CreditCard" "PayPal" "WireTransfer" "DebitCard" "CreditCardReferenceTransaction" "BankTransfer" "Other" |
| paymentMethodId | stringThe ID of the payment method used for the refund. This field is required for an electronic refund, and the value must be an electronic payment method ID. This field must be left empty for an external refund. |
| reasonCode | stringA code identifying the reason for the transaction. The value must be an existing reason code or empty. If you do not specify a value, Zuora uses the default reason code. |
| referenceId | string [ 0 .. 100 ] charactersThe transaction ID returned by the payment gateway for an electronic refund. Use this field to reconcile refunds between your gateway and Zuora Payments. |
| refundDate | string <date>The date when the refund takes effect, in yyyy-mm-dd format. The date of the refund cannot be before the credit memo date. Specify this field only for external refunds. Zuora automatically generates this field for electronic refunds. |
| secondRefundReferenceId | string [ 0 .. 100 ] charactersThe transaction ID returned by the payment gateway if there is an additional transaction for the refund. Use this field to reconcile payments between your gateway and Zuora Payments. |
| softDescriptor | string <= 35 charactersA payment gateway-specific field that maps to Zuora for the gateways, Orbital, Vantiv and Verifi. |
| softDescriptorPhone | string <= 20 charactersA payment gateway-specific field that maps to Zuora for the gateways, Orbital, Vantiv and Verifi. |
| totalAmountrequired | number <double>The total amount of the refund. The amount cannot exceed the unapplied amount of the associated credit memo. If the original credit memo was applied to one or more invoices or debit memos, you have to unapply a full or partial credit memo from the invoices or debit memos, and then refund the full or partial unapplied credit memo to your customers. |
| typerequired | stringThe type of the refund.Enum: "External" "Electronic" |
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

post/v1/credit-memos/{creditMemoKey}/refund

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "type": "Electronic",

-   "totalAmount": 10,

-   "paymentMethodId": "8ad084db90a5e73b0190c02783f552fa"


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

-   "id": "8ad0937890e7fca00190e8c290d46fad",

-   "number": "R-00000001",

-   "status": "Processed",

-   "type": "Electronic",

-   "methodType": "CreditCard",

-   "accountId": "8ad09be48db5aba7018db604776d4854",

-   "amount": 10,

-   "refundDate": "2024-07-25",

-   "comment": null,

-   "paymentMethodId": "8ad084db90a5e73b0190c02783f552fa",

-   "paymentMethodSnapshotId": "8ad0937890e7fca00190e8c290b86fab",

-   "paymentId": null,

-   "paymentNumber": null,

-   "creditMemoId": "8ad0835290c4bb2f0190d9955e414e62",

-   "reasonCode": null,

-   "gatewayId": "2c92c0f972bc6aa90172bc77ccaf379a",

-   "paymentGatewayNumber": null,

-   "gatewayResponse": "This transaction has been approved by Test gateway.",

-   "gatewayResponseCode": "approve",

-   "gatewayState": "Submitted",

-   "markedForSubmissionOn": null,

-   "referenceId": "70028533",

-   "secondRefundReferenceId": null,

-   "softDescriptor": null,

-   "softDescriptorPhone": null,

-   "submittedOn": "2024-07-25 00:19:43",

-   "settledOn": null,

-   "cancelledOn": null,

-   "createdDate": "2024-07-25 00:19:43",

-   "createdById": "b243314d594646d3b2651aeedd4be47e",

-   "updatedDate": "2024-07-25 00:19:43",

-   "updatedById": "b243314d594646d3b2651aeedd4be47e",

-   "refundTransactionTime": "2024-07-25 00:19:43",

-   "financeInformation": {

    -   "bankAccountAccountingCode": null,

    -   "bankAccountAccountingCodeType": null,

    -   "unappliedPaymentAccountingCode": "Accounts Receivable",

    -   "unappliedPaymentAccountingCodeType": "AccountsReceivable",

    -   "transferredToAccounting": "No"


    },

-   "gatewayReconciliationStatus": null,

-   "gatewayReconciliationReason": null,

-   "payoutId": null,

-   "success": true


}`
