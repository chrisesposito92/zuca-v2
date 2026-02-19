---
title: "Retrieve: AQUA Query - Task settings"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/retrieve-aqua-query/retrieve-aqua-query---task-settings"
product: "zuora-platform"
scraped_at: "2026-02-19T03:27:24.666Z"
---

# Retrieve: AQUA Query - Task settings

Describes the task settings of the Retrieve: AQUA Query task.

## Fields tab

-   Object: Select the data object to export data from. Once the object is selected, the field dropdown list is shown.

-   Select the data field to return results for and click Add . Repeat to add all the fields you need.

-   Reorder the list by dragging and dropping the field. The fields will be exported to the output file in the order of top to bottom and left to right.

-   Click the Aggregation button to change the aggregation function to be used. The available functions include Min, Max, Count, Average, and Sum, which vary for different types of fields.

    -   Min: Return the minimum value in the set of results for a data field.

    -   Max: Return the minimum value in the set of results for a data field.

    -   Count: Return the number of results (entries) for a data field.

    -   Average: Return the average of all values in the set of results for a data field.

    -   Sum: Return the sum of all values in the set of results for a data field.


## Conditions tab

Enter a query in the query text field. The two dropdown lists are intended to help you enter object fields and workflow data fields in your query.

-   Convert to currencies: Optional. Specify the currency that you want to convert transaction amounts into by using the [ISO currency codes](/basics/about-zuora/currency-codes).

-   Project: The unique ID of a data integration project for a particular partner. This field must be used together with the Partner field to uniquely identify a data integration target. This field is required only if you are using AQuA in stateful mode.

-   Partner: The unique ID of a data integration partner. It must be used together with the Project field to uniquely identify a data integration target. This field is required only if you are using AQuA in stateful mode. Submit a request at [Zuora Global Support](https://support.zuora.com/) to obtain a partner ID.

-   Stop when no result returned: If a query returns no results, the subsequent tasks in the workflow will have no data to process. If you want the workflow to stop in this case, enable this option.

-   Use query labels: When this option is enabled, the object and field API names are used for the CSV header output instead of the field labels.

-   Standardize datetime to UTC: When this option is enabled, the exported records are rendered according to ISO-8601 generic UTC form when using WSDL 69 and later.
