---
title: "ProductRatePlanCharge : zqu__ProductRatePlanCharge__c"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/sync-field-mapping-of-product-catalog-and-related-objects-for-zuora-360/productrateplancharge--zqu__productrateplancharge__c"
product: "zuora-platform"
scraped_at: "2026-02-20T21:17:17.047Z"
---

# ProductRatePlanCharge : zqu\_\_ProductRatePlanCharge\_\_c

This topic details the mapping of the ProductRatePlanCharge object to its Salesforce equivalent, zqu\_\_ProductRatePlanCharge\_\_c, including fields such as Accounting Code, Billing Period, and Discount Level.

The following table lists the Zuora and Salesforce fields.

| Zuora Object | Zuora Field | Salesforce Object | Salesforce Field | Comments |
| --- | --- | --- | --- | --- |
| ProductRatePlanCharge | zqu__ProductRatePlanCharge__c |  |  |  |
|  | Accounting Code |  | zqu__AccountingCode2__c |  |
|  | Apply Discount To One Time Charges |  | zqu__Apply_Discount_To_One_Time_Charges__c |  |
|  | Apply Discount To Recurring Charges |  | zqu__Apply_Discount_To_Recurring_Charges__c |  |
|  | Apply Discount To Usage Charges |  | zqu__Apply_Discount_To_Usage_Charges__c |  |
|  | ApplyType (Internal) |  | zqu__Discount_Apply_Type__c | Specifies the type of charges a specific discount applies to.Contains one of the following values as the ApplyDiscountTo field of the ProductRatePlanCharge object.ONETIME (1)RECURRING (2)ONETIMERECURRING (3)USAGE (4)ONETIMEUSAGE (5)RECURRINGUSAGE (6)ONETIMERECURRINGUSAGE (7) |
|  | Bill Cycle Day |  | zqu__BillCycleDay__c |  |
|  | Bill Cycle Type |  | zqu__BillCycleType__c |  |
|  | Billing Period |  | zqu__RecurringPeriod__c |  |
|  | Billing Period Alignment |  | zqu__BillingPeriodAlignment __c |  |
|  | Billing Timing |  | zqu__BillingTiming__c | Specifies whether to bill this charge in advance or in arrears for recurring charge types. This field is not used in one-time or usage-based charge types.Contains one of the following:In AdvanceIn Arrears |
|  | Catalog Sync History |  | zqu__Catalog_Sync_History__c |  |
|  | Default Quantity |  | zqu__DefaultQuantity__c |  |
|  | Deferred Revenue Account |  | zqu__DeferredRevenueAccount__c |  |
|  | Deleted |  | zqu__Deleted__c |  |
|  | Description |  | zqu__Description__c |  |
|  | Discount - Apply Type |  | zqu__Discount_Apply_Type__c |  |
|  | Discount Class |  | zqu__Discount_Class__c |  |
|  | Discount Level |  | zqu__Discount_Level__c | Specifies if the discount applies to just the product rate plan, the entire subscription, or to any activity in the account. |
|  | End Date Condition |  | zqu__EndDateCondition __c |  |
|  | Entity ID |  | zqu__EntityID__c |  |
|  | Full Name |  | zqu__ProductRatePlanChargeFullName__c |  |
|  | Included Units |  | zqu__IncludedUnits__c |  |
|  | List Price |  | zqu__ListPrice__c |  |
|  | List Price Base |  | zqu__ListPriceBase__c |  |
|  | Maximum Quantity |  | zqu__MaxQuantity__c |  |
|  | Minimum Quantity |  | zqu__MinQuantity__c |  |
|  | Model |  | zqu__Model__c |  |
|  | Number Of Period |  | zqu__NumberOfPeriod__c |  |
|  | Overage Calculation Option |  | zqu__OverageCalculationOption__c |  |
|  | Overage Unused Units Credit Option |  | zqu__OverageUnusedUnitsCreditOption __c |  |
|  | Prepaid Periods |  | zqu__PrepaymentPeriods __c | The number of periods to which prepayment is set. |
|  | Price Change Option |  | zqu__PriceChangeOption__c |  |
|  | Price Increase Percentage |  | zqu__PriceIncreasePercentage__c |  |
|  | Price Table |  | zqu__PriceTable__c |  |
|  | Product Rate Plan |  | zqu__ProductRatePlan__c |  |
|  | Product Rate Plan Charge Name |  | zqu__ProductRatePlanChargeName__c |  |
|  | Rating Group |  | zqu__RatingGroup__c |  |
|  | Recognized Revenue Account |  | zqu__ RecognizedRevenueAccount__c |  |
|  | Recognize revenue without deferral |  | zqu__Recognize_revenue_without_deferral__c |  |
|  | Revenue Recognition Rule Name |  | zqu__ RevenueRecognition RuleName__c |  |
|  | Rev Rec Code |  | zqu__RevRecCode__c | This mapping is deprecated in Zuora 360 3.1 and higher versions. |
|  | Rev Rec Code |  | zqu__RevRecCode2__c | Applicable to Zuora 360 3.1 and higher versions. |
|  | Rev Rec Trigger Condition |  | zqu__RevRecTriggerCondition __c | Specifies when revenue recognition begins. Contains one of the following values:ContractEffectiveDateServiceActivationDateCustomerAcceptanceDate |
|  | Smoothing Model |  | zqu__SmoothingModel__c |  |
|  | Specific Billing Period |  | zqu__SpecificBillingPeriod__c |  |
|  | Sync Message |  | zqu__SyncMessage__c |  |
|  | Sync Status |  | zqu__SyncStatus__c |  |
|  | UOM |  | zqu__UOM__c |  |
|  | Uom Id |  | zqu__ZUom_Id__c | Zuora ID of the UOM |
|  | UOM |  | zqu__ZUnitOfMeasure__c | References to the zqu__ZUnitOfMeasure__c object, which maps to the UnitOfMeasure object in Zuora. |
|  | Taxable |  | zqu__Taxable__c |  |
|  | Tax Code |  | zqu__TaxCode2__c |  |
|  | Tax Mode |  | zqu__TaxMode__c |  |
|  | Trigger Event |  | zqu__TriggerEvent__c |  |
|  | Up To How Many Periods |  | zqu__Upto_How_Many_Periods__c | Specifies the number of billing periods for which a discount is applied to the charge. |
|  | Up To Periods Type |  | zqu__UpToPeriodsType__c |  |
|  | Usage Record Rating Option |  | zqu__UsageRecordRatingOption__c |  |
|  | Use Discount Specific Accounting Code |  | zqu__UseDiscountSpecificAccountingCode __c |  |
|  | Use Tenant Default For Price Change |  | zqu__UseTenantDefaultForPriceChange __c |  |
|  | Weekly Bill Cycle Day |  | zqu__WeeklyBillCycleDay__c |  |
|  | Zuora Id |  | zqu__ZuoraId__c |  |
