---
title: "Object PUTProductRatePlan"
url: "https://developer.zuora.com/v1-api-reference/api/operation/Object_PUTProductRatePlan/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:29:42.036Z"
---

## CRUD: Update a product rate plan

Updates a product rate plan.

Security**bearerAuth**

Request

##### path Parameters

| idrequired | stringObject id |
| --- | --- |

##### query Parameters

| rejectUnknownFields | booleanDefault: falseSpecifies whether the call fails if the request body contains unknown fields. With rejectUnknownFields set to true, Zuora returns a 400 response if the request body contains unknown fields. The body of the 400 response is:{     "message": "Error - unrecognised fields" } By default, Zuora ignores unknown fields in the request body. |
| --- | --- |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| X-Zuora-WSDL-Version | stringDefault: 79Zuora WSDL version number. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

##### Request Body schema: application/json
required

| ActiveCurrencies | Array of stringsA list of 3-letter currency codes representing active currencies for the product rate plan. Use a comma to separate each currency code.If the request body contains this field, the value of this field must contain the desired list of active currencies. The new list can never have more than four differences from the existing list.This field cannot be used to modify the status of more than four currencies in a single request. For example, in a single request, you can only activate four currencies, or deactivate four currencies, or activate two and deactivate two. Making more than four changes to currencies always requires more than one call.When specifying this field in the update request, you must provide the full list of active currencies you want, not just incremental changes. For each active currency update, provide the following currencies in the list:Current active currencies + at most four changes (additions or deletions) |
| --- | --- |
| Description | string <= 500 charactersA description of the product rate plan. |
| EffectiveEndDate | string <date> <= 29 charactersThe date when the product rate plan expires and can't be subscribed to, in yyyy-mm-dd format. |
| EffectiveStartDate | string <date> <= 29 charactersThe date when the product rate plan becomes available and can be subscribed to, in yyyy-mm-dd format. |
| ExternalIdSourceSystem | stringThe ID of the external source system.Note: To use this field, you must set the X-Zuora-WSDL-Version request header to 130 or later. Otherwise, an error occurs. |
| ExternalRatePlanIds | stringAn external ID of the product rate plan to be added. You can use this field to specify a product rate plan that is imported from an external system. If you want to update to multiple values, use a comma separated string.Note: To use this field, you must set the X-Zuora-WSDL-Version request header to 130 or later. Otherwise, an error occurs. |
| Grade | numberThe grade that is assigned for the product rate plan. The value of this field must be a positive integer. The greater the value, the higher the grade.A product rate plan to be added to a Grading catalog group must have one grade. You can specify a grade for a product rate plan in this request or update the product rate plan individually.Notes:To use this field, you must set the X-Zuora-WSDL-Version request header to 116 or later. Otherwise, an error occurs.This field is in the Early Adopter phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. If you want to join this early adopter program, submit a request at Zuora Global Support. |
| Name | string <= 255 charactersThe name of the product rate plan. The name doesn't have to be unique in a Product Catalog, but the name has to be unique within a product. |
| ProductId | string <= 32 charactersThe ID of the product that contains the product rate plan. |
| ProductRatePlanNumber | string <= 100 charactersThe natural key of the product rate plan.For existing Product Rate Plan objects that are created before this field is introduced, this field will be null. Use this field to specify a value for only these objects. Zuora also provides a tool to help you automatically backfill this field with tenant ID for your existing product catalog. If you want to use this backfill tool, contact Zuora Global Support.Note: This field is only available if you set the X-Zuora-WSDL-Version request header to 133 or later. |
| BillingPeriod__NS | stringBilling period associated with the corresponding item in NetSuite. Only available if you have installed the Zuora Connector for NetSuite.Enum: "Monthly" "Quarterly" "Annual" "Semi-Annual" |
| Class__NS | string <= 255 charactersClass associated with the corresponding item in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| Department__NS | string <= 255 charactersDepartment associated with the corresponding item in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| IncludeChildren__NS | stringSpecifies whether the corresponding item in NetSuite is visible under child subsidiaries. Only available if you have installed the Zuora Connector for NetSuite.Enum: "Yes" "No" |
| IntegrationId__NS | string <= 255 charactersID of the corresponding object in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| IntegrationStatus__NS | string <= 255 charactersStatus of the product rate plan's synchronization with NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| ItemType__NS | stringType of item that is created in NetSuite for the product rate plan. Only available if you have installed the Zuora Connector for NetSuite.Enum: "Inventory" "Non Inventory" "Service" |
| Location__NS | string <= 255 charactersLocation associated with the corresponding item in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| MultiCurrencyPrice__NS | string <= 255 charactersMulti-currency price associated with the corresponding item in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| Price__NS | string <= 255 charactersPrice associated with the corresponding item in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| Subsidiary__NS | string <= 255 charactersSubsidiary associated with the corresponding item in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| SyncDate__NS | string <= 255 charactersDate when the product rate plan was synchronized with NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| property name*additional property | anyCustom fields of the Product Rate Plan object. The name of each custom field has the form customField__c. Custom field names are case sensitive. See Custom Fields for more information. |

Responses

200

OK

401

Unauthorized

put/v1/object/product-rate-plan/{id}

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "Name": "Monthly Plan2",

-   "Description": "monthly plan",

-   "ProductId": "8ad081dd90c4bafe0190desada8f9b154b",

-   "ActiveCurrencies": "USD",

-   "ExternalIdSourceSystem": "extsys9",

-   "ExternalRatePlanIds": "ext01"


}`

Response samples

-   200
-   401

application/json

responseresponse

Copy

`{

-   "Id": "2c93808457d787030157e02da0d91852",

-   "Success": true


}`
