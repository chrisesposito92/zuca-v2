---
title: "Rules creation for selecting documents and mandates"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-feature-configuration/e-invoicing-business-regions-configuration/rules-creation-for-selecting-documents-and-mandates"
product: "zuora-billing"
scraped_at: "2025-12-24T18:30:50.749Z"
---

# Rules creation for selecting documents and mandates

Create rules by combining conditions or groups for invoices, credit memos, debit memos, and their items.

You can create rules that combine conditions or condition groups for invoices, credit memos, debit memos, invoice items, credit memos, and debit memos.

-   For invoices, credit memos, and debit memos, click \+ Add Condition or \+ Add Group .

    -   For a group, select the AND or OR operator and define multiple conditions.

    -   For a condition, select an option that includes a combination of objects and fields from the dropdown list. The available operators (for example, “=” and “>”) vary for different options. See Manage custom fields with the Object Manager .
        Note: Only indexed custom fields are available in the dropdown list.

    -   For a group or condition, click the copy icon to duplicate a new one. Alternatively, you can click the delete icon to delete a group or condition, and then add a new one.

-   For invoice items, credit memo items, and debit memo items, click \+ Add Item Filter. After adding a item filter, click \+ Add Condition or \+ Add Group to define condition or condition groups as above.
