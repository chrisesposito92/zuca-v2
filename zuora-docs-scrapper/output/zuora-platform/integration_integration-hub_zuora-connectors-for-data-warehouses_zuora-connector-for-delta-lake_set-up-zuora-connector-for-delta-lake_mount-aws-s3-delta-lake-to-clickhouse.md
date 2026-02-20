---
title: "Mount AWS S3 Delta Lake to Clickhouse"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-delta-lake/set-up-zuora-connector-for-delta-lake/mount-aws-s3-delta-lake-to-clickhouse"
product: "zuora-platform"
scraped_at: "2026-02-20T21:13:36.964Z"
---

# Mount AWS S3 Delta Lake to Clickhouse

Learn how to mount AWS S3 Delta Lake to Clickhouse

Note:

Managed Credentials: Clickhouse supports [managed credentials](https://clickhouse.com/docs/integrations/s3#managing-credentials) so that access key or role information does not need to be included in the `CREATE TABLE...` syntax.

1.  Open a Clickhouse SQL session.
2.  Execute the following SQL:

    CREATE TABLE schema.table\_name AS ENGINE = DeltaLake( 's3://bucket-name/<configured\_path>/<table\_name>', '<AWS\_ACCESS\_ID>', '<AWS\_SECRET\_KEY>' );
