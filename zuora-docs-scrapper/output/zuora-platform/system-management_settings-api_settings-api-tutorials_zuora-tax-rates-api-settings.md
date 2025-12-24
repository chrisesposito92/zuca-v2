---
title: "Zuora Tax Rates API settings"
url: "https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/zuora-tax-rates-api-settings"
product: "zuora-platform"
scraped_at: "2025-12-24T05:08:20.169Z"
---

# Zuora Tax Rates API settings

Learn how to manage Zuora tax rates through the Settings API.

## Retrieve a list of tax rates

To retrieve a list of tax rates, see the following request and a sample of 200 response:

HTTP request:

`GET https://rest.apisandbox.zuora.com/settings/tax-rate-periods/{ID}/tax-rates?size=100&page=1`

Request body:

| Key | Value |
| --- | --- |
| Curl | GET https://rest.apisandbox.zuora.com/settings/tax-rate-periods/{ID}/tax-rates?size=100&page=1 |
| Authorization | Auth Type - Bearer Token <oauth_token> |
| Headers | Authorization - Bearer <oauth_token>Content-Type - application/json |

Response body:

{ "taxRates": \[ { "id": "8ad081dd90a5e74f0190ba75246f06b5", "taxRatePeriodId": "8ad081dd90a5e74f0190ba7523d106b4", "country": "United States", "state": "Alabama", "county": null, "city": null, "postalCode": null, "taxRegion": null, "taxRate1": 0.08, "taxRateType1": "Percentage", "taxName1": "Sales Tax", "taxJursdiction1": "State", "taxLocationCode1": "", "taxRateDescription1": "Alabama", "taxRate2": 0.0, "taxRateType2": null, "taxName2": null, "taxJursdiction2": null, "taxLocationCode2": null, "taxRateDescription2": null, "taxRate3": 0.0, "taxRateType3": null, "taxName3": null, "taxJursdiction3": null, "taxLocationCode3": null, "taxRateDescription3": null }, { "id": "8ad081dd90a5e74f0190ba75247506b6", "taxRatePeriodId": "8ad081dd90a5e74f0190ba7523d106b4", "country": "United States", "state": "Alaska", "county": null, "city": null, "postalCode": null, "taxRegion": null, "taxRate1": 0.0, "taxRateType1": "Percentage", "taxName1": "Sales Tax", "taxJursdiction1": "State", "taxLocationCode1": "", "taxRateDescription1": "Alaska", "taxRate2": 0.0, "taxRateType2": null, "taxName2": null, "taxJursdiction2": null, "taxLocationCode2": null, "taxRateDescription2": null, "taxRate3": 0.0, "taxRateType3": null, "taxName3": null, "taxJursdiction3": null, "taxLocationCode3": null, "taxRateDescription3": null }, { "id": "8ad081dd90a5e74f0190ba75247b06b7", "taxRatePeriodId": "8ad081dd90a5e74f0190ba7523d106b4", "country": "United States", "state": "Arizona", "county": null, "city": null, "postalCode": null, "taxRegion": null, "taxRate1": 0.056, "taxRateType1": "Percentage", "taxName1": "Sales Tax", "taxJursdiction1": "State", "taxLocationCode1": "", "taxRateDescription1": "Arizona", "taxRate2": 0.0, "taxRateType2": null, "taxName2": null, "taxJursdiction2": null, "taxLocationCode2": null, "taxRateDescription2": null, "taxRate3": 0.0, "taxRateType3": null, "taxName3": null, "taxJursdiction3": null, "taxLocationCode3": null, "taxRateDescription3": null }, { "id": "8ad081dd90a5e74f0190ba75248006b8", "taxRatePeriodId": "8ad081dd90a5e74f0190ba7523d106b4", "country": "United States", "state": "Arkansas", "county": null, "city": null, "postalCode": null, "taxRegion": null, "taxRate1": 0.06, "taxRateType1": "Percentage", "taxName1": "Sales Tax", "taxJursdiction1": "State", "taxLocationCode1": "", "taxRateDescription1": "Arkansas", "taxRate2": 0.0, "taxRateType2": null, "taxName2": null, "taxJursdiction2": null, "taxLocationCode2": null, "taxRateDescription2": null, "taxRate3": 0.0, "taxRateType3": null, "taxName3": null, "taxJursdiction3": null, "taxLocationCode3": null, "taxRateDescription3": null }, { "id": "8ad081dd90a5e74f0190ba75250b06d2", "taxRatePeriodId": "8ad081dd90a5e74f0190ba7523d106b4", "country": "United States", "state": "New Jersey", "county": null, "city": null, "postalCode": null, "taxRegion": null, "taxRate1": 0.07, "taxRateType1": "Percentage", "taxName1": "Sales Tax", "taxJursdiction1": "State", "taxLocationCode1": "", "taxRateDescription1": "New Jersey", "taxRate2": 0.0, "taxRateType2": null, "taxName2": null, "taxJursdiction2": null, "taxLocationCode2": null, "taxRateDescription2": null, "taxRate3": 0.0, "taxRateType3": null, "taxName3": null, "taxJursdiction3": null, "taxLocationCode3": null, "taxRateDescription3": null }, { "id": "8ad081dd90a5e74f0190ba7525c806ec", "taxRatePeriodId": "8ad081dd90a5e74f0190ba7523d106b4", "country": "Italy", "state": null, "county": null, "city": null, "postalCode": null, "taxRegion": null, "taxRate1": 0.2, "taxRateType1": "Percentage", "taxName1": "VAT", "taxJursdiction1": "", "taxLocationCode1": "", "taxRateDescription1": "VAT", "taxRate2": 0.0, "taxRateType2": null, "taxName2": null, "taxJursdiction2": null, "taxLocationCode2": null, "taxRateDescription2": null, "taxRate3": 0.0, "taxRateType3": null, "taxName3": null, "taxJursdiction3": null, "taxLocationCode3": null, "taxRateDescription3": null }, { "id": "8ad081dd90a5e74f0190ba75266c0707", "taxRatePeriodId": "8ad081dd90a5e74f0190ba7523d106b4", "country": "Canada", "state": "Yukon", "county": null, "city": null, "postalCode": null, "taxRegion": null, "taxRate1": 0.05, "taxRateType1": "Percentage", "taxName1": "CDNTax", "taxJursdiction1": "", "taxLocationCode1": "", "taxRateDescription1": "GST", "taxRate2": 0.0, "taxRateType2": null, "taxName2": null, "taxJursdiction2": null, "taxLocationCode2": null, "taxRateDescription2": null, "taxRate3": 0.0, "taxRateType3": null, "taxName3": null, "taxJursdiction3": null, "taxLocationCode3": null, "taxRateDescription3": null } \], "success": true }

