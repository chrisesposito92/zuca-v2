---
title: "Example 2: Cancel a subscription when ad hoc credit memos exist"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/management-of-debit-and-credit-memos/enable-preventing-over-crediting/example-2-cancel-a-subscription-when-ad-hoc-credit-memos-exist"
product: "zuora-billing"
scraped_at: "2025-12-24T08:35:35.188Z"
---

# Example 2: Cancel a subscription when ad hoc credit memos exist

Cancel a subscription when ad hoc credit memos exist

If your billing engine tends to generate credit memos (due to subscription cancellation , product removal , suspension and resumption , and so on) when ad hoc credit memos already exist, the billing engine-generated credit memos are not affected by the settings of the billing rules Available to credit validation for credit memos and Include billing engine credits in total available credit. The billing engine continues to generate credit memos based on the effective date without considering the existing ad hoc credit memos created for the invoice.

Assume that customer care has already issued a credit memo CM1 from Invoice INV00000001 for $800 first in this example. Then, you want to cancel this subscription and set the cancellation effect date to 7/1/2023. The billing engine continues to generate credit memos based on the cancellation effective date without considering the existing ad hoc credit memos.
