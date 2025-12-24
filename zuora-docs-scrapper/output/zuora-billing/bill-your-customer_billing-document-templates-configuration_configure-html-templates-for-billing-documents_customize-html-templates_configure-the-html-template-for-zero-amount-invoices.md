---
title: "Configure the HTML template for zero amount invoices"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/customize-html-templates/configure-the-html-template-for-zero-amount-invoices"
product: "zuora-billing"
scraped_at: "2025-12-24T05:42:40.053Z"
---

# Configure the HTML template for zero amount invoices

Learn to configure the HTML template to exclude zero amount invoice items in Zuora.

Learn how to configure zero amount invoice items on the invoice template in generated PDFs.

By default, Zuora generates invoice line items even if the charge amount is zero.

When you view invoice details from the Zuora UI, you can choose to hide zero amount invoice items.

To configure the HTML template for zero amount invoices, perform the following steps:

1.  Click your username at the top right and navigate to .
2.  On the Manage Invoice, Credit/Debit Memo Templates tab, click the invoice HTML template that you want to configure. The selected template is displayed in the online HTML template editor. By default, the template lists all invoice items, including those with zero amounts.
3.  Select the table and scroll down to the filter section on the right side of the page.
4.  Click Add to add an additional filter to exclude zero amount line items.
5.  In the Add Filter By dialog box, enter the following:

    -   Field: Select 'ChargeAmount'

    -   Operator: Enter '!='

    -   Value: Enter '0'


6.  Click Preview at the top of the page to preview the updated template.

Only the nonzero amount items will be displayed on the page.
