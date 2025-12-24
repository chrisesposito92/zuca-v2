---
title: "Deprecated: Use single subscription and amendments"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm/configuration/deprecated-use-single-subscription-and-amendments"
product: "zuora-platform"
scraped_at: "2025-12-24T08:31:28.912Z"
---

# Deprecated: Use single subscription and amendments

Learn how to enable and use a single subscription for amendments in Zuora Quotes, ensuring consistent Salesforce IDs across subscription versions.

When you create an amendment and sync it to Salesforce, the original version of the subscription is deleted by default, and a new subscription with a new Salesforce ID is created in Salesforce. If your custom application requires a lookup reference to the original subscription, follow the steps in this article to enable and use the single subscription when creating amendments in Zuora Quotes.

The following two new fields were added to support the single subscription for amendments:

-   The Subscription Number field (Zuora\_\_SubscriptionNumber\_\_c) was added to the Subscription object as an External ID. If this feature is enabled in your tenant, Zuora Salesforce Connector will upsert a Subscription using the Subscription Number. Since Subscription Number does not change across Subscription versions, Subscription records in Salesforce will have the same Salesforce Record ID across multiple Subscription versions.

-   The Charge Number field (Zuora\_\_SubscriptionChargeNumber\_\_c) was added to the Subscription Product Charge object as an External ID. If this feature is enabled in your tenant, Zuora Salesforce Connector will upsert a Subscription Product Charge using the Charge Number. Since Charge Number does not change across Subscription Product Charge versions, the Subscription Product Charge records in Salesforce will have the same Salesforce Record ID across multiple Subscription Product Charge versions.


To enable and use the single subscription and amendments:

1.  Stop existing sync operations.
2.  Ensure that the user who performs Zuora Salesforce Connector has the field-level Visible access to the new fields listed above, Subscription Number and Charge Number in Salesforce. See [Setting Field-Level Security in Salesforce](https://help.salesforce.com/HTViewHelpDoc?id=users_fields_fls.htm&language=en_US) for checking and setting the field-level access for profiles.
3.  Migrate subscription and charge numbers .
4.  Contact [Zuora Support](https://support.zuora.com) to enable the tenant permission, Only Update Salesforce Subscription For Sync, to use the single subscription in your Zuora Sandbox.
5.  Test Zuora Connector for Salesforce CRM thoroughly in the API Sandbox.
6.  If all testing is successful in the API Sandbox, repeat steps 1 to 6 to enable your tenant permission in your Production environment.
