---
title: "Reporting"
url: "https://developer.zuora.com/v1-api-reference/older-api/tag/Reporting/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:35:27.440Z"
---

# Reporting

The Zuora Reporting API enables you to access reports that you have created in the Zuora UI, manage report runs, and export the results of report runs.

The endpoints of the Reporting API are the same as the [endpoints of Zuora REST API](https://developer.zuora.com/api-references/api/overview/#section/Introduction/Access-to-the-API). The following table provides some endpoints as reference:

| Environment | API Endpoint |
| --- | --- |
| API Sandbox (US Cloud Data Center 1) | https://rest.sandbox.na.zuora.com |
| Production (US Cloud Data Center 1) | https://rest.na.zuora.com |
| API Sandbox (US Cloud Data Center 2) | https://rest.apisandbox.zuora.com |
| Production (US Cloud Data Center 2) | https://rest.zuora.com |
| API Sandbox (EU Data Center) | https://rest.sandbox.eu.zuora.com |
| Production (EU Data Center) | https://rest.eu.zuora.com |
| US Central Sandbox | https://rest.test.zuora.com |
| EU Central Sandbox | https://rest.test.eu.zuora.com |
| APAC Developer & Central Sandbox | https://rest.test.ap.zuora.com |
| APAC Production | https://rest.ap.zuora.com |

Historically, the endpoints of the Reporting API were different from the endpoints of the Zuora REST API.

Note that you are still able to use the following endpoints, but it is unrecommended and you can only use username and password to authenticate to the Reporting API. We recommend you to use [OAuth](https://developer.zuora.com/rest-api/general-concepts/authentication/) to authenticate to the Reporting API. OAuth only works with new endpoints. The endpoints of the Reporting API were:

| Environment | API Endpoint |
| --- | --- |
| API Sandbox (US Cloud Data Center 1) | https://zconnect.sandbox.na.zuora.com/api/rest/v1 |
| Production (US Cloud Data Center 1) | https://zconnect.na.zuora.com/api/rest/v1 |
| API Sandbox (US Cloud Data Center 2) | https://zconnectsandbox.zuora.com/api/rest/v1 |
| Production (US Cloud Data Center 2) | https://zconnect.zuora.com/api/rest/v1 |
| API Sandbox (EU Data Center) | https://zconnect.sandbox.eu.zuora.com/api/rest/v1 |
| Production (EU Data Center) | https://zconnect.eu.zuora.com/api/rest/v1 |
| US Central Sandbox | https://zconnect-services0001.test.zuora.com/api/rest/v1 |
| EU Central Sandbox | https://zconnect-services0002.test.eu.zuora.com/api/rest/v1 |
| APAC Developer & Central Sandbox | https://zconnect-services0003.test.ap.zuora.com |
| APAC Production | http://zconnect-prod05.ap.zuora.com |
