---
title: "Configuration of file name pattern for billing documents"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/billing-settings-configuration/billing-document-settings/configuration-of-file-name-pattern-for-billing-documents"
product: "zuora-billing"
scraped_at: "2025-12-24T05:04:43.823Z"
---

# Configuration of file name pattern for billing documents

Covers information on how to configure file name patterns for billing documents to include detailed information such as invoice numbers, account numbers, and dates.

You can configure the name patterns for the files that are generated for billing documents, including invoices, credit memos, and debit memos.

Note:

The Credit and Debit Memos feature is only available if you enable the Invoice Settlement feature.

With configurable file name patterns, you can reflect more information in the names of the files that are generated for billing documents.

You can use the supported merge field tags to configure the name patterns for the files that are generated for billing documents. A supported merge field tag consists of a supported data source object and its corresponding field.

The following table lists the default file name patterns for billing documents.

| Billing Document Type | File Name Pattern |
| --- | --- |
| Invoices | <Invoice.InvoiceNumber>_<Account.AccountNumber>_<Invoice.InvoiceDate> |
| Credit memos | <CreditMemo.MemoNumber>_<Account.AccountNumber>_<CreditMemo.MemoDate> |
| Debit memos | <DebitMemo.MemoNumber>_<Account.AccountNumber>_<DebitMemo.MemoDate> |

You can manage file name patterns for billing documents with the following operations from the Zuora UI:

-   Edit File Name Patterns for Billing Documents

-   View File Name Patterns for Billing Documents
