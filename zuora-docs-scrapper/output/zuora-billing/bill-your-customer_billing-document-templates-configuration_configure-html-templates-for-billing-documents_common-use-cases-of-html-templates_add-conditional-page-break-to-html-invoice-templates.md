---
title: "Add conditional page break to HTML invoice templates"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/common-use-cases-of-html-templates/add-conditional-page-break-to-html-invoice-templates"
product: "zuora-billing"
scraped_at: "2025-12-24T05:42:45.368Z"
---

# Add conditional page break to HTML invoice templates

Learn how to add conditional page breaks to HTML invoice templates for generating PDF files.

In the HTML template editor, you can use the HTML component to add conditional page breaks to generated PDF files.

To add a conditional page break to the HTML template, perform the following steps:

1.  In the Content tab of the HTML template editor, drag the Columns component into the HTML template. A Column block is displayed in the HTML template. It is best practice to add it to the middle of the template.
2.  In the HTML template, click the Row block where you want to add the page break code.
3.  In the Content tab, drag and drop the HTML component into the HTML template.
4.  In the HTML template, click the HTML block. The Content panel is displayed on the right of the template editor.
5.  In the HTML section, enter the following HTML code in the HTML editor. The following example presents a condition if the invoice has items of the product whose `InvoiceGroup__c` custom field does not equal to `Electricity` , then a page break is created; otherwise, no page break is created. You can adjust the condition according to your demand.

    {{#Wp\_Eval}} {{Invoice.InvoiceItems|FilterByValue(ProductRatePlanCharge.ProductRatePlan.Product.InvoiceGroup\_\_c,NE,Electricity)|Size}} > 0 ? \` <div> <div class="z-page-break"\> <span>Page Break</span> </div> <div class="z-page-break-print"\></div> <div></div> </div> \`: '' {{/Wp\_Eval}}

6.  Click Preview , and select an account and an invoice in the Preview Settings section to preview the corresponding PDF file. If a PDF file has multiple pages due to the conditional page breaks, you can see it in the invoice PDF file displayed.
