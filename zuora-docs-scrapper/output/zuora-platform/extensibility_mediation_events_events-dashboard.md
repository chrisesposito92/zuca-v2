---
title: "Events Dashboard"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/events/events-dashboard"
product: "zuora-platform"
scraped_at: "2025-12-24T05:28:53.471Z"
---

# Events Dashboard

The Events Dashboard in Zuora Mediation provides a consolidated, filterable view to monitor event volumes, track key metrics, ingestion successes versus errors, and to investigate issues across your meters.

The dashboard is organized into the following targeted sections to support quick observability and troubleshooting.

-   Ingestions

-   Ingestion Errors

-   Event Summary


For the Events Dashboard, navigate to

The dashboard has the following sections:

## Filters and controls

-   View By Event Definition filter: Select an event definition by specifying the keywords.

-   Timeframe filter: Select a time frame for the events to be analyzed. Time frame options can be in hours, days, a week, or months.

-   Interval filter: Select a time interval to display the events data in the Events Ingested dashboard. Depending on the option selected in the Timeframe filter drop-down list, you can select an interval period. For example, if the time frame filter is this week, you can select 1 day as the interval. If the time frame filter is the last 1 hour, you can select 1 second or 1 minute as the interval period.

    Click the Apply button to apply the selected filters.

-   Chart/Table toggle: Switch between visual trend charts and tabular lists in the sections that support it.


## Ingestions

You can view the events ingested into the meters. You can apply one or more filters on the dashboard to interact with the events for data analysis. The filter conditions appear on top of the Events Ingested dashboard. Use the filtering options to filter data for a specific time period and by event definitions. The filters you specify for an event do not persist and the next time you visit this dashboard, the default data is displayed.

Set the refresh rate in the Refresh drop-down list to refresh the dashboard periodically.

## Ingestion Errors

Ingestion Errors lists error codes, descriptions, and counts in a filterable view to accelerate triage. The list view gives a description of each error along with the error code. Apply filters to view a selection of ingestion errors.

You can filter the error list by supported columns and export error data as a CSV file.

## Event Summary

Event Summary provides a list view with aggregated counts by event type, including total and error counts, and supports column/operator/value filtering.

You can switch between chart and table views, and export the summary data as CSV for offline analysis.

## Exporting data

A single download action in the top right enables CSV exports for Ingestions, Ingestion Errors, and Event Summary. These exports are designed for reuse in enterprise analytics tools and workflows.
