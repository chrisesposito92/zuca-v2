---
title: "Verification and data transfer"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aws-s3/set-up-zuora-connector-for-aws-s3/verification-and-data-transfer"
product: "zuora-platform"
scraped_at: "2025-12-24T18:30:28.563Z"
---

# Verification and data transfer

Automated data synchronization to AWS S3

For the AWS S3 connector, once data synchronization is configured, the data is automatically transferred to the specified S3 bucket. This allows for direct access and querying of the data within AWS services or through compatible data analysis tools. You can manage and analyze this data seamlessly across your AWS ecosystem.

## Format of transferred data

When transferring data to AWS S3, the files are saved in Apache Parquet format, following an Apache Hive partitioning style.

The data organization structure is detailed below:

`<bucket_name>/<folder_name>/<model_name>/dt=<transfer_date>/<file_part>_<transfer_timestamp>.parquet`

where;

-   `<bucket_name>` and `<folder_name>` are provided during destination configuration.
-   `<model_name>` is the name of the data model being transferred (this is equivalent to a table name in relational data destinations).
-   `<transfer_date>` and `<transfer_timestamp>` are generated at transfer time and based on the transfer's start time. `<transfer_date>` is of the form `2006-01-01`, while `<transfer_timestamp>` is of the form `20060102150405`.
-   `<file_part>` is a monotonically increasing integer for a given timestamp, and does not carry any special meaning.

## Apache Hive style partitions and Apache Parquet file format

-   Apache Hive style partitions are compatible with most popular query engines and should make data easily query-able and transportable.
-   Apache Parquet file format is an open source, column-oriented data file format that offers efficient data compression and data integrity.
