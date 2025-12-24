---
title: "Create a summary report"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/use-reporting/create-a-summary-report"
product: "zuora-platform"
scraped_at: "2025-12-24T18:41:32.527Z"
---

# Create a summary report

Create and customize summary reports in Zuora Reporting

You can create and customize summary reports in Zuora Reporting. Summary reports are similar to pivot tables in Excel.

To create a summary report:

1.  Navigate to Reporting > Reporting, then click Create New Report.
2.  [Select the data source](#concept-retjrr5i__select_data_source).
3.  [Build and preview the report](#concept-retjrr5i__title-614).
4.  [Run and view the report](#concept-retjrr5i__title-1469).

Alternatively, Zuora [Standard Reports](/zuora-platform/data/reporting/reporting-quick-reference/standard-reports) can be a useful starting point because you can save any Zuora Standard Report with a new name and modify it for your specific needs.

After saving your report, you can [schedule report runs](/zuora-platform/data/reporting/use-reporting/schedule-report-runs). Zuora will deliver updated results to you and your stakeholders.

You can use the page to check the status of report runs and download results from completed report runs. Each report run is listed on the [Manage report runs](/zuora-platform/data/reporting/use-reporting/manage-report-runs) page for 60 days.

## Select the data source

Select the data source that best matches the values that you want to report.

For example, if you want to report data about every customer account, select the Account data source. You should not select the Subscription data source, even though the Subscription data source also includes account data, because:

-   The Subscription data source only includes account data for subscription owners; the report results may not represent all accounts.

-   Different subscriptions can have the same owner; the report results may contain duplicate rows or unrepresentative aggregate values.


See [Pick the Right Data Source](/zuora-platform/data/reporting/data-sources-and-exports/pick-the-right-data-source) and Introduction to [Data Sources](/zuora-platform/data/reporting/data-sources-and-exports/introduction-to-data-sources) for more information about how to select the most appropriate data source for your report.

For more information about creating reports for custom objects, see [Create custom object reports](/zuora-platform/data/reporting/use-reporting/create-custom-object-reports).

To locate a data source on the Data sources page:

-   Hover over the data source to see a summary description of the data source.

-   Click All to view all the available data sources instead of only the default data sources. Zuora administrators can specify the default data sources.

-   Click List View to display a list of available data sources and expand all summaries.

-   Search the data source summary descriptions to help you find the right data source fields for your report. Searching will search the name and description of each data source.


## Build and preview the report

The field list on the left of the report builder displays all objects from the data source that you selected. Click an object name to show or hide the object's fields.

To build the summary report, drag and drop fields from the field list into the following parts of the report:

-   Column Groups

-   Row Groups

-   [Value Fields](#concept-retjrr5i__value_fields)


As you add fields, you will see a preview of what your final report will look like. The preview data is based on sample data from your tenant and is meant to give you an idea of how the report will be structured. The results shown in the preview mode will typically not match the results in your final report.

Fields in Column Groups correspond to nested groups of columns. For example:

![SummaryReport-ColGroup750.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/ee6f7862-6916-4421-a19f-25c752ea59ac?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImVlNmY3ODYyLTY5MTYtNDQyMS1hMTlmLTI1Yzc1MmVhNTlhYyIsImV4cCI6MTc2NjY4ODA5MCwianRpIjoiYWFiNmVhYTVlYzExNDQ3YWI3ZjFiODFmYTFmYmE2MjkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.Yn-CgYseoaxF5ZNJOvVljRIsvZe79-vQINnXtG2V_74)

Fields in Row Groups correspond to nested groups of rows. For example:

![SummaryReport-RowGroup.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/547821e7-a1ae-4d48-977f-2e2e3056650f?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjU0NzgyMWU3LWExYWUtNGQ0OC05NzdmLTJlMmUzMDU2NjUwZiIsImV4cCI6MTc2NjY4ODA5MCwianRpIjoiYzAyZjQ4NDI4ZjY3NDZjM2E0N2JkMWUyODY3ZWY5ZjgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.LWv5ex9GZH8cckKiHpIuF-MYjdWyxlUg0ryRnGkI4Rk)

The order of fields in Column Groups and Row Groups determines the nesting of groups in the summary report. For fields in Column Groups, the first field corresponds to the topmost group of columns in the summary report. For fields in Row Groups, the first field corresponds to the leftmost group of rows in the summary report.

## Grouping settings

For a field in Column Groups or Row Groups, click ![SettingsIcon.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/fde7fec7-fa26-4c93-a9ea-dd8748957a6c?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImZkZTdmZWM3LWZhMjYtNGM5My1hOWVhLWRkODc0ODk1N2E2YyIsImV4cCI6MTc2NjY4ODA5MCwianRpIjoiNzVkYWM5YTIyZjU5NDRkOThjN2I3YmEzM2E3MzYxMWIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.N0oISvCuLWWJjg8AwXma7ifaoiL7ymYEeA6uer3-KBo) Settings to specify how the field values are grouped. For example, for the "Account: Account Balance" field, you might want to have two groups: one group for accounts with a balance of less than $1,000 and a second group for accounts with a balance of $1,000 or higher.

The grouping settings that are available depend on the type of field:

-   Numeric fields - Numeric fields can be configured to use No Grouping, Even Intervals, or Custom Intervals. When grouping with Even Intervals, you must define the numeric range for the intervals. When grouping by Custom Intervals, you can specify the interval names and customize the start and end of each interval. For example: ![NumericGrouping.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/ad25f56b-2393-43e2-95e3-37dc3fe9a729?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImFkMjVmNTZiLTIzOTMtNDNlMi05NWUzLTM3ZGMzZmU5YTcyOSIsImV4cCI6MTc2NjY4ODA5MCwianRpIjoiNTUxZDdiNThkM2VhNGMzMGE0YWExZDc4YjBkZDExMDEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.lBS_F-SG_V1PNETOuSYwOfgiu2UOOwDeI_rMcNS48WQ) Numeric interval grouping causes many queries to be generated for each report. See [Notes and limitations](#concept-retjrr5i__notes_limitations) for limitations that apply.

-   Datetime fields - Datetime fields can be grouped by calendar week, month, quarter, or year. To group by [Fiscal Year](/accounts-receivable/finance/accounting-periods/set-up-accounting-periods) or Accounting Period, use fields from the [Accounting Period](/accounts-receivable/finance/accounting-periods/set-up-accounting-periods) object. This object is provided by several data sources.


## Value fields

Value Fields determine which aggregated values are displayed in the body of the summary report. Click ![SettingsIcon.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/fde7fec7-fa26-4c93-a9ea-dd8748957a6c?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImZkZTdmZWM3LWZhMjYtNGM5My1hOWVhLWRkODc0ODk1N2E2YyIsImV4cCI6MTc2NjY4ODA5MCwianRpIjoiNDQ4ZDI3Y2UwMDJjNGQzMjk5NjAwNDU3YzJjYzU1NzciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.kGnTvLLAUjJfjKfM_YaXhqX8Msqq6hF0hvCO016nAe4) Settings to specify how a field is aggregated.

You can aggregate field values in the following ways:

-   How much ...? What is the total ...? (SUM)

-   What is the average ...? (AVG)

-   How many ...? (COUNT)

-   How many unique ...? (COUNT UNIQUE)

-   What is the least or smallest ...? (MIN)

-   What is the most or greatest ...? (MAX)


The following example shows a summary report with "Invoice Item: Charge Amounts" aggregated by SUM:

![Image: SummaryReport-ValueFields_newFilter.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/b24dd755-0003-427d-830f-29f3d2f3a92c?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImIyNGRkNzU1LTAwMDMtNDI3ZC04MzBmLTI5ZjNkMmYzYTkyYyIsImV4cCI6MTc2NjY4ODA5MCwianRpIjoiODYwY2IwNzZhM2ZmNGZlMDhhZmRmOWMwZmEzNTc0MmMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.QgS23RhCAq1IIAWDvSGO42NhN7ksrY0Cd46aKGABTMc)

## Subtotals and rolling totals

Reporting can display subtotals for each field in Row Groups. For example, in the summary report shown above, the "Total for Enterprise Platform" row contains the subtotals of the field values in the "Enterprise Platform" group.

For a field in Row Groups, click ![SettingsIcon.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/fde7fec7-fa26-4c93-a9ea-dd8748957a6c?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImZkZTdmZWM3LWZhMjYtNGM5My1hOWVhLWRkODc0ODk1N2E2YyIsImV4cCI6MTc2NjY4ODA5MCwianRpIjoiZjI3NDkwMDQwNTVhNDQ3M2IzMmYzOTI4N2FjN2VkYjMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.d52nF5NlWtzVk5bhlo7mn7-HRrEu0nB-n6pHCp0LQcI) Settings to specify whether the summary report includes subtotals for the field.

If the summary report's columns are a sequence of dates, the summary report can also display totals that rollover from one column to the next. To enable this feature, click ![Image: Reporting_Settings_Button.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/b789b13a-a7c4-4fe2-8ccb-a65592861a88?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImI3ODliMTNhLWE3YzQtNGZlMi04Y2NiLWE2NTU5Mjg2MWE4OCIsImV4cCI6MTc2NjY4ODA5MCwianRpIjoiMmE1MGQwMzEzZmM1NGMwMTk5NDM5N2M3M2IyM2I4NzQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.7e0rFQOTfui2Bom4Nf77-cUFE75WoqGncVIcK0aexkM) Settings at the top right, then select Enable Rolling Totals.

When the rolling totals feature is enabled, the calculation of each column's total starts with the previous column's total. The summary report displays the starting and ending totals for each column. For example:

![Image: Reporting_Rolling_Totals.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/92eb5a35-7711-47c7-ac70-12aa2e5604b6?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjkyZWI1YTM1LTc3MTEtNDdjNy1hYzcwLTEyYWEyZTU2MDRiNiIsImV4cCI6MTc2NjY4ODA5MCwianRpIjoiMzZlYjRlZjkyMDA0NDA3ODg5YmZhNjRiNGE3NmM5MTciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.ZJv91d7TPDqHYWc8wiyy1OorOx0R7VbaLnJHZp6tiGU)

If the summary report contains row groups with subtotals, the summary report displays the starting and ending subtotal for each row group. For example:

![Image: Reporting_Rolling_Subtotals.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/cbaa70d7-c14e-4b8d-9e0f-0d57552738a5?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImNiYWE3MGQ3LWMxNGUtNGI4ZC05ZTBmLTBkNTc1NTI3MzhhNSIsImV4cCI6MTc2NjY4ODA5MCwianRpIjoiODE2ZmFjYjU2Y2UxNDk0YjhkYzA5N2U3NjM5OWVlM2YiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.L2VVBy7D8NtsKmTE8pzdLd4MGOMVYuej8rPJ1ZA2myw)

In the above example, there is no Starting Grand Total row and no Ending Grand Total row because the row groups have different currencies.

See [Notes, limits, and limitations](#concept-retjrr5i__notes_limitations) for more limitations that apply to the rolling totals feature.

## Filters

Filter conditions determine which records are included when your report is calculated. For example, if you are reporting the amount you have billed customers, you should only include Invoices with Status equal to "Posted", not Invoices with Status equal to "Draft".

Filters can be based on static values and conditions. Alternatively, parameterized filters can be set to prompt the user to specify filter values at the time of the report run. Filters on datetime fields can be defined relative to the future date that the report is run.

See [Filters](/zuora-platform/data/reporting/use-reporting/create-a-summary-report/filters) for more information.

## Run and view the report

You can save and run the report at any time during the configuration of the report.

To save a report, click Save. When you save the report, you can specify the report name, report description, and the folders to save the report in. After you have saved the report, you can use the Save menu button to rename or move the report. See [Folders and sharing](/zuora-platform/data/reporting/use-reporting/folders-and-sharing) for more information.

To save and immediately run the report, click Save Report & Run. You can also use the Save Report & Run menu button to schedule a run of the report, or run the report with data warehouse for better performance. See [Schedule report runs](/zuora-platform/data/reporting/use-reporting/schedule-report-runs) and [Run a report with data warehouse](/zuora-platform/data/reporting/use-reporting/run-a-report-with-data-warehouse) for more information.

If you choose to run the report, Zuora displays the final report results based on all the data from your tenant. At the top of the report, Zuora displays the date and time when the report was run ( Report Complete ) and the number of items in the report results ( Total Items ).

To rerun the report, click Run Again. To return to the report builder and reconfigure the report, click Edit Report.

To export the final report results as a CSV file, click Export. The rows and columns in the exported CSV file are grouped in the same way as the displayed report results. This results layout is called the crosstab layout. To export the report results as a flat table, select Unpivoted Layout from the Export menu button.

Note:

If the report results are larger than 25MB, your connection may time out while Zuora is preparing the CSV file. In this scenario, Zuora displays the error message "504 Gateway Time-out." If you receive this error when exporting report results, split the report into smaller sub-reports and export the results of each sub-report separately.

## Notes, limits, and limitations

If a field has no value, Reporting displays "(none)" in the summary report results. If the value of a field is the empty string, Reporting displays "(blank)" in the summary report results.

The following limits and limitations apply to summary reports:

-   The time for running a summary report is limited to 1 hour. If the running time exceeds 1 hour, the process will be stopped.

-   Decimal numbers are rounded to 3 decimal places. If you need unrounded values, use Data Source Export, Data Query, or ZOQL Query instead.

-   Summary reports are limited to ten dimensions at a time, meaning you can have any combination of column groups and row groups as long as they don't add up to more than ten.

-   The number of columns is limited to 100. In contrast, the number of row groups is essentially unlimited. If you want to create a summary report with a dimension that has more than 100 values (date and datetime data types can easily reach hundreds of values), you can do one of the following things:

    -   Make that large dimension a row group.

    -   Group-by time into years, quarters, months, or weeks if the data type is date or datetime.

    -   Group-by intervals if the data type is an integer, decimal, or numeric data type.

-   Only one column group and one row group may use bucketing. Bucketing results from using intervals for numeric, or selecting fiscal years or accounting period fields. The column using bucketing can not have more than ten buckets (intervals).

-   The total number of queries produced by one report may not exceed 50. The number of queries is not visible in the user interface, but behind the scenes, the number of buckets and groups in columns and rows creates as many queries as the cross product or the number of table cells.

-   Reports using COUNT DISTINCT can have only one value field and they must have at least one column or row group.

-   Reports using COUNT DISTINCT do not display subtotals.

-   Preview for a report is disabled when COUNT DISTINCT is used with date or datetime data types.

-   The following limitations apply to the rolling totals feature:

    -   The report must have at least one field in Row Groups, exactly one field in Column Groups, and exactly one field in Value Fields.

    -   For the field in Value Fields, the only supported aggregation is SUM.

    -   The field in Column Groups must be a date or datetime field and must be sorted in ascending order.

    -   There can be at most one filter on the field in Column Groups and the supported filter conditions are "is during", "is greater than" and "is greater than or equal to". Using OR to join filters is not supported at this time.

    -   Rolling totals are not influenced by data that is not included in the report. This means that the ending total of the first column is equal to the sum of the values in the first column.

    -   Rolling totals are not calculated across different currencies. For example, if the fields in Row Groups are "Account: Name" then "Account: Currency", rolling totals are not be calculated because each "Account: Name" group could contain values in several different currencies. However, if the fields in Row Groups are "Account: Currency" then "Account: Name", rolling totals are calculated for the "Account: Currency" groups.

-   The Days Overdue field cannot be used as a value field in a report.

-   If your organization uses Zuora Multi-entity, each report represents data from the entity in which you created the report. It is not possible to create a report that represents data from multiple entities in your multi-entity hierarchy.

-   Report names must be unique. Unless otherwise renamed by a user, the name of newly created reports will default to "Untitled Report - YYYYMMDD HH:MM:SSZ", where YYYYMMDD HH:MM:SSZ corresponds to the date and time (in UTC) that the report was saved.