## Create Tax Rates

To create a new Tax rate, see the following request and a sample of 200 response:

HTTP request:

`POST https://rest.apisandbox.zuora.com/settings/tax-rate-periods/{taxRatePeriodID}/tax-rates`

Request body:

| Key | Value |
| --- | --- |
| Curl | POST https://rest.apisandbox.zuora.com/settings/tax-rate-periods/{taxRatePeriodID}/tax-rates |
| Authorization | Auth Type - Bearer Token <oauth_token> |
| Headers | Authorization - Bearer <oauth_token>Content-Type - application/json |
| Body | {"taxRates": [{"country": "string","state": "string","taxRate1": number,"taxRateType1": "Percentage","taxName1": "string","taxJurisdiction1": "string","taxLocationCode1": "string","taxRateDescription1": "string"}]}Example:{ "taxRates": [ { "country": "United States", "state": "California", "taxRate1": 0.08, "taxRateType1": "Percentage", "taxName1": "taxName1", "taxJursdiction1": "state", "taxLocationCode1": "000-1", "taxRateDescription1": "taxRateDescription1" } ] } |

Response body:

{ "taxRates": \[ { "id": "8ad08487917ed51f01918ddbf7352ff5", "taxRatePeriodId": "8ad081dd917ed47501918dcd15c954c0", "country": "United States", "state": "California", "county": null, "city": null, "postalCode": null, "taxRegion": null, "taxRate1": 0.08, "taxRateType1": "Percentage", "taxName1": "taxName1", "taxJursdiction1": "state", "taxLocationCode1": "000-1", "taxRateDescription1": "taxRateDescription1", "taxRate2": 0.0, "taxRateType2": null, "taxName2": null, "taxJursdiction2": null, "taxLocationCode2": null, "taxRateDescription2": null, "taxRate3": 0.0, "taxRateType3": null, "taxName3": null, "taxJursdiction3": null, "taxLocationCode3": null, "taxRateDescription3": null } \], "success": true }

## Update Tax Rates

Tax rates cannot be updated. To make changes, you must delete the existing tax rate and create a new one.

## Delete Tax Rates

To delete a tax rate, see the following request and a sample of 200 response:

Note: This API deletes all tax rates for a period.

HTTP request:

`DELETE https://rest.apisandbox.zuora.com/settings/tax-rate-periods/{ID}/tax-rates`

Request body:

| Key | Value |
| --- | --- |
| Curl | DELETE https://rest.apisandbox.zuora.com/settings/tax-rate-periods/{ID}/tax-rates |
| Authorization | Auth Type - Bearer Token <oauth_token> |
| Headers | Authorization - Bearer <oauth_token>Content-Type - application/json |

Response body:

{ "success": true }
