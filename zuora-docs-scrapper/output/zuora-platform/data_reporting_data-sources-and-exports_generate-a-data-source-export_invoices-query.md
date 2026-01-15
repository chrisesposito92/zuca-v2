---
title: "Invoices query"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/generate-a-data-source-export/invoices-query"
product: "zuora-platform"
scraped_at: "2026-01-15T22:02:34.180Z"
---

# Invoices query

Learn about the Invoices query

## Overview

The Invoices query lets you export a report with a group of your customers or all of your customers. This article explains how to create the Invoices query including the data source objects and fields required for export. This report reproduces the data provided by the Invoices Report that was deprecated as of R182.

## Data source selections

Navigation: Reporting > Data Sources

In the Data Source drop-down, choose Invoice .

See [Generate a Data Source Export](/zuora-platform/data/reporting/data-sources-and-exports/generate-a-data-source-export)for general instructions on how to create a data source export.

## Objects and fields

The following table describes the objects and their fields used in the Invoice query:

| Object | Fields |
| --- | --- |
| Invoice | AmountCreated DatePosted DateSource IDStatusTarget Date |
| Account | Account NumberCurrencyName |

## Filters

The following are recommended filter fields to refine your search. If you want to view all customers with any status, a filter is not required.

Set your filters (Name, Status, Created Date, and Updated Date) to help you define what you want to see and retrieve in your reports.

-   Name: Enter the customer name to export data based on an individual customer account.
-   Status: Select a status type from the list to filter by status (Draft, Active, or Canceled).

## Time frame

The following are recommended date filters.

-   Created Date: The date the customer accounts were created. The minimum number of days that you can run a report for is two days. For example, if you set your date filter to be 1/1/2014 through 1/2/2014, your report will show customer accounts created on 1/1/2014 and 1/2/2014.
-   Updated Date: The last date that the customer account was modified.

## Format

Select to export as a CSV or CSV ZIP.
