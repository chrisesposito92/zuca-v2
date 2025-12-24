---
title: "Sync field mapping of subscription and related objects for 360"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-360-and-zuora-360/zuora-360-overview_1/synchronize-data-from-zuora-to-salesforce/zuora-360-objects-mapping/sync-field-mapping-of-subscription-and-related-objects-for-360"
product: "zuora-platform"
scraped_at: "2025-12-24T18:39:43.742Z"
---

# Sync field mapping of subscription and related objects for 360

This article shows how the Zuora subscription and related objects and their fields are mapped and synchronized to Salesforce objects and fields in Zuora 360.

Note:

Each sync objects pair is marked as <Zuora object> : <Salesforce object>.

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


## Subscription : Zuora\_\_Subscription\_\_c

| Zuora Object | Zuora Field | Salesforce Object | Salesforce Field | Comments |
| --- | --- | --- | --- | --- |
| Subscription | Zuora__Subscription__c |  |  |  |
|  | AutoRenew |  | Zuora__AutoRenew__c |  |
|  | CancelledDate |  | Zuora__CancelledDate __c |  |
|  | ContractAcceptanceDate |  | Zuora__ ContractAcceptanceDate __c |  |
|  | ContractEffectiveDate |  | Zuora__ ContractEffectiveDate__c |  |
|  | CurrentTerm |  | Zuora__CurrentTerm__c | Supported in Zuora 360, Version 3.40+.To use the field in Order Builder, use Zuora WSDL, Version 80+. |
|  | CurrentTermPeriodType |  | Zuora__ CurrentTermPeriodType__c | Supported in Zuora 360, Version 3.40+.To use the field in Order Builder, use Zuora WSDL, Version 80+. |
|  | Id |  | Zuora__Zuora_Id__c |  |
|  | Id |  | Zuora__External_Id__c (External ID) |  |
|  | InitialTerm |  | Zuora__InitialTerm__c |  |
|  | InitialTermPeriodType |  | Zuora__ InitialTermPeriodType__c | Supported in Zuora 360, Version 3.40+.To use the field in Order Builder, use Zuora WSDL, Version 80+. |
|  | AccountId |  | Zuora__InvoiceOwner__c |  |
|  | MRR (internal) |  | Zuora__MRR__c | Monthly Recurring Revenue for this subscription |
|  | Name |  | Name |  |
|  | NextChargeDate (internal) |  | Zuora__ NextChargeDate__c | An internal date when the charge is to be invoiced next.If you want to sync this field in Real-time Sync and Turbo Sync, you need to have the tenant level setting turned on.Submit a request at Zuora Global Support to enable this feature or service. |
|  | Notes |  | Zuora__Notes__c |  |
|  | OpportunityCloseDate __QT |  | Zuora__ OpportunityCloseDate__c |  |
|  | OpportunityName__QT |  | Zuora__OpportunityName __c |  |
|  | OriginalCreatedDate |  | Zuora__ OriginalCreated_Date__c |  |
|  | OriginalId |  | Zuora__OriginalId__c |  |
|  | PreviousSubscriptionId |  | Zuora__ PreviousSubscriptionId__c |  |
|  | QuoteBusinessType __QT |  | Zuora__ QuoteBusinessType__c |  |
|  | QuoteNumber__QT |  | Zuora__QuoteNumber__c |  |
|  | QuoteType__QT |  | Zuora__QuoteType__c |  |
|  | RenewalTerm |  | Zuora__ RenewalTerm__c |  |
|  | RenewalTermPeriodType |  | Zuora__ RenewalTermPeriodType__c | Supported in Zuora 360, Version 3.40+.To use the field in Order Builder, use Zuora WSDL, Version 80+. |
|  | SubscriptionEndDate |  | Zuora__ SubscriptionEndDate__c |  |
|  | SubscriptionStartDate |  | Zuora__ SubscriptionStartDate__c |  |
|  | ServiceActivationDate |  | Zuora__ ServiceActivationDate__c |  |
|  | TCV (internal) |  | Zuora__TCV__c | Total Contract Value of this subscription |
|  | TermStartDate |  | Zuora__ TermStartDate__c |  |
|  | TermEndDate |  | Zuora__ TermEndDate__c |  |
|  | TermEndDate |  | Zuora__ NextRenewalDate__c |  |
|  | TermType |  | Zuora__ TermSettingType__c |  |
|  | Version |  | Zuora__Version__c |  |
|  | SubscriptionStatus |  | Zuora__Status__c |  |
|  | SubscriptionNumber |  | Zuora__SubscriptionNumber__c |  |
|  | Account |  | Zuora__Account__c |  |
|  | BillingAccount |  | Zuora__CustomerAccount__c |  |

