---
title: "Products sync between Salesforce CPQ and Zuora"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-salesforce-cpq/salesforce-cpq-connector-sync/products-sync-between-salesforce-cpq-and-zuora"
product: "zuora-platform"
scraped_at: "2025-12-24T08:27:09.210Z"
---

# Products sync between Salesforce CPQ and Zuora

The Salesforce CPQ connector facilitates product synchronization with Zuora, ensuring seamless integration and management of product catalogs, charge models, and accounting codes between the two systems.

The Salesforce CPQ connector integrates product synchronization process with order sync. When an order is created and synchronized, the connector verifies if the corresponding product exists in Zuora. If the product does not exist in Zuora, the connector automatically creates a flat-structured product in Zuora for every product in Salesforce before creating the order. The connector utilizes the Externally Managed Plan ID field on the rate plan object in Zuora to verify the product's existence.

For non-usage-based products, the product2.Id must be populated on the Externally Managed Plan ID field. For usage-based charges, the productConsumptionSchedule.ID is used to verify the product's existence.

Figure 1. Salesforce and Zuora product sync

![Salesforce and Zuora product sync](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/5705d04c-51c5-4c6a-920a-270bc6d29222?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjU3MDVkMDRjLTUxYzUtNGM2YS05MjBhLTI3MGJjNmQyOTIyMiIsImV4cCI6MTc2NjY1MTIyNiwianRpIjoiMDc2YmRiM2Q3Zjc1NDU5NjkxZTdiYWFiMTRhNGM3OTUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.qZcaRHuODd42rRHMgKr8byLLq7L5flv0xmI3hOjO4oM)

## Supported Charge Models and Charge Types

| Zuora Charge Model | Zuora Charge Type | Dependant Salesforce Objects | Set up in Salesforce |
| --- | --- | --- | --- |
| One time | Flat Fee | Product2 | Pricing Method (SBQQ__PricingMethod__c) = "Block"Charge Type (SBQQ__ChargeType__c) = "One-Time" |
| Per Unit | Product2 | Pricing Method (SBQQ__PricingMethod__c) = "List"Charge Type (SBQQ__ChargeType__c) = "One-Time" |  |
| Recurring | Flat Fee | Product2 | Pricing Method (SBQQ__PricingMethod__c) = "Block"Charge Type (SBQQ__ChargeType__c) = "Recurring"Subscription Term is not nullSubscription Pricing = "Fixed Pricing"Note: Configure the fields similar to billing type, billing frequency, and taxation in the product2 object. |
| Per Unit | Product2 | Pricing Method (SBQQ__PricingMethod__c) = "List"Charge Type (SBQQ__ChargeType__c) = "Recurring"Subscription Term is not nullSubscription Pricing = "Fixed Pricing" |  |
| Usage | Flat Fee | Product2 | Pricing Method (SBQQ__PricingMethod__c) = "List"Charge Type (SBQQ__ChargeType__c) = "One-Time" |
| Per Unit | Product2 | Pricing Method (SBQQ__PricingMethod__c) = "List"Charge Type (SBQQ__ChargeType__c) = "Usage" |  |
| Volume | Product2,Consumption Schedules, Consumption Rate Plan | To configure and set up usage products and their order impact, see Support for Usage-Based Orders. |  |
| Tiered | Product2,Consumption Schedules, Consumption Rate Plan | An asset in Salesforce is converted to OLI |  |

## Mastering the Product Catalog

This section explains the advantages of centralizing product catalog control and recommends best practices for product catalog management for Zuora and Salesforce systems. Zuora recommends using this method if you have complex finance, revenue, or specific billing settings in the Zuora product catalog.

This method also suits organizations looking to bundle the product catalog based on specific attributes, business requirements or specific use cases to effectively override the default behaviour of the connector's product catalog sync.

## Guidelines on mastering the product catalog in Zuora

If you have an existing product catalog in Salesforce CPQ with active subscriptions, you can manually create the product catalog in Zuora if it does not exist with specific Revenue, Finance or Billing settings that your business might need. While creating the product catalog in Zuora, please ensure that it is as per the structure that the connector requires.

Once the product catalog is configured and set up in both systems, ensure that the ID of the product2 object in Salesforce is populated in the Externally Managed Plan ID field on the rate plan in Zuora for non-usage-based products. For usage-based products, ensure that the ProductConsumptionSchedule ID is populated. See [Guidelines for Data Migration](/zuora-platform/integration/integration-hub/billing-connector-for-salesforce-cpq/guidelines-for-data-migration) for more information.

## Product bundling

The connector links Salesforce products at the rate plan level in Zuora, allowing you to group various Salesforce products into a single product in Zuora with a shared SKU and name.

Figure 2. Salesforce and Zuora product bundling

![Salesforce and Zuora product bundling](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/975137d3-c450-4e7c-b0d8-4336acd6ba52?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijk3NTEzN2QzLWM0NTAtNGU3Yy1iMGQ4LTQzMzZhY2Q2YmE1MiIsImV4cCI6MTc2NjY1MTIyNiwianRpIjoiNDU2YWIwMGE4NDNkNDUyMTllZDY5ZjMwM2ZhYTQ1NzMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.O6t8xtKylQ0EkWhLfCs3lL7o2xdgj33bQEeKbLDXUQQ)

Note:

Each rate plan can have only one charge under it.

## Guidelines on mastering the product catalog in Salesforce

The connector supports syncing products from Salesforce to Zuora during order sync, with no dedicated process to sync the products. To sync Zuora-specific product catalog fields from Salesforce, the connector supports mapping any custom/standard fields from the product2 object in Salesforce to any custom/standard field on the product, rate plan, and rate plan charge in Zuora.

## Configuring Zuora-specific fields

To sync Zuora-specific product catalog fields from Salesforce, the connector supports mapping any custom/standard fields from the product2 object in Salesforce to any custom/standard field on the product, rate plan, and rate plan charge in Zuora. Use this to map or override the standard out-of-the-box connector mappings. See Custom Field Sync and Mapping.

## Taxation

The connector supports syncing tax codes and tax modes from the product in Salesforce to the product rate plan charge in Zuora. The tax mode must be sent via a custom field from the Salesforce CPQ product. To enable this functionality, create the following custom field under the Product2 object in Salesforce CPQ:

-   API Name: TaxMode\_\_c
-   Label: Zuora Tax Mode

If the tax mode is not specified for taxable products, the connector defaults to "Tax Exclusive". The tax codes will be synchronized from the Salesforce CPQ field "Tax code", so ensure that any changes made to tax codes in Zuora are also updated correspondingly in Salesforce CPQ.

## Accounting Codes

The connector supports mapping the Accounting Code, Deferred Revenue, and Recognized Revenue Accounts between products. This requires creating custom fields in the Salesforce CPQ product.

Create the following custom fields under Product2 object in Salesforce CPQ:

-   API name: Z\_Accounting\_Code\_\_c with Label name: Zuora Accounting Code
-   API name: Z\_Deferred\_Revenue\_Account\_\_c with Label name: Zuora Deferred Revenue Account
-   API name: Z\_Recognized\_Revenue\_Account\_\_c with Label name: Zuora Recognized Revenue Account

The connector uses custom fields to ensure smooth mapping and synchronization of accounting information between Salesforce CPQ and Zuora.
