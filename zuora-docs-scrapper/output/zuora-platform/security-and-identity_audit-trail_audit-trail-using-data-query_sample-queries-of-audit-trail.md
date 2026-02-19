---
title: "Sample Queries of Audit Trail"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/audit-trail/audit-trail-using-data-query/sample-queries-of-audit-trail"
product: "zuora-platform"
scraped_at: "2026-02-19T03:23:31.773Z"
---

# Sample Queries of Audit Trail

This topic provides guidance on retrieving Audit Trail records using Data Query, including sample queries.

The Audit Trail records are stored in the following tables:

You must retrieve Audit Trail records through Data Query. For more information on data query, see [Overview of Data Query](/zuora-platform/data/data-query/overview-of-data-query) .

-   `auditloginevent`

-   `auditsettingchangeevent`

-   `auditobjectchangeevent`


See the following samples on how to generate Audit Trail reports.

## Retrieve jobs performed through the Data Loader

The following use cases retrieve auditing records of changes to a job performed through the Data Loader.

Example 1:

SELECT \* FROM auditobjectchangeevent WHERE namespace = 'BulkData' ORDER BY timestamp DESC LIMIT 100

Example 2:

SELECT \* FROM auditobjectchangeevent WHERE namespace = 'BulkData' AND YEAR = 2023 AND MONTH = 8 AND DAY = 7 ORDER BY timestamp DESC LIMIT 100

## Retrieve jobs performed through the Deployment Manager

The following query retrieves the details of the job performed through Deployment Manager

SELECT \* FROM auditobjectchangeevent WHERE Month=10 and Year=2024

## Note

To get high-performance queries, always use the `year` , `month` , or `day` fields in the WHERE clause of a SQL query when exporting Audit Trail records through Data Query.
