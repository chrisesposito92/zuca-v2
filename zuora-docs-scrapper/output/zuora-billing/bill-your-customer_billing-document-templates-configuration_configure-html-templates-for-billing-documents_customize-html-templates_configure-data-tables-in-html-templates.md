---
title: "Configure data tables in HTML templates"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/customize-html-templates/configure-data-tables-in-html-templates"
product: "zuora-billing"
scraped_at: "2025-12-24T05:41:43.720Z"
---

# Configure data tables in HTML templates

Learn how to configure complex data tables in HTML templates to meet business requirements, including charge details and tax summary tables.

In HTML templates, you can configure complex data tables based on your business demands, for example, charge details tables, tax summary tables, and other tables.

-   If you want to start from scratch, choose the Data Table component to add a blank data table, and then customize it.

-   If you want to start from a sample template, choose a predefined table component to add an example data table, and then make adjustments as needed. The online HTML template editor provides certain components in the Content tab with predefined table configurations and common merge fields for billing documents, including invoices, credit memos, and debit memos. For more information, see Predefined data tables for billing documents .


The following tutorial demonstrates how to configure a charge details table. This tutorial takes invoices as an example; the configuration procedure is similar for credit memos and debit memos.

To configure a data table in an HTML template through the Zuora UI, perform the following steps.

