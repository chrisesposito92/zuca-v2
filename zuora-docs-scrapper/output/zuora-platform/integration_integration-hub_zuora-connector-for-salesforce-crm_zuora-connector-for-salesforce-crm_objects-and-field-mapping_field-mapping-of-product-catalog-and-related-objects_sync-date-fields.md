---
title: "Sync Date Fields"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm/objects-and-field-mapping/field-mapping-of-product-catalog-and-related-objects/sync-date-fields"
product: "zuora-platform"
scraped_at: "2025-12-24T08:34:20.940Z"
---

# Sync Date Fields

This document details the relationship between the Account and Zuora\_\_PaymentTerm\_\_c fields in Zuora and Salesforce.

When creating products and product rate plans, you must use dates that fall within the range supported by Salesforce: 1700-01-01T00:00:00 GMT to 4000-12-31T00:00:00 GMT. If you set a date outside of this range, the product sync will fail.

-   Effective start date must be on or after 1-1-1700
-   Effective end date must be on or before 12-31-4000

When creating products and product rate plans, you must use dates that fall within the range supported by Salesforce: 1700-01-01T00:00:00 GMT to 4000-12-31T00:00:00 GMT. If you set a date outside of this range, the product sync will fail.

-   Effective start date must be on or after 1-1-1700
-   Effective end date must be on or before 12-31-4000

## ProductFeature: zqu\_\_ZProductFeature\_\_c

The following table lists the Zuora and Salesforce fields:

| Zuora Object | Zuora Field |  |  | Salesforce Object | Salesforce Field | Comments |
| --- | --- | --- | --- | --- | --- | --- |
| ProductFeature |  |  | zqu__ZFeature__c |  |  |  |
|  | Catalog Sync History |  |  |  | zqu__Catalog_Sync_History__c |  |
|  | Deleted |  |  |  | zqu__Deleted__c |  |
|  | EntityID |  |  |  | zqu__EntityID__c |  |
|  | Zuora Id |  |  |  | zqu__ZuoraId__c |  |
|  | Feature |  |  |  | zqu__ZFeature__c | Holds a lookup reference to the Feature object |
|  | Full Name |  |  |  | zqu__ZProductFeatureFullName__c |  |
|  | Product |  |  |  | zqu__Product__c | Holds a lookup reference to the Product object. |
|  | Sync Message |  |  |  | zqu__SyncMessage__c |  |
|  | Sync Status |  |  |  | zqu__SyncStatus__c |  |
|  | ZProduct |  |  |  | zqu__ZProduct__c | Holds a lookup reference to the ZProduct object |
| To create features in the product catalog and use them in subscriptions and Zuora Quotes, you need to enable the following:The Entitlements setting in your tenant. Access to the Entitlements feature requires a specific edition of Zuora. See Zuora Editions for details.The Enable Feature Specification in Product and Subscriptions setting in the Billing Settings. |  |  |  |  |  |  |

## Product: zuora\_\_product\_\_c

The following table lists the Zuora and Salesforce fields:

| Zuora Object | Zuora Field | Salesforce Object | Salesforce Field | Comments |
| --- | --- | --- | --- | --- |
| ProductRatePlan | zqu__ProductRatePlan__c |  |  |  |
|  | Active Currencies |  | zqu__ActiveCurrencies__c |  |
|  | Catalog Sync History |  | zqu__Catalog_Sync_History__c | Holds a lookup reference to the Catalog Sync History object. |
|  | Default |  | zqu__Default__c |  |
|  | Deleted |  | zqu__Deleted__c |  |
|  | Description |  | zqu__Description__c |  |
|  | Effective End Date |  | zqu__EffectiveEndDate__c |  |
|  | EffectiveEndDateTEXT |  | zqu__EffectiveEndDateTEXT__c |  |
|  | Effective Start Date |  | zqu__ EffectiveStartDate__c |  |
|  | EffectiveStartDateTEXT |  | zqu__EffectiveStartDateTEXT__c |  |
|  | Entity ID |  | zqu__EntityID__c |  |
|  | Full Name |  | zqu__ProductRatePlanFullName__c |  |
|  | Price Summary |  | zqu__Price_Summary__c |  |
|  | Product |  | zqu__Product__c | Holds a lookup reference to the Product object. |
|  | Sync Message |  | zqu__SyncMessage__c |  |
|  | Sync Status |  | zqu__SyncStatus__c |  |
|  | ZProduct |  | zqu__ZProduct__c |  |
|  | ZuoraId |  | zqu__ZuoraId__c |  |
| The above fields of Zuora Product are synced in Zuora Connector for Salesforce CRM.Zuora_Product_c is synchronized via Accounts and Related objects rather than the Product Catalog objects. |  |  |  |  |

## ProductRatePlan: zuora\_\_productrateplan\_\_c

The following table lists the Zuora and Salesforce fields:

