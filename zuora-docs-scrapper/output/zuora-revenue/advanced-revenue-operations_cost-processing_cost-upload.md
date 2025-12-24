---
title: "Cost upload"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/cost-processing/cost-upload"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:33:52.060Z"
---

# Cost upload

Learn how to upload and manage costs in Zuora Revenue, including handling multiple cost uploads and configuring cost calculations.

The recommended way to upload standard costs to Zuora Revenue is to upload the cost as an amount on the corresponding sales order line. For other costs, it is recommended to either upload the cost on separate cost lines or to configure Zuora Revenue to calculate the costs based on defined formulas.

Zuora Revenue can process cost updates if there are multiple cost uploads. For example, if you have a 3-month revenue contract. You might choose to upload an initial cost in the first month of the revenue contract and then upload a revised cost at the end of the 3-month revenue contract. Alternatively, you might simply choose to upload the costs after the cost data is already known and available to be uploaded to Zuora Revenue.

Note:

If there are multiple cost uploads, the most recently uploaded costs will be used and a history of the cost changes is logged in Zuora Revenue.

## Procedure

Complete the following steps to upload costs to Zuora Revenue:

1.  Navigate to File Upload > Transaction/Cost.

2.  Click the '+' icon to add a template. The New Transaction Upload Template window is displayed.

3.  In the Template Definition tab, select the appropriate RC grouping rule for the transactions that are to be uploaded and provide a unique name for the template.

4.  In the File Type field, select CSV or Text for the upload file type.

5.  If you select Text in the previous step, enter the separator between items in the Field Separator field.

6.  In the Start Row field, enter the number of the row from which the actual data is inserted in the upload file. For example, if the first row is the heading row, enter 2 to indicate that the actual data start from the second row.

7.  (Optional): Select the date format for the upload file in the Date Format field and specify whether review in the required by using the Is Review Required toggle switch.

8.  Click the save icon . The upload template is created.

9.  Click the Field Mapping tab to ensure the required cost-related fields are present in the list.The following fields are related to costs but no all of them are required. You should choose the ones that suit your business needs.

    -   Cost Amount
    -   Cost Currency
    -   Cost Type ID
    -   Cost Type Name
    -   Cost Func Fx Rate
    -   Cost Global Fx Rate
    -   Cost Def Segments
    -   Cost Rev Segments
10.  Save your changes and close the window.

11.  To freeze the template for further changes, on the template page, click the template line and then click the Freeze icon (padlock icon).

12.  To download the template file, click the Download Template icon .

13.  Fill in your data in the downloaded file and save the changes.

     Note:

     To upload other costs as separate cost lines (Line Type being CST), the following fields are the minimum requirements. If the version of Zuora Revenue is earlier than 37.004.00.00, the Sales Order Line ID and Sales Order Date fields are also required; otherwise, the cost line will be stopped in staging tables.

     -   Cost Amount
     -   Cost Currency
     -   Cost Type ID
     -   Currency
     -   Functional Currency

14.  Click the Upload icon to upload the modified file.

15.  In the File Upload window, select the local file and click Upload. A message is displayed indicating the upload is successful.

     Note:

     Starting from version 37.004.02.00, to remediate CSV injection software attack, ensure that no cells in the uploaded file begin with any of the following characters:

     -   Equal sign (=)
     -   Plus (+)
     -   At (@)

     During file upload, use the ENABLE\_CSV\_DATA\_SANITIZATION profile to specify how to handle the file that has these special characters as a starting character in any cell. Valid values for this profile include the following:

     -   BLOCK: The file will be blocked if any cell begins with the above special characters.
     -   SANITIZE: The above special characters will be removed if any cell begins with them. Then, the file can be processed by the system.
     -   RAW: The file can flow into the system as it is even if there is a potential security risk.


## What to do next

After accounting entries are created for the cost, you cannot make changes to the cost. For more information, see [Accounting entries for cost](/zuora-revenue/advanced-revenue-operations/cost-processing/accounting-entries-for-cost) .

To review the cost type, see [Cost type](/zuora-revenue/advanced-revenue-operations/cost-processing/cost-type).
