---
title: "Export deleted data"
url: "https://docs.zuora.com/en/zuora-platform/data/aggregate-query-api-aqua/post-query/export-deleted-data"
product: "zuora-platform"
scraped_at: "2025-12-24T18:51:45.282Z"
---

# Export deleted data

Export deleted data using the AQuA API, which retains deleted data for 30 days, and highlights the differences between stateful and stateless modes.

AQuA API is subject to Zuora Data Retention Policy. The retention period of deleted data is 30 days. You can only retrieve deleted data for 30 days through AQuA.

This article describes how to export deleted data in stateful mode. To export deleted data in stateless mode, see Extract deleted data in each query.

Note:

Zuora highly recommends you use the stateless mode instead of the stateful mode to extract bulk data. See Bulk data extraction from Zuora using AQuA for best practices.

Starting with version 1.1, the AQuA API supports the exporting of deleted records in Stateful mode.

In Stateful mode, the first request executes queries against all data in the database and returns all data that satisfies the query criteria. Deleted records are not included in the export.

Subsequent requests execute the queries against incremental data created or updated since the previous AQuA session. Subsequent requests can also execute the queries against data that has been deleted since the previous AQuA session. To include deleted records in an export, set the `deleted` field in the request body when making the request.

When you export data that includes deleted records, the export has an additional column that indicates whether each record is a deleted record. You can specify the name and format of this additional column.

## Limitations

-   The following API objects do not support the exporting of deleted records:

    -   PaymentTransactionLog

    -   RefundTransactionLog

    -   AccountingCode

    -   AccountingPeriod

    -   Processed Usage

-   The DiscountAppliedMetrics object does not support soft delete.

-   You cannot extract the records that were both created and deleted during the same interval between two consecutive incremental AQuA queries.


## Request

Use the [Submit an aggregate query job](https://www.zuora.com/developer/api-references/api/operation/POST_BatchQueryJob/) API operation with the `queries`\>`deleted` parameter to export deleted data.
