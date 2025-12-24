---
title: "Handling duplicates in Azure Blob Storage Extracts for Zuora data"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-azure-blob-storage/handling-duplicates-in-azure-blob-storage-extracts-for-zuora-data"
product: "zuora-platform"
scraped_at: "2025-12-24T08:40:55.240Z"
---

# Handling duplicates in Azure Blob Storage Extracts for Zuora data

How to handle duplicates in Azure Blob Storage Extracts for Zuora Data

Azure Blob Storage is append-only for Zuora exports. Updates result in new rows in the Parquet files. Directly querying these files can make it look like there are duplicate records.

Duplicates appear if multiple updates occur for the same `subscription.id` between extract runs. Multiple rows will exist.

Note:

This is expected behavior and does not indicate errors or data loss.

## Dealing with duplicates

Deduplicate before querying:

-   Apply merge logic based on primary key (subscription.id).

-   You can apply merge logic by using Azure Synapse, Spark, or other query engines on top of Blob Storage.

-   Use views or queries to keep only the latest version of each record.


Feed into a downstream warehouse (if available):

-   Load the Parquet files into Synapse, Snowflake, or Redshift.

-   Perform upsert/merge to produce a clean, single-version view.


Note:

Always apply deduplication or merge logic before consumption to ensure data correctness in analytics.
