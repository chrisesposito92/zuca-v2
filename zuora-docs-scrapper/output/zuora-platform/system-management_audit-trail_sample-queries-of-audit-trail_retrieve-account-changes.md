---
title: "Retrieve Account changes"
url: "https://docs.zuora.com/en/zuora-platform/system-management/audit-trail/sample-queries-of-audit-trail/retrieve-account-changes"
product: "zuora-platform"
scraped_at: "2025-12-24T05:04:42.077Z"
---

# Retrieve Account changes

Learn how to retrieve auditing records of Account changes, including updates to BillToId and SoldToId values.

The following use case retrieves the auditing records of Account changes. If `BillToId` or `SoldToId` value is updated or added, the value change is retrieved as `additional_info` in the query result.

1.  Submit a [data query](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/platform/data_query/data_query.dita) job through UI or API with the following SQL query:

    SELECT username AS Username, action AS Action, objecttype AS ObjectType, objectname AS ObjectName, attributeid AS Attribute, oldvalue AS OldValue, newvalue AS NewValue, timestamp AS Timestamp, ( CASE WHEN ( ( attributeid = 'BillToId' OR attributeid = 'SoldToId' ) AND oldvalue <> '' AND newvalue <> '' ) THEN (SELECT Concat(c1.firstname, ' ', c1.lastname, ' -> ', c2.firstname, ' ', c2.lastname) FROM contact c1, contact c2 WHERE c1.id = oldvalue AND c2.id = newvalue) WHEN ( ( attributeid = 'BillToId' OR attributeid = 'SoldToId' ) AND oldvalue IS NULL ) THEN (SELECT Concat(firstname, ' ', lastname) FROM contact WHERE id = newvalue) ELSE '' END ) AS additional\_info FROM auditobjectchangeevent WHERE objecttype = 'Account' AND year = 2022 AND month = 11 ORDER BY timestamp DESC, transactionid LIMIT 100000

2.  Check the status of the query job through UI or [Get data query](https://www.zuora.com/developer/api-references/api/operation/GET_DataQueryJob) job API operation.
3.  Download the query result when the job is completed. See the following snippet of the query result.

    Username,Action,ObjectType,ObjectName,Attribute,OldValue,NewValue,Timestamp,additional\_info audit-trail@zuora.com,DELETED,Account,testJoy002,,,,2022-11-09T09:04:39.046Z, audit-trail@zuora.com,UPDATED,Account,testJoy002,Status,Active,Canceled,2022-11-09T09:04:35.386Z, audit-trail@zuora.com,UPDATED,Account,gary test staging2,TotalDebitMemoBalance,,0.000000000,2022-11-06T16:16:36.303Z, audit-trail@zuora.com,UPDATED,Account,gary test staging2,Mrr,,12.00,2022-11-06T16:16:36.303Z, audit-trail@zuora.com,UPDATED,Account,gary test staging2,UnappliedCreditMemoAmount,,0.000000000,2022-11-06T16:16:36.303Z, audit-trail@zuora.com,UPDATED,Account,gary test staging2,CustomerServiceRepName,,gary test staging2,2022-11-06T16:10:19.557Z, audit-trail@zuora.com,CREATED,Account,Xi Test,BillToId,,2c92c8fe7569068c01756ede2ee4383a,2022-11-04T11:00:56.173Z,John Doe audit-trail@zuora.com,CREATED,Account,Xi Test,SoldToId,,2c92c8fe7569068c01756ede2ee4383a,2022-11-04T11:00:56.173Z,Jane Doe audit-trail@zuora.com,UPDATED,Account,Oscorp123,BillToId,2c92c8fb756388ec017564e530151b3a,2c92c8fb6af31db7016af7dd77dd1c36,2022-11-03T23:12:35.685Z,Tony Stark -> Nick Fury audit-trail@zuora.com,UPDATED,Account,Oscorp123,SoldToId,2c92c8fb6af31db7016af7dd77dd1c36,2c92c8fb756388ec017564e530151b3a,2022-11-03T23:12:35.685Z,Nick Fury -> Tony Stark


Note that deleting an Account object triggers two sequential object change events. Consequently Audit Trail inserts two records to the `auditobjectchangeevent` table. The first one records an `UPDATED` action that changes the status of the Account from `Active` to `Canceled` . The second one records a `DELETED` action that removes that Account. See the first two rows in the preceding query result for an example.
