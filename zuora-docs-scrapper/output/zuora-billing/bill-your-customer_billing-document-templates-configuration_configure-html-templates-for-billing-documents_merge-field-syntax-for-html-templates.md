---
title: "Merge field syntax for HTML templates"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/merge-field-syntax-for-html-templates"
product: "zuora-billing"
scraped_at: "2025-12-24T05:45:21.752Z"
---

# Merge field syntax for HTML templates

This article explains the syntax for merge fields in HTML templates, including their structure, usage, and the importance of correct naming conventions to avoid errors.

This article describes the merge field syntax you must follow when using HTML templates.

A merge field is a field you can put into templates to automatically incorporate values from data when a document is generated from the template. In templates, you can define merge fields that are automatically filled with the value when a document is generated.

A merge field used in HTML templates is surrounded by double curly brackets. You can refer to the [Mustache Specification](https://mustache.github.io/mustache.5.html) for more information about the merge field syntax that Zuora supports in HTML templates.

When creating new HTML templates under , you must use the correct HTML syntax. The syntax name must exactly match the names listed on the page. Using an incorrect or misspelled function name will lead to an error. For example, if you use `{{InvoiceItems|Sizes}}` in the HTML template editor instead of the correct `Size` , the following error will be displayed:

The function 'Sizes' is not supported in HTML Templates. Please try with 'Size' instead. Code: `{{InvoiceItems|Sizes}}`

Note:

Starting 2025.Q2.0.0, all newly created or updated templates will be subject to strict function name validation. Existing templates will continue to function as-is unless modified. However, if an existing template is edited in the future, it must also comply with the correct function naming conventions, otherwise, an error will be triggered.

## Overview

A merge field is a dotted data path consisting of objects and fields enclosed by double curly brackets. For example:

-   `{{Invoice.InvoiceNumber}}:` used to incorporate the invoice number of an invoice.

-   `{{Invoice.Account.BillTo.FirstName}}` : used to incorporate the first name of the bill-to-contact associated with an invoice.


You cannot omit the root object when defining merge fields in HTML templates.

-   Invoice is the root object for invoice templates.

-   CreditMemo is the root object for credit memo templates.

-   DebitMemo is the root object for debit memo templates.


When defining merge fields, you can only place objects on the left of the dot (.), while scalar type fields or lists are not allowed. For example, the following merge fields are valid:

-   `{{Invoice.Account.Name}}`

-   `{{Invoice.Account.BillTo.FirstName}}`

-   `{{Invoice.Account.Invoices}}`


Merge fields are mainly classified into three types: variables, sections, and inverted sections. You can decorate each type of merge fields with different functions to achieve the goal of data transformation.

## Variables

Variables are the most basic merge fields. A variable type merge field like `{{Invoice.InvoiceNumber}}` is replaced with a corresponding value according to the data path indicated by the merge field at template rendering time.

For example, assume that an invoice has the invoice number of INV-0000001, and its balance is 100.00.

If you define the following merge fields in an HTML invoice template, you can see they are replaced with the following values on the rendered invoice:

-   `{{Invoice.InvoiceNumber}}` is replaced by INV-0000001.

-   `{{Invoice.Balance}}` is replaced by 100.00.


HTML templates support two types of variables:

-   Builtin variables Builtin variables are variables whose names are Zuora business objects and field names. For example, `{{Account.AccountNumber}}` , `{{InvoiceDate}}` , and so on.

-   Custom variables Custom variables are user-defined variables by using the `Cmd_Assign` command. Each custom variable has its own scope. If it is a local variable, it can only be used in the section of its immediate parent object. For example:{{#Invoice}} {{Cmd\_Assign(MainId,Id,False) …… {{MainId}} is valid here. {{/Invoice}} {{#default\_\_customobjects}} …… {{! MainId is invalid here}} {{/default\_\_customobjects}}


In the preceding example, MainId is a local variable that is available within the "Invoice" section, but it is not accessible in the section of `default__customobjects` .

However, if a variable is defined as a global variable, it can be used anywhere in the template. You can use global variables as merge fields, in expressions, and as part of conditional logic in functions. For more information about how to define global variables, see Defining global variables.

To use custom variables, you must define them first. It is recommended to refrain from assigning the name of a standard object or attribute to a new variable as it may lead to unexpected results.

## Sections

You can use sections to render blocks of text one or more times, depending on the value of the key in the current context.

A section begins with a pound and ends with a slash. That is, `{{#Invoice}}` begins an "Invoice" section while `{{/Invoice}}` ends it.

Inside sections, you can use variable-type merge fields, and can omit the object name of a field.

Sections can be classified into three types: object sections, list sections, and boolean sections.

## Object sections

If a merge field represents an object, you can use the merge field as an object section.

For example, Invoice is a single object for invoice templates, you can define it as an object section.

{{#Invoice}} {{InvoiceNumber}} \# In the context of Invoice, you can directly use InvoiceNumber. {{Amount}} {{Account.Name}} {{/Invoice}}

You can use object sections to shorten merge fields defined in HTML templates. For example, to simplify the `{{Invoice.InvoiceNumber}} {{Invoice.Balance}}` merge fields, you can use the following section instead:

{{#Invoice.InvoiceItems}} # InvoiceItems is a list type attribute of the Invoice object. ChargeName: {{ChargeName}} {{/Invoice.InvoiceItems}}

## List sections

If a merge field represents a list of records, you can use the merge field as a list section. The content inside the section will be rendered and displayed for each record in the list.

List sections are typically used to build a data table. If a list is empty, no content is displayed on the rendered billing document.

For example, to display the line items of an invoice, you can define the following list section in HTML templates:

{{#Invoice.InvoiceItems}} # InvoiceItems is a list type attribute of the Invoice object. ChargeName: {{ChargeName}} {{/Invoice.InvoiceItems}}

Assume that an invoice contains three charge line items as follows:

{ ...., "InvoiceItems": \[ { "ChargeName": "C-000001" }, { "ChargeName": "C-000002" }, { "ChargeName": "C-000003" } \], ... }

If you define the preceding list section in an HTML invoice template, you can see the following information displayed on the rendered invoice:

ChargeName: C-000001

ChargeName: C-000002

ChargeName: C-000003

## Boolean sections

In addition to object and list sections, you can also use boolean values as sections.

For example, if an account has the AutoPay option enabled, the following merge fields only display the value of `CreditCardMaskNumber` for the account.

{{#Invoice.Account.AutoPay}} Payment Method: {{Invoice.Account.DefaultPaymentMethod.CreditCardMaskNumber}} {{/Invoice.Account.AutoPay}}

## Inverted sections

You can use inverted sections to render text once based on the inverse value of the merge field. That is, they will be rendered if the object merge field key does not exist, the boolean value is false, or the list is empty.

For example, if the input InvoiceItems list is empty, you cannot see any invoice items but the `No line items.` message displayed in the rendering result. If an invoice account does not have the AutoPay option enabled, you can see the `Not Auto Pay` message displayed in the rendering result.

{{^Invoice.InvoiceItems}} \# If the InvoiceItems list is empty. No line items. {{/Invoice.InvoiceItems}} {{^Invoice.Account.AutoPay}} Not Auto Pay {{/Invoice.Account.AutoPay}}

## Decorated merge fields

To transform data, you can apply functions to the data represented by a merge field.

A decorated merge field is a regular merge field, like `{{Invoice.InvoiceItems}}` , decorated with functions. For example:

{{Invoice.InvoiceItems|FilterByValue(ChargeAmount,GT,0)|Sum(ChargeAmount)}}

A Pipe character ("|") is an operator that passes the previous data as input to its right side function. In the preceding example, it transforms data as follows:

-   `Invoice.InvoiceItems|FilterByValue(ChargeAmount,GT,0)` filters out all invoice items with zero and negative amounts.

-   `FilterByValue` is a function applied to the InvoiceItems list, and `(ChargeAmount,GT,0)` are the three arguments of the function. The output of the function is all the invoice items with positive amounts.

-   `Sum` is another function whose input is all the invoice items with positive amounts; it simply sums up all charge amounts of positive invoice items and outputs a total number.


As you can see from the preceding example, you can chain decorator functions as long as the input type matches the function's argument type.

The following image shows an example of decorated merge fields:

![HTML_invoice_decorated_merge_fields.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/d6e350a9-7b24-4c64-952f-0e20c4d39567?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImQ2ZTM1MGE5LTdiMjQtNGM2NC05NTJmLTBlMjBjNGQzOTU2NyIsImV4cCI6MTc2NjY0MTUxOSwianRpIjoiMTZmMzgwMmIzMTJlNGNjMTg3NGI5NjAxYTdhNWFkOGUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.5AGVZPQtMmGAtFwNU_1OXJ3bn3GXFvdmUQC7_dtcM9E)

For a full list of supported decorator functions, see Functions used in merge fields for more information.

## Logic control and looping

For more information, see Logic control and looping .

## Functions used in merge fields

For more information about the functions that you can use in HTML templates, see Functions used in merge fields .

## Expressions

For information on utilizing Expressions in your HTML templates, see Expressions .

## Commands

A command is a merge field that is parsed and executed with side effects, for example, to change the value of other objects or create new objects. Commands have no return value, so if a Command merge field is used, the merge field itself shows nothing.

## Cmd\_Assign

The `Cmd_Assign` command takes three arguments. The first one is a variable name, which can only contain alphabet characters, aka, \[0\_9a-zA-Z\_\]. The second argument is a merge field whose value will be assigned to the variable and the merge field can be decorated. For example, `{{Cmd_Assign(MaxInvoiceAmount,Account.Invoices|Max(Amount),False)}}` .

The third argument is an optional boolean value indicating whether this variable is a global variable; its default value is `False` , which means the variable is a local variable.

What this command does is to evaluate the right argument if it is a merge field and assign the value to the variable, and then append that variable as a new field of its immediate container object. For example:

{{#Invoice}} {{Cmd\_Assign(Inv\_id,Id)}} {{/Invoice}}

In the preceding example, a new attribute of `Inv_id` will be appended to the invoice with the value of `Invoice.Id` .

You can also use `Cmd_Assign` in a list section, for example:

{{#InvoiceItems|FilterByValue(ProcessingType,EQ,0)}} (1) {{Cmd\_Assign(RegularItemId,Id)}} (2) {{ChargeName}} - {{ChargeAmount}} - {{#InvoiceItems|FilterByRef(AppliedToInvoiceItemId,EQ,RegularItemId)}} (3) \* {{ChargeName}} - {{ChargeAmount}} {{/InvoiceItems|FilterByRef(AppliedToInvoiceItemId,EQ,RegularItemId)}} {{/InvoiceItems|FilterByValue(ProcessingType,EQ,0)}}

In the preceding example, line (1) lists all invoice items for non-discount charges. Line (2) appends a new attribute named `RegularItemId` with the value of `InvoiceItem.Id` . Line (3) is to get all the InvoiceItems, of which `AppliedToInvoiceItemId` equals to the variable RegularItemId. Because the `RegularItemId` attribute is created only for the non-discount charges, so for discount charges, no such attribute exists. Therefore, the engine will check its outer object, which is the object of the list defined in line (1).

The `Cmd_Assign` command does not support defining variables according to conditions. For one variable, it can have only one definition.

Note that the variable defined by `Cmd_Assign` is only available in scope of its immediate container object, so it cannot be used as a global variable.

## Cmd\_ListToDict :

You can use Cmd\_ListToDict to transform a list of object into a dict object. For example,

{{Cmd\_ListToDict(default\_\_messageses|FilterByValue(locale\_\_c,EQ,zh\_CN),key\_\_c,value\_\_c,Message)}} {{#Invoice}} {{Message.account\_name}}: {{Account.Name}} {{Message.invoice\_number}}: {{InvoiceNumber}} {{/Invoice}}

To execute the above command, four parameters are needed.

-   A list of object

-   A key attribute name

-   A value column name

-   A New Dict name (to reference this object in the template)


With the above command you can perform a localization similar to as follows,

{{Message.invoice\_title}} {{Message.account\_name}}

The values of `invoice_` `title` and `account` `_` `name` belong to the `key` column.

## Cmd\_Compose and Cmd\_Column

The Cmd\_Compose and Cmd\_Column helps to create a new table dynamically. To learn more about the dynamic table, you can refer to the source code of the Previous Transaction table. For example,

{{#Cmd\_Compose(PreviousTransactionsPosted)}} {{#Cmd\_Column(TransactionType)}}Transaction Type{{/Cmd\_Column(TransactionType)}} {{#Cmd\_Column(TransactionDate)}}Transaction Date{{/Cmd\_Column(TransactionDate)}} {{#Cmd\_Column(TransactionNumber)}}Transaction Number{{/Cmd\_Column(TransactionNumber)}} {{#Cmd\_Column(Description)}}Description{{/Cmd\_Column(Description)}} {{#Cmd\_Column(TransactionAmount)}}Transaction Amount{{/Cmd\_Column(TransactionAmount)}} {{#Cmd\_Column(AccountBalanceImpact)}}Account Balance Impact{{/Cmd\_Column(AccountBalanceImpact)}} {{#Cmd\_Column(TaxAmount)}}Tax Amount{{/Cmd\_Column(TaxAmount)}} {{#Cmd\_Column(AmountWithoutTax)}}Amount Without Tax{{/Cmd\_Column(AmountWithoutTax)}} {{#Cmd\_Column(ReferenceId)}}Payment Reference Id{{/Cmd\_Column(ReferenceId)}} {{#Cmd\_Column(AdjustmentType)}}Adjustment Type{{/Cmd\_Column(AdjustmentType)}} {{! Payments }} {{Account.Invoices|SortBy(PostedDate,DESC)|FilterByValue(Status,EQ,Posted)|FilterByRef(PostedDate,LE,VarPrevDate)|Map("Invoice",InvoiceDate,InvoiceNumber,Comments,Amount,Amount,TaxAmount,AmountWithoutTax,'','')|First(1)}} {{Account.Payments|FilterByValue(Status,EQ,Processed)|FilterByRef(CreatedDate,GE,VarPrevDate)|FilterByRef(CreatedDate,LE,VarEndDate2)|Map("Payment",EffectiveDate,PaymentNumber,Comment,Amount,Amount,'','',ReferenceId,'')}} {{! Refunds, Refund.Refund.Status=Processed }} {{Account.Refunds|FlatMap(RefundInvoicePayments)|FilterByValue(Status,EQ,Processed)|FilterByRef(CreatedDate,GE,VarPrevDate)|FilterByRef(CreatedDate,LE,VarEndDate2)|Map("Refund",RefundDate,RefundNumber,Comment,RefundAmount,RefundAmount,'','','','')}} {{! CreditMemo }} {{Account.CreditMemoes|FilterByValue(Status,EQ,Posted)|FilterByRef(PostedOn,GE,VarPrevDate)|FilterByRef(PostedOn,LE,VarEndDate2)|Map("CreditMemo",MemoDate,MemoNumber,Comments,TotalAmount,TotalAmount,TaxAmount,TotalAmountWithoutTax,'','')}} {{! DebitMemo }} {{Account.DebitMemoes|FilterByValue(Status,EQ,Posted)|FilterByRef(PostedOn,GE,VarPrevDate)|FilterByRef(PostedOn,LE,VarEndDate2)|Map("DebitMemo",MemoDate,MemoNumber,Comments,TotalAmount,TotalAmount,TaxAmount,TotalAmountWithoutTax,'','')}} {{/Cmd\_Compose(PreviousTransactionsPosted)}}

## Defining global variables

You can use the `Cmd_Assign` command to define global variables.

In the following example, the value of the third argument in the `Cmd_Assign` command is `True` , indicating that `VarEntityNumber` and `VarEntityTotalAmount` are defined as global variables. The value of the `EntityNumber__c` merge field is assigned to the `VarEntityNumber` global variable, and the value of the `EntityTotalAmount__c` merge field is assigned to the `VarEntityTotalAmount` global variable.

For example, the following boolean values of variables are `True` :

{{#Invoice.Account.default\_\_legalentities|First(1)}} {{Cmd\_Assign(VarEntityNumber,EntityNumber\_\_c,True)}} {{Cmd\_Assign(VarEntityTotalAmount,EntityTotalAmount\_\_c,True)}} {{/Invoice.Account.default\_\_legalentities|First(1)}}

The rendering result of the preceding global variables can be `VarEntityNumber` and `VarEntityTotalAmount` .

You can use the global variables defined in the preceding command example as merge fields in HTML templates, for example:

Entity Number: {{VarEntityNumber}} Entity Total Amount: {{VarEntityTotalAmount}} Entity Total Amount: {{VarEntityTotalAmount|Localise}}

In addition, you can also use the global variables in functions as part of conditional logic. For example, to display the tax information for the UK entity and countries other than the UK entity, you can use the global variables in the `EqualToVal` function as part of conditional logic in the following section:

{{#VarEntityNumber|EqualToVal(100001)}} Display tax information for UK entity {{/VarEntityNumber|EqualToVal(100001)}} {{^VarEntityNumber|EqualToVal(100001)}} Display tax information for countries other than UK entity {{/VarEntityNumber|EqualToVal(100001)}}

You can also use the global variables in expressions. For example, you can use the global variables in the following expression to display the UK tax information:

{{#Wp\_Eval}} "{{VarEntityNumber}}" == "100001" ? "show UK tax info" : "" {{/Wp\_Eval}}
