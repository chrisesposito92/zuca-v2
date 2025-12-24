---
title: "Workflow overview"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/workflow-overview"
product: "zuora-platform"
scraped_at: "2025-12-24T05:30:48.507Z"
---

# Workflow overview

Provides a high-level introduction to Workflow and the resources that help you ramp up.

Zuora Workflow is a built-in automation tool that helps you design, execute, and manage business processes across the quote-to-cash cycle.

With Zuora Workflow, you can automate business processes such as order provisioning, entitlement validation, custom invoice delivery, and data integration. Each Workflow consists of a user-defined process that contains a trigger and a sequence of conditional tasks or actions to be taken. These tasks or actions can be either system or human.

Workflows can respond to Zuora's standard or custom events (such as a failed payment), run on a schedule, or be triggered manually. Each task can read, update, or create Zuora records; integrate with external systems via REST APIs; or send email notifications using pre-configured templates.

## Workflow learning path

The following diagram demonstrates the typical learning path for ramping up on Workflow. Click each area in the diagram to see the respective content.

![Workflow learning path](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/0f6d14a4-ae09-49af-a88e-56b23bf4fee0?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjBmNmQxNGE0LWFlMDktNDlhZi1hODhlLTU2YjIzYmY0ZmVlMCIsImV4cCI6MTc2NjY0MDY0NiwianRpIjoiMThkMzg1M2RiNjY4NDE1Y2E2NWU0MWJjZDZkY2ExM2IiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.Fe1_VUEpww-_OaR5CG7xuXC6UZbID8zt64PkfRizrU0)

## User journey

The following table summarizes the user journey for Workflow:
| Persona | Discover | Try | Adopt | Maintenance | Reporting |
| --- | --- | --- | --- | --- | --- |
| Business user | Learn Workflow | Get started with Workflow | Advanced tutorialsWorkflow reference | Monitor and troubleshoot a Workflow | Use Data Query to report on WorkflowWorkflow and task metrics |
| Administrator | Configure global Workflow settings | N/A | Audit Workflow using Audit Trail |  |  |

## Features

-   Easy for any user to create, edit, and deploy workflows.

-   Support a wide range of tasks that meet diverse business requirements.

-   Integrate quickly with other systems without the need for custom code.

-   Workflows can be started manually, via API, or based on a schedule.

-   Support workflow prioritization so that important workflows are run without delay.

-   The responsive mode allows you to run a workflow and get results immediately.

-   Workflows can be managed with version control.

-   The Platform Administrator can manage users' access to Workflow by creating and assigning custom roles with different Workflow access permissions.


## Workflow templates and use cases

Workflow templates are provided in Zuora Workflow for common use cases. We recommend that you go through the list of workflow templates to see if you can find one that meets your requirements.

Consider creating a blank workflow only when there are no templates that can be used.

If you are unclear about the templates' functions, take a look at the [Workflow use cases](/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-use-cases/apply-late-fees-to-accounts-with-overdue-invoices/apply-late-fees-to-accounts-with-overdue-invoices-process-flow). As we build up this section, you'll see more and more use cases.
