---
title: "Configure merge fields by typing merge field codes"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/customize-html-templates/configure-text-and-merge-fields-in-html-templates/configure-merge-fields-in-html-templates/configure-merge-fields-by-typing-merge-field-codes"
product: "zuora-billing"
scraped_at: "2025-12-24T05:41:05.389Z"
---

# Configure merge fields by typing merge field codes

Learn how to configure merge fields in an HTML template using merge field codes through the Zuora UI.

To configure a merge field in an HTML template by typing merge field codes through the Zuora UI, perform the following steps:

1.  In the HTML template, click one Row block, and then click Add Content in the block. The Content tab is displayed in the right panel.
2.  In the Content tab, drag the Text component into the HTML template. A Text block is displayed in the HTML template.
3.  Click the Text block in the HTML template. The Content panel is displayed on the right of the template editor, and a toolbar is displayed next to the Text block.
4.  In the Text block, enter double curly braces, an object name, and a dot. For example, if you want to add a merge field to display the invoice balance, enter {{Invoice. in the Text block.
5.  In the displayed toolbar, click Merge Fields to expand the objects and fields tree.
6.  Scroll down to Invoice and its nested fields, and select one nested field from the list. The field name is appended to the merge field. For example, if you click Invoice > Balance , and it shows {{Invoice.Balance in the Text block.
7.  Input }} to enclose the merge field. The merge field is displayed as `{{Invoice.Balance}}` in the Text block.
8.  If you want to customize the style of the merge field, click the merge field in the Text block, and use the displayed toolbar to configure its styles, including the text color, font, size, and so on.
9.  Click Save to save the configurations.

    For more information about merge field syntax, see Merge field syntax for HTML templates.
