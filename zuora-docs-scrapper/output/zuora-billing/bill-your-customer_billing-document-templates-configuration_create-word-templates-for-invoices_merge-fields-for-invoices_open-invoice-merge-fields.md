---
title: "Open invoice merge fields"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/merge-fields-for-invoices/open-invoice-merge-fields"
product: "zuora-billing"
scraped_at: "2026-02-19T03:13:48.731Z"
---

# Open invoice merge fields

This topic details the fields associated with open invoices, including invoice dates, numbers, due dates, totals, and balances.

All Open Invoices associated to this Account. An open invoice is any invoice where the balance is not equal to 0.

| Merge Field | Sort Order | Description |
| --- | --- | --- |
| Invoice.InvoiceDate |  | Type: DateExample: 02/01/2009 |
| Invoice.InvoiceNumber |  | Example: INV00000008 |
| Invoice.DueDate | 1 | Type: DateExample: 02/01/2009 |
| Invoice.Total |  | Type: NumberExample: $998.80 |
| Invoice.Balance |  | Type: NumberExample: $548.80 |
