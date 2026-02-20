---
title: "Retrieve the setting changes"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/audit-trail/audit-trail-using-data-query/sample-queries-of-audit-trail/retrieve-the-setting-changes"
product: "zuora-platform"
scraped_at: "2026-02-20T17:45:14.061Z"
---

# Retrieve the setting changes

Learn how to retrieve setting change records using a data query job.

The following use case retrieves the setting change records.

1.  Submit a [data query](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/platform/data_query/data_query.dita) job through UI or API with the following SQL query:

    SELECT username AS UpdatedBy, action AS Action, settingtype AS SettingType, attributename AS Attribute, oldvalue AS OldValue, newvalue AS NewValue, timestamp AS Timestamp FROM auditsettingchangeevent WHERE namespace <> 'UserManagement' AND year = 2022 AND month = 11 ORDER BY timestamp DESC LIMIT 100000

2.  Check the status of the query job through UI or API operation. For more inforamtion on how to retrieve a data query job using API, see .[Retrieve a data query job](https://developer.zuora.com/v1-api-reference/api/operation/GET_DataQueryJob/)
3.  Download the query result when the job is completed. See the following snippet of the query result.

    UpdatedBy,Action,SettingType,Attribute,OldValue,NewValue,Timestamp audit-trail@zuora.com,UPDATED,TenantProperty,PROPERTY\_DISALLOW\_BLANK\_ACCOUNTING\_CODE,false,true,2022-11-10T09:30:52Z audit-trail@zuora.com,UPDATED,TenantProperty,PROPERTY\_DISALLOW\_BLANK\_ACCOUNTING\_CODE,true,false,2022-11-10T09:29:47Z audit-trail@zuora.com,UPDATED,BillingRules,Enable credit back for removing or canceling one time charges?,false,true,2022-11-05T17:08:53Z audit-trail@zuora.com,UPDATED,BillingRules,"When prorating a month, assume 30 days in a month or use actual days?",Assume30Days,UseActualDays,2022-11-05T17:08:53Z audit-trail@zuora.com,UPDATED,BillingRules,Support bill run auto-post?,true,false,2022-11-05T17:08:53Z audit-trail@zuora.com,UPDATED,BillingRules,"When prorating periods greater than a month, prorate by month first, or by day?",ProrateByDay,ProrateByMonthFirst,2022-11-05T16:56:36Z audit-trail@zuora.com,UPDATED,BillingRules,"When prorating a month, assume 30 days in a month or use actual days?",UseActualDays,Assume30Days,2022-11-05T16:56:36Z audit-trail@zuora.com,UPDATED,BillingRules,includeNegativeInvoice,false,true,2022-11-05T16:56:36Z audit-trail@zuora.com,UPDATED,BillingRules,Enable credit back for removing or canceling one time charges?,true,false,2022-11-05T16:56:36Z
