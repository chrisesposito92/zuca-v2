---
title: "System configuration for month end process"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/system-configuration-for-month-end-process"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:27:35.345Z"
---

# System configuration for month end process

The system configuration for the month-end process in Zuora Revenue is optional. It allows for automated period closure using the Close Process dashboard, with features like soft freeze to prevent data discrepancies and templates for managing period-close and period-open tasks efficiently.

The system configurations described in this section are not mandatory. You can choose to skip the configuration and manually start the month-end process unless you want to use the [Close Process dashboard](/zuora-revenue/month-end-process/close-process-dashboard) to close a period.

-   Setting up the soft freeze in Zuora Revenue can help ensure that other Zuora Revenue users cannot bring in any changes that will cause data discrepancies when you are closing or opening a period. For more information, see [Set up soft freeze](/zuora-revenue/month-end-process/close-process-dashboard) .

-   As part of application setups, you can also add some period-close tasks or period-open tasks to a template, especially program-related tasks. The template can ensure that the period-close tasks or period-open tasks are completed in the specified sequence. Besides, if the task is to run predefined programs, you can start these programs from the single UI instead of submitting jobs one after another on the Schedule Jobs page. For more information, see [Create Period Close/Open templates](/zuora-revenue/month-end-process/close-current-period-from-close-process-dashboard).


## Set up soft freeze

Before you decide whether to set up soft freeze in Zuora Revenue, the following example can help you understand why soft freeze is important.

If a company has the following amounts in their books and the soft freeze is not set up for the batch collection job in Zuora Revenue.

| Opening Balance | $100K |
| --- | --- |
| Revenue Activity | $40K |
| Closing Balance | $60K |

When you are closing the period, another user submits the batch collection jobs to bring in new revenue contracts and the revenue that is released for the new revenue contracts is $10K. This will impact the revenue amount of the period that you are closing.

| Opening Balance | $100K |
| --- | --- |
| Revenue Activity | $40K + $10K |
| Closing Balance | $60K + $10K |

## Procedure

Complete the following steps to set up soft freeze in Zuora Revenue:

1.  Navigate to Setups > Application.

2.  Click to open the side menu and then click Soft Freeze.

3.  On the Soft Freeze page, select Jobs for the Type field. The predefined programs are listed.

4.  To prevent a program from running during the month-close or month-open process, select the program line and set the Lock column value to Yes.

5.  In the Period Status column, choose the phase when you do not want to program to run. Valid options are as follows:

    -   Pending Open: The select job or action cannot be executed when you are opening the period. The program is available to be run only when the period is opened.

    -   Pending Close: The select job or action cannot be executed when you are closing the period. The program is available to be run only when the period is closed.

    -   Both: The select job or action cannot be executed when you are opening or closing the period.

6.  Click the save icon to save your changes.

7.  Select Actions for the Type field and repeat Step 4 ~ 6 to prevent an action from being executed.


A period-close or period-open template lists the tasks that must be performed in the specified sequence before a period can be closed or opened.

## Before you begin

-   Before you create a period-close or period-open template, identify the tasks to be added to the template. The following types of tasks can be added to the template:

    -   Program: Run a predefined program as a background job.
    -   Manual: Complete a user-defined task offline.
    -   Reporting: Run a predefined report.

    For information about required period-close or period-open tasks, see [Period-close activities](/zuora-revenue/month-end-process/period-close-activities) or [Period-open activities](/zuora-revenue/month-end-process/period-open-activities).

-   If you want to add a task of the program type, you must first create a background job to map this program in Zuora Revenue. Complete the following steps to create a background job for the program:

1.  Navigate to Setups > Applications.

2.  Click the left pointing arrow icon to open the side menu and click Background Jobs. The predefined programs are all listed on the Background Jobs page for your reference. They are not editable.

3.  Locate the predefined program that you want to run and write down its procedure name.

4.  Click the New Job icon ('+' icon) to create your own job. The New Job window is displayed.

5.  In the Job Details tab, specify the detailed information of this job.

    | Field Name | Description |
    | --- | --- |
    | Program Name | Provide a unique and meaningful name for this job. It cannot be the same as the predefined program name. |
    | Procedure Name | Specify the procedure name that you wrote down in Step 3. |
    | Period Type | Select the phase that you want this program to be available for the template:Open: This program can be added to the period-open template.Close: This program can be added to the period-close template.Both: This program can be added to both the period-open and period-close templates. |

6.  Specify other fields as necessary and toggle the Enabled switch to Yes.

7.  Click the save icon . The job is created.

8.  Click the Program Parameters tab and specify the parameter values as necessary.

9.  Save your changes and close the window.

10.  Repeat this procedure for other programs that you want to add to the template.


## Procedure

Complete the following steps to create period-close or period-open tasks and then add them to a template:

1.  Create the period-close or period-open task for each of the tasks that you want to add to the template.

    1.  Navigate to Policies > Period Open/Close Tasks.

    2.  To create a task, click the New Task icon ('+' icon) .

    3.  In the New Task window, provide the detailed information of the task.

    4.  Click the save icon. The task is created.
    5.  Repeat the above steps to create other tasks to be included in your template.
2.  After all the tasks are created in Zuora Revenue, create the period-open or period-close template with these tasks added and sorted.
    1.  Navigate to Policies > Period Open/Close Templates.

    2.  Click the New Template icon ('+' icon) to create a template.

    3.  In the New Period Template window, specify a unique name for the template in the Name field.

    4.  In the Activity Type field, specify whether this is a period-close or period-open template.

    5.  In the Available Books section, select the books to which you want to associate this template, and then click the right arrow icon to add your selection to the Selected Books section.

    6.  Toggle the Enabled switch to Yes to enable this template.

    7.  Click the save icon . This template is created.

    8.  Click Assign Tasks to add tasks to this template.

    9.  To add a row for a task, click the '+' icon.

    10.  In the Task Name column, select the task to be added to this template. The Task Type, Activity Type, and Report/Job Name columns can be automatically populated based on the task definitions.

    11.  Use the Mandatory column to mark this task as mandatory if necessary.

    12.  Set the Enabled column to Yes to enable the task.

    13.  Add as many tasks as you need and use the Seq column to specify the sequence in which the tasks must be performed.

    14.  Save your changes and close the window.


The period-close or period-open template is created and enabled. When a user wants to close or open a period, the user must complete all the tasks defined in the template first.

## What to do next

If you do not need the template, hover your mouse over the line and click the pencil icon to edit it. Then, in the Edit Period Template window, toggle the Enabled switch to No and save your changes. The disabled template will be removed from the Period Open/Close Templates page.

To enable a previously disabled template, click Show History. All the disabled templates are listed for you to enable. After you enable one template, go back to the Period Open/Close Templates page, locate it, and make changes if needed.
