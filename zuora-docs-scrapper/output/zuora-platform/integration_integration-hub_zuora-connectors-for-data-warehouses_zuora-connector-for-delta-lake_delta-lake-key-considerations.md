---
title: "Delta Lake key considerations"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-delta-lake/delta-lake-key-considerations"
product: "zuora-platform"
scraped_at: "2026-02-19T03:33:14.789Z"
---

# Delta Lake key considerations

Here are key considerations for Delta Lake

## Purpose of Delta Lake

Delta Lake delivers warehouse-native capabilities such as upserts, time travel, and schema evolution—with the simplicity, scalability, and secure permissions model of an object storage bucket. It gives you the advanced transactional features and data consistency of a data warehouse while eliminating extra compute costs and provisioning required to write directly to a warehouse. This enables your warehouse to be isolated from data sharing, so you can receive data without exposing your internal resources.

## Data deletion and permission requirements

Delta Lake uses vacuum operations to clean up obsolete data files and maintain transaction isolation. The writer must have delete permissions so that vacuuming can safely remove outdated files without compromising the consistency and isolation of ongoing transactions.

## Bucket structure and destination isolation

You can direct data to a specific prefix. However, we recommend using a completely isolated bucket to receive data. The Delta Lake destination requires permissions to list objects in the entire bucket, meaning all perms cannot be scoped to a specific prefix. Isolating the destination to a dedicated bucket minimizes security risks and reduces the chance of malformed data mixing with other datasets.

## Maintenance responsibilities

The data writer is responsible for vacuuming and compacting data as needed. Data consumers should not run any non read queries on the table.

## Detecting table updates

To check for updates, you can query the table history. In Spark or Databricks SQL, run:

DESCRIBE HISTORY table\_name LIMIT 1;

This command returns the most recent commit details. Additionally, most bucket providers offer the capability to trigger a webhook or lambda when objects are created. Configure the trigger to execute whenever a file is created in `s3://bucket-name/<configured_path>/<table_name>/_delta_log` to know when a table has been updated.

## Merge-on-Read vs. Copy-on-Write

-   Merge-on-Read:
    -   Uses deletion vectors to mark rows as deleted or modified without rewriting entire files. This approach speeds up incremental updates by applying changes during read time.
-   Copy-on-Write:
    -   Rewrites entire Parquet files upon any modification, which can be less efficient for small or frequent changes.
