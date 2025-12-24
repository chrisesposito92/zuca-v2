---
title: "From Zuora UI"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/attribute-based-pricing/create-product-charge-definitions/from-zuora-ui"
product: "zuora-billing"
scraped_at: "2025-12-24T05:00:37.025Z"
---

# From Zuora UI

Learn how to create a charge definition in Zuora by following these steps.

Complete the following steps to create a charge definition for a specific charge:

1.  Navigate to . The Products page opens.
2.  Find the target charge for which you want to create a charge definition and enter the view charge ![icon-view-charge.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/f7daac54-62a6-44a1-a30a-1de975ba8e40?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImY3ZGFhYzU0LTYyYTYtNDRhMS1hMzBhLTFkZTk3NWJhOGU0MCIsImV4cCI6MTc2NjYzODgzNCwianRpIjoiZGE2ZDE4OWU5NTc1NGQ2Zjk2MzFmYmNmYjgzMDI4NDIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.nuS_evgsOubM7MYP1bMZdhNjVjHsU_jWWUQH25m9-6U) or edit charge ![icon-edit-charge.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/c3a6dcbe-eab4-4080-a014-e2667e22bf9e?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImMzYTZkY2JlLWVhYjQtNDA4MC1hMDE0LWUyNjY3ZTIyYmY5ZSIsImV4cCI6MTc2NjYzODgzNCwianRpIjoiMzA4ZTczYjNlNmEzNDRkMjgyMGRmZWE4YTU2OTliMjUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.HUpXYBnZrNu7u0EHahLzEfidVhylOT3fWt64SOPTONI) mode.
3.  At the bottom of the Charge Amount section, click Manage Charge Definitions . The Manage Charge Definitions page opens, displaying the basic charge information and its definition list.
4.  Click Add New Definition . The Add New Charge Definition page opens.
5.  Specify the basic information for the charge definition, including the following fields:

    | Field | Description |
    | --- | --- |
    | Effective Start Date | Required. Specifies the effective start date of this charge definition. |
    | Effective End Date | Required. Specifies the effective end date of this charge definition. |
    | Link to Rate Plan | Optional. Specify the rate plan to which this charge definition should apply.If this field is not specified, the charge definition can be applied to all product rate plans. |

6.  Specify the pricing information for the charge definition. The fields to be specified might vary depending on the charge model.

    | Field | Description |
    | --- | --- |
    | Charge Model | Required. Specifies the charge model, which determines how to calculate the charge. The following charge models are supported:Flat Fee PricingPer Unit PricingTiered PricingVolume PricingDiscount - Fixed AmountDiscount - PercentageDelivery Pricing |
    | List Price | Required for Flat Fee, Per Unit, and Tiered Pricing charge models. Specifies the list price of this charge definition.You can specify the list price in other currencies by clicking Add Other Currencies or Edit All Currencies . |
    | Discount Amount | Required for the Discount-Fixed Amount charge model. Specifies a particular amount for a fixed discount charge. |
    | Discount Percentage | Required for the Discount-Percentage charge model. Specifies the discount percentage for a percentage discount charge. |
    | List Price Base | The list price base. This field is applicable only for recurring charges. Valid options are:Per Billing PeriodPer MonthPer WeekPer Specific MonthsPer Year (if Annual List Price feature is enabled) |
    | Specific Months | Required only if the List Price Base field is selected as Per Specific Months . Specifies the number of months for the list price base for the charge definition. |
    | Delivery Schedule | Applicable for Delivery Pricing charge model. Specifies the frequency of the delivery. Only weekly delivery is supported now, and you can specify the day of the week when the delivery happens. |
    | Default Quantity | Applicable only for one-time and recurring charges. Specifies the default quantity. |
    | UOM | Indicates the unit of measure (UOM) configured in Settings > Billing for the product rate plan charge. |
    | Price Table | Applicable for Tiered Pricing and Volume Pricing charge models.From: The starting number of a range of units for the tier.To: The end number of a range of units for the tier.Price: The price of the tier if the price format is flat fee, or the price of each unit in the tier if the price format is per unit.Price Format: The price format of this tier, which is either Flat Fee Pricing or Per Unit Pricing. |
    | Charge Definition Attributes | Other attributes that you can specify for a charge definition. If the attribute is used as the lookup field by the price lookup function, the value you specify can determine whether the charge definition should apply.Note:For a custom field to be used as a lookup field, it must have been defined as the indexed custom field in the Billing Settings. For supported lookup fields, see Price lookup in Attribute-based Pricing. |

7.  In the Timing and Frequency of Charge Definition section, specify the billing information for this charge definition, such as Billing Periods and Billing Timing.
8.  Click Save to create this charge definition. You will be directed to the Manage Charge Definitions page.

The new charge definition is created and displayed in the Charge Definition Mapping List section.
