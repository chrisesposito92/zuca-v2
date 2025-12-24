---
title: "Field Mapping of Product Catalog and Related Objects"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm/objects-and-field-mapping/field-mapping-of-product-catalog-and-related-objects"
product: "zuora-platform"
scraped_at: "2025-12-24T08:34:18.551Z"
---

# Field Mapping of Product Catalog and Related Objects

This document explains how to sync Product Catalog objects and fields between Zuora and Salesforce using the Zuora Connector for Salesforce CRM, including field mapping and handling deprecated fields.

Note:

To sync product catalog data, you must have the Zuora Quotes managed package installed for your Salesforce org. For more information, see Zuora Quotes .

$(function() { $('.EXPAND\_COLLAPSE').find('dt').on('click', function() { $(this).next().toggle('350'); }); });

Zuora Connector for Salesforce CRM allows Product Catalog objects and the corresponding fields to be synced in near real-time.

To sync Product Catalog objects through Zuora Connector for Salesforce CRM, you must ensure:

-   Zuora Quotes has been set up. See Zuora Quotes for more information.

-   Product Catalog has been enabled in the Zuora Connector for Salesforce CRM Object Enablement setting.


This article shows how the Zuora objects and their fields are mapped and synchronized to Salesforce objects and fields in Product Catalog sync.

Each sync objects pair is marked as <Zuora object> : <Salesforce object>. For example, Product : Zuora\_\_Product\_\_c.

Note:

Any Zuora field marked as "internal" is a field that is not exposed in the Zuora SOAP API. However, these internal fields are synchronized between Zuora and Salesforce in Zuora Connector for Salesforce CRM.

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
