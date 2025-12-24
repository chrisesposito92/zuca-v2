---
title: "Display usage charge breakdown"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/display-usage-charge-breakdown"
product: "zuora-billing"
scraped_at: "2025-12-24T05:49:38.329Z"
---

# Display usage charge breakdown

This topic explains how to display a detailed breakdown of usage charges on invoices using the UsageSummary.RateDetail merge field, highlighting its benefits for tiered and volume-based models.

This merge field lets your customers see a clear breakdown of their usage charges on their invoices.

Note:

We recommend that you do not use this merge field to break down usage charges for on-demand usage rating.

## Tiered and volume-based usage

Usage charges are calculated in a variety of methods, including complex volume or tiered models, and can be difficult to decipher. It is important to display these prices with clarity on an invoice to reduce the number of questions you get around these calculations.

## UsageSummary.RateDetail Merge field

You must upgrade your templates to the invoice file generation service to use the `UsageSummary.RateDetail` merge field.

The `UsageSummary.RateDetail` merge field makes it easy for your customers to see how their usage charges are calculated. It is especially useful for displaying charges that use the tiered and volume charge models, as these can use more complex rate calculations.

![Invoice](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/34f7f805-96f9-4e04-bc91-3940e8800764?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjM0ZjdmODA1LTk2ZjktNGUwNC1iYzkxLTM5NDBlODgwMDc2NCIsImV4cCI6MTc2NjY0MTc3NSwianRpIjoiNjgzZTI4NTgwMTI4NGRkNTg1MThhOTk1OWUyNzJiZmYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.mSVirEHywR98oWTuB4FNI87NU6jJAcbm6KG_YV25TIQ)

If you currently use the `UsageSummary.ListPrice` merge field to display charges using the tiered or volume charge models, you should consider using `UsageSummary.RateDetail` instead.

`UsageSummary.RateDetail` displays more information than `UsageSummary.ListPrice` , such as the number of units consumed, making it easier for your customers to see how their usage charges are calculated.

## How to insert UsageSummary.RateDetail

Insert the following UsageSummary.RateDetail merge field into your custom invoice templates. See [Customize Invoice Templates Using Word Mail Merge](/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/billing-document-templates-customization-using-word-mail-merge) for steps on how to insert a merge field.

`{MERGEFIELD UsageSummary.RateDetail​ \* MERGEFORMAT​}`

See [Merge Fields for Invoices](/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/merge-fields-for-invoices) for a complete list of merge fields.

Merge fields have two views; field view and code view. To toggle views for all merge fields, press Alt+F9 ( Option+F9​ on a Mac).

To toggle the view for a single merge field, move your cursor onto it and press Shift+F9 (also Shift+F9 on a Mac).

## Example template

Here is an example of a custom invoice template that uses this merge field in a usage summary table. The `UsageSummary.RateDetail` merge field appears in code view in the Rate Detail column:

| USAGE SUMMARY TABLE |  |  |  |  |
| --- | --- | --- | --- | --- |
| Charge Details | Period | Used | Rate Detail | TOTAL |
| «TableStart: UsageSummary»Charge name: «UsageSummary. ChargeName»Charge Description: «UsageSummary. ChargeDescription» | «UsageSummary. UsagePeriod» | «. Quantity» | «UsageSummary. RateDetail» | Subtotal: «UsageSummary.AmountWithoutTax»Tax: «UsageSummary.TaxAmount»TOTAL: «UsageSummary.ExtendedPrice» «TableEnd:UsageSummary» |

## How UsageSummary.RateDetail is displayed on invoices

The information displayed in the generated invoice depends on the charge model used.

Note:

Currently, the `UsageSummary.RateDetail` merge field is not supported on the on-demand usage model.

## Tiered Charge model

For charges that use the tiered charge model, `UsageSummary.RateDetail` displays:

Tier level: Tier unit range, Units consumed x Price per unit = Tier subtotal Total charge for all tiers

`Tier 1: 1-100, $0.00 Flat Fee Tier 2: 101-200, 100 Each(s) x $2.00/Each = $200.00 Tier 3: >=201, 10 Each(s) x $5.00/Each = $50.00 Total = $250.00`

## Volume Charge model

For charges that use the volume charge model, `UsageSummary.RateDetail` displays:

Tier level: Tier volume, Units consumed x Price per unit = Total charge

`Tier 3: >=101, 50 Each(s) x $10.00/Each = $500.00`

## Per Unit Charge model

For charges that use the per unit charge model, `UsageSummary.RateDetail` displays:

Units consumed x Price per unit = Total charge

`125 Each(s) x $20.00/Each = $2500.00`

## Flat Fee Charge model

For charges that use the flat fee charge model, `UsageSummary.RateDetail` displays:

Charge value `Flat Fee`

`$111.00 Flat Fee​`

## Overage and Tiered with Overage Charge models

The overage and tiered with overage charge models are not currently supported by `UsageSummary.RateDetail`.

## Example invoice

Here is an example of the generated invoice. The UsageSummary.RateDetail merge field is used in the Rate Detail column:

| Charge Details | Period | Used | Rate Detail | TOTAL |
| --- | --- | --- | --- | --- |
| Charge name: TieredCharge Description: Monthly Usage Tiered Charge BCD DefaultFromCustomer | Month | 50 | Tier 1: 1-100, $0.00 Flat Fee Total = $0.00 | Subtotal: $0.00Tax: $0.00TOTAL: $0.00 |
| Charge name: TieredCharge Description: Monthly Usage Tiered Charge BCD DefaultFromCustomer | Month | 210 | Tier 1: 1-100, $0.00 Flat Fee Tier 2: 101-200, 100 Each(s) x $2.00/Each = $200.00 Tier 3: >=201, 10 Each(s) x $5.00/Each = $50.00 Total = $250.00 | Subtotal: $250.00Tax: $0.00TOTAL: $250.00 |
| Charge name: VolumeCharge Description: Monthly Usage Volume Charge BCD DefaultFromCustomer | Month | 150 | Tier 3: >=101, 150 Each(s) x $10.00/Each = $1500.00 | Subtotal: $1500.00Tax: $0.00TOTAL: $1500.00 |
| Charge name: Per UnitCharge Description: Monthly Usage Per Unit Charge BCD DefaultFromCustomer | Month | 125 | 125 Each(s) x $20.00/Each = $2500.00 | Subtotal: $2500.00Tax: $0.00TOTAL: $2500.00 |
| Charge name: Flat FeeCharge Description: Monthly Usage Flat Fee Charge BCD DefaultFromCustomer | Month | 999 | $111.00 Flat Fee​ | Subtotal: $111.00Tax: $0.00TOTAL: $111.00 |
