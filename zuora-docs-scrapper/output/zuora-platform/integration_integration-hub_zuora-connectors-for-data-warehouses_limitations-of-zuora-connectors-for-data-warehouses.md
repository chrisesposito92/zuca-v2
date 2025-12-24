---
title: "Limitations of Zuora Connectors for Data Warehouses"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/limitations-of-zuora-connectors-for-data-warehouses"
product: "zuora-platform"
scraped_at: "2025-12-24T08:39:20.239Z"
---

# Limitations of Zuora Connectors for Data Warehouses

Known limitations in the current version of Zuora Connectors for Data Warehouses

Note:

The Zuora Connector for Data Warehouses feature is in the Early availability phase. This is a paid add-on. If you are interested in joining our early availability program, please reach out to your Zuora Representative for further details.

This article describes the known limitations in the current version of Zuora Connectors for Data Warehouses

-   Revenue Objects are not supported in Zuora Data Connectors for Data Warehouses.

-   Multi-org functionality is not supported in Zuora Data Connectors for Data Warehouses i.e. Retrieved data may not be filtered based on user organization within a tenant.

-   The self-service connector configuration UI supports setup for only a single entity in multi-entity tenants. If multiple entities need to be connected, each entity must be configured manually.

-   Using OLTP destinations for large data volumes might result in slower performance, delays, or data processing issues. To address performance issues, consider optimizing database setup, adding more resources, or exploring specialized databases or data warehouses.

-   Schema evolution is limited to safe, non-destructive changes.

-   To prevent disruptions and conflicts in destination systems, avoid changing data types, reusing column names, or reusing table names; If performed, data type changes, column renames, and reused names require manual intervention. Learn more [here](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/schema-evolution-in-zuora-data-warehousing-connectors).
