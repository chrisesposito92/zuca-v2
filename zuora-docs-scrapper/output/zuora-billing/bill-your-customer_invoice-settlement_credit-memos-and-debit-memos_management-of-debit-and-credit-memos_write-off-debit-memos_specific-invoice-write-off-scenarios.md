---
title: "Specific invoice write-off scenarios"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/management-of-debit-and-credit-memos/write-off-debit-memos/specific-invoice-write-off-scenarios"
product: "zuora-billing"
scraped_at: "2025-12-24T08:36:11.154Z"
---

# Specific invoice write-off scenarios

Writing off a debit memo automatically creates and applies a credit memo, reducing all related items and taxes to a zero balance

By writing off a debit memo, a credit memo is automatically created and applied to the debit memo. The generated credit memo items and credit memo taxation items are applied to the corresponding debit memo items and debit memo taxation items respectively. If a debit memo is written off, the balance of each debit memo item and debit memo taxation item must be zero after the write-off.

The debit memo write off operation can be either ‘Revenue Impacting’ or ‘Non Revenue Impacting’ depending on whether the accounting code selected for write off is a revenue accounting code or an expense (non-revenue). The credit memos generated from non-revenue impacting write offs cannot be written off (that is, the credit memo write off capability will not apply to non-revenue impacting write off credit memos).

The following table lists the specific invoice write-off scenarios:

| Debit memo | Debit memo item | Credit memo item created | Credit memo created |
| --- | --- | --- | --- |
| Debit Memo with a non-zero balance | Debit memo: with a non-zero balanceCorresponding taxation item: with a non-zero balance | Credit memo item: with a non-zero balanceCorresponding taxation item: with a non-zero balance | Credit memo with a non-zero balance |
| Debit memo item: with a non-zero balanceCorresponding taxation item: with zero balance | Credit memo item: with a non-zero balanceCorresponding taxation item: with zero balance |  |  |
| Debit memo item: with zero balanceCorresponding taxation item: with a non-zero balance | Credit memo item: with zero balanceCorresponding taxation item: with a non-zero balance |  |  |
| Debit memo item: with zero balanceCorresponding taxation item: with zero balance | Credit memo item: with zero balanceCorresponding taxation item: with zero balance |  |  |
| Debit Memo with zero balance | Debit memo item: with a non-zero balanceCorresponding taxation item: with a non-zero balance | Credit memo item: with a non-zero balanceCorresponding taxation item: with a non-zero balance | Credit memo with zero balance |
| Debit memo item: with zero balanceCorresponding taxation item: with zero balance | Credit memo item: with zero balanceCorresponding taxation item: with zero balance | Credit memo with zero balance |  |

You can write off debit memos through the Zuora UI or REST API, even in a closed accounting period. See Write off debit memos from the UI and [Write off a debit memo](https://developer.zuora.com/v1-api-reference/api/operation/PUT_WriteOffDebitMemo/) for more information.

For zero-amount invoices composed of positive and negative invoices items or taxation items, they can be written off no matter which option the billing rule is set to. The specific credit memo creation during the invoice write-off might be different according to the option set for the billing rule.

After you write off a debit memo, Zuora sets some taxation item fields of generated credit memo items by copying values from the corresponding debit memo taxation items. There is no tax calculation involved in the process. The values of the following taxation item fields are copied:

-   `taxRate`

-   `exemptAmount`

-   `taxRateType`
