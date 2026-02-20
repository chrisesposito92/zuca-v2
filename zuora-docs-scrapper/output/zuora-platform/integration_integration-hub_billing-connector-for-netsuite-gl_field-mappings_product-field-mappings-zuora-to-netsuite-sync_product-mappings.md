---
title: "Product Mappings"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/field-mappings/product-field-mappings-zuora-to-netsuite-sync/product-mappings"
product: "zuora-platform"
scraped_at: "2026-02-20T21:11:41.627Z"
---

# Product Mappings

This task outlines the mapping of product fields between Zuora and NetSuite, detailing the source and destination fields, along with specific notes on mapping preferences and behaviors.

| Source Field | Destination Field (Non-Inventory for Sale Item, Inventory Item, or Service Item) | Notes |
| --- | --- | --- |
| Product.Id Product.Name | Item Name/Number | If NetSuite Connector preference Item ID Mapping is Use Zuora Record Name , the Zuora Name will be used.If NetSuite Connector preference Item ID Mapping is Use Unique Zuora Internal ID , a value of “Zuora Product” + Zuora Id will be used.Notes:If select Use Zuora Record Name , you must ensure the Name is unique across Products, Rate Plans, and Charges.Whether this field is updated for subsequent updates is determined by the NetSuite Connector preference Product Catalog Sync Behavior . |
| Product.Id | Zuora ID |  |
| Product.IntegrationId__NS | internalId | System ID. Update Zuora with NetSuite internalId after initial creation only. Map for subsequent updates. |
| Product.IntegrationStatus__NS | n/a | Update Zuora with "Complete" or "Error" |
| Product.ItemType__NS | n/a | Not mapped. Used to determine which NetSuite Item to create. Currently, "Non Inventory Sales," "Inventory," and "Services." |
| Product.SyncDate__NS | n/a | Update Zuora with current timestamp after first successful sync. |
| n/a | Income Account | Force blank to prevent Item from being used on NetSuite transactions. |
| n/a | Zuora Type | "PRODUCT" |
| n/a | Zuora Sync Date | Current date |
| n/a | Location | Mapped from NetSuite Connector preference NetSuite Default Location if populated. See NetSuite Classifications for more information. |
| n/a | Class | Mapped from NetSuite Connector preference NetSuite Default Class if populated. See NetSuite Classifications for more information. |
| n/a | Department | Mapped from NetSuite Connector preference NetSuite Default Department if populated. See NetSuite Classifications for more information. |
| n/a | Tax Schedule | Mapped from NetSuite Connector preference NetSuite Default Tax Schedule if populated. |
