---
title: "Get started with Zuora Connectors for Data Warehouse"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/get-started-with-zuora-connectors-for-data-warehouse"
product: "zuora-platform"
scraped_at: "2026-02-20T21:12:14.328Z"
---

# Get started with Zuora Connectors for Data Warehouse

The prerequisites for Zuora Connectors for Data Warehouses

## Before you begin

To start using Zuora Connectors for Data Warehouses, you must have the following information:

-   Your Zuora Tenant ID

-   A clear understanding of your specific data export needs


Access to specific data connectors may require purchasing a paid add-on. To determine eligibility, please contact your Zuora representative directly. In order to maintain confidentiality, Zuora recommends not publicly sharing the pricing information and other terms.

For additional information on each connector, including detailed setup instructions and configuration requirements, navigate to the Knowledge Center page specific to the connector listed in [Available Connectors](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/available-connectors).

Note:

The time for set up and the initial data refresh for Zuora Data Connectors may vary depending on the volume of data in your tenant.

## Verification and data transfer

Once the connection is successfully established, Zuora will begin transferring your data to the configured destination. Depending on the destination you have chosen, you will start seeing your data populating in the designated area. This could be one among the specific project ID, bucket name, database schema, or another setup parameter unique to your chosen platform.

Note:

The exact location where your data will appear is determined by the configurations you have implemented, which are based on the specific connector’s setup instructions.

Your data could be located in any one of the following locations:

-   Project ID for BigQuery

-   A bucket name for object storage solutions

-   A database schema for SQL databases


## Data refresh rate

The connector supports latency options 12 and 24 hours.
