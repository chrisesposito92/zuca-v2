---
title: "Rate Plan Charge fields supported by Custom Logic"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/custom-logic/objects-and-fields-supported-by-custom-logic/rate-plan-charge-fields-supported-by-custom-logic"
product: "zuora-platform"
scraped_at: "2025-12-24T05:22:44.545Z"
---

# Rate Plan Charge fields supported by Custom Logic

This reference lists the fields of the Rate Plan Charge object that are supported by the Custom Logic feature.

For more information about conditions and mutations in custom logic, see [Objects and fields supported by Custom Logic](/zuora-platform/extensibility/custom-logic/objects-and-fields-supported-by-custom-logic).

| Field name | Field type | Supported for condition | Supported for mutation |
| --- | --- | --- | --- |
| AccountingCode | String | Yes | No |
| AccountReceivableAccountingCodeId | String | Yes | No |
| AmendedByOrderOn | Date | Yes | No |
| ApplyDiscountTo | String | Yes | No |
| ApplyToBillingPeriodPartially | Boolean | Yes | No |
| BillingCycleDay | Integer | Yes | No |
| BillingCycleType | String | Yes | No |
| BillingPeriod | String | Yes | No |
| BillingPeriodAlignment | String | Yes | No |
| BillingTiming | String | Yes | No |
| ChargedThroughDate | Date | Yes | No |
| ChargeModel | String | Yes | No |
| ChargeNumber | String | Yes | No |
| ChargeType | String | Yes | No |
| CommitmentType | String | Yes | No |
| CreatedById | String | No | No |
| CreatedDate | DateTime | Yes | No |
| CreditOption | String | Yes | No |
| DeferredRevenueAccountingCodeId | String | Yes | No |
| Description | String | Yes | No |
| DiscountLevel | String | Yes | No |
| DMRC | Decimal | Yes | No |
| DrawdownRate | Decimal | Yes | No |
| DrawdownUom | String | Yes | No |
| DTCV | Decimal | Yes | No |
| EffectiveEndDate | Date | Yes | No |
| EffectiveStartDate | Date | Yes | No |
| EndDateCondition | String | Yes | No |
| ExcludeItemBillingFromRevenueAccounting | Boolean | Yes | No |
| ExcludeItemBookingFromRevenueAccounting | Boolean | Yes | No |
| Id | String | No | No |
| InvoiceOwnerId | String | Yes | No |
| InvoiceScheduleId | String | Yes | No |
| IsCommitted | Boolean | Yes | No |
| IsLastSegment | Boolean | Yes | No |
| IsPrepaid | Boolean | Yes | No |
| IsProcessed | Boolean | Yes | No |
| IsRollover | Boolean | Yes | No |
| ListPriceBase | String | Yes | No |
| MRR | Decimal | Yes | No |
| Name | String | Yes | No |
| NumberOfPeriods | Long | Yes | No |
| OriginalId | String | Yes | No |
| OriginalOrderDate | Date | Yes | No |
| OverageCalculationOption | String | Yes | No |
| OverageUnusedUnitsCreditOption | String | Yes | No |
| PrepaidOperationType | String | Yes | No |
| PrepaidQuantity | Decimal | Yes | No |
| PrepaidTotalQuantity | Decimal | Yes | No |
| PrepaidUOM | String | Yes | No |
| PriceChangeOption | String | Yes | No |
| PriceIncreasePercentage | Decimal | Yes | No |
| PriceUpsellQuantityStacked | Boolean | Yes | No |
| ProcessedThroughDate | Date | Yes | No |
| ProductChargeDefinitionId | String | Yes | No |
| ProductRatePlanChargeId | String | Yes | No |
| ProrationOption | String | Yes | No |
| Quantity | Decimal | Yes | No |
| RatePlanId | String | Yes | No |
| RatingGroup | String | Yes | No |
| RecognizedRevenueAccountingCodeId | String | Yes | No |
| RevenueRecognitionRuleName | String | Yes | No |
| RevRecCode | String | Yes | No |
| RevRecTriggerCondition | String | Yes | No |
| RolloverApply | String | Yes | No |
| RolloverPeriodLength | Integer | Yes | No |
| RolloverPeriods | Long | Yes | No |
| Segment | Integer | Yes | No |
| SpecificBillingPeriod | Long | Yes | No |
| SpecificEndDate | Date | Yes | No |
| SpecificListPriceBase | Integer | Yes | No |
| SubscriptionId | String | Yes | No |
| SubscriptionOwnerId | String | Yes | No |
| TCV | Decimal | Yes | No |
| TriggerDate | Date | Yes | No |
| TriggerEvent | String | Yes | No |
| UOM | String | Yes | No |
| UpdatedById | String | No | No |
| UpdatedDate | DateTime | Yes | No |
| UpToPeriods | Long | Yes | No |
| UpToPeriodsType | String | Yes | No |
| ValidityPeriodType | String | Yes | No |
| Version | Long | Yes | No |
| WeeklyBillCycleDay | String | Yes | No |
