---
title: "Delete data from staging table"
url: "https://docs.zuora.com/en/zuora-platform/data/aggregate-query-api-aqua/bulk-data-extraction-from-zuora-using-aqua/delete-data-from-staging-table"
product: "zuora-platform"
scraped_at: "2025-12-24T18:51:37.481Z"
---

# Delete data from staging table

View the SQL syntax and guidelines for efficiently deleting data from the staging table using the TRUNCATE command.

Use the following SQL syntax to delete all data from the staging table:

TRUNCATE account\_staging

Note that `TRUNCATE` is preferable to `DELETE` because it can free up system resources.

## Load incremental batch into staging table

When loading the data source records in the incremental batch into the staging table, Zuora recommends that you use a performant batch load technology supported by your database rather than issuing an `INSERT` statement row by row.

Note that `is_deleted` must be one column of the table, and one CSV field returned by AQuA. This helps you correctly handle deleted records.

## Delete changed or deleted data from query table

In the query table, delete any row that has the same Id as a row in the staging table. In other words, you should delete all the records of the objects that were changed or deleted during the query interval of this incremental batch.

See the following SQL syntax:

DELETE FROM account WHERE id IN (SELECT id FROM account\_staging)

## Insert new and updated records

In the query table, insert all the new and updated records from the staging table. Make sure that you exclude the deleted records in the staging table.

See the following SQL syntax:

INSERT INTO account (SELECT \* FROM account\_staging WHERE deleted = false)
