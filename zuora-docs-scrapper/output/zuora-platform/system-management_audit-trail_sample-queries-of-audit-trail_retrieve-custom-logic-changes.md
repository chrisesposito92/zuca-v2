---
title: "Retrieve Custom Logic changes"
url: "https://docs.zuora.com/en/zuora-platform/system-management/audit-trail/sample-queries-of-audit-trail/retrieve-custom-logic-changes"
product: "zuora-platform"
scraped_at: "2025-12-24T05:04:54.924Z"
---

# Retrieve Custom Logic changes

Learn how to retrieve auditing records of changes to Custom Logic objects, including decision tables, decision trees, and functions, using a data query.

The following use case retrieves the auditing records of changes to the Custom Logic objects, including decision tables, decision trees, and functions.

1.  Submit a [data query](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/platform/data_query/data_query.dita) through UI or API with the following SQL query:

    SELECT username AS Username, action AS Action, objecttype AS ObjectType, objectname AS ObjectName, attributeid AS Attribute, oldvalue AS OldValue, newvalue AS NewValue, timestamp AS Timestamp FROM auditobjectchangeevent WHERE namespace = 'com.zuora.custom.logic' AND year = 2025 AND month = 7 ORDER BY timestamp DESC LIMIT 100000

2.  Check the status of the query job through UI or [Get data query](https://www.zuora.com/developer/api-references/api/operation/GET_DataQueryJob) job API operation.
3.  Download the query result when the job is completed. See the following example of the query result.

    Username,Action,ObjectType,ObjectName,Attribute,OldValue,NewValue,Timestamp user@zuora.com,CREATED,CustomLogicDecisionTable,Invoice,Name,,Amount Check,2025-07-16T20:59:30.683Z user@zuora.com,CREATED,CustomLogicDecisionTable,Invoice,Effective End Date & Time,,2025-07-31 10:00:00,2025-07-16T20:59:30.683Z user@zuora.com,CREATED,CustomLogicDecisionTable,Invoice,modifiedOn,,2025-07-16 20:59:29,2025-07-16T20:59:30.683Z user@zuora.com,CREATED,CustomLogicDecisionTable,Invoice,enabledOn,,2038-01-01 00:00:00,2025-07-16T20:59:30.683Z user@zuora.com,CREATED,CustomLogicDecisionTable,Invoice,createdOn,,2025-07-16 20:59:29,2025-07-16T20:59:30.683Z user@zuora.com,CREATED,CustomLogicDecisionTable,Invoice,Effective Start Date & Time,,2025-07-01 10:00:00,2025-07-16T20:59:30.683Z user@zuora.com,CREATED,CustomLogicDecisionTable,Invoice,ruleBody,,"//$START\======================================\\nrule ""Amount Check\_1""\\nsalience 2\\nno-loop true\\nwhen\\n \\t$\_invoice : Invoice ($\_\_idInvoice : \_\_id , AccountBoolean\_\_c == """")\\nthen\\n \\tmodify($\_invoice) { AccountBoolean\_\_c = """" ; }\\nend\\n//--------------------------------------------\\n\\n//$END\========================================\\n",2025-07-16T20:59:30.683Z user@zuora.com,UPDATED,CustomLogicDecisionTree,Invoice,modifiedOn,2025-07-07 20:58:59,2025-07-07 22:33:35,2025-07-07T22:33:35.148Z user@zuora.com,UPDATED,CustomLogicDecisionTree,Invoice,enabledOn,2038-01-01 00:00:00,2025-07-07 20:58:58,2025-07-07T20:58:59.875Z user@zuora.com,CREATED,CustomLogicFunction,CustomLogicFunction,script,,"((account) => {\\n /\* Write your code here\\n \* @param account ""Access the object definition via this parameter""\\n \*/\\n})(account);",2025-07-01T04:21:01.272Z user@zuora.com,CREATED,CustomLogicFunction,CustomLogicFunction,output,,account,2025-07-01T04:21:01.272Z user@zuora.com,CREATED,CustomLogicFunction,CustomLogicFunction,input,,account,2025-07-01T04:21:01.272Z


Currently, the rule body for decision tables and decision trees displays raw code. In an upcoming release, it will be enhanced to show a more intuitive format that aligns with the values displayed in the UI.
