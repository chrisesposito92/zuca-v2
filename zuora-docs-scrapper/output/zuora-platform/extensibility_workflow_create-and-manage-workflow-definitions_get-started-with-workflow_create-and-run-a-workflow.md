---
title: "Create and run a workflow"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/get-started-with-workflow/create-and-run-a-workflow"
product: "zuora-platform"
scraped_at: "2025-12-24T05:31:30.831Z"
---

# Create and run a workflow

Learn how to create and run a workflow.

-   Your system administrator or Workflow administrator has configured the global Workflow settings.

-   Your user role has one of the following platform permissions:

    -   Workflow View Access

    -   Workflow Run Access

    -   Workflow Manage Access



1.  On the Zuora UI, navigate to the .
2.  Click the Workflows tab.
3.  Click the ![Add icon](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/8c87a611-f073-40c4-85b0-bc31f993da93?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjhjODdhNjExLWYwNzMtNDBjNC04NWIwLWJjMzFmOTkzZGE5MyIsImV4cCI6MTc2NjY0MDY4OCwianRpIjoiMDA5ZTUwNmYyMDFlNGVkYjlkZGYzZDAzN2ZiOWJlZDciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.CyvC6bsCnMOJkCAJbwpvEwrj2fTAq2VzhphH4LRfsVc) icon, then select a template or create a new Workflow definition from the cascading menu. We recommend that you check our templates and edit based on the selected template before creating your own Workflow definition.
    For example, to define a workflow that sends email notifications to billing accounts that have past due invoices, you can choose to create a workflow based on .

4.  Add new tasks, or update or delete existing tasks based on your needs. For a detailed introduction to each Workflow task, see "Task libraries" .
5.  (Conditional) Configure the settings for your workflow definition. For most workflows, you do not need to do any specific configurations. You configure a workflow mainly to control how it is run, such as execution priority, triggers, and notifications. See "Configure a workflow".
6.  Click Run to run the workflow. The New Workflow Run window is displayed.
7.  Monitor the workflow, then troubleshoot a workflow if error occurs.
8.  When the workflow runs successfully, export it and then import it to the Production environment.
