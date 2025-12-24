---
title: "Set up multi-currency rate plans"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/set-up-product-catalog/set-effective-start-dates-and-end-dates/set-up-multi-currency-rate-plans"
product: "zuora-billing"
scraped_at: "2025-12-24T04:48:02.315Z"
---

# Set up multi-currency rate plans

Learn how to set up and manage multi-currency rate plans, including editing prices in different currencies and activating currencies for specific rate plans.

You can view the prices for each rate plan in multiple currencies. You can easily edit all of the price elements for a supported, non-base currency (the default currency is the base currency) in a worksheet, with the implied exchange rate displayed.

To set up multi-currency for specific rate plans, complete the following steps:

1.  Navigate to in the left navigation bar.
2.  Click the product name for which you want to add a rate plan. The Product Details page opens.
3.  Click Edit price in multi-currency . A worksheet dialog appears. Use this dialog to activate a different currency and edit the price of the rate plan in the new currency. When both of the following conditions are true, you can edit only two currencies at a time. If you need to edit more than two currencies, edit two currencies, save them, and then edit the next two.

    -   More than two currencies are activated in your tenant.

    -   The product includes more than 2000 prices.


4.  To activate a different currency for a specific rate plan, click Activate in the column of the target currency for the corresponding rate plan row.

    Note:

    -   You must activate currencies to use them when adding a rate plan to a subscription.

    -   When you query the product rate plan charge tier via Zuora API, only activated currency tiers are returned.


5.  Click the price fields to edit the rate plan prices and save your changes.
6.  Click Close to close the dialog.
