---
title: "Tax code and set tax mode"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/tax-code-and-set-tax-mode"
product: "zuora-billing"
scraped_at: "2025-12-24T05:05:52.919Z"
---

# Tax code and set tax mode

This topic covers usage of tax codes and set tax modes for product rate plan charges, including the differences between tax exclusive and tax inclusive modes.

## Overview

In the product catalog, you can associate a product rate plan charge with a tax code and specify a tax mode for the product rate plan charge. When adding a product to a subscription, you can also update the tax code and the tax mode for the corresponding subscription rate plan charge.

## Use tax modes

Zuora supports two tax modes, tax exclusive and tax inclusive.

-   Tax exclusive : The tax is not included in the quoted charge price. Tax is calculated and added to the charge. This is the default tax mode.

-   Tax inclusive : The tax is included in the quoted charge price. Tax is calculated as a "carve out" from the charge price.


To use an inclusive model, select the Tax Inclusive option from the new Tax Mode list before you select an option from the Tax Code list.

When using tax inclusive, the tax engine calculates the "included" tax portion from the whole price and displays that by tax code/rate on the invoice. This can help you collect and report on taxes.

For example:

-   If you are using Tax Exclusive and a 5% tax rate:

    -   If the charge is $10, then the invoice shows a $10 charge, plus $0.50 tax. The total charge is $10.50.

-   If you are using Tax Inclusive and a 5% tax rate:

    -   If the charge is $10, then the invoice will show a $10 total that includes a $9.52 charge and a $0.48 tax that has been "carved out" of the total amount.


## Limitations when using the tax-inclusive option

You can have multiple taxes for each tax code. However, the following limitations apply:

-   When using inclusive tax, you can only have one flat fee tax rate within your tax code. However, you can have multiple tax rate percentages if the Redistribute Zuora Tax rounding differences billing setting is set to No .

-   When using inclusive tax, your tax codes cannot include flat taxes.

-   The Redistribute Zuora Tax rounding differences setting does not support multiple tax rates yet. When the Redistribute Zuora Tax rounding differences billing rule is set to Yes , multiple tax rates will not work and thus cannot be applied correctly. For more information about this setting, see Redistribute Zuora tax rounding differences .
