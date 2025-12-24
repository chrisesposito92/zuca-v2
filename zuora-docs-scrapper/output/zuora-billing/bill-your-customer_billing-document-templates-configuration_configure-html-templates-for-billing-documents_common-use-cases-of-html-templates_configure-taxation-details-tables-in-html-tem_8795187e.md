---
title: "Configure taxation details tables in HTML templates for invoices"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/common-use-cases-of-html-templates/configure-taxation-details-tables-in-html-templates/configure-taxation-details-tables-in-html-templates-for-invoices"
product: "zuora-billing"
scraped_at: "2025-12-24T05:43:26.367Z"
---

# Configure taxation details tables in HTML templates for invoices

This section explains how to configure taxation details tables in HTML templates using the Zuora UI, covering steps for invoices.

To configure a taxation details table in HTML invoice templates, perform the following steps:

1.  In the HTML template editor, choose a blank row in the Blocks tab, and then drag the row into the HTML template.
2.  Click Add Content in the Rows block. The Content tab is displayed in the right panel.
3.  In the Content tab, drag the Data Table component into the HTML template.
4.  Click the Data Table block in the HTML template. The Content panel is displayed on the right of the template editor.
5.  In the Data Table section, configure the following table information by adding different columns:
    1.  From the Table Object list, select InvoiceItems: list of InvoiceItem , and then select TaxationItems: list of TaxationItem from the displayed list.
    2.  In the Columns subsection, click Add in the Header column to add a column to the data table.
    3.  In the displayed Add Column dialog, configure the following column information:

        1.  From the Field list, select a field that belongs to the Taxation object, for example, Name .

        2.  In the Header field, enter a name for the selected field to display in the data table, for example, Tax Name .

        3.  Click Add to save the column information. A column with the Tax Name header is added to the data table.


    4.  In the displayed Add Column dialog, configure the following column information:

        1.  From the Field list, select a field that belongs to the Taxation object, for example, TaxRate .

        2.  In the Header field, enter a name for the selected field to display in the data table, for example, Tax Rate .

        3.  Click Add to save the column information. A column with the Tax Rate header is added to the data table.


    5.  Optional: When adding the `Taxationitem.TaxAmout` field, apply the `Localise` function to format the number. To learn about the details of the `Localise` function, see Functions used in merge fields .
    6.  In the Columns subsection, click Add in the Header column, and configure the following information in the displayed Add Column dialog:

        1.  From the Field list, select a joined object of the TaxationItem object, for example, InvoiceItem: InvoiceItem , and then select a field that belongs to the InvoiceItem object from the displayed list, for example, ChargeAmount .

        2.  In the Header field, enter a header name for the selected field to display in the data table, for example, Charge Amount .

        3.  Click Add to save the column information. A column with the Charge Amount header is added to the data table.


6.  In the HTML template editor, click Save to save the HTML template with the taxation details table.

The following image shows the taxation details table that is displayed in the HTML template for credit memos.![HTML_invoice_template_taxation_details_table.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/7cf3b38d-a16d-490d-9c44-512faa73dd44?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjdjZjNiMzhkLWExNmQtNDkwZC05YzQ0LTUxMmZhYTczZGQ0NCIsImV4cCI6MTc2NjY0MTQwNCwianRpIjoiNTNkODUzYTJmMjg4NGU3OWI0ZmI4MjI1YmU3MTkwYzIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.neIHFIY7ffrGxLyMYhbyc276IlQR1syRYYOVCorKxQU)
