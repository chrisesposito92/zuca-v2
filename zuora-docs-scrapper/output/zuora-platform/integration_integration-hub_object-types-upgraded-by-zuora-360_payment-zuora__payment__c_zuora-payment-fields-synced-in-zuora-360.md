---
title: "Zuora Payment fields synced in Zuora 360+"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/object-types-upgraded-by-zuora-360/payment-zuora__payment__c/zuora-payment-fields-synced-in-zuora-360"
product: "zuora-platform"
scraped_at: "2026-02-19T03:35:48.204Z"
---

# Zuora Payment fields synced in Zuora 360+

This topic details the synchronization of Zuora Payment fields in Zuora 360+, including field mappings between Zuora and Salesforce objects.

The following fields of Zuora Payment are synced in Zuora 360+.

| Zuora Object | Zuora Field | Salesforce Object | Salesforce Field | Comments |
| --- | --- | --- | --- | --- |
| Payment | Zuora__Payment__c |  |  |  |
|  | Account |  | Zuora__Account__c |  |
|  | Accounting Code |  | Zuora__AccountingCode__c |  |
|  | Amount |  | Zuora__Amount__c |  |
|  | Applied Amount |  | Zuora__AppliedAmount__c |  |
|  | Applied Credit Balance Amount |  | Zuora__AppliedCreditBalanceAmount__c |  |
|  |  |  | Zuora__AppliedInvoiceAmount__c | The value of this field is calculated from the invoice payment. |
|  | Authorized Transaction ID |  | Zuora__AuthTransactionId__c |  |
|  | Bank Identification Number |  | Zuora__BankIdentificationNumber__c |  |
|  | Billing Account |  | Zuora__BillingAccount__c |  |
|  | Cancelled On |  | Zuora__CancelledOn__c |  |
|  | Comment |  | Zuora__Comment__c |  |
|  | Created By ID |  | Zuora__CreatedById__c | In Zuora 360, "Created By" is synced to Salesforce. In Zuora 360+, "Created By ID" is synced. |
|  | Created Date |  | Zuora__CreatedDate__c |  |
|  | Effective Date |  | Zuora__Effective_Date__c |  |
|  | Gateway Order ID |  | Zuora__GatewayOrderId__c |  |
|  | Gateway Response |  | Zuora__GatewayResponse__c |  |
|  | Gateway Response Code |  | Zuora__GatewayResponseCode__c |  |
|  | Gateway State |  | Zuora__GatewayStatus__c |  |
|  | ID |  | Zuora__EXT_ID__c |  |
|  | Marked For Submission On |  | Zuora__MarkedForSubmissionOn__c |  |
|  | Payment Method Id |  | Zuora__PaymentMethodId__c |  |
|  | Payment Method |  | Zuora__Payment_Method__c | This field was deprecated in the past due to limitations in Zuora 360 that prevented this field from being populated. However, Zuora 360+ can populate this field. Therefore, you can use this field if you have Zuora 360+ enabled.Note: If the payment method is external, this lookup field is blank. |
|  | Payment Number |  | Zuora__PaymentNumber__c |  |
|  | Reference ID |  | Zuora__ReferenceId__c |  |
|  | Refund Amount |  | Zuora__RefundAmount__c |  |
|  |  |  | Zuora__RefundedAmount__c | The value of this field is calculated from the invoice payment. |
|  | Second Payment Reference ID |  | Zuora__SecondPaymentReferenceId__c |  |
|  | Settled On |  | Zuora__SettledOn__c |  |
|  | Soft Descriptor |  | Zuora__SoftDescriptor__c |  |
|  | Soft Descriptor Phone |  | Zuora__SoftDescriptorPhone__c |  |
|  | Status |  | Zuora__Status__c |  |
|  | Submitted On |  | Zuora__SubmittedOn__c |  |
|  | Transferred to Accounting |  | Zuora__TransferedToAccounting__c |  |
|  | Type |  | Zuora__Type__c |  |
|  | Unapplied Amount |  | Zuora__UnappliedAmount__c |  |
|  | Updated By ID |  | Zuora__UpdatedById__c | In Zuora 360, "Updated By" is synced to Salesforce. In Zuora 360+, "Updated By ID" is synced. |
|  | Updated Date |  | Zuora__UpdatedDate__c |  |
