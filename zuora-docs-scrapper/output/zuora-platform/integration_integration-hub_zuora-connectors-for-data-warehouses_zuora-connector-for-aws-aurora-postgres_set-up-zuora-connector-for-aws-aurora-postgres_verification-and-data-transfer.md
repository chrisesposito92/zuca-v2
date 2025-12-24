---
title: "Verification and data transfer"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aws-aurora-postgres/set-up-zuora-connector-for-aws-aurora-postgres/verification-and-data-transfer"
product: "zuora-platform"
scraped_at: "2025-12-24T08:40:22.434Z"
---

# Verification and data transfer

Automatically sync and access data directly in your AWS Aurora Postgres environment

Once data synchronization is configured with the AWS Aurora Postgres connector, the data is automatically transferred to the specified AWS Aurora Postgres database. This enables direct access and querying of the data within your AWS Aurora Postgres environment or through compatible data analysis tools. You can seamlessly manage and analyze this data within your AWS Aurora Postgres ecosystem.

## Format of transferred data

For AWS Aurora Postgres, the transferred data will be loaded as properly typed tables within a single schema in the database. Additionally, a special `_transfer_status` table will be created within the schema to record transfer metadata, specifically including a `transfer_last_updated_at`timestamp for each table. This table helps track the last update time for the transferred data, facilitating data management and synchronization processes.
