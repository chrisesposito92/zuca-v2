---
title: "Handling duplicates in Google Cloud Storage extracts for Zuora data"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-google-cloud-storage/handling-duplicates-in-google-cloud-storage-extracts-for-zuora-data"
product: "zuora-platform"
scraped_at: "2025-12-24T18:32:55.572Z"
---

# Handling duplicates in Google Cloud Storage extracts for Zuora data

Know how to handle duplicates in GCS extracts for Zuora data

Google Cloud Storage (GCS) is append-only for Zuora exports. Updated records are appended to Parquet files. Querying these files directly may show apparent duplicates.

Duplicates appear because multiple updates to the same record between extracts result in multiple rows with the same primary key.

Note:

This is expected behavior and does not indicate errors or data loss.

## Dealing with duplicates

Deduplicate before querying:

-   Merge records based on primary key (subscription.id) to retain only the latest version.

-   You can merge records by using BigQuery external tables, Spark, or other query engines on top of GCS.


Feed into a downstream warehouse (if available):

-   Load Parquet files into BigQuery, Redshift, or Snowflake.

-   Perform upsert/merge to maintain a clean, single-version view.


Note:

Deduplication or merge logic is required for accurate analytics when using append-only object storage like GCS.
