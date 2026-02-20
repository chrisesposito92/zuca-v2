---
title: "Retrieve Order Action Changes"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/audit-trail/audit-trail-using-data-query/sample-queries-of-audit-trail/retrieve-order-action-changes"
product: "zuora-platform"
scraped_at: "2026-02-20T17:45:35.880Z"
---

# Retrieve Order Action Changes

This task guides you through querying order action changes using a data query job via UI or API.

This is an example of querying order action changes

1.  Submit a [data query](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/platform/data_query/data_query.dita) job through UI or API with the following SQL query:

    SELECT username AS Username, action AS Action, objecttype AS ObjectType, objectname AS ObjectName, attributeid AS Attribute, oldvalue AS OldValue, newvalue AS NewValue, timestamp AS Timestamp FROM auditobjectchangeevent WHERE objecttype = 'OrderAction' AND year = 2025 AND month = 12 ORDER BY timestamp DESC, transactionid LIMIT 100000

2.  Check the status of the query job through UI or [Get data query](https://www.zuora.com/developer/api-references/api/operation/GET_DataQueryJob) job API operation.
3.  Download the query result when the job is completed. See the following example of the query result.

    Username,Action,ObjectName,Attribute,OldValue,NewValue,Timestamp audit-trail@zuora.com,CREATED,ATC,title,,ATC,2022-11-04T21:56:19.025Z audit-trail@zuora.com,CREATED,ATC,label,,ATC,2022-11-04T21:56:19.025Z audit-trail@zuora.com,CREATED,ATC,Field1\_\_c.maxLength,,100,2022-11-04T21:56:19.025Z audit-trail@zuora.com,CREATED,ATC,Field1\_\_c.default,,volume,2022-11-04T21:56:19.025Z audit-trail@zuora.com,CREATED,ATC,filterable,,"\[""Field1\_\_c""\]",2022-11-04T21:56:19.025Z audit-trail@zuora.com,CREATED,ATC,Field1\_\_c.description,, ,2022-11-04T21:56:19.025Z audit-trail@zuora.com,CREATED,ATC,Field1\_\_c.label,,Field1,2022-11-04T21:56:19.025Z audit-trail@zuora.com,CREATED,ATC,Field1\_\_c.type,,STRING,2022-11-04T21:56:19.025Z audit-trail@zuora.com,CREATED,ATC,required,,"\[""Field1\_\_c""\]",2022-11-04T21:56:19.025Z audit-trail@zuora.com,CREATED,ATC,Field1\_\_c.origin,,custom,2022-11-04T21:56:19.025Z audit-trail@zuora.com,CREATED,ATC,unique,,"\[""Field1\_\_c""\]",2022-11-04T21:56:19.025Z audit-trail@zuora.com,CREATED,ATC,type,,object,2022-11-04T21:56:19.025Z audit-trail@zuora.com,CREATED,ATC,object,,ATC,2022-11-04T21:56:19.025Z
