---
title: "RatingDetail schema"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/customize-html-templates/configure-ratingdetails-in-html-template/ratingdetail-schema"
product: "zuora-billing"
scraped_at: "2025-12-24T05:41:26.046Z"
---

# RatingDetail schema

The RatingDetail schema provides detailed charge calculations and billing information for complex pricing models, ensuring accurate presentation of pricing details in invoices and statements.

The RatingDetail schema captures detailed charge calculations and billing information, particularly for complex pricing models such as tiered pricing, volume-based pricing, overage charges, and usage-based charges. This schema accurately presents pricing details to end customers in invoices and statements.

Here’s how you can structure the presentation with the major fields:

-   Formula : The Formula field defines the tiered pricing structure in the following format:


1:PriceFormat:StartUnit:EndUnit:Price;2:PriceFormat:StartUnit:EndUnit:Price;...,

-   Where:

    -   PriceFormat indicates the type of pricing: flat fee or per unit. The available values are 0 for Flat Fee and 1 for Per Unit .

    -   StartUnit and EndUnit define the quantity range for each tier.

    -   Price specifies the unit price for the tier.

    -   1, 2 represents the tier number in the Tiered Pricing charge model. Most charge models, such as Flat Fee and Per Unit, have a single tier. However, when using Tiered Pricing, multiple tiers may apply if the quantity spans more than one tier.

-   CalculatedAmount : This field provides the result of the pricing calculation based on the formula defined.

-   Quantity : If applicable, this field indicates the quantity of usage for the current charge.

-   Calculation : This field shows the details of how the charge amount is calculated. It applies different prices to the quantity breakdown when using a tiered pricing model.

-   BilledQuantity and BilledAmount : These fields represent the previously billed quantity and amount for usage charges in the current billing period. Both fields are available only for on-demand usage rating.


Assume you have an InvoiceItem object with associated RatingDetails. Here’s how you can render tiered pricing using these fields:

<table> <thead> <tr> <th>Charge Type</th> <th>Charge Model</th> <th>Quantity</th> <th>Calculated Amount</th> <th>Formula</th> <th>Calculation</th> </tr> </thead> <tbody> {{#Invoice.InvoiceItems}} {{^RatingDetails|IsEmpty}} {{#RatingDetails|First(1)}} <tr> <td>{{ChargeType}}</td> <td>{{ChargeModel}}</td> <td>{{Quantity}}</td> <td>{{CalculatedAmount}}</td> <td>{{Formula}}</td> <td>{{Calculation}}</td> </tr> {{/RatingDetails|First(1)}} {{/RatingDetails|IsEmpty}} {{/Invoice.InvoiceItems}} </tbody> </table>

| Charge Type | Charge Model | Quantity | Calculated Amount | Formula | Calculation |
| --- | --- | --- | --- | --- | --- |
| Usage | Tiered with Overage Pricing | 130.0 | 60.0 | 1:1:0:100:0.00;2:1:101:200:2.00 | 100 * USD0.00 + 30 * USD2.00 = USD60.00 |

-   Invoice.InvoiceItems: Iterates over each InvoiceItem.

-   RatingDetails|IsEmpty: Checks if there are RatingDetails associated.

-   #RatingDetails|First(1): Retrives the first item from the RatingDetails list. Each invoice item has one rating detail object.

-   ChargeType, ChargeModel, Quantity, CalculatedAmount, Formula, Calculation: These fields are the standard fields from the RatingDetail object. You can refer to the details of each field in the table.


The formula format is not designed for direct customer readability, as it is structured to support various pricing models, including tiered pricing. To enhance clarity, you’ll need to parse and present it in a more user-friendly format.

This template snippet iterates through each InvoiceItem to retrieve its associated RatingDetails . It identifies the ChargeModel (e.g., Tiered Pricing) and extracts key fields to generate a structured pricing table, including quantity ranges, unit prices, and calculated amounts.
