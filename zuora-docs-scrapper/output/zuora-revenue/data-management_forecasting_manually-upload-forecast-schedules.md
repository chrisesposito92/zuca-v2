---
title: "Manually upload forecast schedules"
url: "https://docs.zuora.com/en/zuora-revenue/data-management/forecasting/manually-upload-forecast-schedules"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:27:05.961Z"
---

# Manually upload forecast schedules

Learn how to manually upload forecast schedules to Zuora Revenue and manage the forecast data effectively.

Instead of making Zuora Revenue automatically create forecast schedules, you can also choose to manually upload the forecast schedules to Zuora Revenue. After the manual upload completes, the forecast data is generated for the uploaded transaction lines.

If forecast schedules already exist in Zuora Revenue, the uploaded schedules can override the previous ones. To override any manually uploaded schedules based on the system setup, run the RevPro3.0 Generate Forecast Master program with the Override Manual Forecast parameter set to Y . After the forecast schedules are created or updated, Zuora Revenue validates for any actuals that are available to calculate the adjustment entry. Based on the adjustment entry in the current period, Zuora Revenue can derive the adjustment method to adjust the delta amount by creating the adjusted forecast.

## Overview

The forecast schedules are manually uploaded to Zuora Revenue in a text or CSV file to Zuora Revenue. You must first define the upload file specification and POB filter criteria in a forecast upload template. After that, the filtered lines can be identified and extracted to a text or CSV file. Download the file, fill in the forecast data, and then upload it to Zuora Revenue.

## Procedure

Complete the following steps to manually upload forecast schedules to Zuora Revenue:

1.  Navigate to Forecast > Upload.

2.  On the Uploads page, click the Add New Template icon ('+') . The New Template window is displayed.

3.  In the Template Definition tab, complete the following fields as necessary:

    | Field | Required | Description |
    | --- | --- | --- |
    | Name | Yes | A unique name for this upload template. |
    | Description | No | A short description of this template. |
    | File Type | Yes | Type of the upload file. |
    | Start Row | No | The number of the row from which the actual data is inserted. For example, if the first row is the heading row, enter 2 to indicate the actual data starts from the second row. |
    | Date Format | No | The format of the date used in the upload file. |
    | Field Separator | Yes (for a text file) | The separator between items. |

4.  Click the save icon. The template is created.

5.  Click the Filters tab to specify the filter criteria for Zuora Revenue to identify the eligible POB lines:

    1.  To add a criterion, click the green '+' icon . A line is added.

    2.  In the Apply Criteria On column, select the objects to which this criterion is to be applied.

    3.  In the Field Name column, select the field name from the drop-down list.

    4.  Use the Operator and Operand columns to specify the filter operator and values.

    5.  Click green '+' icon .

    6.  Repeat Step a~e to add as many criteria as you need.

    7.  Use the Seq column to specify the sequence to apply the criteria for filtering.

6.  Save your changes and close the New Template window.

7.  In the Templates section of the Uploads page, hover the mouse over the template line and click the Freeze icon (padlock icon) . When a template is frozen, no changes can be made in the template.

8.  Hover the mouse over the line and click the Download Template icon . The text or CSV file that contains all the filtered lines is downloaded to your local system.

9.  Add or update the forecast data in the downloaded file, remove the unchanged transaction lines, and save your changes in the file.

    Note:

    Each transaction line has two rows in the downloaded template. One row is marked as Adjustments schedule type, which presents the allocation data. The other row is marked as Contractual Revenue schedule type, which presents the forecast data. Make changes only on the Contractual Revenue row.

10.  Hover the mouse over the template line and click the Upload icon .

11.  In the File Upload window, click Choose File to select the local file and then click Upload.

     Starting from version 37.004.02.00, to remediate CSV injection software attack, ensure that no cells in the uploaded file begin with any of the following characters:

     -   Equal sign (=)
     -   Plus (+)
     -   At (@)

     During file upload, use the ENABLE\_CSV\_DATA\_SANITIZATION profile to specify how to handle the file that has these special characters as a starting character in any cell. Valid values for this profile include the following:

     -   BLOCK: The file will be blocked if any cell begins with the above special characters.
     -   SANITIZE: The above special characters will be removed if any cell begins with them. Then, the file can be processed by the system.
     -   RAW: The file can flow into the system as it is even if there is a potential security risk.

## What to do next

The uploaded file is listed in the Uploaded Files section where you can view more information about the upload. The status column indicates whether the upload is successful.

-   If any error occurs during upload or data validation, the status changes from Submitted to Error in Upload . Hover the mouse over the line and click the View Log icon to check the problems. After you fix the problem in the file, upload it again.

-   If the file upload is successful, the status changes to Successfully Uploaded .
