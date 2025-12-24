---
title: "Guidelines for Data Migration"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-salesforce-cpq/guidelines-for-data-migration"
product: "zuora-platform"
scraped_at: "2025-12-24T08:27:26.888Z"
---

# Guidelines for Data Migration

This document provides guidelines for accurately migrating data between Salesforce CPQ and Zuora, ensuring proper linkage and preventing duplicate records.

Refer to this section to ensure accurate migration for existing data in Salesforce CPQ and Zuora that needs linkage or mass importation into the system. The connector validates the existence of data in Zuora before creating new records by checking the following fields to link existing data between platforms.

| Object | Salesforce CPQ Field | Zuora Field |
| --- | --- | --- |
| Account | Account.Id | Account.CRM ID |
| Contact | Contact.Id | Contact.crmId__c |
| Product | Product.ProductCode | Product.SKU |
|  | Product.Id | ProductRatePlan.ExternallyManagedPlanId |
| ProductConsumptionSchedule | ProductConsumptionSchedule.Id | ProductRatePlan.ExternallyManagedPlanId |
| Order | Order Number | Order Number |
| OrderProduct | OrderProduct.Id | SubscriptionRatePlan.ExternallyManagedPlanId |
| OrderProductConsumptionSchedule | OrderProductConsumptionSchedule.Id | SubscriptionRatePlan.ExternallyManagedPlanId |

Note:

Ensure these fields are populated to prevent creation of duplicate records.

## Key Points for Data Migration

-   Ensure Zuora's product catalog maintains a flat structure where each rate plan has only one associated charge, and preferably each product has only one rate plan.
-   Refer to the [amendments and renewal logic](/zuora-platform/integration/integration-hub/billing-connector-for-salesforce-cpq/salesforce-cpq-connector-sync/orders-sync-from-salesforce-cpq-common-use-cases#concept-9301__amendmentsandrenewalguidelines) for existing subscriptions/orders in Salesforce. Ensure historic data migration if necessary and populate required fields accordingly.
-   Start with migrating a small subset of data initially.
-   Avoid using Address fields in Salesforce Orders for Billing and Shipping Address since updates in Salesforce will not reflect in Zuora. Instead, use the Bill To and Ship To contact fields which support update operations.
