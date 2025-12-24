---
title: "Custom Objects overview"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/custom-objects/custom-objects-overview"
product: "zuora-platform"
scraped_at: "2025-12-24T05:22:54.106Z"
---

# Custom Objects overview

The Custom Objects feature allows you to extend the Zuora data model by defining custom objects tailored to your specific use case.

Note:

The bulk deletion of custom fields on standard and custom objects is temporarily unavailable as we refine the Custom Field feature. This change affects both the Zuora UI and API:

-   UI: Navigate to in the left navigation menu and then access the custom field list page of a standard or custom object.

-   API: Submit custom field deletion requests via the [Update a custom object definition](https://developer.zuora.com/v1-api-reference/api/operation/POST_UpdateCustomObjectDefinition/) API operation.


You can still delete custom fields individually during this refinement process. The bulk deletion capability will be restored once the refinement is complete.

## Basic concepts of Custom Objects

The following are basic concepts of the Custom Objects feature:

-   Custom object definition: A custom object definition represents the data structure of a custom object. Each definition must include at least one custom field to store your business data. For more information, see [Custom field types](/zuora-platform/extensibility/custom-fields/custom-field-types) and [Custom field settings](/zuora-platform/extensibility/custom-fields/custom-field-settings).

-   Custom object record: A custom object record is an instance of a custom object that stores your business data. You must first define a custom object definition before creating custom object records associated with it.


For example, if you define a custom object definition called Automobile with custom fields such as `Color__c` and `Price__c`, you can then create individual custom object records to store information about each car you sell.
