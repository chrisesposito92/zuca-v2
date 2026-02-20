---
title: "Zuora SubscriptionRatePlan fields synced in Zuora 360 but not in Zuora 360+"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/rate-plan--zuora__subscriptionrateplan__c/zuora-subscriptionrateplan-fields-synced-in-zuora-360-but-not-in-zuora-360"
product: "zuora-platform"
scraped_at: "2026-02-20T21:15:58.100Z"
---

# Zuora SubscriptionRatePlan fields synced in Zuora 360 but not in Zuora 360+

The fields of Zuora SubscriptionRatePlan are synced to Zuora\_\_SubscriptionRatePlan\_\_c by Zuora 360, but not to Zuora\_\_SubscriptionRatePlanHistory\_\_c in Zuora 360+ when Subscription History sync is enabled.

The following fields of Zuora SubscriptionRatePlan are synced to Zuora\_\_SubscriptionRatePlan\_\_c by Zuora 360 if you do not turn on Subscription History in Zuora 360+. These fields are not synced to Zuora\_\_SubscriptionRatePlanHistory\_\_c in Zuora 360+ when Subscription History sync is turned on.

| SFDC Field Name | SFDC API Name |
| --- | --- |
| Account | Zuora__Account__c |
| Amendment Id | Zuora__AmendmentId__c |
| Amendment Subscription Rate Plan Id | Zuora__AmendmentSubscriptionRatePlanId__c |
| Original Product Rate Plan Id | Zuora__OriginalProductRatePlanId__c |
| Original Subscription Rate Plan Id | Zuora__OriginalSubscriptionRatePlanId__c |
| Product Rate Plan Id | Zuora__ProductRatePlanId__c |
| Subscription | Zuora__Subscription__c |
