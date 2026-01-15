---
title: "Update Product Rate Plan"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/updates/update-product-rate-plan"
product: "zuora-platform"
scraped_at: "2026-01-15T21:57:47.442Z"
---

# Update Product Rate Plan

This reference document lists all the fields for the Update Product Rate Plan data dictionary.

Note: Fields with an asterisk mark indicate mandatory fields.

| Name | Description | Value |
| --- | --- | --- |
| Name* | The name of the product rate plan. The name doesn't have to be unique in a Product Catalog, but the name has to be unique within a product. | string <= 255 characters |
| Product Id* | The ID of the product that contains the product rate plan. | string <= 32 characters |
| Active Currencies | A list of 3-letter currency codes representing active currencies for the product rate plan. Use a comma to separate each currency code. If the request body contains this field, its value must contain the desired list of active currencies. The new list can never be more than four differences from the existing list. This field cannot be used to modify the status of more than four currencies in a single request. For example, in a single request, you can only activate four currencies, or deactivate four currencies, or activate two and deactivate two. Making more than four changes to currencies always requires more than one call. When specifying this field in the update request, you must provide the full list of active currencies you want, not just incremental changes. For each active currency update, provide the following currencies in the list: Current active currencies + at most four changes (additions or deletions) | Array of strings |
| Billing Period NS | Billing period associated with the corresponding item in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. Enum: "Monthly" "Quarterly" "Annual" "Semi-Annual" | string |
| Class NS | Class associated with the corresponding item in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | string <= 255 characters |
| Department NS | The department associated with the corresponding item in NetSuite. This is only available if you have installed the Zuora Connector for NetSuite. | string <= 255 characters |
| Description | A description of the product rate plan. | string <= 500 characters |
| Effective End Date | The date when the product rate plan expires and can't be subscribed to, in yyyy-mm-dd format. | string <date> <= 29 characters |
| Effective Start Date | The date when the product rate plan becomes available and can be subscribed to, in yyyy-mm-dd format. | string <date> <= 29 characters |
| External Rate Plan Id | The external ID of the product rate plan. The value of this field must be a product rate plan that is imported from an external system. If you want to update to multiple values, use a comma separated string. | string <= 255 characters |
| Grade | The grade that is assigned for the product rate plan. The value of this field must be a positive integer. The greater the value, the higher the grade. A product rate plan to be added to a Grading catalog group must have one grade. You can specify a grade for a product rate plan in this request or update the product rate plan individually. | number |
| Include Children NS | Specifies whether the corresponding item in NetSuite is visible under child subsidiaries. Only available if you have installed the Zuora Connector for NetSuite. Enum: "Yes" "No" | string |
| Integration Id NS | ID of the corresponding object in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | string <= 255 characters |
| Integration Status NS | Status of the product rate plan's synchronization with NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | string <= 255 characters |
| Item Type NS | Type of item that is created in NetSuite for the product rate plan. Only available if you have installed the Zuora Connector for NetSuite. Enum: "Inventory" "Non Inventory" "Service" | string |
| Location NS | Location associated with the corresponding item in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | string <= 255 characters |
| Multi Currency Price NS | Multi-currency price associated with the corresponding item in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | string <= 255 characters |
| Price NS | Price associated with the corresponding item in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | string <= 255 characters |
| Product Rate Plan Number | The natural key of the product rate plan. For existing Product Rate Plan objects that are created before this field is introduced, this field will be null. Use this field to specify a value for only these objects. Zuora also provides a tool to help you automatically backfill this field with tenant ID for your existing product catalog. If you want to use this backfill tool, contact Zuora Global Support. | string <= 100 characters |
| Subsidiary NS | Subsidiary associated with the corresponding item in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | string <= 255 characters |
| Sync Date NS | Date when the product rate plan was synchronized with NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | string <= 255 characters |
