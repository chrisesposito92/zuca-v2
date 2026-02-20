---
title: "Import CSV files with delimiters using Data Loader"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-loader-essentials-and-setup/import-csv-files-with-delimiters-using-data-loader"
product: "zuora-platform"
scraped_at: "2026-02-20T17:36:25.506Z"
---

# Import CSV files with delimiters using Data Loader

The document instructs delimiters usage in CSV files and ensure proper data interpretation by incorporating quotes when necessary.

Data Loader allows the import of data in CSV-UTF 8 format. The CSV files use delimiters for separating the values and the fields.

Data Loader supports the following delimiters:

-   Comma (,)
-   Tab (\\t)
-   Pipe (|)
-   Semicolon (;)
-   Dot (.)
-   Tilde (~)
-   Colon (:)

If a CSV value contains any of the supported delimiters, enclose the value in double quotes (" ") to prevent data misinterpretation.

For example, if a CSV file uses comma (`,`) as the delimiter:

FirstName,LastName,Address

Joe,Dane,USA

Here `,` is used as a separator and also as a delimiter. To interpret each value as a separate field format the values as follows:

"Joe","Dane","USA"

Note: Using double quotes ensures that Data Loader correctly interprets each value as a separate field.

1.  Create a backup of the original CSV file.
2.  Open the CSV file in one of the following:

    -   A text editor (Notepad on Windows or TextEdit on macOS)

    -   A spreadsheet application (Google Sheets or Microsoft Excel)


3.  Identify the values that require double quotes and add them as needed.
4.  Save the modified CSV file and use the updated file to start the import job.
