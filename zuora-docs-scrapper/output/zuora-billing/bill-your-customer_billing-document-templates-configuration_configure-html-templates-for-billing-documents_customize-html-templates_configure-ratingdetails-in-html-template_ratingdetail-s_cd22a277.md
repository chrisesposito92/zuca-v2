---
title: "Usage in HTML templates"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/customize-html-templates/configure-ratingdetails-in-html-template/ratingdetail-schema/usage-in-html-templates"
product: "zuora-billing"
scraped_at: "2025-12-24T05:41:30.805Z"
---

# Usage in HTML templates

The RatingDetail schema facilitates dynamic pricing details in HTML templates, providing clear invoices with detailed charge breakdowns.

The RatingDetail schema enables dynamic rendering of pricing details in HTML templates. While RatingDetails is a list of objects within an InvoiceItem, each InvoiceItem is associated with a single RatingDetail object.

Below is an example showcasing key fields, followed by variations demonstrating different usage charge models:

<table> <thead> <tr> <th>Charge Type</th> <th>Charge Model</th> <th>Quantity</th> <th>Calculated Amount</th> <th>Formula</th> <th>Calculation</th> </tr> </thead> <tbody> {{#Invoice.InvoiceItems}} {{^RatingDetails|IsEmpty}} {{#RatingDetails|First(1)}} <tr> <td>{{ChargeType}}</td> <td>{{ChargeModel}}</td> <td>{{Quantity}}</td> <td>{{CalculatedAmount}}</td> <td>{{Formula}}</td> <td>{{Calculation}}</td> </tr> {{/RatingDetails|First(1)}} {{/RatingDetails|IsEmpty}} {{/Invoice.InvoiceItems}} </tbody> </table>

This enables clear invoices with detailed charge breakdowns.
