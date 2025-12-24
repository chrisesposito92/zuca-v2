---
title: "Avalara Tax Engine settings"
url: "https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/avalara-tax-engine-settings"
product: "zuora-platform"
scraped_at: "2025-12-24T05:06:40.262Z"
---

# Avalara Tax Engine settings

Learn how to create, retrieve, and update the Avalara Tax Engines through the Settings API.

## Create an Avalara Tax Engine

To create a new Avalara Tax Engine, see the following request and a sample of 200 response.

Note:

The Create API can be used only once, as each tenant is limited to a single AvalaraTaxEngine.

HTTP request:

`POST https://rest.zuora.com/apps/settings/tax-engines/`

Request body:

curl --location 'https://rest.zuora.com/apps/settings/tax-engines/' \\ --header 'Content-Type: application/json' \\ --header 'Authorization: Bearer <oauth token>' \\ --data '{ "name": "AvalaraTestEngine12", "taxEngineType": "Avalara", "accountNumber": "0981236784", "licenseKey": "B6GG780FP12FIMIRIH", "isTest": true }'

Response body:

{ "id": "4028818792d0c0550192d0e4c3af03ca", "name": "AvalaraTestEngine12", "taxEngineType": "Avalara", "accountNumber": "0981236784", "isTest": true, "username": null, "success": true }

## Get an Avalara Tax Engine

To get an Avalara Tax Engine, see the following request and a sample of 200 response.

`GET https://rest.zuora.com/settings/tax-engines/connector/{id}`

Request body:

curl --location'https://rest.zuora.com/settings/tax-engines/connector/{id}' \\ --header 'Authorization: Bearer <oauth token>'

Response body:

{ "id": "40288186929d8a6a01929dbcaab67314", "name": "AvalaraTestEngine", "taxEngineType": "Avalara", "accountNumber": "6547894321", "isTest": true, "username": null, "success": true }

## Update an Avalara Tax Engine

To update an Avalara Tax Engine, see the following request and a sample of 200 response.

HTTP request:

`PUT https://rest.zuora.com/settings/tax-engines/connector/{id}`

Request body:

curl --location --request PUT 'https://rest.zuora.com/settings/tax-engines/connector/{id}' \\ --header 'Content-Type: application/json' \\ --header 'Authorization: Bearer <oauth token>' \\ --data '{ "name": "AvalaraTestEngine12", "accountNumber": "0981236784", "licenseKey": "B6GG780FP12FIMIRIH", "isTest": true }'

Response body:

{ "id": "4028818792d0c0550192d0e4c3af03ca", "name": "AvalaraTestEngine12", "taxEngineType": "Avalara", "accountNumber": "0981236784", "isTest": true, "username": null, "success": true }

## Delete an Avalara Tax Engine

The Avalara Tax Engine does not support the Delete operation.
