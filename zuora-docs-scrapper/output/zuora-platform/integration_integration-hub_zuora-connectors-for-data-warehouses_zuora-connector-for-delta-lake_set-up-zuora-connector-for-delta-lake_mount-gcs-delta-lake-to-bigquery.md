---
title: "Mount GCS Delta Lake to BigQuery"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-delta-lake/set-up-zuora-connector-for-delta-lake/mount-gcs-delta-lake-to-bigquery"
product: "zuora-platform"
scraped_at: "2026-02-20T21:13:36.228Z"
---

# Mount GCS Delta Lake to BigQuery

Learn how to mount GCS Delta Lake to BigQuery

Note:

Protocol MinReader Version: BigQuery requires Delta Lake tables compatible with Protocol MinReader Version 3.

1.  In the Google Cloud console, navigate to the BigQuery Console.
2.  Click the \+ Add Data button at the top left of the console.
3.  Select Google Cloud Storage as a Data Source.
4.  Select the GCS: (Manual) BigLake External & External Tables: BigQuery option.
5.  Set the file format to Delta, then write provide the path expression `'<bucket-name>/<configured_path>/<table_name>'`
6.  Choose a Dataset in the same region as the bucket and a table name.
7.  Choose Table Type External Table.
8.  Create your external table and query data to test.

    Note:

    Schema Evolution: The external table must be manually refreshed anytime new columns are added. Consult GCP documentation for instructions.
