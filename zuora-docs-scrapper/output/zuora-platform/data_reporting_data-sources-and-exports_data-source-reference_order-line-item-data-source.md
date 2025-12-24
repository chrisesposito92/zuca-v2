---
title: "Order Line Item data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/order-line-item-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:46:22.625Z"
---

# Order Line Item data source

Data source to report on information for a given Order Line Item

Note:

The Order Line Items feature is now generally available. You need to enable the Orders or Orders Harmonization feature to access the Order Line Items feature.

Use the Order Line Item data source to report on information for a given Order Line Item. See Overview of Order Line Items for more information about the order line item.

## Accessing the data source

​ Navigation: Reporting > Data Sources and select Order Line Item as the data source.

## Data source details

The following base and related (joint) objects are available for an order line item.

## Base object description

The following table provides descriptions for the base object.

| Object | Description |
| --- | --- |
| Order Line Item | Information about the order line item.This is the base object for the Order Line Item Data Source Export.Contains the following fields:Accounting CodeAmended By Order OnAmountAmount Per UnitAmount Without TaxBill Target DateBilling RuleCreated By IDCreated DateCurrencyDeferred Revenue Accounting CodeDescriptionDiscount - This field shows the total discount amount that is applied to an order line item after the Inline Discount Type and Inline Discount Per Unit fields are set.Exclude Item Booking from Revenue - Specifies whether to exclude non-revenue related rate plan charges and order line items from syncing to Zuora Revenue. This field is only available if you have enabled the Order to Revenue feature or the Billing - Revenue Integration feature. The Order to Revenue feature or the Billing - Revenue Integration feature only supports the billing-based revenue recognition for fixed-amount discounts. Booking transactions must be excluded from revenue accounting. You can exclude the booking transactions by setting the Exclude Item Booking from Revenue Accounting field.Exclude Item Billing from Revenue - Specifies whether to exclude non-revenue related invoice items, invoice item adjustments, credit memo items, and debit memo items from syncing to Zuora Revenue. This field is only available if you have enabled Zuora Billing - Revenue Integration.IDInline Discount Per Unit - This field is used in accordance with the Inline Discount Type field, in the following manner:If the Inline Discount Type field is set as Percentage, this field specifies the discount percentage for each unit of the order line item.If the Inline Discount Type field is set as FixedAmount, this field specifies the discount amount on each unit of the order line item.Inline Discount Type - Specifies the inline discount type, which can be Percentage, FixedAmount, or None.Invoice Group NumberItem CategoryItem NameItem NumberItem StateItem TypeList PriceList Price Per UnitOriginal Order DateOriginal Order Line Item NumberOriginal Order NumberProduct CodeProduct Rate Plan Charge IDPurchase Order NumberQuantityQuantity Available For ReturnQuantity FulfilledQuantity Pending FulfillmentRecognized Revenue Accounting CodeRelated Subscription NumberRequires FulfillmentRevenue Recognition RuleRecognized Revenue Accounting CodeSold To Contact IDTax CodeTax ModeTransaction Start DateTransaction End DateUOMUpdated By IDUpdated Date |

## Related object description

The following table provides descriptions for related objects.

