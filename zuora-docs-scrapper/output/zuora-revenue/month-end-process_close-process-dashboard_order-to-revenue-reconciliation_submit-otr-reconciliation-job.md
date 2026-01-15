---
title: "Submit OTR reconciliation job"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/close-process-dashboard/order-to-revenue-reconciliation/submit-otr-reconciliation-job"
product: "zuora-revenue"
scraped_at: "2026-01-15T22:03:19.727Z"
---

# Submit OTR reconciliation job

Learn how to schedule and submit an Order to Revenue Transaction Reconciliation job using the Reports>Schedule Jobs interface.

1.  Navigate to Reports > Schedule Jobs .
2.  Click the add icon (+) to schedule a new job. The Schedule Job/Job Groups window is displayed.
3.  In the Schedule Program tab, complete the following fields:

    | Field name | Description |
    | --- | --- |
    | Schedule Job Group | The switch toggle indicates whether you are going to schedule a series of programs to run. |
    | Program Name | Type Zuora Order to Revenue Transaction Reconciliation |
    | Job Group | Select the target job group to run.Required only if the Schedule Job Group switch is set to Yes.To schedule a series of jobs to run, you must first create the job group by navigating to Setups > Application > Background Jobs > Job Groups. |
    | Start Date | Required.Specify the start date and time for the program. |
    | End Date | Specify the end date and time for the program. |
    | Incompatible With All | The switch toggle indicates whether the scheduled job or job group is incompatible with all. |
    | Resubmit Interval | Select the time interval from the following options from the dropdown list:Minute(s)Hour(s)Day(s)Week(s)Month(s) |
    | Resubmit Code | Enter a number for the job submission frequency.The combination of the Resubmit Interval and Resubmit Code values determines the job submission frequency. For example, if the Resubmit Interval field is set to Day(s) and the Resubmit Code field is set to 2, the scheduled job will be submitted every other day. |
    | Resubmit Type | The scheduling of the job is dependent on itself. Select one of the following options:From the Start of the prior runFrom the Completion of the prior run |

4.  To submit the scheduled job, click Submit Job.
5.  A message indicating that the job has been submitted successfully is then displayed.
