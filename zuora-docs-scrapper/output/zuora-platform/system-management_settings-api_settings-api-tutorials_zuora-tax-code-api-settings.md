---
title: "Zuora Tax Code API settings"
url: "https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/zuora-tax-code-api-settings"
product: "zuora-platform"
scraped_at: "2025-12-24T05:08:12.524Z"
---

# Zuora Tax Code API settings

Learn how to manage Zuora tax codes by the Settings API.

## Get Specific Tax Code ID

The ID of a specific zuora tax code is required as a path parameter to get the tax codes. See the following request and a sample of 200 response to get the ID of any tax code:

Note:

All the examples provided in this section use the Zuora Sandbox endpoint URL. You must substitute it with your own endpoint base URL.

HTTP request:

`GET https://rest.apisandbox.zuora.com/settings/tax-codes/ztax/{id}`

Request body:

| Key | Value |
| --- | --- |
| Curl | GET https://rest.apisandbox.zuora.com/se...odes/ztax/{id} |
| Authorization | Auth Type - Bearer Token <oauth_token> |
| Headers | Authorization - Bearer <oauth_token>Content-Type - application/json |

Response body:

{ "id": "47d2609fda26e8f15d7954299457f92e", "taxEngineId": "47d2609f2dd03671de006c57df2e46cc", "active": true, "name": "Avalara Sales Tax", "description": "", "taxCompanyId": "47d2609f15d506b1bd7084de4499292c", "externalTaxCode": "ZDEVSE-0001", "success": true }

## Create Tax Codes

Ensure that you retrieve the engine ID of the Tax Rate Period Engine from the "Get Specific Tax Code ID" section before proceeding with the following steps.

To create a new Tax Code, see the following request and a sample of 200 response:

HTTP request:

`POST https://rest.apisandbox.zuora.com/settings/tax-codes/ztax`

Request body

| Key | Value |
| --- | --- |
| Curl | POST https://rest.apisandbox.zuora.com/settings/tax-codes/ztax |
| Authorization | Auth Type - Bearer Token <oauth_token> |
| Headers | Authorization - Bearer <oauth_token>Content-Type - application/json |
| Body | --data {"name": "string \| null","active": true,"description": "string \| null","taxEngineId": "string"}Example:{ "name": "Example Tax Code", "active": true, "description": "This is a description for the tax code.", "taxEngineId": "47d2609fbd479ec78fe32045b894f187" } |

Response body:

{ "id": "8ad095ba917efcb101918d8acaec367f", "taxEngineId": "47d2609fbd479ec78fe32045b894f187", "active": false, "name": "Example Tax Code", "description": "This is a description for the tax code.", "success": true }

## Update Tax Codes

To update the Zuora Tax Code, see the following request and a sample of 200 response:

HTTP request:

`PUT https://rest.apisandbox.zuora.com/settings/tax-codes/ztax/{id}`

Request body:

| Key | Value |
| --- | --- |
| Curl | PUT https://rest.apisandbox.zuora.com/settings/tax-codes/ztax/{id} |
| Authorization | Auth Type - Bearer Token <oauth_token> |
| Headers | Authorization - Bearer <oauth_token>Content-Type - application/json |
| Body | --data {"name": "string","active": true,"description": "string \| null","taxEngineId": "string"}Example:{ "name": "Update Tax Code", "active": true, "description": "A description for the new tax code.", "taxEngineId": "47d2609fbd479ec78fe32045b894f187" } |

Response body:

{ "id": "47d2609fda26e8f15d7954299457f92e", "taxEngineId": "47d2609fbd479ec78fe32045b894f187", "active": false, "name": "Update Tax Code", "description": "A description for the new tax code.", "success": true }

## Delete Tax Codes

To delete a tax code, see the following request and a sample of 200 response:

HTTP request:

`DELETE https://rest.apisandbox.zuora.com/settings/tax-codes/ztax/{id}`

Request body:

| Key | Value |
| --- | --- |
| Curl | DELETE https://rest.apisandbox.zuora.com/settings/tax-codes/ztax/{id} |
| Authorization | Auth Type - Bearer Token <oauth_token> |
| Headers | Authorization - Bearer <oauth_token>Content-Type - application/json |

Response body:

{ "success": true }