| Object | Description |
| --- | --- |
| Account | Information about the customer account that owns the order line item. |
| Adjustment Liability Accounting Code | The accounting code for customers using Zuora Billing - Revenue Integration. Contains the following fields:CategoryCreated By IDCreated DateGL Account NameGL Account NumberIDNameNotesStatusTypeUpdated By IDUpdated Date |
| Adjustment Revenue Accounting Code | The accounting code for customers using Zuora Billing - Revenue Integration. Contains the following fields:CategoryCreated By IDCreated DateGL Account NameGL Account NumberIDNameNotesStatusTypeUpdated By IDUpdated Date |
| Bill To | The contact associated with the account to whom your product or service is billed. |
| Contract Asset Accounting Code | The accounting code for customers using Zuora Billing - Revenue Integration. Contains the following fields:CategoryCreated By IDCreated DateGL Account NameGL Account NumberIDNameNotesStatusTypeUpdated By IDUpdated Date |
| Contract Liability Accounting Code | The accounting code for customers using Zuora Billing - Revenue Integration. Contains the following fields:CategoryCreated By IDCreated DateGL Account NameGL Account NumberIDNameNotesStatusTypeUpdated By IDUpdated Date |
| Contract Recognized Revenue Accounting Code | The accounting code for customers using Zuora Billing - Revenue Integration. Contains the following fields:CategoryCreated By IDCreated DateGL Account NameGL Account NumberIDNameNotesStatusTypeUpdated By IDUpdated Date |
| Default Payment Method | The default payment method used to make payments. |
| Deferred Revenue Accounting Code | Contains the following fields:CategoryCreated By IDCreated DateGL Account NameGL Account NumberIDNameNotesStatusTypeUpdated By IDUpdated Date |
| Sold To Contact | The sold-to contact information. Contains the following fields:Account IDAddress 1Address 2CityContact TypeCountryCountyCreated By IDCreated DateDescriptionFaxFirst NameHome PhoneIDLast NameMobile PhoneNick NameOther PhoneOther Phone TypePersonal EmailPostal CodeState/ProvinceTax RegionUpdated By IDUpdated DateWork EmailWork Phone |
| Order | The order that contains the order line item. |
| Original Order | The original order that was selected for creating the return order carrying the return order line item.Contains the following fields:CategoryCreated By IDCreated By Migration - A Boolean value. The value "true" indicates this order is auto-generated by the system for a subscription or amendment created through the Subscribe and Amend UI and APIs.Created DateDescriptionIDOrder DateOrder NumberState - The Order state. The possible value is "Executing", "Complete", or "Canceled".Status - The Order status. The possible value is "Completed" or "Pending".Updated By IDUpdatedDate |
| Original Order Line Item | The originally sold order line item in the Original Order.This information is only available for the returned order line item.Contains the following fields:Accounting CodeAmended By Order OnAmountAmount Per UnitAmount Without TaxBill Target DateBilling RuleCreated By IDCreated DateDeferred Revenue Accounting CodeDescriptionDiscount - This field shows the total discount amount that is applied to an order line item after the Inline Discount Type and Inline Discount Per Unit fields are set.Exclude Item Booking from Revenue - Specifies whether to exclude non-revenue related rate plan charges and order line items from syncing to Zuora Revenue. This field is only available if you have enabled Zuora Billing - Revenue Integration.Exclude Item Billing from Revenue - Specifies whether to exclude non-revenue related invoice items, invoice item adjustments, credit memo items, and debit memo items from syncing to Zuora Revenue. This field is only available if you have enabled Zuora Billing - Revenue Integration .IDInline Discount Per Unit - This field is used in accordance with the Inline Discount Type field, in the following manner:If the Inline Discount Type field is set as Percentage, this field specifies the discount percentage for each unit of the order line item.If the Inline Discount Type field is set as FixedAmount, this field specifies the discount amount on each unit of the order line item.Inline Discount Type - Specifies the inline discount type, which can be Percentage, FixedAmount, or None.Item CategoryItem NameItem NumberItem StateItem TypeList PriceList Price Per UnitOriginal Order DateOriginal Order Line Item NumberOriginal Order NumberProduct CodeProduct Rate Plan Charge IDPurchase Order NumberQuantityQuantity Available For ReturnQuantity FulfilledQuantity Pending FulfillmentRecognized Revenue Accounting CodeRelated Subscription NumberRequires FulfillmentRevenue Recognition RuleRecognized Revenue Accounting CodeSold To Contact IDTax CodeTax ModeTransaction Start DateTransaction End DateUOMUpdated By IDUpdated Date |
| Parent Account | Refers to the parent account associated with the customer account, if applicable. |
| Product | The product information. Contains the following fields:AllowFeatureChangesCategoryCreated By IDCreated DateDA LabelDescriptionEffective End DateEffective Start DateIDNameSKUUpdated By IDUpdated Date |
| Product Rate Plan | The product rate plan information. Contains the following fields:Created By IDCreated DateDescriptionEffective End DateEffective Start DateExternalIdSourceSystemIDNameUpdated By IDUpdated Date |
| Product Rate Plan Charge | The product rate plan charge information. Contains the following fields:Accounting CodeApply Discount ToBill Cycle DayBill Cycle TypeBilling PeriodBilling Period AlignmentBilling TimingCharge ModelCharge TypeCreated By IDCreated DateCredit OptionDefault QuantityDeferred Revenue AccountDescriptionDiscount ClassDiscount LevelDrawdown RateDrawdown UOMEnd Date ConditionExclude Item Billing From Revenue AccountingExclude Item Booking From Revenue AccountingIDIncluded UnitsIs PrepaidLegacy Revenue ReportingList Price BaseMax QuantityMin QuantityNameNumber Of PeriodOverage Calculation OptionOverage Unused Units Credit OptionPrepaid Operation TypePrepaid QuantityPrepaid Total QuantityPrepaid UOMPrice Change OptionPrice Increase PercentageRating GroupRecognized Revenue AccountRevenue Recognition CodeRevenue Recognition Rule NameRevenue Recognition TriggerSmoothing ModelSpecific Billing PeriodTax CodeTax ModeTaxableTrigger EventUOMUp To How Many PeriodsUp To Periods TypeUpdated By IDUpdated DateUsage Records Rating OptionUse Discount Specific Accounting CodeUse Tenant Default For Price ChangeValidity Period TypeWeekly Bill Cycle Day |
| Recognized Revenue Accounting Code | The accounting code. Contains the following fields:CategoryCreated By IDCreated DateGL Account NameGL Account NumberIDNameNotesStatusTypeUpdated By IDUpdated Date |
| Sold To | The ID of a contact that belongs to the billing account of the order line item. Contains the following fields:Account IDAddress 1Address 2CityCountryCountyCreated By IDCreated DateDescriptionFaxFirst NameHome PhoneIDLast NameMobile PhoneNick NameOther PhoneOther Phone TypePersonal EmailPostal CodeState/ProvinceTax RegionUpdated By IDUpdated DateWork EmailWork Phone |
| Sold To Contact Snapshot | The snapshot of the ID for an account used as the sold-to contact of an order line item. Contains the following fields:Account IDAddress 1Address 2CityContact IDCountryCountyCreated By IDCreated DateDescriptionFaxFirst NameHome PhoneIDLast NameMobile PhoneNick NameOther PhoneOther Phone TypePersonal EmailPostal CodeState/ProvinceTax RegionUpdated By IDUpdated DateWork EmailWork Phone |
| Unbilled Receivables Accounting Code | The accounting code for customers using Zuora Billing - Revenue Integration. Contains the following fields:CategoryCreated By IDCreated DateGL Account NameGL Account NumberIDNameNotesStatusTypeUpdated By IDUpdated Date |
