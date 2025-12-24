---
title: "Product Rate Plan Charge fields supported by Custom Logic"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/custom-logic/objects-and-fields-supported-by-custom-logic/product-rate-plan-charge-fields-supported-by-custom-logic"
product: "zuora-platform"
scraped_at: "2025-12-24T05:22:41.739Z"
---

# Product Rate Plan Charge fields supported by Custom Logic

This reference lists the fields of the Product Rate Plan Charge object that are supported by the Custom Logic feature.

For more information about conditions and mutations in custom logic, see [Objects and fields supported by Custom Logic](/zuora-platform/extensibility/custom-logic/objects-and-fields-supported-by-custom-logic).

| Field name | Field type | Supported for condition | Supported for mutation |
| --- | --- | --- | --- |
| AccountingCode | String | Yes | Yes |
| ApplyDiscountTo | String | Yes | Yes |
| BillCycleDay | String | Yes | Yes |
| BillCycleType | String | Yes | Yes |
| BillingPeriod | String | Yes | Yes |
| BillingPeriodAlignment | String | Yes | Yes |
| BillingTiming | String | Yes | Yes |
| ChargeModel | String | Yes | Yes |
| ChargeType | String | Yes | Yes |
| CreatedById | String | No | No |
| CreatedDate | DateTime | Yes | No |
| DefaultQuantity | Decimal | Yes | Yes |
| DeferredRevenueAccount | String | Yes | Yes |
| Description | String | Yes | Yes |
| DiscountClass | String | Yes | Yes |
| DiscountLevel | String | Yes | Yes |
| EndDateCondition | String | Yes | Yes |
| ExcludeItemBillingFromRevenueAccounting | Boolean | Yes | Yes |
| ExcludeItemBookingFromRevenueAccounting | Boolean | Yes | Yes |
| Id | String | No | No |
| IncludedUnits | Double | Yes | Yes |
| LegacyRevenueReporting | Boolean | Yes | Yes |
| ListPriceBase | String | Yes | Yes |
| MaxQuantity | Decimal | Yes | Yes |
| MinQuantity | Decimal | Yes | Yes |
| Name | String | Yes | No |
| NumberOfPeriod | Long | Yes | Yes |
| OverageCalculationOption | String | Yes | Yes |
| OverageUnusedUnitsCreditOption | String | Yes | Yes |
| PrepayPeriods | Long | Yes | Yes |
| PriceChangeOption | String | Yes | Yes |
| PriceIncreasePercentage | Decimal | Yes | Yes |
| ProductRatePlanId | String | Yes | No |
| RatingGroup | String | Yes | Yes |
| RecognizedRevenueAccount | String | Yes | Yes |
| RevenueRecognitionRuleName | String | Yes | Yes |
| RevRecCode | String | Yes | Yes |
| RevRecTriggerCondition | String | Yes | Yes |
| SmoothingModel | String | Yes | Yes |
| SpecificBillingPeriod | Long | Yes | Yes |
| Taxable | Boolean | Yes | Yes |
| TaxCode | String | Yes | Yes |
| TaxMode | String | Yes | Yes |
| TriggerEvent | String | Yes | Yes |
| UOM | String | Yes | Yes |
| UpdatedById | String | No | No |
| UpdatedDate | DateTime | Yes | No |
| UpToPeriods | Long | Yes | Yes |
| UpToPeriodsType | String | Yes | Yes |
| UsageRecordRatingOption | String | Yes | Yes |
| UseDiscountSpecificAccountingCode | Boolean | Yes | Yes |
| UseTenantDefaultForPriceChange | Boolean | Yes | Yes |
| WeeklyBillCycleDay | String | Yes | Yes |
