---
title: "Create audit trail export job API"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meters/metering-apis/create-audit-trail-export-job-api"
product: "zuora-platform"
scraped_at: "2025-12-24T05:28:38.156Z"
---

# Create audit trail export job API

The audit trail export job API provides large-scale, offline access to audit data.

You can initiate a background export job and choose whether to export error records only or a sample of records. You can also select the file format. The file format is CSV by default, but Parquet and Avro are supported through configuration. Only one export job is processed per tenant at a time, and each export has a record limit. For example, up to 5M rows per report.

## Filters

-   Run type (DEBUG vs NORMAL)

-   Session IDs

-   Operator IDs

-   Time ranges

-   Run statuses (FAILED, COMPLETED, RUNNING)


## Usage

-   Feed data to your data warehouse or lake. Run exports daily or hourly, then load them into:

    -   Snowflake / BigQuery / Redshift

    -   Data lakes (S3-based, etc.)

    -   Your internal analytics platform.

-   Deep-dive analytics. Once exported, you can:

    -   Join audit data with customer/account metadata.

    -   Build dashboards like “Top recurring error codes by operator” or “Error rate by region/product”.

    -   Run ad-hoc queries to understand long-running patterns.

-   Compliance and long-term storage:
    -   Keep immutable records of what happened during rating/metering.

    -   Provide exports as evidence for audits or regulatory reviews.

    -   Share scoped CSVs with internal or external teams without giving them live API access.
