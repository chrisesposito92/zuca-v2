---
title: "Task settings"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/retrieve-query/task-settings"
product: "zuora-platform"
scraped_at: "2025-12-24T05:33:42.863Z"
---

# Task settings

Describes the task settings of the Retrieve: Query task.

-   Task Name - Enter the query task name.

-   Base Object \- Click the dropdown to select a base object for the query. Base Object enables you to select the object Field , Conditions , and Basic.
    Note: You can only select the objects available in the Base Object drop-down list.


-   Id - Enter a tag for the base object ID, such as Account ID. ![Sample query task configuration](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/c69e760a-5fd2-474d-a40c-acb17c4ddc75?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImM2OWU3NjBhLTVmZDItNDc0ZC1hNDBjLWFjYjE3YzRkZGM3NSIsImV4cCI6MTc2NjY0MDgyMCwianRpIjoiMzE1YmMwMTY0OTY1NGJiNThjYmNmNjg2OTllNmI1ZDgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.g6Zt37p7X0y6z8xFbLheKWiTah6nHYpFOAO2Pe57uJM)


## Query tab

Click the checkbox under the Query tab to select the query for the base object. Based on the selected queries, you can configure the fields and conditions for the base object.

## Basic tab

-   Payload Placement \- Payload Alternative Placement by default, the data payload for a query task is placed under the data object selected for the query. To avoid conflicts with concurrent query tasks that save multiple copies of data to the same object, you can specify an alternative placement for this query task. For example, if you query for the balance data in the Account object, the retrieved data will be placed under Account by default and can be referenced with "Account.Balance" in subsequent tasks. If you specify "Account\_0" as the alternative payload placement, the retrieved data are placed under Account\_0 and can be referenced with "Account\_0.Balance".

-   Search Tags \- Enter the liquid tags used for searching in the logs.

-   Strict Variables \- Switch on the Strict Variables toggle to verify the Liquid expression specified in this task.

-   Skip Validation \- Switch on the Skip Validation toggle to skip the basic task validation on the task setting UI and allow the Workflow task to be saved.


If you want the Workflow to stop when no data is returned in this query task, select Stop subsequent tasks if query returns no records .

## Fields tab

-   Object - Select the data object to query for data from. You can switch on the Show selected toggle to view only the selected objects. The query returns at most 200 records of each selected associated object.

-   Fields - Click a data object from the left panel to display all available data fields in that object.


## Conditions tab

Select a query under the Query tab. Under the Conditions tab, the dropdown lists will help you enter object fields and Workflow data fields in your query.

Note:

Not all fields are currently available for conditions. You can use a downstream task to do any further filtering.
