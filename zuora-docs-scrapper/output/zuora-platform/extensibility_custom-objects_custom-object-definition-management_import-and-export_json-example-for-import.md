---
title: "JSON example for import"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/custom-objects/custom-object-definition-management/import-and-export/json-example-for-import"
product: "zuora-platform"
scraped_at: "2025-12-24T05:23:16.988Z"
---

# JSON example for import

This reference provides a JSON example for custom object definition import.

The following is a JSON example for import with one custom object definition named `Vehicle`:

{ "Vehicle": { "type": "Vehicle", "schema": { "object": "Vehicle", "label": "Vehicle", "title": "Vehicle", "type": "object", "description": "Object stores vehicle information", "enableCreateRecordAuditing": false, "enableDeleteRecordAuditing": false, "properties": { "brand\_\_c": { "maxLength": 512, "description": "The brand of the vehicle", "label": "Brand", "type": "string" }, "model\_\_c": { "maxLength": 512, "description": "The model of the vehicle ", "label": "Model", "type": "string" }, "color\_\_c": { "maxLength": 512, "description": "The color of the vehicle", "label": "Color", "type": "string", "enum": \[ "white", "red", "black", "silver", "blue" \], "default": "white" }, "MSRP\_\_c": { "description": "The MSRP of the vehicle", "label": "MSRP", "type": "number" } }, "required": \[ "brand\_\_c", "model\_\_c" \], "filterable": \[ "brand\_\_c", "model\_\_c" \], "enableRecordMigration": false } } }
