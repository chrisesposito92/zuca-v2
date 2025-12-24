---
title: "Configure taxation details table in HTML templates for debit memos"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/common-use-cases-of-html-templates/configure-taxation-details-tables-in-html-templates/configure-taxation-details-table-in-html-templates-for-debit-memos"
product: "zuora-billing"
scraped_at: "2025-12-24T05:43:30.910Z"
---

# Configure taxation details table in HTML templates for debit memos

Learn how to configure taxation details tables in HTML templates for debit memos by adding and customizing columns.

1.  Go through steps 1 to 4 described in [Configure taxation details tables in HTML templates for invoices.](/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/common-use-cases-of-html-templates/configure-taxation-details-tables-in-html-templates/configure-taxation-details-tables-in-html-templates-for-invoices)
2.  In the Data Table section, configure the following table information by adding different columns:
    1.  From the Table Object list, select DebitMemoItems: list of DebitMemoItem , and then select DebitTaxationItems: list of DebitTaxationItem from the displayed list.
    2.  In the Columns subsection, click Add in the Header column to add a column to the data table.
    3.  In the displayed Add Column dialog, configure the following column information:

        1.  From the Field list, select a field that belongs to the Taxation object, for example, Name .

        2.  In the Header field, enter a name for the selected field to display in the data table, for example, Tax Name .

        3.  Click Add to save the column information. A column with the Tax Name header is added to the data table.


    4.  In the displayed Add Column dialog, configure the following column information:

        1.  From the Field list, select a field that belongs to the Taxation object, for example, TaxRate .

        2.  In the Header field, enter a name for the selected field to display in the data table, for example, Tax Rate .

        3.  Click Add to save the column information. A column with the Tax Rate header is added to the data table.


    5.  Optional: When adding the `DebitTaxationitem.TaxAmout` field, apply the `Localise` function to format the number. To learn about the details of the `Localise` function, see Functions used in merge fields .
    6.  In the Columns subsection, click Add in the Header column, and configure the following information in the displayed Add Column dialog:

        1.  From the Field list, select TaxationItem: TaxationItem .

        2.  From the displayed list, select a joined object of the TaxationItem object, for example, InvoiceItem: InvoiceItem .

        3.  From the displayed list, select a field that belongs to the InvoiceItem object, for example, ChargeAmount .

        4.  In the Header field, enter a header name for the selected field to display in the data table, for example, Charge Amount .

        5.  Click Add to save the column information. A column with the Charge Amount header is added to the data table.


3.  In the HTML template editor, click Save to save the HTML template with the taxation details table.

The following image shows the taxation details table that is displayed in the HTML template for debit memos.

![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/1a3d6db6-73c5-44fb-970d-150addbf4f69?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjFhM2Q2ZGI2LTczYzUtNDRmYi05NzBkLTE1MGFkZGJmNGY2OSIsImV4cCI6MTc2NjY0MTQwOSwianRpIjoiMDBlNWY3YWYwY2M3NDkwMjg0MDRmOGZhMTg2NzYxNmYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.bh3yKdmH5NvL1aHicoWWs794ZOhKnN8qD4DelfnEPME)
