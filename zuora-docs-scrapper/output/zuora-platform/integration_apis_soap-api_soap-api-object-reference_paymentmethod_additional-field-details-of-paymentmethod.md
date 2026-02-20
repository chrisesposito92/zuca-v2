---
title: "Additional field details of PaymentMethod"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/paymentmethod/additional-field-details-of-paymentmethod"
product: "zuora-platform"
scraped_at: "2026-02-20T21:09:26.987Z"
---

# Additional field details of PaymentMethod

Additional details of the fields on the PaymentMethod object.

## Active

Specifies whether a payment method is available in Zuora. The default value is `false` .

The Active field value indicates the payment method types that are accepted, which you can specify within Z-Billing settings. This field does not apply to to electronic payment methods, such as credit cards where you entered the credit card number or a PayPal account.

## Id

The ID of this object. Every object has a unique identifier that Zuora automatically assigns upon creation. You use this ID later when you work with the object. For example, if you send an amend() call to modify an existing subscription, then you need to include the specific `Subscription` object's ID with the call.

The ID for the PaymentMethod object is `PaymentMethodId` .

## Type

For most of the `Type` field choices, if you choose one of the options, you cannot use the fields for any of the other choices.

-   If the payment type is `ACH` , then only populate the ACH fields. Do not include credit card or PayPal information.

-   If the payment type is `CreditCard` , then only populate the credit card fields. Do not include PayPal or ACH information.

-   If the payment type is `Paypal` , then only populate the PayPal fields. Do not include credit card or ACH information.

-   The one exception is the `DebitCard` type: If the payment type is DebitCard, then all the credit card fields are required.


ACH, CreditCard, DebitCard, and PayPal are the only types supported for use with create() calls.

## LastTransactionStatus

The following items are the possible values for the LastTransactionStatus field:

| ABACodeIsInvalid | DuplicateTransaction | InvalidCurrencyCode |
| --- | --- | --- |
| ACHTransactionNotAcceptedByMerchant | ErrorTypeForACH | InvalidMerchantInformation |
| AddressCheckingFailed | ExceedMaximumAmountSetting | InvalidTenderType |
| AddressOrCardSecurityCodeCheckingFailed | ExceedsPerTransactionLimit | InvalidTransactionID |
| Approved | FieldFormatError | IPBlockedByGateway |
| AuthorizationCodeInvalid | FraudProtectionDeclined | NotSupportedTenderType |
| AValidAmountIsRequired | GatewaySecuritySettingFailed | ProcessorConnectionTimeOut |
| BankAccountTypeInvalid | GatewayServerBusy | TheAccountNumberIsInvalid |
| CardSecurityCodeCheckingFailed | GeneralTransactionError | TransactionMethodInvalid |
| CardSecurityCodeCheckingFailedAuthorize | GenericErrorFromProcessor | TransactionTypeInvalid |
| ClientConnectionTimeOut | HostConnectionTimeOut | UserAuthenticationFailed |
| CreditTransactionError | InvalidCreditCardNumber | VersionParameterInvalid |
| Declined | InvalidCreditExpirationDate | VoidTransactionError |

## PaymentRetryWindow

The retry interval setting, which prevents making a payment attempt if the last failed attempt was within the last specified number of hours.

Use the retry interval setting to prevent a payment attempt if the last failed payment was within the last number of hours.

For example, if the last failed payment was at 1 p.m. and the retry interval is 4 hours, then a payment run at 2 p.m. doesn't attempt a payment. A payment run at 6 p.m. does attempt a payment. If you want to retry once a day, then we recommend that you enter 22 or 23 hours because it is possible for a payment to be attempted at the end of the payment run on one day and the beginning of the payment run the next day. This field is required if the UseDefaultRetryRule field value is set to `false` .
