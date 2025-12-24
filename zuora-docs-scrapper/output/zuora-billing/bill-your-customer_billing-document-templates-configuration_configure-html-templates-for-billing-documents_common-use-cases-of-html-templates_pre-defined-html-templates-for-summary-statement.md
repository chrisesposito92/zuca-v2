---
title: "Pre-defined HTML templates for summary statement"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/common-use-cases-of-html-templates/pre-defined-html-templates-for-summary-statement"
product: "zuora-billing"
scraped_at: "2025-12-24T05:43:33.889Z"
---

# Pre-defined HTML templates for summary statement

Explore pre-defined HTML templates in the Template Library for customizing and configuring summary statements, offering options for invoice settlement and item adjustments.

Here's a list of default templates that have been added to the Template Library screen of the Summary Statement in the . These templates offer pre-designed options for users to customize and configure summary statements.

-   Transaction Table for Invoice Settlement - Displays a transaction table that consolidates all invoices, credit memos, debit memos, payments, and refunds for a specific statement period. This template is available when the Invoice Settlement feature is enabled.

-   Transactions in Separate Tables for Invoice Settlement - Displays transactions in separate tables based on transaction types (e.g., invoices, credit memos, debit memos, payments) within a specific statement period. Each table reflects the transactions that occurred during the period. This template is available when the Invoice Settlement feature is enabled.

-   List Open Transactions in Separate Tables for Invoice Settlement - Displays only open transactions in separate tables based on transaction types (e.g., invoices, credit memos, payments) within a specific statement period. Transactions with a zero balance or zero unapplied amount are excluded. This template is available when the Invoice Settlement feature is enabled.

-   Transactions in Separate Tables - Suppress $0 Invoices for Invoice Settlement - Filters out $0 invoices from the transaction and invoice tables, organizes transactions into separate tables by type (e.g., invoices, credit memos, debit memos, payments) for a specific statement period. This is useful when multiple $0 invoices are generated due to no usage. This template is available when the Invoice Settlement feature is enabled.

-   Transaction Table for Invoice Item Adjustment - Displays a consolidated transaction table for invoices, invoice item adjustments, payments, and refunds for a specific statement period. Applicable when using the Invoice Item Adjustment feature.


Note:

This template does not include Invoice Adjustments. If using the Invoice Adjustment feature, modify the transaction table to enable the Invoice Adjustment flag.

-   Transactions in Separate Tables for Invoice Item Adjustment - Displays transactions in separate tables based on transaction types (e.g., invoices, invoice item adjustments, payments) within a specific statement period. Each table reflects transactions from the period. This template is available when the Invoice Settlement feature is enabled.


Note:

This template does not include Invoice Adjustments. Modify the transaction table to enable the Invoice Adjustment flag if needed.
