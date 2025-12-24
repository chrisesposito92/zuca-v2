---
title: "Workaround options for tax"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/additional-resources-on-taxes/workaround-options-for-tax"
product: "zuora-billing"
scraped_at: "2025-12-24T05:10:39.401Z"
---

# Workaround options for tax

Explore options for adding tax charges to subscriptions without using Zuora Tax or third-party vendors, including manual tax calculations and considerations for subscription changes.

If you do not use Zuora Tax or integrate with a third-party tax vendor, you may have taxes added to products using a product rate plan charge created specifically for the tax amount. By doing this, the rate plan charge for tax gets added to the subscription as you would with regular charges.

Review these additional considerations before using this method:

-   You must calculate the tax amount when adding the charge to a subscription (whereas, when using the other methods, taxes get automatically calculated upon invoice generation).
-   The tax charge is independent of your regular charges and thus any changes to the subscription for regular charges will not automatically update the tax charge.
-   If an end customer upgrades their subscription and there is an increased charge for that product, the tax also goes up and the tax amount must be amended in the subscription accordingly.

Note: You can use the [Taxation Items operations](https://www.zuora.com/developer/api-references/api/tag/Taxation-Items?_gl=1*1fztaup*_gcl_au*OTczODY4OTM3LjE3NTYwOTU4MzU.*_ga*NDk2MzIzODguMTc0ODI2NzU0MQ..*_ga_MY8CQ650DH*czE3NTgyNzU3ODkkbzM5MCRnMSR0MTc1ODI3NTc5MSRqNTgkbDAkaDU5NDU4MjA2OA..) to manage taxation items for draft billing documents, including invoices, credit memos, and debit memos.
