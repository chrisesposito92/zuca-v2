---
title: "Limitations"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/additional-resources-on-taxes/tax-selection-for-calculation/limitations"
product: "zuora-billing"
scraped_at: "2025-12-24T05:11:12.623Z"
---

# Limitations

This article describes the limitations of the Apply new tax rate for additional units purchased and old tax rate for returns billing rule.

This feature does not apply to the billing operations in any of the following scenarios:

-   Updating the billing period alignment or trigger condition in a subscription

-   Updating a subscription in more than one amendment or order action:

    -   Updating a product and canceling the subscription

    -   Updating a product and removing a product

    -   Updating a product and changing the terms and conditions

    -   Updating a product and suspending the subscription

    -   Updating a product and changing the BCD

-   Setting the Invoice/Credit Memo generation rule billing rule to put all negative charges on a credit memo.

-   Setting the When service period of an invoice item crosses multiple tax rate periods, it will generate: billing rule to Multiple Tax Items.
