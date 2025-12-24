---
title: "Add watermarks to HTML invoice templates"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/common-use-cases-of-html-templates/add-watermarks-to-html-invoice-templates"
product: "zuora-billing"
scraped_at: "2025-12-24T05:42:47.896Z"
---

# Add watermarks to HTML invoice templates

Learn how to add customizable watermarks to HTML invoice templates, including options for text, color, size, and conditional display.

In the HTML template editor, you can use the HTML component to add watermarks to generated invoice PDF files, for example, adding a big red watermark named "TESTING".

-   You can use any text as a watermark.

-   You can customize the color, text size, rotate of a watermark.

-   You can select to display the watermark conditionally, for example, displaying the watermark only for invoices in Draft status.


To add a watermark to invoice PDF files, perform the following steps:

1.  In the Content tab of the HTML template editor, drag and drop the Columns component into the HTML template. A Column block is displayed in the HTML template. It is best practice to add it to the middle of the template.
2.  In the HTML template, click the Row block where you want to add the watermark code.
3.  In the Content tab, drag and drop the HTML component into the HTML template.
4.  In the HTML template, click the HTML block. The Content panel is displayed on the right of the template editor.
5.  In the HTML section, input the following HTML code in the HTML editor. Additionally, you can set the container padding to 0, so that the Row block does not take up space.

    <div style="position: fixed; bottom: 500px; left: 200px; z-index: 10000; font-size:100px; color: red; transform:rotate(-30deg); opacity: 0.6;"\> TESTING </div>

6.  View the template in Edit mode. You can edit the HTML source to change the text, font size, font color, rotation, and opacity.
7.  Click Preview , and select an account and an invoice in the Preview Settings section to preview the corresponding PDF file. If a PDF file has multiple pages, every page displays the same watermark.
8.  If you want to display the watermark only for invoices in Draft status, use the following HTML codes instead:

    {{#Invoice.Status|EqualToVal(Draft)}} <div style="position: fixed; bottom: 500px; left: 200px; z-index: 10000; font-size:100px; color: red; transform:rotate(-30deg); opacity: 0.6;"\> DRAFT </div> {{/Invoice.Status|EqualToVal(Draft)}}
