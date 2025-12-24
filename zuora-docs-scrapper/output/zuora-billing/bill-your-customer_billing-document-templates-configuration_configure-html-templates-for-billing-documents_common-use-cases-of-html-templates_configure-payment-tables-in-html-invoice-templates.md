---
title: "Configure payment tables in HTML invoice templates"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/common-use-cases-of-html-templates/configure-payment-tables-in-html-invoice-templates"
product: "zuora-billing"
scraped_at: "2025-12-24T05:42:52.899Z"
---

# Configure payment tables in HTML invoice templates

This task guides you through configuring payment tables in HTML invoice templates using the Zuora UI, with steps varying based on the Invoice Settlement feature status.

This article demonstrates how to configure payment tables in HTML invoice templates through the Zuora UI. The steps to configure a payment table are different under the following conditions:

-   The Invoice Settlement feature is disabled.

-   The Invoice Settlement feature is enabled.


If you have the Invoice Settlement feature disabled, perform the following steps to configure a payment table:

1.  In the HTML invoice template editor, choose a blank row in the Blocks tab, and then drag the row into the HTML template.
2.  Click Add Content in the Rows block. The Content tab is displayed in the right panel.
3.  In the Content tab, drag the Data Table component into the HTML template.
4.  Click the Data Table block in the HTML template. The Content panel is displayed on the right of the template editor.
5.  In the Data Table section, configure the following table information by adding different columns:
    1.  From the Table Object list, select InvoicePayments: list of InvoicePayment as the table object.
    2.  In the Columns subsection, click Add in the Header column to add a column to the data table.
    3.  In the displayed Add Column dialog, configure the following column information:

        1.  From the Field list, select a joined object of the InvoicePayments object, for example, Payment: Payment .

        2.  From the displayed drop-down list, select a field that belongs to the Payment object, for example, PaymentMethod: PaymentMethod , and then select a field that belongs to the PaymentMethod object from another displayed drop-down list, for example, Type .

        3.  In the Header field, enter a name for the selected field to display in the data table, for example, Payment Method .

        4.  Click Add to save the column information. A column with the Payment Method header is added to the data table.


    4.  In the Columns subsection, click Add in the Header column, and configure the following information in the displayed Add Column dialog:

        1.  From the Field list, select a joined object of the InvoicePayments object, for example, Payment: Payment , and then select a field that belongs to the Payment object from the displayed drop-down list, for example, PaymentNumber .

        2.  In the Header field, enter a header name for the selected field to display in the data table, for example, Payment Number .

        3.  Click Add to save the column information. A column with the Payment Number header is added to the data table.


    5.  Optional: When adding the `InvoicePayment.Amount` or `InvoicePayment.Payment.EffectiveDate` fields, apply the `Localise` function to format the number and date. To learn about the details of the `Localise` function, see Functions used in merge fields.
    6.  In the Columns subsection, click Add in the Header column, and configure the following information in the displayed Add Column dialog to add the currency symbol before the amount:

        -   Enable Advanced Options next to the Field field.

        -   In the Field field, enter the `{{Invoice.Account.Currency|Symbol}}{{Amount|Localise}}` fields.

        -   In the Header field, enter a name for the header to display in the data table, for example, Amount .

        -   Click Add to save the column information. A column with the Amount header is added to the data table.


6.  To not display the payment table if no payment is made, perform the following steps to add conditional logic. To learn about how to use merge fields to conduct basic logic control, see Logic control and looping .

    -   In the HTML invoice template, drag the Columns component into the position above the payment table.

    -   Click the Rows block, and then click Add Content in the block. The Content tab is displayed in the right panel.

    -   In the Content tab, drag the Text component into the HTML template.

    -   In the Text block, replace the default text with the following input:

        -   `{{^Invoice.InvoicePayments|IsEmpty}}` : the conditional logic in the first line

        -   Payments : the text with its font configured as bold and 16px in the second line

    -   Drag another Columns component into the position below the payment table.

    -   Click the Rows block, and then click Add Content in the block. The Content tab is displayed in the right panel.

    -   In the Content tab, drag the Text component into the HTML template.

    -   In the Text block, replace the default text with the following input: `{{/Invoice.InvoicePayments|IsEmpty}}` : the closure of the conditional logic


7.  In the HTML template editor, click Save to save the HTML invoice template with the payment table.

The following image shows the payment table that is displayed in the HTML invoice template.

![HTML_invoice_template_payment_table.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/9121d603-6935-4bef-841f-f7b38d2dc24b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjkxMjFkNjAzLTY5MzUtNGJlZi04NDFmLWY3YjM4ZDJkYzI0YiIsImV4cCI6MTc2NjY0MTM3MSwianRpIjoiMDA4NzdjOWFjNmE3NDk1ZTllODI3YTRmNmExNjhlOTUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.vv0vnRefzcR2KkTaY7XR5P_XfM8qP6RHLUXsMnLP12k)

If you have the Invoice Settlement feature enabled, perform similar steps as if the feature is disabled.

The only difference is in step 5.a where you must select PaymentParts : list of PaymentPart from the Table Object list.
