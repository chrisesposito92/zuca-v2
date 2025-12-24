---
title: "Retrieve: Query"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/retrieve-query"
product: "zuora-platform"
scraped_at: "2025-12-24T05:33:39.875Z"
---

# Retrieve: Query

This reference describes the Retrieve: Query task.

The Workflow Query task allows you to fetch records in near-real time for any object by Id. The Query Task can also bring records from auto-linked objects under the base object. Filter conditions are provided for subsequent objects linked under the base object. When you create a Query task, you should select a data object and provide its Id to query data against. Select the data fields for which you want to return results, and specify the conditions for filtering the data.

## Difference between the Query task and the Object Query task

The object query and the new task can be used for synchronous data retrieval. Compared to the existing Object Query task, the new task supports a wider range of objects, including custom objects, and returns all objects associated with the selected source object. With the new Query task, you do not have to perform multiple object queries to get associated object data.

The maximum number of records that can be returned for the new Query task is 200 records for each selected associated object. This limit applies to the base object and any subsequent objects linked under the base object.
