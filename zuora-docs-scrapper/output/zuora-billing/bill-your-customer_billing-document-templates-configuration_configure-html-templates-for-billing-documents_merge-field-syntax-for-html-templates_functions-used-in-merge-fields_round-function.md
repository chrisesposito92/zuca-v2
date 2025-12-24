---
title: "Round function"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-syntax-for-html-templates/functions-used-in-merge-fields/round-function"
product: "zuora-billing"
scraped_at: "2025-12-24T05:46:47.928Z"
---

# Round function

The Round function is used for rounding numbers with specified precision and optional rounding modes.

This function is used for number rounding.

## Syntax

`Round(Precision,RoundingMode)`

-   The first argument is an integer between 0 and 10.

-   The second argument is optional. The default value of the second argument is HALF\_UP. This argument has the following available options:

    -   UP

    -   DOWN

    -   CEILING

    -   FLOOR

    -   HALF\_UP

    -   HALF\_DOWN

    -   HALF\_EVEN

    -   UNNECESSARY


## Examples

You can also use the `Round` function for padding purposes. If an invoice has the amount of 10.125, the `{{Amount|Round(2)}} function` returns 10.13 in the rendered result, and the `{{Amount|Round(4)}}` function returns 10.1250 in the rendered result.
