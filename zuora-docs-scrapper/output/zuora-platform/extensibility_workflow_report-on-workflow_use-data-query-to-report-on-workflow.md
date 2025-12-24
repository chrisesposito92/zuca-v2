---
title: "Use Data Query to report on Workflow"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/report-on-workflow/use-data-query-to-report-on-workflow"
product: "zuora-platform"
scraped_at: "2025-12-24T05:37:14.343Z"
---

# Use Data Query to report on Workflow

Introduces the typical use cases to use Data Query to report on Workflow.

You can use Data Query to report on workflow versions and runs. Typical use cases include:

-   Reporting on workflow updates to meet internal audit or compliance requirements.

-   Monitoring and notifying of changes to workflow definitions.

-   Triaging or troubleshooting workflow runs.

-   Initiating additional actions based on results of workflow runs.


To learn how to use Data Query, see "Data Query". See below for sample SQL queries.

If you need further assistance, you can join the [Data Query forum](https://community.zuora.com/t5/Data-Query/bd-p/data-query) in Zuora Community.

Note:

-   You can only use Data Query to retrieve Worfkflow Run data generated in a certain number of past days. Data generated before this time range is non-retrievable. The time range can be set in the Settings tab of a Workflow definition. See "Cleanup policy" for more information. We provide an alternative way to retrieve usage data that is outside the cleanup period. See Example 6 below for more information.

-   If your entity has more than one instance of Workflow, you cannot access Workflow data via Data Query.

-   Data Query for Workflow reporting is not available in the Enhanced Production Copy Environment (ePCE) or Production Copy Environment (PCE) of Zuora.


## Workflow-related tables in Data Query

The following Data Query tables contain information about workflow definitions and runs:

-   `workflow` - Each row represents a workflow version or a workflow run. See Example 1, below.

-   `workflow_task` - Each row represents a task that is part of a workflow version or a workflow run. See Example 2, below.

-   `workflow_api_call` - Each row represents an API call made during a workflow run. See Example 3, below.

-   `workflow_linkage` - Each row represents a connection between two tasks in a workflow version. See Example 4, below.

-   `workflow_task_usage` - Each row represents your entity's usage of Workflow over a single day. See Example 5, below.

-   `workflow_definition` \- Each row represents a workflow definition that has at least one workflow version.


You can use `SHOW COLUMNS` to list the columns that are available in each Data Query table. For more information, see Constructing SQL Queries in Data Query.

Note:

Use `id` to join tables when applicable since other fields are not ideal for joining tables and could cause performance or memory issues.

## Audit Trail reports for Workflow

You can also use Data Query to generate the Audit Trail reports containing changes of the following Workflow objects.

-   WorkflowDefinition

-   TaskDefinition

-   Linkage


The audit trails of these objects are stored in the auditobjectchangeevent table. See Sample Queries of Audit Trail on how to retrieve Workflow object changes.

Note:

Audit trail data is available based on audit licensing. See Zuora Editions for more information.
