---
title: "Basic concepts of Workflow"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/learn-workflow/basic-concepts-of-workflow"
product: "zuora-platform"
scraped_at: "2025-12-24T05:30:50.867Z"
---

# Basic concepts of Workflow

If you just get started, we encourage you to familiarize yourself with the basic concepts of Workflow.

These concepts are frequently used in the Workflow documentation.

Workflow run

A workflow run is an execution of a workflow. Each workflow run has a unique run number. Workflow runs are displayed in the Run History tab of the Workflow home page or the editing page of a specific workflow. You can stop a workflow run that is in Processing status.

Task run

A task run is an execution of a task. Each task run has a unique run number. Task runs are displayed in the Tasks tab of the Workflow home page or the editing page of a specific workflow.

Swimlane

Swimlane is the debugging tool that is built in Workflow. With Swimlane, you can view the data payload for a task, adjust configurations, and rerun a workflow run. You start Swimlane from the menu of a task run.

Workflow data payload

The actual data that is transferred from one task to another of a workflow. The data payload is organized in JSON objects. A task can read the data payload and append data to it.

Upstream task

A workflow is a set of tasks that are run based on configured sequence and logic. It is similar to the flow of water in a river. A task that is run before another task is considered an upstream task to the latter task.

Downstream task

Similarly, a task that is run after another task is considered a downstream task to the latter.

Workflow version

Workflows can be managed with version control. You can set an active version for a workflow definition and create a new development version for updating or testing while the active version and the existing API integration are working properly. Except for the active version, all other versions are inactive. The active version can be run manually, with event triggers, or as scheduled. The inactive version can only be run manually.

Workflow Access Permission

The Platform Administrator can manage users’ access to the workflow feature by assigning them different Workflow access permissions. Platform Administrator must first define custom platform roles with different Workflow access permissions, then assign the created roles to the users. For more information, see [Manage access permissions for Workflow](/zuora-platform/extensibility/workflow/configure-global-settings-of-workflow/manage-access-permissions-for-workflow).
