---
title: "Create custom staging field"
url: "https://docs.zuora.com/en/zuora-revenue/getting-started/system-management/custom-staging-field/create-custom-staging-field"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:22:34.370Z"
---

# Create custom staging field

Learn how to create a custom staging field in Zuora Revenue by following a series of steps, including navigating to the appropriate setup, adding a new field, and configuring its properties.

To create a custom staging field in Zuora Revenue, complete the following steps:

1.  Navigate to Setups > Application > Labels .
2.  To add a staging field, select the appropriate data category from the Data Category dropdown list and then click the Add a row (+), icon. A new row is added on the top.
3.  In the Seq field, specify the field creation order. A sequence number is automatically generated when you are creating a new row. You cannot specify a sequence number that is already used by another field.
4.  In the Field Name field, select a value that starts with ATR or NUM as the custom field name. This is because only the values with the ATR or NUM prefix are used by Zuora Revenue to define custom fields in the staging tables.
5.  In the Display Label field, enter a label name for the custom field.
6.  (Optional): In the Column Type field, specify the data type of the custom field. The following types can be supported:

    -   VARCHAR2
    -   AMOUNT
    -   QUANTITY
    -   DATE
    -   NUMBER
    -   RAW

7.  (Optional): Use the following toggle switches for further configuration of the custom fields:

    -   Editable: Determines whether to allow users to edit this field after it is created.
    -   Allow Copy: Determines whether to allow users to copy this field after it is created.
    -   Billing Report: Determines whether to allow this field to be displayed in Billing Reports.
    -   RC Group: Determines whether to allow this field to be displayed in RC Groups.
    -   SSP Group: Determines whether to allow this field to be displayed in SSP Groups.
    -   Default Mapping: Determines whether to enable this field for field mappings. For the field to be displayed in the Field Mapping tab for a transaction upload template, you must toggle this switch to Yes .
    -   Enabled for Criteria: Determines whether to enable this field for Criteria.
    -   Accounting Setup: Determines whether to allow this field to be displayed in accounting setup.
    -   Event Mapping: Determines whether to enable this field for event mapping.
    -   POB Assignment: Determines whether to enable this field for POB assignment.
    -   Reduction Order: Determines whether to enable this field for reduction orders.
    -   Formula: Determines whether to allow this field to be used in formulas.

8.  Click the save icon to save the new field.

This custom field will be referenced by other fields, templates, and reports by using the Display Label name that you enter in Step 5. When you create or edit a transaction upload template, the Display Label names are also displayed in the Staging Field Name drop-down list in the Field Mapping tab.
