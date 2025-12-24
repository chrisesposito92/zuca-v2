---
title: "System default template for invoices"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/select-default-template-for-billing-documents/system-default-template-for-invoices"
product: "zuora-billing"
scraped_at: "2025-12-24T05:40:21.874Z"
---

# System default template for invoices

Explains how to manage and configure system default templates for invoices, including setting custom templates as defaults and maintaining template relationships.

Specifically for invoices, if you upload a custom invoice template and click Make default in the Actions column, this action does two things:

-   It copies the template file and all settings from the uploaded template into the template called System Default Template .

-   It creates a relationship between the uploaded template and the system default template.


For as long as the system default template and the copied default custom invoice template remain unchanged, the linking relationship is preserved. Texts are displayed next to the system default template name to indicate it is copied from another custom template.

If you click Edit on either template and change the contents in the HTML online editor, the relationship is broken. After the relationship is broken, the system message will no longer be displayed whenever there might be a difference in the results of invoice generation between the two templates. Renaming either template does not affect the relationship between templates.

## Specify default templates for customer accounts

Templates are set at the customer level, not at the product level. The template used for a particular customer is defined in that customer's profile. When selecting 'Default Template' on Customer Accounts, the Credit/Debit Memo template currently configured as System Default Template in the Billing Settings is applied. When you change the System Default Templates to a different one, the Account-level Credit/Debit Memos are not updated accordingly.

## Use Zuora UI to configure templates for customers

For instructions on changing a customer's template, see Create a customer account. To ensure the customer always uses the default template, in the Billing and Payment Info section on the account details page, select the following options:

-   For invoices, select System Default Template in the Invoice Template field.

-   For credit memos or debit memos, select Default Template in the Credit Memo Template or Debit Memo Template field.


## Use API to configure templates for customers

The default template has its own unique unchangeable ID value. The template that is used for a particular customer is defined by the following fields. You can set these fields with a SOAP API update() call. If you set the field to the ID of the default template, you can ensure that billing documents sent to that customer always use the default template.

-   `Account.InvoiceTemplateId` (for invoices)

-   `Account.CreditMemoTemplateId` (for credit memos)

-   `Account.DebitMemoTemplateId` (for debit memos)


To find the ID of the default template, click your username at the top right and navigate to . In the Manage Invoice Rules and Templates tab or the Manage Invoice, Credit/Debit Memo Templates tab (if you have the Invoice Settlement feature enabled), click show id in the Actions column on the system default template line. The ID is a long hexadecimal number, such as`1028e262478a476401478a5034110c2b`.
