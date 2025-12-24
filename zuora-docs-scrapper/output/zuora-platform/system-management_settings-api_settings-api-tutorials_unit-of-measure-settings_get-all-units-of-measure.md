---
title: "Get all Units of Measure"
url: "https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/unit-of-measure-settings/get-all-units-of-measure"
product: "zuora-platform"
scraped_at: "2025-12-24T05:08:04.846Z"
---

# Get all Units of Measure

Learn how to retrieve all units of measure by the Settings API.

To get all units of measure, see the following request and a sample of 200 response.

HTTP request:

`GET https://rest.zuora.com/settings/units-of-measure`

Response body:

{ "unitsOfMeasure": \[ { "name": "Click", "displayAs": "Click", "precision": 0, "roundingMode": "Up", "active": true, "usageLogFileLabel": "Click", "id": "2c92c0f85e0d9c09015e12c148ff6452" }, { "name": "Each", "displayAs": "Each", "precision": 0, "roundingMode": "Up", "active": true, "usageLogFileLabel": "Each", "id": "2c92c0f9446cd49501447539d50c27c5" }, { "name": "GB", "displayAs": "GB", "precision": 0, "roundingMode": "Up", "active": true, "usageLogFileLabel": "GB", "id": "8ad08fbf847576b40184759d42820a42" }, { "name": "License", "displayAs": "License", "precision": 0, "roundingMode": "Up", "active": true, "usageLogFileLabel": "License", "id": "2c92c0f9446cd49501447539d51627c6" }, { "name": "Minutes", "displayAs": "Minutes", "precision": 2, "roundingMode": "Up", "active": true, "usageLogFileLabel": "Minutes", "id": "2c92c0f9446cd49501447539d51e27c7" }, { "name": "Seat", "displayAs": "Seat", "precision": 0, "roundingMode": "Up", "active": true, "usageLogFileLabel": "Seat", "id": "2c92c0f846f580ac014714ead374613b" } \] }
