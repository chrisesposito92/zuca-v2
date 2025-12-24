---
title: "Credit memo generation in Billing Schedule"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/overview-of-billing-schedule/credit-memo-generation-in-billing-schedule"
product: "zuora-billing"
scraped_at: "2025-12-24T18:33:31.003Z"
---

# Credit memo generation in Billing Schedule

Credit memos are automatically generated when a subscription is canceled or a charge is removed from an invoice schedule.

After an invoice schedule is created for an order, if you cancel a subscription or remove a charge, credit memos are generated automatically for the change.

-   If a charge is removed or a subscription is canceled, a credit memo is generated automatically on the date when the removal or cancellation takes effect to generate credit memos. If the charge for subscription is associated with an invoice schedule that has pending schedule items, the next invoice schedule item in Pending status is automatically processed on the date when the removal or cancellation takes effect.
-   If multiple charges are removed or multiple subscriptions are canceled, a credit memo is automatically generated on the earliest date when any removal or cancellation takes effect.
-   If a subscription contains invoice schedule charges and non-scheduled charges, the credit memo is generated along with the next invoice.
