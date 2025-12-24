---
title: "Enable or disable counting existing billing engine-generated credit memos"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/management-of-debit-and-credit-memos/enable-preventing-over-crediting/enable-or-disable-counting-existing-billing-engine-generated-credit-memos"
product: "zuora-billing"
scraped_at: "2025-12-24T08:35:30.131Z"
---

# Enable or disable counting existing billing engine-generated credit memos

You can enable or disable counting existing billing engine-generated credit memos

1.  Navigate to Billing Settings > Billing Rules > Billing Document.
2.  Click the edit icon in the row of the billing rule Include billing engine credits in total available credit and select one of the following options:

    -   Yes: If selected, depending on the setting of the billing rule Available to credit validation for credit memos, the Zuora's behaviors are as follows:

        -   When Header-level only is selected, Zuora counts both the billing engine-generated credit memos and credit memos generated from other sources in the Total Available To Credit amount of the whole invoice.

        -   When Header and Item-level is selected, Zuora counts both the billing engine-generated credit memos and credit memos generated from other sources in the Available to Credit amount of an invoice item.

    -   No: If selected, Zuora does not take into account the billing engine-generated credit memos in over-crediting validation.
