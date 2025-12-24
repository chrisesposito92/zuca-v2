---
title: "Previous Transactions Fields"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/merge-fields-for-invoices/previous-transactions-fields"
product: "zuora-billing"
scraped_at: "2025-12-24T05:51:46.192Z"
---

# Previous Transactions Fields

This topic details the fields displayed in the transaction table, including refunds, payments, adjustments, invoices, and memos, associated with the account.

Refunds, Payments, Adjustments, and Invoices are displayed in the transaction table currently. These transactions are associated to the Account and not associated to this invoice. If you have the Invoice Settlement feature enabled, credit memos and debit memos are also supported. See Display Previous Transactions Data for more information.

| Merge Field | Sort Order | Description |
| --- | --- | --- |
| Transaction.TransactionDate | 1 | Type: DateExample: 7/17/15 |
| Transaction.TransactionNumber |  | Example: INV00000001This field cannot be translated. |
| Transaction.TransactionType |  | The type of transaction.Example: Credit card payment |
| Transaction.Description |  | Example: invoice |
| Transaction.TransactionAmount |  | Type: NumberExample: $8,000.00 |
| Transaction.AccountBalanceImpact |  | This field is the balance impact of the transaction. For example, a payment amount might be 50, but its balance impact is -50.Type: NumberExample: $8,000.00 |
