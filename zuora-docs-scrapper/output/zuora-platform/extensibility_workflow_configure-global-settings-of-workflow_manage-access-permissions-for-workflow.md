---
title: "Manage access permissions for Workflow"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/configure-global-settings-of-workflow/manage-access-permissions-for-workflow"
product: "zuora-platform"
scraped_at: "2025-12-24T05:31:08.832Z"
---

# Manage access permissions for Workflow

Permission management secures workflow access by granting users different levels of access to workflow instances. It helps your organization to meet compliance rules that require restrictions on access to workflows.

This topic walks through the four access permissions for Workflow and how to manage or view users' Workflow access permissions.

The Platform Administrator can manage users' access to Workflow with the following Workflow access permissions:

-   Workflow View Access: : Users with this permission have read-only access to Workflow. They can view details of workflow definitions, workflow versions, tasks, the Run History tab, and the Metrics tab. But they cannot run or manage the workflows.

-   Workflow Run Access: : Users with this permission can run the workflow definitions and tasks.

-   Workflow Manage Access : Users with this permission can create, update, delete, and manage workflows definitions and versions.

-   Workflow Manage Global Settings Access: : Users with this permission can manage the configurations of the Workflow feature including Zuora Login, External SMTP, Workflow Global Settings, and so on.


Note:

By default, existing users with the Administrator role have all the Workflow access permissions enabled, and users with the Standard User role have all the access permissions except Workflow View Access enabled.

Only the Platform Administrator can manage users' access to Workflow.

To manage users' access to Workflow, you must first create custom Platform Roles that contain different Workflow access permissions, then assign the custom Platform Roles to new users, or update the role of existing users.

For detailed instructions, see [Assigning users Workflow access permissions](/zuora-platform/extensibility/workflow/configure-global-settings-of-workflow/assign-users-workflow-access/assign-users-workflow-access-process-flow).
