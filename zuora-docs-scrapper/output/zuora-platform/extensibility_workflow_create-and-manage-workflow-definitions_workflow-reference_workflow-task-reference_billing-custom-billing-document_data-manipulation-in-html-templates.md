---
title: "Data manipulation in HTML templates"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/billing-custom-billing-document/data-manipulation-in-html-templates"
product: "zuora-platform"
scraped_at: "2025-12-24T05:36:18.072Z"
---

# Data manipulation in HTML templates

Use this reference to understand the approaches to manipulate data in HTML templates.

There are two ways you can manipulate data to be used in HTML templates.

-   Use <script> tags within the HTML template. If you want to do simple data evaluation and manipulation, you can take this approach. See the section below for details.

-   Use a JSON Transform task prior to the Custom Invoice task. If you need to do complex data grouping and sorting, you can take this approach. Complete the data manipulation using the JSONata processor in the JSON transform task and then use Liquid to reference the transformed data in the custom invoice task. To learn more about the JSON Transform task, see [Logic: JSON Transform](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/logic-json-transform).


## Use <script> tags within the HTML template

You need to enclose your JavaScript code within `<script>` tag. To insert JavaScript code into the HTML template, use the standard HTML DOM methods (`getElementById` element and `innerHTML` property).

Below is an example of including <script> element in an HTML template. Note that the <script> is placed after the <body> element. This is to ensure that the `invoiceItemQuantity` element exists before you use the `innerHTML` property to set the value of this element.

<!doctype html> <html> <head> <style> .invoice-box, .invoice-box table { width: 100%; line-height: inherit; text-align: left; table-layout: fixed; background-color: transparent; border-collapse: collapse; max-width: 800px; font-size: 12px; font-weight: 300; font-family: 'Gill Sans', sans-serif; } </style> </head> <body> <div id="invoiceItemJSON"\></div> </body> <script> const invoiceItems = {% if Data.InvoiceItem %} {{- Data.InvoiceItem | to\_json -}}; {%- endif -%} var firstInvoiceQuantity = invoiceItems\[0\].Quantity; document.getElementById("invoiceItemQuantity").innerHTML = firstInvoiceQuantity; </script> </html>

In the JavaScript code, you can reference the data in the payload of the workflow using Liquid. A Liquid logical statement starts with "{%" and ends with "%}". A Liquid data expression is enclosed within "{{" and "}}". The Custom Invoice task parses Workflow data in Liquid before processing the whole <script> code.

You can reference external JavaScript libraries.

To include images in body, header, or footer templates, use the <img> HTML tag. To include images in these templates, convert the images into Base64-encoded strings and reference the strings in the <img> tag. For the body template, you can also use an online image by specifying its URL as the value for the `src` attribute in <img> tag.

## Use external fonts in templates

You can use external fonts in templates. To do so, complete the following steps:

1.  Download the font file that you want to use in your invoice templates.

2.  Convert the font file to WOFF.

3.  Generate a Base64 string for the WOFF file.

4.  Use the @font-face rule to define this font in your CSS. For example:

    @font-face { font-family: 'your-font-name'; src: url(data:application/x-font-woff;charset=utf-8;base64,PASTE-BASE64-HERE); font-style: normal; font-weight: 400; }
5.  Reference the font with the font name that you define in Step 4. For example:

    .invoice-box.header { width: 100%; margin-left: 10px; margin-right: 10px; margin-top: 10px; font-size: 11px; text-align: left; font-family: 'your-font-name'; }

For more information about how to encode a font file with Base64, see [this page](https://stephenscaff.com/articles/2013/09/font-face-and-base64-data-uri/)
