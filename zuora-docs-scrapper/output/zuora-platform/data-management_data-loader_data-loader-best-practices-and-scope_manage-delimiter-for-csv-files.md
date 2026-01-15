---
title: "Manage delimiter for CSV files"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-loader-best-practices-and-scope/manage-delimiter-for-csv-files"
product: "zuora-platform"
scraped_at: "2026-01-15T21:58:27.247Z"
---

# Manage delimiter for CSV files

The document instructs delimiters usage in CSV files and ensure proper data interpretation by incorporating quotes when necessary.

Data Loader allows the import of data in CSV-UTF 8 format. The CSV files use delimiters for separating the values and the fields.

-   Comma (,)
-   Tab (\\t)
-   Pipe (|)
-   Semicolon (;)
-   Dot (.)
-   Tilde (~)
-   Colon (:)

If the data in the CSV contains any of the above mentioned delimiters as a value in the csv. For example, if the data in the csv is in the following format: FirstName,LastName,Address

Joe,Dane,USA

Here (,) is used for separating values and can also be used as a delimiter. In order to avoid misinterpretation of data, enter the values in the following format:"Joe","Dane","USA".

This will help the system in understanding that "Joe" "Dane" are separate values.

If your CSV requires values to be enclosed in double quotes, you can use the following tools and steps to update the data accordingly:

1.  Take a back up of the CSV before modifying the data.
2.  Open the CSV in a Text Editor (Notepad/Windows/Textedit on Mac) or a spreadsheet software ( Google Sheets or MS Excel)
3.  Identify the values and add the quotes.
4.  Save the modified file and start the import job.
