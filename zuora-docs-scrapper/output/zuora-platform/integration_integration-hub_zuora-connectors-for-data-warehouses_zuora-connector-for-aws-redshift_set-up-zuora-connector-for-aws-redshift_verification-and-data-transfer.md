---
title: "Verification and data transfer"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aws-redshift/set-up-zuora-connector-for-aws-redshift/verification-and-data-transfer"
product: "zuora-platform"
scraped_at: "2025-12-24T08:40:32.865Z"
---

# Verification and data transfer

For AWS Redshift clusters, your data will be loaded into the specified database schema and tables that you have configured during the setup process.

You can access and query this data directly within your Redshift cluster using SQL queries or through integrated analytics tools.

## Format of transferred data

-   Data transferred to AWS Redshift clusters are loaded as properly typed tables within the specified schema. Each table corresponds to a distinct dataset or entity from your Zuora data.

-   In addition to the primary tables, a `special_transfer_status` table is created within the designated schema to capture transfer metadata. This table includes a `transfer_last_updated_at` timestamp for each dataset, providing insights into the timing of data updates.

-   The exact structure and organization of your transferred data within Redshift will be determined by the configurations that you have specified during the setup process. This ensures that your data is seamlessly integrated into your existing Redshift environment and ready for analysis and reporting.
