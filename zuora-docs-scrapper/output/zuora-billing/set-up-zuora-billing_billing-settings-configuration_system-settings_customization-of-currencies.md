---
title: "Customization of currencies"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/billing-settings-configuration/system-settings/customization-of-currencies"
product: "zuora-billing"
scraped_at: "2025-12-24T05:03:47.554Z"
---

# Customization of currencies

Zuora Billing allows customization of billing in various currencies, enabling global transactions with options to add, activate, and configure currency settings.

Zuora Billing provides you the flexibility of billing your global customers in different currencies.

On the Customize Currencies page, to add a currency type, click Add New Currency and edit the following options. When you are done editing the fields, click Save to add the currency.

| Setting | Description |
| --- | --- |
| Active | Specify whether your company is currently using the applicable currency. If the Active box is selected, it means your company is selling products and services in the applicable currency. If the Active check box is not selected, it means your company is not selling any products or services in the applicable currency. |
| Alphabetic Code | Use this field to select a currency type from a list of world currencies. See Currencies and their 3-letter codes for a list of currencies supported in Zuora Billing, including their 3-letter ISO codes. |
| Rounding Mode | Allows you to define whether a currency should be rounded Down , Up , or Half Up . By default, Zuora uses Half Up rounding on all currencies (for example, where 3.49 is rounded to 3 and 3.50 is rounded to 4). The Down and Up options are useful if you need to use a different rounding mode for a particular currency (for example, in Japan, it is often the case that currency values are rounded Down to the nearest Yen). |
| Rounding Increment | Allows you to define the currency increment used for rounding. This is useful if you are working with currencies that do not round to the nearest cent (for example, Swiss francs are typically rounded to the nearest 5 cents).Do not apply when calculating inclusive taxes : Select this option if you don't want to round the tax amounts when using inclusive taxes.This option appears if your rounding increment is not the smallest possible value, given the currency's decimal place setting. If you choose this option, the inclusive tax carve out will be rounded to the smallest possible currency value rather than your specified rounding increment.For example, if you set the rounding increment to 0.05 (to the nearest 5 cents) and select this option, the inclusive tax carve out will still be rounded to the nearest penny. |
| Rate | To fully customize a currency for use, you must specify the exchange rate for that currency. |
