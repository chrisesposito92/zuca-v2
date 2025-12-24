---
title: "Period-close activities"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/period-close-activities"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:27:23.319Z"
---

# Period-close activities

Learn how to execute mandatory programs and reconcile reports to successfully close a financial period in Zuora Revenue.

After you complete prerequisite activities as instructed in Prerequisite activities, you must run some mandatory programs and reconcile various reports before the period can be closed.

## Overview

As part of the period-close process, you must run several predefined programs in sequence and validate data in various reports before you can close a period.

Note:

The period-close tasks listed in the following section are recommendations that can help ensure data accuracy. You can decide the required period-close tasks based on your own business needs.

To complete the period-close tasks, you can choose to manually complete them by navigating between various UIs. Alternatively, you can create a period-close template and add the tasks to this template. In this way, you can perform the period-close tasks in one central UI. For more information, see Create Period Close/Open templates.

If a period-close template is enabled in the system, you must perform the period-close tasks as defined in the template. For more information, see Close a period based on a template. If there is no period-close template enabled, follow the instructions in Close a period without a template

## Period-close tasks

The following tasks are recommended to be completed before a period can be closed in Zuora Revenue. After you understand the purpose of each step, you can decide whether the step is necessary for your company and have your own customized list.

The UI operations are different depending on whether a period-close template is enabled in Zuora Revenue.

| Task | Activity | Description |
| --- | --- | --- |
| 1 | Run the RevPro3.0 Netting Process program. | This task is to calculate the CA/CL balance and net position of every revenue contract and to create the appropriate accounting entries. For more information, see Netting process.When you run the RevPro3.0 Netting Process program, use the Create Line Level parameter to specify whether you want the accounting entries to be created at the transaction line level. It is recommended to set to Yes. Otherwise, the accounting entries will be created as a manual journal entry at the book level.When this parameter is set to Yes and if the entries have been posted, Zuora Revenue will reverse the posted entries and rebook the same. Otherwise, Zuora Revenue will update the posted entries with the new amounts. |
| 2 | Run the RevPro3.0 LT/ST Process program. | This task is to create the LT/ST reclass journal entries for the current open period.During this process, the LT/ST balances are calculated. If the RC is in a net CA position, LT/ST schedules are created between long-term and short-term contract asset. If the RC is in a net CL position, LT/ST schedules are created between long-term and short-term contract liability.After LT/ST schedules are created, this program creates the MJE to be transferred to the GL. |
| 3 | Run the RevPro3.0 Accounting Transfer Master program. | This task is to post the unposted accounting entries to the GL. It is required to transfer both the netting entries and LT/ST reclass entries to the GL. |
| 4 | Run the RevPro3.0 Sweep Unposted Schedules program. | This task is to move the unposted schedules to the next period. It ensures that the period and GL date in which the unposted schedules are supposed to be posted appear correctly in Zuora Revenue. |
| 5 | Run the RevPro3.0 Current Period Post Summarize Data program. | This task is to summarize the reporting data based on the attributes that are selected in the Disclosure Aggregation application setup. The benefit of this second summarization level is to process high volume data and ensure the processed data can be immediately available in reports and in the summary dashboard. |
| 6 | Validate the Balance Sheet reports:RC Rollforward ReportUnbill RollForward ReportCost Capitalized Rollforward ReportVC Rollforward ReportBilling Rollforward Report | Use the RC Rollforward Report to reconcile Contract Liability and Contract Asset account balances with the GL.Use the Unbill Rollforward Report to reconcile the Unbilled Receivables account balances with the GL.Use the Cost Capitalized Rollforward Report to reconcile the Capitalized Cost account balances with the GL.Use the VC Rollforward Report to reconcile the Unbilled Receivables account balance with the GL. |
| 7 | Validate the Income Statements/P&L reports:Waterfall ReportRevenue Insight ReportCost Insight ReportVC Insight Report | Use the Waterfall Report to reconcile the revenue or cost for the current period, which includes the rollout of unsatisfied and partially satisfied performance obligations (both scheduled revenue and unscheduled revenue). You can separate the revenue and cost for analysis in this report.Use the Revenue Insight Report to reconcile the PTD, QTD, YTD revenue with the GL.Use the Cost Insight Report to reconcile the PTD, QTD, YTD cost with the GL.Use the VC Insight Report to reconcile PTD, QTD, YTD variable consideration revenue adjustments with the GL. |
| 8 | Validate the FX Month End reports:Trial Balance ReportUnbill FX ReportPeriod FX Waterfall | Use the Trial Balance Report to reconcile the balances for different accounts in reporting currency.Use the Unbilled FX Report to understand the impact of revenue recognition reversals on previously unbilled transactions for possible FX gain/loss adjustments.Use the Period FX Waterfall to view waterfall data in different currencies. |
| 9 | Run the RevPro3.0 Reporting Current Period Close program. | This step moves the waterfall data of the current period to history. |

