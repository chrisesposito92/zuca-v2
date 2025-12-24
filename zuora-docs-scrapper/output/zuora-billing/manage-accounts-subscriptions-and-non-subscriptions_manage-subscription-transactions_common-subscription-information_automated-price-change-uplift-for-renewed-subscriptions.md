---
title: "Automated price change (uplift) for renewed subscriptions"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/automated-price-change-uplift-for-renewed-subscriptions"
product: "zuora-billing"
scraped_at: "2025-12-24T05:19:27.534Z"
---

# Automated price change (uplift) for renewed subscriptions

This topic explains how to automate price changes for renewed subscriptions in Zuora Billing, including enabling the feature, selecting price increase options, and understanding prerequisites and supported charge types.

Zuora Billing provides the ability to automatically change subscriber pricing when termed subscriptions renew. For example, you might want to increase prices on renewal by a fixed percentage to keep pace with inflation. Or you might change subscriber pricing to the latest catalog pricing during automatic renewals. Typically, this change is a price increase, and is referred to as an uplift.

## Step 1: Turn On Automated Price Change

By default, this feature is disabled for all new and existing tenants. To use this feature, click your username at the top right and navigate to Billing > Define Default Subscription Settings . Edit the settings and set Enable Automatic Price Change when Subscriptions are Renewed? to `Yes` .

![Subscription uplift settings](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/37261408-c3b2-4244-89f9-fb30a6abd713?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjM3MjYxNDA4LWMzYjItNDI0NC04OWY5LWZiMzBhNmFiZDcxMyIsImV4cCI6MTc2NjYzOTk2NSwianRpIjoiZTM0NzdmYzgxM2NmNGI3ZmIyNDZlNGY4MTk2MzJlOTMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.uib2KFO82kgkplzxPAHTuU3lCsBllv82ZlxSc1X2xfA)

This feature can used only with termed subscriptions. Evergreen subscriptions do not have a renewal date.

## Step 2: Select a Price Increase Option

After enabling automatic price change, select an uplift option in the Default Price Change for Product Charges field to apply when renewing a subscription. You can override any of these values at the product rate plan charge and subscription rate plan levels.

-   No Change: Zuora will not apply a price increase.

-   Percentage Increase: If you select this option, you can specify a Default Price Increase Percentage Value . The price will be increased by the specified percentage every time that the subscription is renewed.

-   Use Latest Product Catalog Pricing : If you select this option, Zuora will update the price for each charge to the current product rate plan charge price at the time of renewal.
