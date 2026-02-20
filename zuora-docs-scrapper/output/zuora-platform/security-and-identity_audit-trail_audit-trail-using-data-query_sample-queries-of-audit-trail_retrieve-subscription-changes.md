---
title: "Retrieve Subscription Changes"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/audit-trail/audit-trail-using-data-query/sample-queries-of-audit-trail/retrieve-subscription-changes"
product: "zuora-platform"
scraped_at: "2026-02-20T17:45:35.824Z"
---

# Retrieve Subscription Changes

Learn how to track changes in subscription versions using data queries.

For multiple-versioned subscriptions, audit trail treats each version of a subscription and rate plan charge as a distinct object. So, you can track the changes of a specific version identified by ID, instead of all the changes throughout the subscription lifecycle. This is an example of querying subscription custom field value changes by subscription id:

1.  Submit a [data query](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/platform/data_query/data_query.dita) job through UI or API with the following SQL query:

    SELECT username AS Username, action AS Action, objecttype AS ObjectType, objectname AS ObjectName, objectid AS ObjectId, attributeid AS Attribute, oldvalue AS OldValue, newvalue AS NewValue, timestamp AS Timestamp FROM auditobjectchangeevent WHERE objecttype = 'Subscription' AND action = 'UPDATED' AND objectid = '86d4889a19b9ae883a5afbdfaafe021c' ORDER BY timestamp DESC, transactionid LIMIT 100

2.  Check the status of the query job through UI or [Get data query](https://www.zuora.com/developer/api-references/api/operation/GET_DataQueryJob) job API operation.
3.  Download the query result when the job is completed. See the following example of the query result.

    Username,Action,ObjectType,ObjectName,ObjectId,Attribute,OldValue,NewValue,Timestamp user@company.com,UPDATED,Subscription,A-S00148280,86d4889a19b9ae883a5afbdfaafe021c,state\_\_c,,New Jersey,2025-12-08T03:12:39Z
