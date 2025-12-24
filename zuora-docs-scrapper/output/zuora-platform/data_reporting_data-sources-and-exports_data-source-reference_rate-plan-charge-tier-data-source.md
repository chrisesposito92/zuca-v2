---
title: "Rate Plan Charge Tier data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/rate-plan-charge-tier-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:47:36.306Z"
---

# Rate Plan Charge Tier data source

Data source to export RatePlanChargeTier data associated with a rate plan charge

## Overview

Use this data source to export RatePlanChargeTier data associated with a rate plan charge. Each rate plan charge tier represents one row in the export.

## Accessing the data source

​ Navigation: Reporting > Data Sources and select Rate Plan Charge Tier as the data source.

## Data source diagram

This diagram illustrates the hierarchical association between the base Rate Plan Charge Tier object and related (joined) Zuora objects.

![Diagram ilustrating the relationship between Rate Plan Charg eTier and related objects](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/57b74bd4-bf25-4881-92d2-feb9526a04c8?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjU3Yjc0YmQ0LWJmMjUtNDg4MS05MmQyLWZlYjk1MjZhMDRjOCIsImV4cCI6MTc2NjY4ODQ1NCwianRpIjoiZGRiMjIwMDJjMWVjNDJkNzllYjViM2QyZjlmODZlOTIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.CSqv5N_ycT48oi4jbEvuxftxV0HVCGkkglb7AT0-nQg)

## Data source details

The following sections provide data source details.

## Base object description

| Zuora Object | Description |
| --- | --- |
| Rate Plan Charge Tier | The prices for a rate plan charge. Each rate plan charge has at least one tier. Contains the following fields:Created By IDCreated DateCurrencyDiscount AmountDiscount PercentageEnding Unit - For usage charges of the overage pricing model, use the Included Units field instead of this field.IDIncluded UnitsOverage PricePricePrice FormatStarting UnitTierUpdated By IDUpdate Date |

## Related Zuora objects

Descriptions for related Zuora objects are listed in alphabetical order.

