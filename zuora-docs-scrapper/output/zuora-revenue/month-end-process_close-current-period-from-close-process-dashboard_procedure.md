---
title: "Procedure"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/close-current-period-from-close-process-dashboard/procedure"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:29:08.176Z"
---

# Procedure

Follow these steps to efficiently close the current period and initiate the next one using the dashboard and task management features.

Complete the following steps to close the current period and open the next one:

1.  Navigate to Dashboard > Close Process from the main menu. The Close Process dashboard opens with the Data Validation tab by default displayed.
2.  Click the Period Close Tasks tab. It is indicated that the current period is in Open status. ![period-close-tab.png](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/revenue/C_Perform_month_end_process/media/period-close-tab.png)
3.  To start the period-close process, click Launch . Upon confirmation in the popup window, the period-close tasks defined in the period-close template are listed in the Perform Task section.
4.  As individual task owners, complete the assigned tasks in the defined sequence. The steps vary depending on the type of the current task, as instructed in the following table. After the first task is started, the system will apply a soft freeze to avoid data discrepancies. The status of the current period changes from Open to Soft Close. You can cancel the period-close process with the Cancel Period Processes button.

    | Task type | Steps |
    | --- | --- |
    | Program | To start the program, click the Submit Job icon .In the Program Parameters window, specify the parameter values and click Submit Job . The Status column indicates the job status.To refresh the job status, click the Job Refresh icon .After the program completes, it automatically proceeds to the next task. |
    | Manual | Manually complete the task.Click the Complete Task icon .After a manual task is marked as completed, it automatically proceeds to the next task. |
    | Reporting | Click the Submit Report icon .In the Submit Report window, select the appropriate layout to run the report and specify the report filter as needed.To run the report, click Submit Download in the Submit Report window.In the Share Output window, select the role of the users who can do report reconciliations and then click the Share Output icon .The report will be run and is available for eligible users to download from the Reports > Download Reports page. |

5.  After the final run of accounting transfer is completed for the period, ensure that the unposted schedule count and amount are displayed as zero.

    Note:

    If there are unposted schedules, review the unposted accounting and run the RevPro3.0 Sweep Unposted Schedules program.

6.  To close the current period and open the next one, click Submit and confirm the action in the popup window. ![submit-close.png](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/revenue/C_Perform_month_end_process/media/submit-close.png)
