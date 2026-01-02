---
title: "POST CreatePayment"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_CreatePayment/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:01:38.137Z"
---

## Create a payment

**Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.

Creates a payment in the following scenarios:

-   A full or partial payment on an invoice or a debit memo
-   A full or partial payment on several invoices and debit memos
-   An unapplied payment in the following situations:
    -   You do not know which customer account the payment belongs to.
    -   You know which customer account the payment belongs to, but you do not know which invoice the payment is applied to.
    -   You receive a payment from your customer that exceeds the balance on the invoice.
    -   You receive a payment from your customer before the invoice has been created.
    -   You intend to create a payment without any invoices or debit memos.
-   A standalone payment. If you only need to create and process an electronic payment in Zuora through a Zuora gateway integration but settle the payment outside of Zuora, you can create a standalone payment. For a standalone payment, you can specify a currency different from the payment currency in the customer account settings. When Standalone Payment is not enabled, the currency of the standalone payment can be different from the payment currency defined in the customer account settings if you have the [Multiple Currencies](https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Flexible_Billing/Multiple_Currencies) feature enabled.

If you do not know to which customer account the payment belongs, you can create a payment without specifying a customer account.

When you create a payment, the total number of invoice items and debit memo items that the payment will apply to should be less than or equal to 15,000.

For more information, see [Create Payments](https://knowledgecenter.zuora.com/CB_Billing/Invoice_Settlement/A_Unapplied_Payments/Management_of_Unapplied_Payments/AA_Create_Payments) and [Create Payments Without Specifying Customer Accounts](https://knowledgecenter.zuora.com/CB_Billing/Invoice_Settlement/A_Unapplied_Payments/Management_of_Unapplied_Payments/AA_Create_Payments_Without_Specifying_Customer_Accounts).

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

| accountId | stringThe ID of the customer account that the payment is created for. |
| --- | --- |
| accountNumber | stringThe number of the customer account that the payment is created for, such as A00000001.You can specify either accountNumber or accountId for a customer account. If both of them are specified, they must refer to the same customer account. |
| amountrequired | number <double>The total amount of the payment. |
| authTransactionId | string <= 50 charactersThe authorization transaction ID from the payment gateway. Use this field for electronic payments, such as credit cards.When you create a payment for capturing the authorized funds, it is highly recommended to pass in the gatewayOrderId that you used when authorizing the funds by using the Create authorization operation, together with the authTransactionId field.The following payment gateways support this field:Adyen Integration v2.0CyberSource 1.28CyberSource 1.97CyberSource 2.0Chase Paymentech OrbitalIngenico ePaymentsSlimPayStripe v2Verifi Global Payment GatewayWePay Payment Gateway Integration |
| comment | string [ 0 .. 255 ] charactersAdditional information related to the payment. |
| currencyrequired | stringWhen Standalone Payment is not enabled, the currency of the payment must be the same as the payment currency defined in the customer account settings through Zuora UI. But if you have the Multiple Currencies feature enabled, you can have a different payment currency.When Standalone Payment is enabled and standalone is true, the currency of the standalone payment can be different from the payment currency defined in the customer account settings. The amount will not be summed up to the account balance or key metrics regardless of currency. |
| customRates | Array of objects (customRates) <= 2 itemsIt contains Home currency and Reporting currency custom rates currencies. The maximum number of items is 2 (you can pass the Home currency item or Reporting currency item or both).Note:This field is only available if you are on the latest Zuora API minor version, or you set the Zuora-Version request header to 224.0 or a later available version.You cannot set the custom rates, if both the Automatically include additional Currency Conversion information in data source exports option and Fx data feature are enabled.Payment, PaymentApplication, and PaymentApplicationItem will utilize the provided custom Fx rate to convert amounts from the transactional currency to the home currency. |
| debitMemos | Array of objects (debitMemos)Container for debit memos. The maximum number of debit memos is 1,000. |
| effectiveDate | string <date>The date when the payment takes effect, in yyyy-mm-dd format.Note:This field is required for only electronic payments. It's an optional field for external payments.When specified, this field must be set to the date of today.When applying or transferring payments, this field must be later than or equal to the maximum effective date of the payment. |
| financeInformation | objectContainer for the finance information related to the payment. |
| gatewayId | stringThe ID of the gateway instance that processes the payment. The ID must be a valid gateway instance ID and this gateway must support the specific payment method.If Payment Gateway Routing is enabled, when creating electronic payments, this field is optional.If this field is not specified, gateway routing rules will be invoked.If this field is specified, the specified gateway will be used to process the payment.If Payment Gateway Routing is disabled, when creating electronic payments, this field is required.When creating external payments, this field is optional.Use the same gateway instance if both paymentGatewayNumber and gatewayId are sent in the request. |
| gatewayOptions | objectThe field used to pass gateway-specific parameters and parameter values. The fields supported by gateways vary. For more information, see the Overview topic of each gateway integration in Zuora Knowledge Center.Zuora sends all the information that you specified to the gateway. If you specify any unsupported gateway option parameters, they will be ignored without error prompts. |
| gatewayOrderId | string <= 50 charactersA merchant-specified natural key value that can be passed to the electronic payment gateway when a payment is created. If not specified, the payment number will be passed in instead.Gateways check duplicates on the gateway order ID to ensure that the merchant do not accidentally enter the same transaction twice. This ID can also be used to do reconciliation and tie the payment to a natural key in external systems. The source of this ID varies by merchant. Some merchants use their shopping cart order IDs, and others use something different. Merchants use this ID to track transactions in their eCommerce systems.When you create a payment for capturing the authorized funds, it is highly recommended to pass in the gatewayOrderId that you used when authorizing the funds by using the Create authorization operation, together with the authTransactionId field. |
| invoices | Array of objects (invoices)Container for invoices. The maximum number of invoices is 1,000. |
| mitTransactionSource | stringPayment transaction source used to differentiate the transaction source in Stored Credential Transaction framework.C_Unscheduled: Cardholder-initiated transaction (CIT) that does not occur on scheduled or regularly occurring dates.M_Recurring: Merchant-initiated transaction (MIT) that occurs at regular intervals.M_Unscheduled: Merchant-initiated transaction (MIT) that does not occur on scheduled or regularly occurring dates.M_MOTO: Mail Order Telephone Order (MOTO) payment transaction. This option is only available for credit card payments on Stripe v2. See Overview of Stripe payment gateway integration for more information.Enum: "C_Unscheduled" "M_Recurring" "M_Unscheduled" "M_MOTO" |
| paymentGatewayNumber | stringThe natural key for the payment gateway.Use the same gateway instance if both paymentGatewayNumber and gatewayId are sent in the request. |
| paymentMethodId | stringThe unique ID of the payment method that the customer used to make the payment.If no payment method ID is specified in the request body, the default payment method for the customer account is used automatically. If the default payment method is different from the type of payments that you want to create, an error occurs. |
| paymentMethodType | stringDefault: nullThe type of the payment method that the customer used to make the payment.Specify this value when you are creating an external payment method. If both paymentMethodType and paymentMethodId are specified, only the paymentMethodId value is used to create the payment. |
| paymentOption | Array of objects (paymentOption)Container for the paymentOption items, which describe the transactional level rules for processing payments. Currently, only the Gateway Options type is supported.Here is an example:"paymentOption": [   {     "type": "GatewayOptions",     "detail": {       "SecCode":"WEB"     }   } ] paymentOption of the payment schedule takes precedence over paymentOption of the payment schedule item.You can use this field or the gatewayOptions field to pass the Gateway Options fields supported by a payment gateway. However, the Gateway Options fields passed through the paymentOption field will be stored in the Payment Option object and can be easily retrieved. |
| paymentScheduleKey | stringThe unique ID or the number of the payment schedule to be linked with the payment. See Link payments to payment schedules for more information. |
| prepayment | booleanIndicates whether the payment will be used as a reserved payment. See Prepaid Cash with Drawdown for more information. |
| referenceId | string [ 0 .. 100 ] charactersThe transaction ID returned by the payment gateway. Use this field to reconcile payments between your gateway and Zuora Payments. |
| softDescriptor | string <= 35 charactersA payment gateway-specific field that maps to Zuora for the gateways, Orbital, Vantiv and Verifi. |
| softDescriptorPhone | string <= 20 charactersA payment gateway-specific field that maps to Zuora for the gateways, Orbital, Vantiv and Verifi. |
| standalone | booleanDefault: falseThis field is only available if support for standalone payments is enabled.Specify true to create a standalone payment that will be processed in Zuora through Zuora gateway integration but will be settled outside of Zuora.When standalone is set to true:accountId, amount, currency, and type are required.type must be Electronic.currency of the payment can be different from the payment currency in the customer account settings.The amount will not be summed up into the account balance and key metrics regardless of the payment currency.No settlement data will be created.Either the applied amount or the unapplied amount of the payment is zero.The standalone payment cannot be applied, unapplied, or transferred.Specify false to create an ordinary payment that will be created, processed, and settled in Zuora. The currency of an ordinary payment must be the same as the currency in the customer account settings. |
| typerequired | stringThe type of the payment.Note: If you specify the type as Electronic, you must specify the value for accountId or accountNumber.Enum: "External" "Electronic" |
| IntegrationId__NS | string <= 255 charactersID of the corresponding object in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| IntegrationStatus__NS | string <= 255 charactersStatus of the payment's synchronization with NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| Origin__NS | string <= 255 charactersOrigin of the corresponding object in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| SyncDate__NS | string <= 255 charactersDate when the payment was synchronized with NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| Transaction__NS | string <= 255 charactersRelated transaction in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| property name*additional property | anyCustom fields of the Payment object. The name of each custom field has the form customField__c. Custom field names are case sensitive. See Custom Fields for more information. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/payments

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "accountId": "8a90b4488e7d5c0f018e7db3892400b2",

-   "type": "External",

-   "paymentMethodId": "2c92c8f95e2d6ebb015e325df7a70356",

-   "amount": 14.99,

-   "currency": "USD",

-   "invoices": [

    -   {

        -   "invoiceId": "8a90e5e4914ad4fa01914b25ff2c036e",

        -   "amount": 14.99


        }


    ]


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

-   "id": "8a90a04d914ac24801914b29e47f0777",

-   "number": "P-00000389",

-   "status": "Processed",

-   "type": "External",

-   "accountId": "8a90b4488e7d5c0f018e7db3892400b2",

-   "accountNumber": "A00000370",

-   "amount": 14.99,

-   "appliedAmount": 14.99,

-   "unappliedAmount": 0,

-   "refundAmount": 0,

-   "creditBalanceAmount": 0,

-   "currency": "USD",

-   "effectiveDate": "2024-08-13",

-   "comment": null,

-   "paymentMethodId": "2c92c8f95e2d6ebb015e325df7a70356",

-   "paymentMethodSnapshotId": null,

-   "authTransactionId": null,

-   "bankIdentificationNumber": null,

-   "gatewayId": null,

-   "paymentGatewayNumber": null,

-   "gatewayOrderId": null,

-   "gatewayResponse": null,

-   "gatewayResponseCode": null,

-   "gatewayState": "NotSubmitted",

-   "markedForSubmissionOn": null,

-   "referenceId": null,

-   "secondPaymentReferenceId": null,

-   "softDescriptor": null,

-   "softDescriptorPhone": null,

-   "submittedOn": null,

-   "settledOn": null,

-   "cancelledOn": null,

-   "createdDate": "2024-08-13 17:55:22",

-   "createdById": "2c92c8f95e2d6ebb015e325df48e02da",

-   "updatedDate": "2024-08-13 17:55:22",

-   "updatedById": "2c92c8f95e2d6ebb015e325df48e02da",

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

-   "prepayment": false,

-   "success": true


}`
