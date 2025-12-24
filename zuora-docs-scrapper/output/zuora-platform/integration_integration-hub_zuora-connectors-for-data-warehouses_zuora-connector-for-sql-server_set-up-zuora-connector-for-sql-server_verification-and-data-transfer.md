---
title: "Verification and data transfer"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-sql-server/set-up-zuora-connector-for-sql-server/verification-and-data-transfer"
product: "zuora-platform"
scraped_at: "2025-12-24T18:33:13.195Z"
---

# Verification and data transfer

Automated synchronization of data to the SQL Server connector

Once data synchronization is configured with the SQL Server connector, the data is automatically transferred to the specified SQL Server database. This enables direct access and querying of the data within your SQL Server environment or through compatible data analysis tools. You can seamlessly manage and analyze this data within your SQL Server ecosystem.

## Format of transferred data

For SQL Server, the transferred data will be loaded as properly typed tables within a single schema in the database. Additionally, a special \_`transfer_status` table will be created within the schema to record transfer metadata, specifically including a transfer`_last_updated_at` timestamp for each table. This table helps track the last update time for the transferred data, facilitating data management and synchronization processes.
