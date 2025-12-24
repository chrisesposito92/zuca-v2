---
title: "Configure summary tables in HTML templates"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/customize-html-templates/configure-summary-tables-in-html-templates"
product: "zuora-billing"
scraped_at: "2025-12-24T05:41:41.151Z"
---

# Configure summary tables in HTML templates

Learn how to configure summary tables in HTML templates to display grouped data with customized subtotals using the Summary Table component.

In HTML templates, you can configure data tables to display a summary of grouped items for any list objects with customized groups and subtotals by using the Summary Table component in the online editor.

You can group items by any standard and custom fields that are available on the list objects. You can also use the component to aggregate all number and date fields. The supported aggregation functions are `Sum` , `Max` , and `Min` .

The following tutorial demonstrates how to configure a summary table. This tutorial takes invoices as an example; the configuration procedure is similar for credit memos and debit memos.

To configure a summary table in an HTML template through the Zuora UI, perform the following steps.

1.  In the HTML template, click one Rows block, and then click Add Content in the Rows block. The Content tab is displayed in the right panel.
2.  In the Content tab, drag the Summary Table component into the HTML template.
3.  Click the Summary Table block in the HTML template. The Content panel is displayed on the right of the template editor.
4.  In the Summary Table section, configure the following table information by adding different columns:
    1.  From the Table Object list, select a table object, for example, InvoiceItems: list of InvoiceItem .
    2.  In the Columns subsection, click Add in the Header column, and configure the following information in the Add Column dialog that is displayed:

        1.  From the Field list, select a field that belongs to the InvoiceItems object, for example, Subscription: Subscription , and then select a field that belongs to the subscription object from the displayed list, for example, Name .

        2.  Select Group same values under the Field list.

        3.  Select the Sort checkbox, and then select ASC that is displayed next to the checkbox.

        4.  In the Header field, enter a header name for the selected field to display in the summary table, for example, Subscription Number .

        5.  Click Add to save the column information. A column with the Subscription Number header is added to the summary table.


    3.  In the Columns subsection, click Add in the Header column, and configure the following information in the Add Column dialog that is displayed:

        1.  From the Field list, select ServiceStartDate .

        2.  Select Aggregate under the Field list, and then select Min that is displayed next to the radio button.

        3.  Select the Sort checkbox, and then select ASC that is displayed next to the checkbox.

        4.  In the Function field, enter Localise as the function.

        5.  In the Header field, enter a header name for the selected field to display in the summary table, for example, Service Start Date .

        6.  Click Add to save the column information. A column with the Service Start Date header is added to the summary table.


        If you want to add a Service End Date column, perform the preceding steps with the differences in selecting ServiceEndDate from the Field list and Max next to Aggeregate , as well as naming it Service End Date .

        Optional: if you want to show a field to contain both the service start date and end date, you can perform this step in the following way:

        1.  Enable Advanced Options next to the Field field.

        2.  In the Field field, enter merge fields `{{BySubscriptionName|Min(ServiceStartDate|Localise)}} - {{BySubscriptionName|Max(ServiceEndDate|Localise)}}` . Both the `ServiceStartDate` and `ServiceEndDate` fields belong to the InvoiceItems object. Note that you cannot use Aggregate and Sort when Advanced Options is enabled.

        3.  In the Header field, enter a header name for the selected field to display in the summary table, for example, Service Period .

        4.  Click Add to save the column information. A column with the Service Period header is added to the summary table.


    4.  In the Columns subsection, click Add in the Header column, and configure the following information in the Add Column dialog that is displayed:

        1.  From the Field list, select a field that belongs to the InvoiceItems object, for example, ChargeAmount .

        2.  Select Aggregate under the Field list, and then select Sum that is displayed next to the radio button. Note that a field that uses the `GroupBy` function must exist before applying any aggregation to a field.

        3.  In the Header field, enter a header name for the selected field to display in the summary table, for example, Charge Amount .

        4.  Click Add to save the column information. A column with the Charge Amount header is added to the summary table.


        Optional: if you want to display the currency symbol, round the value of the `ChargeAmount` field in 2 decimals, and format the value with the default locale, you can perform this step in the following way:

        1.  Enable Advanced Options next to the Field field.

        2.  In the Field field, enter merge fields `{{Invoice.Account.Currency|Symbol}}{{BySubscriptionName|Sum(ChargeAmount)Round(2)|Localise}}` .

        3.  In the Header field, enter a header name for the selected field to display in the summary table, for example, Charge Name .

        4.  Click Add to save the column information. A column with the Charge Name header is added to the summary table.


    5.  In the Columns subsection, click Add in the Header column, and configure the following information in the Add Column dialog that is displayed:

        1.  From the Field list, select a field that belongs to the InvoiceItems object, for example, TaxAmount .

        2.  Select Aggregate under the Field list, and then select Sum that is displayed next to the radio button.

        3.  In the Header field, enter a header name for the selected field to display in the summary table, for example, Tax Amount .

        4.  Click Add to save the column information. A column with the Tax Amount header is added to the summary table.


        Optional: if you want to round the value of the `TaxAmount` field in 2 decimals and format the value with the default locale, you can perform this step in the following way:

        1.  From the Field list, select a field that belongs to the InvoiceItems object, for example, TaxAmount .

        2.  Select Aggregate under the Field list, and then select Sum that is displayed next to the radio button.

        3.  In the Function field, enter Round(2)|Localise as the function.

        4.  In the Header field, enter a header name for the selected field to display in the summary table, for example, Tax Amount .

        5.  Click Add to save the column information. A column with the Tax Amount header is added to the summary table.


    6.  In the Columns subsection, click Add in the Header column, and configure the following information in the Add Column dialog that is displayed:

        1.  Enable Advanced Options next to the Field field.

        2.  In the Field field, enter merge fields `{{#Wp_Eval}}{{BySubscriptionName|Sum(ChargeAmount)}} + {{BySubscriptionName|Sum(TaxAmount)}}{{/Wp_Eval}}` . The value of the merge fields is the sum of the subtotal amount and tax amount.

        3.  In the Header field, enter a header name for the selected field to display in the summary table, for example, Total .

        4.  Click Add to save the column information. A column with the Total header is added to the summary table.


    7.  Optional: If you have added custom elements via Zuora UI, you can select custom fields that end with `__c` from Subscription or other joined objects to group and sum data as you want.

        1.  From the Field list, select a field that belongs to the InvoiceItems object, for example, Subscription: Subscription . Select a field that belongs to the Subscription object from the displayed list, for example, InvoiceOwner: Account , and then select Region\_\_c from the displayed list. Note that the `Region__c` field exists in the drop-down list only if you add the custom elements via Zuora UI.

        2.  Select Neither under the Field list.

        3.  In the Header field, enter a header name for the selected field to display in the summary table, for example, Region .

        4.  Click Add to save the column information. A column with the Region header is added to the summary table.


    8.  In the Filters subsection, click Add in the Field column, and configure the sorting information in the Add Filter By dialog that is displayed as you want.
5.  In the Header section, configure styles to apply to the table headers, such as the font, font size, formatting, alignment, text color, and background color.
6.  In the Body section, configure styles to apply to the table body, such as the font, font size, formatting, alignment, text color, and background color.
7.  In the HTML template editor, click Save to save the HTML template.
