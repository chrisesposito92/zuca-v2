---
title: "Schema Visualizer overview"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/object-manager/schema-visualizer/schema-visualizer-overview"
product: "zuora-platform"
scraped_at: "2025-12-24T05:30:28.100Z"
---

# Schema Visualizer overview

The Schema Visualizer feature provides an intuitive and visual representation of your data model, including Zuora standard objects and custom objects in your tenant.

With this feature, you can understand the connections and dependencies between objects and field details of each object, such as lists of standard and custom fields, field types, and indexed fields.

## Key capabilities

The key capabilities of Schema Visualizer are as follows:

-   Centralized canvas: All standard and custom objects are displayed on a centralized canvas, providing a unified view of your data model.

-   Object categorization: Standard objects are categorized into specific product groups based on the object type, facilitating better organization and understanding of the data structure.

-   Fields & Relationships: It lists both standard and custom fields for each object and provides visual representations of the relationships between objects, helping you understand the connections and dependencies within the data model.

-   Custom field management: It allows you to create or edit custom field definitions directly within the interface, providing flexibility to tailor the data model to specific requirements.


## Introduction to user interface components

The following table describes the functionality of each UI component of the Schema Visualizer:

| UI component | Description |
| --- | --- |
|  | The product filters for displaying objects of specific product domains:Billing: objects of Zuora Billing, such as Account, Product, Subscription, and Invoice.Payment: objects of Zuora Payments, such as Payment, Payment Method, and Refund.Finance: objects of Zuora Finance, such as Accounting Period and Journal Entry Item.Custom Objects: custom objects in your tenant.Click the name to enable or disable the filter. Only Billing is enabled by default. |
|  | The Show Fields toggle, which is a global setting indicating whether to display the object field information for each object. |
| Without object field information:With object field information: | A standard or custom object.The (IDX) suffix at the end of a field name indicates this is an indexed field. For example, the BillCycleDay (IDX) field on the Account object.Note that only objects you have access to are displayed on the canvas. For example, you cannot find the Payment Schedule or Payment Schedule Item object if you do not have the Payment Schedule feature enabled. |
|  | The relationship between two objects.In this example, the relationship between Invoice and Account is many-to-one, which means one or more invoices can be linked to the same account.The relationships are displayed when you click an object on the canvas. |
|  | Zoom in |
|  | Zoom out |
|  | Fit view |
|  | Refresh |

## What’s next

Refer to the following tutorials on Schema Visualizer:

-   [View the schema of your data model](/zuora-platform/extensibility/object-manager/schema-visualizer/schema-visualizer-tutorials/view-the-schema-of-your-data-model)

-   [View the relationships between a specific object and other objects](/zuora-platform/extensibility/object-manager/schema-visualizer/schema-visualizer-tutorials/view-the-relationships-between-a-specific-object-and-other-objects)

-   [Search for indexed fields](/zuora-platform/extensibility/object-manager/schema-visualizer/schema-visualizer-tutorials/search-for-indexed-fields)

-   [Open the custom field list page](/zuora-platform/extensibility/object-manager/schema-visualizer/schema-visualizer-tutorials/custom-field-management/open-the-custom-field-list-page)
