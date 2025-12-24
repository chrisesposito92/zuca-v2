---
title: "Configure headers and footers with predefined page numbers"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/customize-html-templates/configure-headers-and-footers-in-html-templates/configure-headers-and-footers-with-predefined-page-numbers"
product: "zuora-billing"
scraped_at: "2025-12-24T05:42:30.098Z"
---

# Configure headers and footers with predefined page numbers

Learn how to configure headers and footers with predefined page numbers in the Zuora UI by setting margins, adding components, and customizing content.

To add a predefined page number into a header or footer through the Zuora UI, perform the following steps:

1.  Follow the steps in Configure page setup for HTML templates , set the top and bottom margins to have space to add a header and footer. For example, you can set the page size to A4 (210 mm x 297 mm), left margin to 5 mm, right margin to 5 mm, top margin to 30mm, and bottom margin to 5 mm.
2.  In the Blocks tab, navigate to Header > All to see all the predefined headers.
3.  Drag one of the predefined headers into the HTML template and place it at the top of the HTML template. For example, the predefined header contains the first column to place the company logo, the second column with blank content, and the third column to place the company address. ![Header](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/8894efc6-9a49-443e-bd50-47a77f3a08db?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijg4OTRlZmM2LTlhNDktNDQzZS1iZDUwLTQ3YTc3ZjNhMDhkYiIsImV4cCI6MTc2NjY0MTM0OCwianRpIjoiMjIwMjg3YjEwMzVhNGRiN2JkMWYwYmExYTAwNzgyZTgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.H7sX6fNfA4dOR6EBBTt3CM0DlNqWl6mxOB5anu1xHII)
4.  In the HTML template, click the header Row block and modify the content for each column. For example, you can drag an image component to add your company logo, and update the text in the third column.
5.  In the Content tab, drag the predefined Page Number component into the HTML template, and place it into the third column of the header Row block. ![Header with Page Number](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/3f53453e-a8c8-4223-8724-be6f99d0e279?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjNmNTM0NTNlLWE4YzgtNDIyMy04NzI0LWJlNmY5OWQwZTI3OSIsImV4cCI6MTc2NjY0MTM0OCwianRpIjoiMzlmMjUzOWY1OWRkNDBmNWEyNDg0YmM2MWM1Mzg5NTkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.tC8M0Oh-YhKc43njpuLensalVk66yUx_u_2NXBKl0p8)
6.  In the HTML template, click the Page Number component. The Content panel is displayed on the right of the template editor.
7.  In the Content panel, configure the following information:
    1.  In the Page Number section, configure the text color, background color, content alignment, font family, font size, padding, and number option. Note: The predefined Page Number component only supports the texts "Page" and "of" in English. If you want to use another language for the texts "Page" and "of", see Configure headers and footers with customizable page numbers .
    2.  Configure the container padding for the Page Number component in the General section.
8.  In Preview mode, select an account and a billing document to preview the corresponding PDF file online. The preview PDF file displays the configured header with a page number. ![Invoice](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/68e3d7f8-c3de-410b-8e19-49958b09364a?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjY4ZTNkN2Y4LWMzZGUtNDEwYi04ZTE5LTQ5OTU4YjA5MzY0YSIsImV4cCI6MTc2NjY0MTM0OCwianRpIjoiMGI5ZDdmYzQ1ZGYyNGEyNTgzMjRkZWY0YjNhMDMwZDAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.7T2awJTHm23w6zBB9f84hvqGAkBzp_zuMBq21sR95KM)
9.  Follow the same steps to configure a footer with a predefined page number.
