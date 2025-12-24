---
title: "Field descriptions"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/zobject/field-descriptions"
product: "zuora-platform"
scraped_at: "2025-12-24T05:44:47.988Z"
---

# Field descriptions

This reference provides the description of the fields of the zObject object.

All field names are case sensitive.

| Name | Required? | Type | Description |
| --- | --- | --- | --- |
| fieldsToNull | No | An array of String | Used to set a list of fields to null. You cannot set a field to NULL if nillable is set to false in the WSDL for that field.Values: An array of field names |
| Id | Yes | zns: ID | This is the ID that all of the IDs in other objects are derived from. Every object has an Id field, which you can use as a unique identifier to perform changes on a specific object.Values: Cannot edit this field.Character Limit: 32 |
