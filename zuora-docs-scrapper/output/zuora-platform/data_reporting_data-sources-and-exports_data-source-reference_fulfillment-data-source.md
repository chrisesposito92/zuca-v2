---
title: "Fulfillment data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/fulfillment-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:43:48.218Z"
---

# Fulfillment data source

Data source to report on information for a given Fulfillment

Use the Fulfillment data source to report on information for a given Fulfillment. See Overview of Order Line Items for more information about the Fulfillment.

## Accessing the data source

Navigation: ​ Reporting > Data Sources and select Fulfillment as the data source.

## Data source details

The following base and related (joint) objects are available for Fulfillment.

## Base object description

The following table provides descriptions for the base object.

| Object | Description |
| --- | --- |
| Fulfillment | Information about the fulfillment.Contains the following fields:Bill Target DateCarrierCreated By IDCreated DateDescriptionExclude Item Billing From Revenue AccountingExclude Item Booking From Revenue AccountingExternal IdFulfillment DateFulfillment LocationFulfillment NumberFulfillment SystemFulfillment TypeIDQuantityStateTracking NumberUpdated By IDUpdated Date |

## Related object description

The following table provides descriptions for the related object.

| Object | Description |
| --- | --- |
| Order Line Item | Information about the order line item with which the fulfillment is associated.Contains the following fields:Accounting CodeAmended By Order OnAmountAmount Per UnitAmount Without TaxBill Target DateBilling RuleCreated By IDCreated DateDeferred Revenue Accounting CodeDescriptionDiscount - This field shows the total discount amount that is applied to an order line item after the Inline Discount Type and Inline Discount Per Unit fields are set.Exclude Item Booking from Revenue - Specifies whether to exclude non-revenue related rate plan charges and order line items from syncing to Zuora Revenue. This field is only available if you have enabled Zuora Billing - Revenue Integration.Exclude Item Billing from Revenue - Specifies whether to exclude non-revenue related invoice items, invoice item adjustments, credit memo items, and debit memo items from syncing to Zuora Revenue. This field is only available if you have enabled Zuora Billing - Revenue Integration.IDInline Discount Per Unit - This field is used in accordance with the Inline Discount Type field, in the following manner:If the Inline Discount Type field is set as Percentage, this field specifies the discount percentage for each unit of the order line item.If the Inline Discount Type field is set as FixedAmount, this field specifies the discount amount on each unit of the order line item.Inline Discount Type - Specifies the inline discount type, which can be Percentage, FixedAmount, or NoneUpdated DateItem CategoryItem NameItem NumberItem StateItem TypeList PriceList Price Per UnitOriginal Order DateOriginal Oder Line Item NumberOriginal Order NumberProduct CodeProduct Rate Plan Charge IDPurchase Order NumberQuantityQuantity Available For ReturnQuantity FulfilledQuantity Pending FulfillmentRecognized Revenue Accounting CodeRelated Subscription NumberRequires FulfillmentRevenue Recognition RuleSold To Contact IDTax CodeTax ModeTransaction End DateTransaction Start DateUOMUpdated By ID |
