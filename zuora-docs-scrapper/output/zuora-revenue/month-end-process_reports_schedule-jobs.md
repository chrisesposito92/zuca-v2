---
title: "Schedule jobs"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/reports/schedule-jobs"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:27:56.502Z"
---

# Schedule jobs

Learn how to create a scheduled job or a series of jobs to run.

Complete the following steps to submit a program or a series of programs to run periodically.

1.  Navigate to Reports > Schedule Jobs.
2.  Click the add icon to schedule a new job. The Schedule Job/Job Groups window is displayed.

    ![Schedule_program](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/58b2681e-491d-4fec-bade-e84c1118cab4?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjU4YjI2ODFlLTQ5MWQtNGZlYy1iYWRlLWU4NGMxMTE4Y2FiNCIsImV4cCI6MTc2NjYzNjg3NCwianRpIjoiNDU5YTU4ZTRmZDg3NDY2MDkxNWE4YWJmMGRmZDhiZGUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.tfFSNUyPweNkqq5qFv_Zri0OGQZScAJZRM0Yk3SQhj0)

3.  In the Schedule Program tab, complete the following fields:

    | Field name | Description |
    | --- | --- |
    | Schedule Job Group | The switch toggle that indicates whether you are going to schedule a series of programs to run. |
    | Program Name | Required.Select the target program to run. Zuora Revenue provides you with a list of standard programs. |
    | Job Group | Select the target job group to run.Required only if the Schedule Job Group switch is set to Yes.Note:To schedule a series of jobs to run, you must first create the job group by navigating to Setups > Application > Background Jobs > Job Groups . |
    | Start Date | Required.Specify the start date and time for the program. |
    | End Date | Specify the end date and time for the program. |
    | Incompatible With All | The switch toggle that indicates whether the scheduled job or job group is incompatible with all. |
    | Resubmit Interval | Select the time interval from the following options from the dropdown list:Minute(s)Hour(s)Day(s)Week(s)Month(s) |
    | Resubmit Code | Enter a number for the job submission frequency.Note:The combination of the Resubmit Interval and Resubmit Code values determines the job submission frequency. For example, if the Resubmit Interval field is set to Day(s) and the Resubmit Code field is set to 2, the scheduled job will be submitted every other day. |
    | Resubmit Type | The scheduling of the job is dependent on itself. Select one of the following options:From the Start of the prior runFrom the Completion of the prior run |

4.  (Optional): To add subscribers for this scheduled job, in the Subscribers section, click the add icon.
5.  Under the Program Parameters tab, select the Program to which you want the values applied to. You can directly choose them from the drop-down that appears when you click the Value field.

    Note: Choosing values directly from the drop-down is an enhancement made available to the following programs.

    Data Collection Master

    Event Process

    Event Process Master

    Immediate POB Release

    Immediate POB Release Master

    Netting Process

    Netting Process for Multi-Org

    Accounting Transfer Master

    ![Program parameters](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/c5bbac5f-d2e1-47d4-9765-5a72e96b93b9?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImM1YmJhYzVmLWQyZTEtNDdkNC05NzY1LTVhNzJlOTZiOTNiOSIsImV4cCI6MTc2NjYzNjg3NCwianRpIjoiNDBjMGM4ZjE2NjM4NDAzMWJlMDdkNThlNGFlZmQ4MTIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.s1iuvkLjQXf5v59eMwMYwFEdfujWgCfviwPardfeBxo)

6.  To submit the scheduled job, click Submit Job.
7.  A message indicating that the job has been submitted successfully is then displayed.
