---
title: "Object POSTProduct"
url: "https://developer.zuora.com/v1-api-reference/api/operation/Object_POSTProduct/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:28:29.492Z"
---

## CRUD: Create a product

Security**bearerAuth**

Request

##### query Parameters

| rejectUnknownFields | booleanDefault: falseSpecifies whether the call fails if the request body contains unknown fields. With rejectUnknownFields set to true, Zuora returns a 400 response if the request body contains unknown fields. The body of the 400 response is:{     "message": "Error - unrecognised fields" } By default, Zuora ignores unknown fields in the request body. |
| --- | --- |

##### header Parameters

| Idempotency-Key | string <= 255 charactersSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types.With this header specified, the Zuora server can identify subsequent retries of the same request using this value, which prevents the same operation from being performed multiple times by accident. |
| --- | --- |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| X-Zuora-WSDL-Version | stringDefault: 79Zuora WSDL version number. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

##### Request Body schema: application/json
required

| AllowFeatureChanges | booleanControls whether to allow your users to add or remove features while creating or amending a subscription.Values: true, false (default) |
| --- | --- |
| Category | string <= 100 charactersCategory of the product. Used by Zuora Quotes Guided Product Selector.Values:Base ProductsAdd On ServicesMiscellaneous Products |
| Description | string <= 500 charactersA description of the product. |
| EffectiveEndDaterequired | string <date>The date when the product expires and can't be subscribed to anymore, in yyyy-mm-dd format. |
| EffectiveStartDaterequired | string <date>The date when the product becomes available and can be subscribed to, in yyyy-mm-dd format. |
| Namerequired | string <= 100 charactersThe name of the product. This information is displayed in the product catalog pages in the web-based UI. |
| ProductNumber | string <= 100 charactersThe natural key of the product.Values:leave null for automatically generated stringan alphanumeric string of 100 characters or fewerNote: This field is only available if you set the X-Zuora-WSDL-Version request header to 133 or later. |
| SKU | string <= 50 charactersThe unique SKU for the product.Values:leave null for automatically generated stringan alphanumeric string of 50 characters or fewer |
| IntegrationId__NS | string <= 255 charactersID of the corresponding object in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| IntegrationStatus__NS | string <= 255 charactersStatus of the product's synchronization with NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| ItemType__NS | stringType of item that is created in NetSuite for the product. Only available if you have installed the Zuora Connector for NetSuite.Enum: "Inventory" "Non Inventory" "Service" |
| SyncDate__NS | string <= 255 charactersDate when the product was synchronized with NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| property name*additional property | anyCustom fields of the Product object. The name of each custom field has the form customField__c. Custom field names are case sensitive. See Custom Fields for more information. |

Responses

200

OK

400

401

Unauthorized

post/v1/object/product

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "Name": "SmartLearn Tablet",

-   "EffectiveStartDate": "2024-01-01",

-   "EffectiveEndDate": "2034-01-01"


}`

Response samples

-   200
-   400
-   401

application/json

responseresponse

Copy

`{

-   "Id": "2c93808457d787030157e03246ae5129",

-   "Success": true


}`
