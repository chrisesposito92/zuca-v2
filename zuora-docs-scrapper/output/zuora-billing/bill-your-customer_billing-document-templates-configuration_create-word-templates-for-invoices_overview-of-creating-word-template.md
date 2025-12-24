---
title: "Overview of creating Word template"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/overview-of-creating-word-template"
product: "zuora-billing"
scraped_at: "2025-12-24T05:48:34.014Z"
---

# Overview of creating Word template

Learn about creating and customizing invoice templates in Zuora Billing to reflect your company's branding and display specific billing information.

With Zuora Billing, you can easily create and manage your invoice templates. Invoice templates are used to generate PDF invoices for your bills.

You can customize your invoice templates to have your company's look and feel (including adding your company's logo). You can also use merge fields to display only the billing and payments information you want your customers to see.

The design for the invoice template is focused on flexibility and ease of use for the business user. The Mail Merge functionality provides a great framework to make changes to the look and feel of the invoice template.

Note that invoice templates are set at the customer level, not at the product level.

## Custom invoice template workflow

Use these instructions with the sample template to start creating your own invoice template.

First, create mail merge fields and use tables to add information to the default template and customize how the invoice displays the information.

You can then use the advanced Mail Merge functionality to further customize your invoice template by doing the following:

-   Define the format for date and number fields

-   Change the sort order on a table

-   Use a filter on a Previous Transactions table

-   Display custom fields on the invoice

-   IF Mergefields

-   Configure the transaction table (transactions associated with this invoice)

-   Use Barcodes on Invoice Templates

-   Summarize Invoice Items


## Use your invoice template to create an account statement

You can set up your invoice template to include account balance information that is useful for creating statements. There are two fields that can be used to configure your invoices to show full statement information, including the previous account balance, and new balance based on the application of charges on the invoice. These fields are:

-   Account Previous Balance: This is a dynamically calculated field that represents the account balance before an invoice is posted. For example, if an account had one previous invoice with an outstanding balance of $100, and generates a new invoice for $75 showing the Account Previous Balance, this field would show $100 when displayed on the new invoice.

-   Account New Balance: This field represents the balance on an account after the invoice has been posted. In the previous example, the Account Previous Balance was $100, the invoice balance of the invoice is $75, so Account New Balance = $100 + $75 = $175.


## System default template

To see the system default template, click your username at the top right and navigate to . In the Manage Invoice, Credit/Debit Memo Templates tab, a template called System Default Template is the system default one. It can be renamed, but unlike other templates, it cannot be deleted.

The template file and settings for the system default template depend on whether you have uploaded any custom invoice templates.

If you have not uploaded any custom invoice templates, the template called System Default Template is set as the standard Zuora template file, which is available to download in the Manage Invoice, Credit/Debit Memo Templates tab.

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/d8dd62b2-7411-4fd3-99ba-1600df295e66?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImQ4ZGQ2MmIyLTc0MTEtNGZkMy05OWJhLTE2MDBkZjI5NWU2NiIsImV4cCI6MTc2NjY0MTcxMSwianRpIjoiMTUwMTU1NGJmNDA1NDYwMThkZTI3MWVjMzZlODNiNWUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.YKCPUMPPsH-qif9c60TLlgKfkJJFGG3eEUcWx5UVmVA)

## Relationship with the default custom invoice template

If you have uploaded a custom invoice template and set it as the default template (by clicking make default in the Actions column), the template called System Default Template will be linked to this template. Texts will be displayed next to the system default template name to indicate it is copied from another custom template.

The system default template will have the same file as the custom template, and also have the same settings.

## Switch the default custom invoice template

You can make another uploaded template the default template by clicking make default in the Actions column. This copies the new default template file and settings to the template called System Default Template and overwrites its existing contents.

## Edit system default template or copied default template

Clicking make default for an uploaded template does two things:

-   It copies the template file and all settings from the uploaded template into the template called System Default Template .

-   It creates a relationship between the uploaded template and the system default template.


For as long as the system default template and the copied default custom invoice template remain unchanged, the relationship is preserved. Texts are displayed next to the system default template name to indicate two templates are the same.

If you click Edit on either template and change any of the following settings, the relationship is broken:

-   Replace the template file

