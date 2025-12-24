---
title: "Custom Objects API error code"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/custom-objects/custom-objects-api/custom-objects-api-error-code"
product: "zuora-platform"
scraped_at: "2025-12-24T05:24:05.449Z"
---

# Custom Objects API error code

This reference lists the error category codes and resource codes of the Custom Objects API.

If a Custom Objects API call fails, an 8-digit error code will return. An 8-digit error code consists of a 6-digit resource code and a 2-digit error category code. For example, in the error code `71012520`, `710125` is the resource code and `20` is the error category code.

## Custom Objects API error category code

The following table lists the error category codes of Custom Objects API.

| Category code | Error category | Description | Resolution |
| --- | --- | --- | --- |
| 12 | Read permission or access denied | The request to read the resource cannot be processed because a certain tenant or user permission is missing. | Check your tenant and user permissions. For Custom Objects, enable the "View Custom Objects" user permission. |
| 13 | Update permission or access denied | The request to update the resource cannot be processed because a certain tenant or user permission is missing. | Check your tenant and user permissions. For Custom Objects, enable the "Edit Custom Objects" user permission. |
| 14 | Delete permission or access denied | The request to delete the resource cannot be processed because a certain tenant or user permission is missing. | Check your tenant and user permissions. For Custom Objects, enable the "Delete Custom Objects" user permission. |
| 15 | Create permission or access denied | The request to create the resource cannot be processed because a certain tenant or user permission is missing. | Check your tenant and user permissions. For Custom Objects, enable the "Edit Custom Objects" user permission. |
| 20 | Invalid format or value | The request cannot be processed due to an invalid field format or value. | Check the invalid field in the error message, and ensure that the format and value of all fields you passed in are valid. |
| 21 | Unknown field in request | The request cannot be processed because an unknown field exists in the request body. | Check the unknown field name in the response message, and ensure that you do not include any unknown field in the request body. |
| 22 | Missing required field | The request cannot be processed because a required field in the request body is missing. | Check the missing field name in the response message, and ensure that you include all required fields in the request body. |
| 23 | Invalid format or value for an integer field | The request cannot be processed due to an invalid field value provided for an integer field. | Check the invalid field in the error message, and ensure that the format and value of all fields you passed in are valid. |
| 24 | Invalid format or value for a number field | The request cannot be processed due to an invalid field value provided for a number field. | Check the invalid field in the error message, and ensure that the format and value of all fields you passed in are valid. |
| 25 | Invalid format or value for a boolean field | The request cannot be processed due to an invalid field value provided for a boolean field. | Check the invalid field in the error message, and ensure that the format and value of all fields you passed in are valid. |
| 26 | Invalid format or value for a string field | The request cannot be processed due to an invalid field format or value provided for a string field. | Check the invalid field in the error message, and ensure that the format and value of all fields you passed in are valid. |
| 30 | Rule restriction | The request cannot be processed due to the violation of a Zuora business rule. | Check the response message and ensure that the API request meets the specified business rules. |
| 40 | Not found | The specified resource cannot be found. | Check the response message and ensure that the specified resource exists in your Zuora tenant. |
| 60 | Internal error | The server encounters an internal error. | Contact Zuora Global Support with the returned Zuora-Request-Id value in the response header for assistance. |
| 61 | Retry-able service error | The service could not completely fulfill the request due to an internal error. | Check the error response for the resources that failed and retry. |

## Custom Objects API resource code

The following table lists the resource codes of Custom Objects API.

| Resource code | Resource |
| --- | --- |
| 710000 | definition |
| 710001 | definition.namespace |
| 710002 | definition.object |
| 710003 | definition.type |
| 710004 | definition.required |
| 710005 | definition.filterable |
| 710006 | definition.description |
| 710007 | definition.label |
| 710008 | definition.origin |
| 710009 | definition.additionalProperties |
| 710010 | definition.relationships |
| 710011 | definition.relationships.fields |
| 710012 | definition.relationships.cardinality |
| 710013 | definition.properties |
| 710014 | definition.properties.{field} |
| 710015 | definition.properties.{field}.label |
| 710016 | definition.properties.{field}.description |
| 710017 | definition.properties.{field}.enum |
| 710018 | definition.properties.{field}.maxLength |
| 710019 | definition.properties.{field}.default |
| 710020 | definition.properties.{field}.origin |
| 710021 | definition.properties.{field}.type |
| 710022 | definition.properties.{field}.minimum |
| 710023 | definition.properties.{field}.maximum |
| 710024 | definition.properties.{field}.multipleOf |
| 710025 | migration.targetName |
| 710026 | definition.properties.{field}.format |
| 710028 | migration.actions |
| 710029 | definition.relationships.recordConstraints |
| 710030 | definition.relationships.recordConstraints.create |
| 710125 | record |
| 710126 | record.type |
| 710127 | record.queryParams |
| 710129 | record.ids |
| 710130 | objectJob |
| 710131 | objectJob.id |
| 710132 | objectJob.filter |
| 710133 | objectJob.filter.conditions |
| 710134 | objectJob.status |
| 710135 | objectJob.operation |
| 710136 | objectJob.file |
| 710137 | objectJob.file.headers |
