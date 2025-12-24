---
title: "Sync field mappings of account and related objects"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-360-and-zuora-360/zuora-360-overview_1/sync-field-mappings-of-account-and-related-objects"
product: "zuora-platform"
scraped_at: "2025-12-24T18:39:47.143Z"
---

# Sync field mappings of account and related objects

This article shows how the Zuora account and related objects and their fields are mapped and synchronized to Salesforce objects and fields in Zuora 360.

Note:

Each sync objects pair is marked as <Zuora object> : <Salesforce object>.

Any Zuora field marked as "internal" is a field that is not exposed in the Zuora SOAP API. However, these internal fields are synchronized between Zuora and Salesforce in Zuora 360.

The descriptions of the "internal" sync fields are provided in this article. For the descriptions of the standard fields, refer to [SOAP API Object Reference](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/platform/api/SOAP_API_object_reference/soap_api_object_reference.ditamap).

## Account : Zuora\_\_PaymentTerm\_\_c

| Zuora Object | Zuora Field | Salesforce Object | Salesforce Field |
| --- | --- | --- | --- |
| Account | Zuora__PaymentTerm__c |  |  |
|  | PaymentTerm |  | Name |

## Account : Zuora\_\_CustomerAccount\_\_c

| Zuora Object | Zuora Field | Salesforce Object | Salesforce Field | Comments |
| --- | --- | --- | --- | --- |
| Account | Zuora__CustomerAccount__c |  |  |  |
|  | AccountNumber |  | Zuora__AccountNumber__c |  |
|  | AllowInvoiceEdit |  | Zuora__AllowInvoiceEdit__c |  |
|  | AutoPay |  | Zuora__ AutoPay__c |  |
|  | Balance |  | Zuora__ Balance__c |  |
|  | Batch |  | Zuora__Batch__c |  |
|  | BcdSettingOption |  | Zuora__BcdSettingOption__c |  |
|  | BillCycleDay |  | Zuora__BillCycleDay__c |  |
|  | BillToId |  | Zuora__BillToId__c |  |
|  | CommunicationProfileId |  | Zuora__ CommunicationProfileId__c | In Zuora 360 V. 3.1.x |
|  | CommunicationProfileId |  | Zuora__ Communication_Profile_Id__c | In Zuora 360 V. 3.3+ |
|  | CreditBalance |  | Zuora__Credit_Balance__c |  |
|  | Currency |  | Zuora__Currency__c |  |
|  | CustomerServiceRepName |  | Zuora__ CustomerServiceRepName __c |  |
|  | Id |  | Zuora__Zuora_Id__c |  |
|  | Id |  | Zuora__ External_Id__c (External ID) | This unique key is used to determine whether to create a new account or update an existing account. |
|  | InvoiceDeliveryPrefsEmail |  | Zuora__ InvoiceDeliveryPrefsEmail __c |  |
|  | InvoiceDeliveryPrefsPrint |  | Zuora__ InvoiceDeliveryPrefsPrint __c |  |
|  | InvoiceTemplateId |  | Zuora__InvoiceTemplateId__c |  |
|  | LastInvoiceDate |  | Zuora__ LastInvoiceDate__c |  |
|  | MRR (Internal) |  | Zuora__MRR__c |  |
|  | Notes |  | Zuora__Notes__c |  |
|  | PaymentGateway |  | Zuora__PaymentGateway__c |  |
|  | PaymentTerm |  | Zuora__PaymentTerm__c |  |
|  | PurchaseOrderNumber |  | Zuora__ PurchaseOrderNumber__c |  |
|  | SalesRepName |  | Zuora__SalesRepName__c |  |
|  | SoldToId |  | Zuora__SoldToId__c |  |
|  | Status |  | Zuora__Status__c |  |
|  | TaxExemptCertificateID |  | Zuora__ TaxExemptCertificateID__c |  |
|  | TaxExemptCertificateType |  | Zuora__ TaxExemptCertificateType__c |  |
|  | TaxExemptDescription |  | Zuora__ TaxExemptDescription__c |  |
|  | TaxExemptEffectiveDate |  | Zuora__ TaxExemptEffectiveDate__c |  |
|  | TaxExemptExpirationDate |  | Zuora__ TaxExemptExpirationDate__c |  |
|  | TaxExemptIssuingJurisdiction |  | Zuora__ TaxExemptIssuingJurisdiction __c |  |
|  | TaxCompanyCode |  | Zuora__TaxCompanyCode__c | Note that this field is not available in Z360 V5.2 but only in Z360 V5.15 |
|  | TaxExemptStatus |  | Zuora__TaxExemptStatus__c |  |
|  | TotalInvoiceBalance |  | Zuora__ TotalInvoiceBalance__c |  |
|  | VATId |  | Zuora__VAT_Id__c |  |

