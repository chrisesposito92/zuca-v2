---
title: "ProductFeature: zqu__ZProductFeature__c"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm/objects-and-field-mapping/field-mapping-of-subscription-and-related-objects/productfeature-zqu__zproductfeature__c"
product: "zuora-platform"
scraped_at: "2025-12-24T08:34:39.285Z"
---

# ProductFeature: zqu\_\_ZProductFeature\_\_c

This topic provides field mappings between Zuora ProductFeature and Salesforce objects, detailing the synchronization of product features in the Zuora Connector for Salesforce CRM.

The following table lists the Zuora and Salesforce fields:

| Zuora Object | Zuora Field |  |  | Salesforce Object | Salesforce Field | Comments |
| --- | --- | --- | --- | --- | --- | --- |
| ProductFeature |  |  | zqu__ZFeature__c |  |  |  |
|  | Catalog Sync History |  |  |  | zqu__Catalog_Sync_History__c |  |
|  | Deleted |  |  |  | zqu__Deleted__c |  |
|  | EntityID |  |  |  | zqu__EntityID__c |  |
|  | Zuora Id |  |  |  | zqu__ZuoraId__c |  |
|  | Feature |  |  |  | zqu__ZFeature__c | Holds a lookup reference to the Feature object |
|  | Full Name |  |  |  | zqu__ZProductFeatureFullName__c |  |
|  | Product |  |  |  | zqu__Product__c | Holds a lookup reference to the Product object. |
|  | Sync Message |  |  |  | zqu__SyncMessage__c |  |
|  | Sync Status |  |  |  | zqu__SyncStatus__c |  |
|  | ZProduct |  |  |  | zqu__ZProduct__c | Holds a lookup reference to the ZProduct object |
| See the above table for the field mappings between Zuora RatePlanCharge and Salesforce Zuora__SubscriptionProductChargeHistory__c when Subscription History sync is turned on in Zuora Connector for Salesforce CRM. |  |  |  |  |  |  |