1.  In the HTML template, click one Rows block, and then click Add Content in the Rows block. The Content tab is displayed in the right panel.
2.  In the Content tab, drag the Data Table component into the HTML template.
3.  Click the Data Table block in the HTML template. The Content panel is displayed on the right of the template editor.
4.  In the Data Table section, configure the following table information by adding different columns:
    1.  From the Table Object list, select a table object, for example, InvoiceItems: list of InvoiceItem .
    2.  In the Columns subsection, click Add in the Header column to add a column to the data table.
    3.  In the Add Column dialog that is displayed, configure the following column information:

        1.  From the Field list, select a field that belongs to the InvoiceItems object, for example, ChargeName .

        2.  In the Header field, enter a header name for the header to display in the data table, for example, Charge Name .

        3.  Click Add to save the column information. A column with the Charge Name header is added to the data table.


    4.  In the Columns subsection, click Add in the Header column, and configure the following information in the Add Column dialog that is displayed:

        1.  From the Field list, select a joined object of the InvoiceItems object, for example, RatePlanCharge: RatePlanCharge , and then select a field that belongs to the RatePlanCharge object from the displayed drop-down list, for example, ChargeNumber .

        2.  In the Header field, enter a header name for the selected field to display in the data table, for example, Charge Number .

        3.  Click Add to save the column information. A column with the Charge Number header is added to the data table.


    5.  In the Columns subsection, click Add in the Header column, and configure the following information in the Add Column dialog that is displayed:

        1.  Enable Advanced Options next to the Field field.

        2.  In the Field field, enter merge fields `{{ServiceStartDate|Localise}} - {{ServiceEndDate|Localise}}` . Both the `ServiceStartDate` and `ServiceEndDate` fields belong to the InvoiceItems object.

        3.  In the Header field, enter a header name for the selected field to display in the data table, for example, Service Period .

        4.  Click Add to save the column information. A column with the Service Period header is added to the data table.


    6.  In the Columns subsection, click Add in the Header column, and configure the following information in the Add Column dialog that is displayed:

        1.  From the Field list, select a field that belongs to the InvoiceItems object, for example, UnitPrice .

        2.  In the Function field, enter Localise as the function to format the value of the `UnitPrice` field with the default locale.

        3.  In the Header field, enter a header name for the selected field to display in the data table, for example, Unit Price .

        4.  Click Add to save the column information. A column with the Unit Price header is added to the data table.


    7.  In the Columns subsection, click Add in the Header column, and configure the following information in the Add Column dialog that is displayed:

        1.  From the Field list, select a field that belongs to the InvoiceItems object, for example, Quantity .

        2.  In the Function field, enter Localise as the function to format the value of the `Quantity` field with the default locale.

        3.  In the Header field, enter a header name for the selected field to display in the data table, for example, Qty .

        4.  Click Add to save the column information. A column with the Qty header is added to the data table.


    8.  In the Columns subsection, click Add in the Header column, and configure the following information in the Add Column dialog that is displayed:

        1.  From the Field list, select a field that belongs to the InvoiceItems object, for example, ChargeAmount .

        2.  In the Function field, enter Round(2)|Localise as the function to round the value of the `ChargeAmount` field in 2 decimals and format the value with the default locale.

        3.  In the Header field, enter a header name for the selected field to display in the data table, for example, Subtotal .

        4.  Click Add to save the column information. A column with the Subtotal header is added to the data table.


    9.  In the Columns subsection, click Add in the Header column, and configure the following information in the Add Column dialog that is displayed:

        1.  From the Field list, select a field that belongs to the InvoiceItems object, for example, TaxAmount . In the Function field, enter Round(2)|Localise as the function to round the value of the `TaxAmount` field in 2 decimals and format the value with the default locale.

        2.  In the Header field, enter a header name for the selected field to display in the data table, for example, Tax .

        3.  Click Add to save the column information. A column with the Tax header is added to the data table.


    10.  In the Columns subsection, click Add in the Header column, and configure the following information in the Add Column dialog that is displayed:

         1.  Enable Advanced Options next to the Field field.

         2.  In the Field field, enter merge fields `{{#Wp_Eval}}{{ChargeAmount}}+{{TaxAmount}}|Round(2)|Localise{{/Wp_Eval}}` . The value of the merge fields is the sum of the subtotal amount and tax amount.

         3.  In the Header field, enter a header name for the configured field to display in the data table, for example, Total .

         4.  Click Add to save the column information. A column with the Total header is added to the data table.


    11.  Optional: In the Columns subsection, configure the width and alignment of each column that is added to the data table.
    12.  In the Sort By subsection, click Add in the Field column, and configure the following sorting information in the Add Sort By dialog that is displayed to add a field to sort the records to display in the data table.

         1.  From the Field list, select a joined object of the InvoiceItems object, for example, RatePlanCharge: RatePlanCharge , and then select a field that belongs to the RatePlanCharge object from the displayed drop-down list, for example, ChargeNumber .

         2.  From the Order list, select ASC or DESC as the sorting order.

         3.  Selecting ASC can sort records in the data table by charge number in ascending order.


    13.  In the Group By subsection, click Add in the Field column, and configure the following sorting information in the Add Group By dialog that is displayed:

         1.  From the Field list, select a field that is used to group the records in the data table.

         2.  In the Group Alias field, enter a name to display for the group.

         3.  Click Add to save the grouping configuration.


    14.  In the Filters subsection, click Add in the Field column, and configure the following sorting information in the Add Filter By dialog that is displayed:

         1.  From the Field list, select a field that is used to filter the records in the data table.

         2.  From the Operator list, select an operator that is used in the filter.

         3.  In the Value field, enter a value that is used in the filter.

         4.  Click Add to save the filtering configuration.


5.  In the Header section, configure styles to apply to the table headers, such as the font, font size, formatting, align, text color, and background color.
6.  In the Body section, configure styles to apply to the table body, such as the font, font size, formatting, alignment, text color, and background color.
7.  In the HTML template editor, click Save to save the HTML template.

The following image shows the data table that is displayed in the HTML template.

![HTML invoice data table with columns](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/60f727e4-3ea6-4f6e-8f84-ac4dd9ffaf5c?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjYwZjcyN2U0LTNlYTYtNGY2ZS04Zjg0LWFjNGRkOWZmYWY1YyIsImV4cCI6MTc2NjY0MTMwMSwianRpIjoiOWYwZWY5MGIzNDE3NDBkMzhkNWNiNmJkMTRjMDVmM2QiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.oA7in1xalQmY7Kysw8bDCq2Ijure589fjDlfjaYWaGU)
