---
title: "Configure headers and footers with customizable page numbers"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/customize-html-templates/configure-headers-and-footers-in-html-templates/configure-headers-and-footers-with-customizable-page-numbers"
product: "zuora-billing"
scraped_at: "2025-12-24T05:42:32.569Z"
---

# Configure headers and footers with customizable page numbers

Learn how to configure headers and footers with customizable page numbers in the Zuora UI, including setting margins, adding components, and modifying HTML source code.

To add a customizable page number into a header or footer through the Zuora UI, perform the following steps:

1.  Follow the steps in Configure page setup for HTML templates set the top and bottom margins to have space to add a header and footer. For example, you can set the page size to A4 (210 mm x 297 mm), left margin to 5 mm, right margin to 5 mm, top margin to 30 mm, and bottom margin to 30 mm.
2.  In the Blocks tab, navigate to to see all the predefined headers.
3.  Drag one of the predefined headers into the HTML template, and place it at the top of the HTML template. For example, the predefined header contains one column with a customizable Page Number component. ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/b6b98a5e-bf60-4fea-89e8-00db50d7909e?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImI2Yjk4YTVlLWJmNjAtNGZlYS04OWU4LTAwZGI1MGQ3OTA5ZSIsImV4cCI6MTc2NjY0MTM1MCwianRpIjoiODk0NjU1MDg2YmZjNGQ3ZGIwMjMyYTBmZGM1ZTgxMjkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.Z6Wq2J1P3MmeraZ3pF1Aia-p42uliOOOuiQCdzBSh1Q)
4.  In the HTML template, click the header Row block, add two more columns, and then modify the content for each column. For example, you can drag an image component to add your company logo to one column and update the text in the third column.
5.  In the HTML template, click the header Row block, and then click the customizable Page Number component. You can see the HTML source code as follows:

    <!- This section is to customise the header and footer by writing custom HTML. Note: Styles must be inline string in the style attribute instead of using classes here. -> <div style="font-size:14px;padding:0px 20px;color:#000000;display:flex;justify-content:flex-end;"\> <span>Page &nbsp;</span> <!- The pageNumber will be replaced by the real page number here-> <span class="pageNumber"\>pageNumber</span> <span>&nbsp; of &nbsp;</span> <!- The totalPages will be replaced by the real nubmer of total pages here-> <span class="totalPages"\>totalPages</span> </div>

6.  n the HTML source code of thecustomizable Page Number component, replace the texts "Page" and "of" with another language.You can also modify the page number style by changing the font size, font color, font family, and so on. See [HTML Tutorial](https://www.w3schools.com/html/default.asp) for more information. The HTML source code is updated as follows:

    <<!- This section is to customise the header and footer by writing custom HTML. Note: Styles must be inline string in the style attribute instead of using classes here. -> <div style="font-size:12px;padding:0px 20px;color:#000000;font-family:Arial;display:flex;justify-content:flex-end;"\> <span>Page &nbsp;</span> <!- The pageNumber will be replaced by the real page number here-> <span class="pageNumber"\>pageNumber</span> <span>&nbsp; de &nbsp;</span> <!- The totalPages will be replaced by the real number of total pages here-> <span class="totalPages"\>totalPages</span> </div>

7.  In the HTML template, click the customizable Page Number component. The Content panel is displayed on the right of the template editor. In the General section of the Content panel, you can configure the padding for the Page Number component.
8.  In the HTML template, view the information in the header Row block as follows. Facture means "Invoice" in French, Page means "Page" in English, and de means "of" in French.
9.  In Preview mode, select an account and an invoice to preview the corresponding invoice PDF file online. The preview PDF file displays the configured header with a page number.
10.  Follow the same steps to configure a footer with a customizable page number.
