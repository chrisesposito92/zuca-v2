---
title: "Payment : Zuora__Payment__c(Account)"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/sync-field-mapping-of-account-and-related-objects-for-zuora-360/payment--zuora__payment__caccount"
product: "zuora-platform"
scraped_at: "2026-02-19T03:36:37.853Z"
---

# Payment : Zuora\_\_Payment\_\_c(Account)

The Payment object contains detailed information about individual payments, including the payment amount and associated invoices. It is synchronized with Zuora 360+.

The Payment object holds all of the information about an individual payment, including the payment amount, and the invoices that the payment is applied to.

Following fields of Zuora Payment are synced in Zuora 360+.

| Zuora Object | Zuora Field | Salesforce Object | Salesforce Field | Comments |
| --- | --- | --- | --- | --- |
| Payment | Zuora__Payment__c |  |  |  |
|  | Account |  | Zuora__Account__c |  |
|  | Accounting Code |  | Zuora__AccountingCode__c |  |
|  | Amount |  | Zuora__Amount__c |  |
|  | Applied Amount |  | Zuora__AppliedAmount__c |  |
|  | Applied Credit Balance Amount |  | Zuora__AppliedCreditBalanceAmount__c |  |
|  | Applied Invoice Amount |  | Zuora__AppliedInvoiceAmount__c | The value of this field is calculated from the invoice payment. |
|  | Auth Transaction ID |  | Zuora__AuthTransactionId__c |  |
|  | Bank Identification Number |  | Zuora__BankIdentificationNumber__c |  |
|  | Billing Account |  | Zuora__BillingAccount__c |  |
|  | Cancelled On |  | Zuora__CancelledOn__c |  |
|  | Comment |  | Zuora__Comment__c |  |
|  | Created By ID |  | Zuora__CreatedById__c |  |
|  | Created Date |  | Zuora__CreatedDate__c |  |
|  | Effective Date |  | Zuora__Effective_Date__c |  |
|  | Gateway Order ID |  | Zuora__GatewayOrderId__c |  |
|  | Gateway Response |  | Zuora__GatewayResponse__c |  |
|  | Gateway Response Code |  | Zuora__GatewayResponseCode__c |  |
|  | Gateway State |  | Zuora__GatewayStatus__c |  |
|  | Invoice |  | Zuora__Invoice__c | The latest version of the connector, Zuora connectors for Salesforce CRM, no longer supports these fields. Please refer to the below tables:PaymentInvoicePaymentPart |
|  | Invoice Number |  | Zuora__InvoiceNumber__c |  |
|  | Unique External Id |  | Zuora__EXT_ID__c |  |
|  | Marked For Submission On |  | Zuora__MarkedForSubmissionOn__c |  |
|  | Payment Method Id |  | Zuora__PaymentMethodId__c |  |
|  | Payment Method |  | Zuora__Payment_Method__c | This field was deprecated in the past due to limitations in Zuora 360 that prevented this field from being populated. However, Zuora 360+ can populate this field. Therefore, you can use this field if you have Zuora 360+ enabled.Note: If the payment method is external, this lookup field will be blank. |
|  | PaymentNumber |  | Zuora__PaymentNumber__c |  |
|  | Reference ID |  | Zuora__ReferenceId__c |  |
|  | Refund Amount (AR Settlement) |  | Zuora__RefundAmount__c |  |
|  | Refund Amount |  | Zuora__RefundedAmount__c | The value of this field is calculated from the invoice payment. |
|  | Second Payment Reference ID |  | Zuora__SecondPaymentReferenceId__c |  |
|  | Settled On |  | Zuora__SettledOn__c |  |
|  | Soft Descriptor |  | Zuora__SoftDescriptor__c |  |
|  | Soft Descriptor Phone |  | Zuora__SoftDescriptorPhone__c |  |
|  | Status |  | Zuora__Status__c |  |
|  | Submitted On |  | Zuora__SubmittedOn__c |  |
|  | Transferred to Accounting |  | Zuora__TransferedToAccounting__c |  |
|  | Type |  | Zuora__Type__c |  |
|  | Unapplied Amount |  | Zuora__UnappliedAmount__c |  |
|  | Updated By ID |  | Zuora__UpdatedById__c |  |
|  | Updated Date |  | Zuora__UpdatedDate__c |  |
