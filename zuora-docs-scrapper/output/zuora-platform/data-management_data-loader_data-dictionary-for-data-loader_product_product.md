---
title: "Product"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/product/product"
product: "zuora-platform"
scraped_at: "2026-01-15T21:57:18.411Z"
---

# Product

This reference document lists fields in the Product Data dictionary.

Note: Fields with an asterisk mark indicate mandatory fields.

| Name | Description | Value |
| --- | --- | --- |
| Effective End Date* | The date when the product expires and can't be subscribed to anymore, in yyyy-mm-dd format. | String-date |
| Effective Start Date* | The date when the product becomes available and can be subscribed to, in yyyy-mm-dd format. | String-date |
| Name* | The name of the product. | String <=100 characters |
| Allow Feature Changes | Controls whether to allow your users to add or remove features while creating or amending a subscription.Values: true, false (default). | Boolean |
| Category | Category of the product. Used by Zuora Quotes Guided Product Selector | String <=100 characters |
| Description | A description of the product. | String <= 500 characters |
| Integration Id NS | ID of the corresponding object in NetSuite. Only available if you have installed the Zuora Connector for NetSuite . | String <= 255 characters |
| Integration Status NS | Status of the product's synchronization with NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | String <= 255 characters |
| Item Type NS | Type of item that is created in NetSuite for the product. Only available if you have installed the Zuora Connector for NetSuite. Enum: "Inventory" "Non Inventory" "Service". | string |
| Product Number | The natural key of the product. Values: leave null for automatically generated string an alphanumeric string of 100 characters or fewer. | String <=100 characters |
| SKU | The unique SKU for the product. Values: leave null for automatically generated string an alphanumeric string of 50 characters or fewer. | String <=50 characters |
| Sync Date NS | Date when the product was synchronized with NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | String <= 255 characters |
