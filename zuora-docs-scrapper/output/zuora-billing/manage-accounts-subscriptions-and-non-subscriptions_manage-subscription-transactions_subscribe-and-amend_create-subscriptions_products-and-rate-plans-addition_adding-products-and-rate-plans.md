---
title: "Adding Products and Rate Plans"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/subscribe-and-amend/create-subscriptions/products-and-rate-plans-addition/adding-products-and-rate-plans"
product: "zuora-billing"
scraped_at: "2025-12-24T05:33:18.353Z"
---

# Adding Products and Rate Plans

This article explains how to add products and rate plans in Zuora Billing, including selecting products, editing charge details, and managing billing periods.

To add a product and rate plan:

Note:

Use the type ahead feature to search for the product rate plan name by entering at least three letters contained in the rate plan name. Zuora Billing will provide a narrowed down list of possibilities.

1.  In the Product field, select a product from your product catalog.
2.  When you select the product, Zuora Billing displays a list of available rate plans for that product. Select the rate plan you want to add from the Rate Plan list.
3.  You can edit the Charge Description , Unit Price , or QTY (quantity) in-line. If you need to edit the additional charge information, click an entry in the Charge Name column and edit the applicable fields.

    -   Some rate plans will allow you to edit either the quantity or price, but not both. For example, tiered pricing rate plans will allow you to update the quantity. However, the updated price is calculated by Zuora Billing based on pricing for the applicable tier.

4.  You can add additional products and rate plans, and modify the details for each.

    -   Products have a default billing period for each of their rate plan charges, as defined in the product catalog. The Billing Period option allows you to override this with a custom billing period. It is possible to set a different billing period for each rate plan charge that you add to a product's rate plan.
    -   It is important to note however that changes cannot be made to a rate plan charge's billing period once a subscription has become active. For more information on what can and can't be changed in an active subscription, see Changing Subscriptions (Amendments)

    ![OverrideBillingPeriod_create_subscription](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/11392244-93c0-4ed3-92f5-d276b66a2b1b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjExMzkyMjQ0LTkzYzAtNGVkMy05MmY1LWQyNzZiNjZhMmIxYiIsImV4cCI6MTc2NjY0MDc5NiwianRpIjoiZDEyZTBmMTI0ODI4NDkzYWIyYWZlMjY1OWQ0Njc2ZjAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.cQ4kNFtDGezs12o57s_CWy0vHUoG_DY4750ytHQzSJA)

5.  When you are done, click activate to activate the subscription. If you are not finished editing the subscription, click save as draft to save the subscription in draft status.
