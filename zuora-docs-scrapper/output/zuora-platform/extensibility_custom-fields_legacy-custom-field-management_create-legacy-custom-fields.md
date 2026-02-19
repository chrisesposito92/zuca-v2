---
title: "Create legacy custom fields"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/custom-fields/legacy-custom-field-management/create-legacy-custom-fields"
product: "zuora-platform"
scraped_at: "2026-02-19T03:25:37.538Z"
---

# Create legacy custom fields

Learn how to create a legacy custom field for a standard object.

1.  Open the settings page:

    -   If the object is related to accounts, subscriptions, invoices, or products, click your username at the top right and navigate to .

    -   If the object is related to payments or refunds, click your username at the top right and navigate to .

    -   If the object is related to accounting or revenue, click your username at the top right and navigate to .


2.  Click Manage Custom Fields.
3.  Select the object for which you want to created the custom field.
4.  In the Indexed or Non-Indexed group, click Add New Field.
5.  Select a field type, then enter the field definition. You must make sure every Picklist value is unique when you fill in Picklist Values. The picklist value is case-insensitive. For example, "Business" and "BUSINESS" are treated as the same value and cannot both be added. There is no limit on the number of values for a picklist-type field. If you select Required, Zuora will require users to specify a value for the field when creating an object. If you select UI Read Only, users will be able to update the field's value via the Zuora API but not via the Zuora UI.

    Note: The suffix `__c` (two underscores and the letter "c") is automatically appended to the end of the API name when Zuora creates the custom field.

6.  Click Save.

When custom fields are created, they are available in the corresponding object detail pages in the Zuora UI or through the respective API operations.

When Zuora creates a custom field, Zuora does not apply the default value to existing objects. This means that if you define a custom field, then immediately perform a ZOQL query such as `select BetaTester__c from Account`, the query will not return any values for `BetaTester__c`.

To apply the default value to an existing object, you must modify the object via the Zuora UI or the Zuora API.
