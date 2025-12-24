---
title: "Time: Delay"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/time-delay"
product: "zuora-platform"
scraped_at: "2025-12-24T05:37:06.960Z"
---

# Time: Delay

This reference describes the Time: Delay task.

The "Time: Delay" task performs a specified time delay for a workflow. You can define the delay time in seconds in the task settings.

![Delay task configuration](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/bcf6c861-6269-419f-9b1f-c15b3f720198?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImJjZjZjODYxLTYyNjktNDE5Zi05YjFmLWMxNWIzZjcyMDE5OCIsImV4cCI6MTc2NjY0MTAyNCwianRpIjoiZGI1NzUxOWQyMzJlNGVhMTlkNmRjMWI2NTI1MWFlMmMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.5231-w13gFlAguWkfoS6RkIDIArQdbgx83cT4yWNVsk)

## Example

The following steps provide an example of using the Delay task to set up retry logic.

1.  For the task that you want to retry (for example, SFTP task), create a Failure branch, and add an If task.

2.  For the If task, specify the logic to determine whether the predefined number of retries is reached and, if not, calculate the next wait time. The following code block increments the retry count by one and calculates the wait time (`waitSeconds`). For each new retry, the backOff variable will have a new value.

    {%- if Data.Liquid.retryCount == nil -%} {%- assign retryCount = 1 -%} {%- assign backOff = GlobalConstants.backOffMultiplier | plus: 0.00 -%} {%- else -%} {%- assign retryCount = Data.Liquid.retryCount | plus: 1 -%} {%- assign backOff = Data.Liquid.backOff | times: GlobalConstants.backOffMultiplier -%} {%- endif -%} {% if retryCount <= 3 %} {%- assign waitSeconds = GlobalConstants.retryMinutes | times: 60.0 | times: backOff -%} True {% else %} False {% endif %}
3.  Add a Delay task after the If task, and connect the Success branch of the Delay task to the start of the SFTP task to complete the loop. The Delay task performs a time delay that is equal to the wait time (`waitSeconds`) calculated in the If task (step 2). Set the delay time of the task with the following Liquid expression:

    {{Data.Liquid.waitSeconds}}

    For the name of the task, you can also include this Liquid expression so that the actual number of minutes for each retry will be recorded in the task run.

    Wait for {{Data.Liquid.waitSeconds | divided\_by: 60}} mins
