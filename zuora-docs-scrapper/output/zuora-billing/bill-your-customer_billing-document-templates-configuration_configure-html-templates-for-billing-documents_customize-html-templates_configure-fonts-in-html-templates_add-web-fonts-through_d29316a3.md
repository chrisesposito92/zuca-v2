---
title: "Add web fonts through the HTML <link> tag"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/customize-html-templates/configure-fonts-in-html-templates/add-web-fonts-through-the-html-link-tag"
product: "zuora-billing"
scraped_at: "2025-12-24T05:41:15.739Z"
---

# Add web fonts through the HTML <link> tag

Learn how to add web fonts to your HTML template using HTML tags and customize your font styles with Google Fonts.

If you do not want to use any of the default fonts in the HTML template, you can use free web fonts from the Internet, for example, [Google Fonts](https://www.w3schools.com/howto/howto_google_fonts.asp). Google Fonts are free to use, with more than 1,000 fonts for you to choose from.

You can add a special style sheet link by using the `<link>` tag and referring to the font in the CSS. The HTML template can instruct the template rendering engine to download the font from where the font is hosted.

To add a web font through the HTML `<link>` tag, perform the following steps:

1.  In the HTML template editor, drag the HTML component into the Row block.
2.  In the HTML template, click the HTML block. The Content panel is displayed on the right of the template editor.
3.  In the HTML section, add the `<link>` tag to link to external style sheets in the HTML component, and use the `href` attribute to specify the location of the external font family.Multiple sites are available on the Internet where you can get free fonts, such as [Google](https://www.w3schools.com/howto/howto_google_fonts.asp) [Web Fonts](https://www.w3schools.com/howto/howto_google_fonts.asp).

    <link href='https://fonts.googleapis.com/css?family=Amaranth' rel='stylesheet'\>

4.  Configure the font to apply to some text. For example, if you want to apply the font to the heading called "Charge Details", use the following HTML code example:

    <h1 style='font-family:Amaranth;'\>Charge Details</h1>

5.  Configure the font to apply to the text displayed in a table. For example, if you want to apply the font to the text in the table called "Charge Details", use the following HTML code example:

    .u\_content\_custom\_reactChargeDetails\_1.table-grid tr th{ font-family:Amaranth,helvetica,sans-serif;font-size:14px;text-align:center;color:#464C51;background-color:#F6F7F8;padding-left:12px;padding-right:12px;padding-top:12px;padding-bottom:12px; text-decoration: auto; font-weight: normal; font-style: normal; border-top: 1px solid #E0E0E0; border-right: 1px solid #E0E0E0; border-left: 1px solid #E0E0E0; border-bottom: 1px solid #E0E0E0; } .u\_content\_custom\_reactChargeDetails\_1.table-grid tr td{ font-family:Amaranth,helvetica,sans-serif;font-size:14px;text-align:left;color:#000000;background-color:#FFFFFF;padding-left:12px;padding-right:12px;padding-top:12px;padding-bottom:12px; text-decoration: auto; font-weight: normal; font-style: normal; border-top: 1px solid #E0E0E0; border-right: 1px solid #E0E0E0; border-left: 1px solid #E0E0E0; border-bottom: 1px solid #E0E0E0; }

    When you preview, the font is applied to the text, the table header, rows, and columns. The following image shows an example of the preview result:

    ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/e9d32ddc-3f45-48da-b081-20b2f89dba02?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImU5ZDMyZGRjLTNmNDUtNDhkYS1iMDgxLTIwYjJmODlkYmEwMiIsImV4cCI6MTc2NjY0MTI3MywianRpIjoiYWYwOGQ5MWQ2NGM3NGJlNWE5NmYxM2EwNTRhYTUzNTEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.ExG7cTnHdv5eJqVRT7KEo1bZO3sY_2fpjxxmIe9OzfI)
