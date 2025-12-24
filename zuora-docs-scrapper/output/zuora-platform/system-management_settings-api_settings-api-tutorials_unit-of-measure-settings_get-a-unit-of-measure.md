---
title: "Get a Unit of Measure"
url: "https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/unit-of-measure-settings/get-a-unit-of-measure"
product: "zuora-platform"
scraped_at: "2025-12-24T05:08:02.208Z"
---

# Get a Unit of Measure

Learn how to retrieve a unit of measure by the Settings API.

To get a specific unit of measure, the ID of the unit of measure is required as a path parameter. See the following request and a sample of 200 response.

HTTP request:

`GET https://rest.zuora.com/settings/units-of-measure/{id}`

Response body:

{ "name": "GB", "displayAs": "GB", "precision": 0, "roundingMode": "Up", "active": true, "usageLogFileLabel": "GB", "id": "8ad08fbf847576b40184759d42820a42" }
