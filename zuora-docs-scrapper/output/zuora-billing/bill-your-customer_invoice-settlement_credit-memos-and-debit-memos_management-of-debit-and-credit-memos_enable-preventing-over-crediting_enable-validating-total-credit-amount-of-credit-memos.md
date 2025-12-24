---
title: "Enable validating total credit amount of credit memos"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/management-of-debit-and-credit-memos/enable-preventing-over-crediting/enable-validating-total-credit-amount-of-credit-memos"
product: "zuora-billing"
scraped_at: "2025-12-24T08:35:27.857Z"
---

# Enable validating total credit amount of credit memos

You can enable the validation at two different levels

1.  Navigate to Billing Settings > Billing Rules > Billing Document.
2.  Click the edit icon in the row of the billing rule Available to credit validation for credit memos and select one of the following options:

    -   Header-level only : If enabled, Zuora validates and prevents the total credit amount from exceeding the total invoice amount for the whole invoice.

    -   Header and Item-level: If enabled, Zuora validates and prevents the total credit amount from exceeding the total invoice amount for each invoice item.


    Zuora validates and prevents your total credit amount from exceeding the total invoice amount in the following situations:

    -   Creating delivery adjustments for a specific date when a delivery adjustment already exists on that date.
    -   Creating delivery adjustments or ad hoc credit memos when the total credit amount exceeds the total amount of the whole invoice or the amount of an invoice item, depending on the setting of this billing rule.
