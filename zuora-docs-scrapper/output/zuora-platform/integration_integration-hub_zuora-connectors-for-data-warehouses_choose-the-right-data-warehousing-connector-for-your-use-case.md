---
title: "Choose the right data warehousing connector for your use case"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/choose-the-right-data-warehousing-connector-for-your-use-case"
product: "zuora-platform"
scraped_at: "2025-12-24T08:39:11.849Z"
---

# Choose the right data warehousing connector for your use case

Choose the right data warehousing connector and understand how data transfer works

Note:

The Zuora Connector for Data Warehouses feature is in the Early availability phase. This is a paid add-on. If you are interested in joining our early availability program, please reach out to your Zuora Representative for further details.

Zuora offers a variety of connectors to export your data to cloud data warehouses, object storage, OLTP databases, and other destinations. Each connector has its own strengths and considerations, especially when handling large volumes of data. This guide will help you choose the right connector for your needs and understand how data transfer works.

## Connector performance and use case suitability

The following table provides the list of connectors, their types, recommended use cases, and notes or limitations:

| Connector | Type | Recommended use case | Notes / limitations |
| --- | --- | --- | --- |
| Zuora Connector for AWS Redshift | Data Warehouse | High-volume analytics, reporting | No limitations |
| Zuora Connector for BigQuery | Data Warehouse | High-volume analytics, reporting | No limitations |
| Zuora Connector for Databricks | Data Warehouse | Analytics, large datasets | No limitations |
| Zuora Secure Data Share for Snowflake | Data Warehouse (Secure Share) | Read-only access for analytics | Only read-only views; no data movement |
| Zuora Connector for Generic ClickHouse | Data Warehouse | Analytics, large datasets | No limitations |
| Zuora Connector for Generic Postgres | OLTP Database | Operational DB use, low-to-medium volume | Parameter limits may impact transfer speed |
| Zuora Connector for AWS RDS Postgres | OLTP Database | Operational DB use, low-to-medium volume | Parameter limits may impact transfer speed |
| Zuora Connector for AWS Aurora Postgres | OLTP Database | Operational DB use, low-to-medium volume | Parameter limits may impact transfer speed |
| Zuora Connector for Generic MySQL | OLTP Database | Operational DB use, low-to-medium volume | Parameter limits may impact transfer speed |
| Zuora Connector for Aurora MySQL | OLTP Database | Operational DB use, low-to-medium volume | Parameter limits may impact transfer speed |
| Zuora Connector for SQL Server | OLTP Database | Operational DB use, low-to-medium volume | Parameter limits may impact transfer speed; large backfills are batched internally by Zuora; consider warehouse/object storage for high-volume use |
| Zuora Connector for AWS S3 | Object Storage | High-volume exports, analytics | No limitations; Parquet recommended |
| Zuora Connector for Google Cloud Storage | Object Storage | High-volume exports, analytics | No limitations; Parquet recommended |
| Zuora Connector for Azure Blob Storage | Object Storage | High-volume exports, analytics | No limitations; Parquet recommended |
| Zuora Connector for AWS Athena | Query / Analytics | Ad-hoc queries, analytics | No limitations |

Note:

-   Data Warehouse: Optimized for analytics and high-volume data transfers.

-   OLTP Database: Suitable for operational database workloads; may have slower runtimes for large datasets.

-   Object Storage: High-volume exports with flexible downstream integration; Parquet files are recommended.

-   Secure Share (Snowflake): Only read-only views are provided; no actual data movement occurs.


## Connector operations and performance considerations

Know how different connectors work and how they perform when accessing or transferring data across supported platforms:

1.  Data Warehouses - Redshift, BigQuery, Databricks, ClickHouse, Athena

    -   Optimized for large-scale data processing.

    -   Handles millions of rows efficiently with minimal transfer times.

    -   Ideal for high-volume analytics and reporting.

2.  Snowflake Secure Data Share

    -   Uses read-only views shared via Snowflake Secure Share.

    -   No actual data movement occurs; you only access the shared views.

    -   Provides secure, high-performance access to Zuora data.

3.  OLTP Databases - Postgres, MySQL, SQL Server, and so on

    -   Use parameterized inserts for secure transfers.

    -   Each database has a limit on query parameters:

        | Database | Max parameters per query |
        | --- | --- |
        | MySQL / Postgres | 65k |
        | SQL Server | 2.1k |

        Performance notes:

        -   Transfers of 1M+ rows can take 1+ hour, sometimes 10+ hours.

        -   Initial large backfills are batched internally by the Zuora support team during the first transfer, which may take additional time compared to other destinations.

        -   If each incremental transfer regularly contains over 1M rows, we recommend exploring alternative destinations, to the extent possible.

            -   Often, another destination type can fulfill the same use case. For example, customers using Microsoft SQL Server to load data into other Microsoft applications, for example Power BI, can leverage Delta Lake to load data into object storage and mount it to Microsoft Fabric or One Lake, reducing latency significantly versus SQL Server.


        Alternative destinations:

        -   For high-volume or latency-sensitive transfers, consider a data warehouse or object storage destination. For example, Delta Lake, S3, GCS.

        -   These alternatives can improve performance, reduce runtimes, and still support downstream analytics or applications.


        Best practices for OLTP destinations:

        -   Assess the use case: Determine if your OLTP database is primarily used to back a warehouse or BI tool. Direct exports to a data warehouse may improve performance.

        -   Consider alternative destinations: Use a warehouse or object storage for high-volume or latency-sensitive transfers. Parquet file format is recommended for efficiency.


        Decide based on your use case. If you are unsure, the Zuora support team can guide you based on trial evaluation. Contact the [Zuora support team](https://support.zuora.com/) to learn more.

4.  Object Storage - S3, GCS, Azure Blob

    -   Efficient for high-volume exports.

    -   Supports downstream analytics and integration with warehouses or BI tools.

    -   Recommended file format: Parquet. This is faster and more memory-efficient than CSV/JSON.


## Determine the right data warehousing connector

Use the following guidelines to determine the right connector:

-   High volume / fast performance: Use a data warehouse or object storage. Avoid OLTP databases for millions of rows.

-   OLTP use cases: Expect longer runtimes; large initial backfills are batched internally.

-   Incremental transfers: For transfers exceeding 1M rows, consider alternative destinations.

-   Microsoft application integrations: SQL Server may be required, but warehouses or object storage (Delta Lake) can improve performance.


## Important considerations

The following considerations will help you evaluate and select the most suitable connector for your environment:

-   Not all connectors handle data volumes equally; choose based on performance, volume, and intended use.

-   OLTP databases have throughput limitations.

-   Data warehouses (Redshift, BigQuery, Databricks, ClickHouse, Snowflake Secure Share) and object storage (S3, GCS, Azure Blob) are best for high-volume transfers.

-   File format matters: Parquet is recommended for efficiency.

-   For SQL Server use cases, consider warehouses or object storage (Delta Lake) to reduce latency.


Contact the [Zuora support team](https://support.zuora.com/) for guidance on the best connector for your use case.
