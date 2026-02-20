---
title: "Account: Zuora__SubscriptionProductFeature__c"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/sync-field-mapping-of-account-and-related-objects-for-zuora-360/account-zuora__subscriptionproductfeature__c"
product: "zuora-platform"
scraped_at: "2026-02-20T21:16:46.389Z"
---

# Account: Zuora\_\_SubscriptionProductFeature\_\_c

This reference topic details the relationship between the Zuora Account and the Salesforce Zuora\_\_SubscriptionProductFeature\_\_c, highlighting the fields and objects involved.

The following table lists the Zuora and Salesforce fields.

To create features in the product catalog and use them in subscriptions and Zuora Quotes, you need to enable the following:

-   The Entitlements setting in your tenant.Access to the Entitlements feature requires a specific edition of Zuora. See Zuora Editions for details.
-   The Enable Feature Specification in Product and Subscriptions setting in the Billing Settings.

| Zuora Object | Zuora Field | Salesforce Object | Salesforce Field |
| --- | --- | --- | --- |
| Account (Referenced through Subscription's Customer Account) | Zuora__SubscriptionProductFeature__c |  |  |
|  | CrmId |  | Zuora__Account__c |
