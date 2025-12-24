---
title: "Data loading steps"
url: "https://docs.zuora.com/en/zuora-platform/data/aggregate-query-api-aqua/bulk-data-extraction-from-zuora-using-aqua/data-loading-steps"
product: "zuora-platform"
scraped_at: "2025-12-24T18:51:35.209Z"
---

# Data loading steps

Follow these steps to perform a single load operation of a data source, ensuring data consistency and freshness in your data warehouse.

To complete a single load operation of a data source, Zuora recommends the following steps:

1.  Delete all data from the staging table
2.  Load incremental batch into the staging table
3.  Delete from the query table any row that has the same Id as a row in the staging table
4.  Insert into the query table all the rows whose `is_deleted` is `false` in the staging table

    Zuora recommends that you script all the steps for all data sources so that you can perform them in a single transaction. In this way, your data warehouse clients always query against a consistent snapshot of the complete data set.

    You can keep track of how fresh the data in the data warehouse is by maintaining a data freshness table of data sources and their last update dates.
