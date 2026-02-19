---
title: "Zuora SubscriptionRatePlan Fields Synced in Zuora 360+"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/rate-plan--zuora__subscriptionrateplan__c/zuora-subscriptionrateplan-fields-synced-in-zuora-360"
product: "zuora-platform"
scraped_at: "2026-02-19T03:35:31.491Z"
---

# Zuora SubscriptionRatePlan Fields Synced in Zuora 360+

This document provides field mappings between Zuora SubscriptionRatePlan and Salesforce Zuora\_\_SubscriptionRatePlanHistory\_\_c when Subscription History sync is enabled in Zuora 360+.

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
