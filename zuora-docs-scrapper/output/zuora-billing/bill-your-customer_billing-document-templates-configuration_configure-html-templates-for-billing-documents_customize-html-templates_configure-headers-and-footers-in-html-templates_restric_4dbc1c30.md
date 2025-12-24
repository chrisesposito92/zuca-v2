---
title: "Restrictions and limitations"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/customize-html-templates/configure-headers-and-footers-in-html-templates/restrictions-and-limitations"
product: "zuora-billing"
scraped_at: "2025-12-24T05:42:35.050Z"
---

# Restrictions and limitations

Guidelines for configuring headers and footers in HTML templates, including limitations on JavaScript, page numbers, and font imports.

When configuring headers and footers in HTML templates, keep the following restrictions and limitations in mind:

-   An HTML template can only contain one header Row block and one footer Row block.

-   JavaScript is not supported in the header or footer blocks of the HTML template.

-   You can only place the Page Number component into the header Row block, or the footer Row block. If a Page Number component is included in Row blocks other than the header or footer Row block, it cannot generate any page number.

-   You have to adjust the top and bottom margins in the page setup to display the header and footer on PDF files, for example, setting the top margin to 30 mm and the bottom margin to 30 mm. You can follow the steps in Configure page setup for HTML templates to adjust the margins based on the size of the header and footer.

-   You cannot import new fonts into the header or footer blocks of the HTML template.

-   If you encounter any alignment issues in the header or footer, modify the font size settings to maintain consistency with your previously configured templates. Alternatively, use the following code to adjust the zoom value based on your template requirements. The provided zoom value (1.5) is a sample; you must adjust the ratio in your template as necessary.


.page\_footer { zoom: 1.5 /\* This is a sample number; adjust the ratio as needed. \*/ } .page\_header { zoom: 1.5 /\* This is a sample number; adjust the ratio as needed. \*/ }
