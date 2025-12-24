---
title: "Attachments management on subscriptions"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/attachments-management-on-subscriptions"
product: "zuora-billing"
scraped_at: "2025-12-24T05:20:25.195Z"
---

# Attachments management on subscriptions

Use attachments in Zuora to upload documents of various formats to associate additional information with accounts, subscriptions, invoices, credit memos, or debit memos. Example attachments could be purchase orders (PO's), tax exemption documents, or ownership transfer forms. Credit memos or debit memos are available if you have the Invoice Settlement feature enabled.

You can upload any number of attachments for each supported Zuora record, up to the value set by the Maximum number of attachments per record field in tenant profile.

An attachment can belong to only one Zuora record, such as a specific invoice, a credit memo, a debit memo, a subscription, or a customer account.

For subscriptions, an attachment is tied to all versions of the subscription via the Subscription Number.

See Attachments for managing attachments with Zuora REST API.

## Required Permissions

To view attachments on an account, subscription, invoice, credit memo, or debit memo, you must have the permission to view the specific account, subscription, or invoice. You must also have a Billing role that includes the Manage Attachments permission.

To add or edit attachments on an account, subscription, invoice, credit memo, or debit memo, you must have:

-   The permission to update (create or manage) the specific account, subscription, or invoice
-   The API Write Access platform permission
-   A Billing role that includes the Manage Attachments permission

To delete attachments, you must have a Billing role that includes the Manage Attachments permission and the Delete Attachments permission.

To change your Billing role, contact your Zuora platform administrator. For information about assigning Billing roles to users, see Billing roles.
