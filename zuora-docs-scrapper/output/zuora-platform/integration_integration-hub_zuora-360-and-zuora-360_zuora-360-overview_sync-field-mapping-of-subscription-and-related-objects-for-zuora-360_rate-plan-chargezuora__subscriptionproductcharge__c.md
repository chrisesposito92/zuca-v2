---
title: "Rate Plan Charge:Zuora__SubscriptionProductCharge__c"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-360-and-zuora-360/zuora-360-overview/sync-field-mapping-of-subscription-and-related-objects-for-zuora-360/rate-plan-chargezuora__subscriptionproductcharge__c"
product: "zuora-platform"
scraped_at: "2025-12-24T18:38:10.814Z"
---

# Rate Plan Charge:Zuora\_\_SubscriptionProductCharge\_\_c

This topic provides a comprehensive mapping of Zuora rate plan charges to Salesforce fields, with a focus on the Zuora\_\_SubscriptionProductCharge\_\_c object and its associated fields.

The following table lists the Zuora objects and fields.

| Zuora Object | Zuora Field | Salesforce Object | Salesforce Field | Comments |
| --- | --- | --- | --- | --- |
| RatePlanCharge | Zuora__SubscriptionProductCharge__c |  |  |  |
|  | AccountingCode |  | Zuora__AccountingCode__c |  |
|  | ApplyDiscountTo |  | zuora__ApplyDiscountTo__c |  |
|  | BillCycleDay |  | Zuora__BillCycleDay__c |  |
|  | BillCycleType |  | Zuora__BillCycleType__c |  |
|  | BillingPeriod |  | Zuora__BillingPeriod__c |  |
|  | BillingPeriodAlignment |  | Zuora__ BillingPeriodAlignment__c |  |
|  | BillingPeriodStartDay(internal) |  | Zuora__ BillingPeriodStartDay__c | Billing day of the charge. Same as BillCycleDay of the ProductRatePlanCharge object. |
|  | BillingTiming |  | Zuora__BillingTiming__c | Specifies whether to bill this charge in advance or in arrears for recurring charge types. This field is not used in one-time or usage-based charge types.This value overrides the value inherited from the Product Rate Plan Charge.Contains one of the following:In AdvanceIn Arrears |
|  | ChargedThroughDate |  | Zuora__ ChargedThroughDate__c |  |
|  | ChargeModel |  | Zuora__Model__c |  |
|  | ChargeNumber |  | Zuora__ChargeNumber__c |  |
|  | ChargeType |  | Zuora__Type__c |  |
|  | ComplexTotal(internal) |  | Zuora__ExtendedAmount__c | MRR*(number of months in a period)For example:For a quarterly charge with MRR=100, complexTotal =100 * 3 = 300. |
|  | DiscountAmount |  | Zuora__DiscountAmount__c |  |
|  | DiscountLevel |  | Zuora__DiscountLevel__c |  |
|  | DiscountPercentage |  | Zuora__ DiscountPercentage__c |  |
|  | Description |  | Zuora__Description__c |  |
|  | DMRC |  | Zuora__DMRC__c |  |
|  | DTCV |  | Zuora__DTCV__c |  |
|  | EffectiveEndDate |  | Zuora__EffectiveEndDate__c |  |
|  | EffectiveStartDate |  | Zuora__EffectiveStartDate__c |  |
|  | EndDateCondition |  | Zuora__EndDateCondition__c |  |
|  | Id |  | Zuora__Zuora_Id__c |  |
|  | id |  | Zuora__External_Id__c (External ID) |  |
|  | IncludedUnits |  | Zuora__IncludedUnits__c |  |
|  | IsLastSegment |  | Zuora__IsLastSegment__c |  |
|  | ListPriceBase |  | Zuora__ListPriceBase__c |  |
|  | MRR |  | Zuora__ MonthlyRecurringRevenue__c |  |
|  | Name |  | Name |  |
|  | NumberOfPeriods |  | Zuora__NumberOfPeriods__c |  |
|  | OriginalId |  | Zuora__OriginalId__c |  |
|  | OverageCalculationOption |  | Zuora__ OverageCalculationOption__c |  |
|  | OveragePrice |  | Zuora__OveragePrice__c |  |
|  | OverageUnusedUnitsCreditOption |  | Zuora__ OverageUnusedUnits ​CreditOption __c |  |
|  | Price |  | Zuora__Price__c |  |
|  | PriceIncreasePercentage |  | Zuora__ PriceIncreasePercentage __c |  |
|  | ProcessedThroughDate |  | Zuora__ ProcessedThroughDate__c |  |
|  | ProductRatePlanChargeId |  | Zuora__ ProductRatePlanChargeId __c |  |
|  | Quantity |  | Zuora__Quantity__c |  |
|  | RatePlanId |  | Zuora__RatePlanId__c |  |
|  | RevRecCode |  | Zuora__RevRecCode__c |  |
|  | RevRecTriggerCondition |  | Zuora__ RevRecTriggerCondition __c |  |
|  | Segment |  | Zuora__Segment__c |  |
|  | SpecificBillingPeriod |  | Zuora__SpecificEndDate__c |  |
|  | TCV |  | Zuora__ TotalContractValue__c |  |
|  | TriggerDate |  | Zuora__TriggerDate__c |  |
|  | TriggerEvent |  | Zuora__TriggerEvent__c |  |
|  | UnusedUnitsCreditRates |  | Zuora__ UnusedUnitsCreditRates __c |  |
|  | UOM |  | Zuora__UOM__c |  |
|  | UOM |  | Zuora__PriceTable__c | Calculated from the related RatePlanChargeTier objects |
|  | UpToPeriods |  | Zuora__UpToPeriods__c |  |
|  | UpToPeriodsType |  | Zuora__UpToPeriodsType__c |  |
|  | UsageRecordRatingOption |  | Zuora__ UsageRecordRatingOption__c |  |
|  | UseDiscountSpecificAccountingCode |  | Zuora__ UseDiscountSpecific ​AccountingCode__c |  |
|  | Version |  | Zuora__Version__c |  |
|  | WeeklyBillCycleDay |  | Zuora__WeeklyBillCycleDay__c |  |
