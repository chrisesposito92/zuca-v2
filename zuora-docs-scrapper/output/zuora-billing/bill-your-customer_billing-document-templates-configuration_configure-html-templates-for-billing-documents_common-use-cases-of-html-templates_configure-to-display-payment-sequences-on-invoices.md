---
title: "Configure to display payment sequences on invoices"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/common-use-cases-of-html-templates/configure-to-display-payment-sequences-on-invoices"
product: "zuora-billing"
scraped_at: "2025-12-24T05:43:08.245Z"
---

# Configure to display payment sequences on invoices

This task explains how to configure HTML templates to display payment sequences on invoices, helping customers track billing periods for subscription-based products.

This article demonstrates how to display payment sequences on invoices.

Assume an occasion when you have a product called Quality of Experience, which is a subscription-based software license. This product contains a product rate plan, lasting for three years. Within the product rate plan, the product sets up a product rate plan charge priced at $500.20, recurring quarterly. Your customer A starts a three-year subscription to this product rate plan charge, and an invoice of $500.20 is generated for the subscription per quarter through three years. Such a charge brings your customer A to 12 invoices in total.

To allow your customer A to know for which billing period each invoice is generated, HTML templates provide the capability of displaying something like "1 of 12" or "3 of 12" as payment sequences of invoices. For example, if the invoice is the third invoice among the overall 12 invoices, the invoice displays "3 of 12", indicating 9 payments are left.

In this scenario, you can use the HTML component in the HTML template editor to build charge details tables and use the expressions to calculate the payment sequences.

To display payment sequences on invoices, perform the following steps:

1.  In the Content tab of the HTML template editor, drag the Columns component into the HTML template. A column block is displayed in the HTML template. It is best practice to add it to the middle of the template.
2.  In the HTML template, click the Row block where you want to add the HTML code.
3.  In the Content tab, drag the HTML component into the HTML template.
4.  In the HTML template, click the HTML block. The Content panel is displayed on the right of the template editor.
5.  In the HTML section, input the following HTML code in the HTML editor as an example. You can have your own table HTML code and use the expressions to calculate the payment sequence. You can refer to the description in the code example and the information that follows the code example. The expressions have the following constraints. If you have other billing periods, change the expressions.

    <style> <!-- not show all style code --> </style> {{#Invoice}} <table class="table-grid u\_content\_custom\_generic\_table\_1"\> <thead><tr> <th style="width:auto; text-align:center;"\> Charge Name </th> <th style="width:auto; text-align:center;"\> Service Period </th> <th style="width:auto; text-align:center;"\> Payment Sequence </th> <th style="width:auto; text-align:right;"\> Unit Price </th> <th style="width:auto; text-align:right;"\> Quantity </th> <th style="width:auto; text-align:right;"\> Extended Price </th> <th style="width:auto; text-align:center;"\> Subscription Term </th></tr></thead> <tbody> {{#InvoiceItems}} <tr> <td style="width:auto; text-align:center;"\>{{ChargeName}}</td> <td style="width:auto; text-align:center;"\>{{ServiceStartDate|Localise}} - {{ServiceEndDate|Localise}}</td> <td style="width:auto; text-align:center;"\> <!-- calculate the Xth payment: X is the number of months between service start date and subscription term start date, divided by billing period → <!-- calculate total Y payments: Y is the number of months between subscription term start date and subscription term end date, divided by billing period --> {{#Wp\_Eval}} 1 + (new("java.text.SimpleDateFormat","yyyy-MM-dd").parse("{{ServiceStartDate}}").getYear() - new("java.text.SimpleDateFormat","yyyy-MM-dd").parse("{{Subscription.TermStartDate}}").getYear()) \* 12 + (new("java.text.SimpleDateFormat","yyyy-MM-dd").parse("{{ServiceStartDate}}").getMonth() - new("java.text.SimpleDateFormat","yyyy-MM-dd").parse("{{Subscription.TermStartDate}}").getMonth()) / ("{{RatePlanCharge.BillingPeriod}}" == "Month" ? 1 : ("{{RatePlanCharge.BillingPeriod}}" == "Quarter" ? 3 : ("{{RatePlanCharge.BillingPeriod}}" == "Semi-Annual" ? 6 : ("{{RatePlanCharge.BillingPeriod}}" == "Annual" ? 12 : 24)))) {{/Wp\_Eval}} of {{#Wp\_Eval}} ("{{Subscription.CurrentTermPeriodType}}" == "Year" ? {{Subscription.CurrentTerm}} \* 12 : {{Subscription.CurrentTerm}}) / ("{{RatePlanCharge.BillingPeriod}}" == "Month" ? 1 : ("{{RatePlanCharge.BillingPeriod}}" == "Quarter" ? 3 : ("{{RatePlanCharge.BillingPeriod}}" == "Semi-Annual" ? 6 : ("{{RatePlanCharge.BillingPeriod}}" == "Annual" ? 12 : 24)))) {{/Wp\_Eval}} </td> <td style="width:auto; text-align:right;"\>{{Invoice.Account.Currency|Symbol}}{{UnitPrice|Round(2)|Localise}}</td> <td style="width:auto; text-align:right;"\>{{Quantity|Round(2)|Localise}}</td> <td style="width:auto; text-align:right;"\>{{Invoice.Account.Currency|Symbol}}{{ChargeAmount|Round(2)|Localise}}</td> <td style="width:auto; text-align:center;"\>{{Subscription.TermStartDate|Localise}} - {{Subscription.TermEndDate|Localise}}</td> </tr> {{/InvoiceItems}} </tbody> </table> {{/Invoice}}

    -   Only the following billing periods are available:

        -   Month

        -   Quarter

        -   Semi-Annual

        -   Annual

    -   You must set your subscription's term type to termed rather than evergreen.

    -   Only the following subscription term period types are available:

        -   Month

        -   Year


6.  View the template in Edit mode. You can edit the HTML source to change the text, font size, font color, rotation, and opacity.
7.  Click Preview , and select an account and an invoice in the Preview Settings section to preview the corresponding PDF file.

The following image shows a charge details table displayed with payment sequences:

![HTML_Template_Use_Case_Payment_Sequence.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/b58c93d1-a40a-4b2e-bd5b-493b2b3e75f0?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImI1OGM5M2QxLWE0MGEtNGIyZS1iZDViLTQ5M2IyYjNlNzVmMCIsImV4cCI6MTc2NjY0MTM4NiwianRpIjoiMzc0NDBlYTc1M2QxNGJkMTk5MTVjMThiZmIyMmE0NTAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.dpu-vu2keDe6LVHmC78P0CAtTOMQ8VVi1oqxzhPPkPc)