## NextChargeDate

The subscription's Next Charge Date is the rate plan charge's Invoice Through Date (Zuora API Name: RatePlanCharge.ChargedThroughDate) in Zuora. For example, if the charge was last invoiced from 05/01/2014 to 05/31/2014, the charge's Invoice Through Date and subscription's Next Charge Date would be 06/01/2014. If the subscription has multiple rate plan charges which have different billing periods, it would be the earliest Invoice Through Date of one the charges.

## Account : Zuora\_\_Subscription\_\_c

| Zuora Object | Zuora Field | Salesforce Object | Salesforce Field | Comments |
| --- | --- | --- | --- | --- |
| Account (referenced through AccountId) |  | Zuora__Subscription__c |  |  |
|  | CrmId |  | Zuora__Account__c | A foreign key reference to Account |
|  | Currency |  |  | CurrencyIsoCode |

## Product : Zuora\_\_Product\_\_c

| Zuora Object | Zuora Field | Salesforce Object | Salesforce Field |
| --- | --- | --- | --- |
| Product | Zuora__Product__c |  |  |
|  | Name |  | Name |
|  | Id |  | Zuora__External_Id__c |
|  | Description |  | Zuora__Description__c |
|  | EffectiveEndDate |  | Zuora__EffectiveEndDate__c |
|  | SKU |  | Zuora__SKU__c |

## RatePlan : Zuora\_\_SubscriptionRatePlan\_\_c

| Zuora Object | Zuora Field | Salesforce Object | Salesforce Field |
| --- | --- | --- | --- |
| RatePlan | Zuora__SubscriptionRatePlan__c |  |  |
|  | AmendmentId |  | Zuora__AmendmentId__c |
|  | AmendmentSubscriptionRatePlanId |  | Zuora__AmendmentSubscriptionRatePlanId __c |
|  | AmendmentType |  | Zuora__AmendmentType__c |
|  | Id |  | Zuora__External_Id__c |
|  | Name |  | Name |
|  | ProductRatePlanId |  | Zuora__ProductRatePlanId__c |
|  | SubscriptionId |  | Zuora__Subscription__c |
|  | OriginalSrpId (Id of initial RatePlan) |  | Zuora__OriginalSubscriptionRatePlanId__c |

## RatePlan : Zuora\_\_SubscriptionProductFeature\_\_c

Note: To create features in the product catalog and use them in subscriptions and Zuora Quotes, you need to enable the following:

-   The Entitlements setting in your tenant.Access to the Entitlements feature requires a specific edition of Zuora. See [Zuora Editions](/entitlements/current-entitlements/zuora-editions)
-   The [Enable Feature Specification in Product and Subscriptions](/zuora-billing/set-up-zuora-billing/billing-settings-configuration) setting in the Billing Settings.

| Zuora Object | Zuora Field | Salesforce Object | Salesforce Field |
| --- | --- | --- | --- |
| RatePlan (referenced through SubscriptionProductFeature.RatePlanId) | Zuora__SubscriptionProductFeature__c |  |  |
|  | Description |  | Zuora__RatePlanDescription__c |
|  | EffectiveEndDate |  | Zuora__RatePlanEffectiveDate__c |
|  | Name |  | Zuora__RatePlanName__c |
|  | Id |  | Zuora__RatePlanZuoraId__c |

## RatePlanCharge : Zuora\_\_UnitOfMeasure\_\_c

| Zuora Object | Zuora Field | Salesforce Object | Salesforce Field | Comments |
| --- | --- | --- | --- | --- |
| RatePlanCharge | Zuora__UnitOfMeasure__c |  |  |  |
|  | UOM |  | Name | Unit Of Measure |

## RatePlanCharge:Zuora\_\_SubscriptionProductCharge\_\_c

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
|  | Id |  | Zuora__External_Id__c (External ID) |  |
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

## RatePlanChargeTier : Zuora\_\_SubscriptionRatePlanChargeTier\_\_c

Note:

This sync relationship is deprecated for Zuora 360. We recommend that you use Zuora 360+ instead and enable the Rate Plan Charge Tier History sync under the Subscription History.

## Product : Zuora\_\_SubscriptionProductCharge\_\_c

| Zuora Object | Zuora Field | Salesforce Object | Salesforce Field |
| --- | --- | --- | --- |
| Product (referenced through ProductRatePlanChargeId.ProductRatePlanId.ProductId) | Zuora__SubscriptionProductCharge__c |  |  |
|  | Description |  | Zuora__Description__c |
|  | Name |  | Zuora__ProductName__c |
|  | SKU |  | Zuora__ProductSKU__c |
|  | EffectiveEndDate |  | Zuora__ProductEffectiveEndDate__c |

