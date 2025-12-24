---
title: "Configure summary statements in HTML templates"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/common-use-cases-of-html-templates/configure-summary-statements-in-html-templates"
product: "zuora-billing"
scraped_at: "2025-12-24T05:42:58.108Z"
---

# Configure summary statements in HTML templates

Learn how to configure summary statements in HTML templates to create personalized documents that consolidate transaction data into a concise PDF format.

The Summary Statement feature consolidates and summarizes transaction activity in the Billing product. This reporting provides insights into the financial well-being of your subscribers.

In HTML templates, summary statements allow for the creation of personalized documents for each account by utilizing templates designed in the HTML editor UI. These templates compile transaction data such as credit memos, debit memos, payments, and invoice data into a concise PDF format.

The following tutorial demonstrates how to configure a summary statement template.

To configure a summary statement in an HTML template through the Zuora UI, perform the following steps.

1.  Navigate to your user profile and select .
2.  Select the Manage Invoice, Credit/Debit Memo Templates tab.
3.  Click Add New HTML Template.
4.  Select from the predefined HTML templates for your Summary Statement, or you can choose a blank template.
5.  Select Use.
6.  Click the Content panel and drag the Transactions block in the HTML template editor.
7.  In the Transactions section, configure the following information by adding different columns:
    1.  Table Layout:

        1.  Invoice Settlement: Toggle On to remain consistent with your tenant settings.

        2.  Data Display: Toggle On the Show Merge Field Code to display the code in the invoice.

        3.  Columns: Add Columns such as Date, Type, Number, Amount, Debit, Credit, Account Balance, and so on to showcase the reporting values.

        4.  Sort By: Click Add in the Field column, and configure the following sorting information in the Add Sort By dialog displayed to add a field to sort records to display in the data table.

        5.  Group By: Click Add in the Field column and configure the following sorting information in the Add Group By dialog that is displayed:

            1.  From the Field list, select a field that is used to group the records in the data table.

            2.  In the Group Alias field, enter a name to display for the group.

            3.  Click Add to save the grouping configuration.

        6.  Filters: Click Add in the Field column, and configure the following sorting information in the Add Filter By dialog that is displayed:

            1.  From the Field list, select a field that is used to filter the records in the data table.

            2.  From the Operator list, select an operator that is used in the filter.

            3.  In the Value field, enter a value used in the filter.

            4.  Click Add to save the filtering configuration.


    2.  Header: Configure styles to apply to the table headers, such as the font, font size, formatting, alignment, text color, and background color.
    3.  Body: Configure styles to apply to the table body, such as the font, font size, formatting, alignment, text color, and background color.
    4.  HTML Source: View the HTML template used.
    5.  Padding: Configure width and length to apply to the table headers and body, such as top, left, bottom, and right or all sides.
    6.  Border: Configure width and length to apply to the table headers and body, such as top, left, bottom, and right or all sides.
    7.  General: Configure the container padding for the image.
8.  In the Rows and Columns section, configure background color, padding, border, content alignment, padding, All sides, and so on.
9.  In the Merge Field section, select a field to merge, choose a related function, and configure styles to apply to the table headers, such as the font, font size, formatting, alignment, text color, and background color.
10.  In the Dividers and Text section, configure the text-align, line height, and color, choose to inherit body styles and container padding for the divider.
11.  In the Image section, you can upload an image or enter an image URL for display, select auto width, align texts, link the target image in a URL, and container padding for the image.
12.  In the Page Number section, configure styles to apply to the table headers, such as the font, font size, formatting, content alignment, text color, background color, choose a display format and container padding for the number.
13.  Add a Page Break section to end a page without using text.
