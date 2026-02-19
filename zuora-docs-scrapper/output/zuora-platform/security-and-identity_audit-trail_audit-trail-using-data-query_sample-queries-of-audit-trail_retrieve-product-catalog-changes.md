---
title: "Retrieve Product Catalog changes"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/audit-trail/audit-trail-using-data-query/sample-queries-of-audit-trail/retrieve-product-catalog-changes"
product: "zuora-platform"
scraped_at: "2026-02-19T03:23:31.611Z"
---

# Retrieve Product Catalog changes

Learn how to retrieve auditing records of changes to the Product Catalog object hierarchy using a data query job.

The following use case retrieves the auditing records of changes to Product Catalog object hierarchy.

1.  Submit a [data query](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/platform/data_query/data_query.dita) job through UI or API with the following SQL query:

    SELECT username AS Username, action AS Action, objecttype AS ObjectType, objectname AS ObjectName, attributeid AS Attribute, oldvalue AS OldValue, newvalue AS NewValue, timestamp AS Timestamp, ( CASE WHEN ( objecttype = 'ProductRatePlan' ) THEN (SELECT p.name FROM product p, productrateplan prp WHERE prp.id = objectid AND p.id = prp.productid) WHEN ( objecttype = 'ProductRatePlanCharge' ) THEN (SELECT CONCAT(p.name, '.', prp.name) FROM product p, productrateplan prp, productrateplancharge prpc WHERE prpc.id = objectid AND prp.id = prpc.productrateplanid AND p.id = prp.productid) WHEN ( objecttype = 'ProductRatePlanChargeTier' ) THEN (SELECT CONCAT(p.name, '.', prp.name, '.', prpc.name) FROM product p, productrateplan prp, productrateplancharge prpc, productrateplanchargetier prpct WHERE prpct.id = objectid AND prpc.id = prpct.productrateplanchargeid AND prp.id = prpc.productrateplanid AND p.id = prp.productid) ELSE '' END ) AS product\_catalog\_info FROM auditobjectchangeevent WHERE (objecttype = 'ProductRatePlan' OR objecttype = 'ProductRatePlanCharge' OR objecttype = 'ProductRatePlanChargeTier') AND year = 2022 AND month = 11 ORDER BY timestamp DESC, transactionid LIMIT 100000

2.  Check the status of the query job through UI or [Get data query](https://www.zuora.com/developer/api-references/api/operation/GET_DataQueryJob) job API operation.
3.  Download the query result when the job is completed. See the following snippet of the query result.

    Username,Action,ObjectType,ObjectName,Attribute,OldValue,NewValue,Timestamp,product\_catalog\_info audit-trail@zuora.com,CREATED,ProductRatePlanChargeTier,1,ProductRatePlanChargeId,,2c92c8fe75dff0620175e00ad3b101f7,2022-11-19T10:26:47.385Z,Test.New Rate Plan.One-time charge audit-trail@zuora.com,CREATED,ProductRatePlanChargeTier,1,IsOveragePrice,,false,2022-11-19T10:26:47.385Z,Test.New Rate Plan.One-time charge audit-trail@zuora.com,CREATED,ProductRatePlanCharge,One-time charge,ChargeModel,,Flat Fee Pricing,2022-11-19T10:26:47.384Z,Test.New Rate Plan audit-trail@zuora.com,CREATED,ProductRatePlanCharge,One-time charge,LegacyRevenueReporting,,false,2022-11-19T10:26:47.384Z,Test.New Rate Plan audit-trail@zuora.com,CREATED,ProductRatePlanChargeTier,1,StartingUnit,,0.000000000,2022-11-19T10:26:47.384Z,Test.New Rate Plan.One-time charge audit-trail@zuora.com,CREATED,ProductRatePlanChargeTier,1,IsOveragePrice,,false,2022-11-19T10:26:47.384Z,Test.New Rate Plan.One-time charge audit-trail@zuora.com,UPDATED,ProductRatePlan,New Rate Plan,ActiveCurrencies,,USD,2022-11-19T10:26:47.383Z,Test audit-trail@zuora.com,CREATED,ProductRatePlan,New Rate Plan,EffectiveEndDate,,2023-11-19,2022-11-19T10:13:29.764Z,Test audit-trail@zuora.com,DELETED,ProductRatePlanChargeTier,1,,,,2022-11-18T18:36:50.423Z, audit-trail@zuora.com,DELETED,ProductRatePlanCharge,New Component,,,,2022-11-18T18:36:50.423Z,
