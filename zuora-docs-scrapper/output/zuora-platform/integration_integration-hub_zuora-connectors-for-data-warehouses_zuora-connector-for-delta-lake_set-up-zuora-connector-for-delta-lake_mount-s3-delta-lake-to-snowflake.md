---
title: "Mount S3 Delta Lake to Snowflake"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-delta-lake/set-up-zuora-connector-for-delta-lake/mount-s3-delta-lake-to-snowflake"
product: "zuora-platform"
scraped_at: "2026-02-19T03:33:48.606Z"
---

# Mount S3 Delta Lake to Snowflake

Learn how to S3 Delta Lake to Snowflake

Note:

Protocol MinReader Version: Snowflake requires delta lake tables compatible with Protocol MinReader Version 2.

1.  Open a Snowflake client.
2.  Execute the following SQL, choose your frequency based on desired data freshness:

    CREATE OR REPLACE CATALOG INTEGRATION delta\_catalog\_name CATALOG\_SOURCE = OBJECT\_STORE TABLE\_FORMAT = DELTA ENABLED = TRUE; CREATE OR REPLACE EXTERNAL VOLUME ext\_volume\_name STORAGE\_LOCATIONS = ( ( NAME = 'some\_name' STORAGE\_PROVIDER = S3 ... ) ) ALLOW\_WRITES = FALSE; CREATE ICEBERG TABLE schema.table\_name CATALOG = delta\_catalog\_name EXTERNAL\_VOLUME = ext\_volume\_name BASE\_LOCATION = '<configured\_path>/<table\_name>'; CREATE OR REPLACE TASK task\_name SCHEDULE = 'USING CRON 0/5 \* \* \* \* America/Los\_Angeles' -- Runs every 5 minutes, change cron to match desired freshness ... AS ALTER ICEBERG TABLE schema.table\_name REFRESH;
