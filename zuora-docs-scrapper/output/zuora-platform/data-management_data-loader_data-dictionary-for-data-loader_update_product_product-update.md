---
title: "Product update"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/update/product/product-update"
product: "zuora-platform"
scraped_at: "2026-02-19T03:17:43.550Z"
---

# Product update

This reference document lists all the nfields associated with the Update Product data dictionary.

| Name | Description | Value |
| --- | --- | --- |
| Id* | Object id | string |
| Allow Feature Changes | Controls whether to allow your users to add or remove features while creating or amending a subscription. Values: true, false (default) | boolean |
| Category | Values: Base Products Add On Services Miscellaneous Products | string <= 100 characters |
| Description | A description of the product. | string <= 500 characters |
| Effective End Date | The date when the product expires and can't be subscribed to anymore, in yyyy-mm-dd format. | string <date> |
| Effective Start Date | The date when the product becomes available and can be subscribed to, in yyyy-mm-dd format. | string <date> |
| Integration Id NS | D of the corresponding object in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | string <= 255 characters |
| Integration Status NS | Status of the product's synchronization with NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | string <= 255 characters |
| Item Type NS | Type of item that is created in NetSuite for the product. Only available if you have installed the Zuora Connector for NetSuite. Enum: "Inventory" "Non Inventory" "Service" | string |
| Name | The name of the product. This information is displayed in the product catalog pages in the web-based UI. | string <= 100 characters |
| Product Number | The natural key of the product. For existing Product objects that are created before this field is introduced, this field will be null. Use this field to specify a value for only these objects. Zuora also provides a tool to help you automatically backfill this field with tenant ID for your existing product catalog. If you want to use this backfill tool, contact Zuora Global Support. | string <= 100 characters |
| SKU | The unique SKU for the product. | string <= 50 characters |
| Sync Date NS | Date when the product was synchronized with NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | string <= 255 characters |
