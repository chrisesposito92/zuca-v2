---
title: "Add embedded fonts through the @font-face rule"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/customize-html-templates/configure-fonts-in-html-templates/add-embedded-fonts-through-the-font-face-rule"
product: "zuora-billing"
scraped_at: "2025-12-24T05:41:18.281Z"
---

# Add embedded fonts through the @font-face rule

Learn how to embed custom fonts in HTML templates using the @font-face rule and base64 encoding.

You can also use the `@font-face` rule to load custom fonts through a base64 encoding into HTML templates.

To load a custom font into the HTML template through the `@font-face` rule, perform the following steps:

1.  Prepare your custom font file that has a suffix like `.ttf`, `.woff`, `.eot`, `.svg`, and so on.You can download free fonts from the Internet, such as [Google](https://fonts.google.com/) [Web Fonts](https://www.w3schools.com/howto/howto_google_fonts.asp) where you can select a font and then download it. You can also purchase commercial fonts.
2.  Do the base64 encoding.

    -   In OS X or Linux, type the built-in base64 command in the terminal or shell: `$ base64 -i myfont.ttf -o fontbase64.txt`

    -   For Windows, you must download a program to encode in base64 (several free/Open Source tools are available).


3.  Drag the HTML component into the Row block in the HTML template.
4.  In the HTML template, click the HTML block. The Content panel is displayed on the right of the template editor.
5.  In the HTML section, use the following HTML code example in the HTML editor where you replace `<<copied base64 string>>` with the contents you copy from the font file:

    <style> @font-face { font-family: 'my\_font'; src: url(data:font/truetype;charset=utf-8;base64,<<copied base64 string>>) format('truetype'); font-weight: normal; font-style: normal; } </style>

6.  If you use other types of fonts, the values of the `data` and `format` fields become different. For example, if you use the Web Open Font Format ( `.woff` ), use the following HTML code example:

    <style> @font-face { font-family: 'my\_font'; src: url(data:application/x-font-woff;charset=utf-8;base64,<<copied base64 string>>) format('woff'); font-weight: normal; font-style: normal; } </style>

7.  Configure the new font to some text and a table by using the following HTML code examples:

    <h1 style="font-family:my\_font;"\>Charge Details</h1>

    Or

    <style> .my\_font { font-family: my\_font; font-size: 28px; } </style> <div> <span class="my\_font"\> Hello Free Font! </span> </div>

    Or

    <style> #u\_content\_custom\_generic\_table\_2{ word-break: break-all; } .u\_content\_custom\_generic\_table\_2.table-grid { width: 100%; table-layout: fixed; border-collapse: collapse; } .u\_content\_custom\_generic\_table\_2.table-grid tr td, .u\_content\_custom\_generic\_table\_2.table-grid tr th{ word-break: break-word; } .u\_content\_custom\_generic\_table\_2.table-grid tr th{ font-family:my\_font;font-size:14px;text-align:center;color:#464C51;background-color:#F6F7F8;padding-left:12px;padding-right:12px;padding-top:12px;padding-bottom:12px; text-decoration: auto; font-weight: normal; font-style: normal; border-top: 1px solid #E0E0E0; border-right: 1px solid #E0E0E0; border-left: 1px solid #E0E0E0; border-bottom: 1px solid #E0E0E0; .u\_content\_custom\_generic\_table\_2.table-grid tr td{ font-family:my\_font;font-size:14px;text-align:left;color:#000000;background-color:#FFFFFF;padding-left:12px;padding-right:12px;padding-top:12px;padding-bottom:12px; text-decoration: auto; font-weight: normal; font-style: normal; border-top: 1px solid #E0E0E0; border-right: 1px solid #E0E0E0; border-left: 1px solid #E0E0E0; border-bottom: 1px solid #E0E0E0; } </style>

    When you preview, the font is applied to the text, the table header, rows, and columns. The following image shows an example of the preview result:![clipboard_ee0fbcb4b722bea3880a74db341b5d78f.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/dc7efb20-c982-454e-a9af-044fd275f642?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImRjN2VmYjIwLWM5ODItNDU0ZS1hOWFmLTA0NGZkMjc1ZjY0MiIsImV4cCI6MTc2NjY0MTI3NiwianRpIjoiNGQ0NmFjNmI3YTZkNGZiNzllNjEwMmY2Njg4NWZhNWMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.TqfMjy9d_oti1_PRBuWtI5PAPRx92cSyaI384gDZ2rY)
