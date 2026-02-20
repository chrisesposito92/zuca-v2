---
title: "Field descriptions of zObject"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/zobject/field-descriptions-of-zobject"
product: "zuora-platform"
scraped_at: "2026-02-20T21:10:06.958Z"
---

# Field descriptions of zObject

This reference provides the description of the fields of the zObject object.

All field names are case sensitive.

| Name | Required? | Type | Description |
| --- | --- | --- | --- |
| fieldsToNull | No | An array of String | Used to set a list of fields to null. You cannot set a field to NULL if nillable is set to false in the WSDL for that field.Values: An array of field names |
| Id | Yes | zns: ID | This is the ID that all of the IDs in other objects are derived from. Every object has an Id field, which you can use as a unique identifier to perform changes on a specific object.Values: Cannot edit this field.Character Limit: 32 |
