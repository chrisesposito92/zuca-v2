---
title: "Defining numbering and SKU formats"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/billing-settings-configuration/general-billing-settings/defining-numbering-and-sku-formats"
product: "zuora-billing"
scraped_at: "2025-12-24T05:03:39.962Z"
---

# Defining numbering and SKU formats

Learn how to define default prefixes for account numbers, SKUs, and other billing-related identifiers in your billing settings.

You can define formats for the following information by setting default prefixes in Billing settings:

-   Account number

-   SKU

-   Subscription number

-   Charge number

-   Amendment number


For example, your company can use the initials of the company name as the prefix for the above information. A company named Grand Hotels might use the prefix GH. If you use GH as the default prefix for subscription numbers, when creating a subscription, the subscription number is named with prefix GH, such as GH00000062.

You can also customize the format of billing documents, such as invoices. See Manage Billing Document Configuration for more information.

## Setting Default Prefixes

To define default prefix for numbers and SKU, click your username at the top right and navigate to Billing > Define Numbering and SKU Formats .

You can use any characters to set default prefixes. The length of a prefix is less than 40 characters. The default prefix for SKU can be null, but all the other prefixes cannot be null.

The newly defined prefixes are used when creating an account, a product, a subscription, or a subscription amendment. The existing account numbers, SKU, subscription numbers, charge numbers, and amendment numbers will not be affected by your newly defined prefixes.

## Zuora Default Prefixes

The following table lists Zuora default prefixes.

| Information | Default Prefix |
| --- | --- |
| Account Number Prefix | The default prefix is A.For example, A00000062. |
| SKU Prefix | The default prefix is SKU-.For example, SKU-00000023. |
| Subscription Number Prefix | The default prefix is A-S.For example, A-S00030146. |
| Charge Number Prefix | The default prefix is C-.For example, C-00036488. |
| Amendment Number Prefix | The default prefix is A-AM.For example, A-AM00094083. |
