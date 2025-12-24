---
title: "Configure open invoice tables in HTML invoice templates"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/common-use-cases-of-html-templates/configure-open-invoice-tables-in-html-invoice-templates"
product: "zuora-billing"
scraped_at: "2025-12-24T05:42:50.371Z"
---

# Configure open invoice tables in HTML invoice templates

Configure open invoice tables in HTML invoice templates using the Zuora UI, to ensure all open invoices are associated with one account.

This article demonstrates how to configure open invoice tables in HTML invoice templates through the Zuora UI. All open invoices are associated with one account. An open invoice indicates that the balance of the invoice is not 0.

To configure an open invoice table, perform the following steps:

1.  In the HTML invoice template editor, choose a blank row in the Blocks tab, and then drag the row into the HTML template.
2.  Click Add Content in the Rows block. The Content tab is displayed in the right panel.
3.  In the Content tab, drag the Data Table component into the HTML template.
4.  Click the Data Table block in the HTML template. The Content panel is displayed on the right of the template editor.
5.  In the Data Table section, configure the following table information by adding different columns:
    1.  From the Table Object list, select Account: Account , and then select Invoices: list of Invoice from the displayed drop-down list.
    2.  In the Columns subsection, click Add in the Header column to add a column to the data table.
    3.  In the displayed Add Column dialog, configure the following column information:

        1.  From the Field list, select a field that belongs to the Invoices object, for example, InvoiceDate .

        2.  In the Function field, enter the `Localise` function to format the date. To learn about the details of the `Localise` function, see Functions used in merge fields .

        3.  In the Header field, enter a name for the selected field to display in the data table, for example, Invoice Date .

        4.  Click Add to save the column information. A column with the Invoice Date header is added to the data table.


    4.  In the Columns subsection, click Add in the Header column, and configure the following information in the displayed Add Column dialog:

        1.  From the Field list, select a field that belongs to the Invoices object, for example, InvoiceNumber .

        2.  In the Header field, enter a header name for the selected field to display in the data table, for example, Invoice Number .

        3.  Click Add to save the column information. A column with the Invoice Number header is added to the data table.


    5.  In the Columns subsection, click Add in the Header column, and configure the following information in the displayed Add Column dialog:

        1.  From the Field list, select a field that belongs to the Invoices object, for example, DueDate .

        2.  In the Function field, enter the `Localise` function to format the date. To learn about the details of the `Localise` function, see Functions used in merge fields .

        3.  In the Header field, enter a header name for the selected field to display in the data table, for example, Due Date .

        4.  Click Add to save the column information. A column with the Due Date header is added to the data table.


    6.  In the Columns subsection, click Add in the Header column, and configure the following information in the displayed Add Column dialog: If you want to add the currency symbol before the amount, perform different steps to add an Amount column as follows:

        -   From the Field list, select a field that belongs to the Invoices object, for example, Amount .

        -   In the Function field, enter the `Round(2)|Localise` function to format the currency-related field.

        -   In the Header field, enter a header name for the selected field to display in the data table, for example, Amount .

        -   Click Add to save the column information. A column with the Amount header is added to the data table.


        -   Enable Advanced Options next to the Field field.

        -   In the Field field, enter the {{Invoice.Account.Currency|Symbol}}{{Amount|Round(2)|Localise}} fields.

        -   In the Header field, enter a name for the header to display in the data table, for example, Amount .

        -   Click Add to save the column information. A column with the Amount header is added to the data table.


    7.  In the Columns subsection, click Add in the Header column, and configure the following information in the displayed Add Column dialog:

        1.  From the Field list, select a field that belongs to the Invoices object, for example, Balance .

        2.  In the Function field, enter the `Round(2)|Localise` function to format the currency-related field.

        3.  In the Header field, enter a header name for the selected field to display in the data table, for example, Balance .

        4.  Click Add to save the column information. A column with the Balance header is added to the data table.


    8.  In the SortBy subsection, click Add in the Field column, and configure the following sorting information in the Add Sort By dialog that is displayed:

        1.  From the Field list, select the InvoiceDate field.

        2.  From the Order list, select ASC . Selecting ASC can sort invoices in the data table by invoice date in ascending order.

        3.  Click Add to save the sorting configuration.


    9.  In the Filters subsection, click Add in the Field column, and configure the following filtering information in the Add Filter By dialog that is displayed:

        1.  From the Field list, select the Balance field.

        2.  From the Operator list, select \>= .

        3.  In the Value field, enter 0 .

        4.  Click Add to save the filtering configuration. The configuration can filter invoices whose balance is greater than 0.


6.  To not display the open invoice table if no open invoice is available, perform the following steps to add conditional logic. To learn about how to use merge fields to conduct basic logic control, see Logic control and looping. .

    -   In the HTML invoice template, drag the Columns component into the position above the open invoice table.

    -   Click the Rows block, and then click Add Content in the block. The Content tab is displayed in the right panel.

    -   In the Content tab, drag the Text component into the HTML template.

    -   In the Text block, replace the default text with the following input:

        -   `{{^Invoice.Account.Invoices|FilterByValue(Balance,GE,0)|IsEmpty}}` : the conditional logic in the first line

        -   Open Invoices : the text with its font configured as bold and 16px in the second line

    -   Drag another Columns component into the position below the open invoice table.

    -   Click the Rows block, and then click Add Content in the block. The Content tab is displayed in the right panel.

    -   In the Content tab, drag the Text component into the HTML template.

    -   In the Text block, replace the default text with the following input: `{{/Invoice.Account.Invoices|FilterByValue(Balance,GE,0)|IsEmpty}}` : the closure of the conditional logic


7.  In the HTML template editor, click Save to save the HTML invoice template with the open invoice table.

The following image shows the open invoice table that is displayed in the HTML invoice template.

![HTML invoice template open invoice table](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/776eaf22-58c2-4175-9365-f26f2d4ddc33?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijc3NmVhZjIyLTU4YzItNDE3NS05MzY1LWYyNmYyZDRkZGMzMyIsImV4cCI6MTc2NjY0MTM2OCwianRpIjoiNDAwZGMyODg1YWYyNGM4MTk1NDU1ODYyZGU4YTRkOWUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.Nm0qg6n7fdWdWPK_5F7atdUcRy1pOzdh8Rwxb0Dwj5s)
