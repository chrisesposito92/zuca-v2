---
title: "Add required custom fields in Zuora"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-cpq/configure-zuora-connector-for-salesforce-cpq/add-required-custom-fields-in-zuora"
product: "zuora-platform"
scraped_at: "2025-12-24T08:35:53.248Z"
---

# Add required custom fields in Zuora

Add custom fields to Zuora objects, ensuring they are indexed for optimal performance.

In Zuora, add the following custom fields to the specified Zuora objects. For the detailed steps, see Manage Custom Fields in Z-Billing.

Note:

The custom fields must be added as indexed custom fields.

| Object Name | Custom Field API Name | Field Type |
| --- | --- | --- |
| Subscription | sfdcContractNumber__c | Text (100) |
| Subscription | sfdcContractId__c | Text (18) |
| Product | sfdcId__c | Text (18) |
| Product Rate Plan | sfdcDiscScheduleID__c | Text (18) |
| Product Rate Plan | sfdcPricebookID__c | Text (18) |
| Product Rate Plan | sfdcProductID__c | Text (18) |
| Product Rate Plan | sfdcPricingType__c | Picklist of the following values:DISCOUNT_SCHEDULEBLOCK_PRICEPRICEBOOK_ENTRY |
| Product Rate Plan Charge | sfdcDiscScheduleID__c | Text (18) |
| Product Rate Plan Charge | sfdcPricingType__c | Text (18) |
| Product Rate Plan Charge | sfdcPricebookID__c | Text (18) |
| Product Rate Plan Charge | sfdcProductID__c | Text (18) |
| Subscription Rate Plan Charge | sfdcSubscriptionId__c | Text (18) |
