---
title: "Invoice: Zuora__ZInvoice__c"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm/objects-and-field-mapping/field-mapping-of-account-and-related-objects/invoice-zuora__zinvoice__c"
product: "zuora-platform"
scraped_at: "2025-12-24T08:33:42.498Z"
---

# Invoice: Zuora\_\_ZInvoice\_\_c

This reference topic details the mapping and synchronization of Zuora account objects and fields with Salesforce objects in the Zuora Connector for Salesforce CRM.

The following table lists the Zuora and Salesforce fields:

| Zuora Object | Zuora Field | Salesforce Object | Salesforce Field | Comments |
| --- | --- | --- | --- | --- |
| Invoice | Zuora__ZInvoice__c |  |  |  |
|  | Account |  | Zuora__Account__c | Holds a lookup reference to the Account object. |
|  | Adjustment Amount |  | Zuora__AdjustmentAmount__c |  |
|  | Age Bucket |  | Zuora__Age_Bucket__c |  |
|  | Amount Without Tax |  | Zuora__AmountWithoutTax__c |  |
|  | Balance |  | Zuora__Balance2__c |  |
|  | Billing Account |  | Zuora__BillingAccount__c |  |
|  | Bill To Contact Id |  | Zuora__BillToId__c |  |
|  | Credit Balance Adjustment Amount |  | Zuora__CreditBalanceAdjustmentAmount__c |  |
|  | Due Date |  | Zuora__DueDate__c |  |
|  | Description |  | Zuora__Description__c |  |
|  | Invoice Date |  | Zuora__InvoiceDate__c |  |
|  | Invoice ID |  | Zuora__ZuoraId__c |  |
|  | External Id |  | Zuora__External_Id__c |  |
|  | Generated On Date |  | Zuora__Generated_Date__c | In Zuora, this field is an internal field and is not available to users. |
|  | Invoice Date |  | Zuora__InvoiceDate__c |  |
|  | Payment Amount |  | Zuora__PaymentAmount__c |  |
|  | Payment Term |  | Zuora__PaymentTerm__c |  |
|  | Payment Term |  | Zuora__Payment_Term__c | Holds a lookup reference to the Payment Term object. |
|  | Posted On Date |  | Zuora__PostedDate__c |  |
|  | Refunded Amount |  | Zuora__RefundedAmount__c |  |
|  | Sold To Contact Id |  | Zuora__SoldToId__c |  |
|  | Status |  | Zuora__Status__c |  |
|  | Target Date |  | Zuora__TargetDate__c |  |
|  | Tax Amount |  | Zuora__TaxAmount__c |  |
|  | Tax Exempt Amount |  | Zuora__TaxExemptAmount__c |  |
|  | Total Amount |  | Zuora__TotalAmount__c |  |
|  | Zuora Created Date |  | Zuora__CreatedDate__c |  |
|  | Zuora Id |  | Zuora__Zuora_Id__c |  |
|  | Zuora Updated Date |  | Zuora__UpdatedDate__c |  |
|  |  |  |  |  |
|  | WeeklyBillCycleDay |  | Zuora__WeeklyBillCycleDay__c |  |
| The above fields of Zuora Invoice are synced in Zuora Connector for Salesforce CRM. By default, invoices are synchronized with Salesforce only if they have a Posted status. |  |  |  |  |
