---
title: "Add a new hard bundle"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/set-up-product-catalog/bundles-in-product-catalog/add-a-new-hard-bundle"
product: "zuora-billing"
scraped_at: "2026-02-19T03:09:38.904Z"
---

# Add a new hard bundle

Create a new hard bundle by ensuring all products are standalone and exist in the catalog, and manage them in the new catalog experience.

Before creating a bundle, ensure that:

-   All products included in the bundle already exist in the catalog.

-   Products that are deleted or inactive cannot be added to a bundle.

-   Only standalone products can be used as bundle components.

-   Nested bundles are not used, as they are not supported (a bundle cannot include another bundle).

-   Bundles are viewed and managed only in the new catalog experience.


Note:

To avoid potential data inconsistencies, Zuora recommends viewing and editing bundles only in the new catalog experience. Bundles should not be managed in the legacy catalog.

1.  Navigate to .
2.  Click New Bundle.
3.  Select products to add to the new bundle.
4.  Enter the following details:

    | Field | Description |
    | --- | --- |
    | Bundle Name* | The name of the bundle product created in the catalog. This represents the sellable bundle SKU that customers purchase and see in orders and invoices. |
    | Bundle Type | The type of bundle being created.Hard Bundle – A fixed bundle where all included products and plans must be purchased together. Components cannot be removed or unbundled.Note:Hard Bundle is the only supported bundle type in the current release. |
    | Start Date | The effective start date of the bundle product. The bundle cannot be sold before this date. The system validates compatibility with the effective dates of included component products and plans. |
    | End Date | The effective end date of the bundle product. The bundle cannot be sold after this date. The end date must not exceed the earliest end date of the component products or plans. |
    | Description | The description of the bundle. Typically used to describe the bundle’s purpose or included offerings. |
    | Custom Fields | The additional metadata captured on a bundle product beyond the standard bundle fields.Test data type - Captures a date value associated with the bundle.req* - A required custom text field. The bundle cannot be saved unless this field is populated.ProductLine - The product line or business category associated with the bundle. Values are tenant-configured. |
    | Included Products | Displays the component products selected in the bundle. Note that:Component products must exist and be standalone products. You cannot create a new product inside the bundle.Nested bundles are not supported.Removing a product removes all associated plans and charges from the bundle. |
    | Attributes | The attribute name that must be applied to the bundle. Attribute names are tenant-defined and may represent dimensions such as geography, tier, term length, or catalog classification.Select the value for the selected attribute. The input control and validation depend on the attribute’s data type (for example, multi-select, number, or text). Multiple values may be supported where configured. |

5.  Click Save.
