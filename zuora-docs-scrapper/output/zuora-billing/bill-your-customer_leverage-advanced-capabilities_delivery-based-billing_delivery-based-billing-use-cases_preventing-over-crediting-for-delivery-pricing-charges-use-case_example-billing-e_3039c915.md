---
title: "Example: billing engine generates credit memos when credit memos exist"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/delivery-based-billing/delivery-based-billing-use-cases/preventing-over-crediting-for-delivery-pricing-charges-use-case/example-billing-engine-generates-credit-memos-when-credit-memos-exist"
product: "zuora-billing"
scraped_at: "2025-12-24T08:39:26.589Z"
---

# Example: billing engine generates credit memos when credit memos exist

The billing engine generates credit memos independently of existing ad hoc credit memos, focusing on effective dates and ensuring consistency between booking and billing.

If your billing engine tends to generate credit memos (due to subscription cancellation , product removal , suspension and resumption , and so on) when ad hoc credit memos already exist, the billing engine-generated credit memos are not affected by the settings of the billing rules Available to credit validation for credit memos and Include billing engine credits in total available credit. The billing engine continues to generate credit memos based on the effective date without considering the existing ad hoc credit memos created for the invoice.

The following example uses the above example invoice and delivery pricing charges to explain the behavior of the billing engine-generated credit memos.

The Header and Item-level option is selected. Two credit memos exist for the delivery pricing charge 1 and invoice item 1.

The following table lists the change in the Available to credit amount of invoice item 1.

| Credit Memo | Source | Credit memo item | Credit amount | Available to credit amount of invoice item 1 |
| --- | --- | --- | --- | --- |
| CM 1 | Creating an Ad hoc credit memo | Credit memo item 1 | $40 | $2 = $42 - $40 |
| CM 2 | Creating a delivery adjustment and specifying the adjustment period as follows:Start Date: 2023-08-07End Date: 2023-08-07 | Credit memo item 1 | $1.75The delivery adjustment period is one day, and the charge price per day is $1.75. Therefore, a $1.75 credit memo is generated. | $0.25 = $2 - $1.75 |

Suppose you want to cancel the subscription 1 in the middle of the subscription term with a cancellation effective date of 21/08/2023. A new credit memo of $21.00 is generated for the delivery pricing charge 1 through the bill run.

Even the Available to credit amount of the invoice item 1 is only $0.25. The bill run still generates credit memos based on the cancellation effective date. It doesn’t consider the ad-hoc credit memos from the same invoice. This is to ensure there is no discrepancy between booking and billing.
