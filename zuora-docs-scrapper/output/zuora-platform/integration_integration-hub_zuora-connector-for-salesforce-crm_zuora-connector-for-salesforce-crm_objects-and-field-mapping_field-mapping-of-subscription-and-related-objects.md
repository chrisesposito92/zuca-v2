---
title: "Field Mapping of Subscription and Related Objects"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm/objects-and-field-mapping/field-mapping-of-subscription-and-related-objects"
product: "zuora-platform"
scraped_at: "2025-12-24T08:34:24.027Z"
---

# Field Mapping of Subscription and Related Objects

This reference topic details the mapping and synchronization of Zuora account fields and related objects to Salesforce objects in the Zuora Connector for Salesforce CRM, including internal fields not exposed in the Zuora SOAP API.

$(function() { $('.EXPAND\_COLLAPSE').find('dt').on('click', function() { $(this).next().toggle('350'); }); });

This article shows how the Zuora account and related objects and their fields are mapped and synchronized to Salesforce objects and fields in Zuora Connector for Salesforce CRM. Each sync objects pair is marked as <Zuora object> : <Salesforce object>.

Note:

Any Zuora field marked as "internal" is a field that is not exposed in the Zuora SOAP API. However, these internal fields are synchronized between Zuora and Salesforce in Zuora Connector for Salesforce CRM.

The descriptions of the "internal" sync fields are provided in this article. For the descriptions of the standard fields, see SOAP API Object Reference for more information.

## Fields labeled as Deprecated

Do not use such fields in your customizations as they are likely to be removed soon and could result in sync failures. Keep in mind that you should always use the fields without the `Deprecated` suffix in the

| You might find that the fields where their labels indicate that they have been deprecated also exist on Product Catalog objects. For example:Product SKU (Deprecated)Product Name (Deprecated)Product Effective End Date (Deprecated)UOM (Deprecated)Do not use such fields in your customizations as they are likely to be removed soon and could result in sync failures. Keep in mind that you should always use the fields without the Deprecated suffix in their labels. Therefore, instead of the fields in the preceding list, you should use the following fields:Product SKUProduct NameProduct Effective End DateUOM |
| --- |
