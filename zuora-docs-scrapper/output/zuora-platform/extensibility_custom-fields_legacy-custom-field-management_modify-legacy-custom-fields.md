---
title: "Modify legacy custom fields"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/custom-fields/legacy-custom-field-management/modify-legacy-custom-fields"
product: "zuora-platform"
scraped_at: "2026-02-20T17:48:11.522Z"
---

# Modify legacy custom fields

Learn how to modify a legacy custom field of a standard object.

1.  Open the settings page:

    -   If the object is related to accounts, subscriptions, invoices, or products, click your username at the top right and navigate to .

    -   If the object is related to payments or refunds, click your username at the top right and navigate to .

    -   If the object is related to accounting or revenue, click your username at the top right and navigate to .


2.  Click Manage Custom Fields.
3.  Select the object to which the custom field you want to modify belongs.
4.  Click the label or API name of the field. The custom field detail page opens.
5.  Click Edit.
6.  Modify the field definition. You cannot change the field type.

    If the field type is Picklist, you can remove picklist values for custom fields if these values meet all of the following conditions:

    -   They are not used anywhere in your application. If an object record uses a picklist value and this record is deleted later, the picklist value cannot be removed. Deleted object records can be exported through AQuA or [Data Query](/zuora-platform/data/data-query/overview-of-data-query).

    -   They are not default values of the custom fields.

    -   They are not shared with other entities if you have the Multi-entity feature enabled.


    In addition, you can disable picklist values for custom fields through the Zuora UI if picklist values meet both conditions. After picklist values are disabled, you cannot use them to create or update objects through the Zuora UI.

    -   They are saved in the system.

    -   They are not default values of the custom fields.


    If Multiple-entity is enabled for your tenant, you can disable picklist values of shared custom fields in the parent entity, and your update will be synchronized to all child entities.

7.  Click save.

If changes to custom fields impact integration with related systems, you must update the configurations that access those field. For example:

-   If you change the API name of the field, any integration that continues to use the old API name will receive an error. You must update integrations to use the new API name.

-   If you decrease the length of a field, any integration that sends data that exceeds the new field length will receive an "Invalid\_value" error. You must check the maximum length of data that integrations could send.
