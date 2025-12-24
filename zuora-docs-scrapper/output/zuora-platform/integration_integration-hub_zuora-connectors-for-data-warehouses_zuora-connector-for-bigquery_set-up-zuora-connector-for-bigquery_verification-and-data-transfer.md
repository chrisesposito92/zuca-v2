---
title: "Verification and data transfer"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-bigquery/set-up-zuora-connector-for-bigquery/verification-and-data-transfer"
product: "zuora-platform"
scraped_at: "2025-12-24T18:30:55.590Z"
---

# Verification and data transfer

Data is loaded into your configured BigQuery tables and can be queried directly using SQL or analytics tool

For Google BigQuery, your data will be loaded into the specified datasets and tables that you have configured during the setup process. You can access and query this data directly within your BigQuery environment using SQL queries or through integrated analytics tools.

## Format of transferred data

Here is information on the format of transferred data:

-   Data transferred to Google BigQuery is loaded as properly typed tables within a single schema. Each table corresponds to a distinct dataset or entity from your Zuora data.

-   In BigQuery, the `last_updated` timestamp for a table is already accessible in the `__TABLES_SUMMARY__`metatable.

-   The exact structure and organization of your transferred data within BigQuery will be determined by the configurations you've specified during the setup process. This ensures that your data is seamlessly integrated into your existing BigQuery environment, ready for analysis and reporting.
