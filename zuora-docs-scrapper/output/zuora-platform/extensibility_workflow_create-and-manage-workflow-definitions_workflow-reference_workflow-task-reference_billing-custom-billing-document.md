---
title: "Billing: Custom Billing Document"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/billing-custom-billing-document"
product: "zuora-platform"
scraped_at: "2025-12-24T05:36:13.058Z"
---

# Billing: Custom Billing Document

This reference describes the Billing: Custom Billing Document task.

The custom billing document task generates a billing document PDF file based on an HTML template, and then attaches the generated PDF file to the billing document that is Draft or Posted status. You can customize your billing document template using HTML tags, CSS, images, JavaScript and Liquid expressions.

If [Invoice Settlement](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-overview) is not enabled, only the generation of invoice files is supported. If Invoice Settlement is enabled, generation of credit memo and debit memo files is also supported.

Compared with the Microsoft Word Mail Merge invoice template in Zuora, an HTML template provides more advanced controls as well as more room for customization.

A valid HTML template should include three parts: body, header, and footer. The body part is specified in the Template tab. The header and footer parts are specified in the Advanced Settings tab.

For PDF generation, the task uses the [page.pdf component](https://github.com/puppeteer/puppeteer/tree/main/docs) of the Puppeteer Node library. For attaching PDFs to billing documents, the task uses the Zuora API that uploads files for billing documents. For each billing document, a maximum of 50 PDF files can be uploaded. For details about the API operation, see [Upload a file for an invoice](https://developer.zuora.com/v1-api-reference/api/operation/POST_UploadFileForInvoice/) in the API Reference.

To test the output of your template, save your template as an HTML file and open it in Chrome (version 77.0.x or later). You can then select Print and use Save as PDF as the destination. The maximum size of a PDF file to upload is 4 MB. If the size of the saved PDF is greater than 4 MB, you need to downsize your template accordingly.

For a complete use case and template code examples, see the "Custom Invoice" workflow template under the Invoicing category. This template is explained in [Customize invoice templates using HTML](/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/customize-html-templates).

A timeout error will occur if this task is not completed in 3 minutes.
