---
title: "Object POSTProductRatePlanCharge"
url: "https://developer.zuora.com/v1-api-reference/api/operation/Object_POSTProductRatePlanCharge/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:30:10.505Z"
---

## CRUD: Create a product rate plan charge

Creates a product rate plan charge for a specified rate plan charge.

Product rate plan charges can be of three types, one-time fees, recurring fees, and usage fees.

Security**bearerAuth**

Request

##### query Parameters

| rejectUnknownFields | booleanDefault: falseSpecifies whether the call fails if the request body contains unknown fields. With rejectUnknownFields set to true, Zuora returns a 400 response if the request body contains unknown fields. The body of the 400 response is:{     "message": "Error - unrecognised fields" } By default, Zuora ignores unknown fields in the request body. |
| --- | --- |

##### header Parameters

| Idempotency-Key | string <= 255 charactersSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types.With this header specified, the Zuora server can identify subsequent retries of the same request using this value, which prevents the same operation from being performed multiple times by accident. |
| --- | --- |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| X-Zuora-WSDL-Version | stringDefault: 79Zuora WSDL version number. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

##### Request Body schema: application/json
required

| AccountingCode | string <= 100 charactersThe accounting code for the charge. Accounting codes group transactions that contain similar accounting attributes. |
| --- | --- |
| ApplyDiscountTo | stringSpecifies the type of charges that you want a specific discount to apply to. All field values are case sensitive and in all-caps.Enum: "ONETIME (1)" "RECURRING (2)" "USAGE (4)" "ONETIMERECURRING (3)" "ONETIMEUSAGE (5)" "RECURRINGUSAGE (6)" "ONETIMERECURRINGUSAGE (7)" |
| BillCycleDay | integer <int32>Sets the bill cycle day (BCD) for the charge. The BCD determines which day of the month customer is billed. The BCD value in the account can override the BCD in this object.Character limit: 2Values: a valid BCD integer, 1 - 31 |
| BillCycleTyperequired | stringSpecifies how to determine the billing day for the charge.Notes:If you set this field to SpecificDayofMonth, you must specify which day of the month as the billing day for the charge in the BillCycleDay field.If you set this field to SpecificDayofWeek, you must specify which day of the week as the billing day for the charge in the WeeklyBillCycleDay field.By default, TermStartDay and TermEndDay are only available for prepayment charges. But you can reach out to Zuora Global Support to request enabling it for non-prepaid recurring charges. Meanwhile, note the following rules applies to these options:The Term End Day option of the Billing Day field must be coupled with the Align to Term End option of the Billing Period Alignment field.For prepaid charges, the Term Start Day option of the Billing Day field must be coupled with the existing Align to Term Start option of the Billing Period Alignment field.For non-prepaid recurring charges: If Billing Day is set to Term Start Day, Billing Period Alignment must be Align to Term Start; If Billing Day is set to Term End Day, Billing Period Alignment can be set to other values.Enum: "DefaultFromCustomer" "SpecificDayofMonth" "SubscriptionStartDay" "ChargeTriggerDay" "SpecificDayofWeek" "TermStartDay" "TermEndDay" |
| BillingPeriodrequired | stringThe billing period for the charge. The start day of the billing period is also called the bill cycle day (BCD).Notes:Specify the number of months or weeks in the SpecificBillingPeriod field if you set this field to Specific Months or Specific Weeks.The Subscription Term value is in Limited Availability.Enum: "Month" "Quarter" "Annual" "Semi-Annual" "Specific Months" "Subscription Term" "Week" "Specific Weeks" "Specific Days" |
| BillingPeriodAlignment | stringAligns charges within the same subscription if multiple charges begin on different dates.Note: The AlignToTermEnd value is only available for prepayment charges by default. Reach out to Zuora Global Support to enable it for non-prepaid recurring charges.Enum: "AlignToCharge" "AlignToSubscriptionStart" "AlignToTermStart" "AlignToTermEnd" |
| BillingTiming | stringThe billing timing for the charge. You can choose to bill in advance or in arrears for recurring charge types. This field is not used in one-time or usage based charge types.This feature is in Limited Availability. If you wish to have access to the feature, submit a request at Zuora Global Support.Enum: "In Advance" "In Arrears" |
| ChargeFunction | stringNote: This field is only available if you have the Prepaid with Drawdown or Minimum Commitment feature enabled.To use this field, you must set the X-Zuora-WSDL-Version request header to 141 or higher. Otherwise, an error occurs.This field defines what type of charge it is:Standard: Normal charge with no Prepayment or Commitment or Drawdown.Prepayment: For recurring charges. Unit or currency based prepaid charge.CommitmentTrueUp: For recurring charges. Currency based minimum commitment charge.Drawdown: For usage charges. Drawdown from prepaid funds.DrawdownAndCreditCommitment: For usage charges. Drawdown from prepaid funds and then credit to minimum commitment funds.CreditCommitment: For usage charges. Credit to minimum commitment funds.Enum: "Standard" "Prepayment" "CommitmentTrueUp" "Drawdown" "CreditCommitment" "DrawdownAndCreditCommitment" |
| CommitmentType | stringNote: This field is only available if you have the Prepaid with Drawdown feature enabled.To use this field, you must set the X-Zuora-WSDL-Version request header to 133 or higher. Otherwise, an error occurs.This field defines the type of commitment. A prepaid charge can be UNIT or CURRENCY. A minimum commitment(in-arrears) charge can only be CURRENCY type. For topup(recurring or one-time) charges, this field indicates what type of funds are created.If UNIT, it will create a fund with given prepaidUom.If CURRENCY, it will create a fund with the currency amount calculated in list price.For drawdown(usage) charges, this field indicates what type of funds are drawdown from that created from topup charges.Enum: "UNIT" "CURRENCY" |
| ChargeModelrequired | stringDetermines how to calculate charges. Charge models must be individually activated in Zuora Billing administration.Notes:The Delivery Pricing value is available only if you have the Delivery Pricing charge model enabled. The minimal required WSDL version is 128.The MultiAttributePricing value is available only if you have the Multi-Attribute Pricing charge model enabled. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see Zuora Editions for pricing information. The minimal required WSDL version is 102.The PreratedPerUnit and value is available only if you have the Pre-rated Per Unit Pricing charge model enabled. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see Zuora Editions for pricing information. The minimal required WSDL version is 102.The PreratedPricing value is available only if you have the Pre-rated Pricing charge model enabled. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see Zuora Editions for pricing information. The minimal required WSDL version is 102.The HighWatermarkVolumePricingvalue is available only if you have the High Water Mark Volume Pricing charge model enabled. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see Zuora Editions for pricing information. The minimal required WSDL version is 102.The HighWatermarkTieredPricing value is available only if you have the High Water Mark Tiered Pricing charge model enabled. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see Zuora Editions for pricing information. The minimal required WSDL version is 102.Enum: "Discount-Fixed Amount" "Discount-Percentage" "Flat Fee Pricing" "Per Unit Pricing" "Overage Pricing" "Tiered Pricing" "Tiered with Overage Pricing" "Volume Pricing" "Delivery Pricing" "MultiAttributePricing" "PreratedPerUnit" "PreratedPricing`" "HighWatermarkVolumePricing" "HighWatermarkTieredPricing" |
| ChargeModelConfiguration | object (ChargeModelConfiguration)Container for charge model configuration data.Notes:This field is only available if you have the Pre-Rated Pricing or Multi-Attribute Pricing charge models enabled. These charge models are available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see Zuora Editions for pricing information.To use this field, you must set the X-Zuora-WSDL-Version request header to 102 or later. Otherwise, an error occurs with "Code: INVALID_VALUE". |
| ChargeTyperequired | stringSpecifies the type of charge.Enum: "OneTime" "Recurring" "Usage" |
| CreditOption | stringNote: This field is only available if you have the Prepaid with Drawdown feature enabled.To use this field, you must set the X-Zuora-WSDL-Version request header to 114 or higher. Otherwise, an error occurs.The way to calculate credit. See Credit Option for more information.Enum: "TimeBased" "ConsumptionBased" "FullCreditBack" |
| DefaultQuantity | number <double>The default quantity of units, such as the number of authors in a hosted wiki service. This field is required if you use a per-unit pricing model.Character limit: 16Values: a valid quantity value.Note: When the ChargeModel field is set to Tiered Pricing or Volume Pricing, if this field is not specified, the value will default to 0. |
| DeferredRevenueAccount | string <= 100 charactersThe name of the deferred revenue account for this charge.This feature is in Limited Availability. If you wish to have access to the feature, submit a request at Zuora Global Support. |
| DeliverySchedule | object (DeliverySchedule) |
| Description | string <= 500 charactersA description of the charge. |
| DiscountLevel | stringSpecifies if the discount applies to just the product rate plan, the entire subscription, or to any activity in the account.Enum: "rateplan" "subscription" "account" |
| DrawdownRate | numberNote: This field is only available if you have the Prepaid with Drawdown feature enabled.To use this field, you must set the X-Zuora-WSDL-Version request header to 114 or higher. Otherwise, an error occurs.The conversion rate between Usage UOM and Drawdown UOM for a drawdown charge. See Fields related to Prepaid with Drawdown for more information. |
| DrawdownUom | stringNote: This field is only available if you have the Prepaid with Drawdown feature enabled.To use this field, you must set the X-Zuora-WSDL-Version request header to 114 or higher. Otherwise, an error occurs.Unit of measurement for a drawdown charge. |
| EndDateCondition | stringDefault: "SubscriptionEnd"Defines when the charge ends after the charge trigger date.Values:SubscriptionEnd: The charge ends on the subscription end date after a specified period based on the trigger date of the charge.FixedPeriod: The charge ends after a specified period based on the trigger date of the charge. If you set this field to FixedPeriod, you must specify the length of the period and a period type by defining the UpToPeriods and UpToPeriodsType fields.Note: If the subscription ends before the charge end date, the charge ends when the subscription ends. But if the subscription end date is subsequently changed through a Renewal, or Terms and Conditions amendment, the charge will end on the charge end date.Enum: "SubscriptionEnd" "FixedPeriod" |
| ExcludeItemBillingFromRevenueAccounting | booleanDefault: falseThe flag to exclude the related invoice items, invoice item adjustments, credit memo items, and debit memo items from revenue accounting.Notes:To use this field, you must set the X-Zuora-WSDL-Version request header to 115 or later. Otherwise, an error occurs.This field is only available if you have the Order to Revenue or Billing - Revenue Integration feature enabled. |
| ExcludeItemBookingFromRevenueAccounting | booleanDefault: falseThe flag to exclude the related rate plan charges and order line items from revenue accounting.Notes:To use this field, you must set the X-Zuora-WSDL-Version request header to 115 or later. Otherwise, an error occurs.This field is only available if you have the Order to Revenue or Billing - Revenue Integration feature enabled. |
| IncludedUnits | number <double>Specifies the number of units in the base set of units.Character limit: 16Values: a positive decimal value |
| IsAllocationEligible | booleanIndicates whether the charge segment is allocation eligible in revenue recognition. The default value is False.Values: True, FalseNotes:The field is only available if you have the Order to Revenue feature enabled. To enable this field, submit a request at Zuora Global Support.To use this field, you must set the X-Zuora-WSDL-Version request header to 132 or later. |
| IsPrepaid | booleanNote: This field is only available if you have the Prepaid with Drawdown feature enabled.To use this field, you must set the X-Zuora-WSDL-Version request header to 114 or higher. Otherwise, an error occurs.Indicates whether this charge is a prepayment (topup) charge or a drawdown charge.Values: true or false. |
| IsRollover | booleanNote: This field is only available if you have the Prepaid with Drawdown feature enabled.To use this field, you must set the X-Zuora-WSDL-Version request header to 114 or higher. Otherwise, an error occurs.The value is either "True" or "False". It determines whether the rollover fields are needed. |
| IsStackedDiscount | booleanNote: This field is only applicable to the Discount - Percentage charge model.To use this field, you must set the X-Zuora-WSDL-Version request header to 130 or higher. Otherwise, an error occurs.This field indicates whether the discount is to be calculated as stacked discount. Possible values are as follows:True: This is a stacked discount, which should be calculated by stacking with other discounts.False: This is not a stacked discount, which should be calculated in sequence with other discounts.For more information, see Stacked discounts. |
| IsUnbilled | booleanSpecifies how to perform the accounting during revenue recognition. The default value is False.Values: True, FalseNotes:The field is only available if you have the Order to Revenue feature enabled. To enable this field, submit a request at Zuora Global Support.To use this field, you must set the X-Zuora-WSDL-Version request header to 132 or later. |
| LegacyRevenueReporting | boolean |
| ListPriceBase | stringThe list price base for the product rate plan charge.Note: If the ListBasePrice field is not set in the request, the system will use the BillingPeriod value as the default value.Enum: "Per Billing Period" "Per Month" "Per Week" "Per Year" "Per Specific Months" |
| MaxQuantity | number <double>Specifies the maximum number of units for this charge. Use this field and the MinQuantity field to create a range of units allowed in a product rate plan charge.Character limit: 16Values: a positive decimal value |
| MinQuantity | number <double>Specifies the minimum number of units for this charge. Use this field and the MaxQuantity field to create a range of units allowed in a product rate plan charge.Character limit: 16Values: a positive decimal value |
| Namerequired | string <= 100 charactersThe name of the product rate plan charge. |
| NumberOfPeriod | integer <int64>Specifies the number of periods to use when calculating charges in an overage smoothing charge model. The valid value is a positive whole number. |
| OverageCalculationOption | stringDetermines when to calculate overage charges. If the value of the SmoothingMode field is not specified, the value of this field is ignored.Values:EndOfSmoothingPeriod: This option is used by default. The overage is charged at the end of the smoothing period.PerBillingPeriod: The overage is charged on-demand rather than waiting until the end of the smoothing period.Enum: "EndOfSmoothingPeriod" "PerBillingPeriod" |
| OverageUnusedUnitsCreditOption | string or nullDetermines whether to credit the customer with unused units of usage.Enum: "NoCredit" "CreditBySpecificRate" null |
| PrepaidOperationType | stringNote: This field is only available if you have the Prepaid with Drawdown feature enabled.To use this field, you must set the X-Zuora-WSDL-Version request header to 114 or higher. Otherwise, an error occurs.The type of this charge. It is either a prepayment (topup) charge or a drawdown charge.Enum: "topup" "drawdown" |
| PrepaidQuantity | numberNote: This field is only available if you have the Prepaid with Drawdown feature enabled.To use this field, you must set the X-Zuora-WSDL-Version request header to 114 or higher. Otherwise, an error occurs.The number of units included in a prepayment charge. Must be a positive number. |
| PrepaidTotalQuantity | numberNote: This field is only available if you have the Prepaid with Drawdown feature enabled.To use this field, you must set the X-Zuora-WSDL-Version request header to 114 or higher. Otherwise, an error occurs.The total amount of units that end customers can use during a validity period when they subscribe to a prepayment charge. |
| PrepaidUom | stringNote: This field is only available if you have the Prepaid with Drawdown feature enabled.To use this field, you must set the X-Zuora-WSDL-Version request header to 114 or higher. Otherwise, an error occurs.Unit of measurement for a prepayment charge. |
| PriceChangeOption | stringDefault: "NoChange"Applies an automatic price change when a termed subscription is renewed.Enum: "NoChange" "SpecificPercentageValue" "UseLatestProductCatalogPricing" |
| PriceIncreaseOption | stringApplies an automatic price change when a termed subscription is renewed.Enum: "FromTenantPercentageValue" "SpecificPercentageValue" |
| PriceIncreasePercentage | number or null <double>Specifies the percentage to increase or decrease the price of a termed subscription's renewal. Use this field if you set the value to SpecificPercentageValue.Character limit: 16Values: a decimal value between -100 and 100 |
| ProductCategory | stringThis field is used to maintain the product category for integration with Zuora Revenue.Notes:This field is available only if you have the Additional Revenue Fields property enabled.To use this field, you must set the X-Zuora-WSDL-Version request header to 132 or later. |
| ProductClass | stringThis field is used to maintain the product class for integration with Zuora Revenue.Notes:This field is available only if you have the Additional Revenue Fields property enabled.To use this field, you must set the X-Zuora-WSDL-Version request header to 132 or later. |
| ProductFamily | stringThis field is used to maintain the product family for integration with Zuora Revenue.Notes:This field is available only if you have the Additional Revenue Fields property enabled.To use this field, you must set the X-Zuora-WSDL-Version request header to 132 or later. |
| ProductLine | stringThis field is used to maintain the product line for integration with Zuora Revenue.Notes:This field is available only if you have the Additional Revenue Fields property enabled.To use this field, you must set the X-Zuora-WSDL-Version request header to 132 or later. |
| ReflectDiscountInNetAmount | booleanDefault: falseWhen you apply percentage discounts to either of the following charges, you need to set the ReflectDiscountInNetAmount field on your discount charge to true, to enable calculating and displaying the net amount of the following charges in Zuora Revenue.delivery pricing chargeprepayment chargedrawdown chargeNote the following:If you are an Order to Revenue customer, when you set the ReflectDiscountInNetAmount field to true, you must also set both the ExcludeItemBookingFromRevenueAccounting and ExcludeItemBillingFromRevenueAccounting fields to true.If you are a Billing - Revenue Integration customer, you must set the ReflectDiscountInNetAmount field to false, otherwise an error will be returned. Billing - Revenue Integration does not support discounts on the preceding charges.If you are a Zuora Billing customer who does not enable the Order to Revenue or Billing - Revenue Integration feature, when you apply percentage discounts to the preceding charges, you also need to set the ReflectDiscountInNetAmount field to true. |
| RevenueRecognitionTiming | string <= 200 charactersSpecifies the type of revenue recognition timing.Predefined options are listed as enum values in this API Reference. Other options might also be avaliable depending on the revenue recognition policy configuration in the Zuora Billing UI.Note: This field is only available if you have the Order to Revenue feature enabled.Enum: "Upon Billing Document Posting Date" "Upon Order Activation Date" |
| RevenueAmortizationMethod | string <= 200 charactersSpecifies the type of revenue amortization method.Predefined options are listed as enum values in this API Reference. Other options might also be avaliable depending on the revenue recognition policy configuration in the Zuora Billing UI.Note: This field is only available if you have the Order to Revenue feature enabled.Enum: "Immediate" "Ratable Using Start And End Dates" |
| ProductRatePlanChargeNumber | string <= 100 charactersThe natural key of the product rate plan charge.Values:leave null for automatically generated stringan alphanumeric string of 100 characters or fewerNote: This field is only available if you set the X-Zuora-WSDL-Version request header to 133 or later. |
| ProductRatePlanChargeTierDatarequired | object (productRatePlanChargeTierData)Container for pricing information associated with the product rate plan charge. |
| ProductRatePlanIdrequired | string <= 32 charactersThe ID of the product rate plan associated with this product rate plan charge. |
| ProrationOption | stringNote: This field is only available if you have the Charge Level Proration feature enabled. For more information, see Usage charge proration and Charge level proration option for a recurring charge.To use this field, you must set the X-Zuora-WSDL-Version request header to 135 or higher. Otherwise, an error occurs.You can use this field to specify the charge-level proration option for a usage charge or recurring charge. The tenant-level proration option will be overridden.NoProration: charge-level proration option that you can set for a usage charge. This option means to not use any proration, which is the default current system behavior for a usage charge.TimeBasedProration: charge-level proration option that you can set for a usage charge. This option means to prorate the usage charge amount using the actual number of days if the billing period is a partial period.DefaultFromTenantSetting: charge-level proration option that you can set for a recurring charge. This option means to follow the customer billing rule proration setting.ChargeFullPeriod: charge-level proration option that you can set for a recurring charge. This options means to charge the full period amount for a partial billing period. Note that this setting means that there is no proration for either collecting or refunding. Even if you cancel the recurring charge in the middle of a billing period, there is no refund for this billing period.Enum: "NoProration" "TimeBasedProration" "DefaultFromTenantSetting" "ChargeFullPeriod" |
| RatingGroup | string or nullDefault: "ByBillingPeriod"Specifies a rating group based on which usage records are rated.Possible values:ByBillingPeriod: The rating is based on all the usages in a billing period.ByUsageStartDate: The rating is based on all the usages on the same usage start date.ByUsageRecord: The rating is based on each usage record.ByUsageUpload: The rating is based on all the usages in a uploaded usage file (.xls or .csv).ByGroupId: The rating is based on all the usages in a custom group.Notes:The ByBillingPeriod value can be applied for all charge models.The ByUsageStartDate, ByUsageRecord, and ByUsageUpload values can only be applied for per unit, volume pricing, and tiered pricing charge models.The ByGroupId value is only available if you have the Active Rating feature enabled.Use this field only for Usage charges. One-Time Charges and Recurring Charges return NULL.Enum: "ByBillingPeriod" "ByUsageStartDate" "ByUsageRecord" "ByUsageUpload" "ByGroupId" null |
| RecognizedRevenueAccount | string <= 100 charactersThe name of the recognized revenue account for this charge.Required when the Allow Blank Accounting Code setting is No.Optional when the Allow Blank Accounting Code setting is Yes.This feature is in Limited Availability. If you wish to have access to the feature, submit a request at Zuora Global Support. |
| RevRecCode | string or null <= 70 charactersAssociates this product rate plan charge with a specific revenue recognition code. |
| RevRecTriggerCondition | string or nullSpecifies when revenue recognition begins.Enum: "ContractEffectiveDate" "ServiceActivationDate" "CustomerAcceptanceDate" null |
| RevenueRecognitionRuleName | stringDetermines when to recognize the revenue for this charge.Enum: "Recognize upon invoicing" "Recognize daily over time" |
| RolloverApply | stringNote: This field is only available if you have the Prepaid with Drawdown feature enabled.To use this field, you must set the X-Zuora-WSDL-Version request header to 114 or higher. Otherwise, an error occurs.This field defines the priority of rollover, which is either first or last.Enum: "ApplyFirst" "ApplyLast" |
| RolloverPeriods | numberNote: This field is only available if you have the Prepaid with Drawdown feature enabled.To use this field, you must set the X-Zuora-WSDL-Version request header to 114 or higher. Otherwise, an error occurs.This field defines the number of rollover periods, it is restricted to 3. |
| SmoothingModel | string or nullSpecifies the smoothing model for an overage smoothing charge model.Enum: "RollingWindow" "Rollover" null |
| SpecificBillingPeriod | integer or null <int64>Customizes the number of months or weeks for the charges billing period. This field is required if you set the value of the BillingPeriod field to Specific Months or Specific Weeks. The valid value is a positive integer. |
| SpecificListPriceBase | integer or null <int32> [ 1 .. 120 ]The number of months for the list price base of the charge. This field is required if you set the value of the ListPriceBase field to Per Specific Months. The value must be a positive integer between 1 and 120 inclusive.Notes:This field is available only if you have the Annual List Price feature enabled.To use this field, you must set the X-Zuora-WSDL-Version request header to 129 or later. Otherwise, an error occurs.The value of this field is null if you do not set the value of the ListPriceBase field to Per Specific Months. |
| TaxCode | string <= 64 charactersSpecifies the tax code for taxation rules. Required when the Taxable field is set to True.Note: This value affects the tax calculation of rate plan charges that come from the ProductRatePlanCharge. |
| TaxMode | string or nullDetermines how to define taxation for the charge. Required when the Taxable field is set to True.Note: This value affects the tax calculation of rate plan charges that come from the ProductRatePlanCharge.Enum: "TaxExclusive" "TaxInclusive" null |
| Taxable | booleanDetermines whether the charge is taxable. When set to True, the TaxMode and TaxCode fields are required when creating or updating th ProductRatePlanCharge object.Character limit: 5Values: True, FalseNote: This value affects the tax calculation of rate plan charges that come from the ProductRatePlanCharge. |
| TriggerEventrequired | stringSpecifies when to start billing the customer for the charge.Values:ContractEffective is the date when the subscription's contract goes into effect and the charge is ready to be billed.ServiceActivation is the date when the services or products for a subscription have been activated and the customers have access.CustomerAcceptance is when the customer accepts the services or products for a subscription.Enum: "ContractEffective" "ServiceActivation" "CustomerAcceptance" |
| UOM | string or null <= 25 charactersSpecifies a configured unit to measure usage.Note: You must specify this field when creating the following charge models:Per Unit PricingVolume PricingOverage PricingTiered PricingTiered with Overage Pricing |
| UpToPeriods | integer or null <int64>Specifies the length of the period during which the charge is active. If this period ends before the subscription ends, the charge ends when this period ends.Character limit: 5Values: a whole number between 0 and 65535, exclusiveNotes:You must use this field together with the UpToPeriodsType field to specify the time period. This field is applicable only when the EndDateCondition field is set to FixedPeriod.If the subscription end date is subsequently changed through a Renewal, or Terms and Conditions amendment, the charge end date will change accordingly up to the original period end. |
| UpToPeriodsType | string or nullDefault: "Billing Periods"The period type used to define when the charge ends.Notes:You must use this field together with the UpToPeriods field to specify the time period.This field is applicable only when the EndDateCondition field is set to FixedPeriod.Enum: "Billing Periods" "Days" "Weeks" "Months" "Years" null |
| UsageRecordRatingOption | string or nullDefault: "EndOfBillingPeriod"Determines how Zuora processes usage records for per-unit usage charges.Enum: "EndOfBillingPeriod" "OnDemand" null |
| UseDiscountSpecificAccountingCoderequired | boolean or nullDetermines whether to define a new accounting code for the new discount charge.Character limit: 5Values: True, False |
| UseTenantDefaultForPriceChange | booleanApplies the tenant-level percentage uplift value for an automatic price change to a termed subscription's renewal.Character limit: 5Values: true, false |
| ValidityPeriodType | stringNote: This field is only available if you have the Prepaid with Drawdown feature enabled.To use this field, you must set the X-Zuora-WSDL-Version request header to 114 or higher. Otherwise, an error occurs.The period in which the prepayment units are valid to use as defined in a prepayment charge.Enum: "SUBSCRIPTION_TERM" "ANNUAL" "SEMI_ANNUAL" "QUARTER" "MONTH" |
| WeeklyBillCycleDay | stringSpecifies which day of the week as the bill cycle day (BCD) for the charge.This feature is in Limited Availability. If you wish to have access to the feature, submit a request at Zuora Global Support.Enum: "Sunday" "Monday" "Tuesday" "Wednesday" "Thursday" "Friday" "Saturday" |
| ApplyToBillingPeriodPartially | booleanAllow the discount duration to be aligned with the billing period partially.Note: You must enable the Enhanced Discount feature to access this field. |
| RolloverPeriodLength | integerDefault: nullNote: This field is only available if you have the Prepaid with Drawdown feature enabled.To use this field, you must set the X-Zuora-WSDL-Version request header to 137 or higher. Otherwise, an error occurs.Use this field when you want to set the rollover fund's period length shorter than the prepayment charge's validity period. In this case, you must set the rolloverPeriods field to 1. For example, you can define the rollover fund's period length as 5 months, shorter than the prepayment charge's validity period: a year. |
| Formula | stringThe price lookup formula defined for the product rate plan charge, which is used to identify the correct and relevant charge definition based on the context.For more information, see Price lookup in Attribute-based Pricing.Notes:This field is available only if the Attribute-based Pricing feature is enabled.To use this field, you must set the X-Zuora-WSDL-Version request header to 138 or higher. |
| Class__NS | string <= 255 charactersClass associated with the corresponding item in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| DeferredRevAccount__NS | string <= 255 charactersDeferrred revenue account associated with the corresponding item in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| Department__NS | string <= 255 charactersDepartment associated with the corresponding item in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| IncludeChildren__NS | stringSpecifies whether the corresponding item in NetSuite is visible under child subsidiaries. Only available if you have installed the Zuora Connector for NetSuite.Enum: "Yes" "No" |
| IntegrationId__NS | string <= 255 charactersID of the corresponding object in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| IntegrationStatus__NS | string <= 255 charactersStatus of the product rate plan charge's synchronization with NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| ItemType__NS | stringType of item that is created in NetSuite for the product rate plan charge. Only available if you have installed the Zuora Connector for NetSuite.Enum: "Inventory" "Non Inventory" "Service" |
| Location__NS | string <= 255 charactersLocation associated with the corresponding item in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| RecognizedRevAccount__NS | string <= 255 charactersRecognized revenue account associated with the corresponding item in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| RevRecEnd__NS | stringEnd date condition of the corresponding item in NetSuite. Only available if you have installed the Zuora Connector for NetSuite.Enum: "Charge Period Start" "Rev Rec Trigger Date" "Use NetSuite Rev Rec Template" |
| RevRecStart__NS | stringStart date condition of the corresponding item in NetSuite. Only available if you have installed the Zuora Connector for NetSuite.Enum: "Charge Period Start" "Rev Rec Trigger Date" "Use NetSuite Rev Rec Template" |
| RevRecTemplateType__NS | string <= 255 charactersOnly available if you have installed the Zuora Connector for NetSuite. |
| Subsidiary__NS | string <= 255 charactersSubsidiary associated with the corresponding item in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| SyncDate__NS | string <= 255 charactersDate when the product rate plan charge was synchronized with NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| property name*additional property | anyCustom fields of the Product Rate Plan Charge object. The name of each custom field has the form customField__c. Custom field names are case sensitive. See Custom Fields for more information. |

Responses

200

OK

401

Unauthorized

post/v1/object/product-rate-plan-charge

Request samples

-   Payload
-   cURL

application/json

SpecificListPriceBase at upper bound exampleSpecificListPriceBase at upper bound example

Copy

Expand allCollapse all

`{

-   "Name": "Maximum Specific List Price Base Charge",

-   "Description": "Charge with maximum specific list price base",

-   "ChargeModel": "Flat Fee Pricing",

-   "ChargeType": "Recurring",

-   "ProductRatePlanId": "{YourProductRatePlanId}",

-   "BillCycleType": "DefaultFromCustomer",

-   "BillingPeriod": "Month",

-   "TriggerEvent": "ContractEffective",

-   "ListPriceBase": "Per Specific Months",

-   "SpecificListPriceBase": 120,

-   "ProductRatePlanChargeTierData": {

    -   "ProductRatePlanChargeTier": [

        -   {

            -   "Price": 99.99


            }


        ]


    },

-   "UseDiscountSpecificAccountingCode": false


}`

Response samples

-   200
-   401

application/json

responseresponse

Copy

`{

-   "Id": "2c93808457d787030157e03197714910",

-   "Success": true


}`
