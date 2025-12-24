---
title: "Conditional logic (IF fields)"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/conditional-logic-if-fields"
product: "zuora-billing"
scraped_at: "2025-12-24T05:50:00.041Z"
---

# Conditional logic (IF fields)

This topic covers information about how to use conditional logic in invoice templates to customize displayed information based on customer data and charge attributes.

## Using Conditional Logic on Invoice Templates

The number of invoice templates your business needs can increase with every new payment method, seasonal discount, and more. Consolidate invoice templates by using conditional logic. Based on customer information or charge attributes, you can display different pieces of information on an invoice. For example, you can display different instructions based on a customer’s payment method:

## What Are IF Fields?

IF fields contain IF/THEN logic that allows you to customize what is displayed on a customer's invoice based on the value of a merge field. For example, you can display the price of an invoice item as a numerical dollar amount, or, if the amount is zero, display "FREE".

See [Customize Invoice Templates Using Word Mail Merge](/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/billing-document-templates-customization-using-word-mail-merge) for information on how to insert merge fields into an invoice template.

## What IF Fields Can't Do

-   IF fields cannot hide or display specific table columns or rows.

-   IF fields cannot hide or display recursive tables.


## IF Field Syntax

IF fields test the value of a merge field (the test condition), then display different results depending on whether the test result is `true` or `false` . The format of an IF field is:

`{ IF [Test Condition] [Result Displayed if TRUE] [Result Displayed if FALSE] }`

The result displayed can be text, the value of a merge field, a table, or nothing.

See [Merge Fields Supported in IF Fields on Invoice Templates](/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/merge-fields-supported-in-if-fields-on-invoice-tempaltes) for information on which merge fields you can use with IF fields.

For more information on using IF fields, go to the Microsoft Office Support Center.

Note:

Having nested IF conditions in invoice templates might lead to very slow invoice PDF generation. See [Avoid Complex Invoice Templates](/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/avoid-complex-invoice-templates) for more information.
