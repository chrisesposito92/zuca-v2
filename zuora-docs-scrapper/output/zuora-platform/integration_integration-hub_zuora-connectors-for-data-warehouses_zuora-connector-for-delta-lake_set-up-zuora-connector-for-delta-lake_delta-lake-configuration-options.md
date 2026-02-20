---
title: "Delta Lake configuration options"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-delta-lake/set-up-zuora-connector-for-delta-lake/delta-lake-configuration-options"
product: "zuora-platform"
scraped_at: "2026-02-20T21:13:36.030Z"
---

# Delta Lake configuration options

Learn about the Delta Lake configuration options

Note:

Changing these attributes on an existing destination table will not take effect until you perform a full refresh of the table.

## Protocol compatibility summary

The table below outlines the recommended settings for each feature to qualify for a given protocol minimum reader version. Adjust your configuration to match the protocol version required by your downstream readers.

| Protocol MinReader Version | Column Mapping Mode | Deletion Vectors | Change Data Feed |
| --- | --- | --- | --- |
| 1 | NONE | Disabled (Copy-on-Write) | Disabled |
| 2 | NONE | Disabled (Copy-on-Write) | Disabled |
| 3 | ID | Enabled (Merge-on-Read) | Enabled |

There are four key Delta Lake table properties that affect both performance and protocol compatibility. Adjust these settings carefully based on your performance needs and the protocol version supported by your readers.

## retention\_window\_days

Purpose: Sets the number of days for which historical data (e.g., previous table versions used for time travel or auditing) is retained.

Recommendation: Set this value according to your organization's internal data retention policies.

## column\_mapping\_mode

Purpose: Controls how columns are mapped between the underlying storage and the table schema. This setting is critical during schema evolution.

Recommendation: Set this to `ID` for robust, identifier-based mapping. Use a different setting (such as `NONE` or `NAME`) only if you need to support a lower protocol reader version.

## deletion\_vectors\_disabled

Purpose: Determines whether deletion vectors are used.

-   Deletion Vectors enable the merge-on-read approach, where modifications (like deletes) are applied by marking rows as deleted without rewriting the underlying Parquet files.

-   The traditional copy-on-write approach rewrites entire files for each change, which can be slower for small modifications.


Recommendation:

-   Enable deletion vectors (i.e., set `deletion_vectors_disabled` to false) to leverage merge-on-read performance benefits.

-   Disable deletion vectors if you must support a lower minimum reader version.


## change\_data\_feed\_disabled

Purpose: Controls whether the change data feed (CDF) is active. The CDF records row-level changes (inserts, updates, and deletes) for incremental processing, auditing, or real-time analytics.

Recommendation:

-   Keep change data feed enabled (i.e., set `change_data_feed_disabled` to false) by default.

-   Disable change data feed only if you need to support a lower minimum reader version.
