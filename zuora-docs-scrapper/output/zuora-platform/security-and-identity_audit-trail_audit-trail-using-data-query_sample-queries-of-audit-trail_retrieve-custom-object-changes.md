---
title: "Retrieve custom object changes"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/audit-trail/audit-trail-using-data-query/sample-queries-of-audit-trail/retrieve-custom-object-changes"
product: "zuora-platform"
scraped_at: "2026-02-20T17:45:34.921Z"
---

# Retrieve custom object changes

Learn how to retrieve auditing records of changes to custom objects, including definitions and records, using a data query.

The following use case retrieves the auditing records of changes to custom objects, including custom object definitions and records.

1.  Submit a [data query](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/platform/data_query/data_query.dita) job through UI or API with the following SQL query:

    SELECT \* FROM auditobjectchangeevent WHERE (objecttype = 'CustomObjectDefinition' OR objecttype = 'CustomObjectRecord') AND year = 2022 AND month = 11 ORDER BY timestamp DESC LIMIT 100000

2.  Check the status of the query job through UI or [Get data query](https://www.zuora.com/developer/api-references/api/operation/GET_DataQueryJob) job API operation.
3.  Download the query result when the job is completed. See the following example of the query result.

    Username,Action,ObjectName,Attribute,OldValue,NewValue,Timestamp audit-trail@zuora.com,CREATED,ATC,title,,ATC,2022-11-04T21:56:19.025Z audit-trail@zuora.com,CREATED,ATC,label,,ATC,2022-11-04T21:56:19.025Z audit-trail@zuora.com,CREATED,ATC,Field1\_\_c.maxLength,,100,2022-11-04T21:56:19.025Z audit-trail@zuora.com,CREATED,ATC,Field1\_\_c.default,,volume,2022-11-04T21:56:19.025Z audit-trail@zuora.com,CREATED,ATC,filterable,,"\[""Field1\_\_c""\]",2022-11-04T21:56:19.025Z audit-trail@zuora.com,CREATED,ATC,Field1\_\_c.description,, ,2022-11-04T21:56:19.025Z audit-trail@zuora.com,CREATED,ATC,Field1\_\_c.label,,Field1,2022-11-04T21:56:19.025Z audit-trail@zuora.com,CREATED,ATC,Field1\_\_c.type,,STRING,2022-11-04T21:56:19.025Z audit-trail@zuora.com,CREATED,ATC,required,,"\[""Field1\_\_c""\]",2022-11-04T21:56:19.025Z audit-trail@zuora.com,CREATED,ATC,Field1\_\_c.origin,,custom,2022-11-04T21:56:19.025Z audit-trail@zuora.com,CREATED,ATC,unique,,"\[""Field1\_\_c""\]",2022-11-04T21:56:19.025Z audit-trail@zuora.com,CREATED,ATC,type,,object,2022-11-04T21:56:19.025Z audit-trail@zuora.com,CREATED,ATC,object,,ATC,2022-11-04T21:56:19.025Z
