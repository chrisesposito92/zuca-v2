---
title: "Use GroupBy configuration in data tables"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/common-use-cases-of-html-templates/use-groupby-configuration-in-data-tables"
product: "zuora-billing"
scraped_at: "2025-12-24T05:43:49.226Z"
---

# Use GroupBy configuration in data tables

Learn how to configure and use the Group By feature in HTML invoice templates to organize data tables effectively.

In the HTML template editor, you can configure different data tables in HTML invoice templates, for example, charge details tables. Additionally, to group the records in data tables, you can add the Group By configuration when building data tables.

This article demonstrates how to use the Group By configuration and how the Group By configuration works in data tables.

Assume that you have an invoice with four invoice items and some information about the invoice is shown in the following table:

| Subscription number | Charge name | Charge number | Service start date | Service end date | Charge amount | Tax amount | Total |
| --- | --- | --- | --- | --- | --- | --- | --- |
| AS-001 | Charge 1 | C-001 | 2021-01-01 | 2021-01-31 | 10 | 1 | 11 |
| AS-001 | Charge 2 | C-002 | 2021-01-01 | 2021-01-31 | 10 | 1 | 11 |
| AS-002 | Charge 3 | C-003 | 2021-01-01 | 2021-01-31 | 10 | 1 | 11 |
| AS-002 | Charge 4 | C-004 | 2021-01-01 | 2021-01-31 | 10 | 1 | 11 |

To add the Group By configuration and preview the table with the added configuration, perform the following steps:

1.  Configure a data table for the invoice in the HTML template editor with the following columns: You can see Configure data tables in HTML templates for more details on how to configure a data table by adding different columns.

    -   Subscription Number

    -   Charge Name

    -   Charge Number

    -   Service Start Date

    -   Service End Date

    -   Charge Amount

    -   Tax Amount

    -   Total


2.  In the Group By subsection, click Add in the Field column, and configure the following information in the Add Group By dialog that is displayed:
    1.  From the Field list, select Subscription: Subscription , and then select Name from the displayed drop-down list. The `Subscription.Name` field is used to group the records in the data table, and the subscription numbers in the preceding table represent the corresponding subscription names of the invoice.
    2.  In the Group Alias field, enter a name for the group, for example, Subscription Name .
    3.  Click Add to save the grouping configuration.
3.  Click Preview to switch from Edit Mode to Preview Mode. The Preview Settings pane is displayed on the right of the page.
4.  In the Preview Settings pane, select the account that contains the invoice from the Account list, and then select the invoice from the Invoice list. The data table with detailed information is displayed in the HTML template. In the Subscription Number column, cells with the same subscription number are grouped together, as shown in the following table:

    | Subscription number | Charge name | Charge number | Service start date | Service end date | Charge amount | Tax amount | Total |
    | --- | --- | --- | --- | --- | --- | --- | --- |
    | AS-001 | Charge 1 | C-001 | 2021-01-01 | 2021-01-31 | 10 | 1 | 11 |
    | Charge 2 | C-002 | 2021-01-01 | 2021-01-31 | 10 | 1 | 11 |  |
    | AS-002 | Charge 3 | C-003 | 2021-01-01 | 2021-01-31 | 10 | 1 | 11 |
    | Charge 4 | C-004 | 2021-01-01 | 2021-01-31 | 10 | 1 | 11 |  |
