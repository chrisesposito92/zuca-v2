---
title: "QueryResult"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-complex-types/soap-api-complex-types/queryresult"
product: "zuora-platform"
scraped_at: "2025-12-24T05:45:26.551Z"
---

# QueryResult

The QueryResult object provides the result of the query() call.

## Field descriptions

All field names are case sensitive.

| Field | Description |
| --- | --- |
| done | A boolean value indicating whether the query is complete true or not false . You can use this value as a loop condition while iterating through the results of your query. |
| queryLocator | A specialized string of type zns: QueryLocator that essentially identifies where in the record the query "cursor" is. This is the identifier to use if there are more records. |
| records | An array of zObjects. Each item in the array is an object of the specified type containing data specified by the query string. |
| size | An int indicating the size of the query as a total number of rows retrieved. You can use this to check whether any rows were retrieved in the query. If size is equal to zero, then no rows were retrieved. |
