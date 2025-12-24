---
title: "Add images from the Internet to HTML templates"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/customize-html-templates/configure-images-in-html-templates/add-images-from-the-internet-to-html-templates"
product: "zuora-billing"
scraped_at: "2025-12-24T05:41:51.427Z"
---

# Add images from the Internet to HTML templates

Learn how to add images from the Internet to HTML templates, using invoices as an example, with steps for configuring image properties and saving the template.

This tutorial takes invoices as an example; the configuration procedure is similar for credit memos and debit memos.

1.  In the HTML template, click the Row block that you want to add an image to.
2.  In the Content tab, drag the Image component into the HTML template.
3.  In the HTML template, click the Image block. The Content panel is displayed on the right of the template editor
4.  In the Images section, configure the following information:

    -   In the Image URL field, enter the URL of an image from the Internet. Note that the image URL must be publicly available.

    -   Optional: Configure the width, alignment, and alternative text for the image.


5.  In the Action section, configure the image opening mode.

    -   In the URL field, enter the URL to display in the address bar for the image.

    -   From the Target list, select Same Tab or New Tab to determine whether the image is displayed in the existing tab or in a new tab after being clicked.


6.  In the General section, configure the container padding for the image.
7.  In the HTML template editor, click Save to save the HTML template.
    You can also use merge fields to construct a dynamic image URL and enter it in the Image URL field. For example, `www.*yourcompany*.com/images/invoices/{{Invoice.InvoiceNumber}}.png`. If the invoice number is INV0009, it will construct a URL `www.*yourcompany*.com/images/invoices/INV0009.png`, and load the image file during the generation of the corresponding invoice PDF file.
