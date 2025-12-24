---
title: "Product data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/product-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:47:20.971Z"
---

# Product data source

Data source to export product information

Use this data source to export product information including name, created date, effective start date, and effective end date. Each row represents one line of [Product](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/product).

## Objects available in the data source

![graph_data_product.jpg](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/7ca7a9f5-9251-445c-9b8c-a048c2981fb8?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjdjYTdhOWY1LTkyNTEtNDQ1Yy05YjhjLWEwNDhjMjk4MWZiOCIsImV4cCI6MTc2NjY4ODQzOSwianRpIjoiNzMxYTk3MGE0Mjk0NDFhYmEyYzJlZjE3YjdlMzg5MDYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.XOw7Mhb4bo7msfWheyB7EmutoVL_drwZTljw07PVSvE)

## Base object

| Object | Description |
| --- | --- |
| Product | The base object for this export. Contains the following fields:AllowFeatureChangesCategoryCreated By IDCreated DateDescriptionEffective End DateEffective Start DateIDNameProduct NumberSKUUpdated By IDUpdated Date |

## Related object

| Object | Description |
| --- | --- |
| Entity | The entity that the data relates to. Part of the Multi-entity feature. Contains the following fields:Address 1Address 2CityCountryCreated By IDCreated DateDisplay NameEmailIDNamePostal CodeStateUpdated By IDUpdated Date |
