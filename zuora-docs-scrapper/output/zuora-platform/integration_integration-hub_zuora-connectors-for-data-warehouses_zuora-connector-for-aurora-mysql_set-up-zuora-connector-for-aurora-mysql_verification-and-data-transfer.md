---
title: "Verification and data transfer"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aurora-mysql/set-up-zuora-connector-for-aurora-mysql/verification-and-data-transfer"
product: "zuora-platform"
scraped_at: "2025-12-24T08:39:40.228Z"
---

# Verification and data transfer

Sync data to Aurora MySQL for seamless access, querying, and analysis

Once data synchronization is configured with the Aurora MySQL connector, the data is automatically transferred to the specified Aurora MySQL database. This enables direct access and querying of the data within your Aurora MySQL environment or through compatible data analysis tools. You can seamlessly manage and analyze this data within your Aurora MySQL ecosystem.

## Format of transferred data

For Aurora MySQL, the transferred data will be loaded as properly typed tables within a single schema in the database. Additionally, a special`_transfer_status`table will be created within the schema to record transfer metadata, specifically including a `transfer_last_updated_at` timestamp for each table. This table helps track the last update time for the transferred data, facilitating data management and synchronization processes.
