---
title: "Supported lookup objects and fields"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/attribute-based-pricing/price-lookup-in-attribute-based-pricing/supported-lookup-objects-and-fields"
product: "zuora-billing"
scraped_at: "2025-12-24T05:01:04.414Z"
---

# Supported lookup objects and fields

Provides a list of objects and fields that can be used in a price lookup formula for creating a product rate plan charge, detailing the usage of fields from the Product Charge Definition and other supported objects.

The following table lists the objects and fields you can use in the price lookup formula when you are creating a product rate plan charge.

-   The fields on the Product Charge Definition object are to be used before the equal sign in the formula.

-   The fields on other supported objects are to be used after the equal sign in the formula.


| Object | Supported fields for price lookup |
| --- | --- |
| Product Charge Definition | billingCycleTypelistPriceBasespecificBillingPeriodspecificListPriceBasetermTypetaxabletaxModeOptiontermPeriodTypetermtiersIndexed custom fields on the Product Charge Definition object |
| Account | accountNumbercurrencyIndexed custom fields on the Account object |
| Subscription | autoRenewcustomerAcceptanceDatecontractEffectiveDatecurrentTermcurrentTermPeriodTypeinitialTerminitialTermPeriodTyperenewalSettingrenewalTermrenewalTermPeriodTypeserviceActivationDatesubscriptionEndDatesubscriptionStartDatetermEndDatetermStartDatetermTypeIndexed custom fields on the Subscription object |
