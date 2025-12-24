---
title: "Resolve line breaks in HTML invoice template"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/common-use-cases-of-html-templates/resolve-line-breaks-in-html-invoice-template"
product: "zuora-billing"
scraped_at: "2025-12-24T05:43:36.387Z"
---

# Resolve line breaks in HTML invoice template

Learn how to resolve line breaks in HTML invoice templates to enhance readability and preserve font styles using specific tags and code adjustments.

You can retain the original format of the text entered into any field of a Zuora business object using the following tags within the HTML templates:

-   <pre> - This tag retains the original text format.

-   style - This tag, when applied to the <pre> tag, enhances the rendering result.


The contents within the HTML Invoice template now incorporate the necessary line breaks, enhancing clarity and readability. To maintain the intended font style while enabling line breaks within merge fields, include the following code within the HTML tag:

<td "\\style="" class="formatDescription"><pre></pre></td>

Additionally, to preserve the font style, include the following code:

pre { font-family: inherit; font-size: inherit; }

These adjustments significantly enhance the readability and clarity of invoices generated using the HTML template.
