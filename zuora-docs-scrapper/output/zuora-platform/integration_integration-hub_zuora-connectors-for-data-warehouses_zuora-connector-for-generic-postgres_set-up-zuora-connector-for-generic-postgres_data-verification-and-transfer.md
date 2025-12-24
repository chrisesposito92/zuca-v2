---
title: "Data verification and transfer"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-generic-postgres/set-up-zuora-connector-for-generic-postgres/data-verification-and-transfer"
product: "zuora-platform"
scraped_at: "2025-12-24T18:32:27.890Z"
---

# Data verification and transfer

Sync data to Generic Postgres for seamless access, querying, and analysis.

Once data synchronization is configured with the Generic Postgres connector, the data is automatically transferred to the specified Postgres database. This enables direct access and querying of the data within your Postgres environment or through compatible data analysis tools. You can seamlessly manage and analyze this data within your Postgres ecosystem.

## Format of transferred data

For Generic Postgres, the transferred data will be loaded as properly typed tables within a single schema in the database. Additionally, a special`_transfer_status`table will be created within the schema to record transfer metadata, specifically including a `transfer_last_updated_at` timestamp for each table. This table helps track the last update time for the transferred data, facilitating data management and synchronization processes.
