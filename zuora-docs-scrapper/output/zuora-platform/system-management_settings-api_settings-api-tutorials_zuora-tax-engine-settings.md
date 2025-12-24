---
title: "Zuora Tax Engine settings"
url: "https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/zuora-tax-engine-settings"
product: "zuora-platform"
scraped_at: "2025-12-24T05:08:15.158Z"
---

# Zuora Tax Engine settings

Learn how to create, retrieve, update, and delete Tax Codes using Zuora Tax Engine through the Settings API.

## Get Tax Engines

The ID of the Tax Engine is required as a path parameter to create a Tax Code using the Zuora Tax Engine. See the following request and a sample of 200 response to get the ID of any tax engine:

Note:

All the examples provided in this section use the Zuora Sandbox endpoint URL. You must substitute it with your own endpoint base URL.

HTTP request:

`GET https://rest.apisandbox.zuora.com/settings/tax-engines`

Request body:

curl --location 'https://rest.apisandbox.zuora.com/settings/tax-engines' \\ --header 'Content-Type: application/json'\\ --header 'Authorization: Bearer d45afc73e95d4440806b18b28a86fa70'

Response body:

{ "taxEngines": \[ { "id": "2c92c8fb7a2d26b6017a2eaa6c212f5e", "name": "Zuora Tax", "taxEngineType": "Z\_Tax" } }

## Create Tax Code using Zuora Tax Engine

Ensure that you retrieve the engine ID of ZTax from the "Get Tax Engines" section before proceeding with the following steps. To create a new Tax Code using the Zuora Tax Engine, see the following request and a sample of 200 response:

HTTP request:

`POST https://rest.apisandbox.zuora.com/settings/tax-codes/ztax/`

Request body:

curl --location 'https://rest.apisandbox.zuora.com/settings/tax-codes/ztax/' \\ --header 'Content-Type: application/json' \\ --header 'Authorization: Bearer <oauth token>’\\ \--data '{ "active": false, "name": "ZTaxTaxCode", "description": "The description of the ZTax code", "taxEngineId": "2c92c8fb7a2d26b6017a2eaa6c212f5e"}'

Response body:

{ "id": "8a90f13b8e555a7a018e559973cb14dd", "taxEngineId": "2c92c8fb7a2d26b6017a2eaa6c212f5e", "active": false, "name": "ZTaxTaxCode", "description": "ztax code", "success": true }

## Get Tax Code using Zuora Tax Engine

To get a Tax Code using the Zuora Tax Engine, see the following request and a sample of 200 response:

HTTP request:

`GET https://rest.apisandbox.zuora.com/settings/tax-codes/ztax/8ad0845b8e74e4de018e7eedc595693f`

Request body:

curl --request GET \\ --url https://rest.apisandbox.zuora.com/settings/tax-codes/ztax/8ad0845b8e74e4de018e7eedc595693f \\ --header 'Authorization: Bearer b31aea1a9ab345979f1a41ba67da8fc5' \\

Response body:

{ "id": "8a90f13b8e555a7a018e559973cb14dd", "taxEngineId": "2c92c8fb7a2d26b6017a2eaa6c212f5e", "active": false, "name": "ZTaxTaxCode", "description": "ztax code", "success": true }

## Update Tax Code using Zuora Tax Engine

To update the Tax Code using the Zuora Tax Engine, see the following request and a sample of 200 response:

HTTP request:

`PUT https://rest.apisandbox.zuora.com/settings/tax-codes/ztax/8a90f13b8e555a7a018e559973cb14dd`

Request body:

curl --location --request PUT 'https://rest.apisandbox.zuora.com/settings/tax-codes/ztax/8a90f13b8e555a7a018e559973cb14dd' \\ --header 'Content-Type: application/json' \\ --header 'Authorization: Bearer 3498b3107d754de1bb320b4f9f451553' \\ --data '{ "active": false, "name": "ZTaxTaxCode", "description": "The description of the ZTax code", "taxEngineId": "2c92c8fb7a2d26b6017a2eaa6c212f5e"}'

Response body:

{ "id": "8a90f13b8e555a7a018e559973cb14dd", "taxEngineId": "2c92c8fb7a2d26b6017a2eaa6c212f5e", "active": false, "name": "ZTaxTaxCode", "description": "The description of the ZTax code", "success": true }

## Delete Tax Code using Zuora Tax Engine

To delete the Tax Code using the Zuora Tax Engine, see the following request and a sample of 200 response:

HTTP request:

`DELETE https://rest.apisandbox.zuora.com/settings/tax-codes/ztax/8a90f13b8e555a7a018e559973cb14dd`

Request body:

curl --location --request DELETE 'https://rest.apisandbox.zuora.com/settings/tax-codes/ztax/8a90f13b8e555a7a018e559973cb14dd' \\ --header 'Content-Type: application/json' \\--header 'Authorization: Bearer 3498b3107d754de1bb320b4f9f451553'

Response body:

{ "success": true }
