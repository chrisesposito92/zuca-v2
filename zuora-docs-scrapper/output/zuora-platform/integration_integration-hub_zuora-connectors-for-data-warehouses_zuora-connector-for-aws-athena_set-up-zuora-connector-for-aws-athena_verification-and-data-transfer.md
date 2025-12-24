---
title: "Verification and data transfer"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aws-athena/set-up-zuora-connector-for-aws-athena/verification-and-data-transfer"
product: "zuora-platform"
scraped_at: "2025-12-24T08:40:00.034Z"
---

# Verification and data transfer

Automated synchronization to AWS Athena connector

Once data synchronization is configured with the AWS Athena connector, the data is automatically transferred to the specified AWS Athena environment. This enables direct access and querying of the data within AWS services or through compatible data analysis tools. You can seamlessly manage and analyze this data across your AWS ecosystem.

## Format of transferred data

Data transferred to the AWS S3 destination for AWS Athena will be loaded as Apache Parquet files in Apache Hive style partitions. The data organization structure is detailed below:

`<bucket_name>/<folder_name>/<model_name>/dt=<transfer_date>/<file_part>_<transfer_timestamp>.parquet`

where:

-   `<bucket_name>` and `<folder_name>` are provided during destination configuration.
-   `<model_name>` is the name of the data model being transferred (this is equivalent to a table name in relational data destinations).
-   `<transfer_date>` and `<transfer_timestamp>` are generated at transfer time and based on the transfer's start time. `<transfer_date>` is of the form `2006-01-01`, while `<transfer_timestamp>`is of the form `20060102150405`.
-   `<file_part>` is a monotonically increasing integer for a given timestamp, and does not carry any special meaning.

This structure allows for efficient storage and querying of data within AWS Athena, providing seamless access for analytics and data processing tasks.

## Apache Hive style partitions and Apache Parquet file format

-   Apache Hive style partitions are compatible with most popular query engines, and should make data easily queryable and transportable.
-   Apache Parquet file format is an open source, column-oriented data file format that offers efficient data compression and data integrity.
