---
title: "Workflow limits"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/learn-workflow/workflow-limits"
product: "zuora-platform"
scraped_at: "2025-12-24T05:30:53.500Z"
---

# Workflow limits

Introduces the task limits of Workflow.

## Task usage allowances

Task usage limits vary by Zuora edition and may also depend on any additional add-ons you've purchased. Contact your Zuora Account Team for more information.

If Zuora detects accidental or intentional volume growth of high task usage that may cause performance slowdown on the system, Zuora may throttle workflow usage.

Zuora will provide always-available resources to support high-priority processing and lower in-queue wait times. For more information, see Dedicated Workflow Workers for Performance Booster Elite and Dedicated Workflow Workers for Performance Booster .

## Task data payload size limit

Each workflow task can have a maximum of 5 MB data payload. If the data payload of a workflow task exceeds 5 MB, an error will occur.

You can find the payload size of a task from the Swimlane. You access the Swimlane from the menu of a task run.

You will be able to find the payload size of a task from theTasks tab in the Data Size column. Note that the Data Size column should be selected from the Customize Columns ![Customize columns icon](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/e85b5fb2-c92a-4bf3-9540-2ddd59ce7436?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImU4NWI1ZmIyLWM5MmEtNGJmMy05NTQwLTJkZGQ1OWNlNzQzNiIsImV4cCI6MTc2NjY0MDY1MSwianRpIjoiMmI2Mjg0MjU4ZWYzNDRhZGFlMzEyYjEwODE3YzM0YTQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.4bnp1-aE5bpI-Bv4VsSTCOQ19EgWVsvoVKzwOqNLzrY) menu.

In the Metrics tab, you will be able to find the minimum, maximum, and average task data payload sizes for recent workflow runs. If these values are close to the 5 MB limit, you can hover over the workflow to see the tasks that are the most consuming.

## Task repeat times limit

When one task or several consecutive tasks keep repeating themselves without changes to the parameters being used, it enters a never-ending loop. This is a waste of resources. To avoid this scenario from happening, a limit for task repeat times is enforced.

The maximum repeat times for each task involved is 100 in the sandbox and 1000 in the production environment. Exceeding this limit will result in an error. Note that iterate flows are not counted as repeated tasks. The limit is not on the run count of a task in a workflow run, but rather the consecutive run times of a task or a section of tasks.

## Alert for workflow limits

If a workflow is excessively executed nearing Zuora workflow limits, this workflow will be paused and deactivated. An email notification will be sent to all active users of your Workflow tenant in the last 30 days by default. You can overwrite this configuration to send it to a specific distribution group or users. See Enable alert notifications for details.

Following is a scenario-based threshold :

-   Workflow failure percentage reaches 95%.
