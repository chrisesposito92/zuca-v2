---
title: "Get Tenant Settings"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/reporting-api-reference/overview-of-the-zuora-reporting-api/additional-operations/get-tenant-settings"
product: "zuora-platform"
scraped_at: "2025-12-24T18:49:38.261Z"
---

# Get Tenant Settings

A Reporting API that returns the current tenant settings for allowed email domains for the user making the call

Note:

Contact [Zuora Global Support](https://support.zuora.com/) to enable this feature in your tenant. This feature is currently in development and is subject to change without advance notice.

The Get Tenant Settings Reporting API returns the current tenant settings for allowed email domains for the user making the call.

Get Tenant Settings can tell you if the tenant is currently restricted to sending scheduled report results to a white list of domains. If no domains are returned then your reporting users may send report results using scheduled reports to any email address recipients.

## Request

| Environment | Request |
| --- | --- |
| API Sandbox (US Data Center) | GET https://zconnectsandbox.zuora.com/api/rest/v1/settings |
| Production (US Data Center) | GET https://zconnect.zuora.com/api/rest/v1/settings |
| API Sandbox (EU Data Center) | GET https://zconnect.sandbox.eu.zuora.com/api/rest/v1/settings |
| Production (EU Data Center) | GET https://zconnect.eu.zuora.com/api/rest/v1/settings |
| API Sandbox(US Cloud Data Center) | GET https://zconnect.sandbox.na.zuora.com/api/rest/v1/settings |
| Production (US Cloud Data Center) | GET https://zconnect.na.zuora.com/api/rest/v1/settings |

## Request parameters

There are no request parameters for this call.

## Example

HTTPS Request

`GET https://zconnectsandbox.zuora.com/api/rest/v1/settings`

JSON Response

{ "success" : true, "response" : { "emailDomains" : \[ "CorporationXYZ.com" \] } }

## Exceptions

| Exception | Condition |
| --- | --- |
| Bad Request | The API endpoint is likely malformed. Check the API URL request name space. |
