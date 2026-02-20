---
title: "Retrieve: Object Query - Task settings"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/retrieve-object-query/retrieve-object-query---task-settings"
product: "zuora-platform"
scraped_at: "2026-02-20T17:50:18.578Z"
---

# Retrieve: Object Query - Task settings

Explains task settings for the Retrieve: Object Query task.

## Fields tab

-   Object - Select the data object to query for data from.

-   Click a data object from the left panel to display all available data fields in that object.

-   Select the Enabled checkbox to select a data field.


## Conditions tab

Enter a query in the query text field. The two dropdown lists are intended to help you enter object fields and workflow data fields in your query.

-   Query Batch Size - The limit of data entries in the results of a query. The default and maximum value is 2000.

-   Payload Alternative Placement - By default, the data payload for a query task will be placed under the data object that is selected for the query. To avoid conflicts with concurrent query tasks that save multiple copies of data to the same object, you can specify an alternative placement for this query task. For example, if you query for the balance data in the Account object, the retrieved data will be placed under Account by default and can be referenced with "Account.Balance" in subsequent tasks. If you specify "Account\_0" as the payload alternative placement, the retrieved data will be placed under Account\_0 and can be referenced with "Account\_0.Balance".


If you want the workflow to stop when no data is returned in this query task, select Stop subsequent tasks if query returns no records .
