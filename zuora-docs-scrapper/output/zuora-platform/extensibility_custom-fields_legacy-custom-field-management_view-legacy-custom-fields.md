---
title: "View legacy custom fields"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/custom-fields/legacy-custom-field-management/view-legacy-custom-fields"
product: "zuora-platform"
scraped_at: "2026-02-20T17:48:11.215Z"
---

# View legacy custom fields

Learn how to view legacy custom fields of a standard object.

1.  Open the settings page:

    -   If the object is related to accounts, subscriptions, invoices, or products, click your username at the top right and navigate to .

    -   If the object is related to payments or refunds, click your username at the top right and navigate to .

    -   If the object is related to accounting or revenue, click your username at the top right and navigate to .


2.  Click Manage Custom Fields. Zuora lists the objects that support custom fields. For each object, Zuora displays the number of custom fields that have been defined.
3.  Select the object. Note that Invoice Detail refers to the Invoice Item object.

Zuora lists the custom fields that have been defined for the object. The custom fields are listed in the following groups:

-   Indexed: Indexed custom fields have better performance than non-indexed custom fields. For example, if you are querying custom fields using synchronous API requests, you can expect the best performance if all of the custom fields are indexed.

-   Non-Indexed: Non-indexed custom fields are functionally identical to indexed fields, but have lower performance.


If your Zuora tenant has integrations with external systems, you may see integration-related custom fields in the System group.

If you have the [Multi-entity](/zuora-platform/user-management/multi-entity/overview-of-multi-entity) feature enabled, Zuora displays the sharing status of each custom field. If a custom field is defined in the global entity and has been shared with your entity, the value in the Shared column is "Yes" followed by the name of the parent entity. You cannot modify or delete a custom field that has been shared from the global entity. For more information, see [Share custom fields with sub-entities](/zuora-platform/extensibility/custom-fields/legacy-custom-field-management/share-custom-fields-with-sub-entities).
