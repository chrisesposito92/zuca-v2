---
title: "Custom Object: Query Record"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/custom-object-query-record"
product: "zuora-platform"
scraped_at: "2025-12-24T05:35:11.453Z"
---

# Custom Object: Query Record

This reference explains the Custom Object: Query Record task.

With this task, you can query for records of a custom object definition.

You need to select the object and enter a query as the condition to retrieve the records.

If you have created a custom object but it is displayed in the drop-down list, refresh the Workflow cache. To learn about how to refresh the cache of Workflow, see [Workflow maintenance settings](/zuora-platform/extensibility/workflow/configure-global-settings-of-workflow/workflow-maintenance-settings).

You can use this query to filter the records based on the value of a particular data field:

<data\_field>: "<data\_value>"

For example, if you have a custom object that represents books, you can query all of the books authored by "John Smith" using the following query.

author:"John Smith"

See the detailed syntax and query examples in the online help tab of the task.

To learn more about custom object definitions and records, see [custom object definitions](/zuora-platform/extensibility/custom-objects/custom-object-definition-management/create-a-new-custom-object-definition) and [custom object records](/zuora-platform/extensibility/custom-objects/custom-object-record-management/management-of-related-custom-object-records-on-standard-object-detail-pages/create-a-related-custom-object-record).
