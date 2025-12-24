---
title: "Event upload"
url: "https://docs.zuora.com/en/zuora-revenue/data-management/event-processing/event-upload"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:26:42.616Z"
---

# Event upload

Learn how to upload event data to Zuora Revenue, ensuring all prerequisites are met, and view the upload results.

After event setup is completed, you can upload event data to Zuora Revenue based on the event upload template that you created.

## Before you begin

Before you upload event data to Zuora Revenue, make sure the following requirements are met:

-   Required event setup is completed. For more information, see [Event setup](/zuora-revenue/data-management/event-processing) .

-   To upload a revenue or cost event, the event has been associated with a POB template. For more information, see Associate event with [POB template](/zuora-revenue/data-management/event-processing) .

-   To upload a hold event, the event has been associated with a revenue hold. For more information, see Associate event with [revenue holds](/zuora-revenue/getting-started/policy-management/revenue-holds-and-transfer-holds).


## Procedure

Complete the following steps to upload event data to Zuora Revenue:

1.  Navigate to File Upload > Events.

2.  If a template for the event type does not exist, create one by completing the following steps:

    1.  On the Events page, click the (+) icon add an event template.

    2.  In the New Event Template window, complete the following information:

        | Field | Description |
        | --- | --- |
        | Event Name | Select the appropriate event type. All event types that are created in Zuora Revenue are displayed on the drop-down list. |
        | Name | Enter a unique name for the event template. |
        | File Type | Select the format of the event file. |
        | Start Row | Enter the row number from which the actual data starts in the upload file.For example, if the first row is the heading row, enter 2 to indicate that the actual data starts from the second row. |
        | Field Separator | Required for a text file. Enter the separator between items. |

    3.  Complete other optional fields as necessary.

        1.  Select the Web Service Template checkbox to enable Web Service Integration where you can integrate with multiple events such as quantity, amount, and percentage in a single upload file.

        2.  Select the Is Review Required checkbox to indicate manual review and approval is required before data is uploaded to Zuora Revenue staging tables.

    4.  Ensure the Enabled switch is toggled to Yes

    5.  Click the save icon. The event template is created.

    6.  (Optional): Click the Field Mapping tab to add or remove columns in the event template file. The staging fields that you selected when you create the event type are automatically listed. Select the staging field from the Staging Field Name list and enter the column name in the Input Value Label field to specify the actual column name that is to be used in the event template file.

        Note:

        For budgeted cost or budgeted hours event, make sure the fields that are used in the following formulas are present in the event template file. Zuora Revenue will calculate the percentage of revenue to be released based on one of the formulas:

        -   Budgeted hours event: (Completed Budgeted Hours/Total Budgeted Hours)\*100
        -   Budgeted cost event: (Completed Budgeted Cost/Total Budgeted Cost)\*100

3.  To upload the event based on a template, complete the following steps:

    -   On the Events page, hover your mouse over the template line and click the Freeze (padlock) icon so that no changes can be made in the template. If the template is already frozen, proceed to the next step.

    -   Click the Download Template icon to download the template file.

    -   Open the template file, fill in the event information, and save the file.

    -   Hover the mouse over the template line and click the Upload icon .

    -   In the File Upload window, choose the local file with the bundle information that you added and click Upload.

        Note:

        Starting from version 37.004.02.00, to remediate CSV injection software attack, ensure that no cells in the uploaded file begin with any of the following characters:

        -   Equal sign (=)
        -   Plus (+)
        -   At (@)

        During file upload, use the ENABLE\_CSV\_DATA\_SANITIZATION profile to specify how to handle the file that has these special characters as a starting character in any cell. Valid values for this profile include the following:

        -   BLOCK: The file will be blocked if any cell begins with the above special characters.
        -   SANITIZE: The above special characters will be removed if any cell begins with them. Then, the file can be processed by the system.
        -   RAW: The file can flow into the system as it is even if there is a potential security risk.



## Result

In the Uploaded Files section on the Events page, you can view the file upload result.

Depending on the file upload status, you can do the following things in the Uploaded Files section:

-   If errors occur during the file upload, hover the mouse over the line and click the View Log icon to check the logged errors.

-   If the file upload is successful, to view the file data and summary, hover the mouse over the line and click the View Uploaded File Data and Summary icon . The Uploaded File Data and Summary window is displayed listing the number of records uploaded, the batch IDs, and the file details.


## What to do next

After the event file is uploaded successfully, the next step is to start the event process for Zuora Revenue to take appropriate revenue or cost actions based on the uploaded events. For more information, see [Release event](/zuora-revenue/data-management/event-processing).
