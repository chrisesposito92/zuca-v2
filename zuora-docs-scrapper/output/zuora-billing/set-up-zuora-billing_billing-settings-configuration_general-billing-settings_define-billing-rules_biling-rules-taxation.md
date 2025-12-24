---
title: "Biling Rules - Taxation"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/billing-settings-configuration/general-billing-settings/define-billing-rules/biling-rules---taxation"
product: "zuora-billing"
scraped_at: "2025-12-24T05:03:19.576Z"
---

# Biling Rules - Taxation

This topic outlines billing rules related to tax calculation, including configurations for Avalara integration, tax rate application, and handling of zero-amount items.

The Taxation section contains billing rules specific to tax calculation, mapping, and configurations.

## Calculate taxes using information from Customer Account of

You must have taxation enabled to use this rule.

You can choose to calculate taxes based on the sold-to contact of the subscription owner or the invoice owner. All the account information of the specified contact, including tax information, such as tax exemption, is considered in the tax calculation. If you are using Avalara, value-added tax (VAT), company codes, and other Avalara tax information are also considered in the tax calculation.

You might choose to calculate taxes based on the account information of the invoice owner if the invoice owner is the reseller and the subscription owner is the end user.

By default, the subscription owner is used for calculating taxes.

Note:

If this billing rule is set to Invoice owner and the invoice owner transfer is done for subscriptions, [using templates](/zuora-billing/set-up-zuora-billing/apply-taxes/additional-resources-on-taxes/tax-engine-mapping-formula) overrides this rule and calculate taxes for the subscription owner.

To avoid such unexpected calculations for the template, you have the following workarounds:

-   Hold up the tax calculation
-   Use the invoice owner from the `TaxableInvoice` object to help with the calculation

## When service period of an invoice item crosses multiple tax rate periods, it will generate

Select whether to generate multiple taxation items when the service period of an invoice item spans multiple tax rate periods.

The following options are provided:

-   One Tax Item (default)

-   Multiple Tax Items


See [Generation of Multiple Taxation Items](/zuora-billing/set-up-zuora-billing/apply-taxes/generation-of-multiple-taxation-items) for more information.

## Zuora Tax rounding rule for inclusive tax calculation

Select whether to round the net amount or the tax amount in the tax calculation.

Note:

This billing rule is only used for the inclusive tax mode.

The following options are provided:

-   Rounding Net Amount (default)

-   Rounding Tax Amount


See [Rounding rule for inclusive tax mode](/zuora-billing/set-up-zuora-billing/apply-taxes/additional-resources-on-taxes/rounding-rule-for-inclusive-tax-mode) for more information.

## Do not send $0 items to external tax engine for tax calculation

Note:

This billing rule is only available if you have the External Tax Engine feature enabled. The External Tax Engine feature is in Limited Availability. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).

Select whether to send invoice items or memo items with zero amount to external tax engines for tax calculation. Memo items are available only if the Invoice Settlement [Invoice Settlement](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/get-started-with-invoice-settlement) feature is enabled.

By default, this billing rule is set to No, indicating that Zuora sends invoice items or memo items with zero amount to external tax engines for tax calculation.

This billing rule is only available if you use integration with third-party tax engines for tax calculation. It helps reduce the taxation service cost when many usage charges exist and many invoice items or memo items have zero amount on a recurring base.

## Redistribute Zuora Tax rounding differences

Select whether to redistribute the tax rounding differences between the group level and item level when you use Zuora Tax for tax calculation.

The following options are provided:

-   Yes: Zuora groups invoice items based on the same tax code, tax name, and tax rate, and calculates tax at both the item level and the group level. Any rounding differences between these calculations are redistributed to the corresponding invoice items when the source and destination documents have the same items and amounts.

    Note: This redistribution behaves as expected only when the number of line items in both documents is equal. If the line item counts differ, Zuora cannot guarantee consistent redistribution results.

-   No (default): Zuora does not redistribute the tax rounding differences between the group level and item level.


## Apply new tax rate for additional units purchased and old tax rate for returns

Select whether to apply the new tax rate for the additional units that are purchased and the old tax rate for returns in scenarios where tax rates are changed in billed periods, changes are made to active subscriptions, or the taxability is changed to product rate plan charges.

The following options are provided:

-   Yes The new tax rate is applied only for the additional units that are purchased, and the old tax rate is applied for returns.

-   No (default) The new tax rate is applied for all the units that are purchased, and the old tax rate is applied for proration credit.


See [Tax Selection for Calculation](/zuora-billing/set-up-zuora-billing/apply-taxes/additional-resources-on-taxes/tax-selection-for-calculation) for more information.

## Use Avalara to calculate taxes for invoice item adjustments

Note:

This billing rule is only available if you have [Invoice Settlement](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/get-started-with-invoice-settlement) disabled and [Direct Avalara Integration](/zuora-billing/set-up-zuora-billing/apply-taxes/direct-avalara-integration/overview-of-direct-avalara-integration) enabled. To enable Direct Avalara Integration, submit a request at [Zuora Global Support](http://support.zuora.com/).

Select whether to use Zuora's Direct Avalara Integration to create tax invoice item adjustments corresponding to charge invoice item adjustments.

By default, this billing rule is set to No indicating this feature is disabled. After you enable this feature, tax values are calculated by Avalara synchronously when you create charge invoice item adjustments.

See Avalara taxes in invoice item adjustments for more information.

## Allow indistinct mapping from Memo/Invoice Item Adjustment tax item to invoice item tax

Select whether to allow Zuora to indistinctly map memo/invoice item adjustment (IIA) taxation items to taxation items on the corresponding invoice.

The following options are provided:

-   No (default) Zuora uses distinct mapping.


-   Yes Zuora tries distinct mapping first but will use indistinct mapping when distinct mapping is insufficient, ensuring that each taxation item on a Memo/IIA can be associated with a taxation item on the corresponding invoice.


See Mapping from Memo or Invoice Item Adjustment tax items to invoice tax items for more information.

## Send external engine consolidated discount and regular charge

When utilizing discounts in the billing process, Zuora divides discount charges into two separate items, creating two distinct taxation items. However, activating this particular billing rule will result in a single taxation item that will be associated with the regular charge. The net value derived from the positive ordinary charge and negative discount charge will be forwarded to the tax vendor and the associated tax will be associated with the positive regular charge.

This feature is specifically designed for external tax vendors and can be configured using the configurable tax connector
Note: It is not compatible with the Direct Avalara Integration feature.
.

The following options are provided:

-   No (default): Discount charges will be sent to the external tax vendor as two separate items, a negative and a positive, and each will have an associated taxation item.

-   Yes: Discount charges will be consolidated and sent to the external tax vendor as a net item with only one taxation item associated.


Note:

Activation of this feature may impact pre-existing downstream reporting established before its development.

Currently, this feature is exclusively applicable to tax-exclusive charges.
