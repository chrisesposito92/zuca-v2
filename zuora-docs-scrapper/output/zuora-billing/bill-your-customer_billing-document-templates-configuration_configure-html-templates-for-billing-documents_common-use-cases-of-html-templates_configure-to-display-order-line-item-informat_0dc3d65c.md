---
title: "Display order line item information on invoices"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/common-use-cases-of-html-templates/configure-to-display-order-line-item-information-on-invoices/display-order-line-item-information-on-invoices"
product: "zuora-billing"
scraped_at: "2025-12-24T05:43:03.235Z"
---

# Display order line item information on invoices

Learn how to display order line item information, such as AmountPerUnit, Amount, Description, and custom fields, on invoices using HTML templates.

Assume that you want to display the values of the following fields of the Order Line Item object in the charge details table of invoices:

-   AmountPerUnit

-   Amount

-   Description

-   custom\_field\_\_c


To configure HTML templates to display information about order line items on invoices, perform the following steps:

1.  Create an HTML invoice template where you choose the starter template called Basic from the invoice template library.
2.  In the online HTML template editor, click the Data Table block for the charge details table. The Content panel is displayed on the right of the template editor.
3.  In the Columns subsection of the Data Table section, click \+ Add in the Header column.
4.  In the Add Column dialog that is displayed, configure the following column information to add a column to display the amount per unit:
    1.  From the Field list, OrderLineItem: OrderLineItem , and then select AmountPerUnit that belongs to the OrderLineItem object from the displayed drop-down list.
    2.  In the Header field, enter OLI Amount Per Unit as the header name for the selected field to display in the data table.
    3.  Click Add to save the column information. A column with the OLI A mount Per Unit header is added to the data table.
5.  In the Add Column dialog that is displayed, configure the following column information to add a column to display the amount per unit:
    1.  From the Field list, OrderLineItem: OrderLineItem , and then select Amount that belongs to the OrderLineItem object from the displayed drop-down list.
    2.  In the Header field, enter OLI Amount as the header name for the selected field to display in the data table.
    3.  Click Add to save the column information. A column with the OLI A mount header is added to the data table.
6.  In the Add Column dialog that is displayed, configure the following column information to add a column to display the amount per unit:
    1.  From the Field list, OrderLineItem: OrderLineItem , and then select Description that belongs to the OrderLineItem object from the displayed drop-down list.
    2.  In the Header field, enter OLI Description as the header name for the selected field to display in the data table.
    3.  Click Add to save the column information. A column with the OLI Description header is added to the data table.
7.  In the Add Column dialog that is displayed, configure the following column information to add a column to display the amount per unit:
    1.  From the Field list, OrderLineItem: OrderLineItem , and then select custom\_field\_\_c that belongs to the OrderLineItem object from the displayed drop-down list.
    2.  In the Header field, enter OLI Custom Field as the header name for the selected field to display in the data table.
    3.  Click Add to save the column information. A column with the OLI Custom Field header is added to the data table.
8.  In the HTML template editor, click Save to save the HTML template.
9.  Click Preview to switch to the Preview mode to preview an invoice using the HTML template .

The displayed HTML template changes to an invoice PDF file with actual data for you to preview. If an invoice item is generated from an order line item, information about the order line item is displayed in the associated column of the corresponding invoice item row.

If an invoice item is not created from any order line item, information is displayed blank for the corresponding invoice item.
