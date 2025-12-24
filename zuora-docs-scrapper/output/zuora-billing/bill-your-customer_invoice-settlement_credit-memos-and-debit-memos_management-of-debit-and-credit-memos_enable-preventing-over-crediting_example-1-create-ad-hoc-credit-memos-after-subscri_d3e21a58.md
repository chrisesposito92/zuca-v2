---
title: "Example 1: Create ad hoc credit memos after subscription cancellation"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/management-of-debit-and-credit-memos/enable-preventing-over-crediting/example-1-create-ad-hoc-credit-memos-after-subscription-cancellation"
product: "zuora-billing"
scraped_at: "2025-12-24T08:35:32.925Z"
---

# Example 1: Create ad hoc credit memos after subscription cancellation

In this example, the billing rule Available to credit validation for credit memos is set to Header-level only . Therefore, Zuora validates and prevents the total credit amount from exceeding the total invoice amount for the whole invoice.

An annual subscription generates an invoice INV00000001 of $1200, covering the service period from 1/1/2023 to 31/12/2023.

The following table lists the change in the Total Available To Credit amount of the whole invoice.

The subscription is cancelled on 1/7/2023. When the subscription is billed, a credit memo CM1 of $600 is generated for the past six months, covering the service period from 1/1/2023 to 30/6/2023.

| Credit Memo | Source | Credit amount | Total available to credit amount of the whole invoice |
| --- | --- | --- | --- |
| CM 1 | Subscription cancellation | $600 | Total Available To Creditamount of the whole invoice =$1200- $600 |

Assume that customer care issues a credit memo CM2 from the invoice INV00000001 for $800. Zuora's behaviors are different depending on the setting of the billing rule Include billing engine credits in total available credit , as follows:

-   If this billing setting is set to Yes , Zuora counts the credit memos generated due to the subscription cancellation in the Total Available To Credit amount of the whole invoice. After the subscription cancellation, the Total Available To Credit amount changes to $600. In this case, Zuora does not allow customer care to issue the second credit memo CM2 of $800. In other words, customer care can only issue a credit memo of $600 or less.

-   If this billing setting is set to No , Zuora does not take into account the credit memos generated due to the subscription cancellation. The Total Available To Credit amount is still $1200. In this case, Zuora allows customer care to issue the second credit memo CM2 of $800.
