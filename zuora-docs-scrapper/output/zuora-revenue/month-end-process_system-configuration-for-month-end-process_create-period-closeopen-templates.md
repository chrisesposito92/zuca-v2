---
title: "Create Period Close/Open templates"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/system-configuration-for-month-end-process/create-period-closeopen-templates"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:27:38.371Z"
---

# Create Period Close/Open templates

Create and manage period-close or period-open templates to ensure all necessary tasks are completed before closing or opening a period.

A period-close or period-open template lists the tasks that must be performed in the specified sequence before a period can be closed or opened.

## Before you begin

Before you create a period-close or period-open template, identify the tasks to be added to the template. The following types of tasks can be added to the template:

-   Program: Run a predefined program as a background job.
-   Manual: Complete a user-defined task offline.
-   Reporting: Run a predefined report.

For information about required period-close or period-open tasks, see [Period-close activities](/zuora-revenue/month-end-process/period-close-activities) or [Period-open activities](/zuora-revenue/month-end-process/period-open-activities).

If you want to add a task of the program type, you must first create a background job to map this program in Zuora Revenue. Complete the following steps to create a background job for the program:

1.  Navigate to Setups > Applications.

2.  Click the left pointing arrow icon to open the side menu and click Background Jobs. The predefined programs are all listed on the Background Jobs page for your reference. They are not editable.

3.  Locate the predefined program that you want to run and write down its procedure name.

4.  Click the New Job icon ('+') to create your own job. The New Job window is displayed.

5.  In the Job Details tab, specify the detailed information of this job.

6.  Specify other fields as necessary and toggle the Enabled switch to Yes.

7.  Click the save icon. The job is created.

8.  Click the Program Parameters tab and specify the parameter values as necessary.

9.  Save your changes and close the window.

10.  Repeat this procedure for other programs that you want to add to the template.


## Procedure

Complete the following steps to create period-close or period-open tasks and then add them to a template:

1.  Create the period-close or period-open task for each of the tasks that you want to add to the template.

    1.  Navigate to Policies > Period Open/Close Tasks.

    2.  To create a task, click the New Task icon ('+') .

    3.  In the New Task window, provide the detailed information of the task.

    4.  Click the save icon. The task is created.
    5.  Repeat the above steps to create other tasks to be included in your template.
2.  After all the tasks are created in Zuora Revenue, create the period-open or period-close template with these tasks added and sorted.
    1.  Navigate to Policies > Period Open/Close Templates.

    2.  Click the New Template icon ('+') to create a template.

    3.  In the New Period Template window, specify a unique name for the template in the Name field.

    4.  In the Activity Type field, specify whether this is a period-close or period-open template.

    5.  In the Available Books section, select the books to which you want to associate this template, and then click the right arrow icon to add your selection to the Selected Books section.

    6.  Toggle the Enabled switch to Yes to enable this template.

    7.  Click the save icon. This template is created.

    8.  Click Assign Tasks to add tasks to this template.

    9.  To add a row for a task, click the green save icon.

    10.  In the Task Name column, select the task to be added to this template. The Task Type, Activity Type, and Report/Job Name columns can be automatically populated based on the task definitions.

    11.  Use the Mandatory column to mark this task as mandatory if necessary.

    12.  Set the Enabled column to Yes to enable the task.

    13.  Add as many tasks as you need and use the Seq column to specify the sequence in which the tasks must be performed.

    14.  Save your changes and close the window.


## Result

The period-close or period-open template is created and enabled. When a user wants to close or open a period, the user must complete all the tasks defined in the template first.

## What to do next

If you do not need the template, hover your mouse over the line and click the edit icon to edit it. Then, in the Edit Period Template window, toggle the Enabled switch to No and save your changes. The disabled template will be removed from the Period Open/Close Templates page.

To enable a previously disabled template, click Show History . All the disabled templates are listed for you to enable. After you enable one template, go back to the Period Open/Close Templates page, locate it, and make changes if needed.
