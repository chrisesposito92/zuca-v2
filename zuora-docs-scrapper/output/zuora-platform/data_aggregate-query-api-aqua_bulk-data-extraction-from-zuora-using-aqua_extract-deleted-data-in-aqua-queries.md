---
title: "Extract deleted data in AQuA queries"
url: "https://docs.zuora.com/en/zuora-platform/data/aggregate-query-api-aqua/bulk-data-extraction-from-zuora-using-aqua/extract-deleted-data-in-aqua-queries"
product: "zuora-platform"
scraped_at: "2025-12-24T18:51:29.940Z"
---

# Extract deleted data in AQuA queries

Learn how to extract deleted data in AQuA queries by setting the forceExport parameter to true within the deleted section.

Note:

AQuA API is subject to Zuora Data Retention Policy. The retention period of deleted data is 30 days. You can only retrieve deleted data for 30 days through AQuA.

For each query, make sure that you set the `forceExport` to `true` within `deleted` .

See the following example for a batch of queries in stateless mode:

{ "format": "csv", "version": "1.0", "name": "replication-client", "useQueryLabels": true, "encrypted": "none", "queries": \[ { "name": "query", "query": "select Id from account where UpdatedDate >= '2018-01-03T00:00:00' and UpdatedDate < '2018-01-04T00:00:00'", "type": "zoqlexport", "apiVersion": "96.0", "deleted": { "column": "is\_deleted", "format": "Boolean", "forceExport": true } }, { "name": "query", "query": "select Id from subscription where UpdatedDate >= '2018-01-03T00:00:00' and UpdatedDate < '2018-01-04T00:00:00'", "type": "zoqlexport", "apiVersion": "96.0", "deleted": { "column": "is\_deleted", "format": "Boolean", "forceExport": true } } \] }
