---
title: "Connect Tax Engines settings"
url: "https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/connect-tax-engines-settings"
product: "zuora-platform"
scraped_at: "2025-12-24T05:07:05.951Z"
---

# Connect Tax Engines settings

Learn how to create, retrieve, update, and delete Connect Tax Engines through the Settings API.

## Create a Connect Tax Engine

To create a new Connect Tax Engine, see the following request and a sample of 200 response.

HTTP request:

`POST https://rest.zuora.com/settings/tax-engines/connector`

Response body:

{ "name": "Connect Tax Engine Test", "taxEngineType": "ConnectTaxEngine", "connectUrl": "https://tax.apps.zuora.com/api/v1/tax", "password": "e3dce34b821e90d8712ead3f688xxxxx" }

The following fields are required in the request body:

-   `name`

-   `taxEngineType`

-   `password`: The unique 32-character API Token of the Tax app. To obtain your API Token:

    1.  From the left-hand navigation menu under Marketplace, click the name of the tax app.

    2.  Select the instance you would like to launch.

    3.  Navigate to the APP INFORMATION tab, the API token is listed near the top of the tab.

-   `connectUrl`


Response body:

{ "id": "8ad08d3b7ceb0df5017cfe084449246e", "name": "Connect Tax Engine Test", "taxEngineType": "ConnectTaxEngine", "connectUrl": "https://tax.apps.zuora.com/api/v1/tax", "customFieldMetas": \[\], "success": true }

## Get a Connect Tax Engine

To get a specific Connect Tax Engine, the Id of the specific Connect Tax Engine is required as a path parameter. See the following request and a sample of 200 response.

HTTP request:

`GET https://rest.zuora.com/settings/tax-engines/connector/{id}`

Response body:

{ "id": "2c92c0f8680e602b016812ae66354f16", "name": "test tax engine 2021", "taxEngineType": "ConnectTaxEngine", "connectUrl": "https://tax.apps.zuora.com/api/v1/tax", "customFieldMetas": \[\], "success": true }

## Update a Connect Tax Engine

To update a specific Connect Tax Engine, the Id of the specific Connect Tax Engine is required as a path parameter. See the following request and a sample of 200 response.

HTTP request:

`PUT https://rest.zuora.com/settings/tax-engines/connector/{id}`

Request body:

{ "name":"Connect Tax Engine Test One", "customFieldMetas": \[ { "customFieldMetaId": "2c92c0f9644627ff01645dc0c0de4fac", "useLatestValue": true }\] }

Note: Do not include the `taxEngineType` parameter in the request body.

Response body:

{ "id": "2c92c0f8680e602b016812ae66354f16", "name": "Connect Tax Engine Test One", "taxEngineType": "ConnectTaxEngine", "connectUrl": "https://tax.apps.zuora.com/api/v1/tax", "customFieldMetas": \[ { "customFieldMetaId": "2c92c0f9644627ff01645dc0c0de4fac", "useLatestValue": true } \], "success": true }

## Delete a Connect Tax Engine

To delete a specific Connect Tax Engine, the Id of the specific Connect Tax Engine is required as a path parameter. See the following request and a sample of 200 response.

HTTP request:

`DELETE https://rest.zuora.com/settings/tax-engines/connector/{id}`

Response body:

{ "success": true }

## Global Hub Tax Engine Settings

Describes how to create, retrieve, and update the Global Tax Hub Engine through the Settings API. For more information, see [Global Hub Tax Engine Settings](/zuora-platform/system-management/settings-api/settings-api-tutorials/global-hub-tax-engine-settings).
