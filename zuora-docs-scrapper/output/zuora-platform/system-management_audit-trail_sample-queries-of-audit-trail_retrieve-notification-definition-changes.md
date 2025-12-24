---
title: "Retrieve Notification Definition changes"
url: "https://docs.zuora.com/en/zuora-platform/system-management/audit-trail/sample-queries-of-audit-trail/retrieve-notification-definition-changes"
product: "zuora-platform"
scraped_at: "2025-12-24T05:04:49.921Z"
---

# Retrieve Notification Definition changes

Learn how to retrieve auditing records of changes to the Notification Definition object using a data query job.

The following use case retrieves the auditing records of changes to the Notification Definition object.

1.  Submit a [data query](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/platform/data_query/data_query.dita) job through UI or API with the following SQL query:

    SELECT username AS Username, action AS Action, objectid AS ObjectID, objecttype AS ObjectType, objectname AS ObjectName, attributeid AS Attribute, oldvalue AS OldValue, newvalue AS NewValue, timestamp AS Timestamp FROM auditobjectchangeevent WHERE objecttype = 'NotificationDefinition' AND year = 2023 AND month = 4 ORDER BY timestamp DESC LIMIT 100000

2.  Check the status of the query job through UI or [Get data query](https://www.zuora.com/developer/api-references/api/operation/GET_DataQueryJob) job API operation.
3.  Download the query result when the job is completed. See the following example of the query result.

    Username,Action,ObjectID,ObjectType,ObjectName,Attribute,OldValue,NewValue,Timestamp audit-trail@zuora.com,DELETED,8a90f50887558f990187562573ef3c00,NotificationDefinition,Invoice Due 10 days,,,,2023-04-06T10:40:08.087Z audit-trail@zuora.com,UPDATED,8a90f50887558f990187562573ef3c00,NotificationDefinition,Invoice Due 10 days,CalloutParams,"{""AccountName"":""<DataSource.Account.Name>""}","{""AccountName"":""<DataSource.Account.Name>"",""InvoiceDueDate"":""<DataSource.Invoice.DueDate>""}",2023-04-06T10:39:50.314Z audit-trail@zuora.com,UPDATED,8a90f50887558f990187562573ef3c00,NotificationDefinition,Invoice Due 10 days,CalloutBaseUrl,https://api.mycompany.com,https://api.mycompany.com/callout,2023-04-06T10:39:50.314Z audit-trail@zuora.com,CREATED,8a90f50887558f990187562573ef3c00,NotificationDefinition,Invoice Due 10 days,Name,,Invoice Due 10 days,2023-04-06T10:38:27.828Z audit-trail@zuora.com,CREATED,8a90f50887558f990187562573ef3c00,NotificationDefinition,Invoice Due 10 days,CalloutOauth2,,true,2023-04-06T10:38:27.828Z audit-trail@zuora.com,CREATED,8a90f50887558f990187562573ef3c00,NotificationDefinition,Invoice Due 10 days,ProfileId,,2c92c8fe7208d2e501720f65887d2b55,2023-04-06T10:38:27.828Z audit-trail@zuora.com,CREATED,8a90f50887558f990187562573ef3c00,NotificationDefinition,Invoice Due 10 days,EventId,,2c92c8fe7208d2e501720f65885c2b35,2023-04-06T10:38:27.828Z audit-trail@zuora.com,CREATED,8a90f50887558f990187562573ef3c00,NotificationDefinition,Invoice Due 10 days,IsSmsActive,,false,2023-04-06T10:38:27.828Z
