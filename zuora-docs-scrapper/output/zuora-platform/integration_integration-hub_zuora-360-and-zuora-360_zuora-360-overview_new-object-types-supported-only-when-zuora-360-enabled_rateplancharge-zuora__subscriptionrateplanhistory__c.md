---
title: "RatePlanCharge: Zuora__SubscriptionRatePlanHistory__c"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-360-and-zuora-360/zuora-360-overview/new-object-types-supported-only-when-zuora-360-enabled/rateplancharge-zuora__subscriptionrateplanhistory__c"
product: "zuora-platform"
scraped_at: "2025-12-24T18:35:44.869Z"
---

# RatePlanCharge: Zuora\_\_SubscriptionRatePlanHistory\_\_c

The RatePlanCharge History objects sync is supported from Zuora 360 Version 5.2, with field mappings available between Zuora SubscriptionRatePlan and Salesforce Zuora\_\_SubscriptionRatePlanHistory\_\_c.

The following table lists the RatePlanCharge History objects:

## Zuora SubscriptionRatePlan Fields Synced in Zuora 360+

See the following table for the field mappings between Zuora SubscriptionRatePlan and Salesforce Zuora\_\_SubscriptionRatePlanHistory\_\_c when Subscription History sync is turned on in Zuora 360+.

| Zuora Object | Zuora Field | Salesforce Object | Salesforce Field | Comments |
| --- | --- | --- | --- | --- |
| SubscriptionRatePlan | Zuora__SubscriptionRatePlanHistory__c |  |  |  |
|  | ID |  | Zuora__External_Id__c |  |
|  | Subscription |  | Zuora__SubscriptionHistory__c |  |
|  | Name |  | Zuora__SubscriptionRatePlanName__c |  |
|  | Created Date |  | Zuora__CreatedDate__c | This field is newly added in Zuora__SubscriptionRatePlanHistory__c, but not in Zuora__SubscriptionRatePlan__c |
|  | Updated Date |  | Zuora__UpdatedDate__c | This field is newly added in Zuora__SubscriptionRatePlanHistory__c, but not in Zuora__SubscriptionRatePlan__c |
|  | Amendment Type |  | Zuora__AmendmentType__c |  |
|  | Name |  | Name |  |
