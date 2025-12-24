---
title: "Display previous transactions data in HTML"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/customize-html-templates/display-previous-transactions-data-in-html"
product: "zuora-billing"
scraped_at: "2025-12-24T05:41:46.147Z"
---

# Display previous transactions data in HTML

Learn how to display previous transactions on invoices using an HTML template in Zuora.

You can show past transactions on invoices using a Previous Transactions table in HTML, just like with Word templates in Zuora. The following tutorial demonstrates how to configure a previous transactions table. This tutorial takes invoices as an example.

To configure previous transactions in an HTML template through the Zuora UI, perform the following steps.

1.  Navigate to your user profile and select .
2.  Select the Manage Invoice, Credit/Debit Memo Templates tab.
3.  Click Add New HTML Template.
4.  Select a predefined HTML or blank template from Invoice.
5.  Select Use. The appearance of the content for Previous Transaction is as follows. ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/15ee7eb6-3239-4c61-b3a0-abd28c27eb0a?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjE1ZWU3ZWI2LTMyMzktNGM2MS1iM2EwLWFiZDI4YzI3ZWIwYSIsImV4cCI6MTc2NjY0MTMwNCwianRpIjoiY2MxZDAyMGM0ODRhNDgwMDk2NThlZTA0YTg3YmMyOGIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.Pv_IhCjMf6l7pozJebyAnEB9oGoYyz4K6__RAg6Mw78)
6.  Click the Content panel and drag the Previous Transactions block in the HTML template editor.
7.  In the Previous Transactions section, configure the following information by adding different columns:
    1.  Invoice Settlement: Toggle on the invoice settlement option to enable to adjust Invoices or Credit Balances.
    2.  Time Period: Input the number of days you want to consider or select the entire duration from the previous invoice till now.
    3.  Data Display: Toggle on to display full names for merge fields.
    4.  Columns: To modify the Merge Field or Header name, click Edit Column and Save . Additionally, you have the option to indent the alignments, modify the width, select or unselect a label name under Actions, and rearrange labels by dragging and dropping them.
    5.  Sort By: Click Add in the Field column, and configure the following sorting information in the Add Sort By dialog displayed to add a field to sort records to display in the data table.
    6.  Group By: Click Add in the Field column and configure the following sorting information in the Add Group By dialog that is displayed:

        -   From the Field list, select a field that is used to group the records in the data table.

        -   In the Group Alias field, enter a name to display for the group.

        -   Click Add to save the grouping configuration.


    7.  Filters: Click Add in the Field column, and configure the following sorting information in the Add Filter By dialog that is displayed:

        -   From the Field list, select a field that is used to filter the records in the data table.

        -   From the Operator list, select an operator that is used in the filter.

        -   In the Value field, enter a value used in the filter.

        -   Click Add to save the filtering configuration.


    8.  Header: Configure styles to apply to the table headers, such as the font, font size, formatting, align, text color, and background color.
    9.  Body: Configure styles to apply to the table body, such as the font, font size, formatting, alignment, text color, and background color.
    10.  HTML Source: View the HTML template used.
    11.  Padding: Configure width and length to apply to the table headers and body, such as top,left, bottom, and right or all sides.
    12.  Border: Configure width and length to apply to the table headers and body, such as top,left, bottom, and right or all sides.
    13.  General: Configure the container padding for the image.
