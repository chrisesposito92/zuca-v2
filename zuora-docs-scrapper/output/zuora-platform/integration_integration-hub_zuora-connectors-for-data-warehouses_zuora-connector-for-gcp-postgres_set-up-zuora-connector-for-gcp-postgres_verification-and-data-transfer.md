---
title: "Verification and data transfer"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-gcp-postgres/set-up-zuora-connector-for-gcp-postgres/verification-and-data-transfer"
product: "zuora-platform"
scraped_at: "2025-12-24T18:31:31.560Z"
---

# Verification and data transfer

Automatically sync and access data directly in your GCP Postgres environment

Once data synchronization is configured with the GCP Postgres connector, the data is automatically transferred to the specified GCP Postgres database. This enables direct access and querying of the data within your GCP Postgres environment or through compatible data analysis tools. You can seamlessly manage and analyze this data within your GCP Postgres ecosystem.

## Format of transferred data

For GCP Postgres, the transferred data will be loaded as properly typed tables within a single schema in the database. Additionally, a special`_transfer_status` table will be created within the schema to record transfer metadata, specifically including a `transfer_last_updated_at`timestamp for each table. This table helps track the last update time for the transferred data, facilitating data management and synchronization processes.
