---
title: "Global Hub Tax Engine settings"
url: "https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/global-hub-tax-engine-settings"
product: "zuora-platform"
scraped_at: "2025-12-24T05:07:08.791Z"
---

# Global Hub Tax Engine settings

Learn how to create, retrieve, and update the Global Tax Hub Engine through the Settings API.

## Create a Global Tax Hub Engine

To create a new Global Tax Hub Engine, see the following request and a sample of 200 response:

HTTP request:

`POST https://rest.zuora.com/settings/tax-engines/global-tax-hub`

Request body:

{ "name": "Global Tax Hub Engine", "taxEngineType": "GlobalTaxHub", "url": "https://communicationsua.avalara.net/api/v2/afc/CalcTaxes", "voidUrl": "https://communicationsua.avalara.net/api/v2/afc/commit", "authenticationType": "BasicAuth", "vendor": "AvalaraTelco", "username": "username", "password": "password", "requestTemplate": "mock template",//Will be set to the default template if empty "voidTemplate": "mock template"//Will be set to the default template if empty }

The following fields are required in the request body:

-   `name`

-   `taxEngineType`

-   `vendor`

-   `authenticationType -` The username and password are required when the `authenticationType` is set to `Basic Auth`.

-   `Url`


Response body:

{ "id": "402833ec850fae4a01850fb5d039132d", "name": "Global Tax Hub Engine", "taxEngineType": "GlobalTaxHub", "customFieldMetas": \[\], "vendor": "AvalaraTelco", "authenticationType": "BasicAuth", "username": "username", "url": "https://communicationsua.avalara.net/api/v2/afc/CalcTaxes", "voidUrl": "https://communicationsua.avalara.net/api/v2/afc/commit", "networkOpenTimeoutInSeconds": 60, "networkReadTimeoutInSeconds": 60, "requestTemplate": "mock template", "voidTemplate": "mock template", "success": true }

## Get a Global Tax Hub Engine

To access detailed information about a particular Global Tax Hub engine, you must include the ID of the specific engine as a path parameter. Here's an example of a sample request and the corresponding 200 response:

HTTP request:

`GET https://rest.zuora.com/settings/tax-engines/global-tax-hub/{id}`

Request body:

None

Response body:

{ "id": "402833ec850fae4a01850fb5d039132d", "name": "Global Tax Hub Engine", "taxEngineType": "GlobalTaxHub", "customFieldMetas": \[\], "vendor": "AvalaraTelco", "authenticationType": "BasicAuth", "username": “username”, "description": "Test", "url": "https://communicationsua.avalara.net/api/v2/afc/CalcTaxes", "voidUrl": "https://communicationsua.avalara.net/api/v2/afc/commit", "networkOpenTimeoutInSeconds": 60, "networkReadTimeoutInSeconds": 60, "requestTemplate": "mock template", "voidTemplate": "mock template", "success": true }

## Update a Global Tax Hub Engine

To update an existing Global Tax Hub Engine, you must include the ID of the engine as a path parameter. Here's an example of a sample request and the corresponding 200 response:

HTTP request:

`PUT https://rest.zuora.com/settings/tax-engines/global-tax-hub/{id}`

Request body:

{ "name": "Global Tax Hub Engine", "url": "https://communicationsua.avalara.net/api/v2/afc/CalcTaxes", "voidUrl": "https://communicationsua.avalara.net/api/v2/afc/commit", "authenticationType": "OAuth2", "vendor": "AvalaraTelco", "accessTokenUrl": "https://access-token.com/", "clientId": "clientId", "clientSecret": "clientSecret", "description": "Test", "requestTemplate": "mock template", "voidTemplate": "mock template" }

Note:

Do not include the `taxEngineType` parameter in the request body.

Response body:

{ "id": "402833ec850fae4a01850fb5d039132d", "name": "Global Tax Hub Engine", "taxEngineType": "GlobalTaxHub", "customFieldMetas": \[\], "vendor": "AvalaraTelco", "authenticationType": "OAuth2", "url": "https://communicationsua.avalara.net/api/v2/afc/CalcTaxes", "voidUrl": "https://communicationsua.avalara.net/api/v2/afc/commit", "accessTokenUrl": "https://access-token.com/", "clientId": "clientId", "networkOpenTimeoutInSeconds": 60, "networkReadTimeoutInSeconds": 60, "requestTemplate": "mock template", "voidTemplate": "mock template", "success": true }

## Delete a Global Tax Hub Engine

To delete a specific Global Tax Hub Engine, you must include the ID of the engine as a path parameter. Here's an example of a sample request and the corresponding 200 response:

HTTP request:

`DELETE https://rest.zuora.com/settings/tax-engines/global-tax-hub/{id}`

Request body:

None

Response body:

None

## API Fields Description

| Property Name | Type | Description |
| --- | --- | --- |
| name | String | The calculated tax amount that is excluded due to the exemption. |
| vendor | Enum | The name of the vendor that is currently only supported by the AvalaraBrazil and Taxamo engines. The available values are AvalaraBrazil and Taxamo. |
| authenticationType | Enum | The authentication types. The available options are BasicAuth, OAuth2, and PrivateToken. |
| taxEngineType | Enum | The type of tax engine, such as GlobalTaxHub for TaxHub. |
| url | String | The tax vendor URL for tax calculation. |
| voidUrl | String | The tax vendor URL for tax void. |
| username | String | The username for accessing the tax URL and tax void URL. This is required only when the authenticationType is Basic﻿Auth. |
| password | String | The password for accessing the tax URL and tax void URL. This is required only when the authenticationType is BasicAuth. |
| securityToken | String | This is required when the authenticationType is PrivateToken. |
| accessTokenUrl | String | The access token URL. This is required only when the authenticationType is OAuth2. |
| clientId | String | The client ID. This is required only when the authenticationType is OAuth2. |
| clientSecret | String | The client secret ID. This is required only when the authenticationType is OAuth2. |
| networkOpenTimeoutInSeconds | Number | The timeout duration (in seconds) for establishing a network connection. |
| networkReadTimeoutInSeconds | Number | The timeout duration (in seconds) for reading responses. |
| requestTemplate | String | The request template for tax calculation. If left empty, the default template will be applied. |
| voidTemplate | String | The request template for tax void. If left empty, the default template will be applied. |
| customFieldMetas | Array of objects | This must be defined only if the latest value of custom fields are used, for example,"customFieldMetas": { "useLatestValue": true, "customFieldName": "PicklistCustom__c", "customFieldObjectType": "Account" } |
| requestHeaders | Map | The Request headers. Input the key-value pairs, for example,"requestHeaders": { "Accept-encoding": "gzip, deflate, br" } |
| responseMappings | Map | The customized response mapping. Input the key-value pairs, for example,"responseMappings": { "taxRateDescription": "citation" } |
