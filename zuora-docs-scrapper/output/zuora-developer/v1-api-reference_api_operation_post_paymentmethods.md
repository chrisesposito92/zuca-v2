---
title: "POST PaymentMethods"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_PaymentMethods/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:00:04.115Z"
---

## Create a payment method

You can use this operation to create either a payment method associated with a specific customer account, or an orphan payment method that is not associated with any customer account.

To view the applicable fields for each payment method type, select the payment method type from the `type` list. The following types of the payment methods are supported:

-   `CreditCard` - Credit card payment method.

-   `CreditCardReferenceTransaction` - Credit Card Reference Transaction. See [Supported payment methods](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/L_Payment_Methods/Supported_Payment_Methods) for payment gateways that support this type of payment method.

-   `ACH` - ACH payment method.

-   `SEPA` - Single Euro Payments Area.

-   `Betalingsservice` - Direct Debit DK.

-   `Autogiro` - Direct Debit SE.

-   `Bacs` - Direct Debit UK.

-   `Becs` - Direct Entry AU.

-   `Becsnz` - Direct Debit NZ.

-   `PAD` - Pre-Authorized Debit.

-   `PayPalCP` - PayPal Commerce Platform payment method. Use this type if you are using a [PayPal Commerce Platform Gateway](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/M_Payment_Gateways/Supported_Payment_Gateways/PayPal_Commerce_Platform_Gateway) instance.

