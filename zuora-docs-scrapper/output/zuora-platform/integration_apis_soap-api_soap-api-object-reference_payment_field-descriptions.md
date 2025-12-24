---
title: "Field descriptions"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/payment/field-descriptions"
product: "zuora-platform"
scraped_at: "2025-12-24T05:42:16.764Z"
---

# Field descriptions

This reference provides descriptions of the fields of the Payment object.

All field names are case sensitive. Check enumerated values in descriptions to confirm capitalization and spacing.

| Name | Required to create? | Allowed operations | Description |
| --- | --- | --- | --- |
| AccountId | required | Create Query Filter | The unique account ID for the customer that the payment is for.Type : zns:ID Character limit : 32 Version notes : -- Values : a valid account ID |
| AccountingCode | optional | Create Query Update Filter | The accounting code for the payment. Accounting codes group transactions that contain similar accounting attributes.Type : string Character limit : 100 Version notes : -- Values : an active accounting code in your Zuora Chart of Accounts |
| Amount | required | Create Query Filter | The amount of the payment.Type : decimal (currency) Character limit : 16 Version notes : type is double for WSDL18.0 and older Values : a valid currency value |
| AppliedAmount | optional | filter | The amount of the payment that has already been applied to billing documents, such as invoices or debit memos.Type : decimal (currency) Character limit : 16 Version notes : -- Values : a valid currency valueNote:This field is only available if you have the Invoice Settlement feature enabled. |
| AppliedCreditBalanceAmount | required | Create Query Delete Filter | The amount of the payment to apply to a credit balance. This field is required in a create() call when the AppliedInvoiceAmount field value is null.Type : decimal (currency) Character limit : 16 Version notes : WSDL 22.0+. Requires access to credit balances. Values : a valid currency value |
| AppliedInvoiceAmount | required | Create Delete | The amount of the payment to apply to an invoice.Type: decimal (currency) Character limit: 16 Version notes: valid from WSDL 22.0 + Values: a valid currency value |
| AuthTransactionId | optional | Create Query Delete Filter | The authorization transaction ID from the payment gateway. Use this field for electronic payments, such as credit cards.Type : string Character limit : 50 Version notes : -- Values : a string of 50 characters or fewer |
| BankIdentificationNumber | optional | Query Filter | The first six or eight digits of the credit card or debit card used for the payment, when applicable. Use this field to reconcile payments between the gateway and merchant banks.Type : string Character limit : 8 Version notes : WSDL 22.0+ Values : automatically generated |
| CancelledOn | optional | Query Filter | The date when the payment was canceled.Type : dateTime Character limit : 29 Version notes : -- Values : automatically generated |
| Comment | optional | Create Query Filter | Additional information related to the payment.Type : string Character limit : 255 Version notes : -- Values : a string of 255 characters or fewer |
| CreatedById | required | Query Filter | The user ID of the person who created the Payment object.Type : zns:ID Character limit : 32 Version notes : WSDL 20.0+ Values : automatically generated |
| CreatedDate | required | Query Filter | The date when the Payment object was created in the Zuora system.Type : dateTime Character limit : 29 Version notes : WSDL 20.0+ Values automatically generated |
| EffectiveDate | required | Create Query Filter | The date when the payment takes effect.Type :date: Supported as of WSDL version 69+dateTime: Supported through WSDL version 68Character limit : 29 Version notes : -- Values : a valid date and time value. |
| Gateway | optional | Create Query Filter | Name of the gateway instance that processes the payment. When creating a Payment, this must be a valid gateway instance name and this gateway must support the specific payment method. If not specified, the default gateway on the Account will be used. For more information, see Payment Gateways. |
| GatewayOptionData | optional | Create Filter | Use this field to pass gateway options.Type : zns:GatewayOption Character limit : 255 Version notes : WSDL 18.0+ Values : GatewayOption |
| GatewayOrderId | optional | Create Query Delete Filter | A merchant-specified natural key value that can be passed to the electronic payment gateway when a payment is created. If not specified, the PaymentNumber will be passed in instead.Type : string Character limit : 70 Version notes : -- Values : a string of 70 characters or fewer |
| GatewayResponse | optional | Query Filter | The message returned from the payment gateway for the payment. This message is gateway-dependent.Type : string Character limit : 500 Version notes : WSDL 9.0+ Values : automatically generated |
| GatewayResponseCode | optional | Query Filter | The code returned from the payment gateway for the payment. This code is gateway-dependent.Type : string Character limit : 20 Version notes : WSDL 9.0+ Values : automatically generated |
| GatewayState | optional | Query Filter | The status of the payment in the gateway; use for reconciliation.Type : string (enum) Character limit : 19 Version notes : -- Values : automatically generated |
| Id | optional | Query Filter | The ID of this object. Upon creation, the ID of this object is PaymentId .Type : zns:ID Character limit : 32 Version notes : -- Values : a valid object ID |
| InvoiceId | optional | Create | The ID of the invoice that the payment is applied to.Type: zns:ID Character limit: 32 Version notes: Valid from WSDL 22.0+ Values: a valid invoice ID |
| InvoiceNumber | optional | Create | The unique identification number for the invoice that the payment is applied to.Type : string Character limit : 255 Version notes : WSDL 23.0+ Values : a unique number of 255 characters or fewer |
| InvoicePaymentData | optional | n/a | A container of InvoicePayment. This field can be treated as an array or a list.Type : array Character limit : Less than or equal to 200 InvoicePayment instances are allowed to pass into it Version notes : WSDL 64+ Values : Only InvoicePayment instance is allowed, all others will be ignored |
| MarkedForSubmissionOn | optional | Query Filter | The date when a payment was marked and waiting for batch submission to the payment process.Type : dateTime Character limit : 29 Version notes : -- Values : automatically generated |
| PaymentMethodId | optional | Create Query Filter | The ID of the payment method used for the payment. Required for Create.Type : zns:ID Character limit : 32 Version notes : -- Values : automatically generated |
| PaymentMethodSnapshotId | read-only | Query | The unique ID of the payment method snapshot which is a copy of the particular Payment Method used in a transaction.Type : zns:ID Character limit : 32 Version notes : WSDL 60.0+ V alues : a valid payment method snapshot ID |
| PaymentNumber | optional | Query Filter | The unique identification number of a payment. For example: P-00000028.Type : string Character limit : 32 Version notes : WSDL 23.0+ Values : automatically generated |
| ReferenceId | optional | Create Query Filter | The transaction ID returned by the payment gateway. Use this field to reconcile payments between your gateway and Z-Payments.Type : string Character limit : 60 Version notes : -- Values : a string of 60 characters or fewer |
| RefundAmount | optional | Query Filter | The amount of the payment that is refunded. This field is null if no refund is made against the payment.Type : decimal (currency) Character limit : 16 Version notes : -- Values : automatically generated |
| SecondPaymentReferenceId | optional | Query Filter | The transaction ID returned by the payment gateway if there is an additional transaction for the payment. Use this field to reconcile payments between your gateway and Z-Payments.Type : string Character limit : 60 Version notes : -- Values : a string of 60 characters or fewer |
| SettledOn | optional | Query Filter | The date when the payment was settled in the payment processor. This field is used by the Spectrum gateway only and not applicable to other gateways.Type : dateTime Character limit : 29 Version notes : -- Values : automatically generated |
| SoftDescriptor | optional | Create Query Filter | A payment gateway-specific field that maps to Zuora for the gateways, Orbital, Vantiv and Verifi.Type : string Character limit : 35 Version notes : -- Values : [SDMerchantName]*[SDProductionInfo] |
| SoftDescriptorPhone | optional | Create Query Filter | A payment gateway-specific field that maps to Zuora for the gateways, Orbital, Vantiv and Verifi.Type : string Character limit : 20 Version notes : -- Values : [SDPhone] |
| Source | optional | Query | Indicates how the payment was created, whether through API, manually, import, or payment run.Type : string Character limit : Version notes : WSDL 65+ Values : PaymentRun, Import, Manually, and API |
| SourceName | optional | Query | Name of the source.Type : string Character limit : Version notes : WSDL 65+ Values : PaymentRun number or a file name. |
| Status | required | Create Update* Query Filter | The status of the payment in Zuora. The value depends on the type of payment.Type : string (enum) Character limit : 11 Version notes : -- Values :For Create:ProcessedFor Update: One of the following:VoidedCanceledSee Troubleshooting Payment Runs for more information.* Update of status can change value from Processed to Voided for Electronic payment and to Canceled for External payment. |
| SubmittedOn | optional | Query Filter | The date when the payment was submitted.Type : dateTime Character limit : 29 Version notes : -- Values : automatically generated |
| TransferredToAccounting | optional | Query Update Filter | Indicates if the payment was transferred to an external accounting system. Use this field for integration with accounting systems, such as NetSuite.Type :string (enum) Character limit : 11 Version notes : -- Values : Processing , Yes , Error , Ignore |
| Type | required | Create Query Filter | Indicates if the payment is external or electronic.Type : string (enum) Character limit : 10 Version notes : -- Values : External , Electronic |
| UnappliedAmount | optional | Query Filter | The unapplied amount of the payment.Type : decimal (currency) Character limit : 16 Version notes : -- Values : a valid currency valueNote:This field is only available if you have the Invoice Settlement feature enabled. |
| UpdatedById | No | Query Filter | The ID of the user who last updated the payment.Type : zns:ID Character limit : Version notes : -- Values : automatically generated |
| UpdatedDate | No | Query Filter | The date when the payment was last updated.Type : dateTime Character limit : Version notes : -- Values Values : automatically generated |
