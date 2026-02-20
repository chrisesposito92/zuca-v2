---
title: "Rate Plan : Zuora__SubscriptionRatePlanHistory__c"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/sync-field-mapping-of-subscription-and-related-objects-for-zuora-360/rate-plan--zuora__subscriptionrateplanhistory__c"
product: "zuora-platform"
scraped_at: "2026-02-20T21:17:31.141Z"
---

# Rate Plan : Zuora\_\_SubscriptionRatePlanHistory\_\_c

This topic details the synchronization of Subscription Rate Plan History objects supported since Zuora 360 Version 5.2, including field mappings between Zuora SubscriptionRatePlan and Salesforce Zuora\_\_SubscriptionRatePlanHistory\_\_c.

The sync of Subscription Rate Plan History objects has been supported since Zuora 360 Version 5.2.

See the following table for the field mappings between Zuora SubscriptionRatePlan and Salesforce Zuora\_\_SubscriptionRatePlanHistory\_\_c when Subscription History sync is turned on in Zuora 360+.

| Zuora Object | Zuora Field | Salesforce Object | Salesforce Field | Comments |
| --- | --- | --- | --- | --- |
| SubscriptionRatePlan | Zuora__SubscriptionRatePlanHistory__c |  |  |  |
|  | External Id |  | Zuora__External_Id__c |  |
|  | Subscription |  | Zuora__SubscriptionHistory__c |  |
|  | Subscription Rate Plan Name (Long Name) |  | Zuora__SubscriptionRatePlanName__c |  |
|  | Zuora Created Date |  | Zuora__CreatedDate__c | This field is newly added in Zuora__SubscriptionRatePlanHistory__c, but not in Zuora__SubscriptionRatePlan__c |
|  | Zuora Updated Date |  | Zuora__UpdatedDate__c | This field is newly added in Zuora__SubscriptionRatePlanHistory__c, but not in Zuora__SubscriptionRatePlan__c |
|  | Amendment Type |  | Zuora__AmendmentType__c |  |
|  | Subscription Rate Plan Name (Short Name) |  | Name |  |
