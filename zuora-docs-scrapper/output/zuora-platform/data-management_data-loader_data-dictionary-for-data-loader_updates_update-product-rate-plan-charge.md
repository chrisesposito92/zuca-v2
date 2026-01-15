---
title: "Update Product rate plan charge"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/updates/update-product-rate-plan-charge"
product: "zuora-platform"
scraped_at: "2026-01-15T21:58:12.956Z"
---

# Update Product rate plan charge

This reference page lists all the fields associated with the Product Rate Plan Charge Data dictionary.

.

Note: Fields with an asterisk mark indicate mandatory fields.

| Name | Description | Value |
| --- | --- | --- |
| IsNewProductRatePlanCharge* | Marker Column | TRUE |
| Id* | The unique ID of the product rate plan charge to be updated. For example, 2c93808457d787030157e031fcd34e19. | String |
| Accounting Code | The accounting code for the charge. Accounting codes group transactions that contain similar accounting attributes. | string <= 100 characters |
| Apply Discount To | Specifies the type of charges that you want a specific discount to apply to. All field values are case sensitive and in all-caps.Enum: "ONETIME (1)" "RECURRING (2)" "USAGE (4)" "ONETIMERECURRING (3)" "ONETIMEUSAGE (5)" "RECURRINGUSAGE (6)" "ONETIMERECURRINGUSAGE (7)" | string |
| Bill Cycle Day | Sets the bill cycle day (BCD) for the charge. The BCD determines which day of the month customer is billed. The BCD value in the account can override the BCD in this object. Character limit: 2 Values: a valid BCD integer, 1 - 31 | integer <int32> |
| Bill Cycle Type | Specifies how to determine the billing day for the charge. Enum: "DefaultFromCustomer" "SpecificDayofMonth" "SubscriptionStartDay" "ChargeTriggerDay" "SpecificDayofWeek" "TermStartDay" "TermEndDay" | string |
| Billing Period | The billing period for the charge. The start day of the billing period is also called the bill cycle day (BCD). Enum: "Month" "Quarter" "Annual" "Semi-Annual" "Specific Months" "Subscription Term" "Week" "Specific Weeks" "Specific Days" | string |
| Billing Period Alignment | Aligns charges within the same subscription if multiple charges begin on different dates. Enum: "AlignToCharge" "AlignToSubscriptionStart" "AlignToTermStart" "AlignToTermEnd" | string |
| Billing Timing | This feature is limited in Availability. To access it, submit a request at Zuora Global Support. Enum: "In Advance" "In Arrears" | string |
| ChargeFunction | This field is only available if you have the Unbilled Usage feature enabled. Enum: "Standard" "Prepayment" "CommitmentTrueUp" "Drawdown" "CreditCommitment" "DrawdownAndCreditCommitment" | string |
| Charge Type* | Specifies the type of chargeEnum: "OneTime" "Recurring" "Usage" | string |
| CommitmentType | This field is only available if you have the Unbilled Usage feature enabled. Enum: "Standard" "Prepayment" "CommitmentTrueUp" "Drawdown" "CreditCommitment" "DrawdownAndCreditCommitment" Enum: "UNIT" "CURRENCY" | string |
| Charge Model | Determines how to calculate charges. Charge models must be individually activated in Zuora Billing administration. Enum: "Discount-Fixed Amount" "Discount-Percentage" "Flat Fee Pricing" "Per Unit Pricing" "Overage Pricing" "Tiered Pricing" "Tiered with Overage Pricing" "Volume Pricing" "Delivery Pricing" "MultiAttributePricing" "PreratedPerUnit" "PreratedPricing`" "HighWatermarkVolumePricing" "HighWatermarkTieredPricing" | string |
| Class NS | Class associated with the corresponding item in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | string <= 255 characters |
| Credit Option | This field is only available if you have the Prepaid with Drawdown feature enabled. Enum: "TimeBased" "ConsumptionBased" "FullCreditBack" | string |
| Default Quantity | This field is required if you use a per-unit pricing model. Character limit: 16 Values: a valid quantity value.Note: When the ChargeModel field is set to Tiered Pricing or Volume Pricing, if this field is not specified, the value will default to 0. | number <double> |
| Deferred Revenue Account | The name of the deferred revenue account for this charge. This feature is limited in Availability. To access it, submit a request at Zuora Global Support. | string <= 100 characters |
| Deferred Revenue Account NS | Deferrred revenue account associated with the corresponding item in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | string <= 255 characters |
| Department NS | Department associated with the corresponding item in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | string <= 255 characters |
| Description | A description of the charge. | string <= 500 characters |
| Discount Level | Specifies if the discount applies to just the product rate plan, the entire subscription, or to any activity in the account.Enum: "rateplan" "subscription" "account" | string |
| Drawdown Rate | This field is only available if you have the Prepaid with Drawdown feature enabled. | number |
| Drawdown Uom | This field is only available if you have the Prepaid with Drawdown feature enabled. | string |
| End Date Condition | Default: "SubscriptionEnd" Enum: "SubscriptionEnd" "FixedPeriod" | string |
| ExcludeItemBillingFromRevenueAccounting | Default: false The flag to exclude the related invoice items, invoice item adjustments, credit memo items, and debit memo items from revenue accounting.This field is only available if you have the Order to Revenue or Billing - Revenue Integration feature enabled. | boolean |
| ExcludeITemBookingFromReveneAccounting | Default: false The flag to exclude the related rate plan charges and order line items from revenue accounting. This field is only available if you have the Order to Revenue or Billing - Revenue Integration feature enabled. | boolean |
| Include Children NS | Specifies whether the corresponding item in NetSuite is visible under child subsidiaries. Only available if you have installed the Zuora Connector for NetSuite. Enum: "Yes" "No" | string |
| Included Units | Specifies the number of units in the base set of units. Character limit: 16 Values: a positive decimal value | number <double> |
| Integration Id NS | ID of the corresponding object in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | string <= 255 characters |
| Integration Status NS | Status of the product rate plan charge's synchronization with NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | string <= 255 characters |
| IncludedUnits | Specifies the number of units in the base set of units. Character limit: 16 Values: a positive decimal value | number <double> |
| IsAllocationEligible | Indicates whether the charge segment is allocation eligible in revenue recognition. The default value is False. Values: True, False This field is available only if you have the Additional Revenue Fields property enabled. | boolean |
| Is Prepaid | This field is only available if you have the Prepaid with Drawdown feature enabled. Values: true or false. | boolean |
| Is Rollover | This field is only available if you have the Prepaid with Drawdown feature enabled. The value is either "True" or "False". It determines whether the rollover fields are needed. | boolean |
| Is Stacked Discount | This field is only applicable to the Discount - Percentage charge model.This field indicates whether the discount is to be calculated as stacked discount. Possible values are as follows: True: This is a stacked discount, which should be calculated by stacking with other discounts. False: This is not a stacked discount, which should be calculated in sequence with other discounts. | boolean |
| IsUnbilled | Specifies how to perform the accounting during revenue recognition. The default value is False. Values: True, FalseNote: This field is available only if you have the Additional Revenue Fields property enabled. | boolean |
| Item Type NS | Type of item that is created in NetSuite for the product rate plan charge. Only available if you have installed the Zuora Connector for NetSuite. Enum: "Inventory" "Non Inventory" "Service" | string |
| Legacy Revenue Reporting |  | boolean |
| List Price Base | Enum: "Per Billing Period" "Per Month" "Per Week" "Per Year" "Per Specific Months" | string |
| Location NS | Location associated with the corresponding item in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | string <= 255 characters |
| Max Quantity | Specifies the maximum number of units for this charge. Use this field and the MinQuantity field to create a range of units allowed in a product rate plan charge. Character limit: 16 Values: a positive decimal value | number <double> |
| Min Quantity | Specifies the minimum number of units for this charge. Use this field and the MaxQuantity field to create a range of units allowed in a product rate plan charge. Character limit: 16 Values: a positive decimal value | number <double> |
| Name | The name of the product rate plan charge. | string <= 100 characters |
| NumberOfPeriod | Specifies the number of periods to use when calculating charges in an overage smoothing charge model. The valid value must be a positive whole number. | integer <int64> |
| Overage Calculation Option | Determines when to calculate overage charges. If the value of the SmoothingMode field is not specified, the value of this field is ignored.Enum: "EndOfSmoothingPeriod" "PerBillingPeriod" null | string or null |
| Overage Unused Units Credit Option | Determines whether to credit the customer with unused units of usage.Enum: "NoCredit" "CreditBySpecificRate" null | string or null |
| Prepaid OperationType | This field is only available if you have the Prepaid with Drawdown feature enabled. The type of this charge, it is either a prepayment (topup) charge or a drawdown charge. Enum: "topup" "drawdown" | string |
| Prepaid Quantity | This field is only available if you have the Prepaid with Drawdown feature enabled.The number of units included in a prepayment charge. Must be a positive number. | number |
| Prepaid Total Quantity | This field is only available if you have the Prepaid with Drawdown feature enabled.The total amount of units that end customers can use during a validity period when they subscribe to a prepayment charge. | number |
| Prepaid Uom | This field is only available if you have the Prepaid with Drawdown feature enabled.Unit of measurement for a prepayment charge. | string |
| Price Change Option | Default: "NoChange" Applies an automatic price change when a termed subscription is renewed. Enum: "NoChange" "SpecificPercentageValue" "UseLatestProductCatalogPricing" null | string or null |
| Price Increase Option | Applies an automatic price change when a termed subscription is renewed. Enum: "FromTenantPercentageValue" "SpecificPercentageValue" | string |
| Price Increase Percentage | Specifies the percentage to increase or decrease the price of a termed subscription's renewal. Use this field if you set the value to SpecificPercentageValue. Character limit: 16 Values: a decimal value between -100 and 100 | number or null <double> |
| Product Category | This field is used to maintain the product category for integration with Zuora Revenue.Note: This field is available only if you have the Additional Revenue Fields property enabled. | string |
| Product Class | This field is used to maintain the product class for integration with Zuora Revenue.Note: This field is available only if you have the Additional Revenue Fields property enabled. | string |
| Product Family | This field is used to maintain the product family for integration with Zuora Revenue.Note: This field is available only if you have the Additional Revenue Fields property enabled. | string |
| Product Line | This field is used to maintain the product line for integration with Zuora Revenue.Note: This field is available only if you have the Additional Revenue Fields property enabled. | string |
| RevenueRecognitionTiming | This field is only available if you have the Order to Revenue feature enabled. Enum: "Upon Billing Document Posting Date" "Upon Order Activation Date" | string <= 200 characters |
| RevenueAmortisationMethod | This field is only available if you have the Order to Revenue feature enabled. Enum: "Immediate" "Ratable Using Start And End Dates" | string <= 200 characters |
| Product Rate Plan Charge Number | The natural key of the product rate plan charge. | string <= 100 characters |
| Product Rate Plan Id | The ID of the product rate plan associated with this product rate plan charge. | string <= 32 characters |
| Rating Group | Enum: "ByBillingPeriod" "ByUsageStartDate" "ByUsageRecord" "ByUsageUpload" "ByGroupId" null | string or null |
| Recognized Revenue Account | The name of the recognized revenue account for this charge. Required when the Allow Blank Accounting Code setting is No. Optional when the Allow Blank Accounting Code setting is Yes. This feature is in Limited Availability. If you wish to have access to the feature, submit a request at Zuora Global Support. | string <= 100 characters |
| Recognized Revenue Account NS | Recognized revenue account associated with the corresponding item in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | string <= 255 characters |
| Rev Rec End NS | End date condition of the corresponding item in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. Enum: "Charge Period Start" "Rev Rec Trigger Date" "Use NetSuite Rev Rec Template" | string |
| Rev Rec Start NS | Start date condition of the corresponding item in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. Enum: "Charge Period Start" "Rev Rec Trigger Date" "Use NetSuite Rev Rec Template" | string |
| Rev Rec Template Type NS | Only available if you have installed the Zuora Connector for NetSuite. | string <= 255 characters |
| RevRec Trigger Condition | Enum: "ContractEffectiveDate" "ServiceActivationDate" "CustomerAcceptanceDate" null | string or null |
| Revenue Recognition Code | Associates this product rate plan charge with a specific revenue recognition code. | string or null <= 70 characters |
| Revenue Recognition Rule Name | Enum: "Recognize upon invoicing" "Recognize daily over time" | string |
| Rollover Apply | This field is only available if you have the Prepaid with Drawdown feature enabled.Enum: "ApplyFirst" "ApplyLast" | string |
| Rollover Period Length | Default: nullNote: This field is only available if you have the Prepaid with Drawdown feature enabled. | integer |
| Rollover Periods | This field is only available if you have the Prepaid with Drawdown feature enabled. | number |
| Smoothing Model | Enum: "RollingWindow" "Rollover" null | string or null |
| Specific Billing Period | This field is required if you set the value of the BillingPeriod field to Specific Months or Specific Weeks. The valid value is a positive integer. | integer or null <int64> |
| Specific List Price Base | The number of months for the list price base of the charge. This field is required if you set the value of the ListPriceBase field to Per Specific Months.Note: This field is available only if you have the Annual List Price feature enabled. The value of this field is null if you do not set the value of the ListPriceBase field to Per Specific Months. | integer or null <int32> [ 1 .. 200 ] |
| Subsidiary NS | Subsidiary associated with the corresponding item in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | string <= 255 characters |
| Sync Date NS | Date when the product rate plan charge was synchronized with NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | string <= 255 characters |
| Tax Code | Specifies the tax code for taxation rules. Required when the Taxable field is set to True. | string <= 64 characters |
| Tax Mode | Determines how to define taxation for the charge. Required when the Taxable field is set to True. Enum: "TaxExclusive" "TaxInclusive" null | string or null |
| Taxable | Determines whether the charge is taxable. When set to True, the TaxMode and TaxCode fields are required when creating or updating th ProductRatePlanCharge object. Character limit: 5 Values: True, False | boolean |
| Trigger Event | Enum: "ContractEffective" "ServiceActivation" "CustomerAcceptance" | string |
| UOM | Specifies the units to measure usage. | string or null <= 25 characters |
| Up To Periods | Specifies the length of the period during which the charge is active. If this period ends before the subscription ends, the charge ends when this period ends. Character limit: 5 Values: a whole number between 0 and 65535, exclusive | integer or null <int64> |
| Up To Periods Type | Default: "Billing Periods" The period type used to define when the charge ends. Enum: "Billing Periods" "Days" "Weeks" "Months" "Years" null | string or null |
| Usage Record Rating Option | Default: "EndOfBillingPeriod" Enum: "EndOfBillingPeriod" "OnDemand" null | string or null |
| Use Discount Specific Accounting Code* | Determines whether to define a new accounting code for the new discount charge. Character limit: 5 Values: True, False | boolean or null |
| Use Tenant Default For Price Change | Applies the tenant-level percentage uplift value for an automatic price change to a termed subscription's renewal. Character limit: 5 Values: true, false | boolean |
| Validity Period Type | This field is only available if you have the Prepaid with Drawdown feature enabled. Enum: "SUBSCRIPTION_TERM" "ANNUAL" "SEMI_ANNUAL" "QUARTER" "MONTH" | string |
| Weekly Bill Cycle Day | This feature is in Limited Availability. If you wish to have access to the feature, submit a request at Zuora Global Support. Enum: "Sunday" "Monday" "Tuesday" "Wednesday" "Thursday" "Friday" "Saturday" | string |
| ApplyToBillingPeriodPartially | You must enable the Enhanced Discount feature to access this field. | boolean |
| RolloverPeriodLength | Default: nullNote: This field is only available if you have the Prepaid with Drawdown feature enabled. | integer |
| Formula | The price lookup formula defined for the product rate plan charge, which is used to identify the correct and relevant charge definition based on the context.This field is available only if the Attribute-based Pricing feature is enabled. | string |
| IsNewChargeModelConfigurationConfigurationItem | Marker Column | TRUE/ FALSE |
| Charge Model Configuration Item Key | The name of the field that is specified for a specific charge model. | string |
| Charge Model Configuration Item Value | The value of the field that is specified in the Key field. | string |
| Delivery Schedule Frequency | The frequency of the delivery. Only supports weekly now Value: "Weekly" | string |
| Delivery Schedule Friday | The flag to indicate should the delivery happen on Friday | boolean |
| Delivery Schedule Monday | The flag to indicate should the delivery happen on Monday | boolean |
| Delivery Schedule Saturday | The flag to indicate should the delivery happen on Saturday | boolean |
| Delivery Schedule Sunday | The flag to indicate should the delivery happen on Sunday | boolean |
| Delivery Schedule Thursday | The flag to indicate should the delivery happen on Thursday | boolean |
| Delivery Schedule Tuesday | The flag to indicate should the delivery happen on Tuesday | boolean |
| Delivery Schedule Wednesday | The flag to indicate should the delivery happen on Wednesday | boolean |
| IsNewProductRatePlanChargeTierDataProductRatePlanChargeTier* | Marker Column | TRUE/ FALSE |
| Tier Data Tier CAP |  |  |
| Tier Data Tier Currency Code | The code corresponding to the currency for the tier's price. | string |
| Tier Data Tier Discount Amount | The specific amount for a fixed discount. Required if the charge model of the product rate plan charge is Discount-Fixed Amount. | number <double> |
| Tier Data Tier Discount Percentage | The percentage of discount for a percentage discount. Required if the charge model of the product rate plan charge is Discount-Percentage. | number <double> |
| Tier Data Tier Ending Unit | The end number of a range of units for the tier. Required if the charge model of the product rate plan charge is Tiered Pricing or Tiered with Overage Pricing. | number <double> |
| Tier Data Tier Is Overage Price | Indicates if the price is an overage price, which is the price when usage surpasses the last defined tier. | boolean |
| Tier Data Tier Price | The price of the tier if the charge is a flat fee, or the price of each unit in the tier if the charge model is tiered pricing. | number <double> |
| Tier Data Tier Price Format | Indicates if pricing is a flat fee or is per unit. This field is for tiered and volume pricing models only. Enum: "Flat Fee" "Per Unit". | string |
| Tier Data Tier Starting Unit | The starting number of a range of units for the tier. Required if the charge model of the product rate plan charge is Tiered Pricing or Tiered with Overage Pricing. | number <double> |
| IsNewProductDiscountApplyDetailDataProductDiscountApplyDetail | Is the Marker Column, displaying the start of a new object. | TRUE or FALSE |
| Product Discount Apply Detail Data Product Discount Apply Detail Applied Product Rate Plan Charge Id | The ID of the product rate plan charge to which the discount product rate plan charge applies. The AppliedProductRatePlanId and AppliedProductRatePlanChargeId fields cannot be null at the same time. If you specify a value in the AppliedProductRatePlanId field, the charge specified in the AppliedProductRatePlanChargeId field must belong to the product rate plan specified in the AppliedProductRatePlanId field. If the DiscountLevel field is rateplan, the charge specified in the AppliedProductRatePlanChargeId field must belong to the product rate plan to which the discount charge belongs. If this field is not specified, discount charges apply to all product rate plan charges in the product rate plan whose ID is the value specified in the AppliedProductRatePlanId field. | STRING <= 32 characters |
| Product Discount Apply Detail Data Product Discount Apply Detail Applied Product Rate Plan Id | The ID of the product rate plan to which the discount product rate plan charge applies. The AppliedProductRatePlanId and AppliedProductRatePlanChargeId fields cannot be null at the same time. If the DiscountLevel field is rateplan, the value of the AppliedProductRatePlanId field must be the same as the ID of the product rate plan to which the discount charge belongs. | STRING <= 32 characters |
