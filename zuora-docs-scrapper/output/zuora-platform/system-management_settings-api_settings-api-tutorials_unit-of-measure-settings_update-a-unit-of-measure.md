---
title: "Update a Unit of Measure"
url: "https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/unit-of-measure-settings/update-a-unit-of-measure"
product: "zuora-platform"
scraped_at: "2025-12-24T05:08:07.550Z"
---

# Update a Unit of Measure

Learn how to update a unit of measure by the Settings API.

To update a specific unit of measure, the ID of the unit of measure is required as a path parameter. See the following request and samples of request and 200 response bodies.

HTTP request:

`PUT https://rest.zuora.com/settings/units-of-measure/{id}`

Request body:

{ "id": "8ad08fbf847576b40184759d42820a42", "name": "Gigabyte", "displayAs": "Gigabyte", "usageLogFileLabel": "Gigabyte", "active": true }

Response body:

{ "name": "Gigabyte", "displayAs": "Gigabyte", "precision": 0, "roundingMode": "Up", "active": true, "usageLogFileLabel": "Gigabyte", "id": "8ad08fbf847576b40184759d42820a42" }
