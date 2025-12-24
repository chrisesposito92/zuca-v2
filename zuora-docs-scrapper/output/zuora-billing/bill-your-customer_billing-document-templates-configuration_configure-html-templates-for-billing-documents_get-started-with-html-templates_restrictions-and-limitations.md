---
title: "Restrictions and limitations"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/get-started-with-html-templates/restrictions-and-limitations"
product: "zuora-billing"
scraped_at: "2025-12-24T05:40:16.875Z"
---

# Restrictions and limitations

The HTML Templates feature has specific restrictions, including limits on image uploads, merge fields, table configurations, and template size.

## Restrictions and limitations

The HTML Templates feature has the following restrictions and limitations, specific to one single template:

-   Images

    -   Maximum number of uploaded images: 50

    -   Maximum size of an image to be uploaded: 200 KB

    -   Supported image types: APNG ( `.apng` ), AVIF ( `.avif` ), GIF ( `.gif` ), JPG ( `.jpg` ), JPEG ( `.jpeg` ), JFIF ( `.jfif` ), PJPEG ( `.pjpeg` ), PJP ( `.pjp` ), PNG ( `.png` ), SVG ( `.svg` ), and WEBP ( `.webp` )

-   Merge fields

    -   When creating an HTML template, you must add at least one merge field before saving the template.

    -   When defining merge fields in HTML templates, you must include the root object in merge fields, for example, `{{Invoice.Account.Name}}` or `{{CreditMemo.AppliedAmount}}` .

        -   Invoice is the root object for invoice templates.

        -   CreditMemo is the root object for credit memo templates.

        -   DebitMemo is the root object for debit memo templates.

-   Tables

    -   Use a smaller font size for the table data (for example, 8px).

    -   Reduce the padding for the row cells in the table (for example, 3px).

    -   Minimize the number of columns in the table (preferably fewer than 5 columns).

    -   Maintain the top and bottom margins as low as possible.

    -   Avoid using images in the header or footer to prevent a significant increase in the PDF file size.

-   Functions

    -   Maximum number of fields supported by the `SortBy` function: 3

    -   Maximum number of fields supported by the `GroupBy` function: 6

-   Hyperlinks

    -   For any hyperlinks in HTML templates, the protocol must be HTTPS.

-   Template size

    -   Maximum size of an HTML template: 5 MB The uploaded images will be encoded and embedded into the HTML template, so they also contribute to the template size.

-   Fonts

    -   To make sure uncommon currency symbols displayed on the generated PDF, use the Roboto font from the font family .

-   Data

    -   Maximum number of records being processed in total: 1.5 million (the total records to load to generate an invoice, a credit memo, or a debit memo)

    -   Maximum number of records that can be processed per object type: 1 million

    -   Maximum number of items that can be displayed in a table: 25,000

-   Generated documents

    -   If the billing document is using HTML Templates, no MS Word Document is generated even though you enable the Generate MS Word Document permission when setting Billing Roles .
