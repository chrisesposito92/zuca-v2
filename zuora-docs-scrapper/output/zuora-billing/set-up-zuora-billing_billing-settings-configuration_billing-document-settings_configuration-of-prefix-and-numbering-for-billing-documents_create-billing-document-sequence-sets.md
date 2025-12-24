---
title: "Create billing document sequence sets"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/billing-settings-configuration/billing-document-settings/configuration-of-prefix-and-numbering-for-billing-documents/create-billing-document-sequence-sets"
product: "zuora-billing"
scraped_at: "2025-12-24T05:04:53.860Z"
---

# Create billing document sequence sets

Create distinct numbering sequences for billing documents, payments, and refunds using the REST API or Zuora UI.

You can create billing document sequence sets through the REST API or the Zuora UI, allowing distinct numbering sequences for billing documents, payments, and refunds. Billing documents include invoices, credit memos, and debit memos.

The Credit and Debit Memos feature is only available if you enable the Invoice Settlement feature.

To create a billing document sequence set through the REST API, see Create sequence sets for more information.

To create a billing document sequence set through the Zuora UI:

1.  Click your username at the top right, and navigate to Billing > Define Numbering and SKU Formats .
2.  On the Define Numbering and SKU Formats page, click add sequence set in the Define Prefixes, Numbers and Sequence Sets area.
3.  In the Sequence Set area, configure the following fields:
    1.  In the Sequence Set Name field, enter a name for the billing document sequence set to create.
    2.  For invoices, enter a prefix in the Prefix field and a starting number in the Starting Document Number field.
    3.  (Available only if Invoice Settlement is enabled) For credit memos, enter a prefix in the Prefix field and a starting number in the Starting Document Number field.
    4.  (Available only if Invoice Settlement is enabled) For debit memos, enter a prefix in the Prefix field and a starting number in the Starting Document Number field.
    5.  Optional: For payments, enter a prefix in the Prefix field and a starting number in the Starting Document Number field.
    6.  Optional: For refunds, enter a prefix in the Prefix field and a starting number in the Starting Document Number field.
4.  Click save to save the configurations.

    Note: Adding a sequence set for a payment or refund might break the payment gateway integration or gateway reconciliation. We strongly recommend you to test the billing document sequence set before it goes live in production. If you find any issues during testing, adjust the configuration of the sequence set and test it again. If the issue still persists, submit a ticket to Zuora Global Support .
