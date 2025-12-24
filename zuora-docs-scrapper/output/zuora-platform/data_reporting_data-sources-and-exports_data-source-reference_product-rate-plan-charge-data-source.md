---
title: "Product Rate Plan Charge data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/product-rate-plan-charge-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:47:23.456Z"
---

# Product Rate Plan Charge data source

Data source to export ProductRatePlanCharge data

Use this data source to export [ProductRatePlanCharge](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/productrateplancharge) data, such as charge model and UOM. Each product rate plan charge represents one row in the export, including [Product](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/product) and [ProductRatePlan](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/productrateplan) information.

## Objects available in the data source

The following sections list objects available in the data source.

## Base object

| Zuora Object | Description |
| --- | --- |
| ProductRatePlanCharge | Fields on a rate plan charge. It includes the following fields. See the field description in the ProductRatePlanCharge object reference.Accounting CodeApply Discount ToBill Cycle DayBill Cycle TypeBilling PeriodBilling Period AlignmentBilling TimingCharge ModelCharge TypeCreated By IDCreated DateDefault QuantityDeferred Revenue AccountDescriptionDiscount Class IDDiscount LevelEnd Date ConditionExclude Item Booking from Revenue Accounting - Specifies whether to exclude non-revenue related rate plan charges and order line items from syncing to Zuora Revenue. This field is only available if you have enabled the Billing - Revenue Integration feature or the Order to Revenue feature. The Billing - Revenue Integration feature and the Order to Revenue feature only support the billing-based revenue recognition for fixed-amount discounts, so booking transactions must be excluded from revenue accounting. You can exclude the booking transactions by setting the Exclude Item Booking from Revenue Accounting field to Yes.Exclude Item Billing from Revenue Accounting - Specifies whether to exclude non-revenue related invoice items, invoice item adjustments, credit memo items, and debit memo items from syncing to Zuora Revenue. This field is only available if you have enabled the Billing - Revenue Integration feature or the Order to Revenue feature.IDIncluded UnitsIs Stacked Discount - Specifies whether the discount percentage will be calculated by stacking with other discount percentages. This field applies only to the discount percentage charge model. For more information, see Discount charge models.Legacy Revenue ReportingList Price BaseMax QuantityMin QuantityNameNumber of PeriodOverage Calculation OptionOverage Unused Units Credit OptionPrice Change OptionPrice Increase PercentageRating GroupRecognized Revenue AccountReflect Discount In Net Amount - indicates whether reflects the net amount of the Delivery Pricing charges after a percentage discountRevenue Recognition CodeRevenue Recognition Rule NameRevenue Recognition TriggerSmoothing ModelSpecific Billing PeriodTax CodeTax ModeTaxableTrigger EventUOMUp To How Many PeriodsUp To Periods TypeUpdated By IDUpdated DateUsage Records Rating OptionUse Discount Specific Accounting CodeUse Tenant Default For Price ChangeWeekly Bill Cycle DayThe following fields are only available if you have the Prepaid with Drawdown feature enabled.Is PrepaidPrepaid Operation TypePrepaid UOMPrepaid QuantityPrepaid Total QuantityValidity Period TypeCredit OptionDrawdown UOMDrawdown Rate |

## Related objects

| Object | Description |
| --- | --- |
| Entity | The entity that the data relates to. Part of the Multi-entity feature. Contains the following fields:Address 1Address 2CityCountryCreated By IDCreated DateDisplay NameEmailIDNamePostal CodeStateUpdated By IDUpdated Date |
| Product | Product information. |
| Product Rate Plan | Pricing plan information from the product catalog. |
| Accounts Receivable Accounting Code | Accounting code for accounts receivable. |
| Recognized Revenue Accounting Code | Accounting code for recognized revenue. |
| Deferred Revenue Accounting Code | Accounting code for deferred revenue. |
| Adjustment Liability Accounting Code | Accounting code for adjustment liability. |
| Adjustment Revenue Accounting Code | Accounting code for adjustment revenue. |
| Contract Asset Accounting Code | Accounting code for contract asset. |
| Contract Liability Accounting Code | Accounting code for contract liability. |
| Contract Recognized Revenue Accounting Code | Accounting code for contract recognized revenue. |
| Unbilled Receivables Accounting Code | Accounting code for unbilled receivables. |
