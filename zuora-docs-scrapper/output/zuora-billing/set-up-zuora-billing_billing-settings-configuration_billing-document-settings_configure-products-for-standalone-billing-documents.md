---
title: "Configure products for standalone billing documents"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/billing-settings-configuration/billing-document-settings/configure-products-for-standalone-billing-documents"
product: "zuora-billing"
scraped_at: "2025-12-24T05:05:04.173Z"
---

# Configure products for standalone billing documents

Learn how to configure product filters to create standalone billing documents, such as invoices and memos, by following specific steps and permissions.

You can use a product filter to restrict which products are eligible for creating standalone billing documents, such as invoices, credit memos, and debit memos.

When creating billing documents from existing products, only the products that match the product filter can be used.

Note that to create standalone invoices from products, you must have the Create Standalone Invoice With Product Catalog billing permission. For more information, see Billing Roles .

To configure the product filter, perform the following steps:

1.  Click your username in the upper right and navigate to Settings > Billing.
2.  Click Configure Products for Standalone Billing Documents .
3.  On the Standalone Billing Document Settings page, click Edit in the upper right of the Product Filter section.
4.  Select the Enable Product Filter checkbox to display the condition editor.
5.  Create conditions:
    1.  Click \+ Add Condition.
    2.  Select a standard or custom field of the Product object.

        -   For standard fields, see Product data source .

        -   For custom fields, see Manage custom fields with the Object Manager .


    3.  Select a comparison operator, such as \= or ≠ . Available operators vary depending on the field type.
    4.  Specify the value for comparison.
    5.  Repeat steps a to d to create additional conditions as needed. Alternatively, you can click the copy icon next to a condition to duplicate it.
6.  (Optional) Create condition groups:
    1.  Click \+ Add Group.
    2.  Add multiple conditions to the group. See step 5 for more details.
    3.  Select the relationship between all conditions within the group from the dropdown list. Available values are And and Or.
    4.  Repeat steps a to c to create additional groups as needed. Alternatively, you can click the copy icon of a condition group to duplicate the group along with all conditions within it.
7.  Click Save.

    Note: For more information about the product filter, see Common use cases of product filter .