You can use the [Describe](https://www.zuora.com/developer/api-references/api/tag/Describe) operation to check whether a field is available in the data sources, SOAP object, or both.

| Zuora Object | Description |
| --- | --- |
| Amendment | The change made to subscription. Contains the following fields:Auto RenewCodeContract Effective DateCreated By IDCreated DateCurrent TermCurrent Term Period TypeCustomer Acceptance DateDescriptionEffective DateIDNameRenewal SettingRenewal TermRenewal Term Period TypeResume DateService Activation DateSpecific Update DateStatusSubscription IDSuspend DateTerm Start DateTerm TypeTypeUpdated By IDUpdated Date |
| Entity | The entity that the data relates to. Part of the Multi-entity feature. Contains the following fields:Address 1Address 2CityCountryCreated By IDCreated DateDisplay NameEmailIDNamePostal CodeStateUpdated By IDUpdated Date |
| Product | The product information. Contains the following fields:AllowFeatureChangesCategoryCreated By IDCreated DateDescriptionEffective End DateEffective Start DateIDNameNetSuite Integration IDNetSuite Integration StatusNetSuite Item TypeNetSuite Sync DateSKUUpdated By IDUpdated Date |
| Product Rate Plan | The rate plan coming from the product catalog. Contains the following fields:Created By IDCreated DateDescriptionEffective End DateEffective Start DateExternalldSourceSystemGradeIDNameUpdated By IDUpdated Date |
| Product Rate Plan Charge | The product rate plan charge information coming from the product catalog. Contains the following fields:Accounting CodeApply Discount ToBill Cycle DayBill Cycle TypeBilling PeriodBilling Period AlignmentBilling TimingCharge ModelCharge TypeCreated By IDCreated DateDefault QuantityDeferred Revenue AccountDescriptionDiscount LevelEnd Date ConditionIDIncluded UnitsLegacy Revenue ReportingList Price BaseMax QuantityMin QuantityNameNumber Of PeriodOverage Calculation OptionOverage Unused Units Credit OptionPrice Change OptionPrice Increase PercentageRating GroupRecognized Revenue AccountRevenue Recognition CodeRevenue Recognition Rule NameRevenue Recognition TriggerSmoothing ModelSpecific Billing PeriodTax CodeTax ModeTaxableTrigger EventUOMUp To How Many PeriodsUp To Periods TypeUpdated By IDUpdated DateUsage Records Rating OptionUse Discount Specific Accounting CodeUse Tenant Default For Price ChangeWeekly Bill Cycle Day |
| Rate Plan | Refers to the rate plan or pricing plan information associated with the subscription. Contains the following fields:Amendment Type: Note that a filter on this field using the unequal operator cannot return those Rate Plan records with a blank Amendment Type field.Created By IDCreated DateExternally Managed Plan ID: a text field. This field indicates the unique identifier of a rate plan purchased on a third-party store.IDInvoice Owner ID: the invoice owner ID of the subscription that contains the rate planNameOriginal Rate Plan ID: the original ID of the subscription rate plan, which is the ID of the subscription rate plan in the version-1 subscriptionSubscription Owner ID: the subscription owner ID of the subscription that contains the rate planSubscription Rate Plan NumberUpdated By IDUpdated Date |
| Rate Plan Charge | The charge information associated with the subscription. Contains the following fields:Accounting CodeApply Discount ToBill Cycle DayBill Cycle TypeBilling PeriodBilling Period AlignmentBilling TimingCharge ModelCharge NumberCharge TypeCharged Through DateCreated By IDCreated DateDMRCDTCVDescriptionDiscount LevelEffective End DateEffective Start DateEnd Date ConditionIDInvoice Owner ID: the invoice owner ID of the subscription that contains the rate plan chargeIs Last SegmentIs ProcessedList Price BaseMRRNameNumber of PeriodsOriginal IDOverage Calculation OptionOverage Unused Units Credit OptionPrice Change OptionPrice Increase PercentageProcessed Through DateQuantityRating GroupRevenue Recognition CodeRevenue Recognition Rule NameRevenue Recognition Trigger ConditionSegmentSpecific Billing PeriodSpecific End DateSubscription Id: the ID of the subscription that contains the rate plan chargeSubscription Owner ID: the subscription owner ID of the subscription that contains the rate plan chargeTCVTrigger DateTrigger EventUnit of MeasureUp To PeriodsUp To Periods TypeUpdated By IDUpdated DateVersionWeekly Bill Cycle Day |
| Subscription | The subscription to which the rate plan is associated. Contains the following fields:Auto RenewCancelled DateContract Acceptance DateContract Effective DateCpq Bundle Json IDCreated By IDCreated DateCreator Account IDCreator Invoice Owner IDCurrent TermCurrent Term Period TypeIDInitial TermInitial Term Period TypeInvoice Owner IDInvoice SeparateNameNotesOpportunity Close DateOpportunity NameOriginal Created DateOriginal IDPrevious Subscription IDQuote Business TypeQuote NumberQuote TypeRenewal SettingRenewal TermRenewal Term Period TypeService Activation DateStatusSubscription End DateSubscription Start DateTerm End DateTerm Start DateTerm TypeUpdated By IDUpdated DateVersion |
| Subscription Status History | The status history information of a subscription. Contains the following fields:Created By ID - The ID of the user who creates the subscription.Created Date - The date when the subscription is created.End Date - The latest date that the status ends.ID - The unique identifier of the subscription.Sort Order - The chronological order of the subscription statuses.Start Date - The effective start date of the status history.Status - The status of the subscription.Subscription Number - The subscription number that uniquely identifies each subscription.Updated By ID - The ID of the user who last updates the subscription.Updated Date - The date when the subscription is last updated. |