## PaymentMethod : Zuora\_\_CustomerAccount\_\_c

| Zuora Object | Zuora Field | Salesforce Object | Salesforce Field |
| --- | --- | --- | --- |
| PaymentMethod (referenced through Zuora__CustomerAccount__c. Zuora__DefaultPaymentMethod__c) | Zuora__CustomerAccount__c |  |  |
|  | CreditCardExpirationMonth |  | Zuora__ CreditCard_Expiration__c |
|  | CreditCardExpirationYear |  | Zuora__ CreditCard_Expiration__c |
|  | CreditCardMaskNumber |  | Zuora__ CreditCard_Number__c |
|  | CreditCardType |  | Zuora__ CredtCardType__c |
|  | Type |  | Zuora__DefaultPaymentMethod__c |

## Contact : Zuora\_\_CustomerAccount\_\_c

| Zuora Object | Zuora Field | Salesforce Object | Salesforce Field |
| --- | --- | --- | --- |
| Contact | Zuora__CustomerAccount__c |  |  |
|  | Address1 |  | Zuora__ BillToAddress1__c |
|  | Address2 |  | Zuora__ BillToAddress2__c |
|  | City |  | Zuora__BillToCity__c |
|  | Country |  | Zuora__BillToCountry__c |
|  | Fax |  | Zuora__ BillToFax__c |
|  | FirstName |  | Zuora__ BillToName__c |
|  | LastName |  | Zuora__ BillToName__c |
|  | PostalCode |  | Zuora__ BillToPostalCode__c |
|  | State |  | Zuora__BillToState__c |
|  | WorkEmail |  | Zuora__ BillToWorkEmail__c |
|  | WorkPhone |  | Zuora__ BillToWorkPhone__c |
|  | Address1 |  | Zuora__SoldToAddress1__c |
|  | Address2 |  | Zuora__SoldToAddress2__c |
|  | City |  | Zuora__SoldToCity__c |
|  | Country |  | Zuora__SoldToCountry__c |
|  | Fax |  | Zuora__SoldToFax__c |
|  | FirstName |  | Zuora__SoldToName__c |
|  | LastName |  | Zuora__SoldToName__c |
|  | PostalCode |  | Zuora__SoldToPostalCode__c |
|  | State |  | Zuora__SoldToState__c |
|  | WorkEmail |  | Zuora__SoldToWorkEmail__c |
|  | WorkPhone |  | Zuora__SoldToWorkPhone__c |

## Account : Zuora\_\_Subscription\_\_c

| Zuora Object | Zuora Field | Salesforce Object | Salesforce Field | Comments |
| --- | --- | --- | --- | --- |
| Account (referenced through AccountId) | Zuora__Subscription__c |  |  |  |
|  | CrmId |  | Zuora__Account__c | A foreign key reference to Account |

## Account : Zuora\_\_SubscriptionProductCharge\_\_c