## ProductRatePlan : Zuora\_\_SubscriptionProductCharge\_\_c

| Zuora Object | Zuora Field | Salesforce Object | Salesforce Field |
| --- | --- | --- | --- |
| ProductRatePlan (referenced through ProductRatePlanChargeId.ProductRatePlanId) | Zuora__SubscriptionProductCharge__c |  |  |
|  | Description |  | Zuora__Description__c |
|  | Name |  | Zuora__ RatePlanName__c |
|  | SKU |  | Zuora__ProductSKU__c |
|  | EffectiveEndDate |  | Zuora__RatePlanEffectiveEndDate__c |

## SubscriptionProductFeature : Zuora\_\_SubscriptionProductFeature\_\_c

Note: To create features in the product catalog and use them in subscriptions and Zuora Quotes, you need to enable the following:

-   The Entitlements setting in your tenant.Access to the Entitlements feature requires a specific edition of Zuora. See [Zuora Editions](/entitlements/current-entitlements/zuora-editions)
-   The [Enable Feature Specification in Product and Subscriptions](/zuora-billing/set-up-zuora-billing/billing-settings-configuration) setting in the Billing Settings.

| Zuora Object | Zuora Field | Salesforce Object | Salesforce Field | Comments |
| --- | --- | --- | --- | --- |
| SubscriptionProductFeature | Zuora__SubscriptionProductFeature__c |  |  |  |
|  | Id |  | Zuora__External_Id__c |  |
|  | Name |  | Name | The feature name. Up to 80 characters are supported. |
|  | Description |  | Zuora__FeatureDescription__c |  |
|  | Name |  | Zuora__FeatureName__c | The full name of the feature |

## Feature : Zuora\_\_SubscriptionProductFeature\_\_c

Note: To create features in the product catalog and use them in subscriptions and Zuora Quotes, you need to enable the following:

-   The Entitlements setting in your tenant.Access to the Entitlements feature requires a specific edition of Zuora. See [Zuora Editions](/entitlements/current-entitlements/zuora-editions)
-   The [Enable Feature Specification in Product and Subscriptions](/zuora-billing/set-up-zuora-billing/billing-settings-configuration) setting in the Billing Settings.

| Zuora Object | Zuora Field | Salesforce Object | Salesforce Field |
| --- | --- | --- | --- |
| Feature (referenced through SubscriptionProductFeature.FeatureId) | Zuora__SubscriptionProductFeature__c |  |  |
|  | Code |  | Zuora__FeatureCode__c |

## Product : Zuora\_\_SubscriptionProductFeature\_\_c

Note: To create features in the product catalog and use them in subscriptions and Zuora Quotes, you need to enable the following:

-   The Entitlements setting in your tenant.Access to the Entitlements feature requires a specific edition of Zuora. See [Zuora Editions](/entitlements/current-entitlements/zuora-editions)
-   The [Enable Feature Specification in Product and Subscriptions](/zuora-billing/set-up-zuora-billing/billing-settings-configuration) setting in the Billing Settings.

| Zuora Object | Zuora Field | Salesforce Object | Salesforce Field |
| --- | --- | --- | --- |
| Product (referenced through SubscriptionProductFeature.RatePlanId, RatePlan.ProductRatePlanId, and ProductRatePlan.ProductId) | Zuora__SubscriptionProductFeature__c |  |  |
|  | Description |  | Zuora__ProductDescription__c |
|  | EffectiveEndDate |  | Zuora__ProductEffectiveEndDate__c |
|  | SKU |  | Zuora__ProductSKU__c |
|  | Id |  | Zuora__ProductZuoraId__c |
|  | Name |  | Zuora__ProductName__c |

## Subscription : Zuora\_\_SubscriptionProductFeature\_\_c

Note: To create features in the product catalog and use them in subscriptions and Zuora Quotes, you need to enable the following:

-   The Entitlements setting in your tenant.Access to the Entitlements feature requires a specific edition of Zuora. See [Zuora Editions](/entitlements/current-entitlements/zuora-editions)
-   The [Enable Feature Specification in Product and Subscriptions](/zuora-billing/set-up-zuora-billing/billing-settings-configuration) setting in the Billing Settings.

| Zuora Object | Zuora Field | Salesforce Object | Salesforce Field | Comments |
| --- | --- | --- | --- | --- |
| Subscription (referenced through SubscriptionProductFeature.RatePlanId and RatePlan.SubscriptionId) | Zuora__SubscriptionProductFeature__c |  |  |  |
|  | Id |  | Zuora__Subscription__c | Holds a look-up relationship to Subscription. |