-   `PayPalEC` - PayPal Express Checkout payment method. Use this type if you are using a [PayPal Payflow Pro Gateway](https://knowledgecenter.zuora.com/CB_Billing/M_Payment_Gateways/Supported_Payment_Gateways/PayPal_Payflow_Pro%2C_Website_Payments_Payflow_Edition%2C_Website_Pro_Payment_Gateway) instance.

-   `PayPalNativeEC` - PayPal Native Express Checkout payment method. Use this type if you are using a [PayPal Express Checkout Gateway](https://knowledgecenter.zuora.com/CB_Billing/M_Payment_Gateways/Supported_Payment_Gateways/PayPal_Express_Checkout_Gateway) instance.

-   `PayPalAdaptive` - PayPal Adaptive payment method. Use this type if you are using a [PayPal Adaptive Payment Gateway](https://knowledgecenter.zuora.com/CB_Billing/M_Payment_Gateways/Supported_Payment_Gateways/PayPal_Adaptive_Payments_Gateway) instance.

-   `AdyenApplePay` - Apple Pay on Adyen Integration v2.0. See [Set up Adyen Apple Pay](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/L_Payment_Methods/Payment_Method_Types/Apple_Pay_on_Web/Set_up_Adyen_Apple_Pay) for details.

-   `AdyenGooglePay` - Google Pay on Adyen Integration v2.0. See [Set up Adyen Google Pay](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/L_Payment_Methods/Payment_Method_Types/Set_up_Adyen_Google_Pay) for details.

-   `GooglePay` - Google Pay on Chase Paymentech Orbital gateway integration. See [Set up Google Pay on Chase](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/L_Payment_Methods/Payment_Method_Types/Set_up_Google_Pay_on_Chase) for details.

-   `AmazonPay` - Amazon Pay integration.


The fields marked as `required` must be specified when creating non-tokenized payment methods. For more information about the required fields for the tokenization of payment methods, see [Create tokenized payment methods with existing tokens or account information](https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Methods/B3_Create_tokenized_payment_methods_with_existing_tokens_or_account_information).

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

| typerequired | stringType of the payment method. The following types of the payment methods are supported:CreditCardCreditCardReferenceTransactionACHSEPABetalingsserviceAutogiroBacsBecsBecsnzPADPayPalCPPayPalECPayPalNativeECPayPalAdaptiveAdyenApplePayAdyenGooglePayGooglePayAmazonPayTo view the schema and example applicable to a specific payment method type, select the corresponding option from the following list.CreditCardCreditCardReferenceTransactionACHSEPABetalingsserviceAutogiroBacsBecsBecsnzPADPayPalCPPayPalECPayPalNativeECPayPalAdaptiveAdyenApplePayAdyenGooglePayGooglePayAmazonPayCreditCard |
| --- | --- |
| cardHolderInforequired | object (cardHolderInfo)Container for cardholder information. The nested cardHolderName field is required. |
| cardMaskNumber | stringThe masked card number.Currently, this field is only supported on certain integrations. See this article for more information. |
| cardNumberrequired | stringCredit card number. |
| cardTyperequired | stringThe type of the credit card. Possible values include Visa, MasterCard, AmericanExpress, Discover, JCB, and Diners. For more information about credit card types supported by different payment gateways, see Supported Payment Gateways. |
| checkDuplicated | booleanIndicates whether the duplication check is performed when you create a new credit card payment method. The default value is false.With this field set to true, Zuora will check all active payment methods associated with the same billing account to ensure that no duplicate credit card payment methods are created. An error is returned if a duplicate payment method is found.The following fields are used for the duplication check:cardHolderNameexpirationMonthexpirationYearcreditCardMaskNumber. It is the masked credit card number generated by Zuora. For example, ************1234.This field is being deprecated. To achieve the same purpose, use the processingOptions > checkDuplicated field of the payment method object. |
| expirationMonthrequired | integerOne or two digit expiration month (1-12) of the credit card. |
| expirationYearrequired | integerFour-digit expiration year of the credit card. |
| identityNumber | stringThe identity number of the cardholder. This field is required for Credit Card payment methods in certain countries such as Brazil. |
| mitConsentAgreementRef | string <= 128 charactersSpecifies your reference for the stored credential consent agreement that you have established with the customer. Only applicable if you set the mitProfileAction field. |
| mitConsentAgreementSrc | stringRequired if you set the mitProfileAction field. Specifies how the consent agreement has been established with the customer. The allowed value is External. If you do not specify the mitProfileAction field, Zuora will automatically create a stored credential profile for the payment method, with the default value External set to this field.Value: "External" |
| mitNetworkTransactionId | string <= 128 charactersSpecifies the ID of a network transaction. Only applicable if you set the mitProfileAction field to Persist. |
| mitProfileAction | stringSpecifies how Zuora creates and activates the stored credential profile.Activate - Use this value if you are creating the stored credential profile after receiving the customer's consent.Zuora will create the stored credential profile then send a cardholder-initiated transaction (CIT) to the payment gateway to validate the stored credential profile. If the CIT succeeds, the status of the stored credential profile will be Active. If the CIT does not succeed, Zuora will not create a stored credential profile.If the payment gateway does not support the stored credential transaction framework, the status of the stored credential profile will be Agreed.Persist - Use this value if the stored credential profile represents a stored credential profile in an external system. The status of the payment method's stored credential profile will be Active.If you do not specify this field, Zuora will automatically create a stored credential profile for the payment method, with the default value Activate set to this field.Enum: "Activate" "Persist" |
| mitProfileAgreedOn | string <date>The date on which the profile is agreed. The date format is yyyy-mm-dd. |
| mitProfileType | stringRequired if you set the mitProfileAction field. Indicates the type of the stored credential profile to process recurring or unsecheduled transactions. If you do not specify the mitProfileAction field, Zuora will automatically create a stored credential profile for the payment method, with the default value Recurring set to this field.Enum: "Recurring" "Unscheduled" |
| screeningAmount | number <decimal>For Chase Paymentech Orbital Gateway integrations, if the Safetech Fraud service is enabled, use this field to pass in the amount used for fraud screening for Credit Card validation transactions.Two-decimal amount is supported.If the screeningAmount field is not specified, the authorization amount is used for fraud screening. |
| securityCode | stringCVV or CVV2 security code of the credit card.To ensure PCI compliance, this value is not stored and cannot be queried. |
| tokens | objectTo create tokenized payment methods, pass in the existing token information through the fields in this container.Currently, this field is only supported on certain integrations. See this article for more information. |
| tokenize | booleanDefault: falseSpecify true to tokenize the payment method with the card information.Currently, this field is only supported on certain integrations. See this article for more information. |
| mandateInfo | objectThe container of the mandate information for the payment method. |
| processingOptions | objectThe container for payment method processing options. |
| accountKey | stringThe customer account ID such as 2x92c0f859b0480f0159d3a4a6ee5bb6 or the customer account number such as A02855638.To create an orphan payment method that is not associated with any customer account, you can skip this field. As soon as the account information is available, associate the payment method with an account through the Update a payment method operation. |
| authGateway | stringInternal ID of the payment gateway that Zuora will use to authorize the payments that are made with the payment method.If you do not set this field, Zuora will use one of the following payment gateways instead:The default payment gateway of the customer account that owns the payment method, if the accountKey field is set.The default payment gateway of your Zuora tenant, if the accountKey field is not set.If Payment Gateway Routing is enabled:If this field is not specified, gateway routing rules will be invoked.If this field is specified, the specified gateway will be used to process the payment.If Payment Gateway Routing is disabled:If this field is not specified, the default payment gateway will be used to process the payment. The default gateway of the customer account takes precedence over the default gateway of the tenant.If this field is specified, the specified gateway will be used to process the payment. |
| currencyCode | stringThe currency used for payment method authorization. |
| gatewayOptions | objectThe field used to pass gateway-specific parameters and parameter values. The fields supported by gateways vary. For more information, see the Overview topic of each gateway integration in Zuora Knowledge Center.Zuora sends all the information that you specified to the gateway. If you specify any unsupported gateway option parameters, they will be ignored without error prompts. |
| ipAddress | stringThe IPv4 or IPv6 information of the user when the payment method is created or updated. Some gateways use this field for fraud prevention. If this field is passed to Zuora, Zuora directly passes it to gateways.If the IP address length is beyond 45 characters, a validation error occurs.For validating SEPA payment methods on Stripe v2, this field is required. |
| makeDefault | booleanDefault: falseSpecifies whether the payment method will be the default payment method of the customer account that owns the payment method. Only applicable if the accountKey field is set.When you set this field to true, make sure the payment method is supported by the default payment gateway. |
| skipValidation | booleanDefault: falseSpecify whether to skip the validation of the information through the payment gateway. For example, when migrating your payment methods, you can set this field to true to skip the validation. |
| property name*additional property | anyCustom fields of the payment method. The name of each custom field has the form customField__c. Custom field names are case sensitive. See Custom Fields for more information. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/payment-methods

Request samples

-   Payload
-   cURL

application/json

CreditCardCreditCardReferenceTransactionACHSEPABetalingsserviceAutogiroBacsBecsBecsnzPADPayPalCPPayPalECPayPalNativeECPayPalAdaptiveAdyenApplePayAdyenGooglePayGooglePayAmazonPayCreditCard

Copy

Expand allCollapse all

`{

-   "accountKey": "8ad09be48db5aba7018db604776d4854",

-   "type": "CreditCard",

-   "cardType": "Visa",

-   "cardNumber": "4111111111111111",

-   "expirationMonth": 12,

-   "expirationYear": 2028,

-   "cardHolderInfo": {

    -   "cardHolderName": "Amy Lawrence"


    }


}`

Response samples

-   200
-   500
-   4XX

application/json

responseresponse

Copy

`{

-   "id": "2c92a09650a7a80a0150ab50a5b746bd",

-   "success": true


}`
