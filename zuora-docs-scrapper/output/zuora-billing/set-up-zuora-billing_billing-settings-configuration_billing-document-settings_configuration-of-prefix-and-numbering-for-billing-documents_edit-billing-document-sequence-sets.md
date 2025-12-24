---
title: "Edit billing document sequence sets"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/billing-settings-configuration/billing-document-settings/configuration-of-prefix-and-numbering-for-billing-documents/edit-billing-document-sequence-sets"
product: "zuora-billing"
scraped_at: "2025-12-24T05:04:56.633Z"
---

# Edit billing document sequence sets

Edit billing document sequence sets using the REST API or Zuora UI, with options for customizing prefixes and starting numbers for invoices, credit memos, debit memos, payments, and refunds.

You can edit existing billing document sequence sets through the REST API or the Zuora UI.

The Credit and Debit Memos feature is only available if you have the Invoice Settlement feature enabled. The Invoice Settlement feature is in Limited Availability . If you wish to have access to the feature, submit a request at Zuora Global Support .

To edit a billing document sequence set through the REST API, see "Update sequence set" for more information.

To edit a billing document sequence set through the Zuora UI:

1.  Click your username at the top right, and navigate to .
2.  In the Define Prefixes, Numbers and Sequence Sets area on the Define Numbering and SKU Formats page, click edit in the row of the billing document sequence set that you want to edit.
3.  In the corresponding sequence set row, edit the following fields:
    1.  In the Sequence Set column, enter a new name for the billing document sequence set.
    2.  For invoices, enter a new prefix in the Prefix column and a new starting number in the Starting Document Number column.
    3.  (Available only if Invoice Settlement is enabled) For credit memos, enter a new prefix in the Prefix column and a new starting number in the Starting Document Number column.
    4.  (Available only if Invoice Settlement is enabled) For debit memos, enter a new prefix in the Debit Memo Prefix column and a new starting number in the Starting Document Number column.
    5.  Optional: For payments, enter a new prefix in the Prefix field and a new starting number in the Starting Document Number field.
    6.  Optional: For refunds, enter a new prefix in the Prefix field and a new starting number in the Starting Document Number field.
4.  Click save to save the configurations.
