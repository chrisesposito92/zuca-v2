---
title: "POST DebitMemoCollect"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_DebitMemoCollect/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:56:30.351Z"
---

## Collect a posted debit memo

**Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.

This API operation provides an easy way to let the client-side to collect an existing posted debit memo. It supports the following steps:

1.  Apply unapplied credit memos to the posted debit memo by Oldest-First-Largest-First rule if there are more than one unapplied credit memos.
2.  Apply unapplied payments to the posted debit memo by Oldest-First-Largest-First rule if there are more than one unapplied payments.
3.  Process payment to the posted debit memo if there is an open-balance on it.

**Restrictions**

Since this API will do lots of works, and some of them are resource consuming, we need to restrict the usage of this API by the following conditions:

1.  If the target debit memo gets more than 10 debit memo items, the request will be rejected.
2.  If `CreditMemo` is specified in `applicationOrder`, when there are more than 25 credit memos will be used to apply to the debit memo, the request will be rejected.
3.  If `CreditMemo` is specified in `applicationOrder`, when there are more than 100 credit memo items will be used to apply to the debit memo, the request will be rejected.
4.  If `UnappliedPayment` is specified in `applicationOrder`, when there are more than 25 payments will be used to apply to the debit memo, the request will be rejected.

Security**bearerAuth**

Request

##### path Parameters

| debitMemoKeyrequired | stringThe ID or number of a posted debit memo. For example, 8a8082e65b27f6c3015ba419f3c2644e. |
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

| applicationOrder | Array of stringsThe priority order to apply credit memos and/or unapplied payments to the debit memo. Possible item values are: CreditMemo, UnappliedPayment.Note:This field is valid only if the applyCredit field is set to true.If no value is specified for this field, the default priority order is used, ["CreditMemo", "UnappliedPayment"], to apply credit memos first and then apply unapplied payments.If only one item is specified, only the items of the spedified type are applied to invoices. For example, if the value is ["CreditMemo"], only credit memos are used to apply the debit memo. |
| --- | --- |
| applyCredit | booleanDefault: falseWhether to automatically apply credit memos or unapplied payments, or both to the debit memo. If the value is true, the credit memo or unapplied payment, or both will be automatically applied to the debit memo. If no value is specified or the value is false, no action is taken. |
| collect | booleanDefault: falseIndicates if the current request needs to collect payment or not. |
| payment | objectSome detail info that would be used to processed an electronic payment. The info would only effect when collect set to true. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/debit-memos/{debitMemoKey}/collect

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "collect": true,

-   "applyCredit": true


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

-   "debitMemo": {

    -   "id": "8ad0912492f64b9001931936cac36351",

    -   "number": "DM00000001"


    },

-   "appliedCreditMemos": [ ],

-   "appliedPayments": [ ],

-   "processedPayment": {

    -   "id": "8ad0869992f632860193249dfe1a0ead",

    -   "number": "P-00001541",

    -   "status": "Processed",

    -   "amount": 10,

    -   "paymentMethodId": "8ad09bce83f1da020183f97e24821c4b",

    -   "gatewayId": "8ad095dd813e750f0181461a8e350ce7",

    -   "gatewayResponse": "This transaction has been approved by the gateway.",

    -   "gatewayResponseCode": "approve"


    },

-   "success": true


}`
