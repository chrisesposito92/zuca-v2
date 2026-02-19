---
title: "Data Warehouse Connectors Object Schema Definition"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/billing-objects-supported-for-zuora-connectors-for-data-warehouses/data-warehouse-connectors-object-schema-definition"
product: "zuora-platform"
scraped_at: "2026-02-19T03:31:58.752Z"
---

# Data Warehouse Connectors Object Schema Definition

Learn about the schema structure of Zuora's Data Warehouse Connectors and how it facilitates data export to external systems.

Zuora offers multiple ways to export your data to external systems. Understanding the schema structure is key to getting accurate and consistent insights. Zuora’s [Data Warehouse Connectors](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/available-connectors) for example Redshift, BigQuery, SQL Server, use a schema modeled after the AQuA schema similar to what's used in AQuA API. This enables a familiar experience when working with your exported data.

-   The schema mirrors Zuora’s internal data models as closely as possible.

-   Most fields follow the same structure and naming as defined in our [Data Source Availability](/zuora-platform/data/reporting/data-sources-and-exports/data-source-availability).

-   In some cases, related or implied fields (e.g., foreign keys or fields from associated objects) may also be included in the destination schema to help with joins across objects.


Note:

While these related fields can be helpful, we recommend relying primarily on direct fields that belong to the base object.

## Example: Understanding related field limitations

Let’s consider the `InvoiceItem` object:

-   Direct fields (e.g., `Id, SubscriptionID, ServiceStartDate` ) are stored and updated directly within the `InvoiceItem` table.

-   Implied or related fields like `JournalEntryItemId` may also appear in the schema to help you join with other tables such as `JournalEntry` .


However, during incremental syncs, our connector relies on the `UpdatedDate` of the base object ( `InvoiceItem` in this case) to determine what data needs to be updated. If a related object like `JournalEntry` is updated (but not the `InvoiceItem` itself), the connector will not detect this change, and the related field ( `JournalEntryItemId` ) may become outdated in your data platform. This can lead to inconsistencies when joining related objects, such as seeing a new entry in JournalEntry but an older, unmatched reference in InvoiceItem.

## Recommendation

-   Use direct fields for querying and analysis.

-   Avoid relying on related fields unless you have verified their consistency.
