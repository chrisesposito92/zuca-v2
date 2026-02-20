---
title: "Product Rate Plan"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/import/product/product-rate-plan"
product: "zuora-platform"
scraped_at: "2026-02-20T17:37:23.864Z"
---

# Product Rate Plan

This reference document lists the fields associated with the Product Rate Plan Data dictionary.

Note: Fields with an asterisk mark indicate mandatory fields.

| Name | Description | Value |
| --- | --- | --- |
| Product Rate Plan | The name of the product rate plan. The name doesn't have to be unique in a Product Catalog, but the name has to be unique within a product. | String <= 255 characters |
| Product Id* | The ID of the product that contains the product rate plan. | String <= 255 characters |
| Active Currencies | A list of 3-letter currency codes representing active currencies for the product rate plan. It is captured from the Tenant Level Configurations in Settings>Billing>Currency | Array of Strings |
| Billing Period NS | Billing period associated with the corresponding item in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. Enum: "Monthly" "Quarterly" "Annual" "Semi-Annual". | String |
| Class NS | Class associated with the corresponding item in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | String <= 255 characters |
| Department NS | Department associated with the corresponding item in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | String <= 255 characters |
| Description | A description of the product rate plan | String <=500 |
| Effective End Date | The date when the product rate plan expires and can't be subscribed to, in yyyy-mm-dd format. | String <date> < =29 characters |
| Effective Start Date | The date when the product rate plan becomes available and can be subscribed to, in yyyy-mm-dd format. | String <date> < =29 characters |
| Grade | The grade that is assigned for the product rate plan. The value of this field must be a positive integer. The greater the value, the higher the grade. | Number |
| Include Children NS | Specifies whether the corresponding item in NetSuite is visible under child subsidiaries. Only available if you have installed the Zuora Connector for NetSuite. Enum: "Yes" "No". | String |
| Integration Id NS | ID of the corresponding object in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | String <= 255 characters |
| Integration Status NS | Status of the product rate plan's synchronization with NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | String <= 255 characters |
| Item Type NS | Type of item that is created in NetSuite for the product rate plan. Only available if you have installed the Zuora Connector for NetSuite. Enum: "Inventory" "Non Inventory" "Service". | String |
| Location NS | Location associated with the corresponding item in NetSuite. Only available if you have installed the Zuora Connector for NetSuite . | String <= 255 characters |
| Multi Currency Price NS | Multi-currency price associated with the corresponding item in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | string <= 255 characters |
| Price NS | Price associated with the corresponding item in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | String <= 255 characters |
| Product Rate Plan Number | The natural key of the product rate plan. Possible values: leave null for automatically generated string an alphanumeric string of 100 characters or fewer. | String <= 100 characters |
| Subsidiary NS | Subsidiary associated with the corresponding item in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | String <= 255 characters |
| Sync Date NS | Date when the product rate plan was synchronized with NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | String <= 255 characters |
