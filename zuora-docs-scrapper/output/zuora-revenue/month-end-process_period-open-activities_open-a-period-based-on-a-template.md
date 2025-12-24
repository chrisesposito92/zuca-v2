---
title: "Open a period based on a template"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/period-open-activities/open-a-period-based-on-a-template"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:27:30.903Z"
---

# Open a period based on a template

Learn how to open a period using a period-open template by following a series of steps, including navigating to the appropriate section, selecting periods, and completing tasks.

Complete the following steps to open a period based on a period-open template:

1.  Navigate to Accounting > Period Open/Close . All the periods that are part of the enabled template are listed.
2.  Select the period to open, hover your mouse over the line and click one of the following icons:

    -   Close Current/Open Next (play button) : Open the next period after the latest closed period.

    -   Close Current/Open Other (open folder icon) : Choose another period to open.


3.  Confirm your selection in the pop-up window. The status of the selected period changes to Pending Open .
4.  Hover your mouse over the line again, and then click the Initial Open Period icon . The Initial Open Period window is displayed. All tasks that are added to the period-open template listed in the lower half.
5.  Complete all the tasks in the specified sequence. The steps vary depending on the type of the current task.

    | Task Type | Steps |
    | --- | --- |
    | Program | Select Initiate Task in the Action Type column.Hover your mouse over the current task line and click the Submit Job icon (pencil icon) . The Program Parameters window is displayed.Specify the parameter values as necessary and click Submit Job .Hover your mouse over the current task line and click the Refresh icon to update the task status.After the Status column changes to Completed , change the Proceed to Next Task column to Yes .Click the save icon. and then proceed to the next task. |
    | Reporting | Select Initiate Task in the Action Type column.Hover your mouse over the current task line and click the Submit Job icon. The Submit Report window is displayed.Select the report layout and other fields as necessary, and then click Submit Download .Hover your mouse over the current task line and click the Refresh icon to update the task status.After the Status column changes to Completed .Validate the report data and then change the Proceed to Next Task column to Yes .Click the save icon and then proceed to the next task. |
    | Manual | Manually complete the task.Select Complete Task in the Action Type column.Change the Proceed to Next Task column to Yes .Click the save icon and then proceed to the next task. |

6.  After all the tasks are completed, the Open button shows up in the Initiate Open Period window. Click it to open a period.
7.  After you confirm your selection, the current period is opened.

-   To skip an optional task, select Skip Task in the Action Type column. Then, change the Proceed to Next Task column to Yes and click the save icon to proceed to the next task.

-   To cancel the period-open process, click Cancel Period Processes . The period status will roll back to the previous.

-   Before you complete all the tasks, you can access the Initial Open Period window anytime by completing Step 1 ~ 4.
