---
title: "Examples: SQL queries"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/report-on-workflow/use-data-query-to-report-on-workflow/examples-sql-queries"
product: "zuora-platform"
scraped_at: "2025-12-24T05:37:17.029Z"
---

# Examples: SQL queries

Use this reference to learn sample SQL queries.

## Example 1: Report on workflow definitions and runs

SELECT w.originalworkflowid, w.id, w.name AS WorkflowName, w.taskscount, w.status FROM workflow AS w ORDER BY w.updateddate DESC

Note that for a workflow run, `originalworkflowid` is the ID of the corresponding workflow definition. For a workflow definition, `originalworkflowid` is null.

Query results:

| originalworkflowid | id | WorkflowName | taskscount | status |
| --- | --- | --- | --- | --- |
| 298 | 731 | WF-298-00000013 | 0 | Finished |
| 298 | 699 | WF-298-00000012 | 0 | Finished |
| 298 | 684 | WF-298-00000011 | 0 | Finished |
| NULL | 298 | Suspend lapsed subscriptions | 6 | NULL |
| 265 | 649 | WF-265-00000022 | 0 | Finished |

## Example 2: Report on recently-updated tasks in workflow definitions

SELECT w.name AS WorkflowName, t.name AS TaskName, t.actiontype, t.updateddate FROM workflow\_task AS t INNER JOIN workflow AS w ON w.id = t.workflowid WHERE t.originalworkflowid IS NULL AND t.updateddate >= ( current\_timestamp - interval '1' day )

Note that if a task is part of a workflow run, `originalworkflowid` is the ID of the corresponding workflow definition. Otherwise, `originalworkflowid` is null. Therefore, `t.originalworkflowid IS NULL` ensures that the report excludes tasks that are part of workflow runs.

Query results:

| WorkflowName | TaskName | actiontype | updateddate |
| --- | --- | --- | --- |
| Suspend lapsed subscriptions | Suspend subscription | Suspend | 2021-02-08T11:08:03.875Z |
| Suspend lapsed subscriptions | Email customer | Email | 2021-02-08T11:08:11.672Z |
| Suspend lapsed subscriptions | Logout all active sessions | Callout | 2021-02-08T11:08:27.631Z |
| Refresh products | List products | Query | 2021-02-03T16:34:22.254Z |
| Refresh products | Change name | Update | 2021-02-03T16:34:53.497Z |

## Example 3: Report on failed API calls for a particular workflow

SELECT t.originaltaskid, t.workflowid AS WorkflowRunId, a.call, a.calltype, a.errortype FROM workflow\_api\_call AS a INNER JOIN workflow\_task AS t ON t.id = a.taskid WHERE a.errortype != '' AND a.originalworkflowid = 298

Notes:

-   `a.originalworkflowid = 298` specifies the ID of a workflow definition.

-   `a.taskid` is the ID of a task that is part of a workflow run, so task `t` is part of a workflow run.

-   Since `t` is part of a workflow run, `t.workflowid` is the ID of the workflow run and `t.originaltaskid` is the ID of the task in the corresponding workflow definition.


Query results:

| originaltaskid | WorkflowRunId | call | calltype | errortype |
| --- | --- | --- | --- | --- |
| 397 | 731 | Suspend | REST | ZuoraAPI::Exceptions::ZuoraAPIError |
| 397 | 699 | Suspend | REST | ZuoraAPI::Exceptions::ZuoraAPIError |

## Example 4: Report on the downstream tasks of a particular task

SELECT t.name AS TaskName, l.linkagetype FROM workflow\_linkage AS l INNER JOIN workflow\_task as t ON t.id = l.targettaskid WHERE l.sourcetaskid = 397

Notes:

-   `l.sourcetaskid = 397` specifies the ID of a task that is part of a workflow definition.


Query results:

| TaskName | linkagetype |
| --- | --- |
| Logout all active sessions | Success |
| Email customer | Success |
| Email internal ops | Failure |

## Example 5: Report on the number of Email task runs per day

SELECT u.emailcount, u.createddate, u.updateddate FROM workflow\_task\_usage AS u

Notes:

-   `emailcount` is the number of times the Email task was used (per day) across all workflow runs.


Query results:

| emailcount | createddate | updateddate |
| --- | --- | --- |
| 25 | 2021-02-09T00:00:00Z | 2021-02-09T10:01:20.18Z |
| 10 | 2021-02-08T00:00:00Z | 2021-02-08T06:01:33.73Z |
| 8 | 2021-02-05T00:00:00Z | 2021-02-05T02:01:35.074Z |

## Example 6: Report on workflow task usage beyond the automatic cleanup period

SELECT DATE\_TRUNC('month', createddate) AS created\_date\_month, SUM(approvalcount + attachmentcount + billingbillruncount + billingcurrencyconversioncount + billingcustombillingdocumentcount + billingreverseinvoicecount) AS total\_tasks, SUM(workflowcount) AS total\_workflows FROM workflow\_task\_usage GROUP BY 1 ORDER BY created\_date\_month

Workflow and workflow task usage that are beyond the automatic cleanup period cannot be retrieved using the normal SQL queries. But you can use the above example to retrieve the usage data beyond the cleanup period by month. The `DATE_TRUNC('month', createddate)` function groups data by month. Alternatively, you can use `DATE_TRUNC('year', createddate)` to retrieve data by year.

Note:

You can modify the fields in `SUM (...) AS total_tasks` to retrieve different information.
