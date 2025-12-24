---
title: "Charge types and charge models enablement"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/billing-settings-configuration/product-catalog-settings/charge-types-and-charge-models-enablement"
product: "zuora-billing"
scraped_at: "2025-12-24T05:04:00.304Z"
---

# Charge types and charge models enablement

Learn how to enable and configure various charge types and models in Zuora Billing to suit your organization's billing needs.

With Zuora Billing, you have the flexibility of billing your customers using a variety of charge models. Use the Enable Charge Types/Models page to activate the charge model(s) that your organization uses. You use these charge models when creating product rate plan charges. To activate charge models, select the box next to each charge model you wish to use.

## Enable charge types

You can configure three types of charges in a product rate plan, they are one-time charges, recurring charges, and usage charges.

Zuora allows you to disable usage-based pricing. You can disable this option if your organization does not use usage-based charges. This hides the Usage Charges column in rate plans, customizing the Zuora interface for your organization's requirements.

Note that the Order to Revenue feature or the Billing - Revenue Integration feature does not support the booking-based revenue recognition for usage charges. Also, the overage smoothing charge model used in usage charges cannot be supported by the Order to Revenue feature or the Billing - Revenue Integration feature.

## Enable charge models

You can choose from any of the following charge models:

-   Flat Fee Pricing is the simplest charge model. In this model, the amount to charge is a single price (a fixed amount) applied on a one-time or recurring basis. With recurring flat fee pricing, you can choose to bill in advance or in arrears.

-   Per Unit Pricing is used when the amount to charge is expressed as a price per unit.

-   Overage Pricing applies only to usage-based charges. This charge model gives your customer a certain quantity of units for the base charge (that is, as included units). If your customer exceeds the quantity of included units, the amount used over the included units is charged on a per-unit basis based on the overage price.

-   Volume Pricing is used to charge a price based on the volume purchased.

-   Tiered Pricing is used to change pricing progressively as the volume increases. Like the volume pricing model, the tiered pricing model uses a price table to calculate the pricing. The price table is made up of individual tiers which define a range of volumes and the pricing rule to apply if the customer purchases a quantity that falls within the range of that tier.

-   Tiered with Overage Pricing applies only to usage-based charges. This charge model is similar to the tiered charge model, except there is an overage charge for any units consumed above the ending units of the final tier.

-   Discount-Fixed Amount is used to provide a discount that is a fixed amount.

-   Discount-Percentage is used to provide a discount that is a percentage of the charge amount.

-   Delivery Pricing is used to bill your end customers for a subscription that includes goods delivered on a recurring basis. The delivery pricing model uses a single list price per delivery and a delivery schedule to determine the total charge price for a billing period.
