---
title: "Format of CSV report results"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/reporting-quick-reference/format-of-csv-report-results"
product: "zuora-platform"
scraped_at: "2025-12-24T18:41:24.968Z"
---

# Format of CSV report results

Learn how to obtain CSV report results

After you run a report, you can obtain the results as a CSV file. For information about how to obtain CSV report results, see:

-   [Create a Summary Report](/zuora-platform/data/reporting/use-reporting/create-a-summary-report)

-   [Manage Report Runs](/zuora-platform/data/reporting/use-reporting/manage-report-runs)

-   [Schedule Report Runs](/zuora-platform/data/reporting/use-reporting/schedule-report-runs)


## Layout

CSV report results are available in two layouts:

-   Crosstab layout - The rows and columns in the CSV file are grouped in the same way as the report results displayed in the Zuora user interface.

-   Unpivoted layout - The CSV file is formatted as a flat table.


## Number formatting

In CSV report results, numeric fields include thousands and decimals separators as per your locale setting by default. If you would like numeric fields to change the default formatting, submit a request at [Zuora Global Support](https://support.zuora.com/) and ask to disenable the number field formatting in Reporting exports.

## Delimiter

Report result exports utilize a tab-delimited separator.
