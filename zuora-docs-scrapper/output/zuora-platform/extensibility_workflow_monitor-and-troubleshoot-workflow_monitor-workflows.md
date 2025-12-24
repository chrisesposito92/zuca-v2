---
title: "Monitor workflows"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/monitor-and-troubleshoot-workflow/monitor-workflows"
product: "zuora-platform"
scraped_at: "2025-12-24T05:37:09.311Z"
---

# Monitor workflows

Introduces the methods to monitor workflows.

Zuora offers a list of menus to facilitate workflow monitoring:

-   Overview dashboards: Allows you to holistically monitor pending-approval items, failed workflows, and workflow execution performance.

-   Run History: Allows you to monitor workflow run status

-   Tasks: Allows you to monitor task execution status and troubleshoot.


Alternatively, you can also use the "Workflow System Health dashboard" to monitor Workflow usage, failures, and performance.

## Workflow overview dashboards

The Overview tab of Workflow offers a comprehensive dashboard collection that allows you to have a holistic view of the Workflow performance.

-   My Organization's Tasks: Check the tasks that need your approval in this pane. Any task pending your approval counts towards the number in this pane.

-   Concurrency/Rate Limits: You can monitor workflow errors regarding rate limits or concurrency limits in the Concurrency/Rate Limits pane.

-   Failed Workflows: You can check all failed workflows in the Failed Workflows pane. You will receive email notifications on workflow errors after [enabling alert notifications for workflow failures](/zuora-platform/extensibility/workflow/configure-global-settings-of-workflow/enable-alert-notifications-for-workflow-failures).

-   Workflow Queues: You can monitor the queued workflow tasks in this pane.

-   Record Search: You can search the workflow run records in the pane.

-   Total Tasks Per Month (last 12 months): Review the total tasks by month for the past 12 months.


## Run history

A workflow run is an execution of a workflow. Each workflow run is identified by a unique ID.

Click the Run History tab to check the workflow run status and manage workflow runs. You can perform the following actions on this page:

-   To go to the workflow details page, click a workflow link.

-   To view the tasks included in that run and the statuses of the tasks, click a run number link.

-   To stop a processing run, update status, or delete a finished run, use the action icons in each row.

-   To stop or delete workflow runs in a batch, or reload the workflow run table, use the action icons on the top right.

-   To add or remove fields displayed in the table, use the customize columns icon ![Customize column icon](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/cd2014e8-21de-4305-a12f-3d3b8e6955e8?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImNkMjAxNGU4LTIxZGUtNDMwNS1hMTJmLTNkM2I4ZTY5NTVlOCIsImV4cCI6MTc2NjY0MTAyNywianRpIjoiN2QwYmJlZmE3NGIyNDBiMTlkMWMzMzk0ZDIxYzQ4N2QiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.tapUz_Rq3MAA_yQbZ5-JVM6d81OXvnyMdFupjmconuY), and modify the column selection in the list.


## Tasks

Click the Tasks tab to check the detailed status of all tasks, including running or finished tasks.

The tasks displayed in the table are task instances in workflow runs. If the same task is included in more than one workflow run, multiple entries of the task will be displayed in the list.

The Status column displays the status of each task, and the Error Code column provides additional information about errors. You can use these two fields for initial error diagnosis.

You can perform the following possible actions in the Tasks tab:

-   To diagnose and troubleshoot an error, click the swimlane icon![Swimlane icon](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/44031461-00fb-4b1e-abc5-5863dc020ebc?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQ0MDMxNDYxLTAwZmItNGIxZS1hYmM1LTU4NjNkYzAyMGViYyIsImV4cCI6MTc2NjY0MTAyNywianRpIjoiYjQ0YjY2YWEyYTY0NDVjNWI2OTFmZTA5N2ZmMGJmN2IiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.o5YJXU70_WwM8b5gqaWNIH2PDDAaEOPMwUqwt7NUsFU). It is a diagnostic tool that eases your troubleshooting efforts. See [Troubleshoot workflow tasks](/zuora-platform/extensibility/workflow/monitor-and-troubleshoot-workflow/troubleshoot-workflow-tasks) for more information.

-   To delete a single task instance, click the delete icon ![Delete icon](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/b0a52c03-7b69-4b88-8ae7-f79133d52728?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImIwYTUyYzAzLTdiNjktNGI4OC04YWU3LWY3OTEzM2Q1MjcyOCIsImV4cCI6MTc2NjY0MTAyNywianRpIjoiMThjYzgyNTJiY2MwNDRlYjg5YzkwYzkzNWUyMzQ4MDAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.oXbIX7L0_BvvuMWjfj1DC58-59i8pHNHjlNZ14-PlDI)in the table entry. If you want to delete multiple instances, select all task instances you want to delete, then click the delete icon ![Delete icon](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/b0a52c03-7b69-4b88-8ae7-f79133d52728?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImIwYTUyYzAzLTdiNjktNGI4OC04YWU3LWY3OTEzM2Q1MjcyOCIsImV4cCI6MTc2NjY0MTAyNywianRpIjoiYmI1YzQwMDdhMTRjNDk0MTkwY2ViNDIxYWRlMGM3M2QiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.Cvy43OabDyj6zmnmLyBOmSuQ-bUSLQHuCwx-ilEc7eI) on the top right corner of the table.

-   To add or remove the fields displayed in the Tasks table, click the customize columns icon ![Customize column icon](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/cd2014e8-21de-4305-a12f-3d3b8e6955e8?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImNkMjAxNGU4LTIxZGUtNDMwNS1hMTJmLTNkM2I4ZTY5NTVlOCIsImV4cCI6MTc2NjY0MTAyNywianRpIjoiYThlNTE4ZTAzNGU0NGQzOWExMDdjNGRhMDA5OGM1MTAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.C0NGX10o077IGeqk5ESQ7XTEIa5gFEi_ewcD1G1ZsGg), and select or deselect the columns to be included in the table.

-   To rerun one or multiple tasks, select the task instances in the table, and click the rerun icon![Rerun icon](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/ff590403-19b0-41fb-af78-badb3b25e3a5?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImZmNTkwNDAzLTE5YjAtNDFmYi1hZjc4LWJhZGIzYjI1ZTNhNSIsImV4cCI6MTc2NjY0MTAyNywianRpIjoiYTg3ZjExZmEyNjgwNGVkY2E2MWZlMjVkNDdiMWNlZmEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.6TxhPzx8QaJ6C0KNAedyPNSZOmSgwjLg33Si1qMiM18) to rerun the task.

-   To reload the whole table, click the reload table icon ![Reload icon](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/4728173f-13ee-4955-8479-6c7f0a99fc8d?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQ3MjgxNzNmLTEzZWUtNDk1NS04NDc5LTZjN2YwYTk5ZmM4ZCIsImV4cCI6MTc2NjY0MTAyNywianRpIjoiMWJiZDc5NmU0ZDVlNDE4MmJlODU3MzljMTI4ZDU2ZjIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.o0Tlzhwf446c_Lq1RNAmcyCgurcPQ6E7cCJrPUzU7uA). The table will be reloaded and reflect the latest task statuses.
