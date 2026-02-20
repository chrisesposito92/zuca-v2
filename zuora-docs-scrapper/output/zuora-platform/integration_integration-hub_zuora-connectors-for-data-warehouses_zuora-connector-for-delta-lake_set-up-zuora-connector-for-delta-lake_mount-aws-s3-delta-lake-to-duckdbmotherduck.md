---
title: "Mount  AWS S3 Delta Lake to DuckDB/MotherDuck"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-delta-lake/set-up-zuora-connector-for-delta-lake/mount-aws-s3-delta-lake-to-duckdbmotherduck"
product: "zuora-platform"
scraped_at: "2026-02-20T21:13:24.142Z"
---

# Mount AWS S3 Delta Lake to DuckDB/MotherDuck

Learn how to mount AWS S3 Delta Lake to DuckDB/MotherDuck

Column Mapping: DuckDB requires delta lake tables use column mapping mode `NONE`.

Note:

Secrets Manager: DuckDB has a [secrets manager](https://duckdb.org/docs/stable/configuration/secrets_manager.html) which can be used in order for the access key or role information to not need to be included in the `CREATE TABLE...` syntax.

1.  Install the [DuckDB Delta extension](https://duckdb.org/docs/stable/extensions/delta.html).
2.  Open a DuckDB SQL session.
3.  Execute the following SQL:

    CREATE VIEW schema.table\_name AS SELECT \* FROM deltaLake( 's3://bucket-name/<configured\_path>/<table\_name>', '<AWS\_ACCESS\_ID>', '<AWS\_SECRET\_KEY>' );
