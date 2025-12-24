---
title: "Rounding rule for inclusive tax mode"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/additional-resources-on-taxes/rounding-rule-for-inclusive-tax-mode"
product: "zuora-billing"
scraped_at: "2025-12-24T05:11:43.270Z"
---

# Rounding rule for inclusive tax mode

This article explains the rounding rules for inclusive tax mode, detailing how to round net or tax amounts in tax calculations, with default settings and example scenarios.

## Overview

You can select whether to round the net amount or the tax amount in the tax calculation. To access this feature, click your username at the top right and navigate to , then change the Zuora Tax rounding rule for inclusive tax calculation setting. This setting is set to Rounding Net Amount by default.

Note:

This billing rule is only used for the inclusive tax mode.

The following formulas describe how taxes are calculated with the tax rounding rules:

-   Rounding Net Amount (default)

    Net amount = Round (Total amount with tax / (1 + VAT))

    Tax amount = Total amount with tax - Net amount


-   Rounding Tax Amount

    Tax amount = Round (Total amount with tax \* VAT / (1 + VAT))


## Example scenario

Imagine a scenario where:

-   Total amount with tax: $2.99

-   VAT: 4%


If you apply the default Rounding Net Amount rule to calculate taxes:

-   Net amount = Round ($2.99/1.04) = Round ($2.875) = $2.88

-   Tax amount = $2.99 - $2.88 = $0.11


If you apply the Rounding Tax Amount rule to calculate taxes:

-   Tax amount = Round ($2.99 \* 0.04/1.04) = Round ($0.115) = Round ($0.115) = $0.12
