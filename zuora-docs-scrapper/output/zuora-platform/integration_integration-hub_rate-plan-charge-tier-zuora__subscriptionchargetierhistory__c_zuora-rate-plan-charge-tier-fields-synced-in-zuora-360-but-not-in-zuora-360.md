---
title: "Zuora Rate Plan Charge Tier fields synced in Zuora 360 but not in Zuora 360+"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/rate-plan-charge-tier--zuora__subscriptionchargetierhistory__c/zuora-rate-plan-charge-tier-fields-synced-in-zuora-360-but-not-in-zuora-360"
product: "zuora-platform"
scraped_at: "2026-02-20T21:15:58.134Z"
---

# Zuora Rate Plan Charge Tier fields synced in Zuora 360 but not in Zuora 360+

This topic details the synchronization of Zuora Rate Plan Charge Tier fields to Salesforce objects in Zuora 360 and the limitations in Zuora 360+.

The following fields of Zuora Rate Plan Charge Tier are synced to Zuora\_\_SubscriptionChargeTier\_\_c by Zuora 360 if you do not turn on Subscription History in Zuora 360+. These fields are not synced to Zuora\_\_SubscriptionChargeTierHistory\_\_c in Zuora 360+ when Subscription History sync is turned on.

| SFDC Field Name | SFDC API Name |
| --- | --- |
| Account | Zuora__Account__c |
| Is Overage Price | Zuora__IsOveragePrice__c |
| Subscription Product & Charge | Zuora__SubscriptionProductCharge__c |
