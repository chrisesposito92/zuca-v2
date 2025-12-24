---
title: "Tax rounding method"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/additional-resources-on-taxes/display-tax-information-on-invoices/tax-rounding-behavior/tax-rounding-method"
product: "zuora-billing"
scraped_at: "2025-12-24T05:10:52.092Z"
---

# Tax rounding method

This task explains how to calculate and round tax for each invoice line and the entire invoice.

1.  For each invoice line:
    1.  For each tax item (there can be multiple tax items for each line):

        1.  Calculate the tax for this item by multiplying the tax rate by the subtotal for the line. The subtotal is the total price (before tax) of all products on the invoice line.

        2.  Round the tax item to the level required by the currency of the invoice. For example, round to 2 decimal places for USD or GBP.


    2.  Total all tax items for the invoice line. This generates the "tax" amount on the invoice line.
2.  Total all tax items from the invoice to generate the "tax" amount for the entire invoice.
