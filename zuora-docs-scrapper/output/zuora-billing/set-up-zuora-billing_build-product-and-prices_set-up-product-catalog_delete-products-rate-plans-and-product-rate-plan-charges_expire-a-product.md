---
title: "Expire a product"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/set-up-product-catalog/delete-products-rate-plans-and-product-rate-plan-charges/expire-a-product"
product: "zuora-billing"
scraped_at: "2025-12-24T04:48:52.852Z"
---

# Expire a product

Learn how to expire a product to prevent it from being sold after a specific date, and understand the implications for Zuora Quotes and API integrations.

At some point, you might want to expire a product, and prevent it from being sold after a specific date.

To mark a product as expired, open the product detail page and click Edit at the upper-right corner of the Product Information section. Change the Effective End Date field to the last day you want the product to be able to be sold.

If the rate plans associated with the product expire after the day you want to expire the product, you must first edit the individual rate plans to expire them on or before the date you expire the product.

## Expired products and Zuora Quotes

After the change is made the next time you sync Zuora with Salesforce the product will no longer show in Zuora Quotes. If you try to send a new quote from Salesforce to Zuora after you expire the product in Zuora but before you re-sync the product catalog, you will get an error when you click Send to Zuora in Zuora Quotes because the product is no longer available to add to subscriptions in Zuora.

## Expired products and Zuora API

If you have an external website that uses the API to create orders, you must update your API code immediately after you expire the product to ensure that product is no longer referenced in the code. If this is not done, then any API calls that reference the now-expired product will cause an error, and no new subscription will be created.
