---
title: "Mount AWS S3 Delta Lake to Athena"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-delta-lake/set-up-zuora-connector-for-delta-lake/mount-aws-s3-delta-lake-to-athena"
product: "zuora-platform"
scraped_at: "2026-02-19T03:33:35.367Z"
---

# Mount AWS S3 Delta Lake to Athena

Learn how to mount AWS S3 Delta Lake to Athena

Note:

Protocol MinReader Version: Athena requires delta lake tables compatible with Protocol MinReader Version 1.

1.  In the AWS console, navigate to the Athena query editor.
2.  Choose the same region as your configured bucket.
3.  Execute the following SQL:

    CREATE EXTERNAL TABLE IF NOT EXISTS schema.table\_name.= LOCATION 's3://bucket-name/<configured\_path>/<table\_name>' TBLPROPERTIES ('table\_type' = DELTA);
