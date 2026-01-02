---
title: "POST TransactionInvoicePayment"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_TransactionInvoicePayment/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:59:17.230Z"
---

## Invoice and collect

Generates and posts invoices and credit memos and collects payments for posted invoices. Credit memos are only available if you have the Invoice Settlement feature enabled and negative charges exist. Credit memos will not be applied to invoices. If draft invoices and credit memos exist when you run this operation, this operation will post the invoices and credit memos. Note that draft credit memos created from an invoice or a product rate plan charge will not be posted.

You can use this operation to generate invoices and collect payments on the posted invoices, or else simply collect payment on a specified existing invoice. The customer's default payment method is used, and the full amount due is collected. The operation depends on the parameters you specify.

-   To generate one or more new invoices for that customer and collect payment on the generated and other unpaid invoice(s), leave the **invoiceId** field empty.

-   To collect payment on an existing invoice, specify the invoice ID.


The operation is atomic; if any part is unsuccessful, the entire operation is rolled back.

When an error occurs, gateway reason codes and error messages are returned the error response of this operation. The following items are some gateway response code examples.

-   Orbital: `05 Do Not Honor`; `14 Invalid Credit Card Number`
-   Vantiv: `301 Invalid Account Number`; `304 Lost/Stolen Card`
-   CyberSource2: `202 Expired card`; `231 Invalid account number`

For more reason code information, see the corresponding payment gateway documentation.

### Notes

Timeouts may occur when using this method on an account that has an extremely high number of subscriptions.

Security**bearerAuth**

Request

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

| accountKeyrequired | stringCustomer account ID or account number. |
| --- | --- |
| documentDate | string <date>The date that should appear on the invoice and credit memo being generated, in yyyy-mm-dd format. If this field is omitted and invoiceId is not specified, the current date is used by default.Note: The credit memo is only available if you have the Invoice Settlement feature enabled.Note: This field is available only if you are on the latest Zuora API version, or you set the Zuora-Version request header to 215.0 or a later available version. |
| invoiceId | stringThe ID or number of an existing invoice for which to collect payment using the account's default payment method. If this value is specified, no new invoice is generated, and the following fields are ignored:invoiceDate and invoiceTargetDate (if the Zuora minor API version is 214.0 or earlier)documentDate and targetDate (if the Zuora minor API version is 215.0 or a later available version) |
| paymentGateway | stringThe name of the gateway that will be used for the payment. Must be a valid gateway name and the gateway must support the specific payment method. If a value is not specified, the default gateway on the Account will be used. |
| targetDate | string <date>The date through which to calculate charges on this account if an invoice or a credit memo is generated, in yyyy-mm-dd format. If this field is omitted and invoiceId is not specified, the current date is used by default. This field is available only if you are on the latest Zuora API version, or you set the Zuora-Version request header to 215.0 or a later available version.Note: The credit memo is only available if you have the Invoice Settlement feature enabled. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/operations/invoice-collect

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "accountKey": "4028925a4cb74ec9014cb7520fc00005",

-   "invoiceId": "4028925a4cb74ec9014cb7540988002e"


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

-   "amountCollected": 801.73,

-   "creditMemos": [

    -   {

        -   "id": "402890555a7e9791015a879f064a0054",

        -   "totalAmount": 801.73,

        -   "memoNumber": "CM00000012"


        }


    ],

-   "invoices": [

    -   {

        -   "invoiceAmount": 801.73,

        -   "invoiceId": "4028925a4cb74ec9014cb7540988002e",

        -   "invoiceNumber": "INV00000091"


        }


    ],

-   "paymentId": "402892053e100406013e1024ab7c00e3",

-   "success": true


}`
