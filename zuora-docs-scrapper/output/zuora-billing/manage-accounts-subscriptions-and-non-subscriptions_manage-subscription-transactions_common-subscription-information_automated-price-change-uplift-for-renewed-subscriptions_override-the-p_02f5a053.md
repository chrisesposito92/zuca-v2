---
title: "Override the price increase options at the product rate plan charge level"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/automated-price-change-uplift-for-renewed-subscriptions/override-the-price-increase-options-at-the-product-rate-plan-charge-level"
product: "zuora-billing"
scraped_at: "2026-02-19T03:11:33.649Z"
---

# Override the price increase options at the product rate plan charge level

This task topic explains how to set and override price increase values at different levels, including tenant, product rate plan charge, and subscription rate plan charge.

You can set the price increase value at the tenant, product rate plan charge, and subscription rate plan levels:

-   Tenant Level: You can set the default price change when this feature is enabled. If you change the Zuora Billing setting, the change will affect new Rate Plans on Products and Subscriptions. However, you can then override that setting at the product rate plan charge and subscription rate plan levels.
-   Product Rate Plan Charge Level: The Product Rate Plan Charge inherits the value set at the Tenant level (if any). At the Product Rate Plan Charge level, you can use the default tenant value, or you can set a new price value to override the tenant value. If you change the Product Rate Plan level Uplift, this change will affect new Rate Plans on Subscriptions.
-   Subscription Rate Plan Charge Level: The Subscription Rate Plan Charge inherits the value set at the Tenant level (if any) or overridden at the Product Rate Plan Charge level. At the Subscription Rate Plan Charge level, you can use the value inherited from the tenant for product rate plan charge, or you can override this and set a new price value.

1.  View the product in the product catalog, and select the rate plan that you want to edit. You can use the automated price change feature with recurring charges and usage charges.
2.  In the rate plan details, scroll to the Price Change on Subscription Renewal .
3.  Select the option that you want to use for Default Price Change for New charges: select Use current default from tenant settings to use the default values set in Zuora Billing Settings, or select Use a specific value to override the default uplift value.

    ![rateplan_uplift_settings](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/b1ed66cc-5fdc-4ce7-8504-a3c11d534e32?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImIxZWQ2NmNjLTVmZGMtNGNlNy04NTA0LWEzYzExZDUzNGUzMiIsImV4cCI6MTc3MTU1NzA4OCwianRpIjoiMzI5NTY2Y2E3ZTNlNDc3NWI2MzFjYzRlY2U3NjI1NDYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.6u2v1eNjuKP5zs3Kn8T69GfFjqefQG_JSQedGpAxDyQ)

4.  Select the price uplift option to use when renewing termed subscriptions: No Change, Percentage Increase, or Use Latest Product Catalog Pricing.

    -   If you select Percentage Increase, enter a price increase percentage value. The price will be increased by the specified percentage every time that the subscription is renewed.


5.  Click save. The rate plan will now use the new price uplift settings.
