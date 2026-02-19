---
title: "Sync Field Mapping of Product Catalog and Related Objects for Zuora 360+"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/sync-field-mapping-of-product-catalog-and-related-objects-for-zuora-360"
product: "zuora-platform"
scraped_at: "2026-02-19T03:36:54.069Z"
---

# Sync Field Mapping of Product Catalog and Related Objects for Zuora 360+

This topic explains about synchronizing Product Catalog and related objects using Zuora 360+, including setup requirements and field mapping details.

Note:

To sync product catalog data, you must have the Zuora Quotes managed package installed for your Salesforce org. For more information, see Zuora Quotes .

Product Catalogs can be synced using either Zuora 360 or Zuora 360+. Zuora 360+ allows Product Catalog objects and the corresponding fields to be synced in real time.

To sync Product Catalog objects through Zuora 360+, you must ensure:

-   Zuora Quotes has been set up. See Zuora Quotes for more information.

-   Product Catalog has been enabled in the 360+ Object Enablement setting. See Manage Objects and Sync Results for Zuora 360+ for more information.


Each sync objects pair is marked as <Zuora object> : <Salesforce object>. For example, Product : Zuora\_\_Product\_\_c.

Note:

Any Zuora field marked as "internal" is a field that is not exposed in the Zuora SOAP API. However, these internal fields are synchronized between Zuora and Salesforce in Zuora 360+.

For the descriptions of the standard fields, refer to SOAP API Objects .

## Fields labeled as Deprecated

You might find that the fields where their labels indicate that they have been deprecated also exist on Product Catalog objects. For example:

-   Product SKU (Deprecated)

-   Product Name (Deprecated)

-   Product Effective End Date (Deprecated)

-   UOM (Deprecated)


Do not use such fields in your customizations as they are likely to be removed soon and could result in sync failures. Keep in mind that you should always use the fields without the `Deprecated` suffix in their labels. Therefore, instead of the fields in the preceding list, you should use the following fields:

-   Product SKU

-   Product Name

-   Product Effective End Date

-   UOM


## Sync Date Fields

When creating products and product rate plans, you must use dates that fall within the range supported by Salesforce: 1700-01-01T00:00:00 GMT to 4000-12-31T00:00:00 GMT. If you set a date outside of this range, the product sync will fail.

-   Effective start date must be on or after 1-1-1700

-   Effective end date must be on or before 12-31-4000
