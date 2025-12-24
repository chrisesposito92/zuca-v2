---
title: "Schema evolution in Zuora Data Warehousing Connectors"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/schema-evolution-in-zuora-data-warehousing-connectors"
product: "zuora-platform"
scraped_at: "2025-12-24T08:39:22.242Z"
---

# Schema evolution in Zuora Data Warehousing Connectors

Automatically adapt to safe schema changes in your destination system with Zuora's Data Warehousing Connectors

As your Zuora objects, custom objects, or fields evolve over time, the schema of your data in the destination system may also change. Zuora’s Data Warehousing Connectors are designed to automatically evolve the schema in your destination system whenever changes occur.

Whenever there's a schema update, the connectors will apply permissible schema evolution operations on the next data transfer to ensure smooth updates without disrupting your destination system.

However, schema evolution is limited to safe and non-destructive changes to prevent unintended data issues.

## How schema evolution works

The following table explains how schema evolution works:

| Schema Change | Behavior for Future Rows | Behavior for Previously Loaded Rows |
| --- | --- | --- |
| Adding a new column | Column is added to all future transfers and populated moving forward. | Older rows will not be backfilled and will show NULL for this column unless a backfill request is made. |
| Deleting a column | New rows will no longer populate this column (column remains NULL). | Previously inserted rows will still retain the column but with existing values. |
| Adding a new table | The table will be created and populated on the next scheduled transfer. | Not applicable (it's a new table). |
| Deleting a table | The table is no longer transferred to the destination. | The table remains in the destination but is no longer updated. |

## Limitations and workarounds

While Zuora connectors handle many schema changes automatically, some changes require manual intervention to ensure data integrity.

The following table lists key limitations and the respective resolutions:

| Schema Change | Limitation | Workaround |
| --- | --- | --- |
| Changing a column's data type | Most destinations do not allow direct data type changes. | This change is treated as a column deletion + new column addition. Request a manual refresh to re-onboard the object with the new data type. |
| Reusing column names | Column names cannot be reused to avoid schema conflicts. | Request a manual refresh to clean up and re-onboard the object. If your destination caches schema, ensure old columns are removed before re-adding them. |
| Renaming a column (A → B) | The connector treats this as a new column (B) being added and the old column (A) being removed. | Historical data is not backfilled into the new column (B). If needed, request a manual refresh to migrate data. When a column is removed, the connector stops updating it with new values, but it will not physically remove it from the destination table. |
| Reusing table names or renaming objects | Custom objects cannot reuse standard object names, and table name conflicts can cause destination errors. | The connector prevents unintentional reuse. If necessary, manually clean up the destination schema before re-onboarding. |

## Key considerations

Here are the key considerations for schema evolution:

-   Schema changes happen automatically during the next transfer, but only for safe and non-destructive changes.

-   If data type changes, column renaming, or reuse of names is needed, manual intervention is required.

-   No data loss occurs; the connector ensures that historical data is preserved where applicable.

-   If you need a full refresh due to schema changes, submit a request for a manual re-onboarding.
