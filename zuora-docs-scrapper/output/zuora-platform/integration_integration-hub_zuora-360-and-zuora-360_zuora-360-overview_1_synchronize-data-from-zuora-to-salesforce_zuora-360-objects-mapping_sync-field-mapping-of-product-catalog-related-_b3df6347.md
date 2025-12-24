---
title: "Sync field mapping of product catalog related objects for Zuora 360"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-360-and-zuora-360/zuora-360-overview_1/synchronize-data-from-zuora-to-salesforce/zuora-360-objects-mapping/sync-field-mapping-of-product-catalog-related-objects-for-zuora-360"
product: "zuora-platform"
scraped_at: "2025-12-24T18:39:41.809Z"
---

# Sync field mapping of product catalog related objects for Zuora 360

This article shows how the Zuora objects and their fields are mapped and synchronized to Salesforce objects and fields in Product Catalog sync.

To sync product catalog data, you must have the Zuora Quotes managed package installed for your Salesforce org. .

Note:

Each sync objects pair is marked as <Zuora object> : <Salesforce object>, e.g., Product : Product2

Any Zuora field marked as "internal" is a field that is not exposed in the Zuora SOAP API. However, these internal fields are synchronized between Zuora and Salesforce in Zuora 360.

For the descriptions of the standard fields, refer to [SOAP API Objects](/zuora-platform/integration/apis/soap-api/soap-api-object-relationships) .

## Fields labeled as Deprecated

You might find that the fields where their labels indicate that they have been deprecated also exist on Product Catalog objects. For example:

-   Product SKU (Deprecated)

-   Product Name (Deprecated)

-   Product Effective End Date (Deprecated)

-   UOM (Deprecated)


Do not use such fields in your customizations as they are likely to be removed soon and could result in sync failures. Keep in mind that you should always use the fields without the `Deprecated` suffix in their labels. Therefore, instead of the fields in the preceding list, you should use the following fields:

-   Product SKU

-   Product Name

-   Product Effective End Date

-   UOM


## Sync Date Fields

When creating products and product rate plans, you must use dates that fall within the range supported by Salesforce: 1700-01-01T00:00:00 GMT to 4000-12-31T00:00:00 GMT. If you set a date outside of this range, the product sync will fail.

-   Effective start date must be on or after 1-1-1700

-   Effective end date must be on or before 12-31-4000


## Product : Zuora\_\_Product\_\_c

Following fields of Zuora Product are synced if the Real-Time Sync mode is enabled for Zuora 360.

| Zuora Object | Zuora Field | Salesforce Object | Salesforce Field |
| --- | --- | --- | --- |
| Product | Zuora__Product__c |  |  |
|  | Category |  | Zuora__Category__c |
|  | Description |  | Zuora__Description__c |
|  | EffectiveEndDate |  | Zuora__EffectiveEndDate__c |
|  | EffectiveStartDate |  | Zuora__EffectiveStartDate__c |
|  | EntityID |  | Zuora__EntityID__c |
|  | ExternalId |  | Zuora__External_Id__c |
|  | SKU |  | Zuora__SKU__c |
|  | CreatedOn |  | Zuora__CreatedDate__c |
|  | UpdatedOn |  | Zuora__UpdatedDate__c |

## Product : Product2

Starting from the Version 3.0 of Zuora 360, the Zuora Product object is synchronized to the Salesforce Product object. For the earlier version of Zuora 360, see the Product : zqu\_\_ZProduct\_\_c mapping table.

Following fields of Zuora Product are synced if the Scheduled Sync mode is enabled for Zuora 360.

| Zuora Object | Zuora Field | Salesforce Object | Salesforce Field |
| --- | --- | --- | --- |
| Product | Product2 |  |  |
|  | AllowFeatureChanges |  | zqu__Allow_Feature_Changes__c |
|  | Deleted |  | zqu__Deleted__c |
|  | Description |  | zqu__Description__c |
|  | EffectiveEndDate |  | zqu__EffectiveEndDate__c |
|  | EffectiveStartDate |  | zqu__EffectiveStartDate__c |
|  | Id |  | zqu__ZuoraId__c (External ID) |
|  | Name |  | Name |
|  | SKU |  | zqu__SKU__cSupported in Version 3.0 and 3.1. |
|  | SKU |  | zqu__SKU2__cSupported in Version 3.2+. |

## Product : zqu\_\_ZProduct\_\_c

Refer to this mapping when you are using the 2.x and earlier versions of Zuora 360.

| Zuora Object | Zuora Field | Salesforce Object | Salesforce Field |
| --- | --- | --- | --- |
| Product | zqu__ZProduct__c |  |  |
|  | AllowFeatureChanges |  | zqu__Allow_Feature_Changes__c |
|  | Deleted |  | zqu__Deleted__c |
|  | Description |  | zqu__Description__c |
|  | EffectiveEndDate |  | zqu__EffectiveEndDate__c |
|  | EffectiveStartDate |  | zqu__EffectiveStartDate__c |
|  | Id |  | zqu__ZuoraId__c (External ID) |
|  | Name |  | Name |
|  | SKU |  | zqu__SKU__c |