-   Change the invoice file generation service

-   Change the Do not display zero value invoice line items rule setting


After the relationship is broken, the system message will no longer be displayed whenever there might be a difference in the results of invoice generation between the two templates. Renaming either template does not affect the relationship between templates.

## How to ensure a customer always uses the default template

The invoice template that is used for a particular customer is defined in that customer's profile. If you set a customer's profile to use the system default template, you can ensure that invoices sent to that customer will always use whichever template is linked to the system default template. This allows you to easily change the default template without having to update all your customer profiles each time.

## Configure invoice template for a customer in the UI

For instructions on changing a customer's invoice template, see Create a customer account . To ensure the customer always uses the default template, in the Billing and Payment Info section on the account detail page, select System Default Template for the Invoice Template field.

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/c4ec9dc0-3257-4bee-bc3b-a5e2287798ac?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImM0ZWM5ZGMwLTMyNTctNGJlZS1iYzNiLWE1ZTIyODc3OThhYyIsImV4cCI6MTc2NjY0MTcxMSwianRpIjoiOTE5OGRiZmEwMWE2NGNiMzkyNGYxYzE3MTc4MzIyYjEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.mj6TNqvpFn4Lfnp7vEPqJZwrCCcQnD6DJa3cpoVA6Lg)

## Configure invoice template for a customer in the API

The system default template has its own unique ID value, which never changes. The invoice template that is used for a particular customer is defined by the `Account.InvoiceTemplateId` field. If you set this field to the ID of the system default template, you can ensure that invoices sent to that customer will always use the default template that System Default Template is linked to.

To find the ID of the system default template, click your username at the top right and navigate to . In the Manage Invoice, Credit/Debit Memo Templates tab, click show id in the Actions column on the system default template line. The ID is a long hexadecimal number, such as `1028e262478a476401478a5034110c2b` .

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/0d390d36-a59e-4049-9c14-3f3a3f7a15f6?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjBkMzkwZDM2LWE1OWUtNDA0OS05YzE0LTNmM2EzZjdhMTVmNiIsImV4cCI6MTc2NjY0MTcxMSwianRpIjoiYTg2MjhhOGYwZjU3NDA1YmFjZTJjOWFmMjAwMjA5ODMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.SYCCCLpkI6zrlP6RS06Aoj22wUUQ6LAB7gBcOfQ7TAE)

You can set `Account.​InvoiceTemplateId` with a SOAP API update() call. In the following example, `Id` is the customer account ID, and `InvoiceTemplateId` is the ID of the System Default Template.

<ns1:update xmlns:ns1="http://api.zuora.com/"\> <ns1:zObjects xsi:type\="ns2:Account" xmlns:ns2="http://object.api.zuora.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\> <ns2:Id>40289262478a476401478a503411002b</ns2:Id> <ns2:InvoiceTemplateId>1028e262478a476401478a5034110c2b</ns2:InvoiceTemplateId> </ns1:zObjects> </ns1:update>

## Troubleshooting

If you encounter any problems, see Troubleshooting Custom Invoice Templates for a list of common problems and solutions.

## Avoid using complex invoice templates

Avoid using complex invoice templates to speed up invoice PDF generation. See Avoid Complex Invoice Templates for more information.

## Supported merge fields

For information about the fields that you can include in your invoice templates, see the list of supported merge fields .

## Limits on Word templates for billing documents

The Word templates for billing documents have the following limits:

-   For memo PDF files: Up to 20,000 line items are allowed in a single memo PDF file.

-   For invoice PDF files: When generating an invoice PDF file, you will receive an error message if the maximum number is exceeded.

    -   A maximum of 100,000 usage charges can be processed to generate a usage nested table on a PDF file.

    -   A maximum of 100,000 invoice items can be processed to generate an invoice item nested table on a PDF file.

    -   A maximum sum of 20,000 invoice items, usage charges, and taxation items can be displayed in a detailed table or nested table on a PDF file.

    -   A maximum of 2,000 records are allowed for each of the following tables to be generated into a PDF file (2,000 is the default limit; the maximum limit is 10,000. Contact [Zuora Global Support](https://support.zuora.com/) if you want to raise the limit:

        -   Transactions

        -   Previous transactions

        -   Subscriptions
