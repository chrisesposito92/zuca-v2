---
title: "Retrieve Workflow changes"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/audit-trail/audit-trail-using-data-query/sample-queries-of-audit-trail/retrieve-workflow-changes"
product: "zuora-platform"
scraped_at: "2026-02-20T17:45:35.150Z"
---

# Retrieve Workflow changes

Learn how to retrieve auditing records of changes to the Workflow definition object hierarchy using a data query.

The following use case retrieves the auditing records of changes to Workflow definition object hierarchy.

1.  Submit a [data query](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/platform/data_query/data_query.dita) job through UI or API with the following SQL query:

    SELECT username AS Username, action AS Action, Objectid AS ObjectID, objecttype AS ObjectType, objectname AS ObjectName, attributeid AS Attribute, oldvalue AS OldValue, newvalue AS NewValue, timestamp AS Timestamp FROM auditobjectchangeevent WHERE namespace = 'Workflow' AND objecttype = 'WorkflowVersion' AND year = 2022 AND month = 11 ORDER BY timestamp DESC LIMIT 100000

2.  Check the status of the query job through UI or [Get data query](https://www.zuora.com/developer/api-references/api/operation/GET_DataQueryJob) job API operation.
3.  Download the query result when the job is completed. See the following example of the query result.

    Username,Action,ObjectID,ObjectType,ObjectName,Attribute,OldValue,NewValue,Timestamp audit-trail@zuora.com,CREATED,233,WorkflowVersion,Workflow Name,name,,Sample Workflow,2022-11-10 16:54:14Z audit-trail@zuora.com,CREATED,233,WorkflowVersion,Workflow Name,priority,,Medium,2022-11-10 16:54:14Z audit-trail@zuora.com,CREATED,233,WorkflowVersion,Workflow Name,call\_type,,ASYNC,2022-11-10 16:54:14Z audit-trail@zuora.com,CREATED,233,WorkflowVersion,Workflow Name,callout\_trigger,,true,2022-11-10 16:54:14Z audit-trail@zuora.com,UPDATED,233,WorkflowVersion,Workflow Name,callout\_trigger,true,false,2022-11-10 17:11:30Z
