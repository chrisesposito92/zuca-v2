---
title: "Key Metrics Fields"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-customer-accounts/key-metrics-for-customer-accounts/key-metrics-fields"
product: "zuora-billing"
scraped_at: "2025-12-24T05:14:47.183Z"
---

# Key Metrics Fields

This article provides an overview of key metrics fields and descriptions, including account balances, credit and debit memos, and monthly recurring revenue (MRR), essential for financial analysis and reporting.

| Field | Description |
| --- | --- |
| Account Balance | The outstanding balance for the customer, and is the sum of all outstanding invoices and debit memos. The debit memos are only available if you have the Invoice Settlement feature enabled. |
| Total Invoice Balance | The sum of the balances of each individual invoice. |
| Credit Balance | The customer's current credit balance. This field is deprecated if you have the Invoice Settlement feature enabled. |
| Total Debit Memo Balance | The total outstanding balance of debit memos for the customer. |
| Unapplied Credit Memo Amount | The amount of a credit memo that has been created, but not used to settle or offset an invoice balance or a debit memo balance. |
| Unapplied Payment Amount | The amount of a payment that you have received but has not yet applied to any invoices or debit memos. |
| Contracted MRR (CMRR) | There are account-level CMRR and subscription-level CMRR. See Contracted MRR for more information. |
| Today's MRR | The current monthly recurring revenue as of today’s date. Today’s MRR does not account for future upgrades, downgrades, upsells, or cancellations. |
| Total MRR | The sum of CMRRs of all the subscriptions owned by an account. |
| Last Invoiced | The date the customer was last invoiced. |

See Monthly Recurring Revenue for more information about MRR and how to calculate it. Also see Total Contract Value , a related key metric.
