---
title: "Mount  S3 Delta Lake to Databricks (Unity)"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-delta-lake/set-up-zuora-connector-for-delta-lake/mount-s3-delta-lake-to-databricks-unity"
product: "zuora-platform"
scraped_at: "2026-02-19T03:33:48.549Z"
---

# Mount S3 Delta Lake to Databricks (Unity)

Learn how to mount S3 Delta Lake to Databricks (Unity)

1.  Ensure your Databricks session has read access to the configured bucket.
2.  Open a Databricks SQL session.
3.  Execute the following SQL:

    CREATE VIEW schema.table\_name AS SELECT \* FROM delta.\`s3a://bucket-name/metastore/<configured\_path>/<table\_name>\` );
