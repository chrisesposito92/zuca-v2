---
title: "Configure subscription tables in HTML invoice templates"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/common-use-cases-of-html-templates/configure-subscription-tables-in-html-invoice-templates"
product: "zuora-billing"
scraped_at: "2025-12-24T05:42:55.385Z"
---

# Configure subscription tables in HTML invoice templates

This task guides you through configuring subscription tables in HTML invoice templates using the Zuora UI.

This article demonstrates how to configure subscription tables in HTML invoice templates through the Zuora UI.

To configure a subscription table, perform the following steps:

1.  In the HTML invoice template editor, choose a blank row in the Blocks tab, and then drag the row into the HTML template.
2.  Click Add Content in the Rows block. The Content tab is displayed in the right panel.
3.  In the Content tab, drag the Data Table component into the HTML template.
4.  Click the Data Table block in the HTML template. The Content panel is displayed on the right of the template editor.
5.  In the Data Table section, configure the following table information by adding different columns:
    1.  From the Table Object list, select InvoiceItems: list of InvoiceItem , and then select Subscription: object of Subscription from the displayed drop-down list.
    2.  In the Columns subsection, click Add in the Header column to add a column to the data table.
    3.  In the displayed Add Column dialog, configure the following column information:

        1.  From the Field list, select a field that belongs to the subscription, for example, Name .

        2.  In the Header field, enter a name for the selected field to display in the data table, for example, Subscription Number .

        3.  Click Add to save the column information. A column with the Subscription Number header is added to the data table.


    4.  In the Columns subsection, click Add in the Header column, and configure the following information in the displayed Add Column dialog:

        1.  From the Field list, select a field that belongs to the subscription, for example, Account: Account , and then select a field that belongs to the Account object from the displayed list, for example, AccountNumber .

        2.  In the Header field, enter a header name for the selected field to display in the data table, for example, Account Number .

        3.  Click Add to save the column information. A column with the Account Number header is added to the data table.


    5.  In the Columns subsection, click Add in the Header column, and configure the following information in the displayed Add Column dialog:

        1.  From the Field list, select a field that belongs to the subscription, for example, CurrentTerm .

        2.  In the Header field, enter a header name for the selected field to display in the data table, for example, Current Term .

        3.  Click Add to save the column information. A column with the Current Term header is added to the data table.


    6.  In the Columns subsection, click Add in the Header column, and configure the following information in the displayed Add Column dialog: If you want to add the currency symbol before the summed charge amount for invoice items that belong to the subscription, perform the preceding steps to add a Charge Amount column with the only difference in the entered fields, which you enter the `{{Invoice.Account.Currency|Symbol}}{{InvoiceItems|FilterByRef(InvoiceId,EQ,Invoice.Id)|Sum(ChargeAmount)|Round(2)|Localise}}` fields instead.

        -   Enable Advanced Options next to the Field field.

        -   In the Field field, enter the `{{InvoiceItems|FilterByRef(InvoiceId,EQ,Invoice.Id)|Sum(ChargeAmount)|Round(2)|Localise}}` fields.

        -   In the Header field, enter a header name for the selected field to display in the data table, for example, Charge Amount .

        -   Click Add to save the column information. A column with the Charge Amount header is added to the data table.


    7.  In the Columns subsection, click Add in the Header column, and configure the following information in the displayed Add Column dialog: If you want to add the currency symbol before the summed tax amount for invoice items that belong to the subscription, perform the preceding steps to add a Tax Amount column with the only difference in the entered fields, which you enter the `{{Invoice.Account.Currency|Symbol}}{{InvoiceItems|FilterByRef(InvoiceId,EQ,Invoice.Id)|Sum(TaxAmount)|Round(2)|Localise}}` fields instead.

        -   Enable Advanced Options next to the Field field.

        -   In the Field field, enter the `{{InvoiceItems|FilterByRef(InvoiceId,EQ,Invoice.Id)|Sum(TaxAmount)|Round(2)|Localise}}` fields.

        -   In the Header field, enter a header name for the selected field to display in the data table, for example, Tax Amount .

        -   Click Add to save the column information. A column with the Tax Amount header is added to the data table.


6.  In the HTML template editor, click Save to save the HTML invoice template with the subscription table.
