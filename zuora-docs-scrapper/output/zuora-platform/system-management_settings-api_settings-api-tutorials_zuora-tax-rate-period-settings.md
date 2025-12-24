---
title: "Zuora Tax Rate Period settings"
url: "https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/zuora-tax-rate-period-settings"
product: "zuora-platform"
scraped_at: "2025-12-24T05:08:17.858Z"
---

# Zuora Tax Rate Period settings

Learn how to manage Zuora tax rate periods through the Settings API.

## Create Tax Rate Periods

To create a new Tax Rate Period, see the following request and a sample of 200 response:

HTTP request:

`POST https://rest.apisandbox.zuora.com/settings/tax-rate-periods/{tax id}`

Request body:

| Key | Value |
| --- | --- |
| Curl | POST https://rest.apisandbox.zuora.com/settings/tax-rate-periods/{tax id} |
| Authorization | Auth Type - Bearer Token <oauth_token> |
| Headers | Authorization - Bearer <oauth_token>Content-Type - application/json |
| Body | --data {"endDate": "string \| null","id": "string","taxCodeId": "string","startDate": "string"}Example:{ "endDate": "2024-12-31", "id": "8ad09a3f7c7a82be017c7abf8e0a0001", "taxCodeId": "47d2609fda26e8f15d7954299457f92e", "startDate": "2024-01-01" } |

Response body:

{ "id": "8ad0845b917ed52101918d374d8c7afb", "startDate": "2024-01-01", "endDate": "2024-12-31", "taxCodeId": "47d2609fea983539f5ccb72c1c5a7540", "success": true }

## Get Tax Rate Periods

See the following request and a sample of 200 response to get the tax rate periods.

HTTP request:

`GET https://rest.apisandbox.zuora.com/settings/tax-rate-periods`

Request body:

| Key | Value |
| --- | --- |
| Curl | GET https://rest.apisandbox.zuora.com/settings/tax-rate-periods |
| Authorization | Auth Type - Bearer Token <oauth_token> |
| Headers | Authorization - Bearer <oauth_token>Content-Type - application/j |

Response body:

{ "taxRatePeriods": \[ { "id": "47d2609f879ed615ad13264c0f0168ef", "startDate": "2013-01-01", "endDate": null, "taxCodeId": "47d2609fea983539f5ccb72c1c5a7540" }, { "id": "8ad081dd90a5e74f0190ba7523d106b4", "startDate": "2024-07-16", "endDate": null, "taxCodeId": "8ad09c9f8cf2eb2b018cf80cf14e1b13" }, { "id": "47d2609fcfa0611147fc0ef6a3eec6ea", "startDate": "2012-01-01", "endDate": null, "taxCodeId": "47d2609f678df74e6ee2c68fb3572aa1" } \], "success": true }

## Update Tax Rate Periods

To update the Tax rate period, see the following request and a sample of 200 response:

HTTP request:

`PUT https://rest.apisandbox.zuora.com/settings/tax-rate-periods/{id}`

Request body:

| Key | Value |
| --- | --- |
| Curl | PUT https://rest.apisandbox.zuora.com/settings/tax-rate-periods/{id} |
| Authorization | Auth Type - Bearer Token <oauth_token> |
| Headers | Authorization - Bearer <oauth_token>Content-Type - application/j |
| Body | {"startDate": "string","endDate": "srting"} |

Response body:

{ "id": "47d2609f879ed615ad13264c0f0168ef", "startDate": "2025-01-01", "endDate": "2025-12-31", "taxCodeId": "47d2609fea983539f5ccb72c1c5a7540", "success": true }

## Delete Tax Rate Periods

To delete a tax rate period, see the following request and a sample of 200 response:

HTTP request:

DELETE https://rest.apisandbox.zuora.com/settings/tax-rate-periods/{id}

Request body:

| Key | Value |
| --- | --- |
| Curl | DELETE https://rest.apisandbox.zuora.com/settings/tax-rate-periods/{id} |
| Authorization | Auth Type - Bearer Token <oauth_token> |
| Headers | Authorization - Bearer <oauth_token>Content-Type - application/j |

Response body:

{ "success": true }
