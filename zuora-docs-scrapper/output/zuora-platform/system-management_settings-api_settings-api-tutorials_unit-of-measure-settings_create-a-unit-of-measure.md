---
title: "Create a Unit of Measure"
url: "https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/unit-of-measure-settings/create-a-unit-of-measure"
product: "zuora-platform"
scraped_at: "2025-12-24T05:07:59.833Z"
---

# Create a Unit of Measure

Learn how to create a unit of measure by the Settings API.

To create a new unit of measure, see the following request and samples of request and 200 response bodies.

HTTP request:

`POST https://rest.zuora.com/settings/units-of-measure`

Request body:

{ "name": "GB", "displayAs": "GB", "precision": 0, "roundingMode": "Up", "active": true, "usageLogFileLabel": "GB" }

Response body:

{ "name": "GB", "displayAs": "GB", "precision": 0, "roundingMode": "Up", "active": true, "usageLogFileLabel": "GB", "id": "8ad08fbf847576b40184759d42820a42" }
