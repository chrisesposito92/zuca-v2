---
title: "Product Rate Plan Charge Tier data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/product-rate-plan-charge-tier-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:47:25.967Z"
---

# Product Rate Plan Charge Tier data source

Data source to export data associated with a product rate plan charge tier

Use this data source to export data associated with a product rate plan charge tier. One row in the export represents one product rate plan charge tier.

## Objects available in this data source

This diagram illustrates the hierarchical association between the base Product Rate Plan Charge Tier object and related (joined) Zuora objects.

![Diagram illustrating the relationship between Product Rate Plan Charge Tier and related objects](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/dc11712d-3673-41d6-b4c3-2e13ca433b67?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImRjMTE3MTJkLTM2NzMtNDFkNi1iNGMzLTJlMTNjYTQzM2I2NyIsImV4cCI6MTc2NjY4ODQ0NCwianRpIjoiOTEzNDIzNTY3MzRlNDBjNThkMDFiOGE0ZmFlNWYxZTgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.lY5w35nnAYsM8SUV7yluQBdR6Z0tgJKWtuf8K0HNKlE)

## Base object

| Zuora Object | Description |
| --- | --- |
| Product Rate Plan Charge Tier | The prices for a product rate plan charge. Each product rate plan charge has at least one tier.This is the base Zuora object for the Product Rate Plan Charge Tier data source export and includes the following fields:ActiveCreated By IDCreated DateCurrencyDiscount AmountDiscount PercentageEnding UnitIDIncluded UnitsOverage PricePricePrice FormatStarting UnitTierUpdated By IDUpdated Date |

## Related objects

Descriptions for related Zuora objects are listed in alphabetical order.

| Zuora Object | Description |
| --- | --- |
| Entity | The entity that the data relates to. Part of the Multi-entity feature. Contains the following fields:Address 1Address 2CityCountryCreated By IDCreated DateDisplay NameEmailIDNamePostal CodeStateUpdated By IDUpdated Date |
| Product | The product information. Contains the following fields:AllowFeatureChangesCategoryCreated By IDCreated DateDescriptionEffective End DateEffective Start DateIDNameNetSuite Integration IDNetSuite Integration StatusNetSuite Item TypeNetSuite Sync DateSKUUpdated By IDUpdated Date |
| Product Rate Plan | The rate plan coming from the product catalog. Contains the following fields:Created By IDCreated DateDescriptionEffective End DateEffective Start DateExternalldSourceSystemGradeIDNameUpdated By IDUpdated Date |
| Product Rate Plan Charge | The product rate plan charge information coming from the product catalog. Contains the following fields:Accounting CodeApply Discount ToBill Cycle DayBill Cycle TypeBilling PeriodBilling Period AlignmentBilling TimingCharge ModelCharge TypeCreated By IDCreated DateDefault QuantityDeferred Revenue AccountDescriptionDiscount LevelEnd Date ConditionIDIncluded UnitsLegacy Revenue ReportingList Price BaseMax QuantityMin QuantityNameNumber Of PeriodOverage Calculation OptionOverage Unused Units Credit OptionPrice Change OptionPrice Increase PercentageRating GroupRecognized Revenue AccountRevenue Recognition CodeRevenue Recognition Rule NameRevenue Recognition TriggerSmoothing ModelSpecific Billing PeriodTax CodeTax ModeTaxableTrigger EventUOMUp To How Many PeriodsUp To Periods TypeUpdated By IDUpdated DateUsage Records Rating OptionUse Discount Specific Accounting CodeUse Tenant Default For Price ChangeWeekly Bill Cycle Day |
