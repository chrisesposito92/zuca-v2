---
title: "Retrieve the user management setting changes"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/audit-trail/audit-trail-using-data-query/sample-queries-of-audit-trail/retrieve-the-user-management-setting-changes"
product: "zuora-platform"
scraped_at: "2026-02-19T03:23:31.482Z"
---

# Retrieve the user management setting changes

Learn how to retrieve user management setting change records using a data query job.

The following use case retrieves the user management setting change records.

1.  Submit a [data query](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/platform/data_query/data_query.dita) job through UI or API with the following SQL query:

    SELECT username AS UpdatedBy, timestamp AS Timestamp, settingtype AS Type, settingobjectname AS ObjectName, newvalue AS NewValue, oldvalue AS OldValue, namespace AS Namespace, action AS Action, attributename AS AttributeName FROM auditsettingchangeevent WHERE namespace = 'UserManagement' AND year = 2022 AND month = 11 ORDER BY timestamp DESC LIMIT 100000

2.  Check the status of the query job through UI or [Get data query](https://www.zuora.com/developer/api-references/api/operation/GET_DataQueryJob) job API operation.
3.  Download the query result when the job is completed. See the following snippet of the query result.

    UpdatedBy,Timestamp,Type,ObjectName,NewValue,OldValue,Namespace,Action,AttributeName audittraile2e@example.com,2022-11-18T07:00:10.286Z,User,34084+user@zuora.com,,Administrator,UserManagement,REMOVED\_FROM\_COLLECTION,roles audittraile2e@example.com,2022-11-18T07:00:10.286Z,User,34084+user@zuora.com,Standard User,,UserManagement,ADDED\_TO\_COLLECTION,roles audittraile2e@example.com,2022-11-18T06:59:08.413Z,Role,audit\_1574060164607\_update,,,UserManagement,DELETED, audittraile2e@example.com,2022-11-18T06:58:08.157Z,Role,audit\_1574060164607\_update,apiWrite,,UserManagement,ADDED\_TO\_COLLECTION,permissions audittraile2e@example.com,2022-11-18T06:58:08.157Z,Role,audit\_1574060164607\_update,,ui,UserManagement,REMOVED\_FROM\_COLLECTION,permissions audittraile2e@example.com,2022-11-18T06:57:06.187Z,Role,audit\_1574060164607,desc\_update,desc,UserManagement,UPDATED,description audittraile2e@example.com,2022-11-18T06:57:06.187Z,Role,audit\_1574060164607,audit\_1574060164607\_update,audit\_1574060164607,UserManagement,UPDATED,name audittraile2e@example.com,2022-11-18T06:56:05.777Z,Role,audit\_1574060164607,ui,,UserManagement,ADDED\_TO\_COLLECTION,permissions audittraile2e@example.com,2022-11-18T06:56:05.418Z,Role,audit\_1574060164607,,,UserManagement,CREATED, audittraile2e@example.com,2022-11-18T06:54:03.701Z,OAuth Client,0fecbd03-9445-4b72-8145-7f813e6b63f5,,,UserManagement,DELETED,


Currently, the UI does not support retrieving permissions for each role. To obtain entitlements for each role, please contact the Zuora Support team at [support@zuora.com](mailto:support@zuora.com) to request an offline report for auditing purposes.
