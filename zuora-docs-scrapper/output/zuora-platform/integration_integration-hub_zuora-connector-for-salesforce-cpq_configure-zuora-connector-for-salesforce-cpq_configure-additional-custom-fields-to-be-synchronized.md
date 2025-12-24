---
title: "Configure additional custom fields to be synchronized"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-cpq/configure-zuora-connector-for-salesforce-cpq/configure-additional-custom-fields-to-be-synchronized"
product: "zuora-platform"
scraped_at: "2025-12-24T08:35:55.577Z"
---

# Configure additional custom fields to be synchronized

Learn how to configure and synchronize custom fields between Salesforce and Zuora for product catalog and subscription management.

When managing the product catalog in Salesforce, you can send custom fields you need to Zuora as part of product catalog sync.

1.  Perform the following steps to sync a custom field in the catalog sync.
    1.  Add the custom field to the Product2 object in Salesforce. The Product Charge, Product Rate Plan and Product objects in Zuora all map to Product2 in Salesforce.
    2.  Create the custom field in Schema Setup tab.
    3.  Create the corresponding custom field with the same API name in Zuora. The custom field must be created as an indexed custom field.

        Note:

        Because the Product2 object maps to multiple Zuora objects, the custom fields you add must be unique across the Product, the Product Rate Plan, and the Product Rate Plan Charge objects. For example, you can't have the Product.Type\_\_c field and the ProductRatePlan.Type\_\_c field in Zuora because the Product2.Type field would map to both of them.

        When you send a Salesforce contract to Zuora for New Subscriptions, you can send custom fields on the subscription object to provide additional information about the subscription.

2.  Perform the following steps to send a subscription-related custom field to Zuora.
    1.  Add the custom field to the Salesforce CPQ object. The mapping of the objects between Salesforce CPQ and Zuora are as below.

        | Salesforce CPQ Object | Zuora Object | When Synced to Zuora |
        | --- | --- | --- |
        | Contract | Subscription | When a contract is sent to Zuora |
        | Subscription (SBQQ__Subscription__c) | RatePlan or RatePlanCharge | When a contract is sent to Zuora |
        | Quote (SBQQ__Quote__c) | Account | When a quote is contracted with a new billing account.The custom field values on existing billing accounts cannot not be updated with the new values from Salesforce |

    2.  Create the corresponding custom field with the same API name in Zuora.
    3.  Upload the Zuora WSDL in the Schema Setup tab. Include all the correct fields, including custom fields.
    4.  After uploading the WSDL in Schema Setup, select the object you have custom fields and check to see if the custom fields are included. If not, click Add New Fields and add the custom fields.
