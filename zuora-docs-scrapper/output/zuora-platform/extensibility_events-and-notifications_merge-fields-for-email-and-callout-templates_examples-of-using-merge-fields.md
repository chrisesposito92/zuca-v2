---
title: "Examples of using merge fields"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/events-and-notifications/merge-fields-for-email-and-callout-templates/examples-of-using-merge-fields"
product: "zuora-platform"
scraped_at: "2025-12-24T05:26:35.822Z"
---

# Examples of using merge fields

Provides common use cases and examples for using merge fields.

## Field values from the context invoice

Use the following example to display field values from the context invoice of invoice-related events, such as Invoice Due or Invoice Posted:

{{#Invoice}} Invoice Number: {{InvoiceNumber}} Invoice Date: {{InvoiceDate}} Invoice Due Date: {{DueDate}} Account Name: {{Account.Name}} First Name (Bill To): {{Account.BillTo.FirstName}} {{/Invoice}}

The returned content is as follows:

Invoice Number: INV00065283 Invoice Date: 2023-11-20 Invoice Due Date: 2023-12-20 Account Name: ABC Company First Name (Bill To): Mike

## Field values from the custom object records linked to the context account

Use the following example to display field values from the Entitlement custom object records linked to the context account:

{{#Account.default\_\_entitlements|SortBy(Entitled\_\_c, ASC)}} Entitled: {{Entitled\_\_c}} Usage: {{Usage\_\_c}} Status: {{Status\_\_c}} {{/Account.default\_\_entitlements|SortBy(Entitled\_\_c, ASC)}}

The entitlements linked to this particular account are sorted by entitled values in ascending order as follows:

Entitled: 100 Usage: 20 Status: Active Entitled: 150 Usage: 45 Status: Trial Entitled: 220 Usage: 0 Status: Active

## Field values from the last created custom object record

Use the following example to display the price of the last created Vehicle object record. This example applies to any event.

{{#default\_\_vehicles|Last(1)}} Price: {{Price\_\_c}} {{#default\_\_vehicles|Last(1)}}

The returned content is as follows:

Price: 35,000

Localized values of date and number fields

You can format the field values using the `Localise (locale_NAME)` function, which applies to date, datetime, and numeric fields.

When no `local_NAME` parameter is specified, the formatting is based on the locale setting of the related communication profile.

Invoice Amount (default): {{Invoice.Amount}} Invoice Amount (English - United States): {{Invoice.Amount|Localise}} Invoice Amount (German - Germany): {{Invoice.Amount|Localise(de\_DE)}} Invoice Amount (French - France): {{Invoice.Amount|Localise(fr\_FR)}} Invoice Date (default): {{Invoice.InvoiceDate}} Invoice Date (English - United States): {{Invoice.InvoiceDate|Localise}} Invoice Date (German - Germany): {{Invoice.InvoiceDate|Localise(de\_DE)}} Invoice Date (French - France): {{Invoice.InvoiceDate|Localise(fr\_FR)}}

The returned content is as follows:

Invoice Amount (default): 10.23 Invoice Amount (English - United States): 10.23 Invoice Amount (German - Germany): 10,23 Invoice Amount (French - France): 10,23 Invoice Date (default): 11/28/2023 Invoice Date (English - United States): 11/28/2023 Invoice Date (German - Germany): 28.11.2023 Invoice Date (French - France): 28/11/2023

For more information, see [Localise function](/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-syntax-for-html-templates/functions-used-in-merge-fields/localise-function).

## Field values from the products related to the context subscription

A subscription can contain multiple rate plans and each rate plan is associated with a product.

Use the following example to display field values from the products related to the context subscription:

{{#Subscription.RatePlans}} Product Name: {{ProductRatePlan.Product.Name}} {{/Subscription.RatePlans}}

The returned content is as follows:

Product Name: Gold Membership Product Name: …

## Field values from the products related to the context order action

The subscription that relates to an order action can contain multiple rate plans, and each rate plan is associated with a product.

Use the following example to display field values from the products related to the context order action:

{{#OrderAction.Subscription.RatePlans}} Product Name: {{ProductRatePlan.Product.Name}} {{/OrderAction.Subscription.RatePlans}}

The returned content is as follows:

Product Name: Gold Membership Product Name: …

## Field values from the rate plan charge and rate plan charge tiers related to the context rating result

The rating result object is linked to a rate plan charge, which might contain multiple rate plan charge tiers with pricing information.

Use the following example to display field values from the rate plan charge and rate plan charge tiers related to the context rating result:

{{#RatingResult}} Rating Result - Amount: {{Amount}} Rating Result - Quantity: {{Quantity}} {{#RatePlanCharge}} Rate Plan Charge - Name: {{Name}} Pricing information: {{#RatePlanChargeTiers}} Tier: {{Id}} Starting Unit: {{StartingUnit}} Ending Unit: {{EndingUnit}} Price: {{Price}} {{/RatePlanChargeTiers}} {{/RatePlanCharge}} {{/RatingResult}}

The returned content is as follows:

Rating Result - Amount: 49.5 Rating Result - Quantity: 55 Rate Plan Charge - Name: Volume-type charge Pricing information: Tier: 1 Starting Unit: 0.0 Ending Unit: 100.0 Price: 0.9 Tier: 2 Starting Unit: 100.1 Ending Unit: 200.0 Price: 0.8

## Field values from the invoices associated with the context payment

The merge field syntax for retrieving information from invoices associated with the context payment varies depending on whether the [Invoice Settlement](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/get-started-with-invoice-settlement) feature is enabled or not.

If the Invoice Settlement feature is enabled, you can retrieve the invoices through the PaymentPart object:

{{#Payment.PaymentParts}} Invoice Number: {{Invoice.InvoiceNumber}} {{/Payment.PaymentParts}}

If the Invoice Settlement feature is disabled, you can retrieve the invoices through the InvoicePayment object:

{{#Payment.InvoicePayments}} Invoice Number: {{Invoice.InvoiceNumber}} {{/Payment.InvoicePayments}}

When multiple invoices are associated with the payment, the returned content is as follows:

Invoice Number: INV00000001 Invoice Number: INV00000002 …

## Use evaluation expressions to dynamically generate content

When evaluation expressions ( `Wp_Eval` ) are used in email or callout templates, Zuora evaluates the expressions and then generates the content. For more information, see [Expressions](/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-syntax-for-html-templates/expressions).

Use the following expression as an example.

You have paid {{#Wp\_Eval}} {{Invoice.Amount}} - {{Invoice.Balance}} {{/Wp\_Eval}} dollar(s).

Zuora replaces `{{Invoice.Amount}}` and `{{Invoice.Balance}}` with the real data `100` and `90`.

You have paid {{#Wp\_Eval}} 100 - 90 {{/Wp\_Eval}} dollar(s).

And then evaluates the expression and returns the following information:

You have paid 10 dollar(s).

## Use evaluation expressions with if-else statements to dynamically generate content

You can use if-else statements in evaluation expressions to compare strings and dynamically generate content.

The following expression compares the tenant ID with `TN1`.

{{#Wp\_Eval}} "{{Tenant.ID}}" == "TN1" ? "The tenant ID is TN1" : "The tenant ID is not TN1" {{/Wp\_Eval}}

If the tenant ID is `TN1`, it returns the following information:

The tenant ID is TN1

Otherwise, the following information is returned:

The tenant ID is not TN1

The following expression is another example that compares the communication profile ID with `CP1`.

{{#Wp\_Eval}} "{{DataSource.Account.CommunicationProfileId}}" == "CP1" ? "<p>Dear {{DataSource.BillToContact.FirstName}},</p><p>...</p>" : "<p>Sehr geehrte/r {{DataSource.BillToContact.FirstName}},</p><p>...</p>" {{/Wp\_Eval}} <p>Acme Inc.</p>

If the communication profile ID is `CP1`, it returns the following information:

Dear John, … Acme Inc.

Otherwise, the following information is returned:

Sehr geehrte/r John, … Acme Inc.

## Use evaluation expressions to filter data that contains specific strings

You can use the `contains` function in evaluation expressions to check whether a merge field contains a specific string and return conditional content with if-else statements.

The following example returns the rate plan names that contain the keyword `Discount`.

{{#OrderAction.Subscription.RatePlans}} {{#Wp\_Eval}} "{{Name}}".contains("Discount") ? "" : "Discount plan: {{Name}}" {{/Wp\_Eval}} {{/OrderAction.Subscription.RatePlans}}

However, if you have multiple rate plans and most of the names do not contain `Discount` , it is recommended to use a custom field to indicate whether or not it is a discount rate plan.

For example, suppose that the `DiscountFlag__c` custom field on the RatePlan object is set to `1` if it is a discount rate plan.

The following example returns the names of rate plans where the `DiscountFlag__c` field equals `1`.

{{#OrderAction.Subscription.RatePlans|FilterByValue(DiscountFlag\_\_c,EQ,1)}} Discount plan: {{Name}} {{/OrderAction.Subscription.RatePlans|FilterByValue(DiscountFlag\_\_c,EQ,1)}}

## Dynamic tables with loop control

You can apply loop control to iterate over a group of objects and dynamically generate tables in email notifications.

The following example generates a table with details about the invoice items associated with the context Invoice object. Each row in the table corresponds to an invoice item from the Invoice object.

<table> <tr> <th>Product Name</th> <th>Service Start Date</th> <th>Service End Date</th> <th>Amount</th> </tr> {{#Invoice.InvoiceItems}} <tr> <td>{{ChargeName}}</td> <td>{{ServiceStartDate}}</td> <td>{{ServiceEndDate}}</td> <td>{{ChargeAmount}}</td> </tr> {{/Invoice.InvoiceItems}} </table>

The following table is generated:

| Product Name | Service Start Date | Service End Date | Amount |
| --- | --- | --- | --- |
| Monthly Charge | 2025-12-01 | 2025-12-31 | 19.9 |
| Monthly Charge | 2025-11-01 | 2025-11-30 | 19.9 |
| Monthly Charge | 2025-10-01 | 2025-10-31 | 19.9 |

For more information about loop control, see [Logic control and looping](/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-syntax-for-html-templates/logic-control-and-looping).
