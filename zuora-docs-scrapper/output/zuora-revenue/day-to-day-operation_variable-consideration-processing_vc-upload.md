---
title: "VC upload"
url: "https://docs.zuora.com/en/zuora-revenue/day-to-day-operation/variable-consideration-processing/vc-upload"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:32:06.735Z"
---

# VC upload

Zuora Revenue allows automatic or manual upload of Variable Consideration (VC) estimates and actuals to manage transactions effectively.

Zuora Revenue can automatically apply VC estimates to transactions based on the VC related setup as documented in [VC setup](/zuora-revenue/day-to-day-operation/variable-consideration-processing/vc-setup). Alternatively, you can manually upload VC to Zuora Revenue to accomplish the following things related to VC:

-   Create VC estimates for the transaction line that does not have an estimated VC
-   Update existing VC estimates (either system applied or manually uploaded)
-   Bulk update of various VC types for multiple revenue contracts
-   Upload actuals or adjustments to an estimated VC
-   Clear VC estimates (actuals and final actuals)
-   Cancel the previously processed actuals and final actuals

## Overview

Two menu options are provided to manually upload VC to Zuora Revenue. Both options require you to create a template, download the template file, fill in the data and then upload the file again.

-   File Upload > Variable Consideration [(See Option 1)- VC file upload](#concept-padbauxe)

-   File Upload > Transaction/Cost [(See Option 2) - Transaction file upload](#concept-padbauxe__title-477)


Note:

Keep the following things in mind when you manually upload VC:

-   When you upload VC actuals (Upload Type being Actual), the downloaded template file only contains details of the transactions lines with VC estimates applied. Transaction lines without VC estimates are not eligible for VC actual upload.

-   When you upload VC actuals (Upload Type being Actual), only the following columns in the uploaded file are considered. Other columns are for additional information and are pre-populated.

    -   Process Type

    -   Actuals Amount

    -   Actuals Qty

-   If there are multiple uploads for clearing estimates (Process Type being Clearing Estimate) for the same transaction line, the VC actuals will be cleared incrementally upon each upload.

-   Only one upload for clearing final actuals (Process Type being Clearing Estimate Final) is allowed. The remaining accrual balance on the VC line will expire when final actuals are processed. No further processing of VC estimates is allowed.

-   When you cancel VC actuals, all the actuals or final actuals that are previously processed for the transaction line are canceled.


## Before You Begin

Make sure that the required VC setups are completed in Zuora Revenue. For more information, see [VC Setup](/zuora-revenue/day-to-day-operation/variable-consideration-processing/vc-setup) .

## Option 1 - VC File upload

Complete the following steps to upload the VC file to Zuora Revenue:

1.  Navigate to File Upload > Variable Consideration. The Variable Consideration page is displayed.
2.  Click the '+' icon to add a VC upload template. The New VC Upload Template window is displayed.
3.  In the Template Definition tab, complete the following information as necessary:
    | Field | Description |
    | --- | --- |
    | Name | Required. Provide a unique name for the template. |
    | Description | A short description of the template. |
    | Upload Type | Required. Select the type for the upload. The following options are available:Actuals (for actual upload)Estimates (for VC estimate upload)SFC Actuals (for significant financing component actual upload if you have SFC values)You cannot change the Upload Type value after the VC upload template is created. |
    | File Type | Required. Select the appropriate type of the upload file. |
    | Field Separator | Required for a text file. Enter the separator between items in the upload file. For example, a comma (,). |
    | Start Row | Enter the number of the row from which the actual data is inserted to the upload file. For example, if the first row is the heading row, enter 2 to indicate that the actual data starts from the second row. |
    | Date Format | Select the date format in the upload file |

4.  Click the save icon. The VC upload template is created.

5.  To filter the transaction lines that are included in the template file, click the Filters tab and specify the filter criteria.The downloaded template file will be created with data for all the transaction lines that satisfy the criteria.

6.  Save the filter settings and click the Freeze icon (padlock icon) to avoid further changes to the template.

7.  On the VC template page, click the template line that is created and then click the Download Template icon. A template file is downloaded containing data for all the transaction lines that satisfy the filter criteria. Some fields contain pre-populated values and some fields require your input for the upload. One transaction line might have multiple mapping VC types.

8.  Fill in your data in the downloaded template file and save the changes.

    -   To upload VC estimates:

        1.  For each transaction line, keep the row for the relevant VC type and remove the other rows.

        2.  Enter values for Formula Name and New Apply Value columns. If Formula Name column is empty, the New Apply Value is populated directly instead of applying a formula.

    -   To upload VC actuals:

        1.  Choose one of the following purposes for this upload in the Process Type column for each line.

            -   Clearing EstimateSelect this type to bring VC actuals for an applied VC estimate.

            -   Clearing Estimate (Final)Select this type to bring final actuals for an applied VC estimate.

            -   Cancel ActualsSelect this type to cancel all the actuals or actual finals that are applied to the sales order line at the moment.

        2.  Enter the amount to be cleared in the Actuals Amount column.

        3.  If the Track By Quantity switch is toggled to Yes in the VC type setup, enter the quantity for the transaction line in the Actuals Qty column.

9.  Click the Upload icon to upload the modified file.A message is displayed indicating the upload is successful. The collected VC estimates or actuals stay in the unprocessed status.

    Starting from version 37.004.02.00, to remediate CSV injection software attack, ensure that no cells in the uploaded file begin with any of the following characters:

    -   Equal sign (=)
    -   Plus (+)
    -   At (@)

    During file upload, use the ENABLE\_CSV\_DATA\_SANITIZATION profile to specify how to handle the file that has these special characters as a starting character in any cell. Valid values for this profile include the following:

    -   BLOCK: The file will be blocked if any cell begins with the above special characters.
    -   SANITIZE: The above special characters will be removed if any cell begins with them. Then, the file can be processed by the system.
    -   RAW: The file can flow into the system as it is even if there is a potential security risk.
10.  To process the data, go to Reports > Schedule Jobs.

11.  On the Schedule Jobs page, click the Schedule Job/Job Groups icon (plus icon) .

12.  In the Program Name field, select RevPro3.0 VC Process.

13.  Click the Program Parameters tab, define the values for each parameter.The VC process must be run for each book that the VC applies to, and for each VC type or RC that requires to be processed.

14.  Click Submit Job to start the VC process.


## Option 2 - Transaction file upload

Complete the following steps to upload VC with the transaction file to Zuora Revenue.

Remember the transaction type must be INV-VC or CM-VC for this type of upload.

1.  Navigate to File Upload > Transaction/Cost.

2.  Click the '+' icon to add a template. The New Transaction Upload Template window is displayed.

3.  In the Template Definition tab, provide the detailed template information:

    1.  In the RC Grouping Rule field, select the appropriate RC grouping rule for the transactions that are to be uploaded.
    2.  In the Name field, provide a unique name for the template.
    3.  Select the Enabled checkbox to enable the template.
    4.  In the File Type field, select the appropriate format for the file to be uploaded. If the uploaded file is not in the specified format, an error message is displayed.
    5.  If you select Text in the previous step, enter the separator between items in the Field Separator field.
    6.  (Optional): In the Start Row field, enter the row number from which the actual data is inserted in the uploaded file. For example, if the first row is the heading row, enter 2 to indicate that the actual data starts from the second row.
    7.  (Optional): In the Date Format field, select the date format for the upload file. If the date value format in the uploaded file is different from the template, an error message is displayed.
    8.  (Optional): Specify whether review in the required by using the Is Review Required toggle switch.
4.  Click the save icon. The template is created.

5.  Click the Field Mapping tab to add the following fields for the INV-VC or CM-VC transaction upload.

    | Staging Field Name | Mandatory | Description |
    | --- | --- | --- |
    | VC Process Type | Yes | Specifies the purpose of the upload. Valid values in the upload file are as follows:ESTIMATESelect this type to upload an estimated VC for the sales order line without VC estimate applied, or update existing VC estimates.CLEARING ESTIMATESelect this type to bring VC actuals for an applied VC estimate.CLEARING ESTIMATE (FINAL)Select this type to bring final actuals for an applied VC estimate.CANCEL ACTUALSSelect this type to cancel all the actuals or actual finals that are applied to the sales order line at the moment. |
    | VC Type Name | Yes | Specifies the name of the VC type that is defined in VC setup. |
    | VC Formula | Yes (if VC Amt is not provided) | Specifies the name of the VC formula that is created in VC setup, which is to be updated. |
    | VC Amt | Yes (if VC Formula is not provided) | Specifies the adjusted VC amount.If the VC Formula column has a value in the upload file, the VC Amt value will be applied to the specified formula as a percentage; otherwise, the VC Amt value will be applied as an absolute amount. |
    | VC Qty | No | Specifies the quantity for the transaction line. This field is applicable only when the Track By Quantity switch is toggled to Yes in the VC type setup. |
    | VC Eligible Flag | No | Indicates whether this line is a VC line.Required only if you want to enable VC allocation. |

6.  Save your changes and close the window.

7.  To freeze this template to avoid further changes, on the template page, click the template line and then click the Freeze icon (padlock icon).

8.  To download the template file, click the Download Template icon .

9.  Fill in your data in the downloaded CSV file and save the changes.

10.  Click the Upload icon to upload the modified file.A message is displayed indicating the upload is successful. The collected VC estimates or actuals stay in the unprocessed status.

     Starting from version 37.004.02.00, to remediate CSV injection software attack, ensure that no cells in the uploaded file begin with any of the following characters:

     -   Equal sign (=)
     -   Plus (+)
     -   At (@)

     During file upload, use the ENABLE\_CSV\_DATA\_SANITIZATION profile to specify how to handle the file that has these special characters as a starting character in any cell. Valid values for this profile include the following:

     -   BLOCK: The file will be blocked if any cell begins with the above special characters.
     -   SANITIZE: The above special characters will be removed if any cell begins with them. Then, the file can be processed by the system.
     -   RAW: The file can flow into the system as it is even if there is a potential security risk.
11.  To process the data, go to Reports > Schedule Jobs.

12.  On the Schedule Jobs page, click the Schedule Job/Job Groups icon ('+').

13.  In the Program Name field, select RevPro3.0 VC Process.

14.  Click the Program Parameters tab, enter the book name, VC type, and RC ID as specified in the VC upload file.The VC process must be run for each book that the VC applies to, and for each VC type or RC that requires to be processed.

15.  Click Submit Job to start the VC process.


## Result

After the VC process completes, the corresponding VC upload line will be updated to the processed status. The processed VC will be associated with the defined transaction line and can be viewed in the Workbench.

-   If Estimate is selected as the process type, the VC estimate will be applied to the sales order line that does not have any VC estimate before, or the existing VC estimate is updated.

-   If Clearing Estimate is selected as the process type, the accrued VC will be cleared for the uploaded amount.

-   If Clearing Estimate (Final) is selected as the process type, no further processing of VC estimates or actuals is allowed unless the final actual is canceled.

-   If Cancel Actuals is selected as the process type, all the actuals or final actuals are canceled.


For information about the VC impact on the Workbench, see VC impact on Workbench.
