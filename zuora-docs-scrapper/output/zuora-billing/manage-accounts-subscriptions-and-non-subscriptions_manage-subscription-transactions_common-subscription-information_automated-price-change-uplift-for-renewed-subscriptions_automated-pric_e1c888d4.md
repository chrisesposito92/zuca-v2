---
title: "Automated price change uplift details"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/automated-price-change-uplift-for-renewed-subscriptions/automated-price-change-uplift-details"
product: "zuora-billing"
scraped_at: "2025-12-24T05:19:33.986Z"
---

# Automated price change uplift details

This topic provides information on using automatic price uplift, including prerequisites, supported subscription types, configuration, inheritance, and charge types.

The following sections includes information about using automatic price uplift, including prerequisites, supported subscription types, configuration and inheritance, and supported charge types.

## Prerequisites for updating subscriptions with product catalog pricing

For a subscription's pricing to be updated on renewal with the latest product rate plan charge pricing, the following conditions must be true:

-   The charge type or charge model of the product rate plan charge must not have changed. For example, the type cannot have changed from Flat Fee to Per Unit.

-   The billing period of the product rate plan charge cannot have changed. For example, the billing period cannot have changed from monthly to quarterly.

-   The units of measure (UOM) for the product rate plan charge cannot have changed. For example, it cannot have changed from Licenses to Gigabytes.

-   For volume and tiered pricing charges, the quantity purchased in the subscription must be represented in a pricing tier.


If any of the requirements are not met, then the subscription's pricing will not be updated with the latest product catalog pricing upon renewal.

The original subscription pricing for that charge will remain unchanged.

## Automatic price change and manual and auto-renew subscriptions

You can use the automated price change feature with subscriptions that require manual renewal and subscriptions set to auto-renew:

-   Auto-Renewal : If a termed subscription is configured to automatically renew, the price in the renewed subscription will be changed based on the pre-determined price change after a bill run is completed.

-   Manual Renewal : When a renewal amendment is created and activated, the price in this termed subscription rate plan will be changed based on the pre-determined price change. This Manual Renewal triggers the Uplift, but you cannot set the Uplift Rates. See below for the levels where you can set the price changes.


## Charge types and models

You can use the automated price change with Recurring Charges and Usage Charges. Because One-Time Charges do not renew, you cannot use them with the automated price change feature.

For the Discount - Percentage charge model:

-   A discount percentage charge can have an automatic price lift upon renewing.

-   When creating a new subscription with a Subscription Rate Plan that includes a discount percentage charge, the price change option of the discount percentage charge will always be defaulted as No Change even when the option is set to Use Latest Product Catalog Pricing in the Product Rate Plan Charge.


## SOAP API Support

The Zuora Commerce SOAP API includes fields that support this feature:

-   The `PriceChangeOption` and `PriceIncreasePercentage` fields of ProductRatePlanCharge . You can use these fields with `create()` , `query()` , and `update()` calls.

-   The `PriceIncreasePercentage` field of the Subscription RatePlanCharge . You can use this field with `update()` , `subscribe()` , and `amend()` calls. Note in the amend ( ) call, only the Add a Product amendment is supported to modify the `PriceChangeOption` and `PriceIncreasePercentage` fields.


Note:

The `PriceIncreasePercentage` field is used only when `PriceChangeOption` is set to `SpecificPercentageValue` .
