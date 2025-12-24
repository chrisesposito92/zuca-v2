---
title: "Use Data Query through API"
url: "https://docs.zuora.com/en/zuora-platform/data/data-query/overview-of-data-query/use-data-query-through-api"
product: "zuora-platform"
scraped_at: "2025-12-24T18:40:15.584Z"
---

# Use Data Query through API

Learn how to export data from your Zuora tenant through Data Query API.

You can use the [Data Query API](https://developer.zuora.com/v1-api-reference/api/tag/Data-Queries/) to submit queries, check the status of queries, and obtain the exported data.

1.  Construct a SQL query.

    SELECT accountnumber, balance FROM Account WHERE Account.balance > 100

    For example: See [Constructing SQL Queries in Data Query](/zuora-platform/data/data-query/construct-sql-queries-in-data-query) for the supported SQL syntax, the available tables, and sample queries.

2.  Call Submit data query to submit the query and create a query job. Provide the query in the request body.
    You can request the query results in CSV, TSV, DSV or JSON format.

3.  Call [Get data query job](https://developer.zuora.com/v1-api-reference/api/operation/GET_DataQueryJob/) in the API or check your query listed on the Data Query page to track the status of the query job. Depending on the complexity of the query, you may need to call "Get data query job" several times, until the value of `queryStatus` in the response body is `completed` , `failed` , or `cancelled`.
    When the query job is complete, you can obtain the URL of the query results from the response body. For example:
    `https://example.s3.us-west-2.amazonaws.com/3a3e85c4-96e7-486b-ae02-827120104301_24921638725108715.json?X-Amz-Security-Token=...`

4.  Download the query results. Each row in the query results contains the requested fields of an object in your Zuora tenant. For example: If you requested the query results in JSON format, each row in the query results is a JSON object. The query results are not wrapped in a JSON array. For example:

    accountnumber,balance A00253588,230.0 A00253573,125.0 A00255366,199.95 ... {"accountnumber":"A00253588","balance":230.0} {"accountnumber":"A00253573","balance":125.0} {"accountnumber":"A00255366","balance":199.95} ...
