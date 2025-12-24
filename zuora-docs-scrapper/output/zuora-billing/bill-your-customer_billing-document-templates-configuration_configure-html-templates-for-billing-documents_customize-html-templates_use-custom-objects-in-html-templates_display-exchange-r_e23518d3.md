---
title: "Display exchange rates on invoices"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/customize-html-templates/use-custom-objects-in-html-templates/display-exchange-rates-on-invoices"
product: "zuora-billing"
scraped_at: "2025-12-24T05:42:14.388Z"
---

# Display exchange rates on invoices

Learn how to display exchange rates on invoices by defining a custom object, querying exchange rates, and using global variables for currency conversion.

Assume that your customers have AED as the home currency, but are billed in USD. You want to present the charge amount and tax in AED on the invoice. The exchange rate that is used to convert from USD to AED is also displayed.

To display exchange rates on invoices, perform the following steps:

1.  Define a custom object named ExchangeRate to store the exchange rate. The following table lists the structures of the custom object. The `From__c` and `To__c` fields are filterable.

    | ID | From (From__c) | To (To__c) | Rate(Rate__c) |
    | --- | --- | --- | --- |
    | 0f9e8dc6-4256-4185-805a-efbb761245a4 | USD | AED | 8.00 |
    | 0f9e8dc6-4256-4185-805a-efbb761245a5 | USD | GBP | 0.73 |
    | 0f9e8dc6-4256-4185-805a-efbb761245a9 | CAD | GBP | 1.09 |

2.  Use filter functions to query the exchange rate based on home currency (AED) and billed currency (USD). You can use the `Cmd_Assign` command to define a global variable named TheRate, which can be used anywhere in the template. `{{#default__exchangerates|FilterByRef(From__c,EQ,Invoice.Account.Currency)|FilterByValue(To__c,EQ,AED)|First(1)}}` `{{Cmd_Assign(TheRate,Rate__c,True)}}` `{{/default__exchangerates|FilterByRef(From__c,EQ,Invoice.Account.Currency)|FilterByValue(To__c,EQ,AED)|First(1)}}`
3.  Use the TheRate global variable to calculate all amount fields in home currency. The following example is to calculate the total tax amount in home currency. `{{Account.Currency|Symbol}}{{TaxAmount|Round(2)|Localise}} ( {{#Wp_Eval}} {{TaxAmount}}*{{TheRate}}|Round(2)|Localise {{/Wp_Eval}} AED)` The output is displayed as $1.18 ( 9.44 AE). The following example HTML codes are to show an invoice item as a row in a charge details table.

    {{#InvoiceItems}} <tr> <td style=""\>{{ChargeName}} </td> <td style=""\>{{ServiceStartDate|Localise}} - {{ServiceEndDate|Localise}} </td> <td style="text-align:right;"\>{{Account.Currency|Symbol}}{{ChargeAmount|Round(2)|Localise}} ({{#Wp\_Eval}}{{ChargeAmount}}\*{{TheRate}}|Round(2)|Localise{{/Wp\_Eval}} AED) </td> <td style="text-align:right;"\>{{Account.Currency|Symbol}}{{TaxAmount|Round(2)|Localise}} ({{#Wp\_Eval}}{{TaxAmount}}\*{{TheRate}}|Round(2)|Localise{{/Wp\_Eval}} AED) </td> <td style="text-align:right;"\>{{Account.Currency|Symbol}}{{#Wp\_Eval}}{{ChargeAmount}}+{{TaxAmount}}|Round(2)|Localise{{/Wp\_Eval}} ({{#Wp\_Eval}}({{ChargeAmount}}+{{TaxAmount}})\*{{TheRate}}|Round(2)|Localise{{/Wp\_Eval}} AED) </td> </tr> {{/InvoiceItems}}

4.  Preview the template after you add the merge fields.

    The following image shows an example of the preview result:

    ![use_custom_object_HTML_templates_display_exchange_rate.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/ce3059db-75e8-43d1-b054-46815d6cab93?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImNlMzA1OWRiLTc1ZTgtNDNkMS1iMDU0LTQ2ODE1ZDZjYWI5MyIsImV4cCI6MTc2NjY0MTMzMiwianRpIjoiMThjOWIyODYzMDdkNDkwZDg0N2Q5NGUyMzAwZDA4OTUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.6d44F6QXMR2NFPXidekv_PR2TYHUI_z27W4x3PUn18E)
