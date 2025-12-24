---
title: "Rounding method examples"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/additional-resources-on-taxes/display-tax-information-on-invoices/tax-rounding-behavior/rounding-method-examples"
product: "zuora-billing"
scraped_at: "2025-12-24T05:10:54.759Z"
---

# Rounding method examples

This article provides examples of tax calculations using the rounding method for a subscription with two taxable products.

A subscription has been created with the following information:

-   Subscription start date: 5/1/2011

-   Two Products:

    -   Product 1: 1 unit - $197.00/unit, taxable

    -   Product 2: 1 unit - $49.00/unit, taxable

-   Tax rate: 0.0825%


The following table lists the information about tax calculation using the rounding method.

| Product Name | Product Price | Quantity | Line Subtotal | Tax | Line Total |
| --- | --- | --- | --- | --- | --- |
| Product 1 | $197.00 | 1 | $197.00 | $16.25 | $213.25 |
| Product 2 | $49.00 | 1 | $49.00 | $4.04 | $53.04 |
|  |  |  |  | Subtotal | $246.00 |
|  |  |  |  | Tax | $20.29 |
|  |  |  |  | Total | $266.29 |

Calculations:

-   Line 1 tax = $197.00 \* 0.0825 = $16.2525 (rounded to $16.25)

-   Line 2 tax = $49.00 \* 0.0825 = $4.0425 (rounded to $4.04)

-   Total tax = $16.25 + $4.04 = $20.29