## ProductRatePlan : zqu\_\_ProductRatePlan\_\_c

| Zuora Object | Zuora Field | Salesforce Object | Salesforce Field |
| --- | --- | --- | --- |
| ProductRatePlan | zqu__ProductRatePlan__c |  |  |
|  | ActiveCurrencies |  | zqu__ActiveCurrencies__c |
|  | Deleted |  | zqu__Deleted__c |
|  | Description |  | zqu__Description__c |
|  | EffectiveEndDate |  | zqu__EffectiveEndDate__c |
|  | EffectiveStartDate |  | zqu__ EffectiveStartDate__c |
|  | Id |  | zqu__ZuoraId__c (External ID) |
|  | Name |  | Name Supported in Version 2.0. |
|  | Name |  | zqu__ProductRatePlanFullName__c Supported in Version 3.2+. |

## ProductRatePlanCharge : zqu\_\_ProductRatePlanCharge\_\_c

| Zuora Object | Zuora Field | Salesforce Object | Salesforce Field | Comments |
| --- | --- | --- | --- | --- |
| ProductRatePlanCharge | zqu__ProductRatePlanCharge__c |  |  |  |
|  | AccountingCode |  | zqu__AccountingCode2 __c |  |
|  | ApplyDiscountTo |  | zqu__ Apply_Discount_ To_One_Time_Charges __c |  |
|  | ApplyDiscountTo |  | zqu__ Apply_Discount_To_ Recurring_Charges __c |  |
|  | ApplyDiscountTo |  | zqu__ Apply_Discount_To_ Usage_Charges__c |  |
|  | ApplyType (Internal) |  | zqu__Discount_Apply_ Type__c | Specifies the type of charges a specific discount applies to.Contains one of the following values as the ApplyDiscountTo field of the ProductRatePlanCharge object.ONETIME (1)RECURRING (2)ONETIMERECURRING (3)USAGE (4)ONETIMEUSAGE (5)RECURRINGUSAGE (6)ONETIMERECURRINGUSAGE (7) |
|  | BillCycleDay |  | zqu__BillCycleDay__c |  |
|  | BillCycleType |  | zqu__BillCycleType__c |  |
|  | BillingPeriod |  | zqu__RecurringPeriod __c |  |
|  | BillingPeriodAlignment |  | zqu__BillingPeriod Alignment __c |  |
|  | BillingTiming |  | zqu__BillingTiming__c | Specifies whether to bill this charge in advance or in arrears for recurring charge types. This field is not used in one-time or usage-based charge types.Contains one of the following:In AdvanceIn Arrears |
|  | ChargeType |  | zqu__Type__c |  |
|  | DefaultQuantity |  | zqu__DefaultQuantity __c |  |
|  | DeferredRevenueAccount |  | zqu__DeferredRevenue Account__c |  |
|  | Deleted |  | zqu__Deleted__c |  |
|  | Description |  | zqu__Description__c |  |
|  | DiscountLevel (Internal) |  | zqu__Discount_Level __c | Specifies if the discount applies to just the product rate plan, the entire subscription, or to any activity in the account. |
|  | EndDateCondition |  | zqu__EndDateCondition __c |  |
|  | Id |  | zqu__ ZuoraId__c(External ID) |  |
|  | IncludedUnits |  | zqu__IncludedUnits__c |  |
|  | ListPriceBase |  | zqu__ListPriceBase__c |  |
|  | MaxQuantity |  | zqu__MaxQuantity__c |  |
|  | MinQuantity |  | zqu__MinQuantity__c |  |
|  | Model |  | zqu__Model__c |  |
|  | Name |  | Name |  |
|  | NumberOfPeriod |  | zqu__NumberOfPeriod __c |  |
|  | OverageCalculationOption |  | zqu__Overage CalculationOption__c |  |
|  | OverageUnusedUnits CreditOption |  | zqu__ OverageUnusedUnits CreditOption __c |  |
|  | PrepayPeriods (Internal) |  | zqu__Prepayment Periods __c | The number of periods to which prepayment is set. |
|  | Price |  | zqu__ListPrice__c |  |
|  | PriceChangeOption |  | zqu__PriceChange Option__c |  |
|  | PriceIncreasePercentage |  | zqu__PriceIncrease Percentage__c |  |
|  | RecognizedRevenueAccount |  | zqu__ RecognizedRevenue Account__c |  |
|  | RevenueRecognitionRuleName |  | zqu__ RevenueRecognition RuleName__c |  |
|  | RevRecCode |  | zqu__RevRecCode__c | This mapping is deprecated in Zuora 360 3.1 and higher versions. |
|  | RevRecCode |  | zqu__RevRecCode2__c | Applicable to Zuora 360 3.1 and higher versions. |
|  | RevRecTriggerCondition |  | zqu__RevRecTrigger Condition __c | Specifies when revenue recognition begins. Contains one of the following values:ContractEffectiveDateServiceActivationDateCustomerAcceptanceDate |
|  | SmoothingModel |  | zqu__SmoothingModel __c |  |
|  | UOM |  | zqu__UOM__c |  |
|  | N/A |  | zqu__ZUom_Id__c | Zuora ID of the UOM |
|  | N/A |  | zqu__ZUnitOfMeasure __c | References to the zqu__ZUnitOfMeasure__c object, which maps to the UnitOfMeasure object in Zuora. |
|  | Taxable |  | zqu__Taxable__c |  |
|  | TaxCode |  | zqu__TaxCode2__c |  |
|  | TaxMode |  | zqu__TaxMode__c |  |
|  | TriggerEvent |  | zqu__TriggerEvent__c |  |
|  | UpToPeriods |  | zqu__Upto_How_ Many_Periods__c | Specifies the number of billing periods for which a discount is applied to the charge. |
|  | UpToPeriodsType |  | zqu__UpToPeriodsType __c |  |
|  | UsageRecordRatingOption |  | zqu__UsageRecord RatingOption__c |  |
|  | UseDiscountSpecific AccountingCode |  | zqu__ UseDiscountSpecific AccountingCode __c |  |
|  | UseTenantDefault ForPriceChange |  | zqu__ UseTenantDefault ForPriceChange __c |  |
|  | WeeklyBillCycleDay |  | zqu__ WeeklyBillCycleDay__c |  |

