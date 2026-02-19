---
title: "Product charge definitions update"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/update/product/product-charge-definitions-update"
product: "zuora-platform"
scraped_at: "2026-02-19T03:17:44.110Z"
---

# Product charge definitions update

This reference article lists all the fields associated with Product Charge definitions in the Data dictionary.

Note: Fields with an asterisk mark indicate mandatory fields.

| Name | Description | Value |
| --- | --- | --- |
| IsNewProductChargeDefinition | Marker Column | TRUE |
| id* | The ID of the product charge definition to be updated. | string |
| Billing Period | The override value of the billingPeriod for the product charge definition. | string |
| Billing Timing | The override value of the billingTiming for the product charge definition. Enum: "IN_ADVANCE" "IN_ARREARS" | string |
| Charge Model | Determines how to calculate charges. Charge models must be individually activated in Zuora Billing administration. Enum: "DiscountFixedAmount" "DiscountPercentage" "FlatFee" "PerUnit" "Tiered" "Volume" "Delivery" | string |
| Default Quantity | The default quantity. This field is applicable only for one-time and recurring charges. | number or null |
| Effective End Date | The effective end date of the product charge definition. | string <date-time> |
| Effective Start Date | The effective start date of the product charge definition. | string <date-time> |
| List Price Base | The list price base. This field is applicable only for recurring charges. Note: The Per_Year enum value is available only if you have the Annual List Price feature enabled. Enum: "Per_Billing_Period" "Per_Month" "Per_Week" "Per_Year" | string |
| Specific Billing Period | The override value of the specificBillingPeriod for the product charge definition. | number or null |
| Specific List Price Base | The number of months for the list price base of the charge definition. The field is null if the listPriceBase field is not set to Per_Specific_Months. | integer or null <int32> [ 1 .. 200 ] |
| Tax Code | Specifies the tax code for taxation rules. This field is equired when the Taxable field is set to True. Note: This value affects the tax calculation of the charge. | string <= 64 characters |
| Tax Mode | Determines how to define taxation for the charge. This field is equired when the Taxable field is set to True. Note: This value affects the tax calculation of the charge. Enum: "TaxExclusive" "TaxInclusive" null | string or null |
| Taxable | Determines whether the charge definition is taxable. When this field is set to True, the TaxMode and TaxCode fields are required. Character limit: 5 Values: True, False Note: This value affects the tax calculation of the charge. | boolean |
| Term | The number of periods of a termed subscription that is eligible for this charge definition. This field is applicable when the termType field is set to TERMED, and is to be used together with the termPeriodType field. | number or null |
| Term Period Type | Specifies the period type for the subscription term that is eligible for this charge definition. Enum: "Month" "Year" "Day" "Week" null | string or null |
| Term Type | The type of the subscription that is eligible for this charge definition. Enum: "TERMED" "EVERGREEN" null | string or null |
| UOM | Describes the unit of measure (UOM) configured in Settings > Billing. Values: Each, License, Seat, or null | string or null |
| IsNewChargeDefinitionPricing | Marker Column | TRUE/ FALSE |
| Pricing Currency Code* | The currency for the price. | string |
| Pricing Discount Amount | The specific amount for a fixed discount. The field is applicable only for charges based on the Discount-Fixed Amount charge model. | number <double> |
| Pricing Discount Percentage | The percentage of discount for a percentage discount. The field is applicable only for charges based on the Discount-Percentage charge model. | number <double> |
| Pricing Price | The price of this item. This field is only applicable for charges based on the following charge models: Flat Fee Per Unit Delivery Pricing | number |
| IsNewChargeDefinitionPricingChargeDefinitionPricingTier | Marker Column | TRUE/ FALSE |
| Pricing Tier Currency Code* | The code corresponding to the currency for the tier's price. | string |
| Pricing Tier Price* | The price of the tier if the price format is flat fee, or the price of each unit in the tier if the price format is per unit. | number <double> |
| Pricing Tier Starting Unit* | The starting number of a range of units for the tier. This field is required for charges based on the Tiered Pricing or Tiered with Overage Pricing charge model. | number <double> |
| Pricing Tier Ending Unit | The end number of a range of units for the tier. This field is required for charges based on the Tiered Pricing or Tiered with Overage Pricing charge model. | number <double> |
| Pricing Tier Price Format | The price format of the tier. Enum: "Flat Fee" "Per Unit" | string |
