---
title: "Solution"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/set-up-product-catalog/avoid-product-proliferation-when-building-product-catalog/solution"
product: "zuora-billing"
scraped_at: "2025-12-24T04:48:58.610Z"
---

# Solution

Learn how to effectively manage product catalogs by understanding key elements such as products, rate plans, and charges to avoid unnecessary product proliferation.

To avoid unnecessary product proliferation, you first should become familiar with the key elements within the product catalog:

-   Products : A product is a good or service that you offer customers on a subscription basis. For example, SurveyMonkey's single product is its web-based survey solution. Netflix offers video streaming over the internet as a product. Salesforce.com offers multiple subscription products: Sales Cloud, Service Cloud, Chatter, and others.

-   Product rate plans : After creating a product in the product catalog, you can define any number of rate plans for that product. Each rate plan identifies one pricing model you use to charge for a product. For example, you might decide to offer your product with bronze, silver, and gold plans. Or, you might decide to offer a monthly plan and a discounted annual plan (discounted because the annual plan enables you to collect more cash upfront). One can see [SurveyMonkey](http://www.surveymonkey.com/pricing/) as a more concrete example that they offer Team, Individual, and Enterprise rate plans for the survey solution product.

-   Product rate plan charges : A rate plan within Zuora comprises one or more rate plan charges, each representing a fee that you will charge to a subscriber of that rate plan. For example, your annual rate plan might have a one-time set-up charge and a recurring charge of $50 per user per year.


Now that you are familiar with these elements, it is important to understand when to use each element to avoid product proliferation.

Some keys to remember are:

1.  Don NOT create a new product when a new rate plan will do . Adobe Flash, Acrobat, and Photoshop are different products. The Basic, Gold, and Platinum plans offered by SurveyMonkey are not. If you're simply offering customers different ways to subscribe to the same product, use rate plans instead of products.
2.  Put a bundle into a single product . If you require that a set of products or capabilities must always be purchased in a bundle (for example, Microsoft requires Word, Excel, Outlook, and PowerPoint to be purchased in its Office bundle), then create a single product for that entire bundle.
3.  Use product charges effectively . Let's suppose you want to charge subscribers the following for your Gold rate plan: a one-time set-up fee of $100; a recurring platform fee of $75/month; and a recurring per-user fee of $10/user/month. In this case, the mistake would be creating each of those fees (the set-up fee, the platform fee, and the per user fee) as different products. Those fees are not different products. They're different charges for a single product, so you should be sure to set it up as 3 charges within a single rate plan.
4.  Use charge models effectively . Sometimes, you might want a little more complexity in your pricing. For example:

    -   You might want to offer subscribers volume pricing, where the monthly fee is $10 per unit if the customer subscribes to less than 10 units, but you'll discount the fee to $7.50 per unit if the customer subscribes to 10 units or more. In this case, the temptation may be to create 2 products -- a `less than 10 units` product and a `10 units or more` product. Avoid this temptation. In this case, you should simply create a single Volume Pricing charge within a rate plan to do precisely what you want.

    -   You might want to offer discount pricing, for example, where a subscriber receives 50% off the list pricing for the first 6 months as a purchasing incentive. In this case, the temptation might be to create 2 products, one product with the discount price and one with the list price. Or, the temptation might be to create 2 rate plans, one discount price rate plan and a list price rate plan. Avoid both temptations because they will result in either product or rate plan proliferation. Instead, take advantage of a single Discount charge within a rate plan to do precisely what you want.


    Understand the elements of a product catalog and when to use them. If you are creating new products in the Zuora product catalog that simply do not represent unique goods or services that you offer to subscribers, then you're probably doing something wrong.
