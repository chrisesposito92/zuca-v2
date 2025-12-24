---
title: "Mapping between AQuA results and meaningful values"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/management-of-debit-and-credit-memos/view-information-of-credit-and-debit-memos/mapping-between-aqua-results-and-meaningful-values"
product: "zuora-billing"
scraped_at: "2025-12-24T08:36:05.878Z"
---

# Mapping between AQuA results and meaningful values

Mapping between the AQuA results and meaningful values

When you use the Aggregate Query API (AQuA) to query detailed information about credit memo items, the value of the `ProcessingType` field in the query result is a numeral. The following table lists the mapping between the AQuA results and meaningful values of the `ProcessingType` field value:

| AQuA query result | Meaningful value |
| --- | --- |
| 0 | Charge |
| 1 | Discount |
| 2 | Prepayment |
| 3 | Tax |
| 4 | Rounding |