| Zuora Object | Zuora Field | Salesforce Object | Salesforce Field | Comments |
| --- | --- | --- | --- | --- |
| Account (referenced through Subscription's Customer Account) | Zuora__SubscriptionProductCharge__c |  |  |  |
|  | CrmId |  | Zuora__Account__c | A foreign key reference to Account |

## Account : Zuora\_\_SubscriptionProductFeature\_\_c

Note: To create features in the product catalog and use them in subscriptions and Zuora Quotes, you need to enable the following:

-   The Entitlements setting in your tenant.Access to the Entitlements feature requires a specific edition of Zuora. See [Zuora Editions](/entitlements/current-entitlements/zuora-editions)
-   The [Enable Feature Specification in Product and Subscriptions](/zuora-billing/set-up-zuora-billing/billing-settings-configuration) setting in the Billing Settings.

| Zuora Object | Zuora Field | Salesforce Object | Salesforce Field |
| --- | --- | --- | --- |
| Account (Referenced through Subscription's Customer Account) | Zuora__SubscriptionProductFeature__c |  |  |
|  | CrmId |  | Zuora__Account__c |

## Invoice :Zuora\_\_ZInvoice\_\_c

| Zuora Object | Zuora Field | Salesforce Object | Salesforce Field |
| --- | --- | --- | --- |
| Invoice | Zuora__ZInvoice__c |  |  |
|  | Amount |  | Zuora__TotalAmount__c |
|  | Balance |  | Zuora__Balance2__c |
|  | Comments |  | Zuora__Description__c |
|  | CreatedDate |  | Zuora__GeneratedDate__c |
|  | CreditBalanceAdjustmentAmount |  | Zuora__CreditBalanceAdjustmentAmount__c |
|  | DueDate |  | Zuora__DueDate__c |
|  | InvoiceDate |  | Zuora__GeneratedDate__c |
|  | Id |  | Zuora__Zuora_Id__c |
|  | Id |  | Zuora__External_Id__c (External ID) |
|  | InvoiceDate |  | Zuora__InvoiceDate__c |
|  | InvoiceNumber |  | Name |
|  | PostedDate |  | Zuora__PostedDate__c |
|  | Status |  | Zuora__Status__c |
|  | TargetDate |  | Zuora__TargetDate__c |
|  | Reversed |  | Zuora__ReverseFlag__c |

## Payment : Zuora\_\_Payment\_\_c

The Payment object holds all of the information about an individual payment, including the payment amount, and the invoices that the payment is applied to.

| Zuora Object | Zuora Field | Salesforce Object | Salesforce Field | Comments |
| --- | --- | --- | --- | --- |
| Payment | Zuora_Payment_C |  |  |  |
|  | AccountId |  | Zuora__BillingAccount__c | Holds a master/detail reference to the Billing Account object. |
|  | AccountingCode |  | Zuora__AccountingCode__c |  |
|  | Amount |  | Zuora__Amount__c |  |
|  | AppliedCreditBalanceAmount |  | Zuora__ AppliedCreditBalanceAmount__c |  |
|  | AppliedInvoiceAmount |  | Zuora__AppliedInvoiceAmount__c |  |
|  | AuthTransactionId |  | Zuora__AuthTransactionId__c |  |
|  | BankIdentificationNumber |  | Zuora__ BankIdentificationNumber__c |  |
|  | CancelledOn |  | Zuora__CancelledOn__c |  |
|  | Comment |  | Zuora__Comment__c |  |
|  | CreatedById |  | Zuora__CreatedById__c | The username of the user identified by CreatedById |
|  | CreatedDate |  | Zuora__CreateDate__c | The date when the object was created in Zuora system. |
|  | EffectiveDate |  | Zuora__EffectiveDate__c |  |
|  |  |  |  |  |
|  | GatewayOrderId |  | Zuora__GatewayOrderId__c |  |
|  | GatewayResponse |  | Zuora__GatewayResponse__c |  |
|  | GatewayResponseCode |  | Zuora__ GatewayResponseCode__c |  |
|  | GatewayState |  | Zuora__GatewayStatus__c |  |
|  | Id |  | Zuora__External_Id__c |  |
|  | InvoiceId |  | Zuora__Invoice__c | The latest version of the connector, Zuora connectors for Salesforce CRM, no longer supports these fields. Refer the below tables:PaymentInvoicePaymentPart |
|  | InvoiceNumber |  | Zuora__InvoiceNumber__c |  |
|  | MarkedForSubmissionOn |  | Zuora__ MarkedForSubmissionOn__c |  |
|  | PaymentMethod |  | Zuora__PaymentMethod__c |  |
|  | ReferenceId |  | Zuora__ReferenceId__c |  |
|  | RefundAmount |  | Zuora__RefundedAmount__c |  |
|  | SecondPaymentReferenceId |  | Zuora__ SecondPaymentReferenceId__c |  |
|  | SettledOn |  | Zuora__SettledOn__c |  |
|  | SoftDescriptor |  | Zuora__SoftDescriptor__c |  |
|  | SoftDescriptorPhone |  | Zuora__SoftDescriptorPhone__c |  |
|  | Status |  | Zuora__Status__c |  |
|  | SubmittedOn |  | Zuora__SubmittedOn__c |  |
|  | TransferredToAccounting |  | Zuora__ TransferedToAccounting__c |  |
|  | Type |  | Zuora__Type__c |  |
|  | UpdateById |  | Zuora__UpdatedById__c | The username of the user identified by UpdatedById |
|  | UpdatedDate |  | Zuora__UpdatedDate__c |  |

## InvoicePayment : Zuora\_\_PaymentInvoice\_\_c

An Invoice Payment is a mechanism to tie a payment to an invoice and indicate how much of the payment to apply to the invoice. The Zuora\_\_PaymentInvoice\_\_c object has a master-detail relationship to the Payment object and a lookup relationship to the Invoice object.

| Zuora Object | Zuora Field | Salesforce Object | Salesforce Field | Comments |
| --- | --- | --- | --- | --- |
| InvoicePayment | Zuora__PaymentInvoice__c |  |  |  |
|  | Amount |  | Zuora__ ApplyAmount__c |  |
|  | Id |  | Zuora__ External_Id__c |  |
|  | InvoiceId |  | Zuora__ Invoice__c | Holds a lookup reference to the Invoice object. |
|  | PaymentId |  | Zuora__ Payment__c | Holds a master/detail reference to the Payment object. |
|  | RefundAmount |  | Zuora__ RefundAmount__c |  |

## Refund : Zuora\_\_Refund\_\_c

The Refund object holds all of the information about each Refund processed in Zuora, including refund amount, refund type, refund date, refund number, and additional information about the refund.

This object was added in Zuora 360 version 2.5.

| Zuora Object | Zuora Field | Salesforce Object | Salesforce Field | Comments |
| --- | --- | --- | --- | --- |
| Refund | Zuora__Refund__c |  |  |  |
|  | AccountId |  | Zuora__BillingAccount__c | Holds a master/detail reference to the Billing Account object. |
|  | AccountingCode |  | Zuora__AccountingCode__c |  |
|  | Amount |  | Zuora__Amount__c |  |
|  | Comment |  | Zuora__Comment__c | Use this optional field as a note. |
|  | CreateById |  | Zuora__CreatedById__c | The username of the user identified by CreatedById |
|  | CreatedDate |  | Zuora__CreatedDate__c | Date and Time when the refund is created. |
|  | GatewayResponse |  | Zuora__ GatewayResponse__c | The message returned from the payment gateway for a given refund. This is gateway dependent. |
|  | Id |  | Zuora__External_Id__c |  |
|  | MethodType |  | Zuora__ RefundMethodType__c | Refund Method type |
|  | PaymentId |  | Zuora__Payment__c | This contains the payment reference in the case where a refund is associated with one payment and invoice. |
|  | PaymentMethodId |  | Zuora__ PaymentMethod__c | A valid payment method ID, indicating the method being used to make the refund. |
|  | ReasonCode |  | Zuora__ ReasonCodeName__c | The reason code specified in Zuora. |
|  | ReferenceId |  | Zuora__ReferenceId__c | The date of the refund. The date of this refund cannot be before the payment date. |
|  | RefundDate |  | Zuora__RefundDate__c |  |
|  | RefundTransactionTime |  | Zuora__ RefundTransactionTime__c | The date and time when the refund was issued. |
|  | SoftDescriptor |  | Zuora__SoftDescriptor__c |  |
|  | SoftDescriptorPhone |  | Zuora__ SoftDescriptorPhone__c |  |
|  | SourceType |  | Zuora__SourceType__c | Specifies whether the refund is a refund payment or a credit balance. The possible values are Payment and CreditBalance. |
|  | Status |  | Zuora__Status__c |  |
|  | TransferredToAccounting |  | Zuora__ TransferedToAccounting__c |  |
|  | Type |  | Zuora__Type__c |  |
|  | UpdateById |  | Zuora__UpdatedById__c | The user name of the user identified by UpdatedById. |
|  | UpdatedDate |  | Zuora__UpdatedDate__c |  |

## RefundInvoicePayment : Zuora\_\_RefundInvoicePayment\_\_c

The Zuora\_\_RefundInvoicePayment\_\_c object represents the relationship object between Refund and InvoicePayment. A refund can be associated with multiple payments for invoices, and multiple refunds can be made for one payment for invoices. This relation is left empty for credit balance refunds.

This object was added in Zuora 360 version 2.5.

| Zuora Object | Zuora Field | Salesforce Object | Salesforce Field | Comments |
| --- | --- | --- | --- | --- |
| RefundInvoicePayment | Zuora__RefundInvoicePayment__c |  |  |  |
|  | InvoicePaymentId |  | Zuora__InvoicePayment__c | The invoice payment reference. |
|  | RefundId |  | Zuora__Refund__c | The master detail relation to the Refund object. |
|  | RefundAmount |  | Zuora__RefundAmount__c | The amount of the refund that was applied to this invoice payment referenced in this object. |

## PaymentMethod : Zuora\_\_PaymentMethod\_\_c

The Zuora\_\_PaymentMethod\_\_c object was added in Zuora 360 version 2.5.

| Zuora Object | Zuora Field | Salesforce Object | Salesforce Field |
| --- | --- | --- | --- |
| PaymentMethod | Zuora__PaymentMethod__c |  |  |
|  | AccountId |  | Zuora__BillingAccount__c |
|  | AchAbaCode |  | Zuora__AchAbaCode__c |
|  | AchAccountName |  | Zuora__AchAccountName__c |
|  | AchAccountNumberMask |  | Zuora__AchAccountNumberMask__c |
|  | AchAccountType |  | Zuora__AchAccountType__c |
|  | AchBankName |  | Zuora__AchBankName__c |
|  | Active |  | Zuora__Active__c |
|  | BankBranchCode |  | Zuora__BankBranchCode__c |
|  | BankCheckDigit |  | Zuora__BankCheckDigit__c |
|  | BankCity |  | Zuora__BankCity__c |
|  | BankCode |  | Zuora__BankCode__c |
|  | BankIdentificationNumber |  | Zuora__BankIdentificationNumber__c |
|  | BankName |  | Zuora__BankName__c |
|  | BankPostalCode |  | Zuora__BankPostalCode__c |
|  | BankStreetName |  | Zuora__BankStreetName__c |
|  | BankStreetNumber |  | Zuora__BankSteetNumber__c |
|  | BankTransferAccountName |  | Zuora__BankTransferAccountName__c |
|  | BankTransferAccountNumber |  | Zuora__BankTransferAccountNumber__c |
|  | BankTransferAccountType |  | Zuora__BankTransferAccountType__c |
|  | BankTransferType |  | Zuora__BankTransferType__c |
|  | BusinessIdentificationCode |  | Zuora__BusinessIdentificationCode__c |
|  | City |  | Zuora__City__c |
|  | Country |  | Zuora__Country__c |
|  | CreatedById |  | Zuora__CreatedBy__c |
|  | CreatedDate |  | Zuora__CreatedDate__c |
|  | CreditCardAddress1 |  | Zuora__CreditCardAddress1__c |
|  | CreditCardAddress2 |  | Zuora__CreditCardAddress2__c |
|  | CreditCardCity |  | Zuora__CreditCardCity__c |
|  | CreditCardCountry |  | Zuora__CreditCardCountry__c |
|  | CreditCardExpirationMonth |  | Zuora__ CreditCardExpirationMonth__c |
|  | CreditCardExpirationYear |  | Zuora__CreditCardExpirationYear__c |
|  | CreditCardHolderName |  | Zuora__CreditCardHolderName__c |
|  | CreditCardMaskNumber |  | Zuora__CreditCardMaskNumber__c |
|  | CreditCardPostalCode |  | Zuora__CreditCardPostalCode__c |
|  | CreditCardState |  | Zuora__CreditCardState__c |
|  | CreditCardType |  | Zuora__CreditCardType__c |
|  | DeviceSessionId |  | Zuora__DeviceSessionId__c |
|  | Default Payment Method |  | Zuora__DefaultPaymentMethod__c |
|  | Email |  | Zuora__Email__c |
|  | ExistingMandate |  | Zuora__ ExistingMandate__c |
|  | FirstName |  | Zuora__FirstName__c |
|  | IBAN |  | Zuora__IBAN__c |
|  | IPAddress |  | Zuora__IPAddress__c |
|  | LastFailedSaleTransactionDate |  | Zuora__LastFailedSaleTransactionDate__c |
|  | LastName |  | Zuora__LastName__c |
|  | LastTransactionDateTime |  | Zuora__LastTransactionDateTime__c |
|  | LastTransactionStatus |  | Zuora__LastTransactionStatus__c |
|  | MandateCreationDate |  | Zuora__MandateCreationDate__c |
|  | MandateID |  | Zuora__MandateID__c |
|  | MandateReceived |  | Zuora__MandateReceived__c |
|  | MandateUpdateDate |  | Zuora__MandateUpdateDate__c |
|  | MaxConsecutivePaymentFailures |  | Zuora__MaxConsecutivePaymentFailures__c |
|  | Name |  | Zuora__Name__c |
|  | NumConsecutiveFailures |  | Zuora__NumConsecutiveFailures__c |
|  | PaymentMethodStatus |  | Zuora__PaymentMethodStatus__c |
|  | PaymentRetryWindow |  | Zuora__PaymentRetryWindow__c |
|  | PaypalBaid |  | Zuora__PaypalBaid__c |
|  | PaypalEmail |  | Zuora__PaypalEmail__c |
|  | PaypalPreapprovalKey |  | Zuora__PaypalPreapprovalKey__c |
|  | PaypalType |  | Zuora__PaypalType__c |
|  | Phone |  | Zuora__Phone__c |
|  | PostalCode |  | Zuora__PostalCode__c |
|  | SecondTokenId |  | Zuora__Second_Token_ID__c |
|  | State |  | Zuora__State__c |
|  | StreetName |  | Zuora__StreetName__c |
|  | StreetNumber |  | Zuora__StreetNumber__c |
|  | TokenId |  | Zuora__Token_ID__c |
|  | TotalNumberOfErrorPayments |  | Zuora__TotalNumberOfErrorPayments__c |
|  | TotalNumberOfProcessedPayments |  | Zuora__TotalNumberOfProcessedPayments__c |
|  | Type |  | Zuora__Type__c |
|  | UpdatedById |  | Zuora__UpdatedById__c |
|  | UpdatedDate |  | Zuora__UpdatedDate__c |
|  | UseDefaultRetryRule |  | Zuora__UseDefaultRetryRule__c |
