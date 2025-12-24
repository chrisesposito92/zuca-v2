---
title: "Create a report from saved data queries"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/use-reporting/create-a-report-from-saved-data-queries"
product: "zuora-platform"
scraped_at: "2025-12-24T18:41:53.192Z"
---

# Create a report from saved data queries

Learn how to create a report from saved data queries

This article describes how to create and customize reports based on saved data queries in Zuora Reporting, including common use cases and limitations.

Zuora Data Query allows you to extract the data you need from your tenant, not only data from a single data source or object, but you can also get data to fit complex use cases, such as joined data across multiple objects, filtered data with combined filter conditions, or customized data from custom objects. When creating reports based on saved data queries, Zuora utilizes query results as the data source for reporting. Reports from saved data queries can be more flexible compared with reports from data sources.

For more information, see [Data Query](/zuora-platform/data/data-query/overview-of-data-query).

## Prerequisites

Ensure you have data queries saved in your tenant. For more information about how to save data queries, see [Save data queries](/zuora-platform/data/data-query/use-data-query-through-user-interface/save-data-queries).

## Procedure

To create a report from a saved data query, complete the following steps:

1.  [Select a saved data query for the report](#concept-wdwlw9f3__select_saved_query).
2.  [Build and preview the report](#concept-wdwlw9f3__build_and_preview).
3.  [Run and view the report](#concept-wdwlw9f3__run_and_view).

Alternatively, you can create a report from data sources or use standard reports as a starting point. For more information, see [Create a summary report](/zuora-platform/data/reporting/use-reporting/create-a-summary-report) and [Standard reports](/zuora-platform/data/reporting/reporting-quick-reference/standard-reports).

## Select a saved query for the report

To select a saved data query as the data source of a report, complete the following steps:

1.  In the left navigation menu, select Reporting > Reporting.
2.  Click the dropdown button ![dropdown button.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/74d0392b-1fa8-424f-bddb-21f0847b7f89?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijc0ZDAzOTJiLTFmYTgtNDI0Zi1iZGRiLTIxZjA4NDdiN2Y4OSIsImV4cCI6MTc2NjY4ODExMSwianRpIjoiMWEzNzFiYmExMTY0NGExZTliNmJhNWNhNDg0NTkzOTEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.kSwnlPeEDVUZ24gYcQOsKKQyd-7f642xWaDfdLgAPw0) to the right of \+ Create New Report, and then click Create report from saved query.The "Saved data queries" page opens, presenting all saved data queries in your tenant.
3.  Click Select in the Action column to select a saved data query. Make sure the query results of this saved data query contains all the data you want to present in the report.

Zuora creates a copy of the saved data query after the report is created. This copy will not be affected by the changes to the original query, such as updates or deletions. You cannot edit the copied query once selected.

Note:

The reports created from saved data queries take longer time to execute than executing the source data query itself as reporting has additional internal process when executing it.

## Build and preview the report

The steps for building and previewing reports from saved data queries are the same as reports based on data sources. For more information, see [Build and preview the report](/zuora-platform/data/reporting/use-reporting/create-a-summary-report#concept-retjrr5i__title-614).

## Run and view the report

The steps for running and viewing reports from saved data queries are the same as reports based on data sources. For more information, see [Run and view the report](/zuora-platform/data/reporting/use-reporting/create-a-summary-report#concept-retjrr5i__title-1469).

Note that you cannot run a saved report if its underlying saved data query does not adhere to the limits enforced by Zuora Data Query. For more information, see [Notes and Limitations for Data Query](/zuora-platform/data/data-query/overview-of-data-query#concept-rdxhe0o6__title-1961).

## Sample queries for common Reporting use cases

Here are the sample queries for some common use cases when creating reports from saved data queries.

## Query data from custom objects

You can query data from custom objects you created in your tenant.

For example, the following query returns the `Brand` and `Model` values from the `Vehicle` custom object:

SELECT brand\_\_c, model\_\_c FROM default\_\_vehicle WHERE year\_\_c >= 2021

For more information, see [Custom Objects](/zuora-platform/extensibility/custom-objects/custom-objects-overview).

## Query data by unioning multiple business objects together

You can query data on the same custom fields across multiple Zuora business objects by using the `UNION` operator.

For example, the following query returns the `AdditionalMessage` custom field value from the `InvoiceItem` , `CreditMemoItem` and `DebitMemoItem` objects:

SELECT 'Invoice Item' as Type, AdditionalMessage\_\_c FROM invoiceitem WHERE updateddate >= date('2023-05-01') UNION ALL SELECT 'Credit Memo Item' as Type, AdditionalMessage\_\_c FROM creditmemoitem WHERE updateddate >= date('2023-05-01') UNION ALL SELECT 'Debit Memo Item' as Type, AdditionalMessage\_\_c FROM debitmemoitem WHERE updateddate >= date('2023-05-01')

## Query data with ad hoc foreign currency conversion

You can query data with foreign currency conversion information by using the `fx_convert` function.

For example, the following query returns the transaction amount ( `Invoice.Amount` ), which is converted from the transaction currency ( `Account.Currency` ) to your home currency ( `USD` ):

SELECT invoice.amount, fx\_convert(invoice.amount, account.currency, 'USD', least(invoice.posteddate, invoice.invoicedate)) FROM invoice INNER JOIN account ON invoice.accountid = account.id WHERE invoice.updateddate >= date('2023-05-01')

For more information about foreign currency conversion, see [Foreign currency conversion for Data Query](/accounts-receivable/finance/zuora-finance-settings/currency-conversion-management/foreign-currency-conversion-for-data-query).

## Query data from Zuora Audit Trail

You can query the audit trail data in your tenant, including login history, setting changes, and business object changes.

For example, the following query returns the login history from May 2023 to June 2023:

SELECT \* FROM auditloginevent WHERE year = 2023 AND month >= 5 AND month <= 6

For more information, see [Audit Trail](/zuora-platform/system-management/audit-trail/audit-trail-overview).

## Query data requiring advanced calculations

You can utilize advanced SQL queries to efficiently retrieve data that aligns with your reporting requirements, including cohort analysis.

For example, the following query returns the start month, which is a commonly used metric in cohort analysis, for each account:

SELECT a.id, a.accountnumber, a.name, concat(cast(year(min(rpc.effectivestartdate)) as varchar),'-',lpad(cast(month(min(rpc.effectivestartdate)) as varchar),2,'0')) as account\_start\_month FROM rateplancharge rpc INNER JOIN rateplan rp ON rpc.rateplanid = rp.id INNER JOIN subscription s ON rp.subscriptionid = s.id INNER JOIN account a ON s.accountid = a.id WHERE s.status in ('Active','Cancelled') GROUP BY 1,2,3

## Notes and limitations

-   The query results of saved queries cannot contain columns with the same name. You can use aliases to avoid this problem, as shown in the following sample queries:
    | Supported | Not supported |
    | --- | --- |
    | SELECT account.name AS AccountName, subscription.name AS SubscriptionName FROM account, subscription WHERE account.id = subscription.accountId | SELECT account.name, subscription.name FROM account, subscription WHERE account.id = subscription.accountId |

-   Aliases in saved data queries for Reporting cannot contain spaces or any special characters, including underscore (\_).
    | Supported | Not supported |
    | --- | --- |
    | SELECT account.name AS AccountName, subscription.name AS SubscriptionName FROM account, subscription WHERE account.id = subscription.accountId | SELECT account.name AS "Account_Name", subscription.name AS "_SubscriptionName" FROM account, subscription WHERE account.id = subscription.accountId |

-   Aliases cannot start with a number. For example, 01Name is not supported.
    | Supported | Not supported |
    | --- | --- |
    | SELECT account.name AS AccountName, subscription.name AS SubscriptionName FROM account, subscription WHERE account.id = subscription.accountId | SELECT account.name AS "001AccountName", subscription.name AS "1234SubscriptionName" FROM account, subscription WHERE account.id = subscription.accountId |


-   All limitations for reports from data sources apply. For more information, see [Notes, limits, and limitations](/zuora-platform/data/reporting/use-reporting/create-a-summary-report#concept-retjrr5i__notes_limitations).
-   All limitations for Data Query apply. For more information, see [Notes and limitations](/zuora-platform/data/data-query/overview-of-data-query#concept-rdxhe0o6__title-1961).
-   The saved data query cannot contain data from the User object because this object is not supported by Reporting.
