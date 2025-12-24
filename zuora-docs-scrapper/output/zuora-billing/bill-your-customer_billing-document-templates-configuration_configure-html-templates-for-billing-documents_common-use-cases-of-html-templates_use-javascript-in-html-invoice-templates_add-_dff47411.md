---
title: "Add JavaScript codes to HTML invoice templates"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/common-use-cases-of-html-templates/use-javascript-in-html-invoice-templates/add-javascript-codes-to-html-invoice-templates"
product: "zuora-billing"
scraped_at: "2025-12-24T05:43:54.554Z"
---

# Add JavaScript codes to HTML invoice templates

Learn how to integrate JavaScript into HTML invoice templates to enhance functionality and display dynamic content.

To add JavaScript codes to your HTML invoice template, perform the following steps:

1.  In your HTML invoice template, click the Rows block where you want to configure JavaScript codes. The Content panel is displayed on the right of the template editor.
2.  In the Content tab, drag and drop the HTML component into the HTML template.
3.  In the HTML template, click the HTML block. The Content panel is displayed on the right of the template editor.
4.  In the HTML section, type JavaScript codes in the HTML code editor. For example, you can type the following JavaScript codes in the HTML code editor:

    <strong id='greeting'\></strong> <script> document.getElementById('greeting').innerText = 'Hello World'; </script>

5.  Click Save to save the configurations.
6.  Click Preview to switch to the Preview mode.
7.  In the Preview Settings section, select an existing account and one invoice to preview the rendering result.

You can see the Hello World text displayed on the generated invoice PDF file.
