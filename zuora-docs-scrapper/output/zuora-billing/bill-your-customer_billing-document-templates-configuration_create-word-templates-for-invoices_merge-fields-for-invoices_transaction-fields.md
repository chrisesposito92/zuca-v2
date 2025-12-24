---
title: "Transaction Fields"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/merge-fields-for-invoices/transaction-fields"
product: "zuora-billing"
scraped_at: "2025-12-24T05:51:43.734Z"
---

# Transaction Fields

This topic details the transaction fields displayed in the transaction table, including Refunds, Payments, Adjustments, and Credit Balance Adjustments, with support for credit memos if the Invoice Settlement feature is enabled.

Refunds, Payments, Adjustments, and Credit Balance Adjustments are displayed in the transaction table. These are transactions that are associated only with this invoice. If you have the Invoice Settlement feature enabled, credit memos are also supported. See Configure the Transaction Table for more information.

| Merge Field | Sort Order | Description |
| --- | --- | --- |
| Transaction.TransactionDate | 1 | Type: DateExample: 01/01/2009 |
| Transaction.TransactionNumber |  | Example: P-00000003 |
| Transaction.TransactionType |  | Example: Payment |
| Transaction.Description |  | Example: pay |
| Transaction.AppliedAmount |  | Type: NumberExample: ($400.00) |
