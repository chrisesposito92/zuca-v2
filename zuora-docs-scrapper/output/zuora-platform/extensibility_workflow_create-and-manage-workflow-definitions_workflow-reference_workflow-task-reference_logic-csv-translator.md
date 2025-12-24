---
title: "Logic: CSV Translator"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/logic-csv-translator"
product: "zuora-platform"
scraped_at: "2025-12-24T05:34:31.196Z"
---

# Logic: CSV Translator

This reference describes the Logic: CSV Translator task.

The CSV Translator task processes a CSV file according to the specified operation:

-   Filter a CSV file

-   Convert a CSV file to an XML file

-   Convert a CSV file to a JSON data payload file

-   Merge CSV files


## Task settings

When creating a CSV Translator task, select an operation and configure it accordingly.

-   Filter: Filter an input CSV file and output a new CSV file containing filtered records.

    1.  In the File field, select a CSV file to filter.

    2.  In the Column or CSV Column Number field, select either a column or a column number that is used for filtering against.
        Note: We recommend that you use column names to filter. Column numbers should only be used for some specific format of CSV files. Note that if column names are used, the output file from the CSV translator task will include headers. But if column numbers are used, the output file will NOT include headers.

    3.  In the Filter Value field, specify a value. This value will be compared with the values in the selected column. Only rows with the matched value will be added to the output file.

    4.  Select the output file format. The output file will contain the filtered records.

-   Convert to XML: Generate an XML file with the <records> node for the selected CSV file. Each row in the CSV file will be converted to an element in the XML file and the headers are used as attribute names.

-   Convert to JSON data payload: Parse the CSV file and add all rows under a key. Use the Payload Placement field to specify the location where the data generated from this task will be stored. If you want the data from a downstream task to replace the data from an upstream task, select the Replace Payload option.

-   Merge: Merge CSV files with the same headers. You can arrange the order of the merged content by reordering the files in the list.


Note that the Max Concurrency setting is fixed at 20 and cannot be updated.
