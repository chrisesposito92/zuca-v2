---
title: "Share custom fields with sub-entities"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/custom-fields/legacy-custom-field-management/share-custom-fields-with-sub-entities"
product: "zuora-platform"
scraped_at: "2025-12-24T05:21:33.386Z"
---

# Share custom fields with sub-entities

Learn how to share legacy custom fields with sub-entities.

If you have the [Multi-entity](/zuora-platform/user-management/multi-entity/overview-of-multi-entity) feature enabled, you can share your global entity's custom fields with all sub-entities. By default, custom fields that you define in your global entity are not shared with any other entities.

After you share a custom field with sub-entities, each sub-entity has access to a custom field with the same definition (label, type, etc) as the global custom field. Values of the custom field are not copied between entities.

1.  Use the entity switcher to switch to your global entity.
2.  Open the settings page:

    -   If the object is related to accounts, subscriptions, invoices, or products, click your username at the top right and navigate to .

    -   If the object is related to payments or refunds, click your username at the top right and navigate to .

    -   If the object is related to accounting or revenue, click your username at the top right and navigate to .


3.  Click Manage Custom Fields.
4.  Select the object that contains the custom fields you want to share.
5.  Locate the custom field to share, then click Share.
6.  In the dialog box that appears, click Yes.

The sharing status of the custom field changes to "Yes" after Zuora has shared the custom field with all sub-entities of your global entity.

You cannot delete a custom field while it is shared with sub-entities.
