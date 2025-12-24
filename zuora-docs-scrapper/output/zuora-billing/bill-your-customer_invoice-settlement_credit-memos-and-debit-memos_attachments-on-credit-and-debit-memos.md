---
title: "Attachments on credit and debit memos"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/attachments-on-credit-and-debit-memos"
product: "zuora-billing"
scraped_at: "2025-12-24T08:37:17.375Z"
---

# Attachments on credit and debit memos

Use attachments in Zuora to upload documents of various formats to associate additional information with accounts, subscriptions, invoices, credit memos, or debit memos. Example attachments could be purchase orders (PO's), tax exemption documents, or ownership transfer forms. Credit memos or debit memos are available if you have the [Invoice Settlement](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-overview) feature enabled.

You can upload any number of attachments for each supported Zuora record, up to the value set by the Maximum number of attachments per record field in tenant profile.

An attachment can belong to only one Zuora record, such as a specific invoice, a credit memo, a debit memo, a subscription, or a customer account.

For subscriptions, an attachment is tied to all versions of the subscription via the Subscription Number.

See Attachments for managing attachments with Zuora REST API.

## Required permissions

To view attachments on an account, subscription, invoice, credit memo, or debit memo, you must have the permission to view the specific account, subscription, or invoice. You must also have a Billing role that includes the Manage Attachments permission.

To add or edit attachments on an account, subscription, invoice, credit memo, or debit memo, you must have:

-   The permission to update (create or manage) the specific account, subscription, or invoice
-   The API Write Access platform permission
-   A Billing role that includes the Manage Attachments permission

To delete attachments, you must have a Billing role that includes the Manage Attachments permission and the Delete Attachments permission.

To change your Billing role, contact your Zuora platform administrator. For information about assigning Billing roles to users, see Billing roles.

## Limits

The following limits apply to attachments:

| Maximum size of one attachment file | 4MB |
| --- | --- |
| Total maximum size of all attachment files in one tenant | 30GB |
| Maximum number of attachments on one record | 200 |
| Executable files as attachments | Not supported |

## Supported file types

Files with the following extensions can be used as attachments in Zuora.

-   .pdf
-   .csv
-   .png
-   .xlsx
-   .xls
-   .doc
-   .docx
-   .msg
-   .jpg
-   .txt
-   .htm
-   .html
-   .eml
-   .pptx
-   .gif
-   .rtf
-   .xml
-   .jpeg
-   .log
-   .cls

## Manage attachments in UI

Follow these procedures to add, view, edit, or delete an attachment on a Customer Account, Subscription, Invoice, Credit Memo, or Debit Memo detail page:

-   [Add an attachment](/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/attachments-on-credit-and-debit-memos/add-an-attachment)

-   [Delete an attachment](/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/attachments-on-credit-and-debit-memos/delete-an-attachment)

-   [Edit an attachment](/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/attachments-on-credit-and-debit-memos/edit-an-attachment)

-   [Download an attachment](/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/attachments-on-credit-and-debit-memos/download-an-attachment)
