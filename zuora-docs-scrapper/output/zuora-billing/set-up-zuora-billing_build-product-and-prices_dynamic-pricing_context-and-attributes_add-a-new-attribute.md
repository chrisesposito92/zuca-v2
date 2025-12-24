---
title: "Add a new attribute"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/dynamic-pricing/context-and-attributes/add-a-new-attribute"
product: "zuora-billing"
scraped_at: "2025-12-24T05:01:37.759Z"
---

# Add a new attribute

Learn how to add a new attribute in Extension Studio by navigating through the interface and entering the required details.

1.  Navigate to .
2.  Click Add Attribute. A form on the right appears.
3.  Enter the following details:

    | Field | Description |
    | --- | --- |
    | Name | The unique name for the attribute, for example, planType, region, termLength. |
    | Category | The logical group for the attribute. Select the required option from the drop-down list. |
    | Object Type | The object type. Select one of the following:Standard Object - Choose from built-in Zuora objects like Account, Subscription, RatePlan, and so on.Custom Object - Use this to map to a custom object you've created in Zuora. |
    | Source | Defines where the data comes from. Select one of the following:Zuora - The value is fetched from a Zuora standard or custom object.External - The value is provided from an external source. When External is selected:Attribute Type dropdown appears with options: Boolean, String, Number.If String is selected, a Values field appears to define the allowed string values.If Number is selected, the Minimum Value and Maximum Value fields appear to define numeric limits.External URL field appears to provide a reference or integration link. |
    | Source Object | The specific Zuora object where the attribute resides. The Source Object drop-down contains both standard Zuora objects and any custom objects created in your tenant. |
    | Field Mapping | Displays a list of fields from the selected Source Object. The list updates dynamically based on the chosen object.Enter values as prompted, depending on the field type:For String: Enter one or more values in the Values field.For Date / DateTime: Select appropriate dates or date ranges. |
    | CRM Mapping | If the attribute maps to a CRM field (like Salesforce or another external system), enter the exact CRM Mapping Key here.This allows the system to sync data correctly with the external source. |

4.  Click Save.