| Zuora Object | Zuora Field | Salesforce Object | Salesforce Field | Comments |
| --- | --- | --- | --- | --- |
| ProductRatePlan | zqu__ProductRatePlan__c |  |  |  |
|  | Active Currencies |  | zqu__ActiveCurrencies__c |  |
|  | Catalog Sync History |  | zqu__Catalog_Sync_History__c | Holds a lookup reference to the Catalog Sync History object. |
|  | Default |  | zqu__Default__c |  |
|  | Deleted |  | zqu__Deleted__c |  |
|  | Description |  | zqu__Description__c |  |
|  | Effective End Date |  | zqu__EffectiveEndDate__c |  |
|  | EffectiveEndDateTEXT |  | zqu__EffectiveEndDateTEXT__c |  |
|  | Effective Start Date |  | zqu__ EffectiveStartDate__c |  |
|  | EffectiveStartDateTEXT |  | zqu__EffectiveStartDateTEXT__c |  |
|  | Entity ID |  | zqu__EntityID__c |  |
|  | Full Name |  | zqu__ProductRatePlanFullName__c |  |
|  | Price Summary |  | zqu__Price_Summary__c |  |
|  | Product |  | zqu__Product__c | Holds a lookup reference to the Product object. |
|  | Sync Message |  | zqu__SyncMessage__c |  |
|  | Sync Status |  | zqu__SyncStatus__c |  |
|  | ZProduct |  | zqu__ZProduct__c |  |
|  | ZuoraId |  | zqu__ZuoraId__c |  |

## ProductRatePlanCharge: zuora\_\_productrateplancharge\_\_c

The following table lists the Zuora and Salesforce fields:

| Zuora Object | Zuora Field | Salesforce Object | Salesforce Field | Comments |
| --- | --- | --- | --- | --- |
| ProductRatePlanCharge | zqu__ProductRatePlanCharge__c |  |  |  |
|  | Accounting Code |  | zqu__AccountingCode2__c |  |
|  | Apply Discount To One Time Charges |  | zqu__Apply_Discount_To_One_Time_Charges__c |  |
|  | Apply Discount To Recurring Charges |  | zqu__Apply_Discount_To_Recurring_Charges__c |  |
|  | Apply Discount To Usage Charges |  | zqu__Apply_Discount_To_Usage_Charges__c |  |
|  | ApplyType (Internal) |  | zqu__Discount_Apply_Type__c | Specifies the type ofcharges a specificdiscount applies to.Contains one of the following values as the ApplyDiscountTo field of the ProductRatePlanCharge object.ONETIME (1)RECURRING (2)ONETIMERECURRING (3)USAGE (4)ONETIMEUSAGE (5)RECURRINGUSAGE (6)ONETIMERECURRINGUSAGE (7) |
|  | Bill Cycle Day |  | zqu__BillCycleDay__c |  |
|  | Bill Cycle Type |  | zqu__BillCycleType__c |  |
|  | Billing Period |  | zqu__RecurringPeriod__c | The "Specific Days" enum field has been added as a picklist option for the ProductRatePlanCharge.Zuora__RecurringPeriod__c field. This allows users to select specific days for the recurring period, providing more granular control over subscription billing cycles in Zuora. When displayed in a table, this picklist will allow for selecting and viewing customized recurring periods based on specific days, offering flexibility in managing billing schedules. |
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
|  | End Date Condition |  | zqu__EndDateCondition__c |  |
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
|  | Recognized Revenue Account |  | zqu__RecognizedRevenueAccount__c |  |
|  | Recognize revenue without deferral |  | zqu__Recognize_revenue_without_deferral__c |  |
|  | Revenue Recognition Rule Name |  | zqu__RevenueRecognitionRuleName__c |  |
|  | Rev Rec Code |  | zqu__RevRecCode__c |  |
|  | Rev Rec Code |  | zqu__RevRecCode2__c |  |
|  | Rev Rec Trigger Condition |  | zqu__RevRecTriggerCondition __c | Specifies when revenue recognition begins.Contains one of the following values:ContractEffectiveDateServiceActivationDateCustomerAcceptanceDate |
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
|  | Use Tenant DefaultFor Price Change |  | zqu__UseTenantDefaultForPriceChange __c |  |
|  | Weekly Bill Cycle Day |  | zqu__WeeklyBillCycleDay__c |  |
|  | Zuora Id |  | zqu__ZuoraId__c |  |

## Feature: zqu\_\_ZFeature\_\_c

The following table lists the Zuora and Salesforce fields:

| Zuora Object | Salesforce Field | Salesforce Object | Salesforce Field |
| --- | --- | --- | --- |
| Feature | zqu__ZFeature__c |  |  |
|  | Zuora Id | zqu__ZuoraId__c |  |
|  | Billing Entity | zqu__BillingEntity__c |  |
|  | Catalog Sync History | zqu__Catalog_Sync_History__c |  |
|  | EntityID | zqu__EntityID__c |  |
|  | Full Name | zqu__FeatureName__c |  |
|  | Code | zqu__Code__c |  |
|  | Description | zqu__Description__c |  |
|  | Deleted | zqu__Deleted__c |  |
|  | Status | zqu__Status2__c |  |
|  | Sync Message | zqu__SyncMessage__c |  |
|  | Sync Status | zqu__SyncStatus__c |  |
| To create features in the product catalog and use them in subscriptions and Zuora Quotes, you need to enable the following:The Entitlements setting in your tenant. Access to the Entitlements feature requires a specific edition of Zuora. See Zuora Editions for details.The Enable Feature Specification in Product and Subscriptions setting in the Billing Settings. |  |  |  |
