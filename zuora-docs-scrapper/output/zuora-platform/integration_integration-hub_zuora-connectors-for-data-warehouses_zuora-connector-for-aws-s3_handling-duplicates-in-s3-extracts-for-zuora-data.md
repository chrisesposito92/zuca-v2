---
title: "Handling duplicates in S3 extracts for Zuora data"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aws-s3/handling-duplicates-in-s3-extracts-for-zuora-data"
product: "zuora-platform"
scraped_at: "2025-12-24T18:30:31.567Z"
---

# Handling duplicates in S3 extracts for Zuora data

Know how to handle duplicates in S3 Extracts for Zuora Data

When consuming Zuora data from Amazon S3, it's important to know that S3 is append-only. Updates from Zuora create new rows in the Parquet files. Querying these raw files directly may make it appear as if there are duplicate records.

Duplicates appear because multiple rows for the same subscription.id can exist if there were updates between extract runs.

Note:

This behavior is expected and does not indicate data loss.

## Dealing with duplicates

Deduplicate before querying:

-   Apply logic to merge records based on primary key (subscription.id).

-   You can merge records in Athena or other SQL engines on top of S3.

-   Use views or query logic to select only the latest version of each record.


Feed into a downstream warehouse (if available):

-   Load Parquet files into Redshift, Snowflake, or BigQuery.

-   Perform upsert/merge for a clean, "exactly-once" view.


Note:

Always apply deduplication or merge logic before consumption to ensure data correctness.
