---
title: "Product Rate Plan Charge tier"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/import/product/product-rate-plan-charge-tier"
product: "zuora-platform"
scraped_at: "2026-02-19T03:17:02.651Z"
---

# Product Rate Plan Charge tier

This reference page lists all the fields associated with the update Product Rate Plan Charge Tier data dictionary.

Note: Fields with an asterisk mark indicate mandatory fields.

| Name | Description | Value |
| --- | --- | --- |
| Id* | The unique ID of the product rate plan charge tier to be updated. For example, 2c92c0f86c85891e016c88d55a6e543b. | string |
| Price* | The price of the tier if the charge is a flat fee, or the price of each unit in the tier if the charge model is tiered pricing. | number <double> |
| DiscountAmount | The specific amount for a fixed discount. This field is required if the value for ProductRatePlanCharge.ChargeModel is Discount-Fixed Amount. | Any positive decimal value |
| DiscountPercentage | The percentage of discount for a percentage discount. This field is required if the value for ProductRatePlanCharge.ChargeModel is Discount-Percentage. | A decimal value between -100 and 100, exclusive |
| PriceFormat | Indicates if pricing is a flat fee or is per unit. This field is for tiered and volume pricing models only. | The values Flat Fee and Per Unit (with spaces) is valid for create or update calls. |
| IsNewProductRatePlanChargeTierDataProductRatePlanChargeTier* | Marker Column | TRUE/ FALSE |
| Tier Data Tier Price* | The price of the tier if the charge is a flat fee, or the price of each unit in the tier if the charge model is tiered pricing. | number <double> |
