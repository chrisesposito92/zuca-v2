---
title: "Retrieve custom field definition changes"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/audit-trail/audit-trail-using-data-query/sample-queries-of-audit-trail/retrieve-custom-field-definition-changes"
product: "zuora-platform"
scraped_at: "2026-02-20T17:45:35.555Z"
---

# Retrieve custom field definition changes

Learn how to retrieve auditing records of changes to custom field definitions using a data query.

The following use case retrieves the auditing records of changes to custom field definitions.

1.  Submit a [data query](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/platform/data_query/data_query.dita) job through UI or API with the following SQL query:

    SELECT username AS Username, action AS Action, objectname AS ObjectName, attributeid AS Attribute, oldvalue AS OldValue, newvalue AS NewValue, timestamp AS Timestamp FROM auditobjectchangeevent WHERE objecttype = 'CustomFieldDefinition' AND year = 2022 AND month = 11 AND day > 1 AND day < 31 ORDER BY timestamp DESC LIMIT 100000

2.  Check the status of the query job through UI or [Get data query](https://www.zuora.com/developer/api-references/api/operation/GET_DataQueryJob) job API operation.
3.  Download the query result when the job is completed. See the following example of the query result.

    Username,Action,ObjectName,Attribute,OldValue,NewValue,Timestamp audit-trail@zuora.com,UPDATED,Account.LastReviewDate\_\_c,Required,true,false,2022-11-13T07:50:44.683Z audit-trail@zuora.com,CREATED,Account.LastReviewDate\_\_c,Description,,Date of the last business review with the customer,2022-11-13T07:50:22.915Z audit-trail@zuora.com,CREATED,Account.LastReviewDate\_\_c,ApiName,,LastReviewDate\_\_c,2022-11-13T07:50:22.915Z audit-trail@zuora.com,CREATED,Account.LastReviewDate\_\_c,Required,,true,2022-11-13T07:50:22.915Z audit-trail@zuora.com,CREATED,Account.LastReviewDate\_\_c,ReadOnlyOnUI,,false,2022-11-13T07:50:22.915Z audit-trail@zuora.com,CREATED,Account.LastReviewDate\_\_c,Type,,Date,2022-11-13T07:50:22.915Z audit-trail@zuora.com,CREATED,Account.LastReviewDate\_\_c,Label,,LastReviewDate,2022-11-13T07:50:22.915Z audit-trail@zuora.com,CREATED,Account.LastReviewDate\_\_c,MaxLength,,255,2022-11-13T07:50:22.915Z
