---
title: "Load rules"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/load-tax-rates/load-rules"
product: "zuora-billing"
scraped_at: "2025-12-24T05:05:47.623Z"
---

# Load rules

This topic outlines the rules for loading tax rates, including file format recommendations, field requirements, and error handling procedures.

The following rules apply when loading tax rates:

-   We recommend that you use the following CSV format variations to import tax rates:
    -   MS-DOS Comma Separated from Microsoft Excel
    -   Windows Comma Separated from Microsoft Excel
    -   Comma Separated Values from Microsoft Excel

    -   Comma-separated Values from Google Sheets
-   If you have specified a value for the Tax Rate field, you must specify values for Tax Rate Type and Tax Name.
-   Blank records will be skipped.
-   If there is an error in the file, the entire file will be rejected.
-   Matching fields are not case-sensitive.
-   There are three tax rates. When a blank tax rate is reached, no further loading of tax rates for that row will be performed.
-   If Tax Rate 1 is empty and there are values in Tax Rate 2, Tax Rate 2 will not be loaded.
-   Zuora recommends that you always begin with Tax Rate 1, then add taxes to Tax Rate 2 and then Tax Rate 3, as required.

The status of the load process will be displayed on the screen. This process will periodically write status to the screen when loading large files.

If an error is encountered, Zuora Tax will not load the file. The load process has an error buffer so that it will continue to load the file until the buffer max of 20 is reached or the process reads through the entire file. This will help identify all errors so that you can fix them in one step, or stop the process if Zuora Tax encounters a large number of errors.
