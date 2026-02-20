---
title: "Read S3 Delta Lake with PySpark"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-delta-lake/set-up-zuora-connector-for-delta-lake/read-s3-delta-lake-with-pyspark"
product: "zuora-platform"
scraped_at: "2026-02-20T21:13:53.519Z"
---

# Read S3 Delta Lake with PySpark

Learn how to read S3 Delta Lake with PySpark

Note:

Broad Compatibility: Spark can consume Delta Lake tables from S3, Google Cloud Storage, Azure Blob Storage, or other S3 compatible object stores. Delta Lake reads can be done in Java, Python, or Scala Spark.

In your PySpark code, run the following to instantiate a dataframe backed by your delta table:

df = spark.read.format("delta").load("s3://bucket-name/<configured\_path>/<table\_name>")