## ProductRatePlanChargeTier : zqu\_\_ProductRatePlanChargeTier\_\_c

| Zuora Object | Zuora Field | Salesforce Object | Salesforce Field |
| --- | --- | --- | --- |
| ProductRatePlanChargeTier | zqu__ProductRatePlanChargeTier__c |  |  |
|  | Active |  | zqu__Active__c |
|  | Currency |  | zqu__Currency2__c |
|  | DiscountAmount |  | zqu__DiscountAmount__c |
|  | DiscountPercentage |  | zqu__DiscountPercentage__c |
|  | EndingUnit |  | zqu__EndingUnit__c |
|  | Id |  | zqu__ZuoraId__c (External ID) |
|  | IsOveragePrice |  | zqu__IsOveragePrice__c |
|  | Price |  | zqu__Price__c |
|  | PriceFormat |  | zqu__PriceFormat2__c |
|  | StartingUnit |  | zqu__StartingUnit__c |
|  | Tier |  | Namezqu__Tier__c |

## Feature : zqu\_\_ZFeature\_\_c

Note: To create features in the product catalog and use them in subscriptions and Zuora Quotes, you need to enable the following:

-   The Entitlements setting in your tenant.Access to the Entitlements feature requires a specific edition of Zuora. See [Zuora Editions](/entitlements/current-entitlements/zuora-editions)
-   The [Enable Feature Specification in Product and Subscriptions](/zuora-billing/set-up-zuora-billing/billing-settings-configuration) setting in the Billing Settings.

| Zuora Object | Zuora Field | Salesforce Object | Salesforce Field |
| --- | --- | --- | --- |
| Feature | zqu__ZFeature__c |  |  |
|  | Id | zqu__ZuoraId__c |  |
|  | Name | Name | Feature name in 80 characters or less |
|  | Name | zqu__ZProductFeatureFullName__c | Full name of the feature |
|  | FeatureCode | zqu__Code__c |  |
|  | Description | zqu__Description__c |  |
|  | Deleted | zqu__Deleted__c |  |
|  | Status | zqu__Status__c |  |

## ProductFeature : zqu\_\_ZProductFeature\_\_c

Note: To create features in the product catalog and use them in subscriptions and Zuora Quotes, you need to enable the following:

-   The Entitlements setting in your tenant.Access to the Entitlements feature requires a specific edition of Zuora. See [Zuora Editions](/entitlements/current-entitlements/zuora-editions)
-   The [Enable Feature Specification in Product and Subscriptions](/zuora-billing/set-up-zuora-billing/billing-settings-configuration) setting in the Billing Settings.

| Zuora Object | Zuora Field | Salesforce Object | Salesforce Field | Comments |
| --- | --- | --- | --- | --- |
| ProductFeature | zqu__ZFeature__c |  |  |  |
|  | Id |  | zqu__ZuoraId__c |  |
|  | FeatureId |  | zqu__ZFeature__c | Holds a lookup reference to the Feature object |
|  | ProductId |  | zqu__ZProduct__c | Holds a lookup reference to the Product object. |