## Close a period based on a template

If a period-close template is enabled in Zuora Revenue, you must complete all the tasks defined in the template before you can close a period.

Complete the following steps to close a period based on a period-close template:

1.  Navigate to Accounting > Period Open/Close. All the periods that are part of the enabled template are listed.
2.  Select the period to be closed, hover your mouse over the line, and then click one of the following icons:
    -   Close Current/Open Next (left icon): Close the current period and open the next one.
    -   Close Current/Open Other (middle icon) : Close the current period and choose another period to open.
    -   Close Current (right icon): Close the current period.
3.  Confirm your selection in the pop-up window. The status of the selected period changes to Pending Close.

4.  Hover your mouse over the line again and then click the Initial Close Period icon. The Initial Close Period window is displayed with all period-close tasks listed in the lower half.

5.  Complete all the tasks in the specified sequence. The steps vary depending on the type of the current task.

| Task Type | Steps |
| --- | --- |
| Program | Select Initiate Task in the Action Type column.Hover your mouse over the current task line and click the Submit Job icon . The Program Parameters window is displayed.Specify the parameter values as necessary and click Submit Job.Hover your mouse over the current task line and click the Refresh icon to update the task status.After the Status column changes to Completed, change the Proceed to Next Task column to Yes.Click and then proceed to the next task. |
| Reporting | Select Initiate Task in the Action Type column.Hover your mouse over the current task line and click the Submit Job icon (pencil icon) . The Submit Report window is displayed.Select the report layout and other fields as necessary, and then click Submit Download.Hover your mouse over the current task line and click the Refresh icon to update the task status.After the Status column changes to Completed .Validate the report data and then change the Proceed to Next Task column to Yes.Click the save icon and then proceed to the next task. |
| Manual | Manually complete the task.Select Complete Task in the Action Type column.Change the Proceed to Next Task column to Yes.Click the save icon and then proceed to the next task. |

1.  After all the tasks are completed, the menu icon (three lines icon) shows up in the Initiate Open Period window. Click it to select the appropriate action.

2.  Confirm your selection in the pop-up window. The selected period is closed.


Note:

-   To skip an optional task, select Skip Task in the Action Type column. Then, change the Proceed to Next Task column to Yes and click to proceed to the next task.
-   To cancel the period-open process, click Cancel Period Processes. The period status will roll back to the previous.
-   Before you complete all the tasks, you can access the Initial Close Period window anytime by completing Step 1 ~ 4.

## Close a period without a template

When there is an open period and no enabled period-close template in the system, complete the following steps to close a period:

1.  Ensure that all the required period-close tasks are completed.
2.  Navigate to Accounting > Period Open/Close.
3.  Select the period to be closed, hover your mouse over the line and click one of the pencil icons :
    -   Close Current/Open Next (left icon): Close the current period and open the next one.
    -   Close Current/Open Other (middle icon): Close the current period and choose another period to open.

    -   Close Current (right icon): Close the current period.
4.  Confirm your selection in the pop-up window. The selected period is open in Zuora Revenue.

## What to do next

If you choose to open another period, you must complete all the period-open tasks to open the period. For more information, see Period-open activities .
