---
title: "Retrieve Order changes"
url: "https://docs.zuora.com/en/zuora-platform/system-management/audit-trail/sample-queries-of-audit-trail/retrieve-order-changes"
product: "zuora-platform"
scraped_at: "2025-12-24T05:05:05.235Z"
---

# Retrieve Order changes

This task guides you through retrieving auditing records of changes to order changes using a data query.

The following use case retrieves the auditing records of Order Changes.

1.  Submit a [data query](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/platform/data_query/data_query.dita) job through UI or API with the following SQL query:

    SELECT username AS Username, action AS Action, objecttype AS ObjectType, objectname AS ObjectName, attributeid AS Attribute, oldvalue AS OldValue, newvalue AS NewValue, timestamp AS Timestamp FROM auditobjectchangeevent WHERE objecttype = 'Orders' AND year = 2025 AND month = 12 ORDER BY timestamp DESC, transactionid LIMIT 100000

2.  Check the status of the query job through UI or [Get data query](https://www.zuora.com/developer/api-references/api/operation/GET_DataQueryJob) job API operation.
3.  Download the query result when the job is completed. See the following example of the query result.

    Username,Action,ObjectType,ObjectName,Attribute,OldValue,NewValue,Timestamp user@company.com,CREATED,Orders,O-00183168,readonly\_\_c,,1,2025-12-10T09:32:44Z user@company.com,CREATED,Orders,O-00183168,HardwarePaymentReservation\_\_c,,Wire transfer payment received,2025-12-10T09:32:44Z user@company.com,CREATED,Orders,O-00183168,HardwarePaymentReservation\_\_c\_old\_\_c,,Wire transfer payment received,2025-12-10T09:32:44Z user@company.com,CREATED,Orders,O-00183168,Status,,Pending,2025-12-10T09:32:44Z user@company.com,CREATED,Orders,O-00183168,AccountId,,2c92c0f85e5e7d4f015e5f5b50ff0634,2025-12-10T09:32:44Z user@company.com,CREATED,Orders,O-00183168,OrderNumber,,O-00183168,2025-12-10T09:32:44Z user@company.com,CREATED,Orders,O-00183168,OrderDate,,2025-12-10,2025-12-10T09:32:44Z user@company.com,CREATED,Orders,O-00183168,ReversionOrder,,false,2025-12-10T09:32:44Z user@company.com,CREATED,Orders,O-00183168,Id,,86d4836bb519b07908eb079b1d9b0000,2025-12-10T09:32:44Z user@company.com,CREATED,Orders,O-00183168,State,,Executing,2025-12-10T09:32:44Z
