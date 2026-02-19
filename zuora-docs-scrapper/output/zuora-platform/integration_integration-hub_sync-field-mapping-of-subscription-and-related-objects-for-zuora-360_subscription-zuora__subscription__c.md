---
title: "Subscription : Zuora__Subscription__c"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/sync-field-mapping-of-subscription-and-related-objects-for-zuora-360/subscription--zuora__subscription__c"
product: "zuora-platform"
scraped_at: "2026-02-19T03:36:53.941Z"
---

# Subscription : Zuora\_\_Subscription\_\_c

Zuora 360+ performs an UPSERT action for Subscription records, mapping various fields between Zuora and Salesforce.

The following table lists the Zuora and Salesforce fields.

| Zuora Object | Zuora Field | Salesforce Object | Salesforce Field | Comments |
| --- | --- | --- | --- | --- |
| Subscription | Zuora__Subscription__c |  |  |  |
|  | AutoRenew |  | Zuora__AutoRenew__c |  |
|  | CancelledDate |  | Zuora__CancelledDate __c |  |
|  | ContractAcceptanceDate |  | Zuora__ ContractAcceptanceDate __c |  |
|  | ContractEffectiveDate |  | Zuora__ ContractEffectiveDate__c |  |
|  | CurrentTerm |  | Zuora__CurrentTerm__c | Supported in Zuora 360, Version 3.40+.To use the field in Order Builder, use Zuora WSDL, Version 80+. |
|  | CurrentTermPeriodType |  | Zuora__ CurrentTermPeriodType__c | Supported in Zuora 360, Version 3.40+.To use the field in Order Builder, use Zuora WSDL, Version 80+. |
|  | Id |  | Zuora__Zuora_Id__c |  |
|  | id |  | Zuora__External_Id__c (External ID) |  |
|  | InitialTerm |  | Zuora__InitialTerm__c |  |
|  | InitialTermPeriodType |  | Zuora__ InitialTermPeriodType__c | Supported in Zuora 360, Version 3.40+.To use the field in Order Builder, use Zuora WSDL, Version 80+. |
|  | AccountId |  | Zuora__InvoiceOwner__c |  |
|  | MRR (internal) |  | Zuora__MRR__c | Monthly Recurring Revenue for this subscription |
|  | Name |  | Name |  |
|  | NextChargeDate (internal) |  | Zuora__ NextChargeDate__c | An internal date when the charge is to be invoiced next.If you want to sync this field in Real-time Sync and Turbo Sync, you need to have the tenant level setting turned on.Submit a request at Zuora Global Support to enable this feature or service. |
|  | Notes |  | Zuora__Notes__c |  |
|  | OpportunityCloseDate __QT |  | Zuora__ OpportunityCloseDate__c |  |
|  | OpportunityName__QT |  | Zuora__OpportunityName __c |  |
|  | OriginalCreatedDate |  | Zuora__ OriginalCreated_Date__c |  |
|  | OriginalId |  | Zuora__OriginalId__c |  |
|  | PreviousSubscriptionId |  | Zuora__ PreviousSubscriptionId__c |  |
|  | QuoteBusinessType __QT |  | Zuora__ QuoteBusinessType__c |  |
|  | QuoteNumber__QT |  | Zuora__QuoteNumber__c |  |
|  | QuoteType__QT |  | Zuora__QuoteType__c |  |
|  | RenewalTerm |  | Zuora__ RenewalTerm__c |  |
|  | RenewalTermPeriodType |  | Zuora__ RenewalTermPeriodType__c | Supported in Zuora 360, Version 3.40+.To use the field in Order Builder, use Zuora WSDL, Version 80+. |
|  | SubscriptionEndDate |  | Zuora__ SubscriptionEndDate__c |  |
|  | SubscriptionStartDate |  | Zuora__ SubscriptionStartDate__c |  |
|  | ServiceActivationDate |  | Zuora__ ServiceActivationDate__c |  |
|  | TCV (internal) |  | Zuora__TCV__c | Total Contract Value of this subscription |
|  | TermStartDate |  | Zuora__ TermStartDate__c |  |
|  | TermEndDate |  | Zuora__ TermEndDate__c |  |
|  | TermEndDate |  | Zuora__ NextRenewalDate__c |  |
|  | TermType |  | Zuora__ TermSettingType__c |  |
|  | Version |  | Zuora__Version__c |  |
|  | SubscriptionStatus |  | Zuora__Status__c |  |
|  | SubscriptionNumber |  | Zuora__SubscriptionNumber__c |  |
|  | Account |  | Zuora__Account__c |  |
|  | BillingAccount |  | Zuora__CustomerAccount__c |  |

## NextChargeDate

The subscription's Next Charge Date is the rate plan charge's Invoice Through Date (Zuora API Name: RatePlanCharge.<wbr/>ChargedThroughDate) in Zuora. For example, if the charge was last invoiced from 05/01/2014 to 05/31/2014, the charge's Invoice Through Date and subscription's Next Charge Date would be 06/01/2014. If the subscription has multiple rate plan charges which have different billing periods, it would be the earliest Invoice Through Date of one the charges.
