---
title: "Charge level proration option for a recurring charge"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/set-up-product-catalog/create-product-rate-plan-charges/charge-level-proration-option-for-a-recurring-charge"
product: "zuora-billing"
scraped_at: "2025-12-24T04:48:12.662Z"
---

# Charge level proration option for a recurring charge

The charge level proration option allows customization of proration behavior for recurring charges, offering flexibility beyond tenant-level settings.

The proration option under the product rate plan charge level(recurring charges) allows you to select the proration behavior for a specific charge instead of using the tenant-level proration logic configured in the billing setting. Meaning you can have different proration behaviors for different settings. This feature is currently available at the normal recurring charge setting.

The Proration setting under the recurring charge billing and frequency provides the following options:

-   Default from tenant setting - Allows to follow the customer billing rule proration setting.

-   Charge the full period - Allows charging the full period amount for a partial billing period. Note that this setting means that there is no proration for either collecting or refunding. Even if you cancel the recurring charge in the middle of a billing period, there is no refund for this billing period. Do not select the Charge the full period option when your billing period is set to Subscription Term.

    Note:

    To apply the charge level proration option for a recurring charge, you need to first turn on the Charge Level Proration feature from the self-service interface.
