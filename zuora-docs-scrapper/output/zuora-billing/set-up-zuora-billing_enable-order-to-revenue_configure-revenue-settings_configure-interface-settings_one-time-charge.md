---
title: "One Time Charge"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/configure-revenue-settings/configure-interface-settings/one-time-charge"
product: "zuora-billing"
scraped_at: "2025-12-24T05:13:43.765Z"
---

# One Time Charge

This section allows you to configure settings for generating one-time charges based on subscription term changes.

In this interface setting section, you can configure the following settings:

| Setting | Option | Is this option the default value? | Generation behavior and logic |
| --- | --- | --- | --- |
| Generate One Time Charge for subscription term change | No | Default value | The term change does not impact the generation of booking transactions for one time charges. |
| Yes | No | If the term start or end date of a subscription is changed, the system will generate a new booking transaction for the one-time charge that belongs to the changed term. |  |
