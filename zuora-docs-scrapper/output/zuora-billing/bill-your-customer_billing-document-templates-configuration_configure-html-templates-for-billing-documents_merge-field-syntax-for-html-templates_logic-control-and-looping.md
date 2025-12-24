---
title: "Logic control and looping"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-syntax-for-html-templates/logic-control-and-looping"
product: "zuora-billing"
scraped_at: "2025-12-24T05:47:02.867Z"
---

# Logic control and looping

Learn how to use merge fields for logic control and looping in HTML templates for billing documents.

## Conditional control

Although Mustache is an illogical template engine, you can still use merge fields to conduct basic logic control and looping in HTML templates for billing documents, including invoices, credit memos, and debit memos.

If the input data meets the condition specified by the merge fields, the content defined in the middle of merge fields is displayed in the rendered result.

The following table lists merge field examples with conditional control.

|  | Pseudo-code | Merge Fields | Description |
| --- | --- | --- | --- |
| Boolean field | If Invoice.Account.AutoPay == True "Auto pay account" Else "AutoPay is not enabled" | {{#Invoice.Account.AutoPay}} "Auto pay account" {{/Invoice.Account.AutoPay}} {{^Invoice.Account.AutoPay}} "AutoPay is not enabled." {{/Invoice.Account.AutoPay}} | If an account has the AutoPay option enabled, the Auto pay account message is displayed in the rendered result.If an account has the AutoPay option disabled, the AutoPay is not enabled. message is displayed in the rendered result. |
| Field with Boolean functions | If InvoiceItems.IsEmpty "Empty Invoice" Else "Non-Empty Invoice" | {{#Invoice.InvoiceItems\|IsEmpty}} "Empty invoice" {{/Invoice.InvoiceItems\|IsEmpty}}{{^Invoice.InvoiceItems\|IsEmpty}} "Non-Empty Invoice" {{/Invoice.InvoiceItems\|IsEmpty}} | If the InvoiceItems list is empty, the Empty invoice message is displayed in the rendered result.If the InvoiceItems list is non-empty, the Non-Empty Invoice message is displayed in the rendered result. |
| If Account.AccountNumber == null or Account.AccountNumber.isBlank"Show a blank string"Else{{Account.AccountNumber}} | {{#Invoice.Account.AccountNumber\|IsBlank}} "" {{/Invoice.Account.AccountNumber\|IsBlank}}{{^Invoice.Account.AccountNumber\|IsBlank}} {{Invoice.Account.AccountNumber}} {{/Invoice.Account.AccountNumber\|IsBlank}} | If the AccountNumber value of an account is blank, a blank string is displayed.If the AccountNumber value of an account is not blank, the actual account number is displayed in the rendered result. |  |
| And | If Account.AutoPay and Balance == 0 "AutoPay account and zero balance" | {{#Account.AutoPay}} {{#Balance\|EqualToVal(0)}} "AutoPay account and zero balance" {{/Balance\|EqualToVal(0)}} {{/Account.AutoPay}} | If an account has the AutoPay option enabled and the account’s balance is equal to zero, the automatically paid account with zero balance is displayed in the rendered result. |
| Exists | If Account.Entity__c == French and Hardware Product exists "Display a message." | {{#Invoice}}{{#Account.Entity__c\|EqualToVal(French)}}{{^InvoiceItems\|Map(RatePlanCharge)\|Map(ProductRatePlanCharge)\|Map(ProductRatePlan)\|Map(Product)\|FilterByValue(ProductType__c,EQ,Hardware)\|IsEmpty}}“Display message 1”{{/InvoiceItems\|Map(RatePlanCharge)\|Map(ProductRatePlanCharge)\|Map(ProductRatePlan)\|Map(Product)\|FilterByValue(ProductType__c,EQ,Hardware)\|IsEmpty}}{{/Account.Entity__c\|EqualToVal(French)}}{{/Invoice}}Note:The example above is based on the following assumptions and will need to be updated to meet your use case:The custom fields Account.entity__c and ProductType__c exist.The custom field ProductType__c = Hardware. | If an account has a custom field named Entity__c and a product has a custom field named ProductType__c , the Map Map function returns a list of Product values. |
| Equals | If RatePlanCharge.ChargeModel == “Flat Fee Pricing”"Is Flat Fee"Else"Not Flat Fee" | {{#Wp_Eval}}"{{RatePlanCharge.ChargeModel}}" == "Flat Fee Pricing" ? "Is Flat Fee" : "Not Flat Fee"{{/Wp_Eval}Note:The assumption for the above code is that it would be copied and pasted into a Charge Details table component. | If the charge model of a rate plan charge is Flat Fee Pricing, the Is Flat Fee message is displayed in the rendered result.Otherwise, the Not Flat Fee message is displayed in the rendered result. |
| If RatePlanCharge.ChargeModel == “Per Unit Pricing”Display like Per Unit: $ 70.00 Per LicenseElse Display like Flat Fee: $ 4.50 | {{#Wp_Eval}}"{{RatePlanCharge.ChargeModel}}" == "Per Unit Pricing" ? `<b>Per Unit: {{Invoice.Account.Currency\|Symbol}} {{UnitPrice\|Round(2)\|Localise}} Per {{UOM}}</b>`: 'Flat Fee: {{Invoice.Account.Currency\|Symbol}} {{UnitPrice\|Round(2)\|Localise}}'{{/Wp_Eval}}Note:The assumption for the above code is that it would be copied and pasted into a Charge Details table component. | If the charge model of a rate plan charge is Per Unit Pricing, the text in the format of Per Unit: {{Invoice.Account.Currency\|Symbol}} {{UnitPrice\|Round(2)\|Localise}} Per {{UOM}} is displayed in the rendered result, for example, Per Unit: $ 70.00 Per License .Otherwise, the text in the format of Flat Fee: {{Invoice.Account.Currency\|Symbol}} {{UnitPrice\|Round(2)\|Localise}} like is displayed in the rendered result, for example, Flat Fee: $ 4.50. |  |
| Multiple conditions | If RatePlanCharge.ChargeModel == “Flat Fee Pricing”"Flat Fee Pricing"Else If RatePlanCharge.ChargeModel == “Per Unit Pricing”"Per Unit Pricing"Else If RatePlanCharge.ChargeModel == “Tiered Pricing”"Tiered Pricing"Else“Other Pricing” | {{#Wp_Eval}}"{{RatePlanCharge.ChargeModel}}" == "Flat Fee Pricing" ? "Flat Fee Pricing" : "{{RatePlanCharge.ChargeModel}}" == "Per Unit Pricing" ? "Per Unit Pricing" : "{{RatePlanCharge.ChargeModel}}" == "Tiered Pricing" ? "Tiered Pricing" : "Other Pricing"{{/Wp_Eval}}Note:The assumption for the above code is that it would be copied and pasted into a Charge Details table component. | If the charge model of a rate plan charge is Flat Fee Pricing, the Flat Fee Pricing message is displayed in the rendered result.If the charge model of a rate plan charge is not Flat Fee Pricing, the rendered result depends on conditions.If the charge model of a rate plan charge is Per Unit Pricing, the Per Unit Pricing message is displayed in the rendered result.If the charge model of a rate plan charge is Tiered Pricing, the Tiered Pricing message is displayed in the rendered result.If the charge model of a rate plan charge is not any of the preceding charge models, the Other Pricing message is displayed in the rendered result. |

## Loop control

You can use list section merge fields to achieve looping. The following table lists merge field examples with loop control.

|  | Pseudo-code | Merge fields | Description |
| --- | --- | --- | --- |
| Loop lists | for item in Invoice.InvoiceItems print item.ChargeName - item.ServiceStartDate -- item.ServiceEndDate | {{#Invoice.InvoiceItems}} {{ChargeName}} - {{ServiceStartDate}} -- {{ServiceEndDate}} {{/Invoice.InvoiceItems}} | You can use this example to show the charge name and service period of all invoice items in generated invoices. |
| Nested loops | for invoiceItem in Invoice.InvoiceItems print invoiceItem.ChargeName : for taxItem in invoiceItem.TaxationItems print taxItem.Name -- taxItem.TaxAmount |  | You can use this example to show all taxation items of every invoice item in generated invoices. |

## Nested loops

A nested loop is a loop inside another loop. For example, you might want to show all taxation items for every invoice item.

The pseudocode is as follows:

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/4f144741-ac54-42fb-a426-a6b0312d66cc?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjRmMTQ0NzQxLWFjNTQtNDJmYi1hNDI2LWE2YjAzMTJkNjZjYyIsImV4cCI6MTc2NjY0MTYyMCwianRpIjoiNzE2NzI4NTQxNGYzNDEzNWFjOWJjZGRhYzdhYmEwZGIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.NHbwTad6MVsR2g9FyLYchl55vhOyHbNsqFmmGPI2Zx4)

To do the same with merge fields in HTML invoice templates, you can use the following merge fields:

{{#Invoice.InvoiceItems}} {{ChargeName}} : {{#TaxationItems}} {{Name}} -- {{TaxAmount}} {{/TaxationItems}} {{/Invoice.InvoiceItems}}

For example, if you want to show a charge details table for each subscription. One invoice contains multiple subscriptions.

The pseudocode is as follows:

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/630f11ea-2099-488b-9e1f-9482fe938565?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjYzMGYxMWVhLTIwOTktNDg4Yi05ZTFmLTk0ODJmZTkzODU2NSIsImV4cCI6MTc2NjY0MTYyMCwianRpIjoiZGUxNzI2ZWMwNzJmNGFjNGE2ZDNlZWZlM2ZkYTFlY2IiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.WUCNnOuZOzMPiNaxM3nkkE2s10Cf6agd_MhCqEjbQBY)

To do the same with merge fields in HTML invoice templates, you can use the following example HTML code. The `GroupBy` function transforms an InvoiceItems list into a new list, which consists of two fields only:

-   `Subscription.Name` : It is the field name used for grouping.

-   `_Group` : It is a hard-coded key, which contains a list of InvoiceItems with the same subscription name.


See the `GroupBy` function in Functions used in merge fields for more information.

{{#InvoiceItems|SortBy(ServiceStartDate,ASC)|GroupBy(Subscription.Name)}} <h4>Subscription: {{Subscription.Name}}</h4> {{Cmd\_Assign(BySubscriptionName,\_Group)}} <table class="table-grid u\_content\_custom\_generic\_table\_1"\> <thead><tr> <th style="width:auto; text-align:right;"\> Description </th> <th style="width:auto; text-align:right;"\> Charge Amount </th> <th style="width:auto;text-align:right; "\> Tax </th> <th style="width:auto; text-align:right;"\> Total </th></tr></thead> <tbody> {{#BySubscriptionName}} <tr> <td style=""\>{{ChargeName}}</td> <td style="text-align:right;"\>{{ChargeAmount}}</td> <td style="text-align:right;"\>{{TaxAmount}}</td> <td style="text-align:right;"\>{{#Wp\_Eval}}{{ChargeAmount}}+{{TaxAmount}}{{/Wp\_Eval}}</td> </tr> {{/BySubscriptionName}} <tr> <td style="text-align:right;"\>Subtotal</td> <td style="text-align:right;"\>{{BySubscriptionName|Sum(ChargeAmount)}}</td> <td style="text-align:right;"\>{{BySubscriptionName|Sum(TaxAmount)}}</td> <td style="text-align:right;"\>{{#Wp\_Eval}}{{BySubscriptionName|Sum(ChargeAmount)}}+{{BySubscriptionName|Sum(TaxAmount)}}{{/Wp\_Eval}}</td> </tr> </tbody> </table> {{/InvoiceItems|SortBy(ServiceStartDate,ASC)|GroupBy(Subscription.Name)}} {{/Invoice}}
