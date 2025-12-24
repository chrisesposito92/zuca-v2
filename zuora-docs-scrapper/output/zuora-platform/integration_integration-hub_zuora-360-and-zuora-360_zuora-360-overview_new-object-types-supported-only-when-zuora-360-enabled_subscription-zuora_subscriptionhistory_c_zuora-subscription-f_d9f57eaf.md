---
title: "Zuora Subscription fields synced in Zuora 360 but not in Zuora 360+"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-360-and-zuora-360/zuora-360-overview/new-object-types-supported-only-when-zuora-360-enabled/subscription-zuora_subscriptionhistory_c/zuora-subscription-fields-synced-in-zuora-360-but-not-in-zuora-360"
product: "zuora-platform"
scraped_at: "2025-12-24T18:35:40.468Z"
---

# Zuora Subscription fields synced in Zuora 360 but not in Zuora 360+

This topic explains the Zuora Subscription fields synced to Salesforce by Zuora 360, excluding those synced when Subscription History is enabled in Zuora 360+.

The following fields of Zuora Subscription are synced to Zuora\_\_Subscription\_\_c by Zuora 360 if you do not turn on Subscription History in Zuora 360+. These fields are not synced to Zuora\_\_SubscriptionHistory\_\_c in Zuora 360+ when Subscription History sync is turned on.

| SFDC Field Name | SFDC API Name |
| --- | --- |
| Account | Zuora__Account__c |
| CMRR | Zuora__MRR__c |
| Next Charge Date | Zuora__NextChargeDate__c |
| Next Renewal Date | Zuora__NextRenewalDate__c |
| Opportunity Close Date | Zuora__OpportunityCloseDate__c |
| Opportunity Name | Zuora__OpportunityName__c |
| Quote Business Type | Zuora__QuoteBusinessType__c |
| Quote Number | Zuora__QuoteNumber__c |
| Quote Type | Zuora__QuoteType__c |
| Original Created Date (Deprecated) | Zuora__OriginalCreatedDate__c |
| TCV | Zuora__TCV__c |
| Zuora Id (Deprecated) | Zuora__Zuora_Id__c |
